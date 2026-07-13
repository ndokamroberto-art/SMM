// FACEBOOK BOT WITH HUMAN BEHAVIOR & IP PROTECTION
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

puppeteer.use(StealthPlugin());

class FacebookBot {
  constructor(profile, proxy) {
    this.profile = profile;
    this.proxy = proxy;
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
    this.actionsPerformed = 0;
    this.maxActionsPerSession = 10;
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
      await this.page.goto('https://www.facebook.com/login', {
        waitUntil: 'networkidle2',
        timeout: 45000
      });

      await humanPause(2000, 5000);
      await humanTyping(this.page, 'input[name="email"]', this.profile.email || this.profile.username);
      await randomDelay(500, 1500);
      await humanTyping(this.page, 'input[name="pass"]', this.profile.password);
      await randomDelay(500, 1500);
      await randomMouseMovement(this.page);
      await this.page.click('button[name="login"]');
      await this.page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 });

      this.isLoggedIn = true;
      return true;
    } catch (error) {
      console.error('Facebook login failed:', error);
      return false;
    }
  }

  async likePage(pageUrl) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(pageUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 1);
      await randomMouseMovement(this.page);

      const likeButton = await this.page.waitForSelector('[aria-label*="Like"]', {
        timeout: 10000
      });

      if (likeButton) {
        await randomDelay(500, 1500);
        await likeButton.click();
        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Facebook like page failed:', error);
      return false;
    }
  }

  async likePost(postUrl) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(postUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      const likeButton = await this.page.waitForSelector('[aria-label*="Like"]', {
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
      console.error('Facebook like post failed:', error);
      return false;
    }
  }

  async commentPost(postUrl, commentText = null) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(3000, 5000);
      await this.page.goto(postUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      if (!commentText) {
        commentText = generateNaturalComment(this.country, 'facebook');
      }

      const commentInput = await this.page.waitForSelector('[aria-label*="Comment"]', {
        timeout: 10000
      });

      if (commentInput) {
        await commentInput.click();
        await humanTyping(this.page, '[aria-label*="Comment"]', commentText);
        await randomDelay(500, 1500);
        await this.page.click('[aria-label*="Post"]');
        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Facebook comment failed:', error);
      return false;
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

module.exports = FacebookBot;