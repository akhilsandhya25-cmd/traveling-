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
    id: 'scene-ayodhya',
    stageNumber: '01',
    destinationId: 'ayodhya',
    name: 'Ayodhya Dham',
    headline: 'Into Shri Ram Janmabhoomi',
    stops: ['Ayodhya', 'Sarayu River Ghats'],
    highwayCode: 'NH-27 • Sacred Ram Path',
    elevation: '102 m',
    kmMarker: 'KM 000',
    intro:
      'Enter the sacred Moksha Dham of Ayodhya where the grand stone spires of Shri Ram Janmabhoomi Mandir rise above the peaceful banks of the holy Sarayu.',
    attractions: [
      'Shri Ram Lalla Sanctum Darshan',
      'Historic Hanuman Garhi Fort Temple',
      'Sunset Maha Aarti at Ram Ki Paidi',
    ],
    packageHighlights: [
      'Comfortable AC cab transfers from Lucknow/Ayodhya',
      'Senior-citizen friendly e-rickshaw guidance',
      'Peaceful 3-day sacred Ayodhya Dham circuit',
    ],
    atmosphereGradient: 'from-[#171b29] via-[#1b2536] to-[#121c2b]',
    accentColor: '#DCC28E',
    backdropImage: '/images/destinations/ayodhya.jpg',
    cardImage: '/images/destinations/ayodhya.jpg',
    imageAlt: 'Grand Shri Ram Janmabhoomi Mandir at Ayodhya Dham',
  },
  {
    id: 'scene-yadagirigutta',
    stageNumber: '02',
    destinationId: 'yadagirigutta',
    name: 'Telangana Sacred Shrines',
    headline: 'Hillock of Sri Lakshmi Narasimha',
    stops: ['Yadagirigutta', 'Swarnagiri'],
    highwayCode: 'NH-163 • Deccan Temple Expressway',
    elevation: '512 m',
    kmMarker: 'KM 450',
    intro:
      'Travel the smooth 4-lane highway from Hyderabad to the Krishna Shila stone marvel of Yadagirigutta and the gleaming golden hilltop spires of Swarnagiri.',
    attractions: [
      'Yadagirigutta Natural Cave Garbhalaya Darshan',
      'Swarnagiri Sri Venkateswara Golden Vimana',
      'Auspicious Suvarna Pushparchana & Narasimha Homam',
    ],
    packageHighlights: [
      'Doorstep pickup and return across Hyderabad & Uppal',
      'Same-day express darshan with zero delays',
      'Comfortable sanitized AC family transport',
    ],
    atmosphereGradient: 'from-[#1a1c14] via-[#242b1b] to-[#161c14]',
    accentColor: '#E2C275',
    backdropImage: '/images/destinations/yadagirigutta.jpg',
    cardImage: '/images/destinations/yadagirigutta.jpg',
    imageAlt: 'Sri Lakshmi Narasimha Swamy Temple main Gopuram at Yadagirigutta',
  },
  {
    id: 'scene-srisailam',
    stageNumber: '03',
    destinationId: 'srisailam',
    name: 'Srisailam & Yaganti',
    headline: 'Sacred Jyotirlinga & Cave Shrines',
    stops: ['Srisailam', 'Yaganti'],
    highwayCode: 'NH-765 • Nallamala Ghat Road',
    elevation: '476 m',
    kmMarker: 'KM 920',
    intro:
      'Ascend through the scenic forested ghats of Nallamala to the holy 2nd Jyotirlinga at Srisailam, continuing to the ancient cave shrine and growing Nandi of Yaganti.',
    attractions: [
      'Sparsha Darshan of Mallikarjuna Swamy Jyotirlinga',
      'Bhramaramba Devi Maha Shakti Peeth blessings',
      'Yaganti Uma Maheswara Temple & Growing Nandi',
    ],
    packageHighlights: [
      'Pathalaganga ropeway & Krishna river boat cruise',
      'Dedicated AC chauffeur with ghat driving expertise',
      'Unhurried 3-day family pilgrimage circuit',
    ],
    atmosphereGradient: 'from-[#0d221b] via-[#122e24] to-[#10251e]',
    accentColor: '#C6A66B',
    backdropImage: '/images/destinations/srisailam.jpg',
    cardImage: '/images/destinations/srisailam.jpg',
    imageAlt: 'Mallikarjuna Jyotirlinga Temple Entrance at Srisailam',
  },
  {
    id: 'scene-tirupati',
    stageNumber: '04',
    destinationId: 'tirupati',
    name: 'Tirumala Balaji & Arunachalam',
    headline: 'The Seven Sacred Hills & Agni Lingam',
    stops: ['Tirupati (Tirumala)', 'Arunachalam'],
    highwayCode: 'NH-71 • Seshachalam Foothills Highway',
    elevation: '980 m',
    kmMarker: 'KM 1,480',
    intro:
      'Ascend through misty forested ghats to Kaliyuga Vaikuntham at Tirumala Balaji, and continue south to the infinite cosmic fire mountain of Sri Arunachaleswarar.',
    attractions: [
      'Sri Venkateswara Ananda Nilayam Golden Gopuram',
      'Sri Padmavathi Ammavari Temple at Tiruchanur',
      'Arunachaleswarar Temple & 14-km Holy Girivalam',
    ],
    packageHighlights: [
      'Special Entry Darshan coordination assistance',
      'Comfortable sanitized AC multi-axle / Innova vehicle',
      'Senior-citizen friendly pacing with clean boarding',
    ],
    atmosphereGradient: 'from-[#22160d] via-[#302113] to-[#20140c]',
    accentColor: '#C6A66B',
    backdropImage: '/images/destinations/tirupati.jpg',
    cardImage: '/images/destinations/tirupati.jpg',
    imageAlt: 'Tirumala Sri Venkateswara Swamy Temple Ananda Nilayam Gopuram',
  },
  {
    id: 'scene-shirdi',
    stageNumber: '05',
    destinationId: 'shirdi',
    name: 'Shirdi & Sahyadri Jyotirlingas',
    headline: 'Path of Faith, Saburi & Lord Shiva',
    stops: ['Shirdi', 'Trimbakeshwar', 'Bhimashankar'],
    highwayCode: 'NH-160 • Maharashtra Sacred Route',
    elevation: '504 m',
    kmMarker: 'KM 2,150',
    intro:
      'Journey through fertile plains to Shirdi’s tranquil Samadhi Mandir, winding into the Sahyadri ranges for Trimbakeshwar and Bhimashankar Jyotirlingas.',
    attractions: [
      'Shri Sai Baba Samadhi Mandir & Dwarkamai Dhuni',
      'Trimbakeshwar Three-Faced Jyotirlinga near Nashik',
      'Ancient stone Bhimashankar Jyotirlinga in Western Ghats',
    ],
    packageHighlights: [
      'Pre-booked clean hotel within walking distance of temple gates',
      'Kakad Aarti and Shej Aarti timing coordination',
      'Experienced Hindi & Telugu speaking chauffeur (4 Days)',
    ],
    atmosphereGradient: 'from-[#1c1824] via-[#262033] to-[#181421]',
    accentColor: '#DCC28E',
    backdropImage: '/images/destinations/shirdi.jpg',
    cardImage: '/images/destinations/shirdi.jpg',
    imageAlt: 'Sai Baba Samadhi Mandir in Shirdi',
  },
  {
    id: 'scene-akalkot',
    stageNumber: '06',
    destinationId: 'akalkot',
    name: 'Akalkot, Pandharpur & Dagadusheth',
    headline: 'Sant Bhoomi & Siddhi Vinayaka',
    stops: ['Akalkot', 'Pandharpur', 'Kolhapur', 'Dagadusheth Ganapati Mandir, Pune'],
    highwayCode: 'NH-65 • Maharashtra Devotion Corridor',
    elevation: '560 m',
    kmMarker: 'KM 2,780',
    intro:
      'Immerse in the devotional heart of Maharashtra from the Vatavruksha temple of Swami Samarth at Akalkot to Lord Vitthal at Pandharpur, Mahalakshmi at Kolhapur, and Dagadusheth Ganapati at Pune.',
    attractions: [
      'Akalkot Vatavruksha Swami Samarth Maharaj Mandir',
      'Pandharpur Lord Vitthal Charan Sparsh Darshan',
      'Kolhapur Shri Mahalakshmi Ambabai Temple',
      'Dagadusheth Halwai Ganapati Mandir in Pune',
    ],
    packageHighlights: [
      'Complete Maharashtra pilgrimage circuit from Hyderabad',
      'Assistance with Mahaprasad and special darshan lines',
      'Customized 4 to 5 day spiritual family package',
    ],
    atmosphereGradient: 'from-[#0b1b22] via-[#10242e] to-[#0c181f]',
    accentColor: '#E2C275',
    backdropImage: '/images/destinations/akalkot.jpg',
    cardImage: '/images/destinations/akalkot.jpg',
    imageAlt: 'Shri Swami Samarth Maharaj Temple at Akkalkot',
  },
];
