// HUMAN-LIKE BEHAVIOR ENGINE - ANTI-DETECTION

// Random delay between actions (human-like)
function randomDelay(min = 500, max = 3000) {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
}

// Human-like typing with random speed variations
async function humanTyping(page, selector, text) {
  await page.click(selector);
  await randomDelay(200, 600);
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // Random pauses between keystrokes (50-250ms)
    await page.keyboard.type(char, { delay: Math.floor(Math.random() * 200) + 50 });
    
    // Random occasional pause (like human thinking)
    if (Math.random() < 0.05) {
      await randomDelay(300, 800);
    }
  }
}

// Random mouse movement (human-like)
async function randomMouseMovement(page) {
  const moves = Math.floor(Math.random() * 5) + 3;
  for (let i = 0; i < moves; i++) {
    const x = Math.floor(Math.random() * 1500) + 100;
    const y = Math.floor(Math.random() * 800) + 100;
    
    await page.mouse.move(x, y, {
      steps: Math.floor(Math.random() * 50) + 20
    });
    
    await randomDelay(100, 400);
  }
}

// Random scroll (human-like)
async function randomScroll(page, times = 3) {
  for (let i = 0; i < times; i++) {
    const direction = Math.random() > 0.5 ? 'down' : 'up';
    const distance = Math.floor(Math.random() * 500) + 200;
    
    await page.evaluate((dir, dist) => {
      window.scrollBy({
        top: dir === 'down' ? dist : -dist,
        behavior: 'smooth'
      });
    }, direction, distance);
    
    await randomDelay(500, 2000);
  }
}

// Random user agent rotation
function getRandomUserAgent() {
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0'
  ];
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

// Random viewport size (human-like)
function getRandomViewport() {
  const viewports = [
    { width: 1920, height: 1080 },
    { width: 1366, height: 768 },
    { width: 1536, height: 864 },
    { width: 1440, height: 900 },
    { width: 1280, height: 720 },
    { width: 1600, height: 900 },
    { width: 1680, height: 1050 },
    { width: 1024, height: 768 }
  ];
  return viewports[Math.floor(Math.random() * viewports.length)];
}

// Random country headers
function getRandomHeaders() {
  const languages = [
    'en-US,en;q=0.9',
    'en-GB,en;q=0.9',
    'fr-FR,fr;q=0.9,en;q=0.8',
    'es-ES,es;q=0.9,en;q=0.8',
    'de-DE,de;q=0.9,en;q=0.8',
    'it-IT,it;q=0.9,en;q=0.8',
    'pt-PT,pt;q=0.9,en;q=0.8',
    'nl-NL,nl;q=0.9,en;q=0.8'
  ];
  
  return {
    'Accept-Language': languages[Math.floor(Math.random() * languages.length)],
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Cache-Control': 'max-age=0'
  };
}

// Human-like pause (thinking time)
async function humanPause(min = 1000, max = 5000) {
  const pause = Math.floor(Math.random() * (max - min + 1)) + min;
  await new Promise(resolve => setTimeout(resolve, pause));
}

// Random reading time (like reading content)
async function naturalReading(page, min = 3000, max = 15000) {
  const readTime = Math.floor(Math.random() * (max - min + 1)) + min;
  await randomScroll(page);
  await randomDelay(readTime, readTime + 2000);
}

// Natural comment generation
function generateNaturalComment(country, platform) {
  const comments = {
    'US': {
      instagram: [
        'Great post! Love the content 🔥',
        'This is amazing! Keep it up 💪',
        'Absolutely love this! 😍',
        'So inspiring! ✨',
        'This made my day! 🙌',
        'Incredible work! 👏',
        'Beautiful! ❤️',
        'Wow! Just wow! 🌟',
        'This is everything! 💯',
        'Perfection! 🎯'
      ],
      tiktok: [
        'This is so good! 🔥',
        'Obsessed with this! 😍',
        'Literally me! 💯',
        'This trend is everything!',
        'I can\'t stop watching!',
        'This is iconic! 👏',
        'Vibes! ✨',
        'This made my day!',
        'So relatable!',
        'The best one yet!'
      ],
      youtube: [
        'Great video! Keep it up!',
        'This content is amazing!',
        'I love this channel!',
        'Best video I\'ve seen today!',
        'So informative! Thank you!',
        'You deserve more subscribers!',
        'This is quality content!',
        'Can\'t wait for the next one!',
        'This is gold!',
        'Absolutely worth watching!'
      ]
    },
    'CM': {
      instagram: [
        'Super contenu! 🔥',
        'Vraiment incroyable! 💪',
        'J\'adore! 😍',
        'Tellement inspirant! ✨',
        'Génial! 👏',
        'Magnifique! ❤️',
        'Wow! Impresionnant! 🌟',
        'Excellent travail! 💯',
        'Parfait! 🎯',
        'Trop beau!'
      ],
      tiktok: [
        'C\'est tellement bon! 🔥',
        'Je suis fan! 😍',
        'Encore! 🔄',
        'J\'adore ce contenu!',
        'Trop stylé! ✨',
        'C\'est trop fort! 👏',
        'Les vibes! 🎵',
        'Vraiment cool!',
        'Excellent!',
        'Le meilleur!'
      ],
      youtube: [
        'Super vidéo! Continue!',
        'Contenu de qualité!',
        'J\'adore ta chaîne!',
        'Meilleure vidéo!',
        'Tellement informatif! Merci!',
        'Tu mérites plus d\'abonnés!',
        'Contenu premium!',
        'Hâte de voir la suite!',
        'C\'est de l\'or!',
        'Vraiment intéressant!'
      ]
    },
    'NG': {
      instagram: [
        'Great content! 🔥',
        'Love this! 💪',
        'This is amazing! 😍',
        'So inspiring! ✨',
        'Beautiful! 👏',
        'Wonderful! ❤️',
        'Keep it up! 🌟',
        'Excellent! 💯',
        'Perfect! 🎯',
        'Absolutely love this!'
      ],
      tiktok: [
        'This is fire! 🔥',
        'I love this! 😍',
        'Too good! 💯',
        'This is everything!',
        'Iconic! 👏',
        'Vibes! ✨',
        'Amazing!',
        'So relatable!',
        'The best!',
        'Obsessed!'
      ],
      youtube: [
        'Great video! Keep going!',
        'Quality content!',
        'Love this channel!',
        'Best video!',
        'So informative! Thanks!',
        'You deserve more subs!',
        'Top quality!',
        'Can\'t wait!',
        'Gold content!',
        'Really interesting!'
      ]
    }
  };

  // Default comments if country not found
  const defaultComments = [
    'Great post! 🔥', 'Amazing! 😍', 'Love this! ✨', 'Wow! 👏', 'Beautiful! ❤️',
    'Incredible! 💪', 'Fantastic! 🌟', 'Perfect! 💯', 'Awesome! 🎯', 'Brilliant!'
  ];

  // Get comments for country and platform
  let countryComments = comments[country];
  if (!countryComments) countryComments = comments['US'];
  
  let platformComments = countryComments[platform.toLowerCase()];
  if (!platformComments) {
    // Try to find any platform comments
    const keys = Object.keys(countryComments);
    if (keys.length > 0) {
      platformComments = countryComments[keys[0]];
    } else {
      platformComments = defaultComments;
    }
  }

  return platformComments[Math.floor(Math.random() * platformComments.length)];
}

module.exports = {
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
};