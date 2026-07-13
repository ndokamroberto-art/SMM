// INSTAGRAM BOT WITH HUMAN BEHAVIOR & IP PROTECTION
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const proxyChain = require('proxy-chain');
const {
  randomDelay,
  humanTyping,
  randomMouseMovement,
  randomScroll,
  getRandomUserAgent,
  getRandomViewport,
  getRandomHeaders,
  humanPause,
  naturalReading,
  generateNaturalComment
} = require('../utils/antiDetection');
const proxyManager = require('../services/proxyManager');

puppeteer.use(StealthPlugin());

class InstagramBot {
  constructor(profile, proxy) {
    this.profile = profile;
    this.proxy = proxy;
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
    this.sessionCookies = null;
    this.actionsPerformed = 0;
    this.maxActionsPerSession = 15;
    this.country = profile.country || 'CM';
  }

  // Initialize browser with anti-detection
  async initialize() {
    const proxyUrl = this.proxy ? 
      `${this.proxy.protocol.toLowerCase()}://${this.proxy.ip}:${this.proxy.port}` : 
      undefined;

    // Get random viewport
    const viewport = getRandomViewport();

    this.browser = await puppeteer.launch({
      headless: false, // Headless is more detectable
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        `--window-size=${viewport.width},${viewport.height}`,
        '--disable-blink-features=AutomationControlled',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-web-security',
        '--disable-features=BlockInsecurePrivateNetworkRequests',
        '--disable-features=OutOfBlinkCors',
        '--disable-features=SameSiteByDefaultCookies',
        '--disable-features=CookiesWithoutSameSiteMustBeSecure',
        proxyUrl ? `--proxy-server=${proxyUrl}` : ''
      ].filter(Boolean),
      defaultViewport: viewport
    });

    this.page = await this.browser.newPage();

    // Set random user agent
    await this.page.setUserAgent(getRandomUserAgent());

    // Set random viewport
    await this.page.setViewport(viewport);

    // Set random headers
    const headers = getRandomHeaders();
    await this.page.setExtraHTTPHeaders(headers);

    // Random starting scroll
    await randomScroll(this.page, 1);

