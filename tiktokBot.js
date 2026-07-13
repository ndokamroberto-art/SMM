// TIKTOK BOT WITH HUMAN BEHAVIOR & IP PROTECTION
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const {
  randomDelay,
  humanTyping,
  randomMouseMovement,
  randomScroll,
  getRandomUserAgent,
  getRandomViewport,
  getRandomHeaders,
  humanPause,
  generateNaturalComment
} = require('../utils/antiDetection');
const proxyManager = require('../services/proxyManager');

puppeteer.use(StealthPlugin());

class TikTokBot {
  constructor(profile, proxy) {
    this.profile = profile;
    this.proxy = proxy;
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
    this.actionsPerformed = 0;
    this.maxActionsPerSession = 12;
    this.country = profile.country || 'CM';
  }

  async initialize() {
    const proxyUrl = this.proxy ? 
      `${this.proxy.protocol.toLowerCase()}://${this.proxy.ip}:${this.proxy.port}` : 
      undefined;

    const viewport = getRandomViewport();

    this.browser = await puppeteer.launch({
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        `--window-size=${viewport.width},${viewport.height}`,
        '--disable-blink-features=AutomationControlled',
        proxyUrl ? `--proxy-server=${proxyUrl}` : ''
      ].filter(Boolean),
      defaultViewport: viewport
    });

    this.page = await this.browser.newPage();
    await this.page.setUserAgent(getRandomUserAgent());
    await this.page.setViewport(viewport);
    await this.page.setExtraHTTPHeaders(getRandomHeaders());

    return this;
  }

  async login() {
    try {
      await this.page.goto('https://www.tiktok.com/login', {
        waitUntil: 'networkidle2',
        timeout: 45000
      });

      await humanPause(2000, 5000);
      
      // TikTok login flow (simplified)
      // In production, use proper login flow
      
      this.isLoggedIn = true;
      return true;
    } catch (error) {
      console.error('TikTok login failed:', error);
      return false;
    }
  }

  async followUser(username) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(`https://www.tiktok.com/@${username}`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 1);
      await randomMouseMovement(this.page);

      const followButton = await this.page.waitForSelector('button:contains("Follow")', {
        timeout: 10000
      });

      if (followButton) {
        await randomDelay(500, 1500);
        await followButton.click();
        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('TikTok follow failed:', error);
      return false;
    }
  }

  async likeVideo(videoUrl) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(videoUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      const likeButton = await this.page.waitForSelector('[data-e2e="like-icon"]', {
        timeout: 10000
      });

      if (likeButton) {
        await randomMouseMovement(this.page);
        await likeButton.click();
        await humanPause(1000, 3000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('TikTok like failed:', error);
      return false;
    }
  }

  async commentVideo(videoUrl, commentText = null) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(3000, 5000);
      await this.page.goto(videoUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      if (!commentText) {
        commentText = generateNaturalComment(this.country, 'tiktok');
      }

      const commentInput = await this.page.waitForSelector('textarea[placeholder*="Comment"]', {
        timeout: 10000
      });

      if (commentInput) {
        await commentInput.click();
        await humanTyping(this.page, 'textarea[placeholder*="Comment"]', commentText);
        await randomDelay(500, 1500);
        await this.page.click('button:contains("Post")');
        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('TikTok comment failed:', error);
      return false;
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

module.exports = TikTokBot;