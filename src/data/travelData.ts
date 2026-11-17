export type RegionFilter =
  | 'All'
  | 'South India'
  | 'North India'
  | 'West & Central India'
  | 'East India';

export type PackageCategory =
  | 'All Packages'
  | 'Jyotirlinga Tours'
  | 'Char Dham Yatra'
  | 'South India Temple Tours'
  | 'North India Pilgrimage'
  | 'Shirdi Sai Baba Tours'
  | 'Telangana Temple Tours'
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
   POPULAR SPIRITUAL DESTINATIONS (30 PILGRIMAGE HUBS ACROSS INDIA)
   ======================================================================== */
export const DESTINATIONS: Destination[] = [
  /* ----------------------- SOUTH INDIA (9) ----------------------- */
  {
    id: 'tirupati',
    name: 'Tirupati',
    tagline: 'Abode of Sri Venkateswara Swamy.',
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
      'Scenic drive along the forested Tirumala ghat roads',
    ],
    mapQuery: 'Sri Venkateswara Swamy Temple Tirumala Tirupati Andhra Pradesh',
    lat: 13.6833,
    lng: 79.3472,
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
    alt: 'Golden Gopuram and temple complex of Sri Venkateswara Swamy in Tirumala Tirupati',
    gridClass: 'md:col-span-7 md:row-span-2 md:min-h-[560px]',
  },
  {
    id: 'srisailam',
    name: 'Srisailam',
    tagline: 'Jyotirlinga & Shakti Peeth on the Krishna.',
    region: 'South India',
    state: 'Andhra Pradesh',
    primaryDeity: 'Mallikarjuna Swamy & Bhramaramba Devi',
    shortDescription:
      'Revered as one of the 12 Jyotirlingas and 18 Maha Shakti Peeths, nestled amidst the deep Nallamala forests.',
    editorialStory:
      'Srisailam is doubly holy: sanctified as the 2nd Jyotirlinga of Lord Shiva and the Shakti Peeth of Goddess Bhramaramba. Nestled on the banks of River Krishna amidst scenic mountain passes, it provides profound solace to every visiting seeker.',
    bestSeason: 'October – February',
    idealDuration: '2 to 3 Days',
    moodTags: ['Jyotirlinga', 'Maha Shakti Peeth', 'Nallamala Forests'],
    highlights: [
      'Sparsha Darshan of Sri Mallikarjuna Swamy Jyotirlinga',
      'Blessings at Sri Bhramaramba Devi Shakti Peeth',
      'Pathalaganga ropeway & boat ride on Krishna River',
      'Scenic Sakshi Ganapathi & Shikhareswaram viewpoints',
    ],
    mapQuery: 'Srisailam Mallikarjuna Swamy Temple Andhra Pradesh',
    lat: 16.0744,
    lng: 78.8686,
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
    alt: 'Ancient stone gopuram and sanctum of Sri Mallikarjuna Swamy Temple at Srisailam',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'yadagirigutta',
    name: 'Yadagirigutta',
    tagline: 'The Divine Hillock of Sri Lakshmi Narasimha.',
    region: 'South India',
    state: 'Telangana',
    primaryDeity: 'Sri Lakshmi Narasimha Swamy',
    shortDescription:
      'Telangana’s magnificent architectural marvel carved from Krishna Shila stone atop the sacred Yadadri hillock.',
    editorialStory:
      'Consecrated with centuries of devotion and newly reconstructed into an awe-inspiring stone temple complex, Sri Lakshmi Narasimha Swamy Temple at Yadagirigutta is Telangana’s premier spiritual landmark, just a short drive from Hyderabad.',
    bestSeason: 'Throughout the Year',
    idealDuration: '1 to 2 Days',
    moodTags: ['Telangana Pride', 'Pancha Narasimha', 'Dravidian Architecture'],
    highlights: [
      'Garbhalaya Darshan inside the ancient natural cave sanctum',
      'Magnificent Krishna Shila carved Prakarams and Rajagopuram',
      'Suvarna Pushparchana & Sri Sudarshana Narasimha Homam',
      'Evening illuminated view of the grand temple hillock',
    ],
    mapQuery: 'Sri Lakshmi Narasimha Swamy Temple Yadagirigutta Telangana',
    lat: 17.5878,
    lng: 78.9482,
    image:
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Grand Dravidian architecture and stone gopuram of Yadagirigutta Lakshmi Narasimha Swamy Temple',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'swarnagiri',
    name: 'Swarnagiri',
    tagline: 'The Golden Temple of Telangana.',
    region: 'South India',
    state: 'Telangana',
    primaryDeity: 'Sri Venkateswara Swamy',
    shortDescription:
      'A serene golden temple dedicated to Lord Venkateswara, set against the peaceful backdrop of the Bhuvanagiri countryside.',
    editorialStory:
      'Swarnagiri (Manepally Hills) has emerged as one of Telangana’s most admired spiritual destinations. The temple dazzles with golden spires, immaculate marble corridors, and a sanctum radiating tranquil devotion near Hyderabad.',
    bestSeason: 'October – March',
    idealDuration: '1 Day Tour',
    moodTags: ['Golden Spires', 'Hyderabad Temple Corridor', 'Peaceful Darshan'],
    highlights: [
      'Darshan of Sri Venkateswara Swamy in a golden sanctum',
      'Beautifully landscaped temple garden & pushkarini',
      'Night illumination of golden Gopurams',
      'Convenient same-day pilgrimage trip from Hyderabad',
    ],
    mapQuery: 'Swarnagiri Sri Venkateswara Swamy Temple Bhuvanagiri Telangana',
    lat: 17.5256,
    lng: 78.8953,
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
    alt: 'Golden temple spires gleaming under blue skies during peaceful morning darshan',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'yaganti',
    name: 'Yaganti',
    tagline: 'Where the Sacred Nandi Grows.',
    region: 'South India',
    state: 'Andhra Pradesh',
    primaryDeity: 'Sri Uma Maheshwara Swamy',
    shortDescription:
      'Ancient 15th-century Vijayanagara cave temple known for the growing Nandi idol and Agastya Pushkarini.',
    editorialStory:
      'Surrounded by imposing red sandstone cliffs in the Kurnool district, Yaganti houses Sri Uma Maheshwara Swamy. The temple is revered for the miraculous growing monolith Nandi, holy natural caves of Sage Agastya, and sweet perennial spring waters.',
    bestSeason: 'October – February',
    idealDuration: '2 Days (with Mahanandi)',
    moodTags: ['Growing Nandi', 'Cave Sanctuaries', 'Perennial Springs'],
    highlights: [
      'Darshan of the monolith Nandi statue known to expand over time',
      'Natural spring bath in Agastya Pushkarini with crystal water',
      'Exploration of Agastya Cave, Venkateswara Cave & Veera Brahmam Cave',
      'Historic 15th-century Vijayanagara stone architecture',
    ],
    mapQuery: 'Yaganti Uma Maheshwara Temple Kurnool Andhra Pradesh',
    lat: 15.3524,
    lng: 78.1407,
    image:
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=85',
    alt: 'Ancient stone temple of Yaganti set against dramatic natural red rock formations in Kurnool',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'arunachalam',
    name: 'Arunachalam',
    tagline: 'The Holy Mountain of Fire & Silence.',
    region: 'South India',
    state: 'Tamil Nadu',
    primaryDeity: 'Sri Annamalaiyar (Agni Lingam)',
    shortDescription:
      'Tiruvannamalai’s monumental temple and sacred holy hill, sanctified by Bhagavan Ramana Maharshi.',
    editorialStory:
      'Arunachalam is celebrated as the Agni (Fire) Tattva of the Pancha Bhoota Stalas. Walking the 14-kilometre Girivalam pathway barefoot around the sacred red hill at dusk or full moon brings deep stillness and spiritual awakening.',
    bestSeason: 'November – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Agni Lingam', 'Girivalam', 'Ramana Maharshi Ashram'],
    highlights: [
      'Darshan at the massive 24-acre Sri Annamalaiyar Temple',
      'Sacred 14 km Girivalam barefoot pradakshina of Arunachala Hill',
      'Meditation at Sri Ramanasramam and Virupaksha Cave',
      'Karthigai Deepam flame atop the sacred mountain peak',
    ],
    mapQuery: 'Annamalaiyar Temple Tiruvannamalai Tamil Nadu',
    lat: 12.2319,
    lng: 79.0677,
    image:
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=85',
    alt: 'Towering Rajagopuram of Annamalaiyar Temple in Tiruvannamalai beneath sacred Mount Arunachala',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    tagline: 'Southern Char Dham on the Sacred Ocean.',
    region: 'South India',
    state: 'Tamil Nadu',
    primaryDeity: 'Sri Ramanathaswamy Jyotirlinga',
    shortDescription:
      'Consecrated by Lord Rama himself, featuring the world’s longest pillared corridors and 22 holy water teerthams.',
    editorialStory:
      'One of India’s four cardinal Dhams and a sacred Jyotirlinga, Rameswaram links epic Ramayana history with oceanic serenity. Pilgrims take holy baths in the 22 temple teerthams before praying at the sanctum where Lord Rama worshipped Shiva.',
    bestSeason: 'October – April',
    idealDuration: '2 to 3 Days',
    moodTags: ['Southern Char Dham', '22 Holy Teerthams', 'Dhanushkodi Ocean'],
    highlights: [
      'Holy bath in the 22 sacred wells within Ramanathaswamy Temple',
      'Walk through the world’s longest 1200-metre carved corridor',
      'Sunrise darshan at Dhanushkodi where the oceans meet',
      'Scenic crossing across the historic Pamban sea bridge',
    ],
    mapQuery: 'Ramanathaswamy Temple Rameswaram Tamil Nadu',
    lat: 9.2881,
    lng: 79.3129,
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    alt: 'Magnificent carved stone pillared corridor of Sri Ramanathaswamy Temple in Rameswaram',
    gridClass: 'md:col-span-6 md:min-h-[380px]',
  },
  {
    id: 'madurai',
    name: 'Madurai',
    tagline: 'The Soul of Tamil Devotion & Living Heritage.',
    region: 'South India',
    state: 'Tamil Nadu',
    primaryDeity: 'Goddess Meenakshi & Sundareswarar',
    shortDescription:
      'The eternal city of nectar, dominated by the multi-tiered sculptured gopurams of the historic Meenakshi Temple.',
    editorialStory:
      'For over two millennia, Madurai has pulsed with spiritual fervor. The massive Meenakshi Amman Temple features 14 towering gopurams, the thousand-pillar hall, and an extraordinary evening Palliyarai ceremony that transports devotees into timeless devotion.',
    bestSeason: 'October – March',
    idealDuration: '2 Days',
    moodTags: ['Meenakshi Amman', 'Thousand Pillar Hall', 'Temple City'],
    highlights: [
      'Darshan of Goddess Meenakshi in her gem-studded emerald form',
      'The Hall of Thousand Pillars with musical stone columns',
      'Night procession ceremony of Lord Sundareswarar',
      'Heritage evening walk through Madurai flower markets',
    ],
    mapQuery: 'Meenakshi Amman Temple Madurai Tamil Nadu',
    lat: 9.9195,
    lng: 78.1193,
    image:
      'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1600&q=85',
    alt: 'Intricately sculptured gopuram of Meenakshi Amman Temple glowing against Madurai twilight',
    gridClass: 'md:col-span-6 md:min-h-[380px]',
  },
  {
    id: 'sabarimala',
    name: 'Sabarimala',
    tagline: 'Swamiye Saranam Ayyappa.',
    region: 'South India',
    state: 'Kerala',
    primaryDeity: 'Lord Dharma Sastha (Ayyappa)',
    shortDescription:
      'The revered forest shrine in the Western Ghats where pilgrims climb the sacred 18 golden steps after 41-day vratham.',
    editorialStory:
      'Deep within the Periyar Tiger Reserve on Mount Sabarimala, the shrine of Lord Ayyappa represents total equality and surrender. Millions undertake rigorous deeksha and carry the Irumudi kettu to ascend the Pathinettam Padi.',
    bestSeason: 'November – January (Mandala-Makaravilakku Season)',
    idealDuration: '3 to 4 Days',
    moodTags: ['Swamiye Saranam', '18 Golden Steps', 'Western Ghats Sanctum'],
    highlights: [
      'Ascent of the holy 18 golden steps (Pathinettam Padi)',
      'Darshan of Lord Ayyappa with Neyyabhishekam ritual',
      'Sacred trek through the lush Pamba river valley',
      'Devotional chanting of Harivarasanam at temple closing',
    ],
    mapQuery: 'Sabarimala Ayyappa Temple Pathanamthitta Kerala',
    lat: 9.4406,
    lng: 77.0811,
    image:
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sacred mountain forest hills of the Western Ghats around Sabarimala pilgrimage shrine',
    gridClass: 'md:col-span-12 md:min-h-[340px]',
  },

  /* ----------------------- NORTH INDIA (9) ----------------------- */
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    tagline: 'Birthplace of Bhagavan Shri Ram.',
    region: 'North India',
    state: 'Uttar Pradesh',
    primaryDeity: 'Shri Ram Lalla',
    shortDescription:
      'The sacred city on the holy Sarayu River, crowned by the magnificent new Shri Ram Janmabhoomi Mandir.',
    editorialStory:
      'Ayodhya stands at the heart of India’s spiritual soul. With the consecration of the grand Nagara-style Shri Ram Janmabhoomi Temple, devotees from across the globe gather to witness the divine balak form of Lord Ram and partake in peaceful Sarayu Aarti.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Ram Janmabhoomi', 'Sarayu River Aarti', 'Hanuman Garhi'],
    highlights: [
      'Darshan at the majestic Shri Ram Janmabhoomi Mandir',
      'Prayers at historic Hanuman Garhi fort temple',
      'Evening illuminated Sarayu River Maha Aarti at Ram Ki Paidi',
      'Kanak Bhawan temple dedicated to Sita and Rama',
    ],
    mapQuery: 'Shri Ram Janmabhoomi Teerth Kshetra Ayodhya Uttar Pradesh',
    lat: 26.7922,
    lng: 82.1998,
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85',
    alt: 'Grand carved sandstone spires of Shri Ram Janmabhoomi Mandir in Ayodhya',
    gridClass: 'md:col-span-7 md:row-span-2 md:min-h-[560px]',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'The Eternal City of Light & Shiva.',
    region: 'North India',
    state: 'Uttar Pradesh',
    primaryDeity: 'Sri Kashi Vishwanath Jyotirlinga',
    shortDescription:
      'The world’s oldest living sacred city on the holy Ganges, renowned for Kashi Vishwanath and mesmerizing Ganga Aarti.',
    editorialStory:
      'To step onto the ancient stone ghats of Varanasi is to enter timeless devotion. Dawn rowboats glide past pilgrims performing surya namaskar, while nightfall at Dashashwamedh Ghat ignites with brass lanterns, conch shells, and rhythmic chants.',
    bestSeason: 'October – March',
    idealDuration: '3 to 4 Days',
    moodTags: ['Kashi Vishwanath', 'Ganga Aarti', 'Sacred Stone Ghats'],
    highlights: [
      'Darshan at Sri Kashi Vishwanath Jyotirlinga & Golden Corridor',
      'Private sunrise boat cruise along 84 historic stone ghats',
      'Spellbinding evening Maha Ganga Aarti at Dashashwamedh Ghat',
      'Prayers at Sankat Mochan Hanuman & Kal Bhairav temples',
    ],
    mapQuery: 'Kashi Vishwanath Temple Varanasi Uttar Pradesh',
    lat: 25.3109,
    lng: 83.0107,
    image:
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1600&q=85',
    alt: 'Historic stone ghats and wooden boats along the Ganges River during dawn in Varanasi',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    tagline: 'Highest of the 12 Jyotirlingas.',
    region: 'North India',
    state: 'Uttarakhand',
    primaryDeity: 'Lord Kedarnath (Sada Shiva)',
    shortDescription:
      'Himalayan stone sanctuary at 3,583 metres altitude, surrounded by snow-capped peaks and the Mandakini River.',
    editorialStory:
      'Perched amidst the majestic Garhwal Himalayas near the Chorabari glacier, Kedarnath is the crown jewel of Shiva pilgrimage. Built of massive grey stone slabs, it stands resilient against time and snow, exuding an unmatched aura of transcendence.',
    bestSeason: 'May – June & September – October',
    idealDuration: '3 to 4 Days',
    moodTags: ['Himalayan Jyotirlinga', 'Char Dham', 'Garhwal Alps'],
    highlights: [
      'Darshan of the conical rock Jyotirlinga of Lord Kedarnath',
      'Helicopter / pony / trek journey along Mandakini River gorge',
      'Panoramic vistas of Kedarnath Dome & snow peaks',
      'Darshan at Bhairavnath Temple overlooking the holy valley',
    ],
    mapQuery: 'Kedarnath Temple Rudraprayag Uttarakhand',
    lat: 30.7352,
    lng: 79.0669,
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',
    alt: 'Ancient stone temple of Kedarnath with snow-capped Himalayan peaks rising directly behind',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'badrinath',
    name: 'Badrinath',
    tagline: 'Sacred Himalayan Abode of Lord Vishnu.',
    region: 'North India',
    state: 'Uttarakhand',
    primaryDeity: 'Lord Badrinarayan',
    shortDescription:
      'Nestled between Nar and Narayana mountain ranges, the holiest of the Char Dham pilgrimage shrines.',
    editorialStory:
      'On the banks of the roaring Alaknanda River, beneath the gleaming peak of Neelkanth, sits Badrinath. The black stone Shaligram idol of Lord Vishnu in meditative posture offers peace to those who journey to this Himalayan sanctuary.',
    bestSeason: 'May – June & September – October',
    idealDuration: '3 to 4 Days',
    moodTags: ['All-India Char Dham', 'Neelkanth Peak', 'Alaknanda River'],
    highlights: [
      'Darshan of Lord Badri Vishal seated in Padmasana',
      'Holy dip in the natural thermal spring of Tapt Kund',
      'Excursion to Mana Village (the last Indian village near Tibet border)',
      'Vyas Gufa and Saraswati River confluence at Keshav Prayag',
    ],
    mapQuery: 'Badrinath Temple Chamoli Uttarakhand',
    lat: 30.7443,
    lng: 79.4912,
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Varanasi_2010_Ahilyabai_Ghat.jpg/1920px-Varanasi_2010_Ahilyabai_Ghat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Colourfully painted facade of Badrinath Temple on the banks of Alaknanda River',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'haridwar',
    name: 'Haridwar',
    tagline: 'The Gateway to the Gods.',
    region: 'North India',
    state: 'Uttarakhand',
    primaryDeity: 'Ganga Mata & Shiva',
    shortDescription:
      'Where the holy Ganges exits the Himalayas onto the plains, famed for Har Ki Pauri and the Kumbh Mela.',
    editorialStory:
      'Haridwar is alive with spiritual vibrancy. At Har Ki Pauri’s Brahmakund, thousands of floating diyas shimmer across the swift emerald waters of Mother Ganga every evening during the soul-stirring Ganga Aarti.',
    bestSeason: 'October – April',
    idealDuration: '2 Days',
    moodTags: ['Gateway to Char Dham', 'Har Ki Pauri', 'Maha Ganga Aarti'],
    highlights: [
      'World-famous sunset Ganga Aarti at Har Ki Pauri ghat',
      'Ropeway darshan to hilltop Mansa Devi & Chandi Devi temples',
      'Purifying holy dip in the crystal waters of Brahmakund',
      'Visit to ancient Daksha Mahadev Temple in Kankhal',
    ],
    mapQuery: 'Har Ki Pauri Haridwar Uttarakhand',
    lat: 29.956,
    lng: 78.1704,
    image:
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1600&q=85',
    alt: 'Thousands of pilgrims gathered for evening Ganga Aarti at Har Ki Pauri in Haridwar',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga Capital & Himalayan Tranquility.',
    region: 'North India',
    state: 'Uttarakhand',
    primaryDeity: 'Lord Shiva & Ganga Mata',
    shortDescription:
      'Spiritual sanctuary framed by suspension bridges, serene ashrams, and the tranquil flow of the upper Ganges.',
    editorialStory:
      'Just upriver from Haridwar, Rishikesh welcomes seekers looking for meditation, classical yoga, and silent contemplation. Evening Aarti at Parmarth Niketan and walks along Ram Jhula capture an idyllic Himalayan harmony.',
    bestSeason: 'September – April',
    idealDuration: '2 to 3 Days',
    moodTags: ['Yoga Capital', 'Triveni Ghat', 'Ashram Serenity'],
    highlights: [
      'Peaceful musical Ganga Aarti at Parmarth Niketan Ashram',
      'Walk across iconic Ram Jhula and Lakshman Jhula suspension bridges',
      'Holy confluence and evening prayers at Triveni Ghat',
      'Visit to the historic Beatles Ashram (Chaurasi Kutia)',
    ],
    mapQuery: 'Parmarth Niketan Ashram Rishikesh Uttarakhand',
    lat: 30.1235,
    lng: 78.3138,
    image:
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85',
    alt: 'Emerald waters of Ganges River flowing through green Himalayan foothills at Rishikesh',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'vaishno-devi',
    name: 'Vaishno Devi',
    tagline: 'Chalo Bulawa Aaya Hai, Mata Ne Bulaya Hai.',
    region: 'North India',
    state: 'Jammu & Kashmir',
    primaryDeity: 'Mata Vaishno Devi (Maha Kali, Lakshmi, Saraswati)',
    shortDescription:
      'The sacred Trikuta mountain cave shrine in Katra where the Goddess manifests as three natural Pindies.',
    editorialStory:
      'Undertaking the holy Yatra from Katra to the Bhawan atop Trikuta Hills is an expression of boundless faith. Chants of "Jai Mata Di" echo along the mountain paths as devotees seek blessings from the mother who grants all righteous wishes.',
    bestSeason: 'March – November',
    idealDuration: '2 to 3 Days',
    moodTags: ['Maha Shakti', 'Trikuta Mountain', 'Holy Cave Pindies'],
    highlights: [
      'Holy darshan of the natural Pindies inside the sanctum cave',
      'Trek / battery-car / helicopter ride from Katra base camp',
      'Prayers at sacred Ardhkuwari Cave midway up the hill',
      'Cable car ride to Bhairavnath Temple to conclude the yatra',
    ],
    mapQuery: 'Vaishno Devi Bhawan Katra Jammu and Kashmir',
    lat: 33.0308,
    lng: 74.949,
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=85',
    alt: 'The sacred Bhawan complex of Mata Vaishno Devi illuminated against Trikuta mountain cliffs',
    gridClass: 'md:col-span-6 md:min-h-[380px]',
  },
  {
    id: 'mathura',
    name: 'Mathura',
    tagline: 'The Sacred Janmabhoomi of Lord Krishna.',
    region: 'North India',
    state: 'Uttar Pradesh',
    primaryDeity: 'Lord Shri Krishna',
    shortDescription:
      'The sacred city on the banks of Yamuna where Lord Krishna took birth in the prison cell of Kansa.',
    editorialStory:
      'Mathura is steeped in the divine pastimes of Krishna. The Shri Krishna Janmasthan temple complex marks the exact subterranean prison cell where the Lord appeared, while the ghats of the Yamuna whisper ancient hymns.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Krishna Janmabhoomi', 'Yamuna Ghats', 'Braj Bhumi'],
    highlights: [
      'Darshan at Shri Krishna Janmabhoomi underground prison sanctum',
      'Visit grand Dwarkadhish Temple with rich Rajasthani murals',
      'Holy boat ride and evening aarti at Vishram Ghat on Yamuna',
      'Govardhan Parikrama circuit (21 km sacred circumambulation)',
    ],
    mapQuery: 'Krishna Janmasthan Temple Complex Mathura Uttar Pradesh',
    lat: 27.505,
    lng: 77.671,
    image:
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1600&q=85',
    alt: 'Carved sandstone temple of Shri Krishna Janmabhoomi in Mathura',
    gridClass: 'md:col-span-6 md:min-h-[380px]',
  },
  {
    id: 'vrindavan',
    name: 'Vrindavan',
    tagline: 'Land of Radhe Radhe & Divine Leela.',
    region: 'North India',
    state: 'Uttar Pradesh',
    primaryDeity: 'Radha Raman & Banke Bihari',
    shortDescription:
      'Sacred holy town where Lord Krishna performed childhood leelas and the divine Raas with the Gopis.',
    editorialStory:
      'Every corner of Vrindavan echoes with the gentle greeting "Radhe Radhe". From the playful curtain-darshan of Thakur Banke Bihari Ji to the white Italian marble splendor of Prem Mandir illuminated at dusk, Vrindavan is pure devotional bliss.',
    bestSeason: 'October – March',
    idealDuration: '2 Days',
    moodTags: ['Banke Bihari', 'Prem Mandir', 'Nidhi Van'],
    highlights: [
      'Darshan of Sri Banke Bihari Ji Maharaj during ecstatic aarti',
      'Evening illuminated fountain and light show at Prem Mandir',
      'Prayers at ISKCON Krishna Balaram Temple with soul-stirring kirtan',
      'Visit sacred Nidhi Van and ancient Radha Raman Temple',
    ],
    mapQuery: 'Banke Bihari Temple Vrindavan Uttar Pradesh',
    lat: 27.5815,
    lng: 77.7006,
    image:
      'https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&w=1600&q=85',
    alt: 'Prem Mandir in Vrindavan glowing with dynamic colorful night lighting',
    gridClass: 'md:col-span-12 md:min-h-[340px]',
  },

  /* ----------------------- WEST & CENTRAL INDIA (9) ----------------------- */
  {
    id: 'shirdi',
    name: 'Shirdi',
    tagline: 'Sabka Malik Ek — The Abode of Sai Baba.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Shri Sai Baba',
    shortDescription:
      'World-renowned pilgrimage town where Shri Sai Baba lived, taught universal brotherhood, and attained Samadhi.',
    editorialStory:
      'Shirdi is a haven of peace and universal compassion. Millions of devotees enter the Samadhi Mandir with tears of joy, remembering Baba’s eternal promise: "Shraddha (Faith) and Saburi (Patience)". The sacred fire at Dwarkamai continues to burn incessantly.',
    bestSeason: 'October – March',
    idealDuration: '2 Days',
    moodTags: ['Sai Samadhi', 'Dwarkamai Dhuni', 'Universal Brotherhood'],
    highlights: [
      'Darshan at the sacred marble Samadhi Mandir of Shri Sai Baba',
      'Visit holy Dwarkamai mosque where Baba’s sacred Dhuni burns',
      'Peaceful moments at Chavadi, Gurusthan & Lendi Baug garden',
      'Attend the blissful Kakad Aarti or Shej Aarti',
    ],
    mapQuery: 'Shri Saibaba Sansthan Temple Shirdi Maharashtra',
    lat: 19.7668,
    lng: 74.4762,
    image:
      'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=1600&q=85',
    alt: 'Golden spire and grand courtyard of Shri Sai Baba Samadhi Mandir in Shirdi',
    gridClass: 'md:col-span-7 md:row-span-2 md:min-h-[560px]',
  },
  {
    id: 'akkalkot',
    name: 'Akkalkot',
    tagline: 'Bhiu Nakos, Mi Tujhya Pathishi Aahe.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Shri Swami Samarth Maharaj',
    shortDescription:
      'The divine seat of the Dattatreya avatar Shri Swami Samarth Maharaj, famed for the sacred Banyan tree math.',
    editorialStory:
      'Akkalkot is sanctified by the presence of Sri Swami Samarth, the revered 19th-century saint. Devotees find solace under the historic Vatavruksha (Banyan tree) where Maharaj resided, comforted by his famous reassurance: "Do not fear, I am behind you".',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Swami Samarth', 'Vatavruksha Math', 'Dattatreya Sampradaya'],
    highlights: [
      'Darshan at the sacred Vatavruksha Swami Samarth Mandir',
      'Prayers at the holy Samadhi Math in Akkalkot',
      'Meditation beneath the historic 150-year-old banyan tree',
      'Convenient temple circuit paired with Pandharpur and Solapur',
    ],
    mapQuery: 'Shri Swami Samarth Maharaj Vatavruksha Mandir Akkalkot Maharashtra',
    lat: 17.5256,
    lng: 76.2084,
    image:
      'https://images.unsplash.com/photo-1590076212470-36e659b48b7f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sacred temple courtyard and serene banyan canopy for devotional prayer',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    tagline: 'Karveer Nivasini Shri Mahalakshmi Ambabai.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Goddess Mahalakshmi (Ambabai)',
    shortDescription:
      'Ancient 7th-century Hemadpanthi temple of Goddess Mahalakshmi, one of the foremost Shakti Peethas of India.',
    editorialStory:
      'Kolhapur is revered as Dakshin Kashi. Built by the Chalukyas, the grand stone Mahalakshmi Temple is engineered so that twice a year, the setting sun’s rays (Kiranotsav) filter through the temple corridors to bathe the idol’s feet in golden light.',
    bestSeason: 'October – March',
    idealDuration: '2 Days',
    moodTags: ['Maha Shakti Peeth', 'Kiranotsav', 'Chalukyan Stone Art'],
    highlights: [
      'Darshan of Karveer Nivasini Shri Mahalakshmi Ambabai',
      'Marvel at the 7th-century carved black stone mandapams',
      'Visit nearby Jyotiba Temple atop Wadi Ratnagiri hill',
      'Explore Rankala Lake and historic New Palace Museum',
    ],
    mapQuery: 'Mahalakshmi Temple Kolhapur Maharashtra',
    lat: 16.6946,
    lng: 74.2238,
    image:
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1600&q=85',
    alt: 'Ancient stone Hemadpanthi towers of Shri Mahalakshmi Temple in Kolhapur',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'pandharpur',
    name: 'Pandharpur',
    tagline: 'Vithoba Vitthal — The Heartbeat of Maharashtra.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Lord Vithoba (Vitthal) & Rukmini Devi',
    shortDescription:
      'On the banks of holy Chandrabhaga, the sanctuary of Lord Vithoba standing on a brick to welcome all devotees.',
    editorialStory:
      'Pandharpur is the epicentre of the Bhakti movement and the legendary Warkari pilgrimage. Devotees touch the holy feet of Lord Vitthal directly in the sanctum (Padsparsha Darshan) and take purifying dips in the Chandrabhaga River.',
    bestSeason: 'July – February (Ashadhi & Kartiki Ekadashi)',
    idealDuration: '2 Days',
    moodTags: ['Vithoba Vitthal', 'Chandrabhaga River', 'Warkari Bhakti'],
    highlights: [
      'Padsparsha Darshan (touching the sacred feet) of Lord Vitthal',
      'Darshan of Rukmini Mata inside the ancient temple complex',
      'Holy bath in the holy Chandrabhaga (Bhima) river',
      'Visit Vishnupad temple where Lord Vishnu’s footprint rests in stone',
    ],
    mapQuery: 'Vithoba Temple Pandharpur Maharashtra',
    lat: 17.6775,
    lng: 75.3283,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Stone gopuram of Lord Vithoba Temple along the Chandrabhaga riverbank in Pandharpur',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'bhimashankar',
    name: 'Bhimashankar',
    tagline: 'Forest Jyotirlinga in the Western Ghats.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Bhimashankar Jyotirlinga',
    shortDescription:
      'Ancient Nagara-style Jyotirlinga sanctuary nestled in the misty Sahyadri forest sanctuary, source of River Bhima.',
    editorialStory:
      'Surrounded by thick evergreen rainforests in the Pune district, Bhimashankar is a revered Jyotirlinga of immense natural serenity. The intricate carvings of human figures and animals on the temple’s black stone walls blend history with raw mountain beauty.',
    bestSeason: 'September – February',
    idealDuration: '1 to 2 Days',
    moodTags: ['Jyotirlinga', 'Sahyadri Sanctuary', 'Source of Bhima River'],
    highlights: [
      'Darshan of the sacred Bhimashankar Jyotirlinga',
      'Admire Nagara-style black stone temple architecture',
      'Explore the lush Bhimashankar Wildlife Sanctuary',
      'Scenic viewpoints at Nagphani (Cobra’s Hood) and Gupt Bhimashankar',
    ],
    mapQuery: 'Bhimashankar Temple Pune Maharashtra',
    lat: 19.0722,
    lng: 73.5356,
    image:
      'https://images.unsplash.com/photo-1590483204928-1111663b6a93?auto=format&fit=crop&w=1600&q=85',
    alt: 'Historic black stone sanctum of Bhimashankar Jyotirlinga in the Sahyadri mountains',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'trimbakeshwar',
    name: 'Trimbakeshwar',
    tagline: 'Three-Faced Jyotirlinga & Origin of Godavari.',
    region: 'West & Central India',
    state: 'Maharashtra',
    primaryDeity: 'Trimbakeshwar Jyotirlinga (Brahma, Vishnu, Shiva)',
    shortDescription:
      'At the foot of sacred Brahmagiri Hill near Nashik, home to the unique Jyotirlinga embodying the Hindu Holy Trinity.',
    editorialStory:
      'Unlike other Jyotirlingas, the Lingam at Trimbakeshwar has three faces representing Brahma, Vishnu, and Rudra. Situated at the origin point of the sacred Godavari River, it is also a premier destination for Kalsarpa and Narayan Nagbali pujas.',
    bestSeason: 'October – March',
    idealDuration: '2 Days (with Nashik & Shirdi)',
    moodTags: ['Holy Trinity Jyotirlinga', 'Godavari Origin', 'Brahmagiri Hill'],
    highlights: [
      'Darshan of the unique three-faced Trimbakeshwar Jyotirlinga',
      'Trek up Brahmagiri Hill to the holy emergence point of Godavari',
      'Sacred bath in Kushavarta Teerth pool',
      'Visit nearby Panchavati and Muktidham in Nashik',
    ],
    mapQuery: 'Trimbakeshwar Shiva Temple Nashik Maharashtra',
    lat: 19.9324,
    lng: 73.5308,
    image:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1600&q=85',
    alt: 'Carved black basalt stone spires of Trimbakeshwar Temple beneath Brahmagiri hills',
    gridClass: 'md:col-span-4 md:min-h-[380px]',
  },
  {
    id: 'ujjain',
    name: 'Ujjain',
    tagline: 'Sri Mahakaleshwar — Lord of Time & Eternity.',
    region: 'West & Central India',
    state: 'Madhya Pradesh',
    primaryDeity: 'Mahakaleshwar Jyotirlinga (Dakshinmukhi)',
    shortDescription:
      'Ancient Avanti on the Shipra River, home to the south-facing Mahakaleshwar and the newly constructed Mahakal Lok corridor.',
    editorialStory:
      'Ujjain is one of India’s seven sacred Moksha puris. The south-facing Mahakaleshwar Jyotirlinga is celebrated worldwide for the world-famous Bhasma Aarti performed at 4:00 AM. The grand new Mahakal Lok corridor brings Vedic tales to life through monumental stone murals.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Dakshinmukhi Jyotirlinga', 'Bhasma Aarti', 'Mahakal Lok Corridor'],
    highlights: [
      'Witness the divine 4 AM Bhasma Aarti of Lord Mahakal',
      'Stroll through the grand 900-metre carved Mahakal Lok corridor',
      'Darshan at Kal Bhairav temple and sacred Harsiddhi Shakti Peeth',
      'Sunset holy aarti on the banks of holy Shipra River at Ram Ghat',
    ],
    mapQuery: 'Mahakaleshwar Jyotirlinga Ujjain Madhya Pradesh',
    lat: 23.1827,
    lng: 75.7682,
    image:
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1600&q=85',
    alt: 'Illuminated stone spires of Sri Mahakaleshwar Jyotirlinga temple in Ujjain',
    gridClass: 'md:col-span-6 md:min-h-[380px]',
  },
  {
    id: 'somnath',
    name: 'Somnath',
    tagline: 'The First Among the Twelve Jyotirlingas.',
    region: 'West & Central India',
    state: 'Gujarat',
    primaryDeity: 'Somnath Mahadev',
    shortDescription:
      'Standing majestically at the shores of the Arabian Sea, rebuilt in golden sandstone as an eternal symbol of faith.',
    editorialStory:
      'Known as the "Shrine Eternal", Somnath sits at the tip of Saurashtra where the Arabian Sea crashes against ancient stone ramparts. Built in the ornate Chalukyan style, the temple’s Baan Stambh arrow pillar points without interruption to the South Pole.',
    bestSeason: 'October – March',
    idealDuration: '2 Days (with Dwarka & Gir)',
    moodTags: ['First Jyotirlinga', 'Arabian Sea Shore', 'Baan Stambh'],
    highlights: [
      'Darshan at the majestic sea-facing Somnath Jyotirlinga sanctum',
      'Spectacular evening Sound & Light laser show on temple grounds',
      'Visit sacred Bhalka Teerth and Triveni Sangam where Krishna departed',
      'Scenic promenade walk along the ocean ramparts',
    ],
    mapQuery: 'Shree Somnath Jyotirlinga Temple Prabhas Patan Gujarat',
    lat: 20.888,
    lng: 70.4012,
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85',
    alt: 'Majestic carved sandstone spire of Somnath Jyotirlinga on the Arabian Sea coast of Gujarat',
    gridClass: 'md:col-span-6 md:min-h-[380px]',
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    tagline: 'The Golden Kingdom of Lord Dwarkadhish.',
    region: 'West & Central India',
    state: 'Gujarat',
    primaryDeity: 'Dwarkadhish (Jagat Mandir)',
    shortDescription:
      'One of the cardinal Char Dhams, where the 52-yard sacred flag flutters atop the 5-story Jagat Mandir.',
    editorialStory:
      'Dwarka was Lord Krishna’s golden kingdom founded upon the Gomti River’s confluence with the sea. Pilgrims marvel at the 72 carved pillars of the 2,200-year-old Jagat Mandir, where the sacred 52-yard dhwaja is changed five times a day with grand celebrations.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Western Char Dham', 'Jagat Mandir', 'Bet Dwarka Island'],
    highlights: [
      'Darshan of Sri Dwarkadhish in the majestic 5-storey Jagat Mandir',
      'Witness the ritual changing of the 52-yard holy flag atop the shikhara',
      'Boat cruise to Bet Dwarka island across the Gulf of Kutch',
      'Darshan at Nageshwar Jyotirlinga & ancient Rukmini Devi Temple',
    ],
    mapQuery: 'Shree Dwarkadhish Temple Dwarka Gujarat',
    lat: 22.2376,
    lng: 68.9678,
    image:
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=85',
    alt: 'Towering stone spire of Jagat Mandir Dwarkadhish temple overlooking the Gomti riverbank in Gujarat',
    gridClass: 'md:col-span-12 md:min-h-[340px]',
  },

  /* ----------------------- EAST INDIA (3) ----------------------- */
  {
    id: 'jagannath-puri',
    name: 'Jagannath Puri',
    tagline: 'Lord of the Universe & Eastern Char Dham.',
    region: 'East India',
    state: 'Odisha',
    primaryDeity: 'Lord Jagannath, Balabhadra & Subhadra',
    shortDescription:
      'The legendary 12th-century Kalinga sanctuary on the Bay of Bengal, home to Mahaprasad and the world-famous Ratha Yatra.',
    editorialStory:
      'Jagannath Puri is celebrated as the eastern pillar of the Char Dham. The grand temple features an extraordinary wooden sanctum, the world’s largest traditional kitchen serving sacred Mahaprasad, and a mystical shikhara flag that always flows opposite the wind.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Eastern Char Dham', 'Mahaprasad Kitchen', 'Golden Sea Beach'],
    highlights: [
      'Darshan of the divine wooden siblings Jagannath, Balabhadra & Subhadra',
      'Partake in Anandabazar Mahaprasad cooked in traditional clay pots',
      'Witness the evening changing of the Patitapabana flag atop the dome',
      'Sunrise walks on Puri Golden Beach and visit to Gundicha Temple',
    ],
    mapQuery: 'Shree Jagannath Temple Puri Odisha',
    lat: 19.8049,
    lng: 85.8179,
    image:
      'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=1600&q=85',
    alt: 'Monumental stone shikhara of Shree Jagannath Temple against coastal skies in Puri',
    gridClass: 'md:col-span-7 md:row-span-2 md:min-h-[560px]',
  },
  {
    id: 'konark',
    name: 'Konark',
    tagline: 'The Monumental Sun Chariot of Stone.',
    region: 'East India',
    state: 'Odisha',
    primaryDeity: 'Surya Deva (Sun God)',
    shortDescription:
      'UNESCO World Heritage 13th-century stone chariot temple with 24 intricately carved wheels drawn by 7 horses.',
    editorialStory:
      'Described by Rabindranath Tagore as the place where "the language of stone surpasses the language of human", Konark is an architectural marvel. Designed as a colossal stone chariot for the Sun God, each wheel functions as a precise sundial.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['UNESCO World Heritage', 'Sun Chariot', 'Kalinga Art'],
    highlights: [
      'Marvel at the 24 astronomical carved stone sundial wheels',
      'Intricate sculptures of celestial dancers at the Natya Mandap',
      'Witness the morning light illuminating the sanctum ruins',
      'Scenic marine drive along Chandrabhaga Beach to Puri',
    ],
    mapQuery: 'Konark Sun Temple Odisha',
    lat: 19.8876,
    lng: 86.0945,
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85',
    alt: 'Intricately carved stone wheel of the 13th-century Sun Temple in Konark Odisha',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'kamakhya',
    name: 'Kamakhya Temple',
    tagline: 'Supreme Tantric Shakti Peetha of the East.',
    region: 'East India',
    state: 'Assam',
    primaryDeity: 'Maa Kamakhya',
    shortDescription:
      'Perched on the Nilachal Hill overlooking the Brahmaputra River, the most sacred Shakti Peeth celebrating divine creation.',
    editorialStory:
      'Kamakhya Temple in Guwahati is the revered epicentre of Shakti worship in India. Inside the subterranean natural cave sanctum, Goddess Kamakhya is worshipped in the form of a yoni-shaped stone spring, radiating deep mystical energy and feminine creative power.',
    bestSeason: 'October – April',
    idealDuration: '2 Days',
    moodTags: ['Maha Shakti Peeth', 'Nilachal Hill', 'Brahmaputra Views'],
    highlights: [
      'Darshan inside the sacred cave sanctum with perennial natural spring',
      'Panoramic sunset views over the mighty Brahmaputra River from the hill',
      'Explore the ten Mahavidya temples surrounding Nilachal Hill',
      'Evening river cruise on the sacred waters of the Brahmaputra',
    ],
    mapQuery: 'Kamakhya Temple Guwahati Assam',
    lat: 26.1664,
    lng: 91.7056,
    image:
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sacred beehive-domed shikhara of Maa Kamakhya Temple atop Nilachal Hill in Guwahati Assam',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
];

