import { Localized } from '../types';

export interface PurposeArea {
  id: string;
  number: string;
  title: Localized;
  description: Localized;
  items: Localized[];
  iconName: string;
  badge: Localized;
}

export interface PillarItem {
  id: string;
  pillarNumber: number;
  slug: string;
  title: Localized;
  period: Localized;
  shortDesc: Localized;
  longDesc: Localized;
  deliverables: Localized[];
  targetGroups: Localized[];
  accentColor: string;
  iconName: string;
}

export interface SpusProjectData {
  title: Localized;
  partnerName: Localized;
  location: Localized;
  period: Localized;
  associatedPillars: string;
  goal: Localized;
  whySpus: {
    stat: string;
    statLabel: Localized;
    narrative: Localized;
  };
  supportedAreas: {
    category: Localized;
    metric: string;
    metricLabel: Localized;
    details: Localized[];
    iconName: string;
  }[];
  activities: {
    id: number;
    title: Localized;
    description: Localized;
    iconName: string;
  }[];
  expectedImpact: Localized[];
  budget: {
    totalBdt: string;
    totalUsd: string;
    yearlyBreakdown: {
      year: string;
      bdt: string;
      usd: string;
      focus: Localized;
    }[];
    categories: Localized[];
  };
  dueDiligence: {
    strengths: Localized[];
    gaps: Localized[];
    manageableRisks: Localized[];
    recommendation: Localized;
  };
}

export interface StrategyData {
  timeframe: string;
  title: Localized;
  subtitle: Localized;
  strategicApproaches: {
    id: number;
    title: Localized;
    description: Localized;
    iconName: string;
    bullets: Localized[];
  }[];
  coreObjectives: Localized[];
  theoryOfChange: {
    ifStatements: Localized[];
    thenStatement: Localized;
    becauseStatements: Localized[];
  };
  pathwaysOfChange: {
    id: number;
    title: Localized;
    subtitle: Localized;
    description: Localized;
    iconName: string;
  }[];
  resultsFramework: {
    stage: string;
    label: Localized;
    description: Localized;
    items: Localized[];
    iconName: string;
  }[];
  evaluationLifecycle: {
    phase: string;
    title: Localized;
    desc: Localized;
    timing: Localized;
  }[];
  strategicAlignment: {
    category: Localized;
    frameworks: {
      name: string;
      details: Localized;
      badge?: string;
    }[];
  }[];
}

export interface WhyJoinUsData {
  heroTitle: Localized;
  heroSubtitle: Localized;
  reasons: {
    id: number;
    title: Localized;
    desc: Localized;
    iconName: string;
  }[];
  waysToEngage: {
    role: Localized;
    desc: Localized;
    actionLabel: Localized;
    iconName: string;
  }[];
  closingQuote: Localized;
}

export interface ResourceCategory {
  categoryTitle: Localized;
  iconName: string;
  description: Localized;
  items: {
    title: string;
    subtitle: Localized;
    organization: string;
    year?: string;
    linkUrl?: string;
    isDownloadable?: boolean;
    badge?: string;
  }[];
}

// ========================================================
// 1. PURPOSE DATA
// ========================================================
export const sctPurposeData: {
  heroTitle: Localized;
  heroTagline: Localized;
  foundationalQuote: Localized;
  missionStatement: Localized;
  areas: PurposeArea[];
} = {
  heroTitle: {
    en: 'Our Purpose',
    bn: 'আমাদের লক্ষ্য ও উদ্দেশ্য'
  },
  heroTagline: {
    en: 'Transforming “Once a Shaheen, Always a Shaheen” into Meaningful Service to Society',
    bn: '"ওয়ান্স এ শাহীন, অলওয়েজ এ শাহীন" চেতনাকে সমাজের স্থায়ী ও মর্যাদাপূর্ণ সেবায় রূপান্তর'
  },
  foundationalQuote: {
    en: 'The primary purpose of Shaheen Cares Trust (SCT) is to improve the lives of disadvantaged, vulnerable and underserved people and contribute to the sustainable development of local communities across Bangladesh.',
    bn: 'শাহীন কেয়ার্স ট্রাস্টের (SCT) মূল উদ্দেশ্য হলো পিছিয়ে পড়া, সুবিধাবঞ্চিত ও বিপন্ন মানুষের জীবনযাত্রার মান উন্নয়ন এবং বাংলাদেশের স্থানীয় জনগোষ্ঠীর টেকসই উন্নয়নে সক্রিয় অবদান রাখা।'
  },
  missionStatement: {
    en: 'We work through evidence-backed strategic care systems, long-term NGO institutional capacity building, and cross-sector partnerships to build a resilient, inclusive society where dignity is preserved across generations.',
    bn: 'আমরা প্রমাণ-ভিত্তিক প্রাতিষ্ঠানিক যত্ন ব্যবস্থা, স্থানীয় সামাজিক সংস্থার সক্ষমতা বৃদ্ধি ও বহুপাক্ষিক অংশীদারিত্বের মাধ্যমে একটি অন্তর্ভুক্তিমূলক ও মর্যাদাপূর্ণ সমাজ গঠনে কাজ করি।'
  },
  areas: [
    {
      id: 'purpose-1',
      number: '01',
      title: { en: 'Education & Skills Development', bn: 'শিক্ষা ও দক্ষতা উন্নয়ন' },
      description: {
        en: 'Supporting disadvantaged children, youth and adults through inclusive education, scholarships, vocational learning, and 21st-century digital capabilities.',
        bn: 'সুবিধাবঞ্চিত শিশু, তরুণ ও প্রাপ্তবয়স্কদের অন্তর্ভুক্তিমূলক শিক্ষা, শিক্ষাবৃত্তি, বৃত্তিমূলক প্রশিক্ষণ এবং ভবিষ্যৎমুখী কারিগরি দক্ষতায় সহায়তা।'
      },
      items: [
        { en: 'Inclusive Primary & Remedial Education', bn: 'অন্তর্ভুক্তিমূলক প্রাথমিক ও নিরাময়মূলক শিক্ষা' },
        { en: 'Merit & Need-Based Academic Scholarships', bn: 'মেধা ও আর্থিক চাহিদানির্ভর শিক্ষাবৃত্তি' },
        { en: 'Market-Relevant Vocational Training', bn: 'বাজারচাহিদা সম্পন্ন বৃত্তিমূলক প্রশিক্ষণ' },
        { en: 'Digital Literacy & Modern Career Skills', bn: 'ডিজিটাল সাক্ষরতা ও আধুনিক কর্মসংস্থান দক্ষতা' }
      ],
      iconName: 'GraduationCap',
      badge: { en: 'Core Priority', bn: 'মূল অগ্রাধিকার' }
    },
    {
      id: 'purpose-2',
      number: '02',
      title: { en: 'Healthcare & Well-being', bn: 'স্বাস্থ্যসেবা ও সুস্বাস্থ্য' },
      description: {
        en: 'Facilitating healthcare access, emergency medical grants, rehabilitation therapy, and community-based preventive health systems.',
        bn: 'সহজলভ্য স্বাস্থ্যসেবা, জরুরি চিকিৎসা সহায়তা, পুনর্বাসন থেরাপি এবং তৃণমূল পর্যায়ের প্রতিরোধমূলক স্বাস্থ্য কর্মসূচি নিশ্চিতকরণ।'
      },
      items: [
        { en: 'Free Diagnostic & Therapy Clinics', bn: 'বিনামূল্যে ডায়াগনস্টিক ও থেরাপি ক্লিনিক' },
        { en: 'Specialized Medical Assistance Grants', bn: 'বিশেষায়িত চিকিৎসা অনুদান ও তহবিল' },
        { en: 'Long-Term Physical & Speech Therapy', bn: 'দীর্ঘমেয়াদী ফিজিওথেরাপি ও স্পিচ থেরাপি' },
        { en: 'Preventive Health & Hygiene Education', bn: 'প্রতিরোধমূলক স্বাস্থ্য ও পরিচ্ছন্নতা সচেতনতা' }
      ],
      iconName: 'HeartPulse',
      badge: { en: 'Essential Need', bn: 'মৌলিক অধিকার' }
    },
    {
      id: 'purpose-3',
      number: '03',
      title: { en: 'Disability Inclusion', bn: 'প্রতিবন্ধী অন্তর্ভুক্তি' },
      description: {
        en: 'Promoting education, therapy, specialized skills, assistive technology, human dignity, and economic opportunities for persons with disabilities.',
        bn: 'প্রতিবন্ধী ব্যক্তি ও বিশেষ চাহিদাসম্পন্ন শিশুদের শিক্ষা, থেরাপি, সহায়ক উপকরণ, আত্মমর্যাদা এবং অর্থনৈতিক সুযোগ সৃষ্টি।'
      },
      items: [
        { en: 'Inclusive Classrooms & Adaptive Pedagogy', bn: 'উপযোগী ক্লাসরুম ও অন্তর্ভুক্তিমূলক শিক্ষণ' },
        { en: 'Assistive Devices (Wheelchairs, Hearing Aids)', bn: 'সহায়ক সামগ্রী (হুইলচেয়ার, শ্রবণযন্ত্র ইত্যাদি)' },
        { en: 'Disability-Inclusive Vocational Pathways', bn: 'প্রতিবন্ধীবান্ধব কর্মসংস্থান ও স্বাবলম্বীকরণ' },
        { en: 'Anti-Stigma & Community Dignity Advocacy', bn: 'সামাজিক কুসংস্কার দূরীকরণ ও অধিকার সুরক্ষা' }
      ],
      iconName: 'Accessibility',
      badge: { en: 'Pillar 1 Focus', bn: '১ম স্তম্ভের ফোকাস' }
    },
    {
      id: 'purpose-4',
      number: '04',
      title: { en: 'Poverty Reduction & Livelihoods', bn: 'দারিদ্র্য বিমোচন ও জীবিকায়ন' },
      description: {
        en: 'Helping vulnerable families break cycles of intergenerational poverty through sustainable employment, micro-enterprise, and asset grants.',
        bn: 'স্থায়ী কর্মসংস্থান, ক্ষুদ্র ব্যবসা সহায়তা এবং সম্পদ অনুদানের মাধ্যমে বিপন্ন পরিবারগুলোকে টেকসইভাবে স্বাবলম্বী করা।'
      },
      items: [
        { en: 'Seed Capital & Micro-Enterprise Grants', bn: 'ক্ষুদ্র উদ্যোক্তা ও বীজ তহবিল অনুদান' },
        { en: 'Sustainable Toolkits (Sewing, Farming, Trade)', bn: 'কর্মসংস্থান উপযোগী যন্ত্রপাতি বিতরণ' },
        { en: 'Financial Literacy & Savings Groups', bn: 'আর্থিক ব্যবস্থাপনা ও সঞ্চয় দল গঠন' },
        { en: 'Family-Centric Livelihood Plans', bn: 'পরিবারকেন্দ্রিক টেকসই জীবিকায়ন পরিকল্পনা' }
      ],
      iconName: 'TrendingUp',
      badge: { en: 'Economic Dignity', bn: 'অর্থনৈতিক সক্ষমতা' }
    },
    {
      id: 'purpose-5',
      number: '05',
      title: { en: 'Community Development', bn: 'কমিউনিটি উন্নয়ন' },
      description: {
        en: 'Supporting safe drinking water, hygienic sanitation, disaster-resilient shelters, and basic environmental living infrastructure.',
        bn: 'নিরাপদ সুপেয় পানি, স্বাস্থ্যসম্মত স্যানিটেশন, আশ্রয় ও টেকসই কমিউনিটি অবকাঠামো তৈরিতে সরাসরি সহায়তা।'
      },
      items: [
        { en: 'Deep Tube Wells & Rainwater Harvesting', bn: 'গভীর নলকূপ ও বৃষ্টির পানি সংরক্ষণ' },
        { en: 'Hygienic Sanitation Blocks in Schools/Slums', bn: 'স্কুল ও বস্তি এলাকায় স্যানিটেশন ব্যবস্থা' },
        { en: 'Disability-Accessible Public Infrastructure', bn: 'প্রতিবন্ধীবান্ধব গণঅবকাঠামো' },
        { en: 'Community Welfare Resource Centers', bn: 'তৃণমূল কমিউনিটি কল্যাণ কেন্দ্র' }
      ],
      iconName: 'Home',
      badge: { en: 'Infrastructure', bn: 'অবকাঠামো' }
    },
    {
      id: 'purpose-6',
      number: '06',
      title: { en: 'Women & Youth Empowerment', bn: 'নারী ও যুব ক্ষমতায়ন' },
      description: {
        en: 'Creating pathways for female leadership, youth employment, technical apprenticeships, and independent economic participation.',
        bn: 'নারী নেতৃত্ব বিকাশ, তরুণদের কর্মসংস্থান, শিক্ষানবিশি প্রশিক্ষণ এবং স্বাধীন অর্থনৈতিক অংশগ্রহণের দ্বার উন্মোচন।'
      },
      items: [
        { en: 'Young Women Technical Apprenticeships', bn: 'তরুণীদের কারিগরি শিক্ষানবিশি কর্মসূচি' },
        { en: 'Youth Leadership & Social Mentorship', bn: 'যুব নেতৃত্ব ও সামাজিক মেন্টরশিপ' },
        { en: 'Maternal Nutrition & Health Awareness', bn: 'মাতৃস্বাস্থ্য ও পুষ্টি সচেতনতা' },
        { en: 'Community Decision-Making Involvement', bn: 'কমিউনিটি পর্যায়ে সিদ্ধান্ত গ্রহণে অংশগ্রহণ' }
      ],
      iconName: 'Users',
      badge: { en: 'Pillar 2 Focus', bn: '২য় স্তম্ভের ফোকাস' }
    },
    {
      id: 'purpose-7',
      number: '07',
      title: { en: 'Humanitarian Response', bn: 'মানবিক সাড়া ও জরুরি সহায়তা' },
      description: {
        en: 'Providing swift, transparent relief and rehabilitation to communities affected by sudden disasters, floods, winter cold, and acute crises.',
        bn: 'বন্যা, শীতপ্রবাহ ও প্রাকৃতিক দুর্যোগে আক্রান্ত মানুষের মাঝে দ্রুত, নিরপেক্ষ ও সুসংগঠিত জরুরি ত্রাণ ও পুনর্বাসন সহায়তা।'
      },
      items: [
        { en: 'Rapid Cooked Food & Clean Water Supply', bn: 'দ্রুত রান্না করা খাবার ও বিশুদ্ধ পানি বিতরণ' },
        { en: 'Post-Flood Home & Sanitation Rebuilding', bn: 'বন্যা পরবর্তী গৃহ ও শৌচাগার মেরামত' },
        { en: 'Winter Warmth Blankets & Warm Wear', bn: 'শীতবস্ত্র ও কম্বল বিতরণ' },
        { en: 'Medical Rescue Kits & First-Aid Teams', bn: 'ফার্স্ট-এইড ও জরুরি মেডিকেল রেসপন্স কিট' }
      ],
      iconName: 'ShieldAlert',
      badge: { en: 'Rapid Relief', bn: 'জরুরি সাড়া' }
    },
    {
      id: 'purpose-8',
      number: '08',
      title: { en: 'Environmental Sustainability', bn: 'পরিবেশগত স্থায়িত্ব' },
      description: {
        en: 'Promoting massive tree plantation, eco-conscious behavior, clean-up drives, and climate-adaptive community practices.',
        bn: 'ব্যাপক বৃক্ষরোপণ, প্লাস্টিক দূষণ রোধ, পরিবেশ সচেতনতা এবং জলবায়ু সহনশীল কমিউনিটি গড়ে তোলা।'
      },
      items: [
        { en: 'School & Community Tree Plantations', bn: 'শিক্ষা প্রতিষ্ঠান ও কমিউনিটি বৃক্ষরোপণ' },
        { en: 'Waste Management & Anti-Plastic Drives', bn: 'বর্জ্য ব্যবস্থাপনা ও প্লাস্টিক-বিরোধী সচেতনতা' },
        { en: 'Climate-Resilient Agricultural Practices', bn: 'জলবায়ু সহনশীল কৃষি উদ্যোগ' },
        { en: 'Solar-Powered Clean Water Wells', bn: 'সৌরবিদ্যুৎ চালিত সুপেয় পানি নলকূপ' }
      ],
      iconName: 'Leaf',
      badge: { en: 'Green Planet', bn: 'সবুজ পৃথিবী' }
    },
    {
      id: 'purpose-9',
      number: '09',
      title: { en: 'Partnership & Volunteerism', bn: 'অংশীদারিত্ব ও স্বেচ্ছাসেবা' },
      description: {
        en: 'Uniting Shaheen alumni worldwide, multidisciplinary professionals, corporate CSR, and grassroots organizations to work collectively for social good.',
        bn: 'বিশ্বজুড়ে ছড়িয়ে থাকা শাহীন অ্যালামনাই, বিশেষজ্ঞ পেশাজীবী ও তৃণমূল সংস্থাকে যৌথ মানবিক কাজে ঐক্যবদ্ধ করা।'
      },
      items: [
        { en: 'Global Shaheen Alumni Chapters (US, UK, AUS)', bn: 'আন্তর্জাতিক শাহীন অ্যালামনাই অধ্যায়' },
        { en: 'Interdisciplinary Pro-Bono Advisory Pool', bn: 'পেশাদার স্বেচ্ছাসেবী বিশেষজ্ঞ পুল' },
        { en: 'Transparent Corporate CSR Alliances', bn: 'স্বচ্ছ প্রাতিষ্ঠানিক সিএসআর অংশীদারিত্ব' },
        { en: 'Youth Volunteer Training & Field Days', bn: 'স্বেচ্ছাসেবক দক্ষতা ও ফিল্ডওয়ার্ক প্রশিক্ষণ' }
      ],
      iconName: 'Handshake',
      badge: { en: 'Collective Power', bn: 'ঐক্যের শক্তি' }
    }
  ]
};

