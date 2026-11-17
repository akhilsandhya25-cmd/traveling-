export type RegionFilter =
  | 'All'
  | 'South India'
  | 'West & Central India'
  | 'North India';

export type PackageCategory =
  | 'All Packages'
  | 'Shirdi & Maharashtra Tours'
  | 'Jyotirlinga Special Tours'
  | 'Telangana Temple Tours'
  | 'South India Temple Tours'
  | 'Ayodhya Dham Yatra'
  | 'Custom Spiritual Tours';

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: Exclude<RegionFilter, 'All'>;
  state: string;
  primaryDeity: string;
  shortDescription: string;
  editorialStory: string;
  bestSeason: string;
  idealDuration: string;
  moodTags: string[];
  highlights: string[];
  mapQuery: string;
  lat: number;
  lng: number;
  image: string;
  alt: string;
  gridClass?: string;
}

export interface JourneyDay {
  day: string;
  title: string;
  detail: string;
}

export interface FeaturedJourney {
  id: string;
  category: Exclude<PackageCategory, 'All Packages'>;
  title: string;
  destinationId: string;
  destinationName: string;
  duration: string;
  routeSummary: string;
  sampleEstimate: string;
  summary: string;
  highlights: string[];
  itinerary: JourneyDay[];
  suitableFor: string;
  image: string;
  alt: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pairedDestinations: string;
  image: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  spanClass: string;
}

/* ========================================================================
   POPULAR SPIRITUAL DESTINATIONS (STRICT 14 APPROVED PILGRIMAGE HUBS)
   ======================================================================== */
