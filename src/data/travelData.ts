export type RegionFilter =
  | 'All'
  | 'Telangana & Andhra Pradesh'
  | 'Maharashtra & Karnataka'
  | 'Central & North India';

export type PackageCategory =
  | 'All Packages'
  | 'Srisailam Special Packages'
  | 'Telangana Temple Tours'
  | 'Maharashtra Pilgrimages'
  | 'Jyotirlinga Special Tours'
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
  isSpecialHighlight?: boolean;
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

export interface CarFleetItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  acType: string;
  luggage: string;
  bestFor: string;
  features: string[];
  image: string;
  alt: string;
}

export interface SrisailamSpecialPackage {
  id: string;
  duration: '1 Day' | '2 Day';
  title: string;
  tagline: string;
  badge: string;
  image: string;
  alt: string;
  sightseeing: string[];
  whatsappMessage: string;
}

/* ========================================================================
   POPULAR SPIRITUAL DESTINATIONS (EXACT 20 FROM USER'S NOTEBOOK)
   ======================================================================== */
export const DESTINATIONS: Destination[] = [
  // 1. Shrishailam
  {
    id: 'srisailam',
    name: 'Shrishailam',
    tagline: 'Mallikarjuna Jyotirlinga & Bhramaramba Devi Shakti Peeth.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Andhra Pradesh',
    primaryDeity: 'Lord Mallikarjuna & Goddess Bhramaramba',
    shortDescription:
      'Ancient Jyotirlinga and Mahashaktipeeth nestled in the Nallamala hills along Krishna River, granting divine Sparsha Darshan.',
    editorialStory:
      'Perched on the flat top of Nallamala Hills along the scenic Krishna river gorge, Srisailam is uniquely sanctified as both one of the 12 sacred Jyotirlingas and one of the 18 Maha Shakti Peeths. Devotees experience profound serenity through Sparsha Darshan, holy bath at Pathalaganga, and the peaceful forested ghat road.',
    bestSeason: 'September – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Jyotirlinga', 'Shakti Peeth', 'Pathalaganga', 'Sparsha Darshan'],
    highlights: [
      'Mallikarjuna Swamy Temple & Bramarambika Devi Temple',
      'Sakshi Ganapathi Temple, Paladhara & Panchadhara',
      'Pathalaganga Ropeway, Boating & Srisailam Dam',
      'Octopus View Point & Nallamala Forest Drive',
    ],
    mapQuery: 'Sri Bhramaramba Mallikarjuna Temple Srisailam Andhra Pradesh',
    lat: 16.074,
    lng: 78.868,
    image: '/images/srisailam-1day-package.jpg',
    alt: 'Golden Gopuram of Mallikarjuna Swamy Temple at Srisailam',
  },

  // 2. Yadadri
  {
    id: 'yadadri',
    name: 'Yadadri',
    tagline: 'Sri Lakshmi Narasimha Swamy Mahakshetram.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Telangana',
    primaryDeity: 'Sri Lakshmi Narasimha Swamy',
    shortDescription:
      'Magnificent Krishna Shila black stone temple honoring Sri Lakshmi Narasimha Swamy atop the sacred Yadagiri hill.',
    editorialStory:
      'Yadadri (Yadagirigutta) is Telangana’s architectural and spiritual jewel, rebuilt completely with ancient Dravidian and Kakatiya stone masonry. The sacred hill has blessed devotees for centuries, offering profound peace through special Suprabhata Seva, Satyanarayana Swamy Vratams, and hill-top darshan.',
    bestSeason: 'October – March',
    idealDuration: '1 Day',
    moodTags: ['Krishna Shila Architecture', 'Narasimha Kshetram', 'Yadagiri Hill'],
    highlights: [
      'Darshan of Sri Lakshmi Narasimha Swamy in the sanctum sanctorum',
      'Admire intricate monolithic stone pillars and Kakatiya-style Rajagopurams',
      'Attend sacred Satyanarayana Swamy Vratam ceremonies',
      'Smooth 1.5-hour highway drive from Hyderabad',
    ],
    mapQuery: 'Sri Lakshmi Narasimha Swamy Temple Yadagirigutta Telangana',
    lat: 17.5878,
    lng: 78.9392,
    image: '/images/destinations/yadagirigutta.jpg',
    alt: 'Yadadri Sri Lakshmi Narasimha Swamy Temple architectural gopuram',
  },

  // 3. Vemulawada
  {
    id: 'vemulawada',
    name: 'Vemulawada',
    tagline: 'Dakshina Kasi & Abode of Sri Raja Rajeshwara Swamy.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Telangana',
    primaryDeity: 'Sri Raja Rajeshwara Swamy (Rajanna)',
    shortDescription:
      'Revered as Dakshina Kasi, famous for the sacred Dharma Gundam holy tank and the auspicious Code Mrokkubadi ritual.',
    editorialStory:
      'Sri Raja Rajeshwara Temple in Vemulawada, affectionately called Rajanna Temple, is one of Telangana’s most sacred Shaivite pilgrimage destinations. Devotees take a cleansing dip in the sacred Dharma Gundam tank and perform the unique Code Mrokkubadi (ox-tethering offering) for prosperity and family well-being.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Dakshina Kasi', 'Dharma Gundam', 'Code Mrokkubadi', 'Rajanna Blessings'],
    highlights: [
      'Darshan of Sri Raja Rajeshwara Swamy and Sri Raja Rajeshwari Devi',
      'Holy bath in the ancient medicinal Dharma Gundam tank',
      'Participate in the traditional Code Mrokkubadi vow ritual',
      'Visit Sri Baddi Pochamma Temple and Anjaneya Swamy shrine',
    ],
    mapQuery: 'Sri Raja Rajeshwara Swamy Temple Vemulawada Telangana',
    lat: 18.4715,
    lng: 78.8687,
    image: '/images/destinations/vemulawada.jpg',
    alt: 'Sri Raja Rajeshwara Swamy Temple at Vemulawada',
  },

  // 4. Ramappa Temple
  {
    id: 'ramappa',
    name: 'Ramappa Temple',
    tagline: 'UNESCO World Heritage Site & Kakatiya Architectural Wonder.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Telangana',
    primaryDeity: 'Sri Ramalingeswara Swamy',
    shortDescription:
      '13th-century Kakatiya masterpiece built with floating bricks and exquisite black basalt stone dancing sculptures in Palampet.',
    editorialStory:
      'Nestled near the serene Ramappa Lake in Palampet, the Ramappa (Rudreshwara) Temple is a UNESCO World Heritage wonder from 1213 CE. Famous for its buoyant floating bricks, sandbox foundation engineering, and lifelike bracket figures of celestial dancers (Madanikas) carved out of lustrous black dolerite stone.',
    bestSeason: 'October – February',
    idealDuration: '1 Day',
    moodTags: ['UNESCO World Heritage', 'Floating Bricks', 'Kakatiya Art', 'Ramappa Lake'],
    highlights: [
      'Marvel at the UNESCO World Heritage 13th-century Kakatiya temple structure',
      'Witness the world-famous lightweight floating bricks used in the shikhara',
      'Admire intricately polished black basalt bracket dancer sculptures (Madanikas)',
      'Scenic visit to the adjacent historic Ramappa Lake water reservoir',
    ],
    mapQuery: 'Ramappa Temple Palampet Mulugu Telangana',
    lat: 18.2604,
    lng: 79.9431,
    image: '/images/destinations/ramappa.jpg',
    alt: 'Ramappa Rudreshwara Temple in Palampet Telangana',
  },

  // 5. Thousand Pillar Temple
  {
    id: 'thousand-pillar',
    name: 'Thousand Pillar Temple',
    tagline: 'Historic Kakatiya Trikuta Shrine & Monolithic Nandi.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Telangana',
    primaryDeity: 'Sri Rudreswara Swamy (Shiva, Vishnu & Surya)',
    shortDescription:
      'Historic 12th-century Kakatiya star-shaped trikuta shrine famous for its thousand intricately carved granite pillars and monolithic Nandi.',
    editorialStory:
      'Constructed in 1163 CE by King Rudra Deva in Hanamkonda, the Thousand Pillar Temple (Rudreswara Swamy) is an architectural jewel of the Kakatiya dynasty. Its star-shaped trikutalayam layout houses sanctums dedicated to Lord Shiva, Lord Vishnu, and Surya Deva, facing a masterfully polished monolithic Nandi carved from black basalt.',
    bestSeason: 'October – March',
    idealDuration: '1 Day',
    moodTags: ['1000 Pillars', 'Kakatiya Architecture', 'Monolithic Nandi', 'Trikuta Shrine'],
    highlights: [
      'Explore the star-shaped temple built with exactly 1,000 carved granite pillars',
      'Darshan at the triple sanctums of Lord Shiva, Vishnu, and Surya Deva',
      'Admire the world-renowned 6-foot monolithic black basalt Nandi bull',
      'Convenient combined tour with Warangal Fort and Bhadrakali Temple',
    ],
    mapQuery: 'Thousand Pillar Temple Hanamkonda Warangal Telangana',
    lat: 17.9996,
    lng: 79.5746,
    image: '/images/destinations/thousand-pillar.jpg',
    alt: 'Thousand Pillar Temple in Hanamkonda Warangal',
  },

  // 6. Bhadrachalam
  {
    id: 'bhadrachalam',
    name: 'Bhadrachalam',
    tagline: 'Ayodhya of the South & Sacred Abode of Lord Rama on Godavari.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Telangana',
    primaryDeity: 'Sri Sita Ramachandra Swamy',
    shortDescription:
      'Revered riverside abode of Lord Rama and Devi Sita on the sacred banks of the Godavari River, sanctified by Saint Bhakta Ramadasu.',
    editorialStory:
      'Bhadrachalam is the spiritual heart of Rama Bhakti in South India. Located on the serene banks of the sacred Godavari River, this holy temple was consecrated where Lord Rama gave darshan to sage Bhadra. Pilgrims come from all over India to take Godavari holy snanam, offer Rama Koti prayers, and visit nearby Parnasala.',
    bestSeason: 'September – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Rama Kshetram', 'Godavari River', 'Bhakta Ramadasu', 'Parnasala'],
    highlights: [
      'Darshan of Sri Sita Ramachandra Swamy and Lord Lakshmana in the sanctum',
      'Holy snanam (sacred bath) in the holy waters of Godavari River',
      'Visit historic Parnasala where Lord Rama and Sita Devi resided in exile',
      'See the historic jail and jewels preserved by Saint Bhakta Ramadasu',
    ],
    mapQuery: 'Sri Sita Ramachandra Swamy Temple Bhadrachalam Telangana',
    lat: 17.6687,
    lng: 80.8936,
    image: '/images/destinations/bhadrachalam.jpg',
    alt: 'Sri Sita Ramachandra Swamy Temple on the Godavari in Bhadrachalam',
  },

  // 7. Yaganti
  {
    id: 'yaganti',
    name: 'Yaganti',
    tagline: 'Ancient Cave Shrine of Sri Uma Maheswara & Growing Nandi.',
    region: 'Telangana & Andhra Pradesh',
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
      'Darshan of Sri Uma Maheswara Swamy carved from a single stone',
      'Witness the miraculous growing Nandi idol verified by research',
      'Holy bath in the perennial natural spring Pushkarini pool',
      'Explore Agastya Cave and Sri Veerabrahmendra Swamy meditation caves',
    ],
    mapQuery: 'Sri Yaganti Uma Maheswara Temple Yaganti Andhra Pradesh',
    lat: 15.3512,
    lng: 78.1408,
    image: '/images/destinations/yaganti.jpg',
    alt: 'Sri Yaganti Uma Maheswara Temple Gopuram and sacred surroundings',
  },

  // 8. Tirupati
  {
    id: 'tirupati',
    name: 'Tirupati',
    tagline: 'Kaliyuga Vaikuntha & Abode of Lord Venkateswara at Tirumala.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Andhra Pradesh',
    primaryDeity: 'Sri Venkateswara Swamy (Lord Balaji)',
    shortDescription:
      'The world-renowned holy Seven Hills of Tirumala, welcoming millions of devotees for divine Govinda darshan and laddu prasadam.',
    editorialStory:
      'Tirumala Balaji stands at the pinnacle of Hindu spiritual journeys. Set atop the scenic Seshachalam mountain range, the divine golden Ananda Nilayam vimanam holds the majestic idol of Lord Venkateswara, the granter of all boons in Kaliyuga. Our personalized packages provide comfortable travel and darshan support.',
    bestSeason: 'Year-Round (Best: September – March)',
    idealDuration: '2 to 3 Days',
    moodTags: ['Govinda Balaji', 'Seven Hills', 'Ananda Nilayam', 'Maha Prasadam'],
    highlights: [
      'Seamless travel arrangements for Tirumala Balaji Darshan',
      'Visit Sri Padmavathi Ammavari Temple at Tiruchanur',
      'Scenic journey through the lush Seshachalam hills ghat road',
      'Darshan of Sri Govindaraja Swamy and Kapila Theertham waterfall temple',
    ],
    mapQuery: 'Sri Venkateswara Swamy Temple Tirumala Tirupati Andhra Pradesh',
    lat: 13.6833,
    lng: 79.3472,
    image: '/images/destinations/tirupati.jpg',
    alt: 'Tirumala Sri Venkateswara Temple at Tirupati',
  },

  // 9. Arunachalam
  {
    id: 'arunachalam',
    name: 'Arunachalam',
    tagline: 'Sacred Hill of Fire & Holy 14 km Giri Pradakshina.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Tamil Nadu',
    primaryDeity: 'Lord Shiva (Arunachaleswarar - Agni Lingam)',
    shortDescription:
      'The sacred fire element (Agni) Shiva shrine with the divine 14 km Giri Pradakshina barefoot pilgrimage around Mount Arunachala.',
    editorialStory:
      'Arunachalam (Tiruvannamalai) is the holy Agni Kshetram where Lord Shiva manifested as a cosmic pillar of fire. Devotees from around the world perform the 14-kilometer Giri Pradakshina barefoot around the sacred mountain, visiting the eight Ashta Lingams and meditating at the serene Ramana Maharshi Ashram.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Agni Lingam', 'Giri Pradakshina', 'Ramana Ashram', 'Silent Meditation'],
    highlights: [
      'Darshan of Sri Arunachaleswarar & Unnamulai Amman in the 25-acre temple',
      'Sacred 14 km Giri Pradakshina around Mount Arunachala',
      'Visit all eight Ashta Lingam shrines along the mountain route',
      'Meditation at Sri Ramana Maharshi Ashram and Virupaksha Cave',
    ],
    mapQuery: 'Arulmigu Arunachaleswarar Temple Tiruvannamalai Tamil Nadu',
    lat: 12.2319,
    lng: 79.0677,
    image: '/images/destinations/arunachalam.jpg',
    alt: 'Sri Arunachaleswarar Temple Rajagopuram at Mount Arunachala',
  },

  // 10. Ganagapur Temple
  {
    id: 'ganagapur',
    name: 'Ganagapur Temple',
    tagline: 'Holy Sangam of Bhima & Amarja & Sri Dattatreya Nirguna Paduka.',
    region: 'Maharashtra & Karnataka',
    state: 'Karnataka',
    primaryDeity: 'Lord Dattatreya (Sri Narasimha Saraswati)',
    shortDescription:
      'Sacred Dattatreya pilgrimage at the holy confluence of Bhima and Amarja rivers, famous for Nirguna Paduka darshan and holy bath.',
    editorialStory:
      'Sri Kshetra Ganagapur is one of the most revered pilgrimage centers in the Dattatreya tradition. It was the sacred karmabhoomi of Sri Narasimha Saraswati Swamy, the second avatar of Lord Dattatreya. Devotees take the sacred Sangam snanam, perform Madhukari (holy bhiksha), and offer prayers to the infallible Nirguna Padukas.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Dattatreya Peeth', 'Nirguna Padukas', 'Bheema Amarja Sangam', 'Madhukari'],
    highlights: [
      'Darshan of the sacred Nirguna Padukas installed by Sri Narasimha Saraswati',
      'Holy snanam at the sacred confluence (Sangam) of Bhima and Amarja rivers',
      'Audumbar tree worship and participating in the sacred Madhukari tradition',
      'Combined pilgrimage with nearby Akalkot Swami Samarth Mandir',
    ],
    mapQuery: 'Dattatreya Temple Ganagapur Afzalpur Karnataka',
    lat: 17.2798,
    lng: 76.5292,
    image: '/images/destinations/ganagapur.jpg',
    alt: 'Sri Kshetra Ganagapur Dattatreya Temple',
  },

  // 11. Tulja Bhavani Temple
  {
    id: 'tulja-bhavani',
    name: 'Tulja Bhavani Temple',
    tagline: 'Kulswamini of Chhatrapati Shivaji Maharaj & 51 Shaktipeeths.',
    region: 'Maharashtra & Karnataka',
    state: 'Maharashtra',
    primaryDeity: 'Goddess Tulja Bhavani (Maa Amba)',
    shortDescription:
      'Revered Shaktipeeth and the family guardian deity of Chhatrapati Shivaji Maharaj, blessing millions of devotees in Tuljapur.',
    editorialStory:
      'Tuljapur is the divine home of Goddess Tulja Bhavani, one of the three and a half sacred Shaktipeeths of Maharashtra. Blessed with a self-manifested (Swayambhu) idol of Maa Bhavani, this sacred temple was the spiritual source of courage for Chhatrapati Shivaji Maharaj. Devotees offer Gondhal prayers and take part in the vibrant daily aartis.',
    bestSeason: 'September – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Shakti Peeth', 'Kulswamini', 'Shivaji Maharaj', 'Chhatrapati Blessings'],
    highlights: [
      'Darshan of the miraculous Swayambhu idol of Maa Tulja Bhavani',
      'Visit Kallol Theerth and Gomukh Theerth holy water tanks',
      'Experience the thrilling Chhabina procession and traditional Gondhal',
      'Ideal combined tour with Solapur, Akalkot, and Pandharpur',
    ],
    mapQuery: 'Tulja Bhavani Temple Tuljapur Maharashtra',
    lat: 18.0067,
    lng: 76.0717,
    image: '/images/destinations/tulja-bhavani.jpg',
    alt: 'Tulja Bhavani Temple entrance and sanctum in Tuljapur',
  },

  // 12. Akalkot Temple
  {
    id: 'akalkot',
    name: 'Akalkot Temple',
    tagline: 'Sacred Vatavruksha Abode of Shri Swami Samarth Maharaj.',
    region: 'Maharashtra & Karnataka',
    state: 'Maharashtra',
    primaryDeity: 'Shri Swami Samarth Maharaj',
    shortDescription:
      'The divine sanctum where Shri Swami Samarth lived under the banyan tree, blessing millions with the promise: "Bhiu Nakos, Mi Tujhya Pathishi Aahe."',
    editorialStory:
      'Akkalkot is the sacred karmabhoomi of Shri Swami Samarth Maharaj, revered as the third incarnation of Lord Dattatreya. Centered around the holy Vatavruksha (Banyan Tree) temple and Samadhi Mandir, devotees experience profound peace, divine Mahaprasad, and boundless spiritual strength.',
    bestSeason: 'October – February',
    idealDuration: '1 to 2 Days',
    moodTags: ['Datta Avatara', 'Vatavruksha Temple', 'Bhiu Nakos', 'Swami Samarth'],
    highlights: [
      'Darshan at Vatavruksha Swami Samarth Mandir under the sacred banyan tree',
      'Visit Samadhi Mandir and historic Rajwada palace of Akkalkot',
      'Partake in holy Mahaprasad and attend the divine evening Paduka Aarti',
      'Seamless travel arrangements from Solapur railway station',
    ],
    mapQuery: 'Vatavruksha Swami Samarth Maharaj Devasthan Akkalkot Maharashtra',
    lat: 17.5255,
    lng: 76.2045,
    image: '/images/destinations/akalkot.jpg',
    alt: 'Shri Swami Samarth Maharaj Vatavruksha Temple in Akalkot',
  },

  // 13. Pandharpur Vitthal Rukmini Temple
  {
    id: 'pandharpur',
    name: 'Pandharpur Vitthal Rukmini Temple',
    tagline: 'Dakshina Kashi & Heart of Varkari Bhakti Movement.',
    region: 'Maharashtra & Karnataka',
    state: 'Maharashtra',
    primaryDeity: 'Lord Vitthal (Vithoba) & Rukmini Mata',
    shortDescription:
      'The sacred Chandrabhaga riverside abode of Lord Vitthal, where millions chant "Vitthal Vitthal Jai Hari Vitthal" in pure devotion.',
    editorialStory:
      'Pandharpur is the spiritual heartbeat of Maharashtra. Standing on the sacred banks of the curving Chandrabhaga River, the temple of Lord Vitthal and Rukmini Devi radiates egalitarian love and surrender. Devotees cherish the Padsparsha Darshan (touching the holy feet of Lord Vitthal) and the spiritual resonance of saint-poets like Tukaram, Dnyaneshwar, and Namdev.',
    bestSeason: 'July – February (Ashadhi & Kartiki Ekadashi)',
    idealDuration: '1 to 2 Days',
    moodTags: ['Varkari Bhakti', 'Chandrabhaga River', 'Vitthal Darshan', 'Padsparsha'],
    highlights: [
      'Padsparsha Darshan at the feet of Lord Vitthal (Vithoba)',
      'Blessings at the sanctum of Rukmini Mata and Pundalik Mandir',
      'Holy bath and sunset prayers along the sacred Chandrabhaga River ghats',
      'Chant soulful Abhangs and experience the historic Varkari heritage',
    ],
    mapQuery: 'Shri Vitthal Rukmini Mandir Pandharpur Maharashtra',
    lat: 17.6775,
    lng: 75.3283,
    image: '/images/destinations/pandharpur.jpg',
    alt: 'Vitthal Rukmini Temple shikhara on the banks of Chandrabhaga in Pandharpur',
  },

  // 14. Shiridi
  {
    id: 'shirdi',
    name: 'Shiridi',
    tagline: 'Abode of Shri Sai Baba & Eternal Path of Shraddha and Saburi.',
    region: 'Maharashtra & Karnataka',
    state: 'Maharashtra',
    primaryDeity: 'Shri Sai Baba',
    shortDescription:
      'The sacred Samadhi Mandir, Dwarkamai, and Chavadi of Shri Sai Baba, radiating boundless compassion and peace to every visiting devotee.',
    editorialStory:
      'Shirdi is the sacred town blessed by the divine presence of Shri Sai Baba. Millions of devotees gather at the Samadhi Mandir to experience profound serenity, attend the divine Kakad and Shej Aartis, and reflect on the timeless teachings of faith (Shraddha) and patience (Saburi).',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Sai Samadhi', 'Shraddha & Saburi', 'Sacred Dhuni', 'Dwarkamai'],
    highlights: [
      'Darshan at Shri Sai Baba Samadhi Mandir and golden throne',
      'Visit holy Dwarkamai with the eternal burning Dhuni and Chavadi',
      'Experience peaceful Kakad and Shej Aarti blessings',
      'Visit nearby Shani Shingnapur open-air temple and Loni',
    ],
    mapQuery: 'Shri Saibaba Sansthan Temple Shirdi Maharashtra',
    lat: 19.7667,
    lng: 74.4766,
    image: '/images/destinations/shirdi.jpg',
    alt: 'Sai Baba Samadhi Mandir in Shirdi',
  },

  // 15. Bhimashankar
  {
    id: 'bhimashankar',
    name: 'Bhimashankar',
    tagline: 'Ancient Jyotirlinga Amidst Sahyadri Forest & Bhima River Origin.',
    region: 'Maharashtra & Karnataka',
    state: 'Maharashtra',
    primaryDeity: 'Lord Shiva (Bhimashankar Jyotirlinga)',
    shortDescription:
      'One of the 12 sacred Jyotirlingas, surrounded by misty Western Ghat forests and wildlife sanctuary at the source of Bhima River.',
    editorialStory:
      'Tucked deep inside the verdant Western Ghats near Pune, Bhimashankar Jyotirlinga represents Lord Shiva in his majestic Rudra form who vanquished the demon Tripurasura. Surrounded by dense rainforest, waterfalls, and the wildlife sanctuary home to the giant flying squirrel, it offers a deeply peaceful spiritual atmosphere.',
    bestSeason: 'September – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Jyotirlinga', 'Sahyadri Hills', 'Origin of Bhima River', 'Nagara Style'],
    highlights: [
      'Darshan and Rudrabhishekam at Bhimashankar Jyotirlinga',
      'Admire intricate 13th-century Nagara and Hemadpanthi stone carvings',
      'Visit Mokshakund Theerth and the origin point of the holy Bhima River',
      'Scenic drive through the misty Sahyadri mountain rainforest',
    ],
    mapQuery: 'Bhimashankar Jyotirlinga Temple Pune Maharashtra',
    lat: 19.0722,
    lng: 73.5358,
    image: '/images/destinations/bhimashankar.jpg',
    alt: 'Bhimashankar Jyotirlinga Temple amidst Sahyadri hills in Maharashtra',
  },

  // 16. Trimbakeshwar
  {
    id: 'trimbakeshwar',
    name: 'Trimbakeshwar',
    tagline: 'Three-Faced Trimurti Jyotirlinga & Origin of Sacred Godavari.',
    region: 'Maharashtra & Karnataka',
    state: 'Maharashtra',
    primaryDeity: 'Trimbakeshwar Jyotirlinga (Brahma, Vishnu & Shiva)',
    shortDescription:
      'Unique three-faced Jyotirlinga embodying the Hindu Trimurti at the foothills of Brahmagiri mountain where Godavari River originates.',
    editorialStory:
      'Trimbakeshwar is extraordinary among the 12 Jyotirlingas because the lingam features three distinct faces representing Brahma, Vishnu, and Shiva. Located at the base of the holy Brahmagiri hills in Nashik, it is the sacred birthplace of the Godavari River. Devotees visit Kushavarta Kund and perform sacred Narayan Nagbali and Kalsarpa pujas here.',
    bestSeason: 'September – March',
    idealDuration: '2 Days',
    moodTags: ['Trimurti Jyotirlinga', 'Origin of Godavari', 'Brahmagiri Hill', 'Kushavarta'],
    highlights: [
      'Darshan of the unique three-faced Jyotirlinga of Brahma, Vishnu, and Shiva',
      'Holy snanam in the sacred Kushavarta Kund reservoir',
      'Visit Brahmagiri mountain and Gangadwar (origin of Godavari River)',
      'Combined tour with Nashik Panchavati, Sita Gufa, and Kalaram Mandir',
    ],
    mapQuery: 'Trimbakeshwar Shiva Temple Nashik Maharashtra',
    lat: 19.9322,
    lng: 73.5308,
    image: '/images/destinations/trimbakeshwar.jpg',
    alt: 'Black stone Trimbakeshwar Jyotirlinga Temple in Nashik',
  },

  // 17. Omkareshwar madhya pradesh
  {
    id: 'omkareshwar',
    name: 'Omkareshwar madhya pradesh',
    tagline: 'Sacred Island Shaped Like OM (ॐ) on Holy Narmada River.',
    region: 'Central & North India',
    state: 'Madhya Pradesh',
    primaryDeity: 'Lord Shiva (Omkareshwar & Mamleshwar)',
    shortDescription:
      'Revered Jyotirlinga situated on the sacred Mandhata island naturally sculpted in the holy shape of the divine OM (ॐ) syllable.',
    editorialStory:
      'Omkareshwar is one of the most spiritually enchanting Jyotirlinga shrines in India. Located on the Mandhata island in the holy Narmada River, the island’s aerial topography is shaped precisely like the sacred symbol OM (ॐ). Pilgrims cross the suspension bridge, perform holy Narmada Parikrama, and take darshan of both Omkareshwar on the island and Mamleshwar on the south bank.',
    bestSeason: 'October – March',
    idealDuration: '1 to 2 Days',
    moodTags: ['Narmada River', 'OM Island', 'Mamleshwar Jyotirlinga', 'Narmada Parikrama'],
    highlights: [
      'Darshan at Omkareshwar Jyotirlinga on Mandhata island',
      'Darshan at the companion Mamleshwar (Amareshwar) Jyotirlinga',
      'Scenic holy boat ride across the sacred Narmada River waters',
      'Walk across the picturesque Omkareshwar suspension bridge (Jhula)',
    ],
    mapQuery: 'Omkareshwar Jyotirlinga Temple Khandwa Madhya Pradesh',
    lat: 22.2464,
    lng: 76.1517,
    image: '/images/destinations/omkareshwar.jpg',
    alt: 'Omkareshwar Jyotirlinga Temple on the holy Narmada River in Madhya Pradesh',
  },

  // 18. Shri Mahakaleshwar Jyotirlinga Temple
  {
    id: 'mahakaleshwar',
    name: 'Shri Mahakaleshwar Jyotirlinga Temple',
    tagline: 'Dakshinmukhi Swayambhu Jyotirlinga & World-Famous Bhasma Aarti.',
    region: 'Central & North India',
    state: 'Madhya Pradesh',
    primaryDeity: 'Lord Mahakal (Swayambhu Jyotirlinga)',
    shortDescription:
      'Supreme south-facing Jyotirlinga on the holy Shipra River in Ujjain, revered for the divine early morning Bhasma Aarti and Mahakal Lok.',
    editorialStory:
      'Shri Mahakaleshwar in the ancient holy city of Ujjain (Avanti) is the only south-facing (Dakshinmukhi) Jyotirlinga among the 12, signifying mastery over death and time itself. Millions revere the daily dawn Bhasma Aarti, explore the grand carved Mahakal Lok corridor, and bathe in the sacred Shipra River.',
    bestSeason: 'October – March',
    idealDuration: '2 Days',
    moodTags: ['Bhasma Aarti', 'Dakshinmukhi', 'Mahakal Lok', 'Shipra River', 'Ujjain'],
    highlights: [
      'Witness the world-famous early morning Bhasma Aarti ceremony',
      'Darshan of Swayambhu Mahakaleshwar Jyotirlinga inside the sanctum',
      'Stroll through the grand 900-meter carved Shri Mahakal Lok Corridor',
      'Visit Kal Bhairav Temple, Harsiddhi Shaktipeeth, and Ram Ghat on Shipra',
    ],
    mapQuery: 'Mahakaleshwar Jyotirlinga Temple Ujjain Madhya Pradesh',
    lat: 23.1827,
    lng: 75.7682,
    image: '/images/destinations/mahakaleshwar.jpg',
    alt: 'Shri Mahakaleshwar Jyotirlinga Temple and Shikhar in Ujjain',
  },

  // 19. Sabarimala Ayyappa Temple
  {
    id: 'sabarimala',
    name: 'Sabarimala Ayyappa Temple',
    tagline: 'Sacred Hill Abode of Swami Ayyappa & 18 Golden Steps.',
    region: 'Telangana & Andhra Pradesh',
    state: 'Kerala',
    primaryDeity: 'Lord Ayyappa (Dharma Sastha)',
    shortDescription:
      'Renowned hilltop forest pilgrimage where millions chant "Swamiye Saranam Ayyappa" and ascend the sacred 18 gold-plated steps.',
    editorialStory:
      'Nestled amidst the dense green forests of the Periyar Tiger Reserve in the Western Ghats of Kerala, Sabarimala is one of the world’s largest annual pilgrimages. Devotees observe strict 41-day vratham, carry the sacred Irumudi kettu, trek through the holy forest paths, and climb the revered 18 golden steps (Pathinettam Padi) to behold Lord Ayyappa.',
    bestSeason: 'November – January (Mandala-Makaravilakku Season)',
    idealDuration: '3 to 4 Days',
    moodTags: ['Swamiye Saranam', '18 Golden Steps', 'Mandala Vratham', 'Irumudi Kettu'],
    highlights: [
      'Trek from Pamba River to Sannidhanam amidst peaceful forest hills',
      'Darshan of Lord Ayyappa after ascending the sacred 18 golden steps (Pathinettam Padi)',
      'Experience the divine Makaravilakku and celestial Makara Jyothi',
      'Dedicated AC vehicle assistance from Hyderabad, Ernakulam, or Kottayam',
    ],
    mapQuery: 'Sabarimala Sree Ayyappa Temple Pathanamthitta Kerala',
    lat: 9.4402,
    lng: 77.0819,
    image: '/images/destinations/sabarimala.jpg',
    alt: 'Sabarimala Sree Dharma Sastha Temple Sannidhanam in Kerala',
  },

  // 20. Ayodhya Ram Mandir
  {
    id: 'ayodhya',
    name: 'Ayodhya Ram Mandir',
    tagline: 'Shri Ram Janmabhoomi & Sacred Sarayu River Ghats.',
    region: 'Central & North India',
    state: 'Uttar Pradesh',
    primaryDeity: 'Bhagwan Shri Ram Lalla',
    shortDescription:
      'The majestic newly consecrated Shri Ram Janmabhoomi temple on holy Sarayu River, celebrating the eternal birthplace of Lord Rama.',
    editorialStory:
      'Ayodhya Dham is the timeless birthplace of Maryada Purushottam Lord Rama. With the consecration of the magnificent pink sandstone Nagara-style Shri Ram Janmabhoomi Mandir, millions of devotees visit to behold the captivating idol of Shri Ram Lalla, seek protection at Hanuman Garhi, and attend the sunset Maha Aarti at Sarayu Ghat.',
    bestSeason: 'October – March',
    idealDuration: '2 to 3 Days',
    moodTags: ['Ram Lalla', 'Ram Janmabhoomi', 'Sarayu Aarti', 'Hanuman Garhi'],
    highlights: [
      'Darshan of Bhagwan Shri Ram Lalla inside the grand carved stone Ram Mandir',
      'Seek blessings at historic Hanuman Garhi and Kanak Bhavan',
      'Soulful sunset boat ride and Maha Aarti on the holy Sarayu River',
      'Visit Dashrath Mahal, Sita Ki Rasoi, and sacred Surya Kund',
    ],
    mapQuery: 'Shri Ram Janmabhoomi Mandir Ayodhya Uttar Pradesh',
    lat: 26.7956,
    lng: 82.1944,
    image: '/images/destinations/ayodhya.jpg',
    alt: 'Shri Ram Janmabhoomi Mandir in Ayodhya',
  },
];

