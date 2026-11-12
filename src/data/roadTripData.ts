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
    id: 'scene-himachal',
    stageNumber: '01',
    destinationId: 'himachal',
    name: 'Himachal Pradesh',
    headline: 'Into the Mountains',
    stops: ['Manali', 'Shimla', 'Dharamshala'],
    highwayCode: 'NH-3 • Himalayan Cedar Pass',
    elevation: '2,050 m',
    kmMarker: 'KM 000',
    intro:
      'Twist upward through fragrant deodar forests and orchard-lined ridges as the morning mist lifts off snow-dusted Himalayan peaks.',
    attractions: [
      'Old Manali & Solang Alpine Ridge',
      'Shimla Viceregal Ridge Trails',
      'Dharamshala Tea Gardens & Monasteries',
    ],
    packageHighlights: [
      'Boutique cedar timber cabins along the Beas',
      'Guided sunrise forest ridge hikes',
      'Curated Himalayan road-trip pace (5–7 Days)',
    ],
    atmosphereGradient: 'from-[#0d221b] via-[#122e24] to-[#10251e]',
    accentColor: '#C6A66B',
    backdropImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Deepak_Tal_Lake%2C_Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg/1920px-Deepak_Tal_Lake%2C_Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    cardImage:
      'https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Winding mountain terrain surrounded by pine valleys and snow-dusted peaks in Himachal Pradesh',
  },
  {
    id: 'scene-kashmir',
    stageNumber: '02',
    destinationId: 'kashmir',
    name: 'Kashmir',
    headline: 'Discover Paradise',
    stops: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    highwayCode: 'NH-44 • Pir Panjal Valley',
    elevation: '1,585 m',
    kmMarker: 'KM 540',
    intro:
      'Follow silver glacial rivers past terraced Mughal gardens and emerald meadows framed by towering snow-crowned amphitheatres.',
    attractions: [
      'Dal Lake Sunrise Shikara & Houseboats',
      'Gulmarg Snowfield Gondola Crest',
      'Aru Valley & Lidder River Pine Trails',
    ],
    packageHighlights: [
      'Hand-carved cedar houseboat stays in Srinagar',
      'Pampore saffron & pashmina studio visits',
      'Slow-paced alpine valley touring (5–7 Days)',
    ],
    atmosphereGradient: 'from-[#0f2429] via-[#133036] to-[#10262b]',
    accentColor: '#DCC28E',
    backdropImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Krishansar_Lake%2C_Sonmarg%2C_Kashmir_valley%2C_India_01.jpg/1920px-Krishansar_Lake%2C_Sonmarg%2C_Kashmir_valley%2C_India_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    cardImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg/1920px-Dal_Lake_Hazratbal_Srinagar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    imageAlt:
      'Mirror-still Dal Lake framed by misty Himalayan mountains in Kashmir',
  },
  {
    id: 'scene-kerala',
    stageNumber: '03',
    destinationId: 'kerala',
    name: 'Kerala',
    headline: 'Where Nature Welcomes You',
    stops: ['Munnar', 'Alleppey', 'Wayanad'],
    highwayCode: 'NH-85 • Western Ghats Spice Route',
    elevation: '1,532 m → Sea Level',
    kmMarker: 'KM 2,180',
    intro:
      'Descend from velvet-green Munnar tea plantations into coconut-fringed backwaters humming with quiet tropical rhythm.',
    attractions: [
      'Munnar Rolling Tea Estate Overlooks',
      'Alleppey Private Kettuvallam Lagoons',
      'Wayanad Cloud-Forest Waterfalls',
    ],
    packageHighlights: [
      'Private overnight backwater houseboat cruise',
      'Sunrise plantation walks & spice tastings',
      'Restorative Ayurvedic sanctuary stays (5–8 Days)',
    ],
    atmosphereGradient: 'from-[#0e261a] via-[#133524] to-[#0f281c]',
    accentColor: '#C6A66B',
    backdropImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852703799667%29.jpg/1920px-Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852703799667%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    cardImage:
      'https://images.unsplash.com/photo-1785932413547-cdd1159e1f1e?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Wooden houseboat drifting across emerald palm-lined backwaters in Kerala',
  },
  {
    id: 'scene-rajasthan',
    stageNumber: '04',
    destinationId: 'rajasthan',
    name: 'Rajasthan',
    headline: 'Travel Through Royalty',
    stops: ['Jaipur', 'Jaisalmer', 'Udaipur'],
    highwayCode: 'NH-48 • Imperial Desert Corridor',
    elevation: '430 m',
    kmMarker: 'KM 2,940',
    intro:
      'Cruise sun-warmed desert highways into sandstone citadels, marble lake palaces, and lantern-lit courtyard havelis.',
    attractions: [
      'Jaipur Amer Fort & Hawa Mahal Dawn',
      'Jaisalmer Golden Thar Dune Camps',
      'Udaipur City Palace & Lake Pichola',
    ],
    packageHighlights: [
      'Restored royal heritage palace & haveli stays',
      'Private sunset lake boat charters in Udaipur',
      'Curated regal craft & desert trails (6–9 Days)',
    ],
    atmosphereGradient: 'from-[#281b12] via-[#362316] to-[#1f1610]',
    accentColor: '#DCC28E',
    backdropImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Amer_Fort-Jaipur.jpg/1920px-Amer_Fort-Jaipur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    cardImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/20191207_City_Palace%2C_Mohan_Temple_and_Lake_Pichola%2C_Udaipur%2C_1523_7262.jpg/1920px-20191207_City_Palace%2C_Mohan_Temple_and_Lake_Pichola%2C_Udaipur%2C_1523_7262.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    imageAlt:
      'Sandstone City Palace and Lake Pichola glowing at golden hour in Rajasthan',
  },
  {
    id: 'scene-goa',
    stageNumber: '05',
    destinationId: 'goa',
    name: 'Goa',
    headline: 'Follow the Coast',
    stops: ['North Goa', 'South Goa', 'Palolem'],
    highwayCode: 'NH-66 • Konkan Coastal Drive',
    elevation: 'Sea Level',
    kmMarker: 'KM 3,420',
    intro:
      'Open the sunroof to warm Arabian Sea breezes along palm-arched coastal lanes, pastel villas, and amber sunset bays.',
    attractions: [
      'Palolem & Agonda Crescent Beaches',
      'Fontainhas Pastel Latin Quarter',
      'Chapora Cliffside & Mandovi Dusk',
    ],
    packageHighlights: [
      'Secluded Indo-Portuguese heritage villas',
      'Private coastal catamaran twilight sails',
      'Unhurried coastal culinary escapes (4–5 Days)',
    ],
    atmosphereGradient: 'from-[#14202b] via-[#1c2b38] to-[#121d26]',
    accentColor: '#C6A66B',
    backdropImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Palolem_Beach_sunset_-_Goa_%2846052828755%29.jpg/1920px-Palolem_Beach_sunset_-_Goa_%2846052828755%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    cardImage:
      'https://images.unsplash.com/photo-1695411560235-595738c0dbda?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Palm-lined golden beach and gentle Arabian Sea surf along the Goa coastline',
  },
  {
    id: 'scene-ladakh',
    stageNumber: '06',
    destinationId: 'ladakh',
    name: 'Ladakh',
    headline: 'Beyond the Ordinary',
    stops: ['Leh', 'Nubra Valley', 'Pangong Lake'],
    highwayCode: 'NH-1D • Khardung La Skyway',
    elevation: '5,359 m',
    kmMarker: 'KM 4,200',
    intro:
      'Ascend dramatic sculpted stone passes brushed with fluttering prayer flags to reach the sapphire stillness of Pangong Tso.',
    attractions: [
      'Pangong Tso Cobalt Glacial Shores',
      'Nubra Valley Silver Dunes & Diskit',
      'Thiksey & Hemis Cliffside Gompas',
    ],
    packageHighlights: [
      'Acclimatised luxury Ladakhi boutique lodges',
      'Guided crossings over Khardung La & Chang La',
      'Starlit Himalayan expedition circuits (6–8 Days)',
    ],
    atmosphereGradient: 'from-[#0d1926] via-[#13263a] to-[#0b1520]',
    accentColor: '#DCC28E',
    backdropImage:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Reflection_at_Pangong_Tso%2C_Ladakh%2C_India.jpg/1920px-Reflection_at_Pangong_Tso%2C_Ladakh%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    cardImage:
      'https://images.unsplash.com/photo-1739863077064-666dc0b131d5?auto=format&fit=crop&w=1600&q=85',
    imageAlt:
      'Dramatic cobalt glacial lake surrounded by rugged high-altitude Ladakh peaks',
  },
];
