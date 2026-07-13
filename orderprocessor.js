// UPDATED ORDER PROCESSOR WITH HUMAN BEHAVIOR & IP PROTECTION
const prisma = require('../config/database');
const logger = require('../utils/logger');
const CountryProfileMatcher = require('./countryProfileMatcher');
const proxyManager = require('./proxyManager');
const ipProtection = require('./ipProtection');

// Import platform bots with human behavior
const InstagramBot = require('../bots/instagramBot');
const TikTokBot = require('../bots/tiktokBot');
const YouTubeBot = require('../bots/youtubeBot');
const FacebookBot = require('../bots/facebookBot');
const TwitterBot = require('../bots/twitterBot');

class OrderProcessor {
  static async processOrder(orderId) {
    try {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { service: true }
      });

      if (!order || order.status !== 'PENDING') {
        return;
      }

      // Update to processing
      await prisma.order.update({
        where: { id: orderId },
        data: { status: 'PROCESSING' }
      });

      // Get country and platform
      const country = order.countryTarget || 'CM';
      const platform = order.service.category;
      const profileCount = Math.min(order.quantity, 100); // Max 100 per batch

      // Get proxy for this country
      const proxy = await proxyManager.getProxyForCountry(country);
      if (!proxy) {
        logger.warn(`No proxy available for country ${country}, using fallback`);
      }

      // Get matching profiles for the country
      const profiles = CountryProfileMatcher.getMultipleProfiles(
        country, 
        platform, 
        profileCount
      );

      // Process each profile with human behavior
      const processedProfiles = [];
      const botErrors = [];

      for (const profile of profiles) {
        try {
          // Create bot profile in database
          const bot = await prisma.botProfile.create({
            data: {
              username: profile.username,
              password: profile.password,
              platform: platform,
              fullName: profile.fullName,
              bio: profile.bio,
              profilePic: profile.profilePic,
              email: profile.email,
              phoneNumber: profile.phoneNumber,
              country: country,
              proxyId: proxy ? proxy.id : null,
              isActive: true,
              isLoggedIn: false
            }
          });

          // Initialize the appropriate bot with human behavior
          let botInstance;
          switch (platform) {
            case 'INSTAGRAM':
              botInstance = new InstagramBot(profile, proxy);
              break;
            case 'TIKTOK':
              botInstance = new TikTokBot(profile, proxy);
              break;
            case 'YOUTUBE':
              botInstance = new YouTubeBot(profile, proxy);
              break;
            case 'FACEBOOK':
              botInstance = new FacebookBot(profile, proxy);
              break;
            case 'TWITTER':
              botInstance = new TwitterBot(profile, proxy);
              break;
            default:
              botInstance = new InstagramBot(profile, proxy);
          }

          // Initialize browser with anti-detection
          await botInstance.initialize();

          // Perform human-like actions based on service type
          switch (order.serviceType) {
            case 'DRIP':
              // Slow, natural growth - do a few actions, wait, repeat
              await botInstance.fullSession(order.targetUrl);
              await botInstance.fullSession(order.targetUrl);
              break;
            case 'INSTANT':
              // Faster but still human-like
              await botInstance.login();
              await botInstance.followUser(order.targetUrl);
              await botInstance.likePost(order.targetUrl);
              break;
            case 'TARGETED':
              // Targeted country - focus on country-specific actions
              await botInstance.fullSession(order.targetUrl);
              await botInstance.commentPost(order.targetUrl);
              break;
            default:
              await botInstance.fullSession(order.targetUrl);
          }

          // Close browser
          await botInstance.close();

          // Update bot status
          await prisma.botProfile.update({
            where: { id: bot.id },
            data: {
              isLoggedIn: true,
              lastUsed: new Date()
            }
          });

          processedProfiles.push(bot);
          
          // Random pause between profiles (human-like)
          await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 3000) + 1000));

        } catch (error) {
          logger.error(`Error processing profile ${profile.username}:`, error);
          botErrors.push({ profile: profile.username, error: error.message });
          
          // If error is proxy-related, mark proxy as failed
          if (error.message.includes('blocked') || error.message.includes('429')) {
            if (proxy) {
              await proxyManager.markProxyFailed(proxy.id);
            }
          }
        }
      }

      // Update order with delivered count
      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: processedProfiles.length > 0 ? 'COMPLETED' : 'FAILED',
          currentCount: processedProfiles.length,
          deliveredCount: processedProfiles.length,
          completedAt: new Date()
        }
      });

      logger.info(`Order ${orderId} completed with ${processedProfiles.length} profiles from ${country}`);

      return { 
        success: true, 
        profiles: processedProfiles,
        errors: botErrors
      };
    } catch (error) {
      logger.error(`Order ${orderId} failed:`, error);
      await prisma.order.update({
        where: { id: orderId },
        data: { status: 'FAILED' }
      });
      return { success: false, error: error.message };
    }
  }

  static async queueOrder(orderId) {
    // Process immediately with human behavior
    return await this.processOrder(orderId);
  }
}

module.exports = OrderProcessor;