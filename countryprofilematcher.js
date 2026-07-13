const COUNTRY_PROFILES = require('../config/countryProfiles');

class CountryProfileMatcher {
  constructor() {
    this.usedProfiles = new Map(); // Track used profiles per country to avoid duplicates
  }

  // Get a random profile matching the country
  getProfileForCountry(countryCode, platform) {
    const countryData = COUNTRY_PROFILES[countryCode];
    if (!countryData) {
      // Fallback to Cameroon
      return this.getProfileForCountry('CM', platform);
    }

    // Get random names
    const firstName = this.getRandomItem(countryData.firstNames);
    const lastName = this.getRandomItem(countryData.lastNames);
    const city = this.getRandomItem(countryData.cities);
    const interest = this.getRandomItem(countryData.interests);
    const bioTemplate = this.getRandomItem(countryData.bioTemplates);

    // Generate bio with country-specific data
    const bio = bioTemplate
      .replace(/{interest}/g, interest)
      .replace(/{city}/g, city)
      .replace(/{state}/g, countryData.stateNames ? this.getRandomItem(countryData.stateNames) : '');

    // Generate profile picture from randomuser.me based on country
    const gender = Math.random() > 0.5 ? 'women' : 'men';
    const picNumber = Math.floor(Math.random() * 99) + 1;

    // Create unique username
    const username = this.generateUsername(firstName, lastName, countryCode);

    return {
      username: username,
      password: `${firstName}${lastName}${Math.floor(Math.random() * 1000)}!`,
      fullName: `${firstName} ${lastName}`,
      bio: bio,
      profilePic: `https://randomuser.me/api/portraits/${gender}/${picNumber}.jpg`,
      email: `${username}@${this.getEmailDomain(countryCode)}`,
      phoneNumber: this.generatePhoneNumber(countryCode),
      country: countryCode,
      city: city,
      firstName: firstName,
      lastName: lastName,
      interest: interest
    };
  }

  // Generate unique username
  generateUsername(firstName, lastName, countryCode) {
    const base = `${firstName.toLowerCase()}_${lastName.toLowerCase()}`;
    const suffix = Math.floor(Math.random() * 10000);
    return `${base}_${suffix}`;
  }

  // Get email domain for country
  getEmailDomain(countryCode) {
    const domains = {
      US: ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com'],
      GB: ['gmail.com', 'yahoo.co.uk', 'outlook.com', 'hotmail.co.uk'],
      FR: ['gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'laposte.net'],
      CM: ['gmail.com', 'yahoo.com', 'outlook.com', 'yahoo.fr', 'gmail.cm'],
      NG: ['gmail.com', 'yahoo.com', 'outlook.com', 'yahoo.co.uk'],
      KE: ['gmail.com', 'yahoo.com', 'outlook.com', 'yahoo.co.uk'],
      SN: ['gmail.com', 'yahoo.fr', 'outlook.fr', 'gmail.sn'],
      CI: ['gmail.com', 'yahoo.fr', 'outlook.fr', 'gmail.ci'],
      GH: ['gmail.com', 'yahoo.com', 'outlook.com', 'gmail.gh'],
      ZA: ['gmail.com', 'yahoo.com', 'outlook.com', 'gmail.co.za'],
      AU: ['gmail.com', 'yahoo.com', 'outlook.com', 'gmail.com.au'],
      CA: ['gmail.com', 'yahoo.com', 'outlook.com', 'gmail.ca']
    };
    const countryDomains = domains[countryCode] || domains.US;
    return this.getRandomItem(countryDomains);
  }

  // Generate phone number for country
  generatePhoneNumber(countryCode) {
    const prefixes = {
      US: '1',
      GB: '44',
      FR: '33',
      CM: '237',
      NG: '234',
      KE: '254',
      SN: '221',
      CI: '225',
      GH: '233',
      ZA: '27',
      AU: '61',
      CA: '1'
    };
    const prefix = prefixes[countryCode] || '237';
    const digits = Math.floor(Math.random() * 900000000) + 100000000;
    return `${prefix}${digits}`;
  }

  // Get random item from array
  getRandomItem(array) {
    if (!array || array.length === 0) return '';
    return array[Math.floor(Math.random() * array.length)];
  }

  // Get multiple profiles for a country (for bulk orders)
  getMultipleProfiles(countryCode, platform, count) {
    const profiles = [];
    const used = new Set();

    for (let i = 0; i < count; i++) {
      let profile;
      let attempts = 0;
      do {
        profile = this.getProfileForCountry(countryCode, platform);
        attempts++;
      } while (used.has(profile.username) && attempts < 50);
      
      used.add(profile.username);
      profiles.push(profile);
    }

    return profiles;
  }
}

module.exports = new CountryProfileMatcher();