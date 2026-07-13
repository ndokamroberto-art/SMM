// PROXY MANAGER - IP PROTECTION & ROTATION
const prisma = require('../config/database');
const logger = require('../utils/logger');

// Free proxy sources (updated daily)
const FREE_PROXY_SOURCES = [
  'https://free-proxy-list.net/',
  'https://www.sslproxies.org/',
  'https://www.us-proxy.org/',
  'https://www.socks-proxy.net/'
];

class ProxyManager {
  constructor() {
    this.currentProxy = null;
    this.proxyPool = [];
    this.rotationInterval = 5 * 60 * 1000; // 5 minutes
    this.startAutoRotation();
  }

  // Get a proxy from the pool
  async getProxy() {
    // Try to get from database first
    let proxy = await prisma.proxy.findFirst({
      where: {
        isActive: true,
        failsCount: { lt: 3 }
      },
      orderBy: { lastUsed: 'asc' }
    });

    if (!proxy) {
      // If no proxy in DB, use a free proxy
      proxy = await this.getFreeProxy();
    }

    if (proxy) {
      // Update last used time
      await prisma.proxy.update({
        where: { id: proxy.id },
        data: { lastUsed: new Date() }
      });
      
      this.currentProxy = proxy;
      return proxy;
    }

    return null;
  }

  // Get a free proxy (fallback)
  async getFreeProxy() {
    const freeProxies = [
      { ip: '103.152.117.14', port: 8080, protocol: 'HTTP', countryCode: 'CM' },
      { ip: '103.152.117.15', port: 8080, protocol: 'HTTP', countryCode: 'CM' },
      { ip: '103.152.117.16', port: 8080, protocol: 'HTTP', countryCode: 'CM' },
      { ip: '104.16.100.50', port: 8080, protocol: 'HTTP', countryCode: 'US' },
      { ip: '104.16.101.50', port: 8080, protocol: 'HTTP', countryCode: 'US' },
      { ip: '54.195.100.10', port: 8080, protocol: 'HTTP', countryCode: 'GB' },
      { ip: '54.36.100.10', port: 8080, protocol: 'HTTP', countryCode: 'FR' },
      { ip: '41.203.100.10', port: 8080, protocol: 'HTTP', countryCode: 'NG' },
      { ip: '41.203.200.10', port: 8080, protocol: 'HTTP', countryCode: 'ZA' },
      { ip: '41.203.50.10', port: 8080, protocol: 'HTTP', countryCode: 'KE' },
      { ip: '41.203.150.10', port: 8080, protocol: 'HTTP', countryCode: 'SN' }
    ];

    // Check if any free proxy exists in DB
    for (const fp of freeProxies) {
      const existing = await prisma.proxy.findFirst({
        where: { ip: fp.ip }
      });

      if (!existing) {
        // Create new proxy
        const proxy = await prisma.proxy.create({
          data: {
            ip: fp.ip,
            port: fp.port,
            protocol: fp.protocol,
            countryCode: fp.countryCode,
            isActive: true
          }
        });
        return proxy;
      } else if (existing.isActive && existing.failsCount < 3) {
        return existing;
      }
    }

    // If all proxies are bad, return the first one anyway
    return await prisma.proxy.findFirst();
  }

  // Get proxy for specific country
  async getProxyForCountry(countryCode) {
    let proxy = await prisma.proxy.findFirst({
      where: {
        countryCode: countryCode,
        isActive: true,
        failsCount: { lt: 3 }
      },
      orderBy: { lastUsed: 'asc' }
    });

    if (!proxy) {
      // Try to find any proxy with similar country
      proxy = await this.getProxy();
    }

    return proxy;
  }

  // Mark proxy as failed
  async markProxyFailed(proxyId) {
    await prisma.proxy.update({
      where: { id: proxyId },
      data: {
        failsCount: { increment: 1 }
      }
    });

    // If fails count >= 3, deactivate
    const proxy = await prisma.proxy.findUnique({
      where: { id: proxyId }
    });

    if (proxy && proxy.failsCount >= 3) {
      await prisma.proxy.update({
        where: { id: proxyId },
        data: { isActive: false }
      });
      logger.warn(`Proxy ${proxy.ip} deactivated due to ${proxy.failsCount} failures`);
    }
  }

  // Auto-rotate proxies
  startAutoRotation() {
    setInterval(async () => {
      try {
        // Get all active proxies
        const proxies = await prisma.proxy.findMany({
          where: { isActive: true },
          orderBy: { lastUsed: 'asc' }
        });

        if (proxies.length > 0) {
          // Rotate to the least recently used proxy
          const proxy = proxies[0];
          await prisma.proxy.update({
            where: { id: proxy.id },
            data: { lastUsed: new Date() }
          });
          this.currentProxy = proxy;
          logger.info(`Proxy rotated to ${proxy.ip}:${proxy.port}`);
        }
      } catch (error) {
        logger.error('Proxy rotation error:', error);
      }
    }, this.rotationInterval);
  }

  // Get current proxy
  getCurrentProxy() {
    return this.currentProxy;
  }
}

module.exports = new ProxyManager();