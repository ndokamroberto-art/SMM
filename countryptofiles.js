// COMPLETE COUNTRY PROFILES - REAL NAMES, BIOS, CITIES FOR EACH COUNTRY
const COUNTRY_PROFILES = {
  // 🇺🇸 UNITED STATES
  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    languages: ['English', 'Spanish'],
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin', 'Boston', 'Miami', 'Seattle', 'Denver', 'Atlanta'],
    firstNames: ['James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Oliver', 'Isabella', 'Mason', 'Charlotte', 'Ethan', 'Amelia', 'Alexander', 'Harper', 'Logan', 'Evelyn', 'Daniel', 'Abigail', 'Matthew', 'Emily', 'Henry', 'Elizabeth', 'Samuel', 'Mia', 'Joseph', 'Ella', 'David', 'Grace', 'Jackson', 'Victoria', 'Carter', 'Lily', 'Wyatt', 'Chloe', 'Dylan', 'Madison', 'Gabriel', 'Addison', 'Christopher', 'Aubrey', 'Benjamin', 'Scarlett', 'Andrew', 'Aria', 'Joshua', 'Elena', 'Nathan', 'Nora', 'Caleb', 'Hazel', 'Ryan', 'Luna', 'Adrian', 'Layla', 'Isaac', 'Avery', 'Landon', 'Sofia', 'Thomas', 'Riley', 'Eli', 'Zoe', 'Jonathan', 'Penelope', 'Hunter', 'Leah', 'Christian', 'Stella', 'Isaiah', 'Aurora', 'Aaron', 'Natalie', 'Charles', 'Ellie', 'Lincoln', 'Savannah', 'Jeremiah', 'Claire', 'Cameron', 'Eleanor', 'Robert', 'Hannah', 'Jaxon', 'Skylar', 'Nicholas', 'Lucy', 'Anthony', 'Anna', 'Luke', 'Samantha', 'Levi', 'Kennedy', 'Isaac', 'Mackenzie', 'Grayson', 'Ariana', 'Angel', 'Zara', 'Julian', 'Hailey'],
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Turner', 'Phillips', 'Evans', 'Collins', 'Edwards', 'Stewart', 'Morris', 'Murphy', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Howard', 'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West', 'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens', 'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson', 'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford', 'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice', 'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver', 'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters', 'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley', 'Carroll', 'Hudson', 'Duncan', 'Armstrong', 'Berry', 'Andrews', 'Johnston', 'Ray', 'Lane', 'Riley', 'Carpenter', 'Perkins', 'Aguilar', 'Silva', 'Richards', 'Willis', 'Matthews', 'Chapman', 'Lawrence', 'Garza', 'Vargas', 'Watkins', 'Wheeler', 'Larson', 'Carlson', 'Harper', 'George', 'Greene', 'Burke', 'Gutierrez', 'Mendoza', 'Munoz', 'Reyes', 'Oliver', 'Todd', 'Webb', 'Wilson', 'Parker', 'Soto', 'Peterson', 'Obrien', 'Cruz', 'Morales', 'Kelley', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Foster', 'Sanders', 'Ross', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West', 'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens', 'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson', 'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford', 'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice', 'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver', 'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters', 'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley', 'Carroll', 'Hudson', 'Duncan', 'Armstrong', 'Berry', 'Andrews', 'Johnston', 'Ray', 'Lane', 'Riley', 'Carpenter', 'Perkins', 'Aguilar', 'Silva', 'Richards', 'Willis', 'Matthews', 'Chapman', 'Lawrence', 'Garza', 'Vargas', 'Watkins', 'Wheeler', 'Larson', 'Carlson', 'Harper', 'George', 'Greene', 'Burke', 'Gutierrez', 'Mendoza', 'Munoz', 'Reyes', 'Oliver', 'Todd', 'Webb', 'Wilson', 'Parker', 'Soto', 'Peterson', 'Obrien', 'Cruz', 'Morales', 'Kelley', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, {state}',
      '💻 {interest} Creator | 🗽 {city} | 🇺🇸 USA',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}, {state}',
      '🚀 {interest} Enthusiast | 📍 {city}, {state}',
      '🎨 {interest} Artist | 🌟 {city} | 🇺🇸',
      '📚 {interest} Student | 🎓 {city}',
      '🏀 {interest} Player | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Sports', 'Basketball', 'Football', 'Baseball', 'Soccer', 'Tennis', 'Golf'],
    stateAbbreviations: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    stateNames: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  },

  // 🇬🇧 UNITED KINGDOM
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    languages: ['English', 'Welsh', 'Scottish Gaelic'],
    cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Newcastle', 'Sheffield', 'Bristol', 'Nottingham', 'Leicester', 'Edinburgh', 'Cardiff', 'Belfast', 'Brighton', 'Oxford', 'Cambridge', 'York', 'Bath', 'Exeter', 'Portsmouth', 'Southampton', 'Reading', 'Milton Keynes', 'Derby', 'Salford', 'Plymouth', 'Wolverhampton', 'Stoke-on-Trent', 'Coventry'],
    firstNames: ['Oliver', 'Olivia', 'George', 'Amelia', 'Harry', 'Isla', 'Jack', 'Ava', 'Jacob', 'Mia', 'Noah', 'Isabella', 'Charlie', 'Lily', 'William', 'Emily', 'James', 'Ella', 'Thomas', 'Grace', 'Oscar', 'Sophie', 'Henry', 'Alice', 'Alexander', 'Florence', 'Samuel', 'Beatrice', 'Daniel', 'Eleanor', 'Michael', 'Charlotte', 'Joseph', 'Victoria', 'Matthew', 'Lucy', 'David', 'Rose', 'Benjamin', 'Anna', 'Christopher', 'Hannah', 'Andrew', 'Emma', 'Edward', 'Mary', 'Jonathan', 'Elizabeth', 'Peter', 'Margaret', 'Robert', 'Sarah', 'John', 'Jessica', 'Paul', 'Chloe', 'Mark', 'Lauren', 'Richard', 'Olivia', 'Anthony', 'Megan', 'Kevin', 'Rebecca', 'Steven', 'Michelle', 'Thomas', 'Emma', 'Jason', 'Samantha', 'Timothy', 'Louise', 'Ryan', 'Sophie', 'Gary', 'Katie', 'Eric', 'Charlotte', 'Stephen', 'Lucy', 'Keith', 'Zoe', 'Alan', 'Hannah', 'David', 'Claire', 'Peter', 'Eve', 'Neil', 'Amy', 'Graham', 'Katherine', 'Derek', 'Emily', 'Martin', 'Victoria', 'Anthony', 'Lauren', 'Steven', 'Anna', 'Stewart', 'Holly', 'Gordon', 'Isabelle', 'Harvey', 'Layla', 'Ethan', 'Maya', 'Lucas', 'Zara', 'Logan', 'Phoebe', 'Mason', 'Sienna', 'Liam', 'Willow', 'Archie', 'Isabel', 'Freddie', 'Lottie', 'Alfie', 'Lilly', 'Riley', 'Evie', 'Ellis', 'Ivy', 'Leo', 'Emilia', 'Hunter', 'Nancy', 'Rory', 'Molly', 'Toby', 'Sadie', 'Louis', 'Elsie', 'Harley', 'Rose'],
    lastNames: ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Wilson', 'Evans', 'Thomas', 'Johnson', 'Roberts', 'Walker', 'Wright', 'Robinson', 'Thompson', 'White', 'Hughes', 'Edwards', 'Green', 'Lewis', 'Wood', 'Harris', 'Martin', 'Jackson', 'Clarke', 'Turner', 'Hill', 'Moore', 'Cooper', 'King', 'Bailey', 'Baker', 'Harrison', 'Campbell', 'Mitchell', 'Parker', 'Stewart', 'Anderson', 'Scott', 'Carter', 'Phillips', 'Evans', 'Collins', 'Edwards', 'Stewart', 'Morris', 'Murphy', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Howard', 'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West', 'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens', 'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson', 'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford', 'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice', 'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver', 'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters', 'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley', 'Carroll', 'Hudson', 'Duncan', 'Armstrong', 'Berry', 'Andrews', 'Johnston', 'Ray', 'Lane', 'Riley', 'Carpenter', 'Perkins', 'Aguilar', 'Silva', 'Richards', 'Willis', 'Matthews', 'Chapman', 'Lawrence', 'Garza', 'Vargas', 'Watkins', 'Wheeler', 'Larson', 'Carlson', 'Harper', 'George', 'Greene', 'Burke', 'Gutierrez', 'Mendoza', 'Munoz', 'Reyes', 'Oliver', 'Todd', 'Webb', 'Wilson', 'Parker', 'Soto', 'Peterson', 'Obrien', 'Cruz', 'Morales', 'Kelley', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, UK',
      '💻 {interest} Creator | 🇬🇧 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇬🇧',
      '📚 {interest} Student | 🎓 {city}',
      '🏀 {interest} Player | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Sports', 'Football', 'Cricket', 'Rugby', 'Tennis', 'Golf']
  },

  // 🇫🇷 FRANCE
  FR: {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    languages: ['French'],
    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Saint-Étienne', 'Le Havre', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne', 'Clermont-Ferrand', 'Le Mans', 'Aix-en-Provence', 'Brest', 'Limoges', 'Amiens', 'Perpignan', 'Boulogne-Billancourt', 'Metz', 'Besançon'],
    firstNames: ['Jean', 'Pierre', 'Michel', 'Marie', 'Philippe', 'Élisabeth', 'Louis', 'Sophie', 'Jacques', 'Julie', 'François', 'Camille', 'André', 'Léa', 'Georges', 'Manon', 'Antoine', 'Chloé', 'Nicolas', 'Jeanne', 'Christophe', 'Alice', 'Patrick', 'Léa', 'Christian', 'Inès', 'Daniel', 'Élise', 'David', 'Louise', 'Bernard', 'Sarah', 'Thomas', 'Zoé', 'Alain', 'Emma', 'Robert', 'Pauline', 'Gérard', 'Nina', 'Jean-Pierre', 'Léa', 'René', 'Lucie', 'Laurent', 'Margaux', 'Julien', 'Rosa', 'Guy', 'Léna', 'Xavier', 'Lola', 'Bertrand', 'Tess', 'Matthieu', 'Ava', 'Raphaël', 'Mia', 'Jean-Baptiste', 'Luna', 'Dimitri', 'Agathe', 'Gabriel', 'Agathe', 'Hugo', 'Lily', 'Maurice', 'Agathe', 'Valentin', 'Rose', 'Baptiste', 'Sacha', 'Augustin', 'Tina', 'Julien', 'Anna', 'Matéo', 'Lina', 'Bastien', 'Lisa', 'Mathis', 'Julia', 'Léo', 'Alice', 'Manon', 'Camille', 'Mathéo', 'Zoé', 'Nathan', 'Anna', 'Louis', 'Emma', 'Ethan', 'Mia', 'Adam', 'Ella', 'Théo', 'Lily', 'Lucas', 'Chloé', 'Victor', 'Léa', 'Gabin', 'Léna', 'Clément', 'Inès', 'Raphaël', 'Lou', 'Gaspard', 'Rose', 'Jules', 'Lisa', 'Milo', 'Alice', 'Marius', 'Manon', 'Léo', 'Julie', 'Malo', 'Agathe', 'Achille', 'Agathe', 'Sacha', 'Paloma', 'Louis', 'Mila', 'Auguste', 'Nola', 'Marcel', 'Romane', 'Eliot', 'Joséphine', 'Émile', 'Lison', 'Henri', 'Suzanne', 'Gustave', 'Capucine', 'Fernand', 'Eugénie', 'Aimé', 'Marceline', 'Joseph', 'Édith'],
    lastNames: ['Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand', 'Dubois', 'Moreau', 'Simon', 'Laurent', 'Michel', 'Lefèvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefebvre', 'Faure', 'André', 'Mercier', 'Blanc', 'Guerin', 'Boyer', 'Garnier', 'Chevalier', 'François', 'Legrand', 'Gauthier', 'Garcia', 'Perrin', 'Robin', 'Clement', 'Morin', 'Nicolas', 'Henry', 'Roussel', 'Mathieu', 'Gautier', 'Masson', 'Marchand', 'Duval', 'Denis', 'Dumont', 'Joly', 'Renaud', 'Lemoine', 'Delacroix', 'Renard', 'Bourgeois', 'Rousset', 'Poirier', 'Millet', 'Leblanc', 'Boucher', 'Lemaire', 'Dufour', 'Prevost', 'Adam', 'Deschamps', 'Baron', 'Bertin', 'Arnaud', 'Robin', 'Rolland', 'Petit', 'Dufresne', 'Girard', 'Dubois', 'Moreau', 'Simon', 'Laurent', 'Michel', 'Lefèvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefebvre', 'Faure', 'André', 'Mercier', 'Blanc', 'Guerin', 'Boyer', 'Garnier', 'Chevalier', 'François', 'Legrand', 'Gauthier', 'Garcia', 'Perrin', 'Robin', 'Clement', 'Morin', 'Nicolas', 'Henry', 'Roussel', 'Mathieu', 'Gautier', 'Masson', 'Marchand', 'Duval', 'Denis', 'Dumont', 'Joly', 'Renaud', 'Lemoine', 'Delacroix', 'Renard', 'Bourgeois', 'Rousset', 'Poirier', 'Millet', 'Leblanc', 'Boucher', 'Lemaire', 'Dufour', 'Prevost', 'Adam', 'Deschamps', 'Baron', 'Bertin', 'Arnaud', 'Robin', 'Rolland', 'Petit', 'Dufresne'],
    bioTemplates: [
      '📸 Passionné(e) de {interest} | 🌟 {city}, France',
      '💻 Créateur(trice) de {interest} | 🇫🇷 {city}',
      '🎵 Amoureux(se) de musique | 🎧 {interest} | 📍 {city}',
      '📱 Créateur(trice) de contenu {interest} | ✨ {city}',
      '🌿 Défenseur(se) de {interest} | 💚 {city}',
      '🚀 Passionné(e) de {interest} | 📍 {city}',
      '🎨 Artiste {interest} | 🌟 {city} | 🇫🇷',
      '📚 Étudiant(e) en {interest} | 🎓 {city}',
      '🏀 Joueur(se) de {interest} | 🏆 {city}',
      '💼 Professionnel(le) en {interest} | 📊 {city}',
      '🎬 Cinéaste {interest} | 🎥 {city}',
      '📝 Écrivain(e) {interest} | ✍️ {city}',
      '🎮 Gamer {interest} | 🕹️ {city}',
      '🧘 Coach bien-être {interest} | 🌱 {city}',
      '🎤 Chanteur(se) {interest} | 🎶 {city}'
    ],
    interests: ['Voyage', 'Photographie', 'Musique', 'Cuisine', 'Mode', 'Tech', 'Art', 'Sport', 'Danse', 'Fitness', 'Lecture', 'Gaming', 'Écriture', 'Jardinage', 'Randonnée', 'Cyclisme', 'Natation', 'Yoga', 'Méditation', 'Entrepreneuriat', 'Marketing', 'Design', 'Photographie', 'Vidéo', 'Podcasting', 'Blogging', 'Peinture', 'Sculpture', 'Théâtre', 'Comédie', 'Football', 'Rugby', 'Tennis', 'Golf']
  },

  // 🇨🇲 CAMEROON
  CM: {
    code: 'CM',
    name: 'Cameroon',
    flag: '🇨🇲',
    languages: ['French', 'English'],
    cities: ['Douala', 'Yaoundé', 'Garoua', 'Bamenda', 'Maroua', 'Bafoussam', 'Nkongsamba', 'Ngaoundéré', 'Bertoua', 'Kumba', 'Limbe', 'Buea', 'Ebolowa', 'Bambili', 'Bali', 'Bamenda', 'Batouri', 'Buea', 'Dschang', 'Edéa', 'Foumban', 'Garoua', 'Kousséri', 'Kribi', 'Mbalmayo', 'Mbouda', 'Meiganga', 'Ngaoundéré', 'Nkongsamba', 'Tibati'],
    firstNames: ['Jean', 'Marie', 'Pierre', 'Paul', 'Jacques', 'François', 'Joseph', 'Michel', 'Charles', 'Antoine', 'Bernard', 'André', 'Louis', 'Philippe', 'Nicolas', 'Marcel', 'Raymond', 'Albert', 'Emmanuel', 'Lucien', 'Gérard', 'Léopold', 'Honoré', 'Benoît', 'Raphaël', 'Célestin', 'Romain', 'Edouard', 'Augustin', 'Fabien', 'Gaston', 'Alphonse', 'Aimé', 'Donatien', 'Eugène', 'Félix', 'Grégoire', 'Henri', 'Ignace', 'Jules', 'Kévin', 'Laurent', 'Maurice', 'Norbert', 'Olivier', 'Pascal', 'Quentin', 'Rodrigue', 'Stéphane', 'Théodore', 'Ulysse', 'Valentin', 'Wilfried', 'Xavier', 'Yvan', 'Zacharie', 'Bertrand', 'Christian', 'Daniel', 'Emile', 'Franck', 'Guillaume', 'Hervé', 'Ivan', 'Joël', 'Karl', 'Lionel', 'Max', 'Nestor', 'Omer', 'Patrice', 'Régis', 'Steve', 'Tanguy', 'Ulrich', 'Vivien', 'Willy', 'Yves', 'Zacharie', 'Achille', 'Blaise', 'Cédric', 'Dorian', 'Elvis', 'Ferdinand', 'Gaël', 'Hugo', 'Ismaël', 'Joris', 'Kylian', 'Loïc', 'Mathis', 'Noah', 'Oscar', 'Philemon', 'Ruben', 'Sam', 'Thibault', 'Ugo', 'Victor', 'Yoan', 'Zoël', 'Adam', 'Bryan', 'Carl', 'Dylan', 'Ethan', 'Florent', 'Gabin', 'Hector', 'Ilan', 'Jason', 'Kilian', 'Liam', 'Mael', 'Nathan', 'Owen', 'Pacôme', 'Rayan', 'Sacha', 'Timéo', 'Ulysse', 'Valérian', 'Wendy', 'Yann', 'Zac'],
    lastNames: ['Ngono', 'Mballa', 'Essomba', 'Ndjock', 'Mvondo', 'Amougou', 'Nana', 'Kameni', 'Ndombele', 'Eto\'o', 'Makélélé', 'Song', 'Eyong', 'Ekotto', 'Mbia', 'Matip', 'Choupo-Moting', 'Ngog', 'Aboubakar', 'Saha', 'Kanté', 'Mbappé', 'N\'Jie', 'Oumar', 'Nkol', 'Menga', 'Nga', 'Mbia', 'Essama', 'Ngo', 'Beyene', 'Djoum', 'Nji', 'Mfo', 'Zoa', 'Nyamsi', 'Tchamba', 'Kouam', 'Mendo', 'Nganou', 'Ngoumou', 'Tamo', 'Mpondo', 'Nguemo', 'Tchouameni', 'Ngome', 'Mvogo', 'Ondoa', 'Toko', 'Ekang', 'Ndzana', 'Mfomo', 'Nkoulou', 'Zock', 'Bong', 'Ndongo', 'Minko', 'Eboa', 'Ngon', 'Mbarga', 'Tsobeng', 'Nkeng', 'Mban', 'Ntsama', 'Ebogo', 'Meyo', 'Nnomo', 'Tchoua', 'Ngando', 'Mballa', 'Ndi', 'Esso', 'Mboma', 'Ntouba', 'Mboula', 'Ndzana', 'Toko', 'Ngala', 'Minka', 'Njoya', 'Tchoffo', 'Ndzomo', 'Mballa', 'Ngon', 'Mbida', 'Tsapi', 'Nkeng', 'Mboua', 'Ntsama', 'Ebogo', 'Meyo', 'Nnomo'],
    bioTemplates: [
      '📸 Passionné(e) de {interest} | 🌟 {city}, Cameroun',
      '💻 Créateur(trice) de {interest} | 🇨🇲 {city}',
      '🎵 Amoureux(se) de musique | 🎧 {interest} | 📍 {city}',
      '📱 Créateur(trice) de contenu {interest} | ✨ {city}',
      '🌿 Défenseur(se) de {interest} | 💚 {city}',
      '🚀 Passionné(e) de {interest} | 📍 {city}',
      '🎨 Artiste {interest} | 🌟 {city} | 🇨🇲',
      '📚 Étudiant(e) en {interest} | 🎓 {city}',
      '🏀 Joueur(se) de {interest} | 🏆 {city}',
      '💼 Professionnel(le) en {interest} | 📊 {city}',
      '🎬 Cinéaste {interest} | 🎥 {city}',
      '📝 Écrivain(e) {interest} | ✍️ {city}',
      '🎮 Gamer {interest} | 🕹️ {city}',
      '🧘 Coach bien-être {interest} | 🌱 {city}',
      '🎤 Chanteur(se) {interest} | 🎶 {city}'
    ],
    interests: ['Voyage', 'Photographie', 'Musique', 'Cuisine', 'Mode', 'Tech', 'Art', 'Sport', 'Danse', 'Fitness', 'Lecture', 'Gaming', 'Écriture', 'Jardinage', 'Randonnée', 'Cyclisme', 'Natation', 'Yoga', 'Méditation', 'Entrepreneuriat', 'Marketing', 'Design', 'Photographie', 'Vidéo', 'Podcasting', 'Blogging', 'Peinture', 'Sculpture', 'Théâtre', 'Comédie', 'Football', 'Basketball', 'Athlétisme', 'Tennis']
  },

  // 🇳🇬 NIGERIA
  NG: {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
    cities: ['Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos', 'Ilorin', 'Oyo', 'Enugu', 'Abeokuta', 'Ilesa', 'Ogbomosho', 'Warri', 'Sokoto', 'Calabar', 'Uyo', 'Katsina', 'Akure', 'Bauchi', 'Makurdi', 'Minna', 'Dutse', 'Gombe', 'Yola', 'Jalingo', 'Umuahia'],
    firstNames: ['Chukwudi', 'Amara', 'Oluwaseun', 'Chioma', 'Oluwasegun', 'Oluwabunmi', 'Chigozie', 'Abigail', 'Oluwadamilola', 'Adeola', 'Chiamaka', 'Ayomide', 'Ifeanyi', 'Nkechi', 'Oluwatobi', 'Zara', 'Chukwuma', 'Ezinne', 'Kelechi', 'Toluwalase', 'Oluwaferanmi', 'Bukola', 'Oluwademilade', 'Simisola', 'Chinonso', 'Omowumi', 'Damilola', 'Oluwadunsin', 'Folashade', 'Oluwafunmilayo', 'Chukwuka', 'Adedoyin', 'Oluwatoyin', 'Adaeze', 'Oluwafeyisayo', 'Modupe', 'Oluwafisayo', 'Temitayo', 'Oluwafeyi', 'Darasimi', 'Oluwadarasimi', 'Oluwaferanmi', 'Timilehin', 'Tobiloba', 'Darasimi', 'Mojisola', 'Oluwadamilola', 'Ayotunde', 'Boluwatife', 'Oluwabukola', 'Oyindamola', 'Oluwadara', 'Adebayo', 'Oluwaferanmi', 'Oluwadamilare', 'Oluwadimimu', 'Oluwadunmininu', 'Oluwadurotimi', 'Oluwadunni', 'Oluwafemi', 'Oluwafisayo', 'Oluwafunke', 'Oluwagbenga', 'Oluwagbemisola', 'Oluwagbenga', 'Oluwagbemisola'],
    lastNames: ['Adebayo', 'Adeyemi', 'Adeleke', 'Adeniyi', 'Adeola', 'Adebisi', 'Adeleye', 'Adegoke', 'Adedoyin', 'Adekunle', 'Adeolu', 'Adegboye', 'Adekola', 'Adeosun', 'Adeyinka', 'Adeyemo', 'Adebiyi', 'Adekoya', 'Adeyanju', 'Adegbite', 'Adejare', 'Adeleye', 'Adeyemo', 'Adekola', 'Adebiyi', 'Adegoke', 'Adeleke', 'Adeniyi', 'Adebayo', 'Adeyemi', 'Adeola', 'Adebisi', 'Adeleye', 'Adegoke', 'Adedoyin', 'Adekunle', 'Adeolu', 'Adegboye', 'Adekola', 'Adeosun', 'Adeyinka', 'Adeyemo', 'Adebiyi', 'Adekoya', 'Adeyanju', 'Adegbite', 'Adejare', 'Adeleye', 'Adeyemo', 'Adekola', 'Adebiyi', 'Adegoke', 'Adeleke', 'Adeniyi'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, Nigeria',
      '💻 {interest} Creator | 🇳🇬 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇳🇬',
      '📚 {interest} Student | 🎓 {city}',
      '🏀 {interest} Player | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Football', 'Basketball']
  },

  // 🇰🇪 KENYA
  KE: {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    languages: ['English', 'Swahili'],
    cities: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Kitale', 'Garissa', 'Kakamega', 'Bungoma', 'Meru', 'Machakos', 'Nyeri', 'Embu', 'Isiolo', 'Kitui', 'Lodwar', 'Moyale', 'Voi', 'Kilifi', 'Lamu', 'Naivasha', 'Narok', 'Kajiado', 'Nanyuki', 'Ruiru', 'Ngong', 'Limuru', 'Tigoni'],
    firstNames: ['James', 'Grace', 'David', 'Mary', 'Peter', 'Esther', 'John', 'Ruth', 'Samuel', 'Faith', 'Paul', 'Anne', 'George', 'Jane', 'Joseph', 'Martha', 'Simon', 'Alice', 'Thomas', 'Diana', 'Charles', 'Susan', 'Patrick', 'Nancy', 'Robert', 'Catherine', 'Anthony', 'Margaret', 'Stephen', 'Monica', 'Kenneth', 'Joyce', 'Vincent', 'Agnes', 'Kevin', 'Rose', 'Brian', 'Peris', 'Nicholas', 'Dorcas', 'Dennis', 'Cynthia', 'Michael', 'Sharon', 'Collins', 'Naomi', 'Omar', 'Salma', 'Abdullah', 'Fatima', 'Hassan', 'Aisha', 'Ibrahim', 'Khadija', 'Mohammed', 'Zainab', 'Ali', 'Asha', 'Yusuf', 'Halima', 'Ahmed', 'Nadia', 'Rashid', 'Layla', 'Hamza', 'Zahra', 'Jamal', 'Safia', 'Idris', 'Nura', 'Mustafa', 'Farida', 'Adam', 'Hawa', 'Salim', 'Rukia', 'Omar', 'Amina', 'Ibrahim', 'Khadija', 'Abdullahi', 'Fatuma', 'Abdi', 'Nasra', 'Juma', 'Mwanamwema', 'Mohamed', 'Saida', 'Ali', 'Mwanaisha', 'Hussein', 'Zainabu', 'Harun', 'Rahma', 'Suleiman', 'Mwanasha', 'Bakari', 'Zamzam'],
    lastNames: ['Omondi', 'Njoroge', 'Ochieng', 'Otieno', 'Wanjiru', 'Muthoni', 'Kiprop', 'Kipchoge', 'Kipngetich', 'Cherono', 'Kiptoo', 'Kimutai', 'Kiprono', 'Kipkorir', 'Rotich', 'Keter', 'Kibiwott', 'Kiprop', 'Kipng\'eno', 'Kipkemoi', 'Kiprugut', 'Kipkemboi', 'Kimutai', 'Cheruiyot', 'Kiptoo', 'Kipchumba', 'Kipketer', 'Kiprop', 'Rotich', 'Kibet', 'Kipng\'etich', 'Kiprono', 'Kipkoech', 'Kipng\'eno', 'Kipkemoi', 'Kiprugut', 'Kipkemboi', 'Kimutai', 'Cheruiyot', 'Kiptoo', 'Kipchumba', 'Kipketer', 'Kiprop', 'Rotich', 'Kibet', 'Kipng\'etich', 'Kiprono', 'Kipkoech', 'Kipng\'eno', 'Kipkemoi', 'Kiprugut', 'Kipkemboi', 'Kimutai', 'Cheruiyot', 'Kiptoo', 'Kipchumba', 'Kipketer'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, Kenya',
      '💻 {interest} Creator | 🇰🇪 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇰🇪',
      '📚 {interest} Student | 🎓 {city}',
      '🏃 {interest} Athlete | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Football', 'Athletics', 'Rugby']
  },

  // 🇸🇳 SENEGAL
  SN: {
    code: 'SN',
    name: 'Senegal',
    flag: '🇸🇳',
    languages: ['French', 'Wolof'],
    cities: ['Dakar', 'Thiès', 'Kaolack', 'Ziguinchor', 'Rufisque', 'Touba', 'Mbour', 'Diourbel', 'Louga', 'Saint-Louis', 'Tambacounda', 'Kolda', 'Matam', 'Kédougou', 'Sédhiou', 'Nioro', 'Fatick', 'Bignona', 'Vélingara', 'Dagana', 'Pout', 'Goudiry', 'Koungheul', 'Kaffrine', 'Birkelane', 'Mbacké', 'Guinguinéo', 'Niakhar', 'Bambey', 'Mekhé'],
    firstNames: ['Fatou', 'Aminata', 'Mariama', 'Aïcha', 'Mame', 'Awa', 'Ndeye', 'Bintou', 'Sokhna', 'Dieynaba', 'Rokhaya', 'Maguette', 'Khady', 'Ramata', 'Nafissatou', 'Adama', 'Mouhamed', 'Ibrahima', 'Moustapha', 'Cheikh', 'Souleymane', 'Ousmane', 'Abdoulaye', 'Moussa', 'Issa', 'Mamadou', 'Daouda', 'Babacar', 'Mor', 'Bamba', 'Pape', 'Alassane', 'El Hadji', 'Mouhamadou', 'Bocar', 'Samba', 'Mansour', 'Lamine', 'Khadim', 'Thierno', 'Abdoul', 'Aly', 'Malick', 'Idrissa', 'Demba', 'Seydou', 'Birahim', 'Ndiaga', 'Mbayang', 'Dji', 'Fodé', 'Kalidou', 'Sakhir', 'Mamoudou', 'Amadou', 'Ibrahima', 'Elhadj', 'Baye', 'Modou', 'Mor', 'Saliou', 'Aliou', 'Mor', 'Mory', 'Keba', 'Ndiogou', 'Baba', 'Bouba', 'Kouma', 'Mamour', 'Ndiack', 'Souléye', 'Moustapha', 'Boubacar', 'Mamadou', 'Abdou', 'Matar', 'Bassirou', 'Gorgui', 'Mbayé', 'Mamoudou', 'Elhadji', 'Baye', 'Babacar', 'Mouhamadou'],
    lastNames: ['Ndiaye', 'Sow', 'Diop', 'Fall', 'Seck', 'Ba', 'Mbaye', 'Cissé', 'Thiam', 'Diagne', 'Sy', 'Ngom', 'Gueye', 'Sarr', 'Diouf', 'Diallo', 'Kane', 'Niang', 'Faye', 'Sagna', 'Dia', 'Barry', 'Aidara', 'Diop', 'Fall', 'Seck', 'Ba', 'Mbaye', 'Cissé', 'Thiam', 'Diagne', 'Sy', 'Ngom', 'Gueye', 'Sarr', 'Diouf', 'Diallo', 'Kane', 'Niang', 'Faye', 'Sagna', 'Dia', 'Barry', 'Aidara', 'Diop', 'Fall', 'Seck', 'Ba', 'Mbaye', 'Cissé', 'Thiam', 'Diagne', 'Sy', 'Ngom', 'Gueye', 'Sarr', 'Diouf', 'Diallo', 'Kane', 'Niang', 'Faye', 'Sagna', 'Dia', 'Barry', 'Aidara', 'Diop', 'Fall', 'Seck', 'Ba', 'Mbaye', 'Cissé', 'Thiam', 'Diagne', 'Sy', 'Ngom', 'Gueye', 'Sarr', 'Diouf', 'Diallo', 'Kane', 'Niang', 'Faye', 'Sagna', 'Dia', 'Barry', 'Aidara'],
    bioTemplates: [
      '📸 Passionné(e) de {interest} | 🌟 {city}, Sénégal',
      '💻 Créateur(trice) de {interest} | 🇸🇳 {city}',
      '🎵 Amoureux(se) de musique | 🎧 {interest} | 📍 {city}',
      '📱 Créateur(trice) de contenu {interest} | ✨ {city}',
      '🌿 Défenseur(se) de {interest} | 💚 {city}',
      '🚀 Passionné(e) de {interest} | 📍 {city}',
      '🎨 Artiste {interest} | 🌟 {city} | 🇸🇳',
      '📚 Étudiant(e) en {interest} | 🎓 {city}',
      '🏀 Joueur(se) de {interest} | 🏆 {city}',
      '💼 Professionnel(le) en {interest} | 📊 {city}',
      '🎬 Cinéaste {interest} | 🎥 {city}',
      '📝 Écrivain(e) {interest} | ✍️ {city}',
      '🎮 Gamer {interest} | 🕹️ {city}',
      '🧘 Coach bien-être {interest} | 🌱 {city}',
      '🎤 Chanteur(se) {interest} | 🎶 {city}'
    ],
    interests: ['Voyage', 'Photographie', 'Musique', 'Cuisine', 'Mode', 'Tech', 'Art', 'Sport', 'Danse', 'Fitness', 'Lecture', 'Gaming', 'Écriture', 'Jardinage', 'Randonnée', 'Cyclisme', 'Natation', 'Yoga', 'Méditation', 'Entrepreneuriat', 'Marketing', 'Design', 'Photographie', 'Vidéo', 'Podcasting', 'Blogging', 'Peinture', 'Sculpture', 'Théâtre', 'Comédie', 'Football', 'Basketball']
  },

  // 🇨🇮 IVORY COAST
  CI: {
    code: 'CI',
    name: 'Ivory Coast',
    flag: '🇨🇮',
    languages: ['French'],
    cities: ['Abidjan', 'Bouaké', 'Daloa', 'Yamoussoukro', 'Korhogo', 'San-Pédro', 'Gagnoa', 'Man', 'Divo', 'Anyama', 'Abengourou', 'Agnibilékrou', 'Bondoukou', 'Bouna', 'Dabou', 'Danané', 'Dimbokro', 'Divo', 'Ferkessédougou', 'Grand-Bassam', 'Guiglo', 'Issia', 'Katiola', 'Lakota', 'M\'Bahiakro', 'Odienné', 'Sassandra', 'Sinfra', 'Soubré', 'Toumodi'],
    firstNames: ['Jean', 'Marie', 'François', 'Agnès', 'Michel', 'Gabrielle', 'Philippe', 'Hélène', 'Emmanuel', 'Cécile', 'Thierry', 'Delphine', 'Christophe', 'Brigitte', 'Nicolas', 'Angélique', 'Olivier', 'Marianne', 'Patrick', 'Nathalie', 'Sébastien', 'Élise', 'Clément', 'Diane', 'Valérie', 'Jacqueline', 'René', 'Véronique', 'Daniel', 'Isabelle', 'Bernard', 'Catherine', 'Alain', 'Nicole', 'Pierre', 'Chantal', 'André', 'Monique', 'Louis', 'Colette', 'Charles', 'Suzanne', 'Marcel', 'Renée', 'Georges', 'Simone', 'Lucien', 'Yvonne', 'Raymond', 'Odile', 'Armand', 'Jeanne', 'Édouard', 'Renée', 'Justin', 'Louise', 'Albert', 'Renée', 'Étienne', 'Paulette', 'Léon', 'Marguerite', 'Maurice', 'Micheline', 'Alfred', 'Suzanne', 'Gaston', 'Raymonde', 'Roland', 'Suzanne', 'Roger', 'Martine', 'Léon', 'Rosine', 'Henri', 'Janine', 'Louis', 'Jeanine', 'Paul', 'Claudine', 'Robert', 'Josette'],
    lastNames: ['Kouadio', 'Koné', 'Traoré', 'Diabaté', 'Ouattara', 'Bamba', 'Coulibaly', 'Kouamé', 'Yao', 'Diakité', 'Koffi', 'Sanogo', 'Soro', 'Toure', 'Diarra', 'Konan', 'Bakayoko', 'Doumbia', 'Soumaré', 'Koné', 'Traoré', 'Diabaté', 'Ouattara', 'Bamba', 'Coulibaly', 'Kouamé', 'Yao', 'Diakité', 'Koffi', 'Sanogo', 'Soro', 'Toure', 'Diarra', 'Konan', 'Bakayoko', 'Doumbia', 'Soumaré', 'Koné', 'Traoré', 'Diabaté', 'Ouattara', 'Bamba', 'Coulibaly', 'Kouamé', 'Yao', 'Diakité', 'Koffi', 'Sanogo', 'Soro', 'Toure', 'Diarra', 'Konan', 'Bakayoko', 'Doumbia', 'Soumaré'],
    bioTemplates: [
      '📸 Passionné(e) de {interest} | 🌟 {city}, Côte d\'Ivoire',
      '💻 Créateur(trice) de {interest} | 🇨🇮 {city}',
      '🎵 Amoureux(se) de musique | 🎧 {interest} | 📍 {city}',
      '📱 Créateur(trice) de contenu {interest} | ✨ {city}',
      '🌿 Défenseur(se) de {interest} | 💚 {city}',
      '🚀 Passionné(e) de {interest} | 📍 {city}',
      '🎨 Artiste {interest} | 🌟 {city} | 🇨🇮',
      '📚 Étudiant(e) en {interest} | 🎓 {city}',
      '🏀 Joueur(se) de {interest} | 🏆 {city}',
      '💼 Professionnel(le) en {interest} | 📊 {city}',
      '🎬 Cinéaste {interest} | 🎥 {city}',
      '📝 Écrivain(e) {interest} | ✍️ {city}',
      '🎮 Gamer {interest} | 🕹️ {city}',
      '🧘 Coach bien-être {interest} | 🌱 {city}',
      '🎤 Chanteur(se) {interest} | 🎶 {city}'
    ],
    interests: ['Voyage', 'Photographie', 'Musique', 'Cuisine', 'Mode', 'Tech', 'Art', 'Sport', 'Danse', 'Fitness', 'Lecture', 'Gaming', 'Écriture', 'Jardinage', 'Randonnée', 'Cyclisme', 'Natation', 'Yoga', 'Méditation', 'Entrepreneuriat', 'Marketing', 'Design', 'Photographie', 'Vidéo', 'Podcasting', 'Blogging', 'Peinture', 'Sculpture', 'Théâtre', 'Comédie', 'Football', 'Basketball']
  },

  // 🇬🇭 GHANA
  GH: {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    languages: ['English', 'Twi', 'Ga', 'Ewe'],
    cities: ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Tema', 'Cape Coast', 'Koforidua', 'Sunyani', 'Bolgatanga', 'Ho', 'Wa', 'Obuasi', 'Agona Swedru', 'Techiman', 'Nkawkaw', 'Akatsi', 'Denu', 'Aflao', 'Sogakope', 'Dabala', 'Axim', 'Mpohor', 'Tarkwa', 'Prestea', 'Bogoso', 'Aboso', 'Oda', 'Asamankese', 'Nkawkaw', 'Mampong'],
    firstNames: ['Kwame', 'Ama', 'Kojo', 'Adwoa', 'Yaw', 'Akua', 'Kofi', 'Afua', 'Kwaku', 'Aba', 'Kweku', 'Awo', 'Kwabena', 'Abena', 'Kwesi', 'Anita', 'Owusu', 'Esi', 'Akwasi', 'Mansa', 'Kwakye', 'Akua', 'Nana', 'Ama', 'Kofi', 'Adwoa', 'Yaw', 'Akua', 'Kwame', 'Afua', 'Kweku', 'Aba', 'Kwabena', 'Abena', 'Kwesi', 'Anita', 'Owusu', 'Esi', 'Akwasi', 'Mansa', 'Kwakye', 'Nana', 'Kofi', 'Adwoa', 'Yaw', 'Akua', 'Kwame', 'Afua', 'Kweku', 'Aba', 'Kwabena', 'Abena', 'Kwesi', 'Anita', 'Owusu', 'Esi', 'Akwasi', 'Mansa', 'Kwakye', 'Nana', 'Ama', 'Kofi', 'Adwoa', 'Yaw', 'Akua', 'Kwame', 'Afua', 'Kweku', 'Aba', 'Kwabena', 'Abena', 'Kwesi', 'Anita', 'Owusu', 'Esi', 'Akwasi', 'Mansa', 'Kwakye', 'Nana'],
    lastNames: ['Mensah', 'Asare', 'Adjei', 'Acquah', 'Agyemang', 'Boateng', 'Ofori', 'Owusu', 'Quaye', 'Sarpong', 'Tetteh', 'Adu', 'Appiah', 'Asamoah', 'Darko', 'Frimpong', 'Gyasi', 'Kwarteng', 'Manu', 'Nkrumah', 'Opoku', 'Poku', 'Sawyer', 'Twumasi', 'Yeboah', 'Amoah', 'Ankrah', 'Asante', 'Brenya', 'Dankwah', 'Essel', 'Fianko', 'Gyan', 'Hagan', 'Kissi', 'Larbi', 'Mintah', 'Ntow', 'Osei', 'Peprah', 'Quarshie', 'Sekyere', 'Tagoe', 'Ussif', 'Vanderpuye', 'Wiafe', 'Yamoah', 'Zakari', 'Agyapong', 'Akoto', 'Anane', 'Asomani', 'Boadi', 'Danso', 'Eshun', 'Fosu', 'Ghansah', 'Hammond', 'Issah', 'Koranteng', 'Lamptey', 'Mawuli', 'Nartey', 'Ofosu', 'Paintsil', 'Quao', 'Sackey', 'Takyi', 'Umar', 'Worlanyo', 'Yankey', 'Zakaria'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, Ghana',
      '💻 {interest} Creator | 🇬🇭 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇬🇭',
      '📚 {interest} Student | 🎓 {city}',
      '🏀 {interest} Player | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Football', 'Basketball']
  },

  // 🇿🇦 SOUTH AFRICA
  ZA: {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa'],
    cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'Pietermaritzburg', 'Nelspruit', 'Polokwane', 'Kimberley', 'Rustenburg', 'Vereeniging', 'Soweto', 'Lenasia', 'Middelburg', 'Mbombela', 'George', 'Knysna', 'Hermanus', 'Stellenbosch', 'Paarl', 'Worcester', 'Oudtshoorn', 'Mossel Bay', 'Jeffreys Bay', 'East London', 'Grahamstown', 'Mthatha', 'Queenstown', 'Aliwal North'],
    firstNames: ['Thabo', 'Lerato', 'Sipho', 'Zanele', 'Nelson', 'Khumo', 'Mandela', 'Naledi', 'Sibusiso', 'Tshepiso', 'Nombulelo', 'Siphiwe', 'Lindiwe', 'Bongani', 'Refilwe', 'Ntokozo', 'Ayanda', 'Zodwa', 'Sizwe', 'Mpho', 'Dumisani', 'Nokuthula', 'Sandile', 'Lungile', 'Zolani', 'Nomvula', 'Themba', 'Nobuhle', 'Hlengiwe', 'Mzwanele', 'Ntsikelelo', 'Nqobile', 'Fikile', 'Sanele', 'Nkosana', 'Nobuhle', 'Sindisiwe', 'Lwazi', 'Ntando', 'Andile', 'Nomathemba', 'Sakhile', 'Thandeka', 'Mlungisi', 'Neliswa', 'Thulani', 'Nomsa', 'Mfundo', 'Nonhlanhla', 'Nkosinathi', 'Lungiswa', 'Sibongile', 'Mxolisi', 'Zama', 'Buhle', 'Sphamandla', 'Ntombi', 'Khethiwe', 'Nkosingiphile', 'Sanele', 'Nomfundo', 'Thando', 'Sibusiso', 'Nokwanda', 'Mpumelelo', 'Nolwazi', 'Simphiwe', 'Zinhle', 'Mvelo', 'Nobesuthu', 'Kwanele', 'Nomkhosi', 'Siyabonga', 'Nothando', 'Sifiso', 'Zanele', 'Thembelihle', 'Nhlanhla', 'Nomasonto'],
    lastNames: ['Ndlovu', 'Mthembu', 'Zulu', 'Mkhize', 'Botha', 'Van der Merwe', 'Smit', 'Jansen', 'Visser', 'De Villiers', 'Du Toit', 'Pretorius', 'Kruger', 'Roux', 'Venter', 'Fourie', 'Meyer', 'Booysen', 'Jacobs', 'Van Wyk', 'Grobler', 'Coetzee', 'Nel', 'Pienaar', 'Steyn', 'Van Zyl', 'Snyman', 'De Klerk', 'Marais', 'Lombard', 'Swanepoel', 'Du Plessis', 'Burger', 'Van der Walt', 'Olivier', 'Bester', 'Erasmus', 'Van der Merwe', 'Botha', 'Zulu', 'Ndlovu', 'Mthembu', 'Mkhize', 'Smit', 'Jansen', 'Visser', 'De Villiers', 'Du Toit', 'Pretorius', 'Kruger', 'Roux', 'Venter', 'Fourie', 'Meyer', 'Booysen', 'Jacobs', 'Van Wyk', 'Grobler', 'Coetzee', 'Nel', 'Pienaar', 'Steyn', 'Van Zyl', 'Snyman', 'De Klerk', 'Marais', 'Lombard', 'Swanepoel', 'Du Plessis', 'Burger', 'Van der Walt', 'Olivier', 'Bester', 'Erasmus'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, South Africa',
      '💻 {interest} Creator | 🇿🇦 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇿🇦',
      '📚 {interest} Student | 🎓 {city}',
      '🏉 {interest} Player | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Football', 'Rugby', 'Cricket', 'Swimming', 'Athletics']
  },

  // 🇦🇺 AUSTRALIA
  AU: {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    languages: ['English'],
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Wollongong', 'Canberra', 'Hobart', 'Darwin', 'Townsville', 'Cairns', 'Geelong', 'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston', 'Mackay', 'Rockhampton', 'Bundaberg', 'Hervey Bay', 'Sunshine Coast', 'Central Coast', 'Illawarra', 'Hunter Valley', 'Blue Mountains', 'Mornington Peninsula', 'Shoalhaven'],
    firstNames: ['Oliver', 'Charlotte', 'Jack', 'Mia', 'William', 'Ava', 'Ethan', 'Sophie', 'Liam', 'Grace', 'James', 'Chloe', 'Noah', 'Emily', 'Thomas', 'Ella', 'Alexander', 'Zoe', 'Benjamin', 'Lucy', 'Daniel', 'Lily', 'Lucas', 'Sienna', 'Henry', 'Isla', 'Max', 'Amelia', 'Samuel', 'Olivia', 'Matthew', 'Emma', 'David', 'Ruby', 'Joshua', 'Evelyn', 'Andrew', 'Scarlett', 'Peter', 'Mia', 'John', 'Hannah', 'James', 'Sophie', 'William', 'Mila', 'Jack', 'Ella', 'Oliver', 'Grace', 'Liam', 'Charlotte', 'Ethan', 'Ava', 'Noah', 'Emily', 'Thomas', 'Chloe', 'Alexander', 'Zoe', 'Benjamin', 'Lucy', 'Lucas', 'Sienna', 'Henry', 'Isla', 'Max', 'Amelia', 'Samuel', 'Olivia', 'Matthew', 'Emma', 'David', 'Ruby', 'Joshua', 'Evelyn', 'Andrew', 'Scarlett', 'Peter', 'Mia', 'John', 'Hannah'],
    lastNames: ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Wilson', 'Evans', 'Thomas', 'Johnson', 'Roberts', 'Walker', 'Wright', 'Robinson', 'Thompson', 'White', 'Hughes', 'Edwards', 'Green', 'Lewis', 'Wood', 'Harris', 'Martin', 'Jackson', 'Clarke', 'Turner', 'Hill', 'Moore', 'Cooper', 'King', 'Bailey', 'Baker', 'Harrison', 'Campbell', 'Mitchell', 'Parker', 'Stewart', 'Anderson', 'Scott', 'Carter', 'Phillips', 'Evans', 'Collins', 'Edwards', 'Stewart', 'Morris', 'Murphy', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Howard', 'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West', 'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens', 'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson', 'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford', 'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice', 'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver', 'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters', 'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley', 'Carroll', 'Hudson', 'Duncan', 'Armstrong', 'Berry', 'Andrews', 'Johnston', 'Ray', 'Lane', 'Riley', 'Carpenter', 'Perkins', 'Aguilar', 'Silva', 'Richards', 'Willis', 'Matthews', 'Chapman', 'Lawrence', 'Garza', 'Vargas', 'Watkins', 'Wheeler', 'Larson', 'Carlson', 'Harper', 'George', 'Greene', 'Burke', 'Gutierrez', 'Mendoza', 'Munoz', 'Reyes', 'Oliver', 'Todd', 'Webb', 'Wilson', 'Parker', 'Soto', 'Peterson', 'Obrien', 'Cruz', 'Morales', 'Kelley', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, Australia',
      '💻 {interest} Creator | 🇦🇺 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇦🇺',
      '📚 {interest} Student | 🎓 {city}',
      '🏄 {interest} Surfer | 🌊 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Cricket', 'Rugby', 'Surfing', 'Tennis', 'Golf']
  },

  // 🇨🇦 CANADA
  CA: {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    languages: ['English', 'French'],
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax', 'London', 'Windsor', 'Kitchener', 'St. Catharines', 'Victoria', 'Oshawa', 'Saskatoon', 'Regina', 'St. John\'s', 'Barrie', 'Guelph', 'Abbotsford', 'Kelowna', 'Moncton', 'Peterborough', 'Kingston', 'Sudbury', 'Trois-Rivières', 'Sherbrooke', 'Chicoutimi'],
    firstNames: ['James', 'Emma', 'Liam', 'Olivia', 'William', 'Ava', 'Noah', 'Sophia', 'Oliver', 'Isabella', 'Benjamin', 'Charlotte', 'Lucas', 'Mia', 'Ethan', 'Amelia', 'Alexander', 'Harper', 'Henry', 'Evelyn', 'Daniel', 'Abigail', 'Matthew', 'Emily', 'Samuel', 'Ella', 'Joseph', 'Grace', 'Michael', 'Victoria', 'David', 'Lily', 'John', 'Zoe', 'Thomas', 'Elena', 'Charles', 'Nora', 'Joshua', 'Aria', 'Christopher', 'Riley', 'Andrew', 'Scarlett', 'Ryan', 'Avery', 'Nathan', 'Sofia', 'Jacob', 'Maya', 'Gabriel', 'Layla', 'Anthony', 'Zara', 'Jonathan', 'Eva', 'Evan', 'Clara', 'Adam', 'Eleanor', 'Samuel', 'Ella', 'Joseph', 'Grace', 'Michael', 'Victoria', 'David', 'Lily', 'John', 'Zoe', 'Thomas', 'Elena', 'Charles', 'Nora', 'Joshua', 'Aria', 'Christopher', 'Riley', 'Andrew', 'Scarlett', 'Ryan', 'Avery', 'Nathan', 'Sofia', 'Jacob', 'Maya', 'Gabriel', 'Layla', 'Anthony', 'Zara', 'Jonathan', 'Eva', 'Evan', 'Clara', 'Adam', 'Eleanor'],
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Turner', 'Phillips', 'Evans', 'Collins', 'Edwards', 'Stewart', 'Morris', 'Murphy', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Howard', 'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Hamilton', 'Graham', 'Kim', 'Gonzales', 'Alexander', 'Ramos', 'Wallace', 'Griffin', 'West', 'Cole', 'Hayes', 'Chavez', 'Gibson', 'Bryant', 'Ellis', 'Stevens', 'Murray', 'Ford', 'Marshall', 'Owens', 'Mcdonald', 'Harrison', 'Ruiz', 'Kennedy', 'Wells', 'Alvarez', 'Woods', 'Mendoza', 'Castillo', 'Olson', 'Webb', 'Washington', 'Tucker', 'Freeman', 'Burns', 'Henry', 'Vasquez', 'Snyder', 'Simpson', 'Crawford', 'Jimenez', 'Porter', 'Mason', 'Shaw', 'Gordon', 'Wagner', 'Hunter', 'Romero', 'Hicks', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Stone', 'Meyer', 'Boyd', 'Mills', 'Warren', 'Fox', 'Rose', 'Rice', 'Moreno', 'Schmidt', 'Patel', 'Ferguson', 'Nichols', 'Herrera', 'Medina', 'Ryan', 'Fernandez', 'Weaver', 'Daniels', 'Stephens', 'Gardner', 'Payne', 'Kelley', 'Dunn', 'Pierce', 'Arnold', 'Tran', 'Spencer', 'Peters', 'Hawkins', 'Grant', 'Hansen', 'Castro', 'Hoffman', 'Hart', 'Elliott', 'Cunningham', 'Knight', 'Bradley', 'Carroll', 'Hudson', 'Duncan', 'Armstrong', 'Berry', 'Andrews', 'Johnston', 'Ray', 'Lane', 'Riley', 'Carpenter', 'Perkins', 'Aguilar', 'Silva', 'Richards', 'Willis', 'Matthews', 'Chapman', 'Lawrence', 'Garza', 'Vargas', 'Watkins', 'Wheeler', 'Larson', 'Carlson', 'Harper', 'George', 'Greene', 'Burke', 'Gutierrez', 'Mendoza', 'Munoz', 'Reyes', 'Oliver', 'Todd', 'Webb', 'Wilson', 'Parker', 'Soto', 'Peterson', 'Obrien', 'Cruz', 'Morales', 'Kelley', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes'],
    bioTemplates: [
      '📸 {interest} Enthusiast | 🌟 {city}, Canada',
      '💻 {interest} Creator | 🇨🇦 {city}',
      '🎵 Music Lover | 🎧 {interest} | 📍 {city}',
      '📱 {interest} Content Creator | ✨ {city}',
      '🌿 {interest} Advocate | 💚 {city}',
      '🚀 {interest} Enthusiast | 📍 {city}',
      '🎨 {interest} Artist | 🌟 {city} | 🇨🇦',
      '📚 {interest} Student | 🎓 {city}',
      '🏒 {interest} Player | 🏆 {city}',
      '💼 {interest} Professional | 📊 {city}',
      '🎬 {interest} Filmmaker | 🎥 {city}',
      '📝 {interest} Writer | ✍️ {city}',
      '🎮 {interest} Gamer | 🕹️ {city}',
      '🧘 {interest} Wellness Coach | 🌱 {city}',
      '🎤 {interest} Singer | 🎶 {city}'
    ],
    interests: ['Travel', 'Photography', 'Music', 'Food', 'Fashion', 'Tech', 'Art', 'Sports', 'Dance', 'Fitness', 'Reading', 'Gaming', 'Writing', 'Cooking', 'Gardening', 'Hiking', 'Cycling', 'Swimming', 'Yoga', 'Meditation', 'Entrepreneurship', 'Marketing', 'Design', 'Photography', 'Videography', 'Podcasting', 'Blogging', 'Painting', 'Sculpting', 'Acting', 'Comedy', 'Hockey', 'Football', 'Basketball', 'Lacrosse', 'Skiing', 'Snowboarding']
  }
};

module.exports = COUNTRY_PROFILES;