/* ========================================================================
   SRISAILAM SPECIAL FEATURED PACKAGES (FROM IMAGES 1 & 2 - VIP SPOTLIGHT)
   ======================================================================== */
export const SRISAILAM_SPECIAL_PACKAGES: SrisailamSpecialPackage[] = [
  {
    id: 'srisailam-1-day',
    duration: '1 Day',
    title: '1 Day Package',
    tagline: 'Srisailam Special Same-Day Darshan & Scenic Tour',
    badge: 'Most Popular',
    image: '/images/srisailam-1day-package.jpg',
    alt: 'Srisailam 1 Day Package with Golden Mallikarjuna Swamy Temple Gopuram',
    sightseeing: [
      'Mallikarjuna Swamy Temple',
      'Bramarambika Devi Temple',
      'Sakshi Ganapathi Temple',
      'Paladhara, Panchadhara',
      'Hatkeshwar Temple',
      'Paatala Ganga',
      'Octopus View Point',
      'Forest View Points (Srisailam Dam)',
    ],
    whatsappMessage:
      'Hello Bhargavi Tour and Travels, I want to book the Srisailam 1 Day Package. Please share vehicle availability and quotation.',
  },
  {
    id: 'srisailam-2-day',
    duration: '2 Day',
    title: '2 Day Package',
    tagline: 'Srisailam Complete Yatra, Boating & Tiger Reserve Experience',
    badge: 'Devotee Recommended',
    image: '/images/srisailam-2day-package.jpg',
    alt: 'Srisailam 2 Day Package with Krishna River Boating & Cruise',
    sightseeing: [
      'Mallikarjuna Swamy Temple',
      'Bramarambika Devi Temple',
      'Sakshi Ganapathi Temple',
      'Paladhara, Panchadhara',
      'Hatkeshwar Temple',
      'Paatala Ganga',
      'Octopus View Point',
      'Srisailam Tiger Reserve',
      'Srisailam Ropeway',
      'Srisailam Boating',
      'Akka Mahadevi Temple',
      'Chenchu Lakshmi Museum',
    ],
    whatsappMessage:
      'Hello Bhargavi Tour and Travels, I want to book the Srisailam 2 Day Package. Please share details and quotation.',
  },
];

