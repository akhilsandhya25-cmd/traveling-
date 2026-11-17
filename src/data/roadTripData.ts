export interface RoadTripScene {
  id: string;
  stageNumber: string;
  destinationId: string;
  name: string;
  headline: string;
  stops: string[];
  highwayCode: string;
  elevation: string;
  kmMarker: string;
  intro: string;
  attractions: string[];
  packageHighlights: string[];
  atmosphereGradient: string;
  accentColor: string;
  backdropImage: string;
  cardImage: string;
  imageAlt: string;
}

export const ROAD_TRIP_SCENES: RoadTripScene[] = [
  {
    id: 'scene-kedarnath',
    stageNumber: '01',
    destinationId: 'kedarnath',
    name: 'Devbhoomi Himalayas',
    headline: 'Into the Sacred Mountains',
    stops: ['Haridwar', 'Rishikesh', 'Kedarnath'],
    highwayCode: 'NH-7 • Sacred Mandakini Valley',
    elevation: '3,583 m',
    kmMarker: 'KM 000',
    intro:
      'Ascend through pine-scented Himalayan valleys following the roaring Mandakini toward the ancient stone sanctuary of Lord Kedarnath.',
    attractions: [
      'Har Ki Pauri Evening Ganga Aarti',
      'Rishikesh Parmarth Niketan Ghats',
      'Kedarnath Jyotirlinga Stone Sanctum',
    ],
    packageHighlights: [
      'Comfortable mountain AC coach / Innova transport',
      'Helicopter and pony coordination support',
      'Curated Devbhoomi pilgrimage pace (6–8 Days)',
    ],
    atmosphereGradient: 'from-[#0d221b] via-[#122e24] to-[#10251e]',
    accentColor: '#C6A66B',
    backdropImage:
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1600&q=85',
    cardImage:
      'https://images.unsplash.com/photo-1590483204928-1111663b6a93?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Ancient stone temple of Kedarnath with snow-capped Himalayan peaks rising directly behind',
  },
  {
    id: 'scene-varanasi',
    stageNumber: '02',
    destinationId: 'varanasi',
    name: 'Kashi & Ayodhya',
    headline: 'Sacred River of Light',
    stops: ['Varanasi', 'Ayodhya', 'Prayagraj'],
    highwayCode: 'NH-19 • Holy Ganga Highway',
    elevation: '80 m',
    kmMarker: 'KM 680',
    intro:
      'Travel the sacred heartland of India from the stone ghats and golden spires of Kashi Vishwanath to the grand new Shri Ram Janmabhoomi Mandir.',
    attractions: [
      'Kashi Vishwanath Jyotirlinga & Golden Corridor',
      'Shri Ram Janmabhoomi Mandir in Ayodhya',
      'Dashashwamedh Ghat Sunset Maha Aarti',
    ],
    packageHighlights: [
      'Private dawn wooden boat glide along 84 ghats',
      'Senior-friendly temple queue & e-rickshaw guidance',
      'Comfortable Kashi-Ayodhya family circuit (4–6 Days)',
    ],
    atmosphereGradient: 'from-[#171b29] via-[#1b2536] to-[#121c2b]',
    accentColor: '#DCC28E',
    backdropImage:
      'https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&w=1600&q=85',
    cardImage:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Historic stone ghats and wooden boats along the Ganges River in Varanasi',
  },
  {
    id: 'scene-yadagirigutta',
    stageNumber: '03',
    destinationId: 'yadagirigutta',
    name: 'Telangana & Andhra Shrines',
    headline: 'Divine Hill Sanctuaries',
    stops: ['Yadagirigutta', 'Swarnagiri', 'Srisailam'],
    highwayCode: 'NH-163 • Deccan Temple Corridor',
    elevation: '512 m',
    kmMarker: 'KM 1,420',
    intro:
      'Begin from Hyderabad to visit the Krishna Shila stone marvel of Yadagirigutta, the gleaming Swarnagiri golden temple, and Srisailam’s forested Jyotirlinga.',
    attractions: [
      'Yadagirigutta Sri Lakshmi Narasimha Cave Sanctum',
      'Swarnagiri Sri Venkateswara Golden Spires',
      'Srisailam Mallikarjuna Swamy & Krishna River',
    ],
    packageHighlights: [
      'Doorstep pickup and return across Hyderabad & Uppal',
      'Sparsha Darshan and Special Seva planning assistance',
      'Comfortable weekend or extended circuit (2–4 Days)',
    ],
    atmosphereGradient: 'from-[#1a1c14] via-[#242b1b] to-[#161c14]',
    accentColor: '#E2C275',
    backdropImage:
      'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=1600&q=85',
    cardImage:
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Dravidian stone architecture of Yadagirigutta Lakshmi Narasimha Swamy Temple in Telangana',
  },
  {
    id: 'scene-tirupati',
    stageNumber: '04',
    destinationId: 'tirupati',
    name: 'Tirumala Balaji',
    headline: 'The Seven Sacred Hills',
    stops: ['Tirumala', 'Tiruchanur', 'Arunachalam'],
    highwayCode: 'NH-71 • Seshachalam Ghats',
    elevation: '980 m',
    kmMarker: 'KM 2,050',
    intro:
      'Wind upward through the misty red-sanders forested ghats of Seshachalam to Kaliyuga Vaikuntham and the peaceful sanctum of Lord Venkateswara.',
    attractions: [
      'Sri Venkateswara Ananda Nilayam Golden Gopuram',
      'Sri Padmavathi Ammavari Temple, Tiruchanur',
      'Holy Swami Pushkarini sacred teertham',
    ],
    packageHighlights: [
      'Special Entry / VIP Darshan ticket assistance',
      'Comfortable AC multi-axle or private Innova vehicle',
      'Senior-citizen friendly pacing with clean boarding (2–3 Days)',
    ],
    atmosphereGradient: 'from-[#22160d] via-[#302113] to-[#20140c]',
    accentColor: '#C6A66B',
    backdropImage:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
    cardImage:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Golden Gopuram and temple complex of Sri Venkateswara Swamy in Tirumala Tirupati',
  },
  {
    id: 'scene-shirdi',
    stageNumber: '05',
    destinationId: 'shirdi',
    name: 'Shirdi & Jyotirlingas',
    headline: 'Path of Faith & Surrender',
    stops: ['Shirdi', 'Trimbakeshwar', 'Bhimashankar'],
    highwayCode: 'NH-160 • Maharashtra Sacred Route',
    elevation: '504 m',
    kmMarker: 'KM 2,780',
    intro:
      'Journey through the fertile Godavari plains to Shirdi’s tranquil Samadhi Mandir, continuing through the Sahyadris to Trimbakeshwar and Bhimashankar.',
    attractions: [
      'Shri Sai Baba Samadhi Mandir & Dwarkamai Dhuni',
      'Trimbakeshwar Three-Faced Jyotirlinga near Nashik',
      'Shani Shingnapur Swayambhu open-air temple',
    ],
    packageHighlights: [
      'Pre-booked hotel within walking distance of temple gates',
      'Kakad Aarti and Shej Aarti timing coordination',
      'Experienced Hindi & Telugu speaking chauffeur (3–5 Days)',
    ],
    atmosphereGradient: 'from-[#1c1824] via-[#262033] to-[#181421]',
    accentColor: '#DCC28E',
    backdropImage:
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1600&q=85',
    cardImage:
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Golden spire and peaceful courtyard of Shri Sai Baba Samadhi Mandir in Shirdi',
  },
  {
    id: 'scene-somnath',
    stageNumber: '06',
    destinationId: 'somnath',
    name: 'Somnath & Dwarka',
    headline: 'Oceanfront Holy Dhams',
    stops: ['Somnath', 'Dwarka', 'Nageshwar'],
    highwayCode: 'NH-51 • Saurashtra Coastal Highway',
    elevation: '10 m',
    kmMarker: 'KM 3,420',
    intro:
      'Follow the Arabian Sea coastal highway to Somnath, the first of the twelve Jyotirlingas, and onward to the golden kingdom of Lord Dwarkadhish.',
    attractions: [
      'Somnath Mahadev Sea-facing Golden Shikhara',
      'Dwarkadhish 5-Storey Jagat Mandir on the Gomti',
      'Nageshwar Jyotirlinga & Bet Dwarka Island',
    ],
    packageHighlights: [
      'Evening Somnath Light & Sound laser experience',
      'Gomti River boat crossing to holy Panch Kuan',
      'Complete Saurashtra temple circuit (5–7 Days)',
    ],
    atmosphereGradient: 'from-[#0b1b22] via-[#10242e] to-[#0c181f]',
    accentColor: '#E2C275',
    backdropImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    cardImage:
      'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Majestic carved sandstone spire of Somnath Jyotirlinga standing proudly beside the Arabian Sea',
  },
];