export const DESTINATIONS: Destination[] = [
  // 1. Shirdi
  {
    id: 'shirdi',
    name: 'Shirdi',
    tagline: 'Abode of Shri Sai Baba & Path of Shraddha and Saburi.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Shri Sai Baba',
    shortDescription:
      'The sacred Samadhi Mandir and Dwarkamai of Shri Sai Baba, radiating boundless compassion and peace to every visiting devotee.',
    editorialStory:
      'Shirdi is the sacred town blessed by the divine presence of Shri Sai Baba. Millions of devotees gather at the Samadhi Mandir to experience profound serenity, attend the divine Kakad and Shej Aartis, and reflect on the timeless teachings of faith (Shraddha) and patience (Saburi).',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Sai Samadhi', 'Shraddha & Saburi', 'Sacred Dhuni'],
    highlights: [
      'Darshan at Shri Sai Baba Samadhi Mandir',
      'Visit holy Dwarkamai, Chavadi, and Gurusthan',
      'Experience peaceful Kakad and Shej Aarti blessings',
      'Visit nearby Shani Shingnapur open-air temple',
    ],
    mapQuery: 'Shri Saibaba Sansthan Temple Shirdi Maharashtra',
    lat: 19.7667,
    lng: 74.4766,
    image: '/images/destinations/shirdi.jpg',
    alt: 'Sai Baba Samadhi Mandir in Shirdi',
    gridClass: 'md:col-span-6 md:row-span-2 md:min-h-[520px]',
  },

  // 2. Yaganti
  {
    id: 'yaganti',
    name: 'Yaganti',
    tagline: 'Ancient Cave Shrine of Sri Uma Maheswara & Growing Nandi.',
    region: 'South India',
    state: 'Andhra Pradesh',
    primaryDeity: 'Lord Shiva (Sri Uma Maheswara)',
    shortDescription:
      'Famous for the miraculous growing stone Nandi and natural mountain cave shrines of Sri Uma Maheswara Swamy in Kurnool.',
    editorialStory:
      'Nestled amidst rugged red sandstone hills in Kurnool district, Sri Yaganti Uma Maheswara Temple is an ancient 15th-century wonder. Pilgrims marvel at the miraculous expanding Nandi statue, holy Pushkarini with perennial sweet spring water, and the meditation caves of Agastya and Sri Potuluri Veerabrahmendra Swamy.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Miraculous Nandi', 'Cave Shrines', 'Sacred Pushkarini'],
    highlights: [
      'Darshan of Sri Uma Maheswara Swamy carved from single stone',
      'Witness the miraculous growing Nandi idol',
      'Holy bath in the perennial natural Pushkarini pool',
      'Explore Agastya Cave and Venkateswara Cave shrines',
    ],
    mapQuery: 'Sri Yaganti Uma Maheswara Temple Yaganti Andhra Pradesh',
    lat: 15.3512,
    lng: 78.1408,
    image: '/images/destinations/yaganti.jpg',
    alt: 'Sri Yaganti Uma Maheswara Temple Gopuram and sacred surroundings',
    gridClass: 'md:col-span-6 md:min-h-[260px]',
  },

  // 3. Akalkot
  {
    id: 'akalkot',
    name: 'Akalkot',
    tagline: 'Sacred Vatavruksha Abode of Shri Swami Samarth Maharaj.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Shri Swami Samarth Maharaj',
    shortDescription:
      'The divine sanctum where Shri Swami Samarth lived under the banyan tree, blessing millions with the promise: "Bhiu Nakos, Mi Tujhya Pathishi Aahe."',
    editorialStory:
      'Akkalkot is the sacred karmabhoomi of Shri Swami Samarth Maharaj, revered as the third incarnation of Lord Dattatreya. Centered around the holy Vatavruksha (Banyan Tree) temple and Samadhi Mandir, devotees experience profound peace, divine Mahaprasad, and boundless spiritual strength.',
    bestSeason: 'October – February',
    idealDuration: '1 to 2 Days',
    moodTags: ['Datta Avatara', 'Vatavruksha Temple', 'Divine Blessings'],
    highlights: [
      'Darshan at Vatavruksha Swami Samarth Mandir',
      'Visit Samadhi Mandir and Rajwada of Akkalkot',
      'Partake in holy Mahaprasad and daily Paduka Puja',
      'Comfortable pilgrimage transit connecting Pandharpur & Solapur',
    ],
    mapQuery: 'Shri Swami Samarth Maharaj Mandir Akkalkot Maharashtra',
    lat: 17.5256,
    lng: 76.2045,
    image: '/images/destinations/akalkot.jpg',
    alt: 'Shri Swami Samarth Maharaj Temple at Akkalkot',
    gridClass: 'md:col-span-6 md:min-h-[260px]',
  },

  // 4. Kolhapur
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    tagline: 'Historic Maha Shakti Peeth of Goddess Mahalakshmi (Ambabai).',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Goddess Mahalakshmi (Ambabai)',
    shortDescription:
      'One of the eighteen sacred Maha Shakti Peeths, where the Mother of Wealth and Prosperity bestows auspicious grace on all devotees.',
    editorialStory:
      'The historic Shri Mahalakshmi Temple at Kolhapur is a masterpiece of ancient Hemadpanthi architecture dating back to the Chalukya era. Pilgrims visit this holy Shakti Peeth seeking health, prosperity, and blessings, especially in conjunction with visits to Tirupati Balaji.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Maha Shakti Peeth', 'Ambabai', 'Ancient Architecture'],
    highlights: [
      'Darshan of deity Mahalakshmi carved in black stone with golden ornaments',
      'Explore the ancient Hemadpanthi stone spires and Mandapams',
      'Witness special Deeparadhana and evening Palakhi procession',
      'Visit nearby Rankala Lake and Bhavani Mandap',
    ],
    mapQuery: 'Shri Mahalakshmi Temple Kolhapur Maharashtra',
    lat: 16.6944,
    lng: 74.2223,
    image: '/images/destinations/kolhapur.jpg',
    alt: 'Shri Mahalakshmi Ambabai Temple in Kolhapur',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 5. Yadagirigutta
  {
    id: 'yadagirigutta',
    name: 'Yadagirigutta',
    tagline: 'The Divine Hillock of Sri Lakshmi Narasimha Swamy.',
    region: 'South India',
    state: 'Telangana',
    primaryDeity: 'Sri Lakshmi Narasimha Swamy',
    shortDescription:
      'Telangana’s magnificent architectural wonder carved from Krishna Shila stone atop the sacred Yadadri hillock.',
    editorialStory:
      'Consecrated with centuries of devotion and newly reconstructed into an awe-inspiring stone temple complex, Sri Lakshmi Narasimha Swamy Temple at Yadagirigutta is Telangana’s premier spiritual landmark, just a short drive from Hyderabad with smooth express highway access.',
    bestSeason: 'Throughout the Year',
    idealDuration: '1 to 2 Days',
    moodTags: ['Telangana Heritage', 'Pancha Narasimha', 'Dravidian Stone Carving'],
    highlights: [
      'Garbhalaya Darshan inside the ancient natural cave sanctum',
      'Magnificent Krishna Shila carved Prakarams and Rajagopuram',
      'Suvarna Pushparchana & Sri Sudarshana Narasimha Homam',
      'Fast doorstep pickup & return transport from Hyderabad',
    ],
    mapQuery: 'Sri Lakshmi Narasimha Swamy Temple Yadagirigutta Telangana',
    lat: 17.5894,
    lng: 78.9398,
    image: '/images/destinations/yadagirigutta.jpg',
    alt: 'Sri Lakshmi Narasimha Swamy Temple main Gopuram at Yadagirigutta',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 6. Swarnagiri
  {
    id: 'swarnagiri',
    name: 'Swarnagiri',
    tagline: 'Gleaming Golden Abode of Sri Venkateswara on the Hilltop.',
    region: 'South India',
    state: 'Telangana',
    primaryDeity: 'Lord Venkateswara Swamy',
    shortDescription:
      'The majestic hill temple near Bhuvanagiri featuring golden spires, intricate Dravidian architecture, and panoramic valley views.',
    editorialStory:
      'Perched serenely atop the Manikonda hills in Bhuvanagiri, Swarnagiri Sri Venkateswara Temple is a newly consecrated spiritual marvel. Devotees admire the towering Rajagopuram, shimmering golden Vimana, sacred Pushkarini, and peaceful temple gardens just 45 km from Hyderabad.',
    bestSeason: 'October – March',
    idealDuration: '1 Day',
    moodTags: ['Golden Temple', 'Hilltop Sanctuary', 'Telangana Pilgrimage'],
    highlights: [
      'Splendid Darshan of Sri Venkateswara Swamy in sanctum sanctorum',
      'Panoramic 360-degree hilltop views of surrounding countryside',
      'Beautifully manicured gardens, fountains, and wide pradakshina paths',
      'Easy same-day combo tour with nearby Yadagirigutta temple',
    ],
    mapQuery: 'Swarnagiri Temple Bhuvanagiri Yadadri Telangana',
    lat: 17.5147,
    lng: 78.8924,
    image: '/images/destinations/swarnagiri.jpg',
    alt: 'Swarnagiri Sri Venkateswara Swamy Temple in Bhuvanagiri',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 7. Tirupati
  {
    id: 'tirupati',
    name: 'Tirupati',
    tagline: 'Abode of Sri Venkateswara Swamy atop the Seven Hills.',
    region: 'South India',
    state: 'Andhra Pradesh',
    primaryDeity: 'Lord Venkateswara (Balaji)',
    shortDescription:
      'The sacred Seshachalam hills and the holy sanctum of Kaliyuga Vaikuntham, welcoming millions of devout pilgrims.',
    editorialStory:
      'Perched atop the sacred seven hills of Tirumala, the sanctum of Lord Venkateswara radiates profound spiritual peace. From sacred Suprabhata Seva at dawn to the peaceful chant of Govinda Namalu, Tirupati is an unforgettable pilgrimage of faith and surrender.',
    bestSeason: 'September – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Divya Desam', 'Kaliyuga Vaikuntham', 'Seven Sacred Hills'],
    highlights: [
      'Darshan of Sri Venkateswara Swamy atop Tirumala hills',
      'Visit Sri Padmavathi Ammavari Temple at Tiruchanur',
      'Holy bath at Swami Pushkarini sacred teertham',
      'Comfortable AC cab transfers from Hyderabad & clean hotel booking',
    ],
    mapQuery: 'Sri Venkateswara Swamy Temple Tirumala Tirupati Andhra Pradesh',
    lat: 13.6833,
    lng: 79.3472,
    image: '/images/destinations/tirupati.jpg',
    alt: 'Tirumala Sri Venkateswara Swamy Temple Ananda Nilayam Gopuram',
    gridClass: 'md:col-span-6 md:min-h-[300px]',
  },

  // 8. Mallikarjuna Jyotirlinga (Srisailam)
  {
    id: 'srisailam',
    name: 'Mallikarjuna Jyotirlinga (Srisailam)',
    tagline: 'Sacred Shiva-Shakti Sangamam on the Nallamala Hills.',
    region: 'South India',
    state: 'Andhra Pradesh',
    primaryDeity: 'Lord Mallikarjuna Swamy & Bhramaramba Devi',
    shortDescription:
      'Revered as the 2nd Jyotirlinga and one of the 18 Maha Shakti Peeths, nestled on the scenic banks of the Krishna River.',
    editorialStory:
      'Srisailam is uniquely sacred: it houses both the divine Jyotirlinga of Lord Mallikarjuna and the Bhramaramba Devi Shakti Peeth. Surrounded by the dense Nallamala wildlife sanctuary and the scenic Krishna gorges, it is a journey of sublime devotion and natural splendour.',
    bestSeason: 'October – February',
    idealDuration: '2 to 3 Days',
    moodTags: ['Jyotirlinga', 'Maha Shakti Peeth', 'Nallamala Forests'],
    highlights: [
      'Sparsha Darshan of Sri Mallikarjuna Swamy Jyotirlinga',
      'Blessings at Sri Bhramaramba Devi Shakti Peeth',
      'Pathalaganga ropeway and boat ride on the Krishna River',
      'Sakshi Ganapathi, Paladhara Panchadhara, and Shikhareswaram darshan',
    ],
    mapQuery: 'Mallikarjuna Jyotirlinga Temple Srisailam Andhra Pradesh',
    lat: 16.0747,
    lng: 78.8683,
    image: '/images/destinations/srisailam.jpg',
    alt: 'Sri Bhramaramba Mallikarjuna Jyotirlinga Temple Entrance at Srisailam',
    gridClass: 'md:col-span-6 md:min-h-[300px]',
  },

  // 9. Arunachalam
  {
    id: 'arunachalam',
    name: 'Arunachalam',
    tagline: 'Holy Agni Lingam & Cosmic Arunachaleswarar Temple.',
    region: 'South India',
    state: 'Tamil Nadu',
    primaryDeity: 'Lord Arunachaleswarar (Agni Lingam)',
    shortDescription:
      'The sacred Hill of Fire in Tiruvannamalai and one of the Pancha Bhoota Sthalams, celebrated for holy Girivalam pradakshina.',
    editorialStory:
      'Arunachalam in Tiruvannamalai is considered the physical manifestation of Lord Shiva as an infinite pillar of fire. Devotees from around the world perform the auspicious 14-km barefoot Girivalam around the sacred hill and seek blessings at the majestic 1000-pillar Arunachaleswarar Temple.',
    bestSeason: 'November – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Pancha Bhoota', 'Agni Lingam', 'Girivalam Pradakshina'],
    highlights: [
      'Darshan at the massive 24-acre Sri Arunachaleswarar Temple complex',
      'Auspicious Girivalam barefoot circumambulation of the holy hill',
      'Visit Sri Ramana Maharshi Ashram and Virupaksha Cave',
      'Witness the world-renowned Karthigai Deepam beacon ceremony',
    ],
    mapQuery: 'Arunachaleswarar Temple Tiruvannamalai Tamil Nadu',
    lat: 12.2319,
    lng: 79.0677,
    image: '/images/destinations/arunachalam.jpg',
    alt: 'Arunachaleswarar Temple and Sacred Arunachala Hill in Tiruvannamalai',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 10. Pandharpur
  {
    id: 'pandharpur',
    name: 'Pandharpur',
    tagline: 'Vithoba Vitthal Rukmini Mandir on the Chandrabhaga.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Lord Vitthal (Vithoba) & Rukmini',
    shortDescription:
      'The supreme pilgrimage capital of Maharashtra where Lord Vitthal stands with hands on hips, listening to the loving chants of "Vitthal Vitthal."',
    editorialStory:
      'Situated on the crescent banks of River Bhima (Chandrabhaga), Pandharpur is the heart of the Warkari devotion. Pilgrims come from far and wide to touch the lotus feet of Lord Vitthal (Charan Sparsh) and experience the divine bliss of saintly bhajans and Namasankirtan.',
    bestSeason: 'July – February',
    idealDuration: '1 to 2 Days',
    moodTags: ['Warkari Sampradaya', 'Vitthal Darshan', 'Chandrabhaga Holy Dip'],
    highlights: [
      'Charan Sparsh Darshan of Lord Vitthal and Goddess Rukmini',
      'Holy snan at Chandrabhaga River ghats',
      'Visit Pundalik Temple and Kaikadi Maharaj Math',
      'Integrated circuit with nearby Akkalkot Swami Samarth temple',
    ],
    mapQuery: 'Shri Vitthal Rukmini Mandir Pandharpur Maharashtra',
    lat: 17.6778,
    lng: 75.3283,
    image: '/images/destinations/pandharpur.jpg',
    alt: 'Shri Vitthal Rukmini Temple in Pandharpur',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 11. Dagadusheth Ganapati Mandir, Pune
  {
    id: 'dagadusheth',
    name: 'Dagadusheth Ganapati Mandir, Pune',
    tagline: 'Shreemant Dagadusheth Halwai Ganapati Temple of Miracles.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Lord Shreemant Dagadusheth Ganapati',
    shortDescription:
      'Pune’s most celebrated Ganesh temple, visited by millions of devotees seeking wish-fulfillment, wisdom, and blessings of prosperity.',
    editorialStory:
      'Built in 1893 by sweetmeat trader Dagadusheth Halwai and blessed by Lokmanya Tilak, this magnificent temple houses the magnificent 7.5-foot gold-adorned idol of Lord Ganesha. The temple radiates unparalleled spiritual energy and grand festive devotion.',
    bestSeason: 'Throughout the Year',
    idealDuration: '1 to 2 Days',
    moodTags: ['Siddhi Vinayaka', 'Pune Heritage', 'Ganesh Utsav'],
    highlights: [
      'Darshan of the gold-adorned Shreemant Dagadusheth Ganapati idol',
      'Witness the majestic Suvarna Jalabhisheka and daily Maha Aarti',
      'Explore nearby historic Shaniwar Wada and Lal Mahal in Pune',
      'Easy transit connection to Bhimashankar Jyotirlinga and Shirdi',
    ],
    mapQuery: 'Shreemant Dagdusheth Halwai Ganpati Mandir Pune Maharashtra',
    lat: 18.5165,
    lng: 73.8562,
    image: '/images/destinations/dagadusheth.jpg',
    alt: 'Shreemant Dagadusheth Halwai Ganapati Temple in Pune',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 12. Bhimashankar
  {
    id: 'bhimashankar',
    name: 'Bhimashankar',
    tagline: 'Ancient Sahyadri Jyotirlinga amidst Forested Western Ghats.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Lord Bhimashankar Jyotirlinga',
    shortDescription:
      'One of the 12 sacred Jyotirlingas of Lord Shiva and source of River Bhima, enveloped in mist-clad peaks and Nagara architecture.',
    editorialStory:
      'Set high in the Sahyadri ranges of Pune district, Bhimashankar Jyotirlinga is enshrined in a picturesque 13th-century stone temple. According to legends, Lord Shiva defeated the demon Tripurasura here. The serene forest surroundings and sacred chants make it deeply rejuvenating.',
    bestSeason: 'September – February',
    idealDuration: '1 to 2 Days',
    moodTags: ['12 Jyotirlingas', 'Sahyadri Hills', 'River Bhima Origin'],
    highlights: [
      'Sparsha Darshan of Swayambhu Bhimashankar Jyotirlinga',
      'Marvel at detailed stone Nagara architectural carvings',
      'Visit Kamalja Mata Temple and scenic Bombay Point view',
      'Spot the rare Giant Malabar Squirrel in the surrounding wildlife sanctuary',
    ],
    mapQuery: 'Bhimashankar Jyotirlinga Temple Pune Maharashtra',
    lat: 19.0721,
    lng: 73.5358,
    image: '/images/destinations/bhimashankar.jpg',
    alt: 'Bhimashankar Jyotirlinga Temple amidst lush Western Ghats',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 13. Trimbakeshwar
  {
    id: 'trimbakeshwar',
    name: 'Trimbakeshwar',
    tagline: 'Three-Faced Jyotirlinga of Brahma, Vishnu & Mahesh at Brahmagiri.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Lord Trimbakeshwar Jyotirlinga',
    shortDescription:
      'The sacred Jyotirlinga near Nashik featuring a three-faced lingam and origin of the holy Godavari River, renowned for Narayan Nagbali rituals.',
    editorialStory:
      'Nestled at the foothills of sacred Mount Brahmagiri in Nashik, Trimbakeshwar Jyotirlinga is unique because its lingam embodies Lord Brahma, Lord Vishnu, and Lord Shiva together. Built of black basalt stone by the Peshwas, it is revered for sacred Kaalsarp and pitru rituals.',
    bestSeason: 'October – March',
    idealDuration: '2 Days',
    moodTags: ['Trimurti Jyotirlinga', 'Godavari Origin', 'Kumbh Mela Kshetra'],
    highlights: [
      'Darshan of the unique three-faced Swayambhu Jyotirlinga',
      'Holy dip at Kushavarta Kund, source of the sacred Godavari River',
      'Explore the ancient black stone temple prakaram and deepastambha',
      'Visit Brahmagiri hill viewpoint and Gangadwar shrine',
    ],
    mapQuery: 'Trimbakeshwar Shiva Temple Nashik Maharashtra',
    lat: 19.9328,
    lng: 73.5307,
    image: '/images/destinations/trimbakeshwar.jpg',
    alt: 'Trimbakeshwar Shiva Jyotirlinga Temple near Nashik',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },

  // 14. Ayodhya
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    tagline: 'Sacred Janmabhoomi of Bhagwan Shri Ram on Holy Sarayu.',
    region: 'North India',
    state: 'Uttar Pradesh',
    primaryDeity: 'Bhagwan Shri Ram Lalla',
    shortDescription:
      'The revered birthplace of Bhagwan Shri Ram, featuring the grand newly consecrated Shri Ram Janmabhoomi Mandir and Sarayu Aarti.',
    editorialStory:
      'Ayodhya Dham is one of the supreme Moksha Dhams of Sanatana Dharma. With the divine Pran Pratishtha of Shri Ram Lalla in the majestic Nagara-style stone temple, devotees experience profound devotion, peaceful boat rides on the holy Sarayu, and timeless blessings at Hanuman Garhi.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Ram Janmabhoomi', 'Moksha Dham', 'Sarayu River Aarti'],
    highlights: [
      'Darshan of Bhagwan Shri Ram Lalla inside the grand Ram Mandir',
      'Blessings at the historic Hanuman Garhi fort temple',
      'Atmospheric sunset Maha Aarti along the Sarayu River ghats',
      'Visit Kanak Bhavan and Dashrath Mahal spiritual landmarks',
    ],
    mapQuery: 'Shri Ram Janmabhoomi Mandir Ayodhya Uttar Pradesh',
    lat: 26.7956,
    lng: 82.1944,
    image: '/images/destinations/ayodhya.jpg',
    alt: 'Grand Shri Ram Janmabhoomi Mandir at Ayodhya Dham',
    gridClass: 'md:col-span-4 md:min-h-[280px]',
  },
];

/* ========================================================================
   CURATED PILGRIMAGE TOUR PACKAGES (STRICTLY FROM THE 14 DESTINATIONS)
   ======================================================================== */
export const FEATURED_JOURNEYS: FeaturedJourney[] = [
  {
    id: 'pkg-shirdi-maharashtra',
    category: 'Shirdi & Maharashtra Tours',
    title: 'Shirdi, Akalkot & Pandharpur Devotee Circuit',
    destinationId: 'shirdi',
    destinationName: 'Shirdi & Maharashtra Shrines',
    duration: '4 Days / 3 Nights',
    routeSummary: 'Hyderabad → Akalkot → Pandharpur → Shirdi → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'A deeply uplifting pilgrimage linking the divine grace of Shri Swami Samarth at Akalkot, Lord Vitthal at Pandharpur, and Shri Sai Baba at Shirdi.',
    highlights: [
      'Vatavruksha Swami Samarth Mandir Darshan in Akalkot',
      'Charan Sparsh Darshan of Lord Vitthal and Rukmini in Pandharpur',
      'VIP Darshan & Kakad Aarti coordination at Shirdi Sai Samadhi Mandir',
      'Comfortable sanitized AC multi-axle / Innova vehicle with experienced driver',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Hyderabad to Akalkot (Swami Samarth Darshan)',
        detail:
          'Morning pickup from your residence in Hyderabad. Drive comfortably to Akalkot. Check-in and attend afternoon Darshan at Vatavruksha Swami Samarth Mandir. Overnight stay.',
      },
      {
        day: 'Day 02',
        title: 'Akalkot to Pandharpur (Vitthal Rukmini Temple)',
        detail:
          'Early morning prayers in Akalkot. Drive to sacred Pandharpur on the Chandrabhaga River. Experience peaceful Charan Sparsh Darshan of Lord Vitthal. Evening drive towards Shirdi.',
      },
      {
        day: 'Day 03',
        title: 'Shirdi Sai Baba Samadhi Mandir & Dwarkamai',
        detail:
          'Full day immersed in devotion at Shirdi. Attend morning Samadhi Mandir Darshan, holy Dwarkamai, Chavadi, and Gurusthan. Evening Shej Aarti.',
      },
      {
        day: 'Day 04',
        title: 'Shirdi to Hyderabad (Return Journey)',
        detail:
          'Morning prayers and Mahaprasad at Shirdi. Comfortable return drive to Hyderabad with doorstep drop-off by evening.',
      },
    ],
    suitableFor: 'Families, Senior Citizens & Dattatreya-Sai Devotees',
    image: '/images/destinations/shirdi.jpg',
    alt: 'Sai Baba Samadhi Mandir in Shirdi',
  },
  {
    id: 'pkg-jyotirlinga-maharashtra-andhra',
    category: 'Jyotirlinga Special Tours',
    title: 'Trimbakeshwar & Bhimashankar Jyotirlinga Yatra',
    destinationId: 'trimbakeshwar',
    destinationName: 'Trimbakeshwar & Bhimashankar',
    duration: '3 Days / 2 Nights',
    routeSummary: 'Pune/Mumbai/Hyderabad → Bhimashankar → Trimbakeshwar (Nashik) → Dagadusheth Ganapati',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Sacred pilgrimage to two ancient Sahyadri Jyotirlingas of Lord Shiva, plus blessings at Pune’s famous Dagadusheth Halwai Ganapati Mandir.',
    highlights: [
      'Darshan of Swayambhu Bhimashankar Jyotirlinga amidst green Sahyadris',
      'Three-faced Trimurti Jyotirlinga Darshan at Trimbakeshwar near Nashik',
      'Holy dip at Kushavarta Kund and Godavari Teertham',
      'Blessings at Shreemant Dagadusheth Halwai Ganapati Temple in Pune',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival & Bhimashankar Jyotirlinga',
        detail:
          'Scenic drive into the Sahyadri mountains to sacred Bhimashankar. Afternoon Sparsha Darshan of the ancient Jyotirlinga. Evening drive to Nashik.',
      },
      {
        day: 'Day 02',
        title: 'Trimbakeshwar Jyotirlinga & Brahmagiri',
        detail:
          'Early morning Abhishek and Darshan of the three-faced Trimbakeshwar Jyotirlinga. Visit Kushavarta Kund and holy Godavari origin.',
      },
      {
        day: 'Day 03',
        title: 'Dagadusheth Ganapati Mandir, Pune & Return',
        detail:
          'Morning travel to Pune to seek the blessings of Shreemant Dagadusheth Halwai Ganapati. Return drop-off with divine memories.',
      },
    ],
    suitableFor: 'Shiva Devotees, Families & Spiritual Travellers',
    image: '/images/destinations/trimbakeshwar.jpg',
    alt: 'Trimbakeshwar Shiva Jyotirlinga Temple near Nashik',
  },
  {
    id: 'pkg-telangana-shrines',
    category: 'Telangana Temple Tours',
    title: 'Yadagirigutta & Swarnagiri Temple Day Pilgrimage',
    destinationId: 'yadagirigutta',
    destinationName: 'Yadagirigutta & Swarnagiri',
    duration: '1 Day (Doorstep Same-Day Tour)',
    routeSummary: 'Hyderabad → Swarnagiri Temple → Yadagirigutta → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'A comfortable same-day pilgrimage from Hyderabad visiting the gleaming Swarnagiri Venkateswara temple and the grand stone marvel of Sri Lakshmi Narasimha Swamy.',
    highlights: [
      'Doorstep AC vehicle pickup from any location in Hyderabad & Secunderabad',
      'Morning Darshan at the golden hilltop Swarnagiri temple in Bhuvanagiri',
      'Garbhalaya Darshan inside Yadagirigutta cave sanctum sanctorum',
      'Unhurried elderly-friendly pace with return home by evening',
    ],
    itinerary: [
      {
        day: 'Morning',
        title: 'Hyderabad Departure to Swarnagiri',
        detail:
          'Morning pickup from your home. Smooth 45-minute drive on Warangal Highway to Swarnagiri Venkateswara Swamy Temple. Witness the golden vimanam and attend darshan.',
      },
      {
        day: 'Afternoon',
        title: 'Yadagirigutta Sri Lakshmi Narasimha Swamy Darshan',
        detail:
          'Proceed 15 minutes to Yadagirigutta. Take the ghat road to the sanctum. Attend special darshan, receive prasadam, and admire the Krishna Shila stone carvings.',
      },
      {
        day: 'Evening',
        title: 'Comfortable Return to Hyderabad',
        detail:
          'Relax on the scenic return drive to Hyderabad with safe doorstep drop-off.',
      },
    ],
    suitableFor: 'Local Hyderabad Families, Senior Citizens & Weekend Pilgrims',
    image: '/images/destinations/yadagirigutta.jpg',
    alt: 'Sri Lakshmi Narasimha Swamy Temple at Yadagirigutta',
  },
  {
    id: 'pkg-south-india-yatra',
    category: 'South India Temple Tours',
    title: 'Tirupati Balaji & Srisailam Mallikarjuna Yatra',
    destinationId: 'tirupati',
    destinationName: 'Tirupati & Srisailam',
    duration: '3 Days / 2 Nights',
    routeSummary: 'Hyderabad → Srisailam Jyotirlinga → Tirupati Balaji → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Consecrated pilgrimage combining Andhra Pradesh’s two supreme abodes: Mallikarjuna Jyotirlinga at Srisailam and Sri Venkateswara Swamy at Tirumala.',
    highlights: [
      'Sparsha Darshan at Mallikarjuna Jyotirlinga & Bhramaramba Shakti Peeth',
      'Scenic passage through Nallamala tiger sanctuary and Krishna river valley',
      'Special Entry Darshan coordination at Tirumala Sri Venkateswara Temple',
      'Dedicated AC chauffeur throughout with sanitized hotel arrangements',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Hyderabad to Srisailam (Jyotirlinga & Shakti Peeth)',
        detail:
          'Early departure from Hyderabad through scenic Nallamala forests. Afternoon darshan of Mallikarjuna Swamy Jyotirlinga and Bhramaramba Devi. Overnight in Srisailam.',
      },
      {
        day: 'Day 02',
        title: 'Srisailam to Tirupati (Seshachalam Hills)',
        detail:
          'Morning prayers in Srisailam. Relaxing drive across Rayalaseema to the holy foothills of Tirupati. Check-in and evening visit to Padmavathi Ammavari temple.',
      },
      {
        day: 'Day 03',
        title: 'Tirumala Balaji Darshan & Return',
        detail:
          'Ascend the holy seven hills for divine Darshan of Lord Venkateswara at Ananda Nilayam. Receive Tirumala Laddus and commence comfortable return journey.',
      },
    ],
    suitableFor: 'Devout Families, Elders & Spiritual Seekers',
    image: '/images/destinations/tirupati.jpg',
    alt: 'Tirumala Sri Venkateswara Swamy Temple',
  },
  {
    id: 'pkg-ayodhya-dham',
    category: 'Ayodhya Dham Yatra',
    title: 'Ayodhya Shri Ram Janmabhoomi Darshan Yatra',
    destinationId: 'ayodhya',
    destinationName: 'Ayodhya Dham',
    duration: '3 Days / 2 Nights',
    routeSummary: 'Lucknow/Ayodhya Airport/Station → Ram Mandir → Hanuman Garhi → Sarayu Ghats',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Experience the divine grandeur of the newly consecrated Shri Ram Janmabhoomi Mandir, historic Hanuman Garhi, and atmospheric sunset Sarayu Aarti.',
    highlights: [
      'Darshan of Bhagwan Shri Ram Lalla inside the grand carved stone Ram Mandir',
      'Blessings at Hanuman Garhi and Kanak Bhavan',
      'Soulful evening boat ride and Maha Aarti on the holy Sarayu River',
      'Personalized elder-care assistance with e-rickshaw coordination',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Ayodhya Dham & Sarayu Evening Aarti',
        detail:
          'Warm welcome on arrival. Hotel check-in. Evening peaceful boat ride on the holy Sarayu River and attend the mesmerizing sunset Maha Aarti at Ram Ki Paidi.',
      },
      {
        day: 'Day 02',
        title: 'Shri Ram Janmabhoomi & Hanuman Garhi',
        detail:
          'Morning sacred Darshan of Shri Ram Lalla at the grand Ram Mandir. Blessings at Hanuman Garhi, Kanak Bhavan, and Dashrath Mahal.',
      },
      {
        day: 'Day 03',
        title: 'Surya Kund, Guptar Ghat & Departure',
        detail:
          'Morning visit to sacred Surya Kund and historic Guptar Ghat. Departure with cherished blessings of Bhagwan Shri Ram.',
      },
    ],
    suitableFor: 'Ram Bhaktas, Families & Senior Citizens',
    image: '/images/destinations/ayodhya.jpg',
    alt: 'Shri Ram Janmabhoomi Mandir in Ayodhya',
  },
  {
    id: 'pkg-custom-spiritual',
    category: 'Custom Spiritual Tours',
    title: 'Bespoke Private Pilgrimage Across 14 Sacred Shrines',
    destinationId: 'shirdi',
    destinationName: 'Custom Spiritual Route',
    duration: 'Custom Duration',
    routeSummary: 'Tailored pickup from Hyderabad to any of the 14 approved pilgrimage shrines',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Design your family’s unique pilgrimage route across Shirdi, Yaganti, Akalkot, Kolhapur, Yadagirigutta, Swarnagiri, Tirupati, Srisailam, Arunachalam, Pandharpur, Dagadusheth, Bhimashankar, Trimbakeshwar, or Ayodhya.',
    highlights: [
      'Completely flexible dates, itinerary pacing, and temple order',
      'Dedicated AC fleet (Innova Crysta, Ertiga, Tempo Traveller, Luxury Coaches)',
      'Special wheelchair & senior citizen care arrangements on request',
      'Transparent, itemized quotation with zero hidden fees',
    ],
    itinerary: [
      {
        day: 'Day 01+',
        title: 'Your Tailored Spiritual Itinerary',
        detail:
          'Our pilgrimage coordinators consult with you to build the ideal daily schedule, darshan slots, hotel accommodations, and rest stops tailored to your family needs.',
      },
    ],
    suitableFor: 'Private Family Groups, Elders & Custom Spiritual Yatras',
    image: '/images/destinations/srisailam.jpg',
    alt: 'Custom Spiritual Tour with Bhargavi Tour and Travels',
  },
];