/* ========================================================================
   SPIRITUAL TOUR PACKAGES (7 DEDICATED CATEGORIES)
   Transparent Quotation on Request — No invented prices or false confirmation
   ======================================================================== */
export const FEATURED_JOURNEYS: FeaturedJourney[] = [
  {
    id: 'jyotirlinga-tours',
    category: 'Jyotirlinga Tours',
    title: 'Pancha & Dwadasa Jyotirlinga Yatra',
    destinationId: 'somnath',
    destinationName: 'Somnath, Ujjain, Trimbakeshwar & Bhimashankar',
    duration: '7 to 10 Days (Customisable)',
    routeSummary: 'Hyderabad → Ujjain → Somnath → Trimbakeshwar → Bhimashankar',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'A deeply sacred pilgrimage connecting the revered Jyotirlingas of Lord Shiva across Maharashtra, Madhya Pradesh, and Gujarat with comfortable AC transport, senior-friendly pacing, and handpicked clean accommodation.',
    highlights: [
      'Bhasma Aarti darshan at Mahakaleshwar Jyotirlinga, Ujjain',
      'Sea-facing darshan at Somnath, the first Jyotirlinga of Lord Shiva',
      'Darshan of the three-faced Trimbakeshwar Lingam near Nashik',
      'Sahyadri mountain pilgrimage to Bhimashankar forest sanctum',
      'Clean vegetarian dining stops & dedicated driver support',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Arrival in Ujjain & Mahakal Lok',
        detail:
          'Arrive in Ujjain. Check into hotel. Attend evening Aarti along the Shipra River at Ram Ghat and explore the grand Mahakal Lok corridor. Early morning attendance at Sri Mahakaleshwar Bhasma Aarti.',
      },
      {
        day: 'Day 3–4',
        title: 'Journey to Somnath Mahadev',
        detail:
          'Travel to Prabhas Patan, Gujarat. Evening darshan at the shore-side Somnath Jyotirlinga temple and experience the spectacular Light & Sound show over the Arabian Sea.',
      },
      {
        day: 'Day 5–6',
        title: 'Nashik & Trimbakeshwar Jyotirlinga',
        detail:
          'Transit to Nashik. Early morning darshan at Trimbakeshwar Jyotirlinga at the base of Brahmagiri Hill, followed by Panchavati and holy Kushavarta Teerth.',
      },
      {
        day: 'Day 7',
        title: 'Bhimashankar & Return Pilgrimage',
        detail:
          'Ascend through the scenic Western Ghats to Bhimashankar Jyotirlinga. Complete puja rituals and return journey with sacred prasad.',
      },
    ],
    suitableFor: 'Devotees of Shiva, Families & Senior Citizens',
    image:
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sacred sandstone spire of Somnath Jyotirlinga on the Arabian Sea',
  },
  {
    id: 'char-dham-yatra',
    category: 'Char Dham Yatra',
    title: 'Sacred Himalayan Char Dham Yatra',
    destinationId: 'kedarnath',
    destinationName: 'Yamunotri, Gangotri, Kedarnath & Badrinath',
    duration: '10 to 12 Days (Customisable)',
    routeSummary: 'Haridwar → Barkot → Uttarkashi → Guptkashi → Kedarnath → Badrinath → Rishikesh',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'The supreme pilgrimage of a lifetime through the Garhwal Himalayas. We provide comfortable mountain vehicles, experienced drivers familiar with high passes, medical stops, and reliable helicopter or pony booking assistance.',
    highlights: [
      'Holy darshan of Lord Kedarnath at 3,583 metres altitude',
      'Prayers to Lord Badri Vishal beside the holy Alaknanda River',
      'Sacred dip at Yamunotri and prayers at the source of Ganga in Gangotri',
      'Experienced Himalayan mountain drivers & oxygen cylinder support',
      'Senior-friendly rest stops and clean hot-meal arrangements',
    ],
    itinerary: [
      {
        day: 'Day 1–3',
        title: 'Haridwar to Yamunotri & Uttarkashi',
        detail:
          'Depart Haridwar along the scenic river valleys to Barkot. Trek to Yamunotri temple, holy bath at Surya Kund, and proceed to Uttarkashi for Vishwanath Temple darshan.',
      },
      {
        day: 'Day 4–5',
        title: 'Gangotri Temple to Guptkashi',
        detail:
          'Scenic drive along the Bhagirathi River to Gangotri. Holy dip at Bhagirathi and onward scenic mountain drive to Guptkashi preparing for Kedarnath.',
      },
      {
        day: 'Day 6–7',
        title: 'Kedarnath Jyotirlinga Darshan',
        detail:
          'Ascend to Kedarnath via helicopter or pony/trek from Sonprayag. Evening and early morning darshan inside the ancient stone sanctum beneath snow peaks.',
      },
      {
        day: 'Day 8–10',
        title: 'Badrinath Dham & Mana Village',
        detail:
          'Drive via Chopta to Badrinath. Holy dip in Tapt Kund, darshan of Lord Badrinarayan, visit to Mana village (last Indian village), and return via Rishikesh.',
      },
    ],
    suitableFor: 'Spiritual Seekers, Families & Senior-Friendly Tours',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    alt: 'Ancient Kedarnath Temple surrounded by majestic snow-covered peaks',
  },
  {
    id: 'south-india-temple-tours',
    category: 'South India Temple Tours',
    title: 'Divine Dakshin Bharat Teertha Yatra',
    destinationId: 'tirupati',
    destinationName: 'Tirupati, Arunachalam, Madurai & Rameswaram',
    duration: '5 to 7 Days (Customisable)',
    routeSummary: 'Hyderabad / Chennai → Tirupati → Tiruvannamalai → Madurai → Rameswaram',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Traverse South India’s most monumental temple architecture: from Lord Venkateswara atop Tirumala to the holy fire mountain of Arunachalam, the multi-tiered gopurams of Madurai, and the sacred 22 teerthams of oceanfront Rameswaram.',
    highlights: [
      'VIP / Special Entry Darshan assistance for Sri Balaji in Tirupati',
      'Sacred Girivalam pradakshina around Mount Arunachala in Tiruvannamalai',
      'Darshan of Goddess Meenakshi in Madurai’s thousand-pillar temple',
      'Bath in 22 holy wells & darshan of Ramanathaswamy Jyotirlinga',
      'Clean AC coach or private Innova with fluent local drivers',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Tirupati Balaji & Padmavathi Ammavaru',
        detail:
          'Morning ascent of Tirumala hills. Special entry darshan of Lord Venkateswara Swamy. Evening visit to Sri Padmavathi Devi Temple at Tiruchanur.',
      },
      {
        day: 'Day 3',
        title: 'Arunachalam (Tiruvannamalai) Girivalam',
        detail:
          'Drive to Tiruvannamalai. Darshan of Sri Annamalaiyar (Agni Lingam) and evening barefoot Girivalam around holy Arunachala Hill.',
      },
      {
        day: 'Day 4–5',
        title: 'Madurai Meenakshi & Rameswaram Island',
        detail:
          'Visit Meenakshi Amman Temple in Madurai. Cross the Pamban Bridge into Rameswaram. Take bath in 22 teerthams and pray at Ramanathaswamy Jyotirlinga with sunrise at Dhanushkodi.',
      },
    ],
    suitableFor: 'Families, Grandparents & Corporate Group Pilgrimages',
    image:
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Golden Gopuram of Tirumala Venkateswara Swamy Temple',
  },
  {
    id: 'north-india-pilgrimage',
    category: 'North India Pilgrimage',
    title: 'Kashi – Ayodhya – Prayagraj Holy Circuit',
    destinationId: 'ayodhya',
    destinationName: 'Varanasi, Ayodhya, Prayagraj & Haridwar',
    duration: '5 to 7 Days (Customisable)',
    routeSummary: 'Varanasi → Sarnath → Ayodhya Ram Mandir → Prayagraj Sangam',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Witness the revival of India’s most sacred civilisational roots. Combine darshan of the grand new Shri Ram Janmabhoomi Mandir in Ayodhya with the timeless Ganga Aarti of Varanasi and a holy dip at Triveni Sangam in Prayagraj.',
    highlights: [
      'Darshan of Shri Ram Lalla at the grand new Ayodhya Mandir',
      'Kashi Vishwanath Jyotirlinga & Golden Corridor darshan',
      'Private dawn boat cruise along Varanasi’s 84 stone ghats',
      'Holy Triveni Sangam boat bath in Prayagraj',
      'All local temple logistics and senior-citizen friendly pacing',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Kashi Vishwanath & Ganga Aarti',
        detail:
          'Arrive in Varanasi. Visit Kashi Vishwanath temple, Annapurna Mandir, and Kal Bhairav. Evening witness the world-famous Ganga Aarti from a private boat.',
      },
      {
        day: 'Day 3',
        title: 'Ayodhya Shri Ram Janmabhoomi',
        detail:
          'Drive to Ayodhya. Darshan of Ram Lalla at Shri Ram Janmabhoomi Mandir, prayers at Hanuman Garhi, and evening Sarayu River Aarti.',
      },
      {
        day: 'Day 4–5',
        title: 'Prayagraj Triveni Sangam & Return',
        detail:
          'Drive to Prayagraj. Holy boat ride to Triveni Sangam, bath, darshan of Bade Hanuman Ji and Anand Bhawan before onward return.',
      },
    ],
    suitableFor: 'All Age Groups & Devotional Family Gatherings',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
    alt: 'Grand Shri Ram Mandir in Ayodhya glowing during inauguration day',
  },
  {
    id: 'shirdi-sai-baba-tours',
    category: 'Shirdi Sai Baba Tours',
    title: 'Shirdi Sai Baba & Shani Shingnapur Yatra',
    destinationId: 'shirdi',
    destinationName: 'Shirdi, Shani Shingnapur, Trimbakeshwar & Nashik',
    duration: '3 to 4 Days (Customisable)',
    routeSummary: 'Hyderabad → Shirdi → Shani Shingnapur → Trimbakeshwar → Nashik',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'A serene, heartfelt pilgrimage to the abode of Shri Sai Baba in Shirdi with seamless darshan passes, clean hotels within walking distance of the temple, and excursions to Shani Shingnapur and Trimbakeshwar Jyotirlinga.',
    highlights: [
      'Confirmed VIP / Special Darshan entry at Shirdi Samadhi Mandir',
      'Peaceful moments at holy Dwarkamai, Chavadi & Gurusthan',
      'Visit Shani Shingnapur sacred open-air Swayambhu temple',
      'Trimbakeshwar Jyotirlinga darshan and Panchavati in Nashik',
      'Convenient sleeper coach or private AC cab from Hyderabad',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Hyderabad to Shirdi & Samadhi Darshan',
        detail:
          'Departure from Hyderabad. Check into hotel near temple. Evening Kakad/Dhoop Aarti and darshan of Shri Sai Baba at the Samadhi Mandir.',
      },
      {
        day: 'Day 2',
        title: 'Dwarkamai, Chavadi & Shani Shingnapur',
        detail:
          'Morning prayers at Dwarkamai and Gurusthan. Excursion to sacred Shani Shingnapur temple for oil abhishekam.',
      },
      {
        day: 'Day 3–4',
        title: 'Nashik Panchavati & Trimbakeshwar',
        detail:
          'Visit Trimbakeshwar Jyotirlinga and holy sites in Nashik (Kalaram temple, Sita Gufa) before returning peacefully to Hyderabad.',
      },
    ],
    suitableFor: 'Devotees of Sai Baba, Families & Senior Citizens',
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
    alt: 'Shri Sai Baba Samadhi Mandir complex in Shirdi',
  },
  {
    id: 'telangana-temple-tours',
    category: 'Telangana Temple Tours',
    title: 'Telangana Sacred Heritage & Temple Circuit',
    destinationId: 'yadagirigutta',
    destinationName: 'Yadagirigutta, Swarnagiri, Srisailam & Vemulawada',
    duration: '2 to 4 Days (Customisable)',
    routeSummary: 'Hyderabad → Yadagirigutta → Swarnagiri → Vemulawada → Srisailam',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Explore the magnificent spiritual crown of Telangana and neighboring Andhra. Visit the reconstructed stone wonder of Yadagirigutta, the glittering Swarnagiri temple, Rajarajeshwara Swamy in Vemulawada, and holy Srisailam.',
    highlights: [
      'Garbhalaya Darshan at Sri Lakshmi Narasimha Swamy Temple, Yadagirigutta',
      'Darshan at the golden spires of Swarnagiri Temple',
      'Kode Mokku ritual at historic Sri Raja Rajeshwara Temple, Vemulawada',
      'Sparsha Darshan at Srisailam Mallikarjuna Swamy Jyotirlinga',
      'Originating directly from Hyderabad with doorstep pickup options',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Yadagirigutta & Swarnagiri Tour',
        detail:
          'Morning departure from Hyderabad. Visit the golden temple of Swarnagiri, followed by grand afternoon darshan at Yadagirigutta Narasimha Swamy temple.',
      },
      {
        day: 'Day 2–3',
        title: 'Srisailam Jyotirlinga & Krishna Ghats',
        detail:
          'Drive through Nallamala forests to Srisailam. Attend Mallikarjuna Swamy sparsha darshan and Bhramaramba Shakti Peeth puja before return.',
      },
    ],
    suitableFor: 'Hyderabad Locals, Weekend Devotees & Family Groups',
    image:
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Stone gopuram of Yadagirigutta Lakshmi Narasimha Swamy Temple in Telangana',
  },
  {
    id: 'custom-spiritual-tours',
    category: 'Custom Spiritual Tours',
    title: 'Tailored Family & Senior Citizen Pilgrimage',
    destinationId: 'varanasi',
    destinationName: 'Any Sacred Destination of Your Choice Across India',
    duration: 'Tailored to Your Schedule',
    routeSummary: 'Designed specifically according to your family’s preferred pace & deities',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Have specific temples or rituals in mind? Bhargavi Tour and Travels crafts bespoke spiritual journeys for families, senior citizens, and groups. Tell us your desired destinations and dates, and we provide transparent quotations and comfortable end-to-end arrangements.',
    highlights: [
      'Completely flexible itinerary tailored to your preferred pace',
      'Senior-citizen friendly pacing with wheelchair assistance guidance',
      'Dedicated AC vehicle with courteous, experienced pilgrimage driver',
      'Assistance with special poojas, sevas, and darshan queue planning',
      'Transparent quotations with zero hidden surprises or forced costs',
    ],
    itinerary: [
      {
        day: 'Custom',
        title: 'Consultation & Personalised Itinerary',
        detail:
          'Discuss your desired temples, preferred travel dates, family group size, and dietary requirements with our pilgrimage coordinator.',
      },
      {
        day: 'Execution',
        title: 'Comfortable, Devout & Memorable Pilgrimage',
        detail:
          'Enjoy seamless travel with door-to-door coordination, pre-booked clean accommodation, and round-the-clock telephone support throughout.',
      },
    ],
    suitableFor: 'Custom Family Yatras, Senior Citizens & Spiritual Groups',
    image:
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=85',
    alt: 'Serene sunrise on the holy Ganges River with traditional wooden boats',
  },
];