/* ========================================================================
   OUR FLEET OF CARS (FROM IMAGE 3)
   ======================================================================== */
export const CAR_FLEET: CarFleetItem[] = [
  {
    id: 'swift-dzire',
    name: 'Swift DZire',
    category: 'Comfort Sedan',
    capacity: '4 Passengers + 1 Driver',
    acType: 'Full Air Conditioned (AC)',
    luggage: '2 Large + 1 Small Bag',
    bestFor: 'Solo pilgrims, couples & small family temple visits',
    features: ['Comfortable Pushback Seats', 'Excellent Mileage & Budget Friendly', 'Doorstep Pickup & Drop'],
    image: '/images/fleet-overview.jpg',
    alt: 'Swift DZire Travel Taxi for Pilgrimage',
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    category: 'Spacious Sedan',
    capacity: '4 Passengers + 1 Driver',
    acType: 'Full Air Conditioned (AC)',
    luggage: '3 Large Bags (Huge Boot Space)',
    bestFor: 'Highway yatras, comfortable legroom & senior citizens',
    features: ['Extra Legroom for Elders', 'Silent Highway Ride', 'Spacious Luggage Boot'],
    image: '/images/fleet-overview.jpg',
    alt: 'Toyota Etios for Pilgrimage Travel',
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    category: 'Family MUV',
    capacity: '6 Passengers + 1 Driver',
    acType: 'Dual Zone AC with Rear Vents',
    luggage: '3-4 Bags (Flexible Seats)',
    bestFor: 'Families of 5 to 6 members with luggage',
    features: ['Individual Rear AC Vents', 'Foldable 3rd Row for Cargo', 'Smooth Ghat Road Travel'],
    image: '/images/fleet-overview.jpg',
    alt: 'Maruti Ertiga MUV for Family Pilgrimage',
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    category: 'Premium MUV',
    capacity: '7 Passengers + 1 Driver',
    acType: 'Dual Air Conditioning',
    luggage: '4-5 Large Bags',
    bestFor: 'The gold standard for South India & Maharashtra temple tours',
    features: ['Captain Seats Available', 'Proven Safety on Mountain Roads', 'Unmatched Ride Comfort'],
    image: '/images/fleet-overview.jpg',
    alt: 'Toyota Innova for Sacred Temple Yatras',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Luxury MUV',
    capacity: '7 Passengers + 1 Driver',
    acType: 'Automatic Climate Control AC',
    luggage: '5 Large Bags',
    bestFor: 'VIP pilgrim comfort, long-distance interstate yatras & elders',
    features: ['Plush Reclining Leather Seats', 'Ambient Lighting & Mobile Charging', 'Top-Grade Chauffeur Service'],
    image: '/images/fleet-overview.jpg',
    alt: 'Innova Crysta Luxury Travel for Temple Tours',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Group Luxury Van',
    capacity: '12 to 17 Passengers + 1 Driver',
    acType: 'High-Power Overhead Ducted AC',
    luggage: 'Large Dedicated Luggage Boot',
    bestFor: 'Large family sanghams, bhajan mandalis & group pilgrimages',
    features: ['High-Roof Walkthrough Cabin', 'Individual Pushback Seats', 'Music System for Bhajans'],
    image: '/images/fleet-overview.jpg',
    alt: 'Tempo Traveller for Group Pilgrimages',
  },
];