// ========================================================
// 2. OUR FIVE PILLARS DATA
// ========================================================
export const sctPillarsData: PillarItem[] = [
  {
    id: 'pillar-1',
    pillarNumber: 1,
    slug: 'special-needs',
    title: {
      en: 'Children with Special Needs',
      bn: 'বিশেষ চাহিদাসম্পন্ন শিশু'
    },
    period: {
      en: '2026–2029 (Active Focus)',
      bn: '২০২৬–২০২৯ (সক্রিয় পর্যায়)'
    },
    shortDesc: {
      en: 'Creating pathways to greater skills, dignity, inclusion, and independence through strong grassroots partnerships.',
      bn: 'তৃণমূল অংশীদারিত্বের মাধ্যমে বিশেষ চাহিদাসম্পন্ন শিশুদের শিক্ষা, দক্ষতা, অন্তর্ভুক্তি ও আত্মমর্যাদা নিশ্চিতকরণ।'
    },
    longDesc: {
      en: 'Over 60% of children with disabilities in Bangladesh remain out of school. Pillar 1 addresses this systemic gap through direct inclusive education, ongoing physical, occupational, and speech therapy, assistive technology, nutritional support, and community advocacy to eliminate social stigma.',
      bn: 'বাংলাদেশের ৬০% এর বেশি বিশেষ চাহিদাসম্পন্ন শিশু শিক্ষার বাইরে থেকে যায়। স্তম্ভ ১ এই ব্যবধান দূর করতে অন্তর্ভুক্তিমূলক শিক্ষা, সার্বক্ষণিক ফিজিওথেরাপি ও স্পিচ থেরাপি, সহায়ক উপকরণ এবং সামাজিক কুসংস্কার দূরীকরণে নিরবচ্ছিন্ন কাজ করে।'
    },
    deliverables: [
      { en: 'Inclusive primary education for 75+ children', bn: '৭৫+ শিশুর অন্তর্ভুক্তিমূলক প্রাথমিক শিক্ষা' },
      { en: 'Dedicated therapy center for 100+ beneficiaries', bn: '১০০+ সুবিধাভোগীর জন্য ডেডিকেটেড থেরাপি সেন্টার' },
      { en: 'Free provision of wheelchairs, crutches, and sensory kits', bn: 'হুইলচেয়ার, ক্রাচ ও সেন্সরি কিটের বিনামূল্যে বিতরণ' },
      { en: 'Caregiver mental health & vocational livelihood sessions', bn: 'অভিভাবকদের মানসিক স্বাস্থ্য ও আয়বর্ধক প্রশিক্ষণ' },
      { en: 'Community-wide anti-stigma campaigns in peri-urban areas', bn: 'উপশহর এলাকায় কুসংস্কার বিরোধী সামাজিক প্রচারণা' }
    ],
    targetGroups: [
      { en: 'Children with autism, cerebral palsy, and physical disabilities', bn: 'অটিজম, সেরিব্রাল পালসি ও শারীরিক প্রতিবন্ধকতায় আক্রান্ত শিশু' },
      { en: 'Underprivileged families living in peri-urban Dhaka', bn: 'ঢাকা ও সংলগ্ন এলাকার স্বল্প-আয়ের পরিবারসমূহ' }
    ],
    accentColor: '#138086',
    iconName: 'HeartHandshake'
  },
  {
    id: 'pillar-2',
    pillarNumber: 2,
    slug: 'youth-employability',
    title: {
      en: 'Youth Employability',
      bn: 'যুব কর্মসংস্থান ও দক্ষতা'
    },
    period: {
      en: '2029–2030 (Expansion Phase)',
      bn: '২০২৯–২০৩০ (সম্প্রসারণ পর্যায়)'
    },
    shortDesc: {
      en: 'Equipping young people with internationally relevant vocational skills, tech capabilities, and pathways to dignified careers.',
      bn: 'তরুণ সমাজকে আন্তর্জাতিক মানের কারিগরি, প্রযুক্তিগত ও সেবামূলক দক্ষতায় প্রশিক্ষিত করে টেকসই কর্মসংস্থানে যুক্ত করা।'
    },
    longDesc: {
      en: 'Building upon the foundations of Pillar 1, Pillar 2 tackles youth underemployment in Bangladesh. SCT bridges the gap between traditional schooling and market needs by offering hands-on vocational modules, modern digital skills, caregiving certification, and entrepreneurship seed support.',
      bn: 'স্তম্ভ ১-এর অভিজ্ঞতার ওপর ভিত্তি করে স্তম্ভ ২ তরুণদের বেকারত্ব দূর করতে কাজ করবে। বাজারচাহিদা সম্পন্ন বৃত্তিমূলক কোর্স, আধুনিক ডিজিটাল স্কিল, প্রফেশনাল কেয়ারগিভিং সার্টিফিকেট এবং স্টার্টআপ সিড ফান্ডের মাধ্যমে ভবিষ্যৎ তরুণ নেতৃত্ব তৈরি করা হবে।'
    },
    deliverables: [
      { en: 'Caregiver professional training courses (feeding into Pillar 3)', bn: 'সার্টিফাইড কেয়ারগিভার প্রশিক্ষণ (স্তম্ভ ৩-এর সাথে সংযুক্ত)' },
      { en: 'High-demand vocational apprenticeships (IT, Electrical, Hospitality)', bn: 'চাহিদাবহুল কারিগরি শিক্ষানবিশি (আইটি, ইলেকট্রিক্যাল, হসপিটালিটি)' },
      { en: 'Micro-grants & incubation for youth-led community enterprises', bn: 'তরুণ উদ্যোক্তাদের ক্ষুদ্র অনুদান ও ইনকিউবেশন সাপোর্ট' },
      { en: 'Job placement cell connecting graduates with ethical employers', bn: 'চাকরি প্রত্যাশী ও কর্মসংস্থান প্রদানকারী প্রতিষ্ঠানের মধ্যে সেতুবন্ধন' }
    ],
    targetGroups: [
      { en: 'Unemployed & underemployed youth aged 18–30', bn: '১৮–৩০ বছর বয়সী বেকার ও সুবিধাবঞ্চিত তরুণ-তরুণী' },
      { en: 'Vocational graduates seeking ethical placement', bn: 'কারিগরি প্রশিক্ষণপ্রাপ্ত তরুণ কর্মী' }
    ],
    accentColor: '#104E7A',
    iconName: 'Briefcase'
  },
  {
    id: 'pillar-3',
    pillarNumber: 3,
    slug: 'elderly-care',
    title: {
      en: 'Elderly Care',
      bn: 'প্রবীণ সেবা ও যত্ন'
    },
    period: {
      en: '2030 onward (Maturity Phase)',
      bn: '২০৩০ থেকে পরবর্তী (পরিপক্ব পর্যায়)'
    },
    shortDesc: {
      en: 'Developing dignified, community-centered care systems for older people connected with trained youth caregivers.',
      bn: 'প্রবীণদের জন্য মর্যাদাপূর্ণ ও সম্প্রদায়ভিত্তিক যত্ন ব্যবস্থা এবং আন্তঃপ্রজন্মীয় সামাজিক সংযোগ কাঠামো স্থাপন।'
    },
    longDesc: {
      en: 'As Bangladesh experiences a rapid demographic shift with an aging population, traditional family care systems face growing pressure. Pillar 3 develops dignified daycare, home-visit health monitoring, and social engagement clubs where empowered young people support their elders with compassion and respect.',
      bn: 'বাংলাদেশে প্রবীণ জনসংখ্যার দ্রুত বৃদ্ধির প্রেক্ষাপটে পারিবারিক পরিচর্যা ব্যবস্থার ওপর চাপ বাড়ছে। স্তম্ভ ৩ প্রবীণদের সম্মানজনক দিবাযত্ন, হোম-ভিজিট চিকিৎসা ও বিনোদন কেন্দ্র নিশ্চিত করবে—যেখানে প্রশিক্ষিত তরুণরা পরম শ্রদ্ধার সাথে প্রবীণদের সেবা দেবে।'
    },
    deliverables: [
      { en: 'Neighborhood elderly daycare & companionship clubs', bn: 'এলাকাভিত্তিক প্রবীণ দিবাযত্ন ও সহমর্মিতা ক্লাব' },
      { en: 'Mobile medical checkups & chronic illness medicine supply', bn: 'ভ্রাম্যমাণ স্বাস্থ্য পরীক্ষা ও নিয়মিত ওষুধ সরবরাহ' },
      { en: 'Intergenerational mentorship bridging youth and elderly citizens', bn: 'প্রবীণদের অভিজ্ঞতা ও তরুণদের উদ্দীপনার আন্তঃপ্রজন্মীয় বিনিময়' },
      { en: 'Dignified palliative and home care assistance protocols', bn: 'মর্যাদাপূর্ণ উপশমকারী (Palliative) সেবা ব্যবস্থা' }
    ],
    targetGroups: [
      { en: 'Vulnerable, isolated, and low-income senior citizens', bn: 'একাকী ও আর্থিক সংকটে থাকা জ্যেষ্ঠ নাগরিক' },
      { en: 'Caregiver families requiring respite guidance', bn: 'পরিচর্যায় নিয়োজিত অভিভাবক পরিবার' }
    ],
    accentColor: '#D4AF37',
    iconName: 'UserCheck'
  },
  {
    id: 'pillar-4',
    pillarNumber: 4,
    slug: 'organizational-sustainability',
    title: {
      en: 'Organizational Sustainability',
      bn: 'প্রাতিষ্ঠানিক সক্ষমতা ও স্থায়িত্ব'
    },
    period: {
      en: 'Across All Phases (Continuous Core)',
      bn: 'সকল পর্যায়ে অব্যাহত (ধারাবাহিক মূল স্তম্ভ)'
    },
    shortDesc: {
      en: 'Strengthening grassroots nonprofits through improved governance, social enterprise, and reduced donation dependency.',
      bn: 'তৃণমূল সামাজিক সংস্থাসমূহের সুশাসন, আয়বর্ধক সামাজিক ব্যবসা ও অনুদান নির্ভরতা কমিয়ে টেকসই রূপ দেওয়া।'
    },
    longDesc: {
      en: 'Charity work cannot rely indefinitely on sporadic donations. Pillar 4 empowers grassroots organizations with robust monitoring, financial accounting systems, board governance, and small social enterprise models so their life-saving interventions endure for decades.',
      bn: 'সামাজিক কাজ কখনোই অনির্দিষ্টকাল অনিয়মিত অনুদানের ওপর চলতে পারে না। স্তম্ভ ৪ তৃণমূল সংস্থাসমূহকে স্বচ্ছ হিসাব ব্যবস্থা, পরিচালনা পর্ষদের সুশাসন এবং সামাজিক উদ্যোগের মাধ্যমে স্থায়ী ও পরনির্ভরশীলতামুক্ত করতে কাজ করে।'
    },
    deliverables: [
      { en: 'Digitized bookkeeping, accounting, and compliance training', bn: 'ডিজিটাল হিসাবরক্ষণ, আর্থিক অডিট ও কমপ্লায়েন্স প্রশিক্ষণ' },
      { en: 'Micro-social enterprise incubation for sustained NGO revenue', bn: 'এনজিওর নিয়মিত আয়ের জন্য ক্ষুদ্র সামাজিক ব্যবসার সূচনা' },
      { en: 'MEAL (Monitoring, Evaluation, Accountability, Learning) toolkits', bn: 'কার্যকর ফলাফল তদারকি ও মূল্যায়ন (MEAL) কাঠামোর প্রয়োগ' },
      { en: 'Board of Trustees governance & leadership mentoring', bn: 'ট্রাস্টি বোর্ড ও নির্বাহী নেতৃত্বের সুশাসন পরামর্শ' }
    ],
    targetGroups: [
      { en: 'Grassroots disability, education, and welfare organizations', bn: 'তৃণমূল পর্যায়ের প্রতিবন্ধী, শিক্ষা ও সেবাধর্মী সংস্থা' },
      { en: 'Local community leaders seeking sustainable models', bn: 'স্থায়ী মডেল প্রত্যাশী সমাজকর্মী ও নেতৃত্ব' }
    ],
    accentColor: '#E06D53',
    iconName: 'Building'
  },
  {
    id: 'pillar-5',
    pillarNumber: 5,
    slug: 'shaheen-community-care',
    title: {
      en: 'Shaheen Community Care',
      bn: 'শাহীন কমিউনিটি সেবা'
    },
    period: {
      en: 'Ongoing & Eternal (Heart of SCT)',
      bn: 'চিরন্তন ও চলমান (এসসিটি-র প্রাণকেন্দ্র)'
    },
    shortDesc: {
      en: 'Standing beside members of the wider Shaheen family—including former teachers and staff—during genuine hardship.',
      bn: 'শাহীন পরিবারের সদস্য, প্রাক্তন শিক্ষক ও সহায়ক কর্মীদের দুঃসময়ে পরম মমতায় ও সম্মানের সাথে পাশে দাঁড়ানো।'
    },
    longDesc: {
      en: 'Our roots lie in gratitude. Shaheen Cares Trust maintains a compassionate emergency reserve to quietly and respectfully assist retired teachers, former staff, and fellow alumni who face critical health emergencies or acute economic distress.',
      bn: 'আমাদের মূল শক্তি কৃতজ্ঞতাবোধ। শাহীন কেয়ার্স ট্রাস্ট একটি বিশেষ তহবিল সংরক্ষণ করে, যার মাধ্যমে অবসরপ্রাপ্ত শিক্ষক, কর্মচারী ও বিপদে পড়া প্রাক্তন শিক্ষার্থীদের মর্যাদা অক্ষুণ্ণ রেখে নিভৃতে সার্বিক সহায়তা করা হয়।'
    },
    deliverables: [
      { en: 'Discreet emergency healthcare grants for respected retired teachers', bn: 'সম্মানিত অবসরপ্রাপ্ত শিক্ষকদের জরুরি চিকিৎসা অনুদান' },
      { en: 'Alumni distress relief and sudden crisis interventions', bn: 'শাহীন সদস্যদের আকস্মিক বিপদকালীন গোপনীয় সহায়তা' },
      { en: 'Teacher welfare recognition & lifetime healthcare fund', bn: 'শিক্ষক কল্যাণ ও আজীবন স্বাস্থ্য সুরক্ষা উদ্যোগ' },
      { en: 'Global alumni solidarity network across generations', bn: 'প্রজন্ম থেকে প্রজন্মে শাহীন ভাতৃত্ব ও সংহতি নেটওয়ার্ক' }
    ],
    targetGroups: [
      { en: 'Retired teachers and staff of BAF Shaheen institutions', bn: 'বিএএফ শাহীন শিক্ষা প্রতিষ্ঠানের অবসরপ্রাপ্ত শিক্ষক ও কর্মী' },
      { en: 'Shaheen alumni in acute medical or life emergencies', bn: 'জরুরি সংকটে থাকা যেকোনো ব্যাচের শাহীন সদস্য' }
    ],
    accentColor: '#64748B',
    iconName: 'ShieldCheck'
  }
];

