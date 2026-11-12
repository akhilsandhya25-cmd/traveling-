export type RegionFilter =
  | 'All'
  | 'Himalayas & North'
  | 'Royal & Spiritual'
  | 'Coast & South'
  | 'Northeast';

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: Exclude<RegionFilter, 'All'>;
  shortDescription: string;
  editorialStory: string;
  bestSeason: string;
  idealDuration: string;
  moodTags: string[];
  highlights: string[];
  image: string;
  alt: string;
  gridClass: string;
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

export interface JourneyDay {
  day: string;
  title: string;
  detail: string;
}

export interface FeaturedJourney {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  duration: string;
  sampleEstimate: string;
  summary: string;
  highlights: string[];
  itinerary: JourneyDay[];
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

export const DESTINATIONS: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    tagline: 'Paradise on Earth.',
    region: 'Himalayas & North',
    shortDescription:
      'Misty alpine valleys, cedar-framed rivers, and timeless shikara mornings drifting across mirror-still Dal Lake.',
    editorialStory:
      'Wake to saffron-scented kahwa on a carved cedar houseboat as the Pir Panjal range catches the first blush of dawn. Kashmir moves at the pace of poetry—through wildflower meadows in Pahalgam, snow-draped pines in Gulmarg, and quiet Mughal gardens.',
    bestSeason: 'April – October & Dec – Feb (Snow)',
    idealDuration: '5 to 7 Days',
    moodTags: ['Alpine Serenity', 'Heritage Houseboats', 'Slow Mornings'],
    highlights: [
      'Private sunrise shikara glide across Dal & Nigeen Lakes',
      'Alpine meadow walks and pine trails in Pahalgam & Aru Valley',
      'High-altitude gondola vistas over snowfields in Gulmarg',
      'Artisanal saffron & hand-woven pashmina studio visits',
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg/1920px-Dal_Lake_Hazratbal_Srinagar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Serene waters of Dal Lake in Srinagar with Himalayan mountains behind, Kashmir',
    gridClass: 'md:col-span-7 md:row-span-2 md:min-h-[560px]',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    tagline: 'Beyond the Ordinary.',
    region: 'Himalayas & North',
    shortDescription:
      'High-altitude desert plateaus, cobalt glacial lakes, and ancient cliffside monasteries beneath vast Himalayan skies.',
    editorialStory:
      'Where wind-carved valleys meet prayer flags fluttering against cobalt skies. Ladakh strips away the noise of modern life, inviting travellers across high mountain passes to Pangong Tso, Nubra’s silver dunes, and centuries-old monastic chant.',
    bestSeason: 'May – September',
    idealDuration: '6 to 8 Days',
    moodTags: ['High-Altitude Drama', 'Monastic Calm', 'Starlit Skies'],
    highlights: [
      'Dawn reflections along the shifting blues of Pangong Tso',
      'Crossing dramatic Himalayan passes like Khardung La & Chang La',
      'Morning prayers at Thiksey and Hemis cliffside monasteries',
      'Stargazing camps in the quiet expanse of Nubra Valley',
    ],
    image:
      'https://images.unsplash.com/photo-1739863077064-666dc0b131d5?auto=format&fit=crop&w=1600&q=85',
    alt: 'Turquoise Himalayan lake surrounded by dramatic Ladakh mountain peaks',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: "God's Own Country.",
    region: 'Coast & South',
    shortDescription:
      'Emerald backwaters, spice-scented misty hills, and unhurried afternoons drifting beneath swaying coconut palms.',
    editorialStory:
      'Kerala is an invitation to breathe deeper. From gliding past sleepy lagoon villages aboard a traditional wooden kettuvallam to waking amidst Munnar’s emerald tea terraces and Fort Kochi’s spice-laden lanes, warmth lingers in every detail.',
    bestSeason: 'September – March',
    idealDuration: '5 to 8 Days',
    moodTags: ['Backwater Calm', 'Ayurvedic Wellness', 'Tropical Lushness'],
    highlights: [
      'Overnight private houseboat voyage through Alleppey backwaters',
      'Mist-wrapped tea estate trails in Munnar & Western Ghats',
      'Heritage walks and sunset fishing nets in Fort Kochi',
      'Authentic coastal spice tastings and restorative wellness rituals',
    ],
    image:
      'https://images.unsplash.com/photo-1785932413547-cdd1159e1f1e?auto=format&fit=crop&w=1600&q=85',
    alt: 'Traditional Kerala houseboat gliding through palm-lined Alleppey backwaters',
    gridClass: 'md:col-span-5 md:min-h-[270px]',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Where Royalty Lives.',
    region: 'Royal & Spiritual',
    shortDescription:
      'Sandstone citadels, marble lake palaces, and candlelit desert courtyards steeped in centuries of regal lore.',
    editorialStory:
      'Rajasthan glows in hues of rose terracotta, burnished gold, and indigo dusk. Step inside Udaipur’s shimmering lake palaces, Jaipur’s latticed facades, and private desert havelis where hospitality has been elevated to an art form.',
    bestSeason: 'October – March',
    idealDuration: '6 to 9 Days',
    moodTags: ['Palace Heritage', 'Desert Twilight', 'Living Craft'],
    highlights: [
      'Sunset boat cruise on Lake Pichola overlooking Udaipur City Palace',
      'Architectural morning walks at Hawa Mahal & Amer Fort in Jaipur',
      'Private courtyard dining in restored royal havelis',
      'Golden Thar Desert dunes and folk music under open skies',
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/20191207_City_Palace%2C_Mohan_Temple_and_Lake_Pichola%2C_Udaipur%2C_1523_7262.jpg/1920px-20191207_City_Palace%2C_Mohan_Temple_and_Lake_Pichola%2C_Udaipur%2C_1523_7262.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'City Palace and Lake Pichola glowing at golden hour in Udaipur, Rajasthan',
    gridClass: 'md:col-span-5 md:min-h-[450px]',
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Find Your Rhythm.',
    region: 'Coast & South',
    shortDescription:
      'Sun-drenched coves, Portuguese-era heritage villas, and coastal evenings painted in amber and salt air.',
    editorialStory:
      'Beyond its lively shores lies an intimate, soulful Goa—quiet crescent beaches in the south, pastel Indo-Portuguese mansions tucked into tropical groves, and unhurried coastal suppers as the Arabian Sea turns copper at dusk.',
    bestSeason: 'November – March',
    idealDuration: '4 to 5 Days',
    moodTags: ['Coastal Ease', 'Heritage Villas', 'Golden Sunsets'],
    highlights: [
      'Secluded palm-fringed coves along Palolem & South Goa',
      'Curated architectural walks through Fontainhas’ Latin Quarter',
      'Slow coastal mornings in boutique heritage villas',
      'Private sunset sailing & Konkan culinary discoveries',
    ],
    image:
      'https://images.unsplash.com/photo-1695411560235-595738c0dbda?auto=format&fit=crop&w=1600&q=85',
    alt: 'Palm-lined golden beach and gentle Arabian Sea waves in Goa, India',
    gridClass: 'md:col-span-7 md:min-h-[450px]',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    tagline: 'Into the Mountains.',
    region: 'Himalayas & North',
    shortDescription:
      'Deodar pine sanctuaries, orchard-lined valleys, and dramatic trans-Himalayan trails rising into Spiti.',
    editorialStory:
      'From the cedar-scented stillness of Tirthan Valley and Old Manali to the austere sculptural beauty of Spiti, Himachal rewards those who follow winding mountain roads into timeless Himalayan hamlets.',
    bestSeason: 'March – June & Sept – Nov',
    idealDuration: '5 to 7 Days',
    moodTags: ['Cedar Forests', 'Mountain Roads', 'Boutique Cabins'],
    highlights: [
      'Riverside timber retreats in Tirthan & Parvati valleys',
      'Forest hikes to hidden mountain cascades and alpine ridges',
      'Scenic drives over high Himalayan passes toward Spiti',
      'Warm orchard hospitality and wood-fired mountain evenings',
    ],
    image:
      'https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1600&q=85',
    alt: 'Dramatic snow-dusted mountains and valley terrain in Himachal Pradesh, India',
    gridClass: 'md:col-span-4 md:min-h-[390px]',
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    tagline: 'The Abode of Clouds.',
    region: 'Northeast',
    shortDescription:
      'Plunging emerald canyons, living root bridges, and mist-veiled waterfalls suspended in monsoon-kissed hills.',
    editorialStory:
      'True to its Sanskrit name, Meghalaya is sculpted by cloud and water. Hike deep into Khasi forests to cross centuries-old living root bridges, gaze at Nohkalikai’s dizzying plunge, and paddle crystal rivers in Dawki.',
    bestSeason: 'October – April',
    idealDuration: '5 to 6 Days',
    moodTags: ['Emerald Canyons', 'Living Bridges', 'Untamed Nature'],
    highlights: [
      'Guided trek to the double-decker living root bridges of Nongriat',
      'Cliffside viewpoints over Nohkalikai & Seven Sisters Falls',
      'Crystal-clear boat glides across the Umngot River in Dawki',
      'Khasi highland culture and pine-ridge evenings near Shillong',
    ],
    image:
      'https://images.unsplash.com/photo-1685271567656-84a60da957d9?auto=format&fit=crop&w=1600&q=85',
    alt: 'Cascading waterfall plunging through lush emerald cliffs in Meghalaya, India',
    gridClass: 'md:col-span-4 md:min-h-[390px]',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'A Journey Within.',
    region: 'Royal & Spiritual',
    shortDescription:
      'Ancient stone ghats, dawn river hymns, and lantern-lit evenings along the timeless sacred Ganges.',
    editorialStory:
      'Older than memory, Varanasi awakens all senses in quiet reverence. Drift by wooden rowboat at first light as temple bells echo across the Ganga, and witness dusk dissolve into thousands of floating oil lamps.',
    bestSeason: 'October – March',
    idealDuration: '3 to 4 Days',
    moodTags: ['Sacred Dawn', 'Timeless Ritual', 'Living Heritage'],
    highlights: [
      'Private sunrise wooden boat journey along the historic ghats',
      'Intimate evening Ganga Aarti from a quiet river vantage',
      'Guided heritage walks through centuries-old weavers’ lanes',
      'Classical music recitals and tranquil riverside stays',
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Varanasi_2010_Ahilyabai_Ghat.jpg/1920px-Varanasi_2010_Ahilyabai_Ghat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Historic stone ghats and wooden boats along the Ganges River in Varanasi, India',
    gridClass: 'md:col-span-4 md:min-h-[390px]',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'mountain-adventures',
    title: 'Mountain Adventures',
    subtitle: 'High Passes & Alpine Ridges',
    description:
      'Traverse dramatic Himalayan corridors, glacial lakes, and pine-clad valleys crafted for wonder.',
    pairedDestinations: 'Ladakh • Himachal • Kashmir',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Deepak_Tal_Lake%2C_Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg/1920px-Deepak_Tal_Lake%2C_Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'High-altitude Himalayan lake along the Leh-Manali mountain corridor',
  },
  {
    id: 'royal-escapes',
    title: 'Royal Escapes',
    subtitle: 'Palaces, Forts & Courtyard Lore',
    description:
      'Step inside historic maharaja residences, private heritage havelis, and candlelit sandstone terraces.',
    pairedDestinations: 'Udaipur • Jaipur • Jodhpur',
    image:
      'https://images.unsplash.com/photo-1767158597961-bd58dccc16bd?auto=format&fit=crop&w=1600&q=85',
    alt: 'Intricate pink sandstone facade of Hawa Mahal palace in Jaipur, Rajasthan',
  },
  {
    id: 'coastal-retreats',
    title: 'Coastal Retreats',
    subtitle: 'Lagoons, Palms & Ocean Breeze',
    description:
      'Unwind where emerald waterways meet golden shores, boutique beach villas, and slow island sunsets.',
    pairedDestinations: 'Goa • Kerala Coast',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Palolem_Beach_sunset_-_Goa_%2846052828755%29.jpg/1920px-Palolem_Beach_sunset_-_Goa_%2846052828755%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Golden sunset over tranquil palm-fringed Palolem Beach in Goa',
  },
  {
    id: 'romantic-getaways',
    title: 'Romantic Getaways',
    subtitle: 'Intimate Stays & Golden Hours',
    description:
      'Private lakeside boat rides, cedar mountain cabins, and starlit dinners designed for two.',
    pairedDestinations: 'Udaipur • Kashmir • Alleppey',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Taj_Lake_Palace_Udaipur_from_City_Palace.jpg/1920px-Taj_Lake_Palace_Udaipur_from_City_Palace.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Marble lake palace shimmering on Lake Pichola in Udaipur',
  },
  {
    id: 'cultural-journeys',
    title: 'Cultural Journeys',
    subtitle: 'Living Crafts & Culinary Trails',
    description:
      'Meet master weavers, explore spice routes, and dine inside centuries-old regional homes.',
    pairedDestinations: 'Rajasthan • Meghalaya • Kochi',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/A_bird_eye_view_of_Amer_Fort_Jaipur%2C_India.jpg/1920px-A_bird_eye_view_of_Amer_Fort_Jaipur%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Sweeping heritage ramparts of Amer Fort overlooking hills in Jaipur',
  },
  {
    id: 'spiritual-discoveries',
    title: 'Spiritual Discoveries',
    subtitle: 'Sacred Rivers & Quiet Monasteries',
    description:
      'Dawn chants along the Ganges, Himalayan gompas in mist, and moments of profound stillness.',
    pairedDestinations: 'Varanasi • Ladakh • Rishikesh',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Boatman_Ganga_Varanasi_UP_India_Mar14_DSC_4635.jpg/1920px-Boatman_Ganga_Varanasi_UP_India_Mar14_DSC_4635.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Lone boatman gliding on the serene Ganges River at dawn in Varanasi',
  },
];

export const FEATURED_JOURNEYS: FeaturedJourney[] = [
  {
    id: 'kashmir-escape',
    title: 'Kashmir Escape',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    duration: '5 Days / 4 Nights',
    sampleEstimate: 'Sample Demo Estimate: From ₹48,000 / guest',
    summary:
      'A poetic Himalayan circuit uniting cedar houseboats on Dal Lake, Gulmarg’s snow ridges, and Pahalgam’s riverside meadows.',
    highlights: [
      'Private Heritage Houseboat Stay',
      'Sunrise Shikara & Mughal Gardens',
      'Gulmarg Alpine Gondola Ridge',
      'Pahalgam & Aru Valley Excursion',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Srinagar & Dal Lake Dusk',
        detail:
          'Warm saffron kahwa welcome aboard a handcrafted cedar houseboat followed by a tranquil sunset shikara glide.',
      },
      {
        day: 'Day 02',
        title: 'Mughal Gardens & Old City Craft',
        detail:
          'Morning strolls through Nishat & Shalimar terraced gardens and an intimate afternoon with local shawl artisans.',
      },
      {
        day: 'Day 03',
        title: 'Gulmarg — Meadow of Flowers',
        detail:
          'Ascend above pine forests on the Gulmarg Gondola for panoramic views of snow-draped Himalayan peaks.',
      },
      {
        day: 'Day 04',
        title: 'Pahalgam & Aru Valley Silence',
        detail:
          'Follow the Lidder River into evergreen valleys, pausing for a riverside picnic in Aru.',
      },
      {
        day: 'Day 05',
        title: 'Morning Mist & Departure',
        detail:
          'Final lakefront breakfast before private airport transfer.',
      },
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Houseboats_on_Dal_Lake%2C_Srinagar_%2CKashmir_India.jpg/1920px-Houseboats_on_Dal_Lake%2C_Srinagar_%2CKashmir_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Traditional carved wooden houseboats anchored on Dal Lake, Srinagar',
  },
  {
    id: 'kerala-backwater',
    title: 'Kerala Backwater Experience',
    destinationId: 'kerala',
    destinationName: 'Kerala',
    duration: '6 Days / 5 Nights',
    sampleEstimate: 'Sample Demo Estimate: From ₹54,000 / guest',
    summary:
      'From misty Western Ghats tea slopes and spice estates to an unhurried private kettuvallam voyage across emerald lagoons.',
    highlights: [
      'Fort Kochi Heritage Walk',
      'Munnar Mist & Tea Plantations',
      'Private Overnight Houseboat',
      'Coastal Ayurvedic Calm',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Fort Kochi & Spice-Laden Lanes',
        detail:
          'Check into a colonial courtyard residence and watch the Chinese fishing nets silhouetted at sunset.',
      },
      {
        day: 'Day 02',
        title: 'Ascent to Munnar Tea Hills',
        detail:
          'Wind past cascading waterfalls into emerald tea plantations wrapped in cool mountain mist.',
      },
      {
        day: 'Day 03',
        title: 'Tea Tasting & Highland Ridges',
        detail:
          'Private plantation walk at sunrise with curated single-origin tea tasting.',
      },
      {
        day: 'Day 04',
        title: 'Boarding Your Alleppey Kettuvallam',
        detail:
          'Drift through narrow palm-fringed canals with freshly prepared Malabar coastal cuisine onboard.',
      },
      {
        day: 'Day 05',
        title: 'Kumarakom Lagoon Retreat',
        detail:
          'Restorative Ayurvedic therapy and quiet lakeside dining beneath tropical palms.',
      },
      {
        day: 'Day 06',
        title: 'Departure from Kochi',
        detail:
          'Unhurried morning by the water before your onward journey.',
      },
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852703799562%29.jpg/1920px-Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852703799562%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Wooden houseboat cruising the tranquil backwaters of Alleppey, Kerala',
  },
  {
    id: 'royal-rajasthan',
    title: 'Royal Rajasthan Discovery',
    destinationId: 'rajasthan',
    destinationName: 'Rajasthan',
    duration: '7 Days / 6 Nights',
    sampleEstimate: 'Sample Demo Estimate: From ₹68,000 / guest',
    summary:
      'A regal tapestry spanning Jaipur’s pink palaces, Jodhpur’s blue-washed lanes, and Udaipur’s shimmering marble lakes.',
    highlights: [
      'Amer Fort & Hawa Mahal Mornings',
      'Heritage Haveli Stays',
      'Jodhpur Blue City & Mehrangarh',
      'Lake Pichola Sunset Cruise',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Welcome to the Pink City, Jaipur',
        detail:
          'Arrive at a restored heritage haveli and enjoy an evening courtyard supper.',
      },
      {
        day: 'Day 02',
        title: 'Amer Fort & Hawa Mahal Dawn',
        detail:
          'Explore honey-gold fort ramparts before the crowds arrive and wander historic bazaar lanes.',
      },
      {
        day: 'Day 03',
        title: 'Jaipur Craft & Stepwell Architecture',
        detail:
          'Private studio visit showcasing block-printing, gemstone artistry, and ancient stepwells.',
      },
      {
        day: 'Day 04',
        title: 'Onward to Jodhpur, the Blue City',
        detail:
          'Ascend dramatic Mehrangarh Fort overlooking a sea of indigo-painted rooftops.',
      },
      {
        day: 'Day 05',
        title: 'Aravalli Drive to Udaipur',
        detail:
          'Scenic countryside route pausing at intricate marble temples en route to the City of Lakes.',
      },
      {
        day: 'Day 06',
        title: 'Udaipur Palaces & Lake Pichola',
        detail:
          'Explore City Palace courtyards and glide across Lake Pichola as palace lanterns flicker alive.',
      },
      {
        day: 'Day 07',
        title: 'Farewell by the Water',
        detail:
          'Leisurely lakeside breakfast and departure transfer.',
      },
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Amer_Fort-Jaipur.jpg/1920px-Amer_Fort-Jaipur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Grand sandstone ramparts of Amer Fort reflected in Maota Lake, Jaipur',
  },
  {
    id: 'ladakh-adventure',
    title: 'Ladakh Adventure',
    destinationId: 'ladakh',
    destinationName: 'Ladakh',
    duration: '7 Days / 6 Nights',
    sampleEstimate: 'Sample Demo Estimate: From ₹62,000 / guest',
    summary:
      'An awe-inspiring expedition through Leh’s ancient gompas, Nubra Valley dunes, and the surreal turquoise shores of Pangong Tso.',
    highlights: [
      'Acclimatised Leh Heritage Stays',
      'Khardung La High Pass',
      'Nubra Valley Luxury Camp',
      'Pangong Tso Lakeside Sunrise',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Leh & Gentle Rest',
        detail:
          'Soft acclimatisation day in a boutique Ladakhi mud-brick retreat overlooking the Stok range.',
      },
      {
        day: 'Day 02',
        title: 'Indus Valley Monasteries',
        detail:
          'Witness morning chants at Thiksey Monastery and explore the timeless halls of Hemis.',
      },
      {
        day: 'Day 03',
        title: 'Over Khardung La to Nubra',
        detail:
          'Cross dramatic snow-dusted passes into the sweeping sand dunes and apricot orchards of Nubra Valley.',
      },
      {
        day: 'Day 04',
        title: 'Diskit & Turtuk Border Villages',
        detail:
          'Discover apricot-shaded stone villages along the Shyok River.',
      },
      {
        day: 'Day 05',
        title: 'Journey to Pangong Tso',
        detail:
          'Arrive at the shifting sapphire waters of Pangong Lake framed by barren Himalayan peaks.',
      },
      {
        day: 'Day 06',
        title: 'Return Across Chang La to Leh',
        detail:
          'Final high-pass vistas followed by a celebratory Ladakhi dinner in Leh.',
      },
      {
        day: 'Day 07',
        title: 'Himalayan Sunrise Departure',
        detail:
          'Early morning flight over snow-capped peaks.',
      },
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Reflection_at_Pangong_Tso%2C_Ladakh%2C_India.jpg/1920px-Reflection_at_Pangong_Tso%2C_Ladakh%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Mirror reflections of Ladakh mountains on the cobalt water of Pangong Tso',
  },
  {
    id: 'goa-coastal',
    title: 'Goa Coastal Escape',
    destinationId: 'goa',
    destinationName: 'Goa',
    duration: '4 Days / 3 Nights',
    sampleEstimate: 'Sample Demo Estimate: From ₹36,000 / guest',
    summary:
      'A restorative coastal interlude pairing quiet South Goa bays, heritage Latin Quarter walks, and candlelit seaside evenings.',
    highlights: [
      'Boutique Heritage Villa Stay',
      'Fontainhas Architectural Walk',
      'Secluded South Goa Coves',
      'Sunset Coastal Dining',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival & Palm-Shaded Villa',
        detail:
          'Settle into a serene coastal sanctuary and welcome dusk with sea breezes and Konkan flavours.',
      },
      {
        day: 'Day 02',
        title: 'Fontainhas & Old Goa Heritage',
        detail:
          'Stroll past pastel Portuguese facades, quiet bakeries, and historic riverside chapels.',
      },
      {
        day: 'Day 03',
        title: 'Palolem & Hidden Coastal Coves',
        detail:
          'Unhurried beach hours, kayak rides at sunrise, and an intimate sunset supper by the shore.',
      },
      {
        day: 'Day 04',
        title: 'Slow Morning & Departure',
        detail:
          'Tropical garden breakfast before your airport transfer.',
      },
    ],
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Beach_shack_at_sunset%2C_Palolem%2C_Goa.jpg/1920px-Beach_shack_at_sunset%2C_Palolem%2C_Goa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Golden twilight along palm-lined Palolem Beach in South Goa',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-kashmir',
    title: 'Winter Silence in Aru Valley',
    location: 'Kashmir Landscapes',
    category: 'Kashmir',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Aru_Valley_Kashmir_in_winter_view.jpg/1920px-Aru_Valley_Kashmir_in_winter_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Snow-dusted pine valley and mountain peaks in Aru, Kashmir',
    spanClass: 'xs:col-span-2 aspect-[16/10] md:aspect-auto md:col-span-2 md:row-span-2 md:min-h-[500px]',
  },
  {
    id: 'g-kerala',
    title: 'Drifting Through Emerald Palms',
    location: 'Kerala Houseboats',
    category: 'Kerala',
    image:
      'https://images.unsplash.com/photo-1769160944228-d837cc35f849?auto=format&fit=crop&w=1600&q=85',
    alt: 'Traditional houseboat gliding across serene Kerala backwaters',
    spanClass: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:min-h-[240px]',
  },
  {
    id: 'g-rajasthan',
    title: 'Marble Mirrors of Lake Pichola',
    location: 'Rajasthan Palaces',
    category: 'Rajasthan',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/20191207_Lake_Pichola%2C_City_Palace%2C_Udaipur%2C_1516_7254.jpg/1920px-20191207_Lake_Pichola%2C_City_Palace%2C_Udaipur%2C_1516_7254.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Udaipur City Palace rising above Lake Pichola, Rajasthan',
    spanClass: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:min-h-[240px]',
  },
  {
    id: 'g-himalaya-road',
    title: 'Ribbon Roads Through the Clouds',
    location: 'Himalayan Roads',
    category: 'Himalayas',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg/1920px-Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Winding Leh-Manali Himalayan mountain highway cutting across peaks',
    spanClass: 'xs:col-span-2 aspect-[16/10] md:aspect-auto md:col-span-2 md:min-h-[260px]',
  },
  {
    id: 'g-meghalaya',
    title: 'Cascades of the Khasi Cliffs',
    location: 'Meghalaya Waterfalls',
    category: 'Meghalaya',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/NohKaLikai_Falls_V2_Wiki.jpg/1920px-NohKaLikai_Falls_V2_Wiki.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Nohkalikai Falls plunging into a misty green gorge in Meghalaya',
    spanClass: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:min-h-[280px]',
  },
  {
    id: 'g-goa',
    title: 'Amber Tides at Dusk',
    location: 'Goa Beaches',
    category: 'Goa',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Palolem_Beach_sunset_-_Goa_%2846052828755%29.jpg/1920px-Palolem_Beach_sunset_-_Goa_%2846052828755%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Golden sunset reflection over Palolem Beach in Goa',
    spanClass: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:min-h-[280px]',
  },
  {
    id: 'g-varanasi',
    title: 'Morning Prayers on the Ganga',
    location: 'Varanasi Ghats',
    category: 'Varanasi',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Varanasi_2010_ghats3.jpg/1920px-Varanasi_2010_ghats3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    alt: 'Stone ghats and boats bathed in warm morning light in Varanasi',
    spanClass: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:min-h-[280px]',
  },
];