/* ========================================================================
   FEATURED JOURNEYS / TOUR PACKAGES
   ======================================================================== */
export const FEATURED_JOURNEYS: FeaturedJourney[] = [
  // 1. Srisailam 1 Day Package (Image 1 - Spotlight)
  {
    id: 'pkg-srisailam-1day',
    category: 'Srisailam Special Packages',
    title: 'Srisailam 1 Day Package',
    destinationId: 'srisailam',
    destinationName: 'Shrishailam',
    duration: '1 Day (Same Day Return)',
    routeSummary: 'Hyderabad → Nallamala Forests → Srisailam Temples → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    isSpecialHighlight: true,
    summary:
      'Official 1 Day Srisailam Package covering Mallikarjuna Swamy Temple, Bramarambika Devi Temple, Sakshi Ganapathi, Paladhara Panchadhara, Hatkeshwar, Paatala Ganga, Octopus View Point & Dam.',
    highlights: [
      'Mallikarjuna Swamy Temple & Bramarambika Devi Temple',
      'Sakshi Ganapathi Temple, Paladhara & Panchadhara',
      'Hatkeshwar Temple & Paatala Ganga holy bath',
      'Octopus View Point & Forest View Points (Srisailam Dam)',
    ],
    itinerary: [
      {
        day: 'Morning',
        title: 'Hyderabad Departure & Scenic Forest Drive',
        detail:
          'Early morning pickup from Hyderabad. Enjoy a smooth drive through scenic Nallamala tiger forest. Stop at Octopus View Point and Forest Dam views.',
      },
      {
        day: 'Mid-Day',
        title: 'Mallikarjuna Swamy & Bramarambika Devi Temple Darshan',
        detail:
          'Arrive in Srisailam. Attend holy darshan of Mallikarjuna Jyotirlinga and Bramarambika Devi Shakti Peeth. Visit Sakshi Ganapathi Temple.',
      },
      {
        day: 'Afternoon',
        title: 'Hatkeshwar, Paladhara Panchadhara & Paatala Ganga',
        detail:
          'Explore ancient Hatkeshwar Temple, holy spring waters of Paladhara Panchadhara, and descent to Paatala Ganga.',
      },
      {
        day: 'Evening',
        title: 'Comfortable Return to Hyderabad',
        detail:
          'Relax on the scenic return journey to Hyderabad with safe doorstep drop-off by late evening.',
      },
    ],
    suitableFor: 'Families, Senior Citizens & Weekend Pilgrims',
    image: '/images/srisailam-1day-package.jpg',
    alt: 'Srisailam 1 Day Package Golden Temple Gopuram',
  },

  // 2. Srisailam 2 Day Package (Image 2 - Spotlight)
  {
    id: 'pkg-srisailam-2day',
    category: 'Srisailam Special Packages',
    title: 'Srisailam 2 Day Package',
    destinationId: 'srisailam',
    destinationName: 'Shrishailam',
    duration: '2 Days / 1 Night',
    routeSummary: 'Hyderabad → Srisailam Temples → Boating & Tiger Reserve → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    isSpecialHighlight: true,
    summary:
      'Official 2 Day Srisailam Package covering Mallikarjuna Swamy, Bramarambika Devi, Sakshi Ganapathi, Paladhara, Hatkeshwar, Paatala Ganga, Octopus View, Tiger Reserve, Ropeway, Boating, Akka Mahadevi Temple & Museum.',
    highlights: [
      'Mallikarjuna Swamy Temple & Bramarambika Devi Temple',
      'Sakshi Ganapathi, Paladhara Panchadhara & Hatkeshwar Temple',
      'Paatala Ganga, Ropeway & Krishna River Boating',
      'Srisailam Tiger Reserve, Akka Mahadevi Temple & Chenchu Lakshmi Museum',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Srisailam & Temple Darshans',
        detail:
          'Morning pickup from Hyderabad. Scenic forest passage with stop at Octopus View Point. Check-in at hotel. Darshan of Mallikarjuna Swamy and Bramarambika Devi. Visit Sakshi Ganapathi and Hatkeshwar.',
      },
      {
        day: 'Day 02',
        title: 'Ropeway, Boating, Tiger Reserve & Akka Mahadevi Temple',
        detail:
          'Morning ropeway ride to Paatala Ganga followed by thrilling Krishna river boating to ancient Akka Mahadevi Temple caves. Explore Srisailam Tiger Reserve and Chenchu Lakshmi Tribal Museum before relaxed return to Hyderabad.',
      },
    ],
    suitableFor: 'Devout Families, Nature Lovers & Spiritual Explorers',
    image: '/images/srisailam-2day-package.jpg',
    alt: 'Srisailam 2 Day Package Krishna River Boating and Cruise',
  },

  // 3. Telangana Heritage Temple Tour
  {
    id: 'pkg-telangana-heritage',
    category: 'Telangana Temple Tours',
    title: 'Telangana Sacred Circuit: Yadadri, Vemulawada, Ramappa & Warangal',
    destinationId: 'yadadri',
    destinationName: 'Telangana Shrines',
    duration: '3 Days / 2 Nights',
    routeSummary: 'Hyderabad → Yadadri → Vemulawada → Ramappa (UNESCO) → Thousand Pillar → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Explore Telangana’s supreme divine sanctums: Sri Lakshmi Narasimha Swamy at Yadadri, Raja Rajeshwara Swamy at Vemulawada, UNESCO world heritage Ramappa Temple, and Thousand Pillar Temple.',
    highlights: [
      'Darshan at newly carved Krishna Shila temple of Yadadri',
      'Code Mrokkubadi & Dharma Gundam snanam at Vemulawada Rajanna temple',
      'Marvel at UNESCO world heritage Ramappa Temple and lightweight floating bricks',
      'Visit historic Thousand Pillar Temple and monolithic black basalt Nandi',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Hyderabad to Yadadri & Vemulawada',
        detail:
          'Morning pickup from Hyderabad. Darshan at Yadadri Sri Lakshmi Narasimha Swamy Temple. Afternoon drive to Vemulawada for evening darshan at Sri Raja Rajeshwara Swamy Temple. Overnight in Vemulawada or Karimnagar.',
      },
      {
        day: 'Day 02',
        title: 'UNESCO Ramappa Temple & Ramappa Lake',
        detail:
          'Morning prayers and drive through lush countryside to Palampet. Explore the UNESCO World Heritage Ramappa Temple, admire black basalt dancer statues, and relax near Ramappa Lake. Overnight in Warangal.',
      },
      {
        day: 'Day 03',
        title: 'Thousand Pillar Temple & Return to Hyderabad',
        detail:
          'Morning darshan at the 12th-century Thousand Pillar Temple and Warangal Fort. Return comfortably to Hyderabad with doorstep drop-off.',
      },
    ],
    suitableFor: 'Families, History Enthusiasts & Temple Devotees',
    image: '/images/destinations/ramappa.jpg',
    alt: 'Ramappa Temple UNESCO World Heritage',
  },

  // 4. Maharashtra Tri-Shakti & Datta Peeth Yatra
  {
    id: 'pkg-maharashtra-pilgrimage',
    category: 'Maharashtra Pilgrimages',
    title: 'Solapur, Ganagapur, Tuljapur, Akalkot & Pandharpur Yatra',
    destinationId: 'akalkot',
    destinationName: 'Datta & Vitthal Shrines',
    duration: '4 Days / 3 Nights',
    routeSummary: 'Hyderabad → Ganagapur → Tuljapur → Akalkot → Pandharpur → Hyderabad',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Sacred pilgrimage covering Dattatreya Nirguna Padukas at Ganagapur, Tulja Bhavani Shaktipeeth, Swami Samarth Vatavruksha Mandir at Akalkot, and Lord Vitthal-Rukmini Mandir at Pandharpur.',
    highlights: [
      'Holy Sangam snanam and Nirguna Paduka darshan at Ganagapur',
      'Darshan at Tulja Bhavani Temple, Kulswamini of Shivaji Maharaj',
      'Prayers under the holy Banyan tree at Akalkot Swami Samarth temple',
      'Padsparsha Darshan at Lord Vitthal and Rukmini Mata in Pandharpur',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Hyderabad to Ganagapur (Dattatreya Peeth)',
        detail:
          'Morning pickup from Hyderabad. Drive to Sri Kshetra Ganagapur. Holy bath at Bhima-Amarja Sangam, Audumbar tree worship, and Nirguna Paduka darshan. Overnight in Ganagapur or Solapur.',
      },
      {
        day: 'Day 02',
        title: 'Tuljapur Bhavani & Akalkot Swami Samarth',
        detail:
          'Morning drive to Tuljapur for darshan of Goddess Tulja Bhavani. Proceed to Akalkot for darshan at Vatavruksha Mandir and Swami Samarth Samadhi. Overnight in Solapur.',
      },
      {
        day: 'Day 03',
        title: 'Pandharpur Vitthal-Rukmini Darshan',
        detail:
          'Drive to holy Pandharpur. Take Chandrabhaga river snanam and experience the divine Padsparsha darshan of Lord Vitthal and Rukmini Devi. Overnight in Pandharpur or Solapur.',
      },
      {
        day: 'Day 04',
        title: 'Comfortable Return to Hyderabad',
        detail:
          'Morning prayers and leisurely drive back to Hyderabad with safe doorstep drop-off.',
      },
    ],
    suitableFor: 'Datta Bhaktas, Varkari Devotees & Multi-Generation Families',
    image: '/images/destinations/pandharpur.jpg',
    alt: 'Vitthal Rukmini Temple in Pandharpur',
  },

  // 5. Jyotirlinga Special Yatra
  {
    id: 'pkg-jyotirlinga-special',
    category: 'Jyotirlinga Special Tours',
    title: 'Panch Jyotirlinga Darshan: Trimbak, Bhimashankar, Omkareshwar & Mahakal',
    destinationId: 'mahakaleshwar',
    destinationName: 'Sacred Jyotirlingas',
    duration: '5 Days / 4 Nights',
    routeSummary: 'Hyderabad → Nashik (Trimbak) → Bhimashankar → Omkareshwar → Ujjain (Mahakal)',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'A blessed multi-state pilgrimage to India’s supreme Jyotirlingas: Trimbakeshwar, Bhimashankar, Omkareshwar in Madhya Pradesh, and Mahakaleshwar in Ujjain.',
    highlights: [
      'Darshan of unique 3-faced Trimbakeshwar Jyotirlinga at origin of Godavari',
      'Visit forested Bhimashankar Jyotirlinga in Western Ghats',
      'Holy boat ride to Omkareshwar Jyotirlinga island on Narmada River',
      'Early morning Bhasma Aarti at Mahakaleshwar Jyotirlinga in Ujjain',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Nashik & Trimbakeshwar Jyotirlinga',
        detail:
          'Arrive in Nashik. Darshan at Trimbakeshwar Jyotirlinga, visit Kushavarta Kund and Panchavati. Overnight in Nashik.',
      },
      {
        day: 'Day 02',
        title: 'Bhimashankar Jyotirlinga',
        detail:
          'Scenic drive through Western Ghats to Bhimashankar. Attend Rudrabhishekam at the holy sanctum. Overnight in Pune/Manchar.',
      },
      {
        day: 'Day 03',
        title: 'Journey to Omkareshwar (Madhya Pradesh)',
        detail:
          'Travel to Madhya Pradesh. Arrive at holy Omkareshwar island on the Narmada River. Evening sunset boat ride and darshan.',
      },
      {
        day: 'Day 04',
        title: 'Ujjain Mahakaleshwar & Mahakal Lok',
        detail:
          'Proceed to Ujjain. Explore the grand Shri Mahakal Lok corridor and attend Sandhya Aarti at Mahakaleshwar. Overnight in Ujjain.',
      },
      {
        day: 'Day 05',
        title: 'Ujjain Bhasma Aarti & Departure',
        detail:
          'Experience the auspicious 4 AM Bhasma Aarti at Mahakaleshwar temple. Visit Kal Bhairav Temple before departure.',
      },
    ],
    suitableFor: 'Shiva Bhaktas, Spiritual Seekers & Devout Families',
    image: '/images/destinations/mahakaleshwar.jpg',
    alt: 'Shri Mahakaleshwar Jyotirlinga in Ujjain',
  },

  // 6. Ayodhya Shri Ram Janmabhoomi Yatra
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
      'Experience the divine grandeur of the consecrated Shri Ram Janmabhoomi Mandir, historic Hanuman Garhi, and atmospheric sunset Sarayu Aarti.',
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

  // 7. Custom Spiritual Yatra
  {
    id: 'pkg-custom-spiritual',
    category: 'Custom Spiritual Tours',
    title: 'Bespoke Private Pilgrimage Across 20 Holy Shrines',
    destinationId: 'srisailam',
    destinationName: 'Custom Spiritual Route',
    duration: 'Custom Duration',
    routeSummary: 'Tailored pickup from Hyderabad to any of the 20 approved pilgrimage shrines',
    sampleEstimate: 'Custom Quotation on Request',
    summary:
      'Design your family’s unique pilgrimage route across Shrishailam, Yadadri, Vemulawada, Ramappa, Thousand Pillar, Bhadrachalam, Yaganti, Tirupati, Arunachalam, Ganagapur, Tuljapur, Akalkot, Pandharpur, Shirdi, Bhimashankar, Trimbakeshwar, Omkareshwar, Mahakaleshwar, Sabarimala, or Ayodhya.',
    highlights: [
      'Completely flexible dates, itinerary pacing, and temple order',
      'Dedicated AC fleet (Innova Crysta, Ertiga, Tempo Traveller, Swift Dzire)',
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
    image: '/images/srisailam-1day-package.jpg',
    alt: 'Custom Spiritual Tour with Bhargavi Tour and Travels',
  },
];