/* ========================================================================
   DEVOTIONAL EXPERIENCES & RITUALS (ALIGNED WITH THE 14 SHRINES)
   ======================================================================== */
export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-sparsha-darshan',
    title: 'Sparsha Darshan & Sacred Abhishekam',
    subtitle: 'Mallikarjuna Srisailam & Bhimashankar',
    description:
      'Touch the sacred Jyotirlinga stones with your own hands during sanctioned Sparsha Darshan windows, chanting the eternal Om Namah Shivaya with deep inner tranquility.',
    pairedDestinations: 'Srisailam • Bhimashankar • Trimbakeshwar',
    image: '/images/destinations/srisailam.jpg',
    alt: 'Sanctum and temple courtyard of Mallikarjuna Jyotirlinga at Srisailam',
  },
  {
    id: 'exp-kakad-aarti',
    title: 'Shirdi Sai Dawn Kakad & Shej Aarti',
    subtitle: 'Shirdi Samadhi Mandir & Dwarkamai',
    description:
      'Awaken at dawn in holy Shirdi to the resonant bells and devotional chants of Kakad Aarti, experiencing the peace and compassion of Shri Sai Baba.',
    pairedDestinations: 'Shirdi • Akalkot • Pandharpur',
    image: '/images/destinations/shirdi.jpg',
    alt: 'Sai Baba Samadhi Mandir in Shirdi',
  },
  {
    id: 'exp-girivalam-pradakshina',
    title: 'Barefoot Girivalam Circumambulation',
    subtitle: 'Holy Arunachala Hill & Sri Arunachaleswarar',
    description:
      'Walk the 14-kilometer sacred pathway around Mount Arunachala under the moonlight, absorbing the spiritual presence of the cosmic Agni Lingam.',
    pairedDestinations: 'Arunachalam • Tirupati',
    image: '/images/destinations/arunachalam.jpg',
    alt: 'Arunachaleswarar Temple and Sacred Arunachala Hill in Tiruvannamalai',
  },
  {
    id: 'exp-sarayu-aarti',
    title: 'Sunset Sarayu Maha Aarti & Ram Lalla Darshan',
    subtitle: 'Ayodhya Dham & Ram Janmabhoomi',
    description:
      'Experience the grand evening Maha Aarti with hundreds of brass oil lamps glowing on the sacred Sarayu River ghats, followed by divine darshan of Shri Ram Lalla.',
    pairedDestinations: 'Ayodhya Dham',
    image: '/images/destinations/ayodhya.jpg',
    alt: 'Shri Ram Janmabhoomi Mandir at Ayodhya Dham',
  },
];

