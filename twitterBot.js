// TWITTER BOT WITH HUMAN BEHAVIOR & IP PROTECTION
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

class TwitterBot {
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
      await this.page.goto('https://twitter.com/login', {
        waitUntil: 'networkidle2',
        timeout: 45000
      });

      await humanPause(2000, 5000);
      await humanTyping(this.page, 'input[name="text"]', this.profile.username);
      await randomDelay(500, 1500);
      await this.page.click('span:contains("Next")');
      await humanPause(2000, 4000);
      await humanTyping(this.page, 'input[name="password"]', this.profile.password);
      await randomDelay(500, 1500);
      await randomMouseMovement(this.page);
      await this.page.click('span:contains("Log in")');
      await this.page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 });

      this.isLoggedIn = true;
      return true;
    } catch (error) {
      console.error('Twitter login failed:', error);
      return false;
    }
  }

  async followUser(username) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(`https://twitter.com/${username}`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 1);
      await randomMouseMovement(this.page);

      const followButton = await this.page.waitForSelector('[aria-label*="Follow"]', {
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
      console.error('Twitter follow failed:', error);
      return false;
    }
  }

  async likeTweet(tweetUrl) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(tweetUrl, {
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
      console.error('Twitter like failed:', error);
      return false;
    }
  }

  async retweet(tweetUrl) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(2000, 4000);
      await this.page.goto(tweetUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      const retweetButton = await this.page.waitForSelector('[aria-label*="Retweet"]', {
        timeout: 10000
      });

      if (retweetButton) {
        await randomMouseMovement(this.page);
        await retweetButton.click();
        await humanPause(1000, 2000);
        
        // Confirm retweet
        const confirmButton = await this.page.waitForSelector('[data-testid="retweetConfirm"]', {
          timeout: 5000
        });
        if (confirmButton) {
          await confirmButton.click();
        }
        
        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Twitter retweet failed:', error);
      return false;
    }
  }

  async commentTweet(tweetUrl, commentText = null) {
    if (!this.isLoggedIn) await this.login();

    try {
      await humanPause(3000, 5000);
      await this.page.goto(tweetUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      if (!commentText) {
        commentText = generateNaturalComment(this.country, 'twitter');
      }

      const commentInput = await this.page.waitForSelector('[aria-label*="Tweet your reply"]', {
        timeout: 10000
      });

      if (commentInput) {
        await commentInput.click();
        await humanTyping(this.page, '[aria-label*="Tweet your reply"]', commentText);
        await randomDelay(500, 1500);
        await this.page.click('[data-testid="tweetButton"]');
        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Twitter comment failed:', error);
      return false;
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

module.exports = TwitterBot;