// ========================================================
// 3. FIRST PROJECT — SPUS DATA
// ========================================================
export const sctSpusProjectData: SpusProjectData = {
  title: {
    en: 'First Flagship Project: SPUS Satarkul',
    bn: 'প্রথম প্রধান প্রকল্প: এসপিইউএস সাঁতারকুল'
  },
  partnerName: {
    en: 'Satarkul Protibandhi Unnayan Sangstha (SPUS)',
    bn: 'সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (SPUS)'
  },
  location: {
    en: 'Satarkul, Badda, Dhaka, Bangladesh',
    bn: 'সাঁতারকুল, বাড্ডা, ঢাকা, বাংলাদেশ'
  },
  period: {
    en: '2026–2029 (3-Year Partnership)',
    bn: '২০২৬–২০২৯ (৩ বছর মেয়াদী অংশীদারিত্ব)'
  },
  associatedPillars: 'Pillars 1 & 4 (Children with Special Needs + Organizational Sustainability)',
  goal: {
    en: 'To improve the quality of life, inclusion, and life opportunities of children and persons with disabilities in the Satarkul area through integrated services and institutional strengthening.',
    bn: 'সমন্বিত সেবা প্রদান এবং প্রাতিষ্ঠানিক সক্ষমতা বৃদ্ধির মাধ্যমে সাঁতারকুল এলাকার বিশেষ চাহিদাসম্পন্ন শিশু ও প্রতিবন্ধী ব্যক্তিদের জীবনযাত্রার মান, অন্তর্ভুক্তি ও ভবিষ্যৎ সুযোগ উন্নত করা।'
  },
  whySpus: {
    stat: '60%+',
    statLabel: {
      en: 'Children with Disabilities in Bangladesh Out of School',
      bn: 'বাংলাদেশে ৬০% এর বেশি প্রতিবন্ধী শিশু স্কুলে যেতে পারে না'
    },
    narrative: {
      en: 'More than 60% of children with disabilities in Bangladesh remain out of formal education. SPUS has something that cannot simply be created overnight through funding: deep grassroots community trust. Led by persons with disabilities, SPUS has established relationships with families in Satarkul. What it urgently needs is a structured, long-term partner to expand its services, stabilize its finances, and scale its model. That is where Shaheen Cares Trust begins.',
      bn: 'বাংলাদেশে বিশেষ চাহিদাসম্পন্ন শিশুদের ৬০% এরও বেশি শিক্ষার অধিকার থেকে বঞ্চিত। কিন্তু সাঁতারকুলে SPUS এমন একটি অর্জন করেছে যা শুধু টাকা দিয়ে হয় না: তৃণমূল মানুষের গভীর আস্থা। প্রতিবন্ধী ব্যক্তিদের নিজস্ব নেতৃত্বে গড়ে ওঠা এই সংস্থা স্থানীয় পরিবারের সাথে ঘনিষ্ঠ সম্পর্ক তৈরি করেছে। তাদের এখন প্রয়োজন একটি সুসংগঠিত সহযোগী, যা সেবার মান বাড়াবে ও সংস্থাকে স্থায়ী রূপ দেবে। আর এখানেই কাজ শুরু করেছে শাহীন কেয়ার্স ট্রাস্ট।'
    }
  },
  supportedAreas: [
    {
      category: { en: 'Inclusive Education', bn: 'অন্তর্ভুক্তিমূলক শিক্ষা' },
      metric: '75',
      metricLabel: { en: 'Children Enrolled', bn: 'নিয়মিত শিক্ষার্থী' },
      details: [
        { en: 'Tailored remedial curriculum and sensory classrooms', bn: 'বিশেষায়িত পাঠ্যক্রম ও সেন্সরি ক্লাসরুম' },
        { en: 'Trained special educators and teacher aides', bn: 'প্রশিক্ষিত স্পেশাল এডুকেটর ও শিক্ষক সহকারী' },
        { en: 'Free stationery, uniforms, and adaptive bags', bn: 'বই-খাতা, পোশাক ও উপযোগী স্কুল ব্যাগ বিতরণ' }
      ],
      iconName: 'GraduationCap'
    },
    {
      category: { en: 'Therapy & Rehabilitation', bn: 'থেরাপি ও পুনর্বাসন' },
      metric: '100+',
      metricLabel: { en: 'Beneficiaries Served', bn: 'নিয়মিত সেবাগ্রহীতা' },
      details: [
        { en: 'Physiotherapy, Speech & Language Therapy sessions', bn: 'নিয়মিত ফিজিওথেরাপি ও স্পিচ থেরাপি সেশন' },
        { en: 'Occupational therapy & fine motor skill development', bn: 'দৈনন্দিন কাজের উপযোগী অকুপেশনাল থেরাপি' },
        { en: 'Clinical progress monitoring & caregiver training', bn: 'নিয়মিত চিকিৎসা অগ্রগতি ট্র্যাকিং ও হোম-কেয়ার প্রশিক্ষণ' }
      ],
      iconName: 'Activity'
    },
    {
      category: { en: 'Nutrition & Assistive Technology', bn: 'পুষ্টি ও সহায়ক উপকরণ' },
      metric: '100%',
      metricLabel: { en: 'Nutrition & Mobility Cover', bn: 'পুষ্টি ও মুভমেন্ট কভারেজ' },
      details: [
        { en: 'Daily fortified nutritious snacks at the center', bn: 'সেন্টারে প্রতিদিন পুষ্টিকর নাস্তা ও সম্পূরক খাদ্য' },
        { en: 'Customized wheelchairs, hearing aids, and braces', bn: 'উপযোগী হুইলচেয়ার, শ্রবণযন্ত্র ও স্প্লিন্ট প্রদান' },
        { en: 'Hygiene and dental health screening camps', bn: 'নিয়মিত দাঁত ও ব্যক্তিগত পরিচ্ছন্নতা স্ক্রিনিং ক্যাম্প' }
      ],
      iconName: 'Apple'
    },
    {
      category: { en: 'Livelihoods & Caregiver Skills', bn: 'জীবিকায়ন ও অভিভাবক প্রশিক্ষণ' },
      metric: '40+',
      metricLabel: { en: 'Mothers & Youth Trained', bn: 'মা ও তরুণদের প্রশিক্ষণ' },
      details: [
        { en: 'Vocational training for mothers of special needs children', bn: 'বিশেষ শিশুদের মায়েদের হস্তশিল্প ও সেলাই প্রশিক্ষণ' },
        { en: 'Micro-grant linkage for home-based income generation', bn: 'ঘরে বসে আয়ের জন্য ক্ষুদ্র অনুদান ও কাঁচামাল প্রদান' },
        { en: 'Direct market linkage for goods produced at center', bn: 'উৎপাদিত পণ্যের সরাসরি বিক্রয় ও বাজার সংযোগ' }
      ],
      iconName: 'Briefcase'
    },
    {
      category: { en: 'Community Anti-Stigma Advocacy', bn: 'কুসংস্কার দূরীকরণ ও সচেতনতা' },
      metric: '5,000+',
      metricLabel: { en: 'Community Reach', bn: 'জনসম্পৃক্ততা' },
      details: [
        { en: 'Community dialogues with local schools and shopkeepers', bn: 'স্থানীয় সাধারণ স্কুল ও ব্যবসায়ীদের সাথে সংলাপ' },
        { en: 'Disability Day sports and cultural celebration rallies', bn: 'প্রতিবন্ধী দিবস ও বিশেষ শিশুদের সাংস্কৃতিক উৎসব' },
        { en: 'Inclusion workshops for mainstream primary schools', bn: 'মূলধারার স্কুলে বিশেষ শিশুদের গ্রহণ করার কর্মশালা' }
      ],
      iconName: 'Megaphone'
    },
    {
      category: { en: 'Institutional Strengthening', bn: 'প্রাতিষ্ঠানিক সক্ষমতা ও স্থায়িত্ব' },
      metric: 'Pillar 4',
      metricLabel: { en: 'Full Governance Systems', bn: 'সম্পূর্ণ সুশাসন ব্যবস্থা' },
      details: [
        { en: 'Digitized finance, attendance, and record systems', bn: 'ডিজিটাল হিসাব, হাজিরা ও শিক্ষার্থী ডাটাবেজ' },
        { en: 'Standardized HR and safeguarding policies', bn: 'নিরাপত্তা ও মানবসম্পদ নীতিমালা প্রণয়ন' },
        { en: 'Self-sustaining income generation strategy design', bn: 'ভবিষ্যতের জন্য স্থায়ী আয় নিশ্চিতকরণ কৌশল' }
      ],
      iconName: 'Shield'
    }
  ],
  activities: [
    {
      id: 1,
      title: { en: 'Inclusive Education for 75 Children', bn: '৭৫ শিশুর অন্তর্ভুক্তিমূলক শিক্ষা' },
      description: { en: 'Operating 5 specialized batches with individualized education plans (IEPs) and dedicated special educators.', bn: 'প্রতিটি শিশুর জন্য স্বতন্ত্র পরিকল্পনা (IEP) সহ ৫টি বিশেষ ব্যাচে শিক্ষা প্রদান।' },
      iconName: 'BookOpen'
    },
    {
      id: 2,
      title: { en: 'Therapy Services for 100 Beneficiaries', bn: '১০০ সুবিধাভোগীর থেরাপি সেবা' },
      description: { en: 'Full-time physical, occupational, and speech therapists providing 1,200+ clinical sessions annually.', bn: 'পূর্ণকালীন দক্ষ থেরাপিস্টদের মাধ্যমে বছরে ১২০০-র বেশি ক্লিনিক্যাল থেরাপি সেশন।' },
      iconName: 'Activity'
    },
    {
      id: 3,
      title: { en: 'Nutrition & Hygiene Supplementation', bn: 'পুষ্টি ও হাইজিন সহায়তা' },
      description: { en: 'Daily cooked meal / egg-milk nutrition boost combating acute malnutrition among students.', bn: 'শিক্ষার্থীদের অপুষ্টি রোধে সেন্টারে প্রতিদিন ডিম, দুধ ও স্বাস্থ্যকর খাবার সরবরাহ।' },
      iconName: 'Apple'
    },
    {
      id: 4,
      title: { en: 'Assistive Devices Distribution', bn: 'সহায়ক উপকরণ বিতরণ' },
      description: { en: 'Periodic clinical assessment and free fitting of wheelchairs, standing frames, hearing aids, and glasses.', bn: 'শারীরিক মাপ অনুযায়ী হুইলচেয়ার, স্ট্যান্ডিং ফ্রেম ও প্রয়োজনীয় চশমা-শ্রবণযন্ত্র প্রদান।' },
      iconName: 'Smile'
    },
    {
      id: 5,
      title: { en: 'Vocational & Livelihood Training', bn: 'বৃত্তিমূলক ও জীবিকায়ন প্রশিক্ষণ' },
      description: { en: 'Tailoring, paper crafts, and block-print workshops empowering families of special needs children.', bn: 'বিশেষ শিশুদের মায়েদের জন্য ব্লক-বাটিক, সেলাই ও ক্রাফট প্রশিক্ষণ।' },
      iconName: 'Scissors'
    },
    {
      id: 6,
      title: { en: 'SME / Business Seed Support', bn: 'ক্ষুদ্র ব্যবসা ও সিড ফান্ড সহায়তা' },
      description: { en: 'Providing micro-grants and marketing assistance so mothers can earn while keeping children in school.', bn: 'সন্তানের লেখাপড়ার পাশাপাশি মায়ের নিয়মিত আয়ের জন্য মূলধন সহায়তা।' },
      iconName: 'DollarSign'
    },
    {
      id: 7,
      title: { en: 'Community Awareness Campaigns', bn: 'কমিউনিটি সচেতনতা ও প্রচারণা' },
      description: { en: 'Street dramas, door-to-door counseling, and mosque announcements eliminating fear and superstition.', bn: 'কুসংস্কার দূর করতে সামাজিক নাটক, বাড়ি বাড়ি কাউন্সেলিং ও সচেতনতা বৃদ্ধি।' },
      iconName: 'Volume2'
    },
    {
      id: 8,
      title: { en: 'MEAL & Institutional Strengthening', bn: 'ফলাফল তদারকি ও প্রাতিষ্ঠানিক ভিত্তি' },
      description: { en: 'Continuous monitoring, quarterly financial audits, staff capacity building, and long-term sustainability modeling.', bn: 'ত্রৈমাসিক আর্থিক নিরীক্ষা, শিক্ষক দক্ষতা বৃদ্ধি ও দীর্ঘমেয়াদী স্থায়িত্বের কৌশল নিশ্চিতকরণ।' },
      iconName: 'CheckCircle'
    }
  ],
  expectedImpact: [
    {
      en: 'More children entering school and remaining enrolled across full 3-year cycle.',
      bn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের স্কুলমুখী করা এবং পুরো ৩ বছর ধরে শিক্ষার সাথে যুক্ত রাখা।'
    },
    {
      en: 'Measurable physical rehabilitation, speech clarity, and developmental outcomes.',
      bn: 'শারীরিক অঙ্গ সঞ্চালন, কথার স্পষ্টতা ও মানসিক বিকাশের নিশ্চিত অগ্রগতি।'
    },
    {
      en: 'Greater daily independence, personal self-worth, and child wellbeing.',
      bn: 'দৈনন্দিন কাজে নিজের ওপর নির্ভরতা বৃদ্ধি এবং শিশুর আত্মবিশ্বাস গড়ে তোলা।'
    },
    {
      en: 'Measurable reduction in stigma and discrimination across the Satarkul area.',
      bn: 'সাঁতারকুল এলাকায় প্রতিবন্ধকতা নিয়ে নেতিবাচক দৃষ্টিভঙ্গি উল্লেখযোগ্যভাবে হ্রাস।'
    },
    {
      en: 'Empowered local educators and therapists delivering standardized care.',
      bn: 'স্থানীয় শিক্ষক ও কর্মীদের মানসম্পন্ন অন্তর্ভুক্তিমূলক সেবায় দক্ষ করে তোলা।'
    },
    {
      en: 'Institutions, operational systems, and social revenue models designed to endure beyond the initial project period.',
      bn: 'প্রকল্পের মেয়াদ শেষ হওয়ার পরও যাতে সেবা অব্যাহত থাকে, সেই প্রাতিষ্ঠানিক ভিত্তি নিশ্চিত করা।'
    }
  ],
  budget: {
    totalBdt: 'BDT 13.27M',
    totalUsd: '~$108,000 USD',
    yearlyBreakdown: [
      {
        year: 'Year 1 (2026–2027)',
        bdt: 'BDT 4.76M',
        usd: '~$38,600',
        focus: { en: 'Center refurbishment, therapy equipment setup, hiring specialist teachers, baseline survey', bn: 'সেন্টার সংস্কার, থেরাপি যন্ত্রপাতি ক্রয়, বিশেষজ্ঞ শিক্ষক নিয়োগ ও বেসলাইন সমীক্ষা' }
      },
      {
        year: 'Year 2 (2027–2028)',
        bdt: 'BDT 4.24M',
        usd: '~$34,400',
        focus: { en: 'Full-scale inclusive education, nutrition, caregiver livelihoods, assistive device distribution', bn: 'পূর্ণাঙ্গ শিক্ষা, নিয়মিত পুষ্টি, মায়েদের হস্তশিল্প প্রশিক্ষণ ও সহায়ক উপকরণ প্রদান' }
      },
      {
        year: 'Year 3 (2028–2029)',
        bdt: 'BDT 4.26M',
        usd: '~$34,500',
        focus: { en: 'Advanced therapy, community transition, social enterprise launch, sustainability handover', bn: 'উন্নত থেরাপি, মূলধারার স্কুলে সংযোগ, সামাজিক ব্যবসা চালু ও টেকসই রূপান্তর' }
      }
    ],
    categories: [
      { en: 'Specialist Education & Teachers: 36.4%', bn: 'বিশেষ শিক্ষা ও শিক্ষক সম্মানী: ৩৬.৪%' },
      { en: 'Therapy & Medical Rehabilitation: 22.7%', bn: 'থেরাপি ও চিকিৎসা পুনর্বাসন: ২২.৭%' },
      { en: 'Nutrition, Hygiene & Assistive Devices: 18.2%', bn: 'পুষ্টি, পরিচ্ছন্নতা ও সহায়ক সামগ্রী: ১৮.২%' },
      { en: 'Institutional Capacity, Governance & MEAL: 11.8%', bn: 'প্রাতিষ্ঠানিক সক্ষমতা, সুশাসন ও তদারকি: ১১.৮%' },
      { en: 'Caregiver Livelihoods & Advocacy: 6.9%', bn: 'অভিভাবক জীবিকায়ন ও প্রচার: ৬.৯%' },
      { en: 'Operations, Audit & Contingency: 4.0%', bn: 'পরিচালনা, অডিট ও জরুরি রিজার্ভ: ৪.০%' }
    ]
  },
  dueDiligence: {
    strengths: [
      { en: 'Strong community roots & disability-led organization directly representing the community.', bn: 'তৃণমূল পর্যায়ে সুদৃঢ় ভিত্তি এবং প্রতিবন্ধী ব্যক্তিদের নিজস্ব নেতৃত্বে পরিচালিত সংস্থা।' },
      { en: 'Holistic rights-based approach integrating education, health, and dignity.', bn: 'শিক্ষা, স্বাস্থ্য ও মানবিক মর্যাদার সমন্বয়ে অধিকারভিত্তিক কার্যক্রম।' },
      { en: 'Perfect strategic alignment with SCT Pillar 1 and Pillar 4.', bn: 'শাহীন কেয়ার্স ট্রাস্টের ১ম ও ৪র্থ স্তম্ভের লক্ষ্যমাত্রার সাথে শতভাগ সঙ্গতিপূর্ণ।' },
      { en: 'Clear, verifiable beneficiary targets (75 children + 100 therapy recipients).', bn: 'সুনির্দিষ্ট ও যাচাইযোগ্য সুবিধাভোগী সংখ্যা (৭৫ শিশু + ১০০ থেরাপি গ্রহীতা)।' }
    ],
    gaps: [
      { en: 'Historical absence of formal baseline and digital outcome indicators.', bn: 'পূর্বে ডিজিটাল অগ্রগতি ট্র্যাকিং ও বৈজ্ঞানিক বেসলাইন তথ্যের সীমাবদ্ধতা।' },
      { en: 'Heavy past reliance on ad-hoc individual donations.', bn: 'পূর্বে অনিয়মিত ব্যক্তিগত অনুদানের ওপর অতিরিক্ত নির্ভরশীলতা।' },
      { en: 'Need for formal registration pathway and policy documentation.', bn: 'দীর্ঘমেয়াদী প্রাতিষ্ঠানিক নিবন্ধন ও কমপ্লায়েন্স পলিসির পরিবর্ধন প্রয়োজন।' }
    ],
    manageableRisks: [
      { en: 'Donor funding volatility — mitigated through multi-year SCT commitment.', bn: 'অনুদানের অনিশ্চয়তা — এসসিটি-র ৩ বছরের নিশ্চিত অর্থায়নের মাধ্যমে সুরক্ষিত।' },
      { en: 'Staff turnover in specialized therapy — mitigated through competitive honors & training.', bn: 'থেরাপিস্টদের স্থান পরিবর্তন — সম্মানজনক ভাতা ও উন্নত প্রশিক্ষণের মাধ্যমে সমাধান।' },
      { en: 'Beneficiary demand exceeding center capacity — mitigated through phased batching.', bn: 'অতিরিক্ত চাহিদা — পর্যায়ক্রমিক শিফট ও কমিউনিটি হোম-কেয়ার ব্যবস্থার মাধ্যমে সমাধান।' }
    ],
    recommendation: {
      en: 'Fundable with strengthened M&E framework, sustainability plan, and outcome tracking. Shaheen Cares Trust provides the structural partnership required for generational impact.',
      bn: 'সুদৃঢ় ফলাফল পর্যবেক্ষণ (M&E), টেকসই পরিকল্পনা ও স্বচ্ছ হিসাবের শর্তে শতভাগ সমর্থনযোগ্য। শাহীন কেয়ার্স ট্রাস্ট এই দীর্ঘস্থায়ী পরিবর্তনের জন্য প্রাতিষ্ঠানিক পৃষ্ঠপোষক হিসেবে পাশে দাঁড়িয়েছে।'
    }
  }
};