/* ========================================================================
   SPIRITUAL EXPERIENCES (PILGRIMAGE HIGHLIGHTS)
   ======================================================================== */
export const EXPERIENCES: Experience[] = [
  {
    id: 'ganga-aarti',
    title: 'The Eternal Flame of Ganga Aarti',
    subtitle: 'Varanasi & Haridwar',
    description:
      'Witness thousands of floating brass lamps, conch shells, and Vedic chants echoing across the sacred Ganges as dusk falls over ancient stone ghats.',
    pairedDestinations: 'Varanasi, Haridwar & Rishikesh',
    image:
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=85',
    alt: 'Thousands of lamps and devotees during evening Ganga Aarti',
  },
  {
    id: 'tirumala-darshan',
    title: 'Suprabhata Seva & Venkateswara Blessings',
    subtitle: 'Tirumala Hills',
    description:
      'Ascend the holy seven hills of Seshachalam in the early morning mist to receive the peaceful blessings of Lord Balaji in the golden sanctum.',
    pairedDestinations: 'Tirupati & Tiruchanur',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    alt: 'Golden Gopuram of Tirumala Venkateswara Temple',
  },
  {
    id: 'himalayan-kedarnath',
    title: 'Meditation in the Abode of Shiva',
    subtitle: 'Garhwal Himalayas',
    description:
      'Stand before the ancient stone sanctum of Kedarnath surrounded by towering snow-draped Himalayan peaks and the sacred Mandakini River.',
    pairedDestinations: 'Kedarnath & Badrinath',
    image:
      'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1600&q=85',
    alt: 'Snow-capped mountains rising above Kedarnath temple',
  },
  {
    id: 'shirdi-sai-peace',
    title: 'Shraddha & Saburi at Dwarkamai',
    subtitle: 'Shirdi',
    description:
      'Feel the deep, quiet compassion of Sai Baba where the sacred Dhuni has remained alight for over a century, blessing seekers of every faith.',
    pairedDestinations: 'Shirdi & Shani Shingnapur',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85',
    alt: 'Courtyard of Shri Sai Baba Samadhi Mandir in Shirdi',
  },
];