/* ========================================================================
   GALLERY SHOWCASE (AUTHENTIC 14 SHRINES)
   ======================================================================== */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-tirupati',
    title: 'Tirumala Balaji Ananda Nilayam',
    location: 'Tirupati, Andhra Pradesh',
    category: 'Sacred Hilltop Shrine',
    image: '/images/destinations/tirupati.jpg',
    alt: 'Tirumala Sri Venkateswara Temple Ananda Nilayam Gopuram',
    spanClass: 'md:col-span-8 md:row-span-2',
  },
  {
    id: 'gal-shirdi',
    title: 'Shri Sai Baba Samadhi Mandir',
    location: 'Shirdi, Maharashtra',
    category: 'Devotional Abode',
    image: '/images/destinations/shirdi.jpg',
    alt: 'Shri Sai Baba Samadhi Mandir in Shirdi',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'gal-ayodhya',
    title: 'Shri Ram Janmabhoomi Mandir',
    location: 'Ayodhya, Uttar Pradesh',
    category: 'Sacred Ayodhya Dham',
    image: '/images/destinations/ayodhya.jpg',
    alt: 'Grand Shri Ram Janmabhoomi Mandir in Ayodhya Dham',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'gal-srisailam',
    title: 'Mallikarjuna Jyotirlinga Srisailam',
    location: 'Srisailam, Andhra Pradesh',
    category: 'Jyotirlinga & Shakti Peeth',
    image: '/images/destinations/srisailam.jpg',
    alt: 'Mallikarjuna Jyotirlinga Temple Entrance at Srisailam',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'gal-yadagirigutta',
    title: 'Yadagirigutta Sri Lakshmi Narasimha Swamy',
    location: 'Yadadri, Telangana',
    category: 'Stone Marvel',
    image: '/images/destinations/yadagirigutta.jpg',
    alt: 'Sri Lakshmi Narasimha Swamy Temple main Gopuram at Yadagirigutta',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'gal-swarnagiri',
    title: 'Swarnagiri Golden Venkateswara Temple',
    location: 'Bhuvanagiri, Telangana',
    category: 'Golden Spire Shrine',
    image: '/images/destinations/swarnagiri.jpg',
    alt: 'Swarnagiri Sri Venkateswara Swamy Temple in Bhuvanagiri',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'gal-arunachalam',
    title: 'Arunachaleswarar Agni Lingam Temple',
    location: 'Tiruvannamalai, Tamil Nadu',
    category: 'Pancha Bhoota Sthalam',
    image: '/images/destinations/arunachalam.jpg',
    alt: 'Arunachaleswarar Temple and Sacred Arunachala Hill',
    spanClass: 'md:col-span-6 md:row-span-1',
  },
  {
    id: 'gal-trimbakeshwar',
    title: 'Trimbakeshwar Shiva Jyotirlinga',
    location: 'Nashik, Maharashtra',
    category: 'Trimurti Jyotirlinga',
    image: '/images/destinations/trimbakeshwar.jpg',
    alt: 'Trimbakeshwar Shiva Jyotirlinga Temple near Nashik',
    spanClass: 'md:col-span-6 md:row-span-1',
  },
];