// ========================================================
// 4. STRATEGY 2026–2031 DATA
// ========================================================
export const sctStrategyData: StrategyData = {
  timeframe: '2026–2031',
  title: {
    en: 'Five-Year Strategic Plan & Action Framework',
    bn: 'পাঁচ বছর মেয়াদী কৌশলগত পরিকল্পনা ও কর্মকাঠামো'
  },
  subtitle: {
    en: 'Building Care Systems, Knowledge Hubs, and Sustainable Intergenerational Impact across Bangladesh',
    bn: 'সারা বাংলাদেশে টেকসই কেয়ার ইকোসিস্টেম, নলেজ হাব ও আন্তঃপ্রজন্মীয় সামাজিক প্রভাব সৃষ্টি'
  },
  strategicApproaches: [
    {
      id: 1,
      title: { en: 'Develop Care Systems', bn: 'কেয়ার সিস্টেম ও ইকোসিস্টেম তৈরি' },
      description: {
        en: 'Moving beyond piecemeal charity to construct a comprehensive care ecosystem for vulnerable populations—children, elderly persons, and persons with disabilities.',
        bn: 'সাময়িক ত্রাণের ঊর্ধ্বে উঠে শিশু, প্রবীণ ও প্রতিবন্ধী ব্যক্তিদের জন্য একটি সমন্বিত ও দীর্ঘমেয়াদী যত্ন ব্যবস্থা গড়ে তোলা।'
      },
      iconName: 'Cpu',
      bullets: [
        { en: 'Multi-sectoral care bridging health, education, and social protection', bn: 'স্বাস্থ্য, শিক্ষা ও সামাজিক সুরক্ষার সমন্বিত রূপরেখা' },
        { en: 'Trained human resource pipelines (professional youth caregivers)', bn: 'দক্ষ ও পেশাদার কেয়ারগিভার কর্মী বাহিনী তৈরি' },
        { en: 'Public-private collaborations and cross-sector philanthropy', bn: 'সরকারি-বেসরকারি অংশীদারিত্ব ও উদ্ভাবনী অনুদান মডেল' }
      ]
    },
    {
      id: 2,
      title: { en: 'Create a Knowledge Base & Hubs', bn: 'নলেজ হাব ও গবেষণা তথ্যভাণ্ডার' },
      description: {
        en: 'Preserving, developing, and disseminating field data, case studies, and empirical research on special needs, elderly care, and skills development.',
        bn: 'বিশেষ চাহিদাসম্পন্ন শিশু, প্রবীণ সেবা ও যুব দক্ষতা সম্পর্কিত মাঠপর্যায়ের উপাত্ত, কেস স্টাডি ও গবেষণার স্থায়ী সংরক্ষণ ও প্রচার।'
      },
      iconName: 'Database',
      bullets: [
        { en: 'Open data and evidence-based policy briefs for policymakers', bn: 'নীতি-নির্ধারকদের জন্য উন্মুক্ত উপাত্ত ও গবেষণা দলিল' },
        { en: 'Resource points accessible to urban and rural grassroots NGOs', bn: 'শহর ও প্রান্তিক এলাকার স্থানীয় সংস্থার জন্য সহজলভ্য নলেজ পয়েন্ট' },
        { en: 'Storytelling archives recording transformative human journeys', bn: 'জীবন বদলে যাওয়ার গল্প ও অভিজ্ঞতার ভিডিও/টেক্সট আর্কাইভ' }
      ]
    },
    {
      id: 3,
      title: { en: 'Use of Innovation & Technology', bn: 'প্রযুক্তি ও উদ্ভাবনের প্রয়োগ' },
      description: {
        en: 'Deploying digital progress tracking, assistive tech, tele-therapy consultation, and transparent digital finance to maximize efficiency.',
        bn: 'ডিজিটাল ট্র্যাকিং, সহায়ক প্রযুক্তি, দূরবর্তী থেরাপি পরামর্শ এবং শতভাগ স্বচ্ছ আর্থিক প্রযুক্তির সমন্বয়।'
      },
      iconName: 'Zap',
      bullets: [
        { en: 'Real-time student progress & therapy clinical logs', bn: 'শিক্ষার্থীর অগ্রগতি ও থেরাপি সেশনের ডিজিটাল লগ' },
        { en: 'Affordable open-source assistive device innovations', bn: 'সহজলভ্য ওপেন-সোর্স সহায়ক প্রযুক্তির উদ্ভাবন' },
        { en: 'Transparent, verifiable donor accountability platforms', bn: 'দাতাদের জন্য প্রতিটি অনুদানের স্বচ্ছ ট্র্যাকিং প্ল্যাটফর্ম' }
      ]
    },
    {
      id: 4,
      title: { en: 'Organizational Development', bn: 'প্রাতিষ্ঠানিক সক্ষমতা বৃদ্ধি' },
      description: {
        en: 'Strengthening internal systems, financial controls, and social enterprise models so grassroots nonprofits become self-sustaining.',
        bn: 'স্থানীয় অলাভজনক সংস্থাসমূহকে সুশাসন, আর্থিক নিয়ন্ত্রণ ও সামাজিক ব্যবসার মাধ্যমে স্বয়ংসম্পূর্ণ করা।'
      },
      iconName: 'Building2',
      bullets: [
        { en: 'Reduction of long-term dependence on erratic donor funding', bn: 'অনিশ্চিত অনুদানের ওপর পরনির্ভরশীলতা হ্রাস' },
        { en: 'Rigorous financial governance and Chartered Accountant audits', bn: 'চার্টার্ড অ্যাকাউন্ট্যান্টস দ্বারা কঠোর বাৎসরিক অডিট' },
        { en: 'Institutional safeguarding and child protection compliance', bn: 'শিশু ও ঝুঁকিপূর্ণ জনগোষ্ঠীর নিরাপত্তা নীতিমালা নিশ্চিতকরণ' }
      ]
    },
    {
      id: 5,
      title: { en: 'Integrated Expert Pool', bn: 'সমন্বিত বিশেষজ্ঞ পুল' },
      description: {
        en: 'Engaging trustees, sector specialists, international researchers, and alumni leaders to continuously learn, unlearn, and relearn.',
        bn: 'ট্রাস্টি, বিশেষজ্ঞ চিকিৎসক, গবেষক ও আন্তর্জাতিক বিশেষজ্ঞদের সমন্বয়ে নিয়মিত জ্ঞান বিনিময় ও কৌশল হালনাগাদ।'
      },
      iconName: 'Users',
      bullets: [
        { en: 'Advisory councils for special needs, geriatrics, and employment', bn: 'বিশেষ শিশু, প্রবীণ চিকিৎসা ও কর্মসংস্থান বিষয়ক উপদেষ্টা পর্ষদ' },
        { en: 'Cross-pollination with leading global and local institutions', bn: 'দেশি-বিদেশি প্রথম সারির গবেষণা প্রতিষ্ঠানের সাথে নিবিড় যোগাযোগ' },
        { en: 'Pro-bono professional volunteerism from the Shaheen network', bn: 'শাহীন নেটওয়ার্ক থেকে বিভিন্ন খাতের পেশাজীবীদের নিঃস্বার্থ অবদান' }
      ]
    }
  ],
  coreObjectives: [
    {
      en: 'Empower children with special needs through accessible inclusive education, comprehensive clinical therapy, and adaptive vocational development.',
      bn: 'অন্তর্ভুক্তিমূলক শিক্ষা, নিয়মিত ক্লিনিক্যাল থেরাপি ও কর্মমুখী প্রশিক্ষণের মাধ্যমে বিশেষ শিশুদের সমাজে প্রতিষ্ঠিত করা।'
    },
    {
      en: 'Enhance youth employability with international-standard technical, digital, and caregiving skills connected directly to ethical livelihood opportunities.',
      bn: 'তরুণদের আন্তর্জাতিক মানের কারিগরি, তথ্যপ্রযুক্তি ও সেবামূলক দক্ষতায় দক্ষ করে মর্যাদাপূর্ণ কর্মসংস্থান নিশ্চিত করা।'
    },
    {
      en: 'Establish dignified and sustainable community-centered elderly care systems supported by compassionate, certified youth networks.',
      bn: 'প্রশিক্ষিত তরুণদের মাধ্যমে প্রবীণদের জন্য মর্যাদাপূর্ণ, স্থায়ী ও পরম মমতাময় সামাজিক যত্ন ব্যবস্থা গড়ে তোলা।'
    },
    {
      en: 'Promote intergenerational mentorship, empathy, and social cohesion across all age groups in urban and peri-urban Bangladesh.',
      bn: 'প্রজন্মের ব্যবধান ঘুচিয়ে প্রবীণ, তরুণ ও শিশুদের মধ্যে পারস্পরিক সহমর্মিতা, শ্রদ্ধা ও সংহতি সুদৃঢ় করা।'
    },
    {
      en: 'Support the institutional resilience, governance capacity, and long-term financial self-reliance of grassroots social institutions.',
      bn: 'তৃণমূল সামাজিক সংস্থাসমূহের সুশাসন, প্রাতিষ্ঠানিক স্থায়িত্ব ও আর্থিক স্বয়ংসম্পূর্ণতা অর্জন নিশ্চিত করা।'
    }
  ],
  theoryOfChange: {
    ifStatements: [
      {
        en: 'Children with special needs receive inclusive education and integrated services (therapy, nutrition, assistive devices);',
        bn: 'যদি বিশেষ চাহিদাসম্পন্ন শিশুরা অন্তর্ভুক্তিমূলক শিক্ষা এবং থেরাপি, পুষ্টি ও সহায়ক সরঞ্জামের সমন্বিত সেবা পায়;'
      },
      {
        en: 'Youth gain market-relevant vocational, digital, and caregiving skills with real economic opportunities;',
        bn: 'যদি তরুণরা বাজারচাহিদা সম্পন্ন দক্ষতা ও বাস্তব কর্মসংস্থানের কার্যকর সুযোগ লাভ করে;'
      },
      {
        en: 'Elderly persons receive dignified, system-centered, and community-based healthcare and companionship;',
        bn: 'যদি প্রবীণ নাগরিকগণ মর্যাদাপূর্ণ, প্রাতিষ্ঠানিক ও আন্তরিক সামাজিক যত্ন লাভ করেন;'
      },
      {
        en: 'Community institutions are strengthened through transparent governance, knowledge management, and social enterprise;',
        bn: 'এবং যদি তৃণমূল সামাজিক সংস্থাসমূহ সুশাসন, জ্ঞান ব্যবস্থাপনা ও টেকসই আয়ের মাধ্যমে শক্তিশালী হয়;'
      }
    ],
    thenStatement: {
      en: 'Communities will become genuinely inclusive, resilient, and socially cohesive—where children, youth, adults, and elderly persons mutually support one another with dignity and shared responsibility.',
      bn: 'তাহলে সমাজ সত্যিকার অর্থেই অন্তর্ভুক্তিমূলক, দুর্যোগ-সহনশীল ও সংহতিপূর্ণ হয়ে উঠবে—যেখানে শিশু, তরুণ, প্রাপ্তবয়স্ক ও প্রবীণরা পরস্পরের পাশে দাঁড়িয়ে মর্যাদাপূর্ণ জীবনযাপন করবে।'
    },
    becauseStatements: [
      {
        en: 'Integrated intergenerational care strengthens human capital and social safety nets;',
        bn: 'কারণ সমন্বিত আন্তঃপ্রজন্মীয় ব্যবস্থা মানবসম্পদ ও সামাজিক নিরাপত্তাবেষ্টনীকে মজবুত করে;'
      },
      {
        en: 'Systemic capacity building transforms temporary relief into permanent self-reliance;',
        bn: 'কারণ প্রাতিষ্ঠানিক সক্ষমতা সাময়িক অনুদানকে স্থায়ী স্বাবলম্বীকরণে রূপান্তর করে;'
      },
      {
        en: 'Shared community purpose bridges demographic divides and builds enduring solidarity.',
        bn: 'কারণ যৌথ সামাজিক লক্ষ্য প্রজন্মগত বিভেদ দূর করে অটুট সামাজিক ঐক্য গড়ে তোলে।'
      }
    ]
  },
  pathwaysOfChange: [
    {
      id: 1,
      title: { en: 'Inclusion Pathway', bn: 'অন্তর্ভুক্তি পথরেখা' },
      subtitle: { en: 'Special Needs Potential & Independence', bn: 'বিশেষ সক্ষমতা ও স্বাবলম্বিতা' },
      description: {
        en: 'Access to inclusive education, developmental therapy, and assistive tech directly unlocks the latent human potential, participation, and future self-reliance of children with special needs.',
        bn: 'অন্তর্ভুক্তিমূলক শিক্ষা, থেরাপি ও সহায়ক সরঞ্জামের সহজলভ্যতা সরাসরি বিশেষ চাহিদাসম্পন্ন শিশুর সুপ্ত প্রতিভা, সমাজে অংশগ্রহণ ও ভবিষ্যৎ স্বাবলম্বী হওয়ার সুযোগ তৈরি করে।'
      },
      iconName: 'Accessibility'
    },
    {
      id: 2,
      title: { en: 'Economic Empowerment Pathway', bn: 'অর্থনৈতিক ক্ষমতায়ন পথরেখা' },
      subtitle: { en: 'Youth Skills & Dignified Careers', bn: 'যুব দক্ষতা ও মর্যাদাপূর্ণ ক্যারিয়ার' },
      description: {
        en: 'Equipping youth with internationally benchmarked technical, digital, and healthcare-caregiving certifications translates directly into sustainable employment, household income, and resilience.',
        bn: 'তরুণদের আন্তর্জাতিক মানের কারিগরি, ডিজিটাল ও কেয়ারগিভিং দক্ষতার সনদ প্রদান সরাসরি পরিবারে আয় বৃদ্ধি ও টেকসই কর্মসংস্থানের সুযোগ সৃষ্টি করে।'
      },
      iconName: 'TrendingUp'
    },
    {
      id: 3,
      title: { en: 'Care Economy Pathway', bn: 'কেয়ার ইকোনমি পথরেখা' },
      subtitle: { en: 'Elderly Dignity & Demographics', bn: 'প্রবীণ মর্যাদা ও যত্ন ব্যবস্থা' },
      description: {
        en: 'Community-based elderly care models supported by trained youth caregivers reinforce human dignity, mitigate social loneliness, and proactively address Bangladesh’s shifting demographic aging curve.',
        bn: 'প্রশিক্ষিত তরুণদের পরিচালিত কমিউনিটি প্রবীণ সেবা প্রবীণদের একাকীত্ব দূর করে, মর্যাদা রক্ষা করে এবং ক্রমবর্ধমান বার্ধক্যজনিত চাহিদা পূরণ করে।'
      },
      iconName: 'HeartHandshake'
    },
    {
      id: 4,
      title: { en: 'Social Cohesion Pathway', bn: 'সামাজিক সংহতি পথরেখা' },
      subtitle: { en: 'Intergenerational Mentorship', bn: 'আন্তঃপ্রজন্মীয় মেন্টরশিপ ও ঐক্য' },
      description: {
        en: 'Connecting retired elders, working professionals, and passionate youth through shared service and structured mentorship builds mutual empathy, trust, volunteerism, and social capital.',
        bn: 'প্রবীণ, পেশাজীবী ও তরুণদের যৌথ সমাজসেবা ও মেন্টরশিপের মাধ্যমে যুক্ত করা সমাজে পারস্পরিক আস্থা, সহমর্মিতা ও সেবার মনোভাব জাগ্রত করে।'
      },
      iconName: 'Users'
    },
    {
      id: 5,
      title: { en: 'Sustainability Pathway', bn: 'টেকসই স্থায়িত্ব পথরেখা' },
      subtitle: { en: 'Institutional Self-Reliance', bn: 'প্রাতিষ্ঠানিক স্বয়ংসম্পূর্ণতা' },
      description: {
        en: 'Upgraded organizational governance, digitized bookkeeping, and small social-enterprise engines enable partner NGOs to endure far beyond short-term project grant timelines.',
        bn: 'সুশাসন, ডিজিটাল হিসাবরক্ষণ ও ক্ষুদ্র সামাজিক উদ্যোগ সহযোগী এনজিওগুলোকে ক্ষণস্থায়ী অনুদানের মুখাপেক্ষী না রেখে যুগের পর যুগ সেবা চালু রাখতে সক্ষম করে।'
      },
      iconName: 'ShieldCheck'
    }
  ],
  resultsFramework: [
    {
      stage: '01',
      label: { en: 'Inputs', bn: 'উপাদান ও বিনিয়োগ' },
      description: { en: 'Resources, capital, and people brought into the ecosystem', bn: 'কার্যক্রমে নিয়োজিত মূলধন, প্রযুক্তি ও জনবল' },
      items: [
        { en: 'Multi-Year Philanthropic & CSR Funding', bn: 'বহু-বার্ষিক সিএসআর ও দানশীল তহবিল' },
        { en: 'Shaheen Alumni Pro-Bono Professional Expertise', bn: 'শাহীন অ্যালামনাইদের পেশাদার স্বেচ্ছাসেবা' },
        { en: 'Trained Educators, Therapists & Caregivers', bn: 'প্রশিক্ষিত শিক্ষক, থেরাপিস্ট ও কেয়ারগিভার' },
        { en: 'Grassroots Community Infrastructure & Trust', bn: 'তৃণমূল কমিউনিটি অবকাঠামো ও মানুষের আস্থা' }
      ],
      iconName: 'Coins'
    },
    {
      stage: '02',
      label: { en: 'Activities', bn: 'কার্যক্রম ও সেবা' },
      description: { en: 'Concrete field interventions and operational actions', bn: 'মাঠপর্যায়ে বাস্তবায়িত সুনির্দিষ্ট কর্মসূচি' },
      items: [
        { en: 'Inclusive Classrooms & Daily Therapy Sessions', bn: 'অন্তর্ভুক্তিমূলক ক্লাসরুম ও দৈনিক থেরাপি' },
        { en: 'Youth Vocational & Caregiving Certifications', bn: 'যুব কারিগরি ও কেয়ারগিভিং সার্টিফিকেট কোর্স' },
        { en: 'Elderly Daycare & Home Health Checkups', bn: 'প্রবীণ দিবাযত্ন ও নিয়মিত স্বাস্থ্য পরীক্ষা' },
        { en: 'NGO Digitization & Financial Governance Audits', bn: 'এনজিও ডিজিটাল হিসাবরক্ষণ ও আর্থিক অডিট' }
      ],
      iconName: 'Wrench'
    },
    {
      stage: '03',
      label: { en: 'Outputs', bn: 'প্রত্যক্ষ ফলাফল' },
      description: { en: 'Quantifiable direct deliverables produced', bn: 'পরিমাপযোগ্য প্রত্যক্ষ সেবা ও সংখ্যাগত অর্জন' },
      items: [
        { en: '75+ Special Needs Children in Regular School', bn: '৭৫+ বিশেষ শিশু নিয়মিত ক্লাসে উপস্থিত' },
        { en: '100+ Beneficiaries Receiving Regular Therapy', bn: '১০০+ সুবিধাভোগী নিয়মিত থেরাপি গ্রহীতা' },
        { en: 'Certified Youth Workforce with Direct Jobs', bn: 'সনদপ্রাপ্ত তরুণদের সরাসরি কর্মসংস্থান' },
        { en: 'Functioning Grassroots Social Enterprises', bn: 'চালু হওয়া স্বয়ংসম্পূর্ণ ক্ষুদ্র সামাজিক উদ্যোগ' }
      ],
      iconName: 'CheckSquare'
    },
    {
      stage: '04',
      label: { en: 'Outcomes', bn: 'মধ্যবর্তী প্রভাব' },
      description: { en: 'Short-to-medium term systemic behavioral shifts', bn: 'সমাজ ও আচরণে দৃশ্যমান ইতিবাচক পরিবর্তন' },
      items: [
        { en: 'Enhanced Child Independence & Functional Mobility', bn: 'শিশুর আত্মবিশ্বাস ও চলাচলের সক্ষমতা বৃদ্ধি' },
        { en: 'Sustained Household Incomes for Vulnerable Families', bn: 'বিপন্ন পরিবারের টেকসই পারিবারিক আয় বৃদ্ধি' },
        { en: 'Reduced Social Isolation Among Elderly Citizens', bn: 'প্রবীণদের একাকীত্ব ও নিঃসঙ্গতা হ্রাস' },
        { en: 'Decreased Community Stigma & Broad Acceptance', bn: 'প্রতিবন্ধিতা নিয়ে কুসংস্কার উল্লেখযোগ্যভাবে দূরীকরণ' }
      ],
      iconName: 'TrendingUp'
    },
    {
      stage: '05',
      label: { en: 'Impact', bn: 'চূড়ান্ত দীর্ঘমেয়াদী লক্ষ্য' },
      description: { en: 'High-level transformative generational change', bn: 'প্রজন্ম থেকে প্রজন্মে স্থায়ী রূপান্তর' },
      items: [
        { en: 'Inclusive, Resilient & Intergenerational Society', bn: 'অন্তর্ভুক্তিমূলক, সহনশীল ও আন্তঃপ্রজন্মীয় সমাজ' },
        { en: 'Universal Human Dignity Preserved Across Life Stages', bn: 'জীবনের প্রতিটি ধাপে মানুষের মৌলিক মর্যাদা প্রতিষ্ঠা' },
        { en: 'Sustainable, Self-Reliant Community Institutions', bn: 'পরনির্ভরশীলতামুক্ত স্বয়ংসম্পূর্ণ সামাজিক প্রতিষ্ঠান' }
      ],
      iconName: 'Award'
    }
  ],
  evaluationLifecycle: [
    {
      phase: '01',
      title: { en: 'Baseline Assessment', bn: 'বেসলাইন মূল্যায়ন' },
      desc: { en: 'Establishing rigorous benchmark indicators, beneficiary health logs, and community socio-economic metrics before project rollout.', bn: 'প্রকল্প শুরুর পূর্বে সুবিধাভোগীদের স্বাস্থ্য, শিক্ষা ও পরিবারের আর্থ-সামাজিক অবস্থার সুনির্দিষ্ট মাপকাঠি নির্ধারণ।' },
      timing: { en: 'Month 0–3', bn: '১ম থেকে ৩য় মাস' }
    },
    {
      phase: '02',
      title: { en: 'Quarterly Monitoring', bn: 'ত্রৈমাসিক তদারকি' },
      desc: { en: 'Real-time tracking of operational inputs, attendance, therapy session logs, and transparent budget utilization.', bn: 'প্রতি তিন মাস অন্তর ক্লাসের উপস্থিতি, থেরাপি সেশন ও বাজেট বরাদ্দের স্বচ্ছ তদারকি।' },
      timing: { en: 'Every 3 Months', bn: 'প্রতি ৩ মাস পর পর' }
    },
    {
      phase: '03',
      title: { en: 'Midline Review', bn: 'মধ্যবর্তী পর্যালোচনা' },
      desc: { en: 'Assessing institutional effectiveness, identifying curriculum gaps, and adapting strategies to local feedback.', bn: 'প্রকল্পের মাঝপথে কার্যকারিতা মূল্যায়ন এবং অভিজ্ঞতার আলোকে প্রয়োজনীয় কৌশলগত পরিবর্তন।' },
      timing: { en: 'Month 18', bn: '১৮তম মাস' }
    },
    {
      phase: '04',
      title: { en: 'Endline Evaluation', bn: 'চূড়ান্ত প্রভাব মূল্যায়ন' },
      desc: { en: 'Independent evaluation measuring literacy, physical rehabilitation milestones, family economic security, and stigma reduction.', bn: 'স্বাধীন বিশেষজ্ঞদের দ্বারা শিশুর বিকাশ, পারিবারিক আয় বৃদ্ধি ও কুসংস্কার দূরীকরণের পূর্ণাঙ্গ মূল্যায়ন।' },
      timing: { en: 'Month 36', bn: '৩৬তম মাস' }
    },
    {
      phase: '05',
      title: { en: 'Post-Project Sustainability Audit', bn: 'মেয়াদোত্তর স্থায়িত্ব নিরীক্ষা' },
      desc: { en: 'Reviewing partner NGO independence, revenue generation, and continued service delivery without external grants.', bn: 'বাহ্যিক অনুদান ছাড়াই সহযোগী সংস্থাটি স্বাধীনভাবে সেবা চালু রাখতে পারছে কি না তা পর্যালোচনা।' },
      timing: { en: 'Year 4 & 5', bn: '৪র্থ ও ৫ম বছর' }
    }
  ],
  strategicAlignment: [
    {
      category: { en: 'International Conventions & Frameworks', bn: 'আন্তর্জাতিক সনদ ও ফ্রেমওয়ার্ক' },
      frameworks: [
        { name: 'UN CRPD', details: { en: 'Convention on the Rights of Persons with Disabilities', bn: 'জাতিসংঘ প্রতিবন্ধী ব্যক্তিদের অধিকার সনদ' }, badge: 'Global Treaty' },
        { name: 'UN CRC', details: { en: 'Convention on the Rights of the Child (Child Protection & Education)', bn: 'জাতিসংঘ শিশু অধিকার সনদ' }, badge: 'Child Rights' },
        { name: 'MIPAA', details: { en: 'Madrid International Plan of Action on Ageing (Dignified Senior Care)', bn: 'মাদ্রিদ আন্তর্জাতিক প্রবীণ কর্মপরিকল্পনা' }, badge: 'Elderly Care' },
        { name: 'ILO No. 142', details: { en: 'Human Resources Development & Vocational Guidance Convention', bn: 'আইএলও কারিগরি দক্ষতা ও বৃত্তিমূলক সনদ ১৪২' }, badge: 'Decent Work' }
      ]
    },
    {
      category: { en: 'United Nations Sustainable Development Goals (SDGs)', bn: 'জাতিসংঘ টেকসই উন্নয়ন অভীষ্ট (এসডিজি)' },
      frameworks: [
        { name: 'SDG 1', details: { en: 'No Poverty: Asset grants, vocational training & sustainable livelihoods', bn: 'দারিদ্র্য বিমোচন: সম্পদ অনুদান ও টেকসই জীবিকায়ন' }, badge: 'Goal 1' },
        { name: 'SDG 3', details: { en: 'Good Health & Well-being: Therapy, healthcare access & elderly wellbeing', bn: 'সুস্বাস্থ্য ও কল্যাণ: থেরাপি ও প্রবীণ পরিচর্যা' }, badge: 'Goal 3' },
        { name: 'SDG 4', details: { en: 'Quality Education: Inclusive classrooms & adaptive special education', bn: 'গুণগত শিক্ষা: অন্তর্ভুক্তিমূলক ক্লাসরুম ও উপযোগী পাঠ' }, badge: 'Goal 4' },
        { name: 'SDG 8', details: { en: 'Decent Work & Economic Growth: Youth employability & caregiver jobs', bn: 'উপযুক্ত কাজ ও প্রবৃদ্ধি: যুব কর্মসংস্থান' }, badge: 'Goal 8' },
        { name: 'SDG 10', details: { en: 'Reduced Inequalities: Inclusion of disabled & marginalized communities', bn: 'অসমতা হ্রাস: প্রতিবন্ধী ও সুবিধাবঞ্চিতদের অন্তর্ভুক্তি' }, badge: 'Goal 10' },
        { name: 'SDG 11', details: { en: 'Sustainable Communities: Accessible infrastructure & solidarity', bn: 'টেকসই সমাজ: অন্তর্ভুক্তিমূলক গণঅবকাঠামো' }, badge: 'Goal 11' }
      ]
    },
    {
      category: { en: 'Bangladesh National Policies & Laws', bn: 'বাংলাদেশের জাতীয় আইন ও নীতিমালা' },
      frameworks: [
        { name: 'Disability Act 2013', details: { en: 'Rights and Protection of Persons with Disabilities Act of Bangladesh 2013', bn: 'প্রতিবন্ধী ব্যক্তির অধিকার ও সুরক্ষা আইন ২০১৩' }, badge: 'National Law' },
        { name: 'Trust Act 1882', details: { en: 'Established and legally governed under the Bangladesh Trust Act of 1882', bn: 'বাংলাদেশের ১৮৮২ সালের ট্রাস্ট আইনের অধীন নিবন্ধিত' }, badge: 'Legal Base' },
        { name: 'NSDP', details: { en: 'National Skills Development Policy (NSDP) for youth technical excellence', bn: 'জাতীয় দক্ষতা উন্নয়ন নীতি' }, badge: 'Youth Policy' },
        { name: 'NSSS', details: { en: 'National Social Security Strategy of Bangladesh (Universal Life-Cycle Care)', bn: 'জাতীয় সামাজিক নিরাপত্তা কৌশল' }, badge: 'Social Security' },
        { name: 'Vision 2041', details: { en: 'Perspective Plan of Bangladesh (2021–2041) towards an inclusive Smart Bangladesh', bn: 'বাংলাদেশ প্রেক্ষিত পরিকল্পনা (২০২১-২০৪১)' }, badge: 'National Vision' }
      ]
    }
  ]
};