/* ========================================================================
   GALLERY ITEMS (SACRED SHRINES & TEMPLE PHOTOGRAPHY)
   ======================================================================== */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-ayodhya',
    title: 'Shri Ram Janmabhoomi Mandir',
    location: 'Ayodhya, Uttar Pradesh',
    category: 'Sacred Sanctums',
    image:
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1600&q=85',
    alt: 'Carved sandstone spires of Shri Ram Janmabhoomi Mandir in Ayodhya',
    spanClass: 'md:col-span-8 md:row-span-2',
  },
  {
    id: 'g-kashi',
    title: 'Dawn on the Sacred Ganges',
    location: 'Varanasi, Uttar Pradesh',
    category: 'Ghats & Rivers',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',
    alt: 'Morning sunlight over stone ghats and rowboats in Varanasi',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'g-tirumala',
    title: 'Sri Venkateswara Ananda Nilayam',
    location: 'Tirupati, Andhra Pradesh',
    category: 'Temple Architecture',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Varanasi_2010_Ahilyabai_Ghat.jpg/1920px-Varanasi_2010_Ahilyabai_Ghat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Golden Gopuram of Tirumala Balaji temple against lush hills',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'g-kedarnath',
    title: 'Kedarnath Beneath the Snow Peaks',
    location: 'Garhwal, Uttarakhand',
    category: 'Himalayan Dhams',
    image:
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1600&q=85',
    alt: 'Ancient stone temple of Kedarnath with snow-clad mountains',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'g-madurai',
    title: 'Meenakshi Amman Gopuram Art',
    location: 'Madurai, Tamil Nadu',
    category: 'Temple Architecture',
    image:
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85',
    alt: 'Intricately sculpted figures on the towers of Meenakshi temple',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 'g-somnath',
    title: 'Somnath Mahadev on the Ocean',
    location: 'Prabhas Patan, Gujarat',
    category: 'Sacred Sanctums',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=85',
    alt: 'Somnath Jyotirlinga temple standing beside the Arabian Sea',
    spanClass: 'md:col-span-4 md:row-span-1',
  },
];
