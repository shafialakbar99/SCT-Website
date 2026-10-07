import { Campaign } from '../types';

export const initialCampaigns: Campaign[] = [
  {
    id: 'camp-1',
    slug: 'sylhet-feni-flood-relief',
    title: {
      en: 'Emergency Sylhet & Feni Flood Relief Drive 2026',
      bn: 'জরুরি সিলেট ও ফেনী বন্যা ত্রাণ কার্যক্রম ২০২৬'
    },
    summary: {
      en: 'Providing urgent dry food packs, clean drinking water, water purification tablets, and mobile medical care to flood victims in Sylhet and Feni.',
      bn: 'সিলেট ও ফেনীর বন্যাদুর্গত পরিবারগুলোর মাঝে শুকনো খাবার, বিশুদ্ধ পানি, পানি বিশুদ্ধকরণ ট্যাবলেট এবং ভ্রাম্যমাণ চিকিৎসা সেবা প্রদান।'
    },
    description: {
      en: 'Severe flash floods caused by relentless monsoon rains have submerged entire villages across Sylhet, Sunamganj, and Feni districts. Over 2.5 million people are stranded without power, clean drinking water, or food supplies. Humanity First BD emergency relief teams are on the ground with speedboats distributing emergency survival kits containing rice, lentils, oil, oral rehydration salts, emergency lights, and water purification tablets.',
      bn: 'মুষলধারে বৃষ্টি ও পাহাড়ি ঢলে সিলেট, সুনামগঞ্জ ও ফেনী জেলার বিস্তীর্ণ এলাকা প্লাবিত হয়েছে। প্রায় ২৫ লাখ মানুষ বিদ্যুৎ, বিশুদ্ধ পানি ও খাবারবিহীন অবস্থায় পানিবন্দী রয়েছে। হিউম্যানিটি ফাস্ট বিডি স্পিডবোট ও ট্রলারের মাধ্যমে জরুরি চাল, ডাল, তেল, খাওয়ার স্যালাইন, বিশুদ্ধকরণ ট্যাবলেট ও লাইট সংবলিত সারভাইভাল কিট বিতরণ করছে।'
    },
    category: 'emergency',
    imageUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&auto=format&fit=crop',
    goalAmount: 5000000,
    raisedAmount: 3840000,
    donorCount: 1420,
    daysLeft: 12,
    isZakatEligible: true,
    isEmergency: true,
    location: { en: 'Sylhet, Feni & Sunamganj, Bangladesh', bn: 'সিলেট, ফেনী ও সুনামগঞ্জ, বাংলাদেশ' },
    expenseBreakdown: [
      { category: { en: 'Food Packs & Clean Water', bn: 'খাদ্যসামগ্রী ও বিশুদ্ধ পানি' }, percentage: 55 },
      { category: { en: 'Medical Assistance & Hygiene Kits', bn: 'চিকিৎসাসামগ্রী ও হাইজিন কিট' }, percentage: 25 },
      { category: { en: 'Rescue Boat & Transport Logistics', bn: 'উদ্ধারকারী নৌকা ও পরিবহন' }, percentage: 12 },
      { category: { en: 'Field Operation Expenses', bn: 'মাঠপর্যায়ের পরিচালনা খরচ' }, percentage: 8 }
    ],
    updates: [
      {
        date: '2026-07-28',
        title: { en: '500 Deep Inundated Families Reached in Sunamganj', bn: 'সুনামগঞ্জের ৫০০ দুর্গম পরিবারের কাছে ত্রাণ পৌঁছেছে' },
        text: { en: 'Our volunteers successfully deployed 4 speedboats to deliver dry food rations and emergency solar lanterns to isolated chars in Sunamganj.', bn: 'আমাদের স্বেচ্ছাসেবকরা ৪টি স্পিডবোট নিয়ে সুনামগঞ্জের দুর্গম চরাঞ্চলে শুকনো খাবার ও সৌরবাতি পৌঁছে দিয়েছেন।' },
        imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515fe926fb8?w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'camp-2',
    slug: 'clean-water-wells-coastal-bd',
    title: {
      en: 'Deep Solar Tube Wells in Saline Coastal Belts',
      bn: 'উপকূলীয় সুপেয় পানি প্রকল্প: গভীর সৌর টিউবওয়েল'
    },
    summary: {
      en: 'Installing solar-powered deep tube wells in Satkhira & Bagerhat to tackle severe groundwater salinity and provide safe drinking water.',
      bn: 'সাতক্ষীরা ও বাগেরহাটে লবণাক্ততামুক্ত সুপেয় পানির জন্য সোলার চালিত গভীর টিউবওয়েল স্থাপন।'
    },
    description: {
      en: 'In southern coastal districts like Satkhira, Koyra, and Bagerhat, climate-driven sea level rise has contaminated almost all surface water with high salt concentrations. Women and young girls walk 5-7 km daily just to fetch non-potable water. Humanity First BD installs 600ft deep solar-powered filtration wells serving up to 250 families per installation.',
      bn: 'সাতক্ষীরা, কয়রা ও বাগেরহাটের মত উপকূলীয় এলাকায় ভূগর্ভস্থ পানি অতিরিক্ত লবণাক্ত। খাবার পানির জন্য নারীদের প্রতিদিন ৫-৭ কিলোমিটার হাঁটতে হয়। আমরা ৬০০ ফুট গভীর সোলার সাবমার্সিবল ফিল্টারিং ওয়াটার প্ল্যান্ট স্থাপন করছি।'
    },
    category: 'water',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200&auto=format&fit=crop',
    goalAmount: 3000000,
    raisedAmount: 2250000,
    donorCount: 890,
    daysLeft: 24,
    isZakatEligible: true,
    isEmergency: false,
    location: { en: 'Satkhira & Bagerhat, Bangladesh', bn: 'সাতক্ষীরা ও বাগেরহাট, বাংলাদেশ' },
    expenseBreakdown: [
      { category: { en: 'Deep Boring & Solar Submersible', bn: 'গভীর বোরিং ও সোলার পাম্প' }, percentage: 65 },
      { category: { en: 'Water Filtration Vessel Unit', bn: 'ফিল্টারেশন ও ট্যাঙ্কি সেটিং' }, percentage: 20 },
      { category: { en: 'Community Maintenance Fund', bn: 'রক্ষণাবেক্ষণ ফান্ড' }, percentage: 15 }
    ]
  },
  {
    id: 'camp-3',
    slug: 'street-children-education-dhaka',
    title: {
      en: 'Street Children Dignified Education & Meals Program',
      bn: 'পথশিশু শিক্ষা ও পুষ্টিকর খাবার কার্যক্রম'
    },
    summary: {
      en: 'Providing non-formal schooling, daily hot nutritious lunch, and healthcare for working street children in Kamrangirchar, Dhaka.',
      bn: 'ঢাকার কামরাঙ্গীরচরে সুবিধাবঞ্চিত পথশিশুদের বিনামূল্যে শিক্ষা, দৈনিক দুপুরের গরম খাবার ও চিকিৎসা সেবা।'
    },
    description: {
      en: 'Over 150,000 children live on the streets of Metropolitan Dhaka, vulnerable to child labor, hunger, and illiteracy. Our "Shiksha O Shastho" centers provide flexible morning classes, literacy materials, vocational skills, daily nutritious lunches, and weekly medical checkups.',
      bn: 'ঢাকা শহরের হাজার হাজার পথশিশু মৌলিক শিক্ষা ও পুষ্টির অভাবে জীবন কাটাচ্ছে। আমাদের ‘শিক্ষা ও স্বাস্থ্য’ কেন্দ্রের মাধ্যমে প্রতিদিন ২৫০ জন শিশুকে পড়ানো হয় এবং পুষ্টিকর মধ্যাহ্নভোজ দেওয়া হয়।'
    },
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop',
    goalAmount: 1800000,
    raisedAmount: 1450000,
    donorCount: 620,
    daysLeft: 18,
    isZakatEligible: true,
    isEmergency: false,
    location: { en: 'Kamrangirchar & Sadarghat, Dhaka', bn: 'কামরাঙ্গীরচর ও সদরঘাট, ঢাকা' }
  },
  {
    id: 'camp-4',
    slug: 'zakat-general-fund-2026',
    title: {
      en: '100% Verified Zakat Eligible Empower Fund',
      bn: '১০০% বিশ্বস্ত ও যাকাতযোগ্য স্বাবলম্বীকরণ ফান্ড'
    },
    summary: {
      en: 'Your Zakat directly empowers widows, destitute families, and micro-entrepreneurs through rickshaws, sewing machines, and grocery shops.',
      bn: 'আপনার যাকাত দ্বারা বিধবা ও নিঃস্ব পরিবারগুলোকে রিকশা, সেলাই মেশিন এবং ক্ষুদ্র ব্যবসা তৈরি করে স্বাবলম্বী করা হয়।'
    },
    description: {
      en: 'Humanity First BD operates a strict Shariah-compliant Zakat fund audited by eminent Islamic scholars. 100% of your Zakat funds go directly to eligible poor beneficiaries without deducting operational overheads.',
      bn: 'আমাদের যাকাত ফান্ড সম্পূর্ণ শরীয়াহ সম্মত ও আলেমদের দ্বারা নিরীক্ষিত। যাকাতের পুরো ১০০% অর্থ সরাসরি দারিদ্র্য দূরীকরণ ও পুনর্বাসনে ব্যয় করা হয়।'
    },
    category: 'zakat',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&auto=format&fit=crop',
    goalAmount: 10000000,
    raisedAmount: 7600000,
    donorCount: 3100,
    daysLeft: 45,
    isZakatEligible: true,
    isEmergency: false,
    location: { en: 'Nationwide Bangladesh', bn: 'সারাদেশ, বাংলাদেশ' }
  },
  {
    id: 'camp-5',
    slug: 'winter-warmth-blanket-distribution',
    title: {
      en: 'Northern Bangladesh Winter Warmth Drive',
      bn: 'উত্তরাঞ্চলে শীতবস্ত্র ও কম্বল বিতরণ'
    },
    summary: {
      en: 'Distributing thick heavy blankets and warm clothes to elderly and impoverished households in Kurigram, Panchagarh & Rangpur.',
      bn: 'কুড়িগ্রাম, পঞ্চগড় ও রংপুরে শৈত্যপ্রবাহে বিপন্ন প্রবীণ ও দিনমজুরদের মাঝে মানসম্মত কম্বল ও শীতবস্ত্র বিতরণ।'
    },
    description: {
      en: 'Severe cold waves hitting northern Bangladesh cause intense suffering to tea workers, rickshaw pullers, and elderly villagers. We distribute high-density heavy fleece blankets.',
      bn: 'উত্তরাঞ্চলে শৈত্যপ্রবাহে দরিদ্র জনগোষ্ঠীর দুর্ভোগ লাঘবে আমাদের স্বেচ্ছাসেবকরা বাড়ি বাড়ি গিয়ে শীতবস্ত্র পৌঁছে দেন।'
    },
    category: 'ramadan',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop',
    goalAmount: 1200000,
    raisedAmount: 980000,
    donorCount: 450,
    daysLeft: 8,
    isZakatEligible: true,
    isEmergency: true,
    location: { en: 'Kurigram, Panchagarh & Dinajpur', bn: 'কুড়িগ্রাম, পঞ্চগড় ও দিনাজপুর' }
  }
];