    return this;
  }

  // Human-like login
  async login() {
    try {
      await this.page.goto('https://www.instagram.com/accounts/login/', {
        waitUntil: 'networkidle2',
        timeout: 45000
      });

      // Random pause before typing
      await humanPause(2000, 5000);

      // Human-like typing for username
      await humanTyping(this.page, 'input[name="username"]', this.profile.username);
      await randomDelay(500, 1500);

      // Human-like typing for password
      await humanTyping(this.page, 'input[name="password"]', this.profile.password);
      await randomDelay(500, 1500);

      // Random mouse movement
      await randomMouseMovement(this.page);

      // Click login
      await this.page.click('button[type="submit"]');
      
      // Wait for navigation
      await this.page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 });

      // Handle "Save Info" popup
      try {
        await this.page.waitForSelector('button:contains("Not Now")', { timeout: 5000 });
        await this.page.click('button:contains("Not Now")');
        await randomDelay(1000, 2000);
      } catch (e) {}

      // Handle "Turn On Notifications" popup
      try {
        await this.page.waitForSelector('button:contains("Not Now")', { timeout: 5000 });
        await this.page.click('button:contains("Not Now")');
        await randomDelay(1000, 2000);
      } catch (e) {}

      this.isLoggedIn = true;
      this.sessionCookies = await this.page.cookies();

      // Random scroll after login
      await randomScroll(this.page, 2);
      await humanPause(2000, 4000);

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  // Human-like follow
  async followUser(targetUsername) {
    if (!this.isLoggedIn) {
      await this.login();
    }

    try {
      // Random pause before action
      await humanPause(2000, 5000);

      await this.page.goto(`https://www.instagram.com/${targetUsername}/`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await humanPause(2000, 4000);
      await randomScroll(this.page, 1);
      
      // Random mouse movement
      await randomMouseMovement(this.page);

      // Find follow button
      const followButton = await this.page.waitForSelector('button:contains("Follow")', {
        timeout: 10000
      });

      if (followButton) {
        await randomDelay(500, 1500);
        
        // Random mouse movement before click
        await randomMouseMovement(this.page);
        
        await followButton.click();
        
        // Wait for button to change
        await this.page.waitForFunction(
          () => document.querySelector('button:contains("Following")'),
          { timeout: 10000 }
        );

        // Random pause after action
        await humanPause(2000, 4000);
        await randomScroll(this.page, 1);

        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Follow failed:', error);
      // Maybe rotate proxy
      if (error.message.includes('blocked') || error.message.includes('429')) {
        await this.rotateProxy();
      }
      return false;
    }
  }

  // Human-like like
  async likePost(postUrl) {
    if (!this.isLoggedIn) {
      await this.login();
    }

    try {
      await humanPause(2000, 5000);

      await this.page.goto(postUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await humanPause(2000, 4000);
      await randomScroll(this.page, 2);
      
      // Natural reading time
      await naturalReading(this.page);

      const likeButton = await this.page.waitForSelector('svg[aria-label="Like"]', {
        timeout: 10000
      });

      if (likeButton) {
        await randomDelay(500, 1500);
        await randomMouseMovement(this.page);
        await likeButton.click();
        
        // Wait for like to register
        await this.page.waitForSelector('svg[aria-label="Unlike"]', {
          timeout: 10000
        });

        await randomScroll(this.page, 1);
        await humanPause(1000, 3000);

        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Like failed:', error);
      if (error.message.includes('blocked') || error.message.includes('429')) {
        await this.rotateProxy();
      }
      return false;
    }
  }

  // Human-like comment
  async commentPost(postUrl, commentText = null) {
    if (!this.isLoggedIn) {
      await this.login();
    }

    try {
      await humanPause(3000, 6000);

      await this.page.goto(postUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await humanPause(2000, 4000);
      await randomScroll(this.page, 2);
      await naturalReading(this.page);

      // Generate natural comment if not provided
      if (!commentText) {
        commentText = generateNaturalComment(this.country, 'instagram');
      }

      const commentInput = await this.page.waitForSelector('textarea[placeholder*="Add a comment"]', {
        timeout: 10000
      });

      if (commentInput) {
        await commentInput.click();
        await randomDelay(500, 1500);
        
        // Human-like typing
        await humanTyping(this.page, 'textarea[placeholder*="Add a comment"]', commentText);
        await randomDelay(500, 1500);
        
        // Random mouse movement
        await randomMouseMovement(this.page);
        
        await this.page.click('button:contains("Post")');
        
        // Wait for comment to appear
        await this.page.waitForSelector('div:contains("' + commentText.substring(0, 20) + '")', {
          timeout: 10000
        });

        await humanPause(2000, 4000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Comment failed:', error);
      if (error.message.includes('blocked') || error.message.includes('429')) {
        await this.rotateProxy();
      }
      return false;
    }
  }

  // Human-like story view
  async viewStory(username) {
    if (!this.isLoggedIn) {
      await this.login();
    }

    try {
      await humanPause(2000, 4000);

      await this.page.goto(`https://www.instagram.com/${username}/`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await humanPause(2000, 3000);
      await randomScroll(this.page, 1);

      const storyCircle = await this.page.waitForSelector('div[role="button"]:contains("Story")', {
        timeout: 10000
      });

      if (storyCircle) {
        await randomMouseMovement(this.page);
        await storyCircle.click();
        
        // View story for random human time
        const viewTime = 3000 + Math.floor(Math.random() * 7000);
        await humanPause(viewTime, viewTime + 2000);

        // Random clicks through story
        const clicks = Math.floor(Math.random() * 3);
        for (let i = 0; i < clicks; i++) {
          await randomDelay(2000, 5000);
          await this.page.click('body');
        }

        // Close story
        await this.page.click('body');
        
        await humanPause(1000, 3000);
        this.actionsPerformed++;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Story view failed:', error);
      return false;
    }
  }

  // Human-like explore
  async explore() {
    if (!this.isLoggedIn) {
      await this.login();
    }

    try {
      await humanPause(2000, 4000);

      await this.page.goto('https://www.instagram.com/explore/', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await humanPause(2000, 4000);
      await randomScroll(this.page, 3);
      await naturalReading(this.page);

      // Maybe like a random post
      if (Math.random() > 0.5) {
        const posts = await this.page.$$('article a');
        if (posts.length > 0) {
          const randomPost = posts[Math.floor(Math.random() * posts.length)];
          await randomPost.click();
          await humanPause(2000, 4000);
          await randomScroll(this.page, 2);
          
          // Maybe like
          if (Math.random() > 0.5) {
            const likeButton = await this.page.$('svg[aria-label="Like"]');
            if (likeButton) {
              await randomMouseMovement(this.page);
              await likeButton.click();
              await humanPause(1000, 2000);
            }
          }
          
          // Maybe comment
          if (Math.random() > 0.7) {
            const comment = generateNaturalComment(this.country, 'instagram');
            const commentInput = await this.page.$('textarea[placeholder*="Add a comment"]');
            if (commentInput) {
              await commentInput.click();
              await humanTyping(this.page, 'textarea[placeholder*="Add a comment"]', comment);
              await this.page.click('button:contains("Post")');
              await humanPause(1000, 2000);
            }
          }
        }
      }

      this.actionsPerformed++;
      return true;
    } catch (error) {
      console.error('Explore failed:', error);
      return false;
    }
  }

  // Full human session
  async fullSession(targetUsername = null) {
    const actions = [
      () => this.explore(),
      () => this.viewStory('explore'),
      () => this.likePost('https://www.instagram.com/explore/'),
      () => this.followUser(targetUsername || 'explore')
    ];

    // Random number of actions (5-10)
    const actionCount = Math.floor(Math.random() * 5) + 5;
    
    for (let i = 0; i < actionCount; i++) {
      if (this.actionsPerformed >= this.maxActionsPerSession) {
        break;
      }
      
      const action = actions[Math.floor(Math.random() * actions.length)];
      await action.call(this);
      
      // Random pause between actions
      await humanPause(3000, 8000);
    }
  }

  // Rotate proxy on detection
  async rotateProxy() {
    const newProxy = await proxyManager.getProxy();
    if (newProxy) {
      this.proxy = newProxy;
      
      // Close current browser
      if (this.browser) {
        await this.browser.close();
      }
      
      // Reinitialize with new proxy
      await this.initialize();
      this.isLoggedIn = false;
      this.actionsPerformed = 0;
      
      return true;
    }
    return false;
  }

  // Cleanup
  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

module.exports = InstagramBot;