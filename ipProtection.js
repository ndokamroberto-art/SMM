// IP PROTECTION - ANTI-BAN SYSTEM
const axios = require('axios');
const proxyManager = require('./proxyManager');
const logger = require('../utils/logger');

class IPProtection {
  constructor() {
    this.ipBlacklist = new Set();
    this.requestCounts = new Map();
    this.maxRequestsPerHour = 50;
    this.banThreshold = 100;
    this.requestWindow = 3600000; // 1 hour
    this.startMonitoring();
  }

  // Start monitoring IP usage
  startMonitoring() {
    setInterval(() => {
      this.clearOldEntries();
    }, 60000); // Check every minute
  }

  // Clear old request counts
  clearOldEntries() {
    const now = Date.now();
    for (const [ip, data] of this.requestCounts.entries()) {
      if (now - data.timestamp > this.requestWindow) {
        this.requestCounts.delete(ip);
      }
    }
  }

  // Check if IP is blacklisted
  isBlacklisted(ip) {
    return this.ipBlacklist.has(ip);
  }

  // Add IP to blacklist
  blacklistIP(ip, reason) {
    this.ipBlacklist.add(ip);
    logger.warn(`IP ${ip} blacklisted: ${reason}`);
  }

  // Check if IP is allowed
  isAllowed(ip) {
    if (this.isBlacklisted(ip)) {
      return false;
    }

    // Check rate limit
    const now = Date.now();
    const entry = this.requestCounts.get(ip);
    
    if (entry) {
      if (now - entry.timestamp > this.requestWindow) {
        // Reset window
        this.requestCounts.set(ip, { count: 1, timestamp: now });
        return true;
      }

      if (entry.count >= this.maxRequestsPerHour) {
        logger.warn(`IP ${ip} exceeded rate limit (${entry.count}/${this.maxRequestsPerHour})`);
        return false;
      }

      entry.count++;
      return true;
    }

    // First request
    this.requestCounts.set(ip, { count: 1, timestamp: now });
    return true;
  }

  // Get a proxy for making requests
  async getProxyForRequest() {
    return await proxyManager.getProxy();
  }

  // Make a request with IP protection
  async makeProtectedRequest(config) {
    // Get proxy
    const proxy = await this.getProxyForRequest();
    if (!proxy) {
      logger.warn('No proxy available, making direct request');
      return await axios(config);
    }

    // Build proxy config
    const proxyConfig = {
      host: proxy.ip,
      port: proxy.port,
      protocol: proxy.protocol.toLowerCase()
    };

    // Add proxy to request
    const requestConfig = {
      ...config,
      proxy: proxyConfig,
      timeout: config.timeout || 30000
    };

    try {
      const response = await axios(requestConfig);
      return response;
    } catch (error) {
      // Mark proxy as failed
      await proxyManager.markProxyFailed(proxy.id);
      
      // If proxy failed, try direct request
      logger.warn(`Proxy ${proxy.ip} failed, trying direct request`);
      return await axios(config);
    }
  }

  // Rotate IP for a session
  async rotateIP() {
    const proxy = await proxyManager.getProxy();
    if (proxy) {
      logger.info(`IP rotated to ${proxy.ip}:${proxy.port}`);
      return proxy;
    }
    return null;
  }

  // Get multiple proxies for batch operations
  async getMultipleProxies(count) {
    const proxies = await prisma.proxy.findMany({
      where: { isActive: true, failsCount: { lt: 3 } },
      take: count,
      orderBy: { lastUsed: 'asc' }
    });

    return proxies;
  }
}

module.exports = new IPProtection();