// ========================================================
// 5. WHY JOIN US DATA
// ========================================================
export const sctWhyJoinUsData: WhyJoinUsData = {
  heroTitle: {
    en: 'Be a Part of Real Inclusion. Lasting Change.',
    bn: 'বাস্তব অন্তর্ভুক্তি ও স্থায়ী পরিবর্তনের অংশীদার হোন'
  },
  heroSubtitle: {
    en: 'Joining Shaheen Cares Trust means becoming part of a movement that works to create a more inclusive, dignified Bangladesh—where every person, including children and people with disabilities, has the opportunity to learn, participate, and flourish.',
    bn: 'শাহীন কেয়ার্স ট্রাস্টে যুক্ত হওয়া মানে এমন একটি আন্দোলনের অংশ হওয়া, যা সবার জন্য অন্তর্ভুক্তিমূলক ও মর্যাদাপূর্ণ বাংলাদেশ গড়তে কাজ করে—যেখানে প্রতিটি শিশু ও প্রতিবন্ধী মানুষ মর্যাদা নিয়ে বাঁচতে পারে।'
  },
  reasons: [
    {
      id: 1,
      title: { en: 'Make a Meaningful Difference', bn: 'অর্থপূর্ণ পার্থক্য তৈরি করুন' },
      desc: { en: 'Directly touch the lives of children and families through education, specialized therapy, vocational skills, and protective community care.', bn: 'শিক্ষা, নিয়মিত থেরাপি, বৃত্তিমূলক দক্ষতা ও সামাজিক মমতার মাধ্যমে শিশু ও পরিবারের জীবনে প্রত্যক্ষ আলো ছড়ান।' },
      iconName: 'Heart'
    },
    {
      id: 2,
      title: { en: 'Promote Inclusive Education', bn: 'অন্তর্ভুক্তিমূলক শিক্ষার প্রসার' },
      desc: { en: 'Ensure no child is left behind in a dark corner. Support equitable classrooms designed for diverse abilities and cognitive styles.', bn: 'কোনো শিশুই যেন পিছিয়ে না থাকে। প্রতিটি শিশুর মেধা ও সক্ষমতা অনুযায়ী শিক্ষার উপযুক্ত ক্লাসরুম গড়ে তুলুন।' },
      iconName: 'BookOpen'
    },
    {
      id: 3,
      title: { en: 'Build Inclusive Communities', bn: 'অন্তর্ভুক্তিমূলক সমাজ নির্মাণ' },
      desc: { en: 'Stand with local families, grassroots educators, and neighborhoods to create environments where stigma is replaced by respect.', bn: 'পরিবার ও সমাজকে সাথে নিয়ে কুসংস্কার ও বৈষম্য দূর করে এমন পরিবেশ গড়ুন যেখানে সবাই সম্মানিত।' },
      iconName: 'Users'
    },
    {
      id: 4,
      title: { en: 'Empower People for Independence', bn: 'স্বাবলম্বী হওয়ার সুযোগ সৃষ্টি' },
      desc: { en: 'Move beyond hand-to-mouth relief. Give young people and mothers the vocational tools, seed capital, and confidence to stand on their own feet.', bn: 'সাময়িক ত্রাণের ঊর্ধ্বে গিয়ে তরুণ ও মায়েদের কর্মসংস্থান, প্রশিক্ষণ ও পুঁজি দিয়ে নিজ পায়ে দাঁড়ানোর শক্তি দিন।' },
      iconName: 'Award'
    },
    {
      id: 5,
      title: { en: 'Stand for Protection & Rights', bn: 'অধিকার ও সুরক্ষায় পাশে দাঁড়ান' },
      desc: { en: 'Champion the constitutional rights, safety, assistive equipment, and dignity of marginalized persons with disabilities.', bn: 'সংবিধান ও আইনের আলোকে প্রতিবন্ধী ব্যক্তিদের সমান সুযোগ, নিরাপত্তা, সহায়ক উপকরণ ও অধিকার রক্ষায় সোচ্চার হোন।' },
      iconName: 'Shield'
    },
    {
      id: 6,
      title: { en: 'Grow Through Purposeful Work', bn: 'মহৎ কাজের মাধ্যমে আত্মবিকাশ' },
      desc: { en: 'Develop your own professional leadership, empathy, and perspectives by collaborating with our interdisciplinary expert pool.', bn: 'দেশি-বিদেশি বিশেষজ্ঞদের সাথে কাজ করে নিজের নেতৃত্ব, সহানুভূতি ও দৃষ্টিভঙ্গির ইতিবাচক বিকাশ ঘটান।' },
      iconName: 'Sparkles'
    }
  ],
  waysToEngage: [
    {
      role: { en: 'As a Volunteer', bn: 'স্বেচ্ছাসেবী হিসেবে' },
      desc: { en: 'Offer your time on the ground at our SPUS center, assist in weekend classes, organize events, or mentor youth.', bn: 'সাঁতারকুল সেন্টারে সময় দিন, উইকএন্ড ক্লাসে সহায়তা করুন, খেলাধুলা বা ইভেন্ট পরিচালনায় অংশ নিন।' },
      actionLabel: { en: 'Register as Volunteer', bn: 'স্বেচ্ছাসেবী হিসেবে নিবন্ধন' },
      iconName: 'HandHeart'
    },
    {
      role: { en: 'As an Advisor / Sector Expert', bn: 'উপদেষ্টা বা বিশেষজ্ঞ হিসেবে' },
      desc: { en: 'Doctors, pediatric therapists, lawyers, IT architects, and educators sharing professional insights with our team.', bn: 'চিকিৎসক, থেরাপিস্ট, আইনজীবী, আইটি বিশেষজ্ঞ বা শিক্ষাবিদ হিসেবে মূল্যবান পরামর্শ দিয়ে সহায়তা করুন।' },
      actionLabel: { en: 'Join Expert Pool', bn: 'বিশেষজ্ঞ পুলে যোগ দিন' },
      iconName: 'GraduationCap'
    },
    {
      role: { en: 'As a Strategic Partner', bn: 'কৌশলগত অংশীদার হিসেবে' },
      desc: { en: 'Corporates, foundations, NGOs, and educational institutions co-creating high-impact CSR and research programs.', bn: 'কর্পোরেট প্রতিষ্ঠান, এনজিও ও বিশ্ববিদ্যালয় যৌথ সিএসআর ও গবেষণা কার্যক্রমে একসাথে কাজ করতে পারেন।' },
      actionLabel: { en: 'Partner with SCT', bn: 'অংশীদারিত্ব প্রস্তাব দিন' },
      iconName: 'Building'
    },
    {
      role: { en: 'As a Supporter / Donor', bn: 'শুভানুধ্যায়ী বা দাতা হিসেবে' },
      desc: { en: 'Transparent contributions towards therapy sessions, wheelchair funds, nutritious meals, and student sponsorships.', bn: 'বিশেষ শিশুদের থেরাপি, পুষ্টিকর খাবার, হুইলচেয়ার তহবিল বা শিক্ষার্থী স্পনসরশিপে স্বচ্ছ অনুদান দিন।' },
      actionLabel: { en: 'Support the Cause', bn: 'সহযোগিতার হাত বাড়ান' },
      iconName: 'Heart'
    }
  ],
  closingQuote: {
    en: 'Your time. Your skills. Your compassion. Your contribution. No ask. No pressure. Just a shared hope that, together, we can build something that creates dignity, opportunity, and lasting good—for people, for communities, and for the country that raised us.',
    bn: 'আপনার সময়। আপনার মেধা। আপনার সহমর্মিতা। আপনার সমর্থন। কোনো চাপ নেই, কোনো কৃত্রিম বাধ্যবাধকতা নেই। শুধু একটি যৌথ প্রত্যয়—আমরা একসাথে এমন কিছু গড়ে তুলব যা মানুষের মর্যাদা, সুযোগ ও স্থায়ী কল্যাণ বয়ে আনবে আমাদের প্রিয় মাতৃভূমিতে।'
  }
};

