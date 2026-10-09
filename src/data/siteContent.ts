import { SiteContent, AboutOrganization, MissionVisionData } from '../types';

export const initialSiteContent: SiteContent = {
  id: 'site_content_default',
  orgName: { en: 'Shaheen Cares Trust', bn: 'শাহীন কেয়ার্স ট্রাস্ট' },
  orgTagline: { en: 'Building a Dignified Future Together', bn: 'মর্যাদাপূর্ণ ভবিষ্যৎ গড়ি একসাথে' },
  regInfo: { en: 'Established under Trust Act of 1882 of Bangladesh', bn: 'বাংলাদেশের ১৮৮২ সালের ট্রাস্ট আইনের অধীনে নিবন্ধিত' },
  taxInfo: { en: 'Charitable & Humanitarian Initiative of the Shaheen Community', bn: 'শাহীন কমিউনিটির একটি দাতব্য ও মানবিক উদ্যোগ' },
  emergencyTicker: {
    en: 'ANNOUNCEMENT: Shaheen Cares Trust Inauguration on Friday, October 9, 2026 in Dhaka.',
    bn: 'বিজ্ঞপ্তি: আগামী শুক্রবার, ৯ই অক্টোবর, ২০২৬ ঢাকায় শাহীন কেয়ার্স ট্রাস্টের আনুষ্ঠানিক উদ্বোধন।'
  },
  hotline: { en: '+880 1805-099605', bn: '+880 ১৮০৫-০৯৯৬০৫' },
  email: { en: 'shaheencares@gmail.com', bn: 'shaheencares@gmail.com' },
  whatsapp: { en: '+880 1805-099605', bn: '+880 ১৮০৫-০৯৯৬০৫' },
  address: {
    en: 'House # 12/A, Road # 08, Gulshan-1, Dhaka-1212, Bangladesh',
    bn: 'হাউস # ১২/এ, রোড # ০৮, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ'
  },
  nav: {
    home: { en: 'Home', bn: 'হোম' },
    causes: { en: 'Our Five Pillars', bn: 'আমাদের ৫টি স্তম্ভ' },
    emergency: { en: 'SPUS', bn: 'SPUS' },
    zakat: { en: 'Impact & Measurement', bn: 'প্রভাব ও পরিমাপ' },
    gallery: { en: 'Media & Gallery', bn: 'মিডিয়া ও গ্যালারি' },
    photos: { en: 'Photo Gallery', bn: 'ছবি গ্যালারি' },
    videos: { en: 'Video Gallery', bn: 'ভিডিও গ্যালারি' },
    blogs: { en: 'Stories & News', bn: 'স্টোরি ও আপডেট' },
    news: { en: 'Press & News', bn: 'সংবাদ ও বিজ্ঞপ্তি' },
    sponsor: { en: 'Support a Cause', bn: 'সহযোগিতা করুন' },
    transparency: { en: 'Strategy 2026–2031', bn: 'কৌশলগত পরিকল্পনা' },
    volunteer: { en: 'Get Involved', bn: 'যুক্ত হন' },
    events: { en: 'Programs & Events', bn: 'ইভেন্ট ও কার্যক্রম' },
    donors: { en: 'Shaheen Community', bn: 'শাহীন কমিউনিটি' },
    aboutUs: { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
    missionVision: { en: 'Vision & Mission', bn: 'ভিশন ও মিশন' },
    chairmanMessage: { en: 'Chairperson Message', bn: 'চেয়ারপারসনের বাণী' },
    ceoMessage: { en: 'Our Purpose', bn: 'আমাদের উদ্দেশ্য' },
    boardOfTrustees: { en: 'Board of Trustees', bn: 'ট্রাস্টি বোর্ড' },
    staffMembers: { en: 'Expert Pool & Team', bn: 'এক্সপার্ট পুল ও টিম' },
    contact: { en: 'Contact Us', bn: 'যোগাযোগ' },
    donateNow: { en: 'Join SCT', bn: 'যুক্ত হন' },
    quickDonate: { en: 'Support SCT', bn: 'সহযোগিতা' },
    admin: { en: 'Admin Panel', bn: 'এডমিন প্যানেল' }
  },
  quickDonateWidget: {
    title: { en: 'Be a Part of Real Inclusion', bn: 'প্রকৃত অন্তর্ভুক্তির অংশ হন' },
    subtitle: { en: 'Your time, skills, and support build dignified futures for children with special needs and vulnerable communities.', bn: 'আপনার সময়, মেধা ও সমর্থন বিশেষ চাহিদাসম্পন্ন শিশু এবং অসহায় মানুষের জন্য মর্যাদাপূর্ণ ভবিষ্যৎ তৈরি করবে।' },
    frequency: {
      oneTime: { en: 'One-time', bn: 'একবার' },
      monthly: { en: 'Monthly', bn: 'মাসিক' }
    },
    amounts: [1000, 2500, 5000, 10000],
    customAmount: { en: 'Custom Amount', bn: 'অন্যান্য পরিমাণ' },
    selectPayment: { en: 'Support Focus', bn: 'সহযোগিতার খাত' },
    donateBtn: { en: 'Get Involved / Support Now', bn: 'যুক্ত হন / সমর্থন জানান' },
    secureBadge: { en: '100% Transparent & Dignified Community Service', bn: '১০০% স্বচ্ছ ও মর্যাদাপূর্ণ সামাজিক সেবা' }
  },
  counters: {
    meals: { en: '75', bn: '৭৫' },
    mealsLabel: { en: 'Children in Inclusive Education (SPUS)', bn: 'বিশেষ চাহিদাসম্পন্ন শিশু শিক্ষা' },
    wells: { en: '100', bn: '১০০' },
    wellsLabel: { en: 'Therapy & Rehab Beneficiaries', bn: 'থেরাপি ও পুনর্বাসন সুবিধাভোগী' },
    students: { en: '5', bn: '৫' },
    studentsLabel: { en: 'Core Strategic Pillars', bn: 'কৌশলগত মূল স্তম্ভ' },
    lives: { en: 'BDT 60 Lacs', bn: '৬০ লাখ টাকা' },
    livesLabel: { en: '3-Year Approved Project Budget (Oct 2026 – Oct 2029)', bn: '৩ বছর মেয়াদী অনুমোদিত প্রকল্প বাজেট' }
  },
  bankDetails: {
    bankName: { en: 'The City Bank PLC', bn: 'দি সিটি ব্যাংক পিএলসি' },
    accountName: { en: 'Shaheen Cares Trust', bn: 'শাহীন কেয়ার্স ট্রাস্ট' },
    accountNo: { en: '1254962668001', bn: '১২৫৪৯৬২৬৬৮০০১' },
    branch: { en: 'Gulshan Branch, Dhaka, Bangladesh', bn: 'গুলশান শাখা, ঢাকা, বাংলাদেশ' },
    routingNo: { en: '225261729', bn: '২২৫২৬১৭২৯' },
    swiftCode: { en: 'CIBLBDDH', bn: 'CIBLBDDH' }
  }
};

export const siteContent = initialSiteContent;

export const initialAboutData: AboutOrganization = {
  id: 'about_default',
  heroTitle: { en: 'From Friendship to Service — From Caring to Lasting Impact', bn: 'বন্ধুত্ব থেকে সেবা — যত্ন থেকে দীর্ঘস্থায়ী প্রভাব' },
  heroSubtitle: { en: 'Shaheen Cares Trust (SCT) is a charitable initiative of the Shaheen community, transforming "Once a Shaheen, Always a Shaheen" into meaningful service.', bn: 'শাহীন কেয়ার্স ট্রাস্ট (SCT) শাহীন কমিউনিটির একটি মানবিক উদ্যোগ, যা "ওয়ান্স এ শাহীন, অলওয়েজ এ শাহীন" চেতনাকে বাস্তব সেবায় রূপান্তর করে।' },
  overview: {
    en: "The spirit behind Shaheen Cares Trust began more than a decade ago, when members of the Shaheen community (mostly Class of 1989) stepped up for emergency medical assistance, school fees, winter drives, flood relief, and COVID-19 support. In late 2024, consultation began to make this impact structured and sustainable, culminating in the establishment of SCT under Bangladesh's Trust Act of 1882. The Trust will be inaugurated in Dhaka on Friday, October 9, 2026.",
    bn: 'শাহীন কেয়ার্স ট্রাস্টের পেছনের চেতনা এক দশকেরও বেশি আগে শুরু হয়েছিল (মূলত এসএসসি ১৯৮৯ ব্যাচ), যখন শাহীন সদস্যরা চিকিৎসা সহায়তা, শিক্ষার্থীদের ফি, শীতবস্ত্র বিতরণ, বন্যা ও করোনা ত্রাণ কাজে এগিয়ে আসেন। ২০২৪ সালের শেষের দিকে এটিকে স্থায়ী ও প্রাতিষ্ঠানিক রূপ দেওয়ার উদ্যোগ নেওয়া হয়, যার মাধ্যমে ১৮৮২ সালের ট্রাস্ট আইনের অধীনে SCT প্রতিষ্ঠিত হয়। ২০২৬ সালের ৯ই অক্টোবর (শুক্রবার) ঢাকায় এর আনুষ্ঠানিক উদ্বোধন অনুষ্ঠিত হবে।'
  },
  zakatPolicy: {
    en: 'Strategic care ecosystem developing sustainable care systems, knowledge hubs, and organizational capacity across Bangladesh.',
    bn: 'টেকসই যত্ন ব্যবস্থা, নলেজ হাব ও প্রাতিষ্ঠানিক সক্ষমতা বৃদ্ধির মাধ্যমে সুসংগঠিত মানবিক সেবা প্রদান।'
  },
  coreValues: [
    {
      title: { en: 'Children with Special Needs (2026–2029)', bn: 'বিশেষ চাহিদাসম্পন্ন শিশু (২০২৬–২০২৯)' },
      desc: { en: 'Pathways to greater skills, dignity, inclusion, and independence through strong partner organizations.', bn: 'অংশীদার সংস্থাসমূহের মাধ্যমে বিশেষ চাহিদাসম্পন্ন শিশুদের দক্ষতা, মর্যাদা ও অন্তর্ভুক্তির সুযোগ সৃষ্টি।' }
    },
    {
      title: { en: 'Youth Employability (2029–2030)', bn: 'যুব কর্মসংস্থান ও দক্ষতা (২০২৯–২০৩০)' },
      desc: { en: 'Equipping young people with internationally relevant skills and vocational career pathways.', bn: 'তরুণদের আন্তর্জাতিক মানের কারিগরি ও বৃত্তিমূলক দক্ষতায় দক্ষ করে গড়ে তোলা।' }
    },
    {
      title: { en: 'Elderly Care (2030 Onward)', bn: 'বয়স্কদের মর্যাদা ও যত্ন (২০৩০ থেকে)' },
      desc: { en: 'Dignified systems of care connected with empowered youth for intergenerational community support.', bn: 'বয়স্কদের জন্য সুসংগঠিত পরিচর্যা ব্যবস্থা এবং প্রবীণ-নবীন আন্তঃপ্রজন্মীয় বন্ধন তৈরি।' }
    },
    {
      title: { en: 'Organizational Sustainability', bn: 'সংস্থার প্রাতিষ্ঠানিক স্থায়িত্ব' },
      desc: { en: 'Helping nonprofits strengthen systems and reduce long-term dependence on traditional donations.', bn: 'অলাভজনক সংস্থাসমূহের প্রাতিষ্ঠানিক সক্ষমতা বাড়িয়ে অনুদান-নির্ভরতা কমানো।' }
    },
    {
      title: { en: 'Shaheen Community Care', bn: 'শাহীন কমিউনিটি সেবা' },
      desc: { en: 'Standing beside members of the wider Shaheen community and teachers in times of genuine need.', bn: 'শাহীন পরিবারের সদস্য ও সাবেক শিক্ষকদের বিপদে-আপদে পাশে দাঁড়ানো।' }
    },
    {
      title: { en: 'Systems & Intergenerational Approach', bn: 'সিস্টেম ও আন্তঃপ্রজন্মীয় পদ্ধতি' },
      desc: { en: 'Building interconnected knowledge, technology, and expert hubs across urban and rural communities.', bn: 'প্রযুক্তি ও বিষয়ভিত্তিক বিশেষজ্ঞ পুলের সমন্বয়ে টেকসই নলেজ হাব ও কেয়ার ইকোসিস্টেম তৈরি।' }
    }
  ],
  historyMilestones: [
    {
      year: '2014–2023',
      title: { en: 'A Decade of Quiet Service', bn: 'স্বেচ্ছাসেবী সেবার এক দশক' },
      desc: { en: 'Shaheen Class of 1989 led emergency medical assistance, student scholarships, flood, and COVID-19 relief drives.', bn: 'শাহীন ৮৯ ব্যাচের উদ্যোগে জরুরি চিকিৎসা সহায়তা, ছাত্রবৃত্তি, বন্যা ও করোনা মহামারীতে ত্রাণ বিতরণ কার্যক্রম।' }
    },
    {
      year: 'Late 2024',
      title: { en: 'Strategic Consultations & Research', bn: 'কৌশলগত পরামর্শ ও গবেষণা' },
      desc: { en: 'Consultation with sector experts, partner visits, and deliberations to design sustainable social impact.', bn: 'বিশেষজ্ঞদের পরামর্শ, অংশীদার সংস্থা পরিদর্শন ও দীর্ঘমেয়াদী কৌশল তৈরির উদ্যোগ।' }
    },
    {
      year: '2025–2026',
      title: { en: 'Establishment of Shaheen Cares Trust', bn: 'শাহীন কেয়ার্স ট্রাস্টের প্রতিষ্ঠা' },
      desc: { en: 'Formally registered under Bangladesh Trust Act 1882 and Strategy 2026–2031 finalized.', bn: 'বাংলাদেশের ট্রাস্ট আইন ১৮৮২-এর অধীনে ট্রাস্ট গঠন এবং ২০২৬–২০৩১ সালের কৌশলগত পরিকল্পনা তৈরি।' }
    },
    {
      year: 'Oct 9, 2026',
      title: { en: 'Official Trust Inauguration in Dhaka', bn: 'ঢাকায় ট্রাস্টের আনুষ্ঠানিক উদ্বোধন' },
      desc: { en: 'Inauguration on Friday, October 9, 2026, bringing together Shaheens across Bangladesh and globally.', bn: 'শুক্রবার, ৯ই অক্টোবর ২০২৬ বিশ্বজুড়ে ছড়িয়ে থাকা শাহীনদের ঐক্যবদ্ধ করে ট্রাস্টের আনুষ্ঠানিক উদ্বোধন।' }
    },
    {
      year: '2026–2029',
      title: { en: 'SPUS Inclusive Education & Community Support', bn: 'এসপিইউএস অন্তর্ভুক্তিমূলক শিক্ষা ও সহায়তা' },
      desc: { en: '3-year project (October 2026 to October 2029) with implementing partner SPUS with approved budget of BDT 60 Lacs.', bn: 'বাস্তবায়ন সহযোগী সংস্থা সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থার সাথে ৩ বছর মেয়াদী (৬০ লাখ টাকা অনুমোদিত বাজেট) প্রকল্প।' }
    }
  ],
  stats: [
    { label: { en: 'Inclusive Education Beneficiaries', bn: 'অন্তর্ভুক্তিমূলক শিক্ষা শিক্ষার্থী' }, value: { en: '75', bn: '৭৫' } },
    { label: { en: 'Therapy & Rehabilitation Support', bn: 'থেরাপি ও পুনর্বাসন সুবিধাভোগী' }, value: { en: '100', bn: '১০০' } },
    { label: { en: 'Strategic Pillars (2026–2031)', bn: 'কৌশলগত স্তম্ভ' }, value: { en: '5 Pillars', bn: '৫টি স্তম্ভ' } },
    { label: { en: 'Project Approved Budget (3 Years)', bn: 'অনুমোদিত প্রকল্প বাজেট (৩ বছর)' }, value: { en: 'BDT 60 Lacs', bn: '৬০ লাখ টাকা' } }
  ]
};

export const initialMissionVisionData: MissionVisionData = {
  id: 'mission_vision_default',
  missionTitle: { en: 'Empowerment, Care Systems & Sustainable Impact', bn: 'ক্ষমতায়ন, সেবা ব্যবস্থা ও টেকসই প্রভাব' },
  missionDesc: { en: 'To create sustainable pathways to empowerment through strategic partnerships, skills development, dignified elderly care, and intergenerational community support across Bangladesh.', bn: 'কৌশলগত অংশীদারিত্ব, দক্ষতা উন্নয়ন, প্রবীণদের মর্যাদাপূর্ণ সেবা এবং আন্তঃপ্রজন্মীয় সামাজিক সহায়তার মাধ্যমে সারা বাংলাদেশে টেকসই ক্ষমতায়ন নিশ্চিত করা।' },
  missionPoints: [
    { en: 'System-centered care ecosystem for special needs, youth, and elders', bn: 'বিশেষ চাহিদাসম্পন্ন শিশু, যুব ও প্রবীণদের জন্য প্রাতিষ্ঠানিক সেবা ব্যবস্থা' },
    { en: 'Capacity building & financial sustainability for grassroots NGOs', bn: 'স্থানীয় এনজিও ও সামাজিক সংস্থার সক্ষমতা ও স্থায়িত্ব বৃদ্ধি' },
    { en: 'Integrated expert pool and knowledge hub development', bn: 'বিশেষজ্ঞদের সমন্বিত পুল এবং নলেজ হাব বা তথ্যকেন্দ্র স্থাপন' }
  ],
  visionTitle: { en: 'An Inclusive & Dignified Intergenerational Community', bn: 'অন্তর্ভুক্তিমূলক ও মর্যাদাপূর্ণ সহমর্মী সমাজ' },
  visionDesc: { en: 'An inclusive community where people of all generations — children, youth, adults, and older people — support one another with dignity, purpose, and compassion.', bn: 'এমন একটি অন্তর্ভুক্তিমূলক সমাজ যেখানে সকল প্রজন্মের মানুষ — শিশু, তরুণ, প্রাপ্তবয়স্ক ও প্রবীণগণ — মর্যাদা, উদ্দেশ্য ও সহমর্মিতার সাথে একে অপরকে সহযোগিতা করবে।' },
  visionPoints: [
    { en: 'Inclusive education and therapy for special needs children (Pillar 1)', bn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের অন্তর্ভুক্তিমূলক শিক্ষা ও থেরাপি (স্তম্ভ ১)' },
    { en: 'Internationally standard youth vocational skills & employment (Pillar 2)', bn: 'তরুণদের আন্তর্জাতিক মানের কারিগরি দক্ষতা ও কর্মসংস্থান (স্তম্ভ ২)' },
    { en: 'Dignified elderly care supported by trained youth networks (Pillar 3)', bn: 'প্রশিক্ষিত তরুণদের মাধ্যমে প্রবীণদের মর্যাদাপূর্ণ পরিচর্যা ব্যবস্থা (স্তম্ভ ৩)' }
  ],
  roadmapYear: '2031'
};

export const boardOfTrusteesData = [
  {
    role: { en: 'Chairperson', bn: 'চেয়ারপারসন' },
    name: { en: 'Data Magfur', bn: 'দাতা মাগফুর' }
  },
  {
    role: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' },
    name: { en: 'Sumana Binte Masud', bn: 'সুমানা বিনতে মাসুদ' }
  },
  {
    role: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' },
    name: { en: 'Anisuzzaman Naser Khan', bn: 'আনিসুজ্জামান নাসের খান' }
  },
  {
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    name: { en: 'Selin Sultana', bn: 'সেলিন সুলতানা' }
  },
  {
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    name: { en: 'Shahnaz Sharmeen', bn: 'শাহনাজ শারমীন' }
  },
  {
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    name: { en: 'Anirban Yasin Aftab', bn: 'অনির্বাণ ইয়াসিন আফতাব' }
  },
  {
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    name: { en: 'Rozana Rouf', bn: 'রোজানা রউফ' }
  },
  {
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    name: { en: 'M Mazedul Islam', bn: 'এম মাজহারুল ইসলাম' }
  },
  {
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    name: { en: 'Fazal Salahuddin Ahmad', bn: 'ফজল সালাহউদ্দিন আহমদ' }
  }
];