/* ========================================================================
   DEVOTIONAL EXPERIENCES & RITUALS
   ======================================================================== */
export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-sparsha-darshan',
    title: 'Sparsha Darshan & Sacred Abhishekam',
    subtitle: 'Mallikarjuna Srisailam & Bhimashankar',
    description:
      'Touch the sacred Jyotirlinga stones with your own hands during sanctioned Sparsha Darshan windows, chanting the eternal Om Namah Shivaya with deep inner tranquility.',
    pairedDestinations: 'Srisailam • Bhimashankar • Trimbakeshwar',
    image: '/images/srisailam-1day-package.jpg',
    alt: 'Sanctum and temple courtyard of Mallikarjuna Jyotirlinga at Srisailam',
  },
  {
    id: 'exp-giri-pradakshina',
    title: 'Barefoot Giri Pradakshina at Dawn',
    subtitle: 'Sacred Mount Arunachala',
    description:
      'Walk the 14-kilometer circumambulation around holy Mount Arunachala on full moon nights or silent early dawns, invoking inner liberation and supreme stillness.',
    pairedDestinations: 'Arunachalam (Tiruvannamalai)',
    image: '/images/destinations/arunachalam.jpg',
    alt: 'Mount Arunachala and holy path in Tiruvannamalai',
  },
  {
    id: 'exp-bhasma-aarti',
    title: 'Divine Bhasma Aarti of Lord Mahakal',
    subtitle: 'Shri Mahakaleshwar Jyotirlinga',
    description:
      'Witness the world-revered 4 AM Bhasma Aarti at Mahakaleshwar in Ujjain, where Lord Shiva is anointed with sacred ash amidst thunderous chants of Har Har Mahadev.',
    pairedDestinations: 'Mahakaleshwar (Ujjain) • Omkareshwar',
    image: '/images/destinations/mahakaleshwar.jpg',
    alt: 'Mahakaleshwar Jyotirlinga in Ujjain',
  },
  {
    id: 'exp-godavari-snanam',
    title: 'Sacred River Snanam & Rama Darshan',
    subtitle: 'Bhadrachalam on River Godavari',
    description:
      'Take a holy dip in the sacred flowing waters of the Godavari River before climbing to the sanctum of Sri Sita Ramachandra Swamy consecrated by Bhakta Ramadasu.',
    pairedDestinations: 'Bhadrachalam • Vemulawada',
    image: '/images/destinations/bhadrachalam.jpg',
    alt: 'Bhadrachalam Temple on the banks of Godavari',
  },
];