// ========================================================
// 6. RESOURCES & REFERENCES DATA
// ========================================================
export const sctResourcesData: ResourceCategory[] = [
  {
    categoryTitle: { en: 'International Conventions & Frameworks', bn: 'আন্তর্জাতিক সনদ ও ফ্রেমওয়ার্ক' },
    iconName: 'Globe',
    description: { en: 'Key multilateral treaties and human rights agreements anchoring SCT strategy.', bn: 'জাতিসংঘ ও বৈশ্বিক সংস্থা কর্তৃক গৃহীত মূল মানবাধিকার ও উন্নয়ন চুক্তি।' },
    items: [
      {
        title: 'UN CRPD — Convention on the Rights of Persons with Disabilities',
        subtitle: { en: 'Adopted by UN General Assembly in 2006; ratified by Bangladesh in 2007.', bn: 'জাতিসংঘ সাধারণ পরিষদ কর্তৃক গৃহীত এবং বাংলাদেশ কর্তৃক ২০০৭ সালে অনুস্বাক্ষরিত।' },
        organization: 'United Nations',
        badge: 'Treaty'
      },
      {
        title: 'UN CRC — Convention on the Rights of the Child',
        subtitle: { en: 'Guiding legal framework for child protection, inclusive education, and child survival.', bn: 'শিশু সুরক্ষা, অন্তর্ভুক্তিমূলক শিক্ষা ও শিশুর অধিকার বিষয়ক আন্তর্জাতিক সনদ।' },
        organization: 'UNICEF / United Nations',
        badge: 'Treaty'
      },
      {
        title: 'UN SDGs — 2030 Agenda for Sustainable Development',
        subtitle: { en: 'Specifically targeting Goals 1 (No Poverty), 3 (Health), 4 (Education), 8 (Decent Work), 10 (Inequalities).', bn: 'এসডিজি লক্ষ্য ১, ৩, ৪, ৮ ও ১০ অর্জনে সক্রিয় অবদান।' },
        organization: 'United Nations General Assembly',
        badge: 'SDG Agenda'
      },
      {
        title: 'MIPAA — Madrid International Plan of Action on Ageing',
        subtitle: { en: 'Foundational framework for health, well-being, and social participation of older persons.', bn: 'প্রবীণদের সুস্বাস্থ্য ও মর্যাদাপূর্ণ সামাজিক অংশগ্রহণের রূপরেখা।' },
        organization: 'UN Department of Economic and Social Affairs (DESA)',
        badge: 'Elderly Plan'
      },
      {
        title: 'ILO Convention No. 142 — Human Resources Development',
        subtitle: { en: 'Vocational guidance and training systems for lifelong technical employability.', bn: 'আজীবন কারিগরি ও বৃত্তিমূলক দক্ষতা সংক্রান্ত আন্তর্জাতিক মান।' },
        organization: 'International Labour Organization (ILO)',
        badge: 'Labor Standard'
      }
    ]
  },
  {
    categoryTitle: { en: 'Bangladesh National Policies & Legal Frameworks', bn: 'বাংলাদেশের জাতীয় আইন ও নীতিমালা' },
    iconName: 'BookMarked',
    description: { en: 'Statutory laws and national perspective plans of the Government of Bangladesh.', bn: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন, বিধিমালা ও জাতীয় প্রেক্ষিত পরিকল্পনা।' },
    items: [
      {
        title: 'Trust Act of 1882 (Act No. II of 1882)',
        subtitle: { en: 'The governing statute under which Shaheen Cares Trust is formally created and regulated.', bn: 'আইন যার অধীনে শাহীন কেয়ার্স ট্রাস্ট আইনগতভাবে গঠিত ও পরিচালিত।' },
        organization: 'Government of Bangladesh / Ministry of Law',
        badge: 'Governing Law'
      },
      {
        title: 'Rights and Protection of Persons with Disabilities Act 2013',
        subtitle: { en: 'Statutory mandate ensuring non-discrimination, inclusive schooling, and accessibility in Bangladesh.', bn: 'বাংলাদেশে প্রতিবন্ধী ব্যক্তিদের বৈষম্যহীন শিক্ষা, কর্মসংস্থান ও অধিকারের আইনি সুরক্ষা।' },
        organization: 'Ministry of Social Welfare, Bangladesh',
        badge: 'National Act'
      },
      {
        title: 'National Skills Development Policy (NSDP)',
        subtitle: { en: 'National framework standardizing technical, vocational, and digital competencies for Bangladeshi youth.', bn: 'তরুণদের কারিগরি ও বৃত্তিমূলক দক্ষতাকে মানসম্মত করার জাতীয় ফ্রেমওয়ার্ক।' },
        organization: 'National Skills Development Authority (NSDA)',
        badge: 'Policy'
      },
      {
        title: 'National Social Security Strategy (NSSS) of Bangladesh',
        subtitle: { en: 'Life-cycle approach addressing childhood vulnerabilities, working-age disability, and old-age social security.', bn: 'জীবনচক্র ভিত্তিক সামাজিক নিরাপত্তা ও ভাতা সহায়তা সংক্রান্ত জাতীয় রূপরেখা।' },
        organization: 'Cabinet Division & Planning Commission, Bangladesh',
        badge: 'Strategy'
      },
      {
        title: 'Perspective Plan of Bangladesh 2021–2041 (Vision 2041)',
        subtitle: { en: 'Long-term strategic roadmap toward eradicating extreme poverty and building an inclusive, resilient nation.', bn: 'চরম দারিদ্র্য দূরীকরণ ও অন্তর্ভুক্তিমূলক বাংলাদেশ গড়ার দীর্ঘমেয়াদী কৌশল।' },
        organization: 'General Economics Division (GED), Planning Commission',
        badge: 'Perspective Plan'
      }
    ]
  },
  {
    categoryTitle: { en: 'Disability, Education & Child Protection Research', bn: 'প্রতিবন্ধিতা, শিক্ষা ও শিশু অধিকার গবেষণা' },
    iconName: 'FileText',
    description: { en: 'Empirical reports and sectoral studies on disability and schooling in Bangladesh.', bn: 'বাংলাদেশে প্রতিবন্ধিতা ও শিক্ষা সম্পর্কিত মাঠপর্যায়ের গবেষণা প্রতিবেদন।' },
    items: [
      {
        title: 'UNICEF Bangladesh — Children with Disabilities & Access to Education',
        subtitle: { en: 'Landmark baseline finding that >60% of children with disabilities in Bangladesh are excluded from school.', bn: 'বাংলাদেশে ৬০% এর বেশি প্রতিবন্ধী শিশু স্কুলের বাইরে থাকার গবেষণালব্ধ তথ্য।' },
        organization: 'UNICEF Bangladesh Country Office',
        badge: 'Research'
      },
      {
        title: 'World Bank — Disability Inclusion in South Asia Diagnostic Review',
        subtitle: { en: 'Economic dividends and developmental gains from assistive technology and inclusive infrastructure.', bn: 'সহায়ক প্রযুক্তি ও অন্তর্ভুক্তিমূলক অবকাঠামোর ইতিবাচক অর্থনৈতিক প্রভাব।' },
        organization: 'World Bank Group',
        badge: 'Report'
      },
      {
        title: 'Bangladesh Bureau of Statistics (BBS) — National Disability Survey',
        subtitle: { en: 'Demographic prevalence, socio-economic marginalization, and geographic mapping across Bangladesh.', bn: 'বাংলাদেশে প্রতিবন্ধী জনগোষ্ঠীর সামাজিক ও ভৌগোলিক জনমিতিক জরিপ।' },
        organization: 'Statistics and Informatics Division, Ministry of Planning',
        badge: 'Census Data'
      }
    ]
  },
  {
    categoryTitle: { en: 'Elderly Care, Demographics & Youth Employment', bn: 'প্রবীণ যত্ন, জনমিতি ও যুব কর্মসংস্থান গবেষণা' },
    iconName: 'Users2',
    description: { en: 'Demographic aging analyses and care economy studies in developing contexts.', bn: 'উন্নয়নশীল দেশে বার্ধক্য বৃদ্ধি ও কেয়ার ইকোনমি সম্পর্কিত বৈশ্বিক সমীক্ষা।' },
    items: [
      {
        title: 'WHO — Global Strategy and Action Plan on Ageing and Health',
        subtitle: { en: 'Integrated person-centered care models and long-term care systems for older populations.', bn: 'ব্যক্তিকেন্দ্রিক সমন্বিত স্বাস্থ্য ও দীর্ঘমেয়াদী পরিচর্যা রূপরেখা।' },
        organization: 'World Health Organization (WHO)',
        badge: 'Health Guide'
      },
      {
        title: 'UNFPA — Ageing in the Twenty-First Century: A Celebration and a Challenge',
        subtitle: { en: 'Analysis of intergenerational solidarity, healthcare access, and social pensions in developing Asia.', bn: 'এশিয়া অঞ্চলে আন্তঃপ্রজন্মীয় সংহতি ও সামাজিক নিরাপত্তা বিশ্লেষণ।' },
        organization: 'United Nations Population Fund (UNFPA)',
        badge: 'Global Study'
      },
      {
        title: 'OECD & ILO — The Future of the Care Economy & Youth Pathways',
        subtitle: { en: 'Emerging global demand for certified caregivers and dignified technical employment for youth.', bn: 'কেয়ার ইকোনমিতে তরুণদের দক্ষ কর্মসংস্থানের ক্রমবর্ধমান চাহিদা ও সুযোগ।' },
        organization: 'OECD / International Labour Organization',
        badge: 'Policy Brief'
      }
    ]
  },
  {
    categoryTitle: { en: 'Organizational & Historical Heritage References', bn: 'প্রাতিষ্ঠানিক ও ঐতিহাসিক ঐতিহ্য' },
    iconName: 'Award',
    description: { en: 'The institutional lineage and consultations establishing Shaheen Cares Trust.', bn: 'শাহীন কেয়ার্স ট্রাস্টের ভিত্তিপ্রস্তর ও পরামর্শ দলিল।' },
    items: [
      {
        title: 'BAF Shaheen College Dhaka (Class of 1989 Voluntary Legacy)',
        subtitle: { en: 'Over a decade of informal emergency relief, medical assistance, and flood aid led by Shaheen 89 alumni.', bn: 'শাহীন ৮৯ ব্যাচের এক দশকেরও বেশি সময়ের স্বেচ্ছাসেবী ও মানবিক কাজের ইতিহাস।' },
        organization: 'Shaheen Class of 1989 Initiatives (2014–2024)',
        badge: 'Heritage'
      },
      {
        title: 'SCT Strategy & Five-Year Action Plan (2026–2031)',
        subtitle: { en: 'Approved strategic deliberations, theory of change, and results framework by the Board of Trustees.', bn: 'ট্রাস্টি বোর্ড কর্তৃক অনুমোদিত ৫ বছর মেয়াদী কৌশলগত পরিকল্পনা ও রূপরেখা।' },
        organization: 'Shaheen Cares Trust Board of Trustees',
        badge: 'Official Doc'
      },
      {
        title: 'SPUS Project Due Diligence & Partnership Review Deck',
        subtitle: { en: 'Detailed 3-year baseline, BDT 13.27M budget allocation, and institutional strengthening framework.', bn: 'সাঁতারকুল প্রকল্পের বিস্তারিত ৩ বছর মেয়াদী প্রস্তাবিত বাজেট ও মূল্যায়ন দলিল।' },
        organization: 'SCT Project Review & Governance Secretariat',
        badge: 'Project Deck'
      }
    ]
  }
];