/* ========================================================================
   TEMPLE PHOTOGRAPHY JOURNAL
   ======================================================================== */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-srisailam',
    title: 'Mallikarjuna Swamy Golden Shikhara',
    location: 'Shrishailam, Andhra Pradesh',
    category: 'Jyotirlinga & Shakti Peeth',
    image: '/images/srisailam-1day-package.jpg',
    alt: 'Srisailam Temple Golden Gopuram',
    spanClass: 'md:col-span-8 md:row-span-2 min-h-[360px] md:min-h-[460px]',
  },
  {
    id: 'g-boating',
    title: 'Krishna River Boating to Akka Mahadevi Caves',
    location: 'Shrishailam Gorge, Andhra Pradesh',
    category: 'Scenic Pilgrimage',
    image: '/images/srisailam-2day-package.jpg',
    alt: 'Srisailam Krishna river boat cruise',
    spanClass: 'md:col-span-4 min-h-[220px]',
  },
  {
    id: 'g-yadadri',
    title: 'Krishna Shila Carved Rajagopuram',
    location: 'Yadadri, Telangana',
    category: 'Dravidian Stone Heritage',
    image: '/images/destinations/yadagirigutta.jpg',
    alt: 'Yadadri Temple stone gopuram',
    spanClass: 'md:col-span-4 min-h-[220px]',
  },
  {
    id: 'g-ramappa',
    title: '13th-Century Kakatiya Dancing Sculptures',
    location: 'Ramappa Temple, Palampet',
    category: 'UNESCO World Heritage',
    image: '/images/destinations/ramappa.jpg',
    alt: 'Ramappa UNESCO Heritage Temple',
    spanClass: 'md:col-span-6 min-h-[280px]',
  },
  {
    id: 'g-ayodhya',
    title: 'Shri Ram Janmabhoomi Mandir Grand Sanctum',
    location: 'Ayodhya Dham, Uttar Pradesh',
    category: 'Nagara Architecture',
    image: '/images/destinations/ayodhya.jpg',
    alt: 'Ayodhya Ram Mandir facade',
    spanClass: 'md:col-span-6 min-h-[280px]',
  },
];
