import { SiteContent, AboutOrganization, MissionVisionData } from '../types';

export const initialSiteContent: SiteContent = {
  id: 'site_content_default',
  orgName: { en: 'Humanity First BD', bn: 'হিউম্যানিটি ফাস্ট বিডি' },
  orgTagline: { en: 'Serving Humanity with Dignity & Transparency', bn: 'মর্যাদা ও স্বচ্ছতার সাথে মানবতার সেবা' },
  regInfo: { en: 'Registered under NGO Affairs Bureau Bangladesh (Reg No: 2847)', bn: 'এনজিও বিষয়ক ব্যুরো বাংলাদেশ নিবন্ধিত (রেজি নং: ২৮৪৭)' },
  taxInfo: { en: '100% Tax Exempted Charity under Section 44(4) of Income Tax Act', bn: 'আয়কর আইনের ৪৪(৪) ধারা অনুযায়ী ১০০% কর অব্যাহতির সুবিধাপ্রাপ্ত' },
  emergencyTicker: {
    en: 'ALERT: Urgent Flood Relief Campaign active in Sylhet & Feni — Emergency Medical Kits, Clean Water & Food Pack Distribution ongoing.',
    bn: 'জরুরি নোটিশ: সিলেট ও ফেনীতে বন্যা ত্রাণ তহবিল কার্যক্রম চলমান — চিকিৎসাসামগ্রী, বিশুদ্ধ পানি ও খাদ্য সামগ্রী বিতরণ করা হচ্ছে।'
  },
  hotline: { en: '+880 9612-445566', bn: '+880 ৯৬১২-৪৪৫৫৬৬' },
  email: { en: 'info@humanityfirstbd.org', bn: 'info@humanityfirstbd.org' },
  whatsapp: { en: '+880 1711-001122', bn: '+880 ১৭১১-০০১১২২' },
  address: {
    en: 'House 42, Road 11, Block D, Banani, Dhaka-1213, Bangladesh',
    bn: 'হাউস ৪২, রোড ১১, ব্লক ডি, বনানী, ঢাকা-১২১৩, বাংলাদেশ'
  },
  nav: {
    home: { en: 'Home', bn: 'হোম' },
    causes: { en: 'Causes & Campaigns', bn: 'প্রকল্প ও ক্যাম্পেইন' },
    emergency: { en: 'Flood Relief', bn: 'বন্যা ত্রাণ' },
    zakat: { en: 'Zakat Calculator', bn: 'যাকাত ক্যালকুলেটর' },
    gallery: { en: 'Media & Gallery', bn: 'মিডিয়া ও গ্যালারি' },
    photos: { en: 'Photo Gallery', bn: 'ছবি গ্যালারি' },
    videos: { en: 'Video Gallery', bn: 'ভিডিও গ্যালারি' },
    blogs: { en: 'Field Stories', bn: 'ফিল্ড স্টোরি' },
    news: { en: 'Press & News', bn: 'সংবাদ ও বিজ্ঞপ্তি' },
    sponsor: { en: 'Sponsor a Life', bn: 'একটি জীবন স্পন্সর করুন' },
    transparency: { en: 'Financial Integrity', bn: 'আর্থিক স্বচ্ছতা' },
    volunteer: { en: 'Become Volunteer', bn: 'স্বেচ্ছাসেবক হন' },
    events: { en: 'Drives & Events', bn: 'ইভেন্ট ও ড্রাইভ' },
    donors: { en: 'Featured Donors', bn: 'সম্মানিত দাতাগণ' },
    aboutUs: { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
    missionVision: { en: 'Mission & Vision', bn: 'লক্ষ্য ও উদ্দেশ্য' },
    chairmanMessage: { en: 'Chairman Message', bn: 'চেয়ারম্যানের বাণী' },
    ceoMessage: { en: 'MD / CEO Message', bn: 'ব্যবস্থাপনা পরিচালকের বাণী' },
    boardOfTrustees: { en: 'Board of Trustees', bn: 'ট্রাস্টি বোর্ড ও উপদেষ্টা' },
    staffMembers: { en: 'Our Team & Staff', bn: 'আমাদের টিম ও কর্মকর্তা' },
    contact: { en: 'Contact Us', bn: 'যোগাযোগ' },
    donateNow: { en: 'Donate Now', bn: 'দান করুন' },
    quickDonate: { en: 'Quick Donate', bn: 'দ্রুত দান' },
    admin: { en: 'Admin Panel', bn: 'এডমিন প্যানেল' }
  },
  quickDonateWidget: {
    title: { en: 'Make an Instant Impact', bn: 'তাত্ক্ষণিক প্রভাব ফেলুন' },
    subtitle: { en: 'Your small contribution brings hope to vulnerable families in Bangladesh.', bn: 'আপনার সামান্য অনুদান বাংলাদেশে অসহায় পরিবারের মাঝে আশা জাগায়।' },
    frequency: {
      oneTime: { en: 'One-time', bn: 'একবার' },
      monthly: { en: 'Monthly', bn: 'মাসিক' }
    },
    amounts: [500, 1000, 2500, 5000],
    customAmount: { en: 'Custom Amount', bn: 'অন্যান্য পরিমাণ' },
    selectPayment: { en: 'Payment Method', bn: 'পেমেন্ট মেথড' },
    donateBtn: { en: 'Donate Now with bKash / Card', bn: 'বিকাশ / কার্ডের মাধ্যমে দান করুন' },
    secureBadge: { en: '100% Encrypted & SSL Commerz Secured', bn: '১০০% নিরাপদ ও এসএসএল সমার্স সুরক্ষিত' }
  },
  counters: {
    meals: { en: '1,250,000+', bn: '১২,৫০,০০০+' },
    mealsLabel: { en: 'Emergency Meals Served', bn: 'খাদ্য সামগ্রী বিতরণ' },
    wells: { en: '1,840+', bn: '১,৮৪০+' },
    wellsLabel: { en: 'Clean Water Wells Built', bn: 'টিউবওয়েল ও গভীর নলকূপ' },
    students: { en: '12,500+', bn: '১২,৫০০+' },
    studentsLabel: { en: 'Children Educated', bn: 'শিক্ষার্থী সহায়তা' },
    lives: { en: '450,000+', bn: '৪,৫০,০০০+' },
    livesLabel: { en: 'Lives Positively Transformed', bn: 'উপকৃত মানুষ' }
  },
  bankDetails: {
    bankName: { en: 'BRAC Bank Limited', bn: 'ব্র্যাক ব্যাংক লিমিটেড' },
    accountName: { en: 'Humanity First Bangladesh Foundation', bn: 'হিউম্যানিটি ফাস্ট বাংলাদেশ ফাউন্ডেশন' },
    accountNo: { en: '1501204892018001', bn: '১৫০১২০৪৮৯২০১৮০০১' },
    branch: { en: 'Banani Branch, Dhaka', bn: 'বনানী শাখা, ঢাকা' },
    routingNo: { en: '060260783', bn: '০৬০২৬MD৮৩' },
    swiftCode: { en: 'BRACBDDH', bn: 'BRACBDDH' }
  }
};

export const siteContent = initialSiteContent;

export const initialAboutData: AboutOrganization = {
  id: 'about_default',
  heroTitle: { en: 'Serving Humanity with Dignity & Absolute Transparency', bn: 'মর্যাদা ও স্বচ্ছতার সাথে মানবতার সেবা' },
  heroSubtitle: { en: 'Registered under NGO Affairs Bureau Bangladesh (Reg No: 2847). Operating across all 64 districts, we deliver rapid disaster rescue, clean water wells, and child education.', bn: 'এনজিও বিষয়ক ব্যুরো বাংলাদেশ (রেজি নং: ২৮৪৭) নিবন্ধিত একটি অরাজনৈতিক ও নিরপেক্ষ মানবিক সহায়তা সংস্থা।' },
  overview: {
    en: 'We believe that humanitarian assistance must preserve the inherent dignity of every human being. Assistance is delivered not as a patronizing gesture, but as a fundamental right to health, clean water, and opportunity. Our strict 100% Zero-Overhead Zakat Policy guarantees that 100% of your Zakat funds are disbursed directly to verified eligible families without deducting any administrative expenses.',
    bn: 'আমরা বিশ্বাস করি কোনো সুবিধাবঞ্চিত মানুষ যেন করুণার পাত্র হিসেবে নিজেকে না দেখে। আমাদের প্রতিটি ত্রাণ ও বিতরণ ড্রাইভ সর্বোচ্চ আত্মমর্যাদা বজায় রেখে পরিচালিত হয়। আমাদের ১০০% যাকাত নীতি অনুযায়ী আপনার প্রদানকৃত যাকাতের পুরো টাকাই সরাসরি উপকারভোগীর হাতে পৌঁছে দেয়া হয়, কোনো প্রকার প্রশাসনিক খরচ না কেটে।'
  },
  zakatPolicy: {
    en: '100% Direct Distribution to Eight Quranic Beneficiary Categories with Zero Financial Leakage.',
    bn: 'কুরআনুল কারীমে বর্ণিত ৮টি খাতে কোনো প্রকার কাটছাট ছাড়াই ১০০% সরাসরি বণ্টন।'
  },
  coreValues: [
    {
      title: { en: '100% Zero-Overhead Zakat', bn: '১০০% প্রশাসনিক খরচবিহীন যাকাত' },
      desc: { en: 'Every taka of your Zakat goes directly to verified eligible families with full shariah compliance.', bn: 'আপনার প্রদত্ত যাকাতের পুরো টাকাই কোনো কাটিং ছাড়া সরাসরি উপকারভোগী পরিবারে পৌঁছানো হয়।' }
    },
    {
      title: { en: 'Absolute Financial Transparency', bn: 'সম্পূর্ণ আর্থিক স্বচ্ছতা' },
      desc: { en: 'Audited annually by chartered accountants and publicly published on our website.', bn: 'বার্ষিক হিসাব চার্টার্ড অ্যাকাউন্ট্যান্ট দ্বারা নিরীক্ষিত এবং নিয়মিত ওয়েবসাইটে প্রকাশিত।' }
    },
    {
      title: { en: 'Preserving Human Dignity', bn: 'মানবিক মর্যাদা রক্ষা' },
      desc: { en: 'Relief distribution is conducted respectfully without photo-shaming beneficiaries.', bn: 'উপকারভোগীদের সম্মান রক্ষা করে অত্যন্ত সুশৃঙ্খলভাবে সহায়তা প্রদান করা হয়।' }
    },
    {
      title: { en: 'Rapid Emergency Response', bn: 'দ্রুততম জরুরি উদ্ধারকাজ' },
      desc: { en: 'Emergency rescue speedboats deployed within 6 hours of disaster alerts in Sylhet & Feni.', bn: 'বন্যা উপদ্রুত এলাকায় ৬ ঘণ্টার মধ্যে স্পিডবোট ও রেসকিউ বোট নামানোর সক্ষমতা।' }
    },
    {
      title: { en: 'Community Empowerment', bn: 'স্থানীয় জনসম্পৃক্ততা' },
      desc: { en: 'Empowering local widow sewing groups and youth volunteer clubs in all 64 districts.', bn: 'স্থানীয় তরুণদের প্রশিক্ষিত করে স্বয়ংসম্পূর্ণ ভলান্টিয়ার ক্লাব তৈরি করা।' }
    },
    {
      title: { en: 'Environmental Sustainability', bn: 'পরিবেশবান্ধব স্থায়িত্ব' },
      desc: { en: 'Constructing solar-powered deep tube wells that run on clean green energy for 25+ years.', bn: 'সৌরবিদ্যুৎ চালিত নলকূপ যা দীর্ঘ ২৫ বছর গ্রামীণ জনগোষ্ঠীকে সুপেয় পানি জোগাবে।' }
    }
  ],
  historyMilestones: [
    {
      year: '2018',
      title: { en: 'Foundation Established in Banani, Dhaka', bn: 'বনানীতে কার্যক্রম শুরু' },
      desc: { en: 'Started with 50 volunteers providing winter blankets in Northern Bangladesh.', bn: '৫০ জন স্বেচ্ছাসেবী নিয়ে উত্তরাঞ্চলে শীতবস্ত্র বিতরণের মাধ্যমে যাত্রা শুরু।' }
    },
    {
      year: '2020',
      title: { en: 'COVID-19 Emergency Ration Response', bn: 'করোনা ভাইরাসজরুরি খাদ্য সহায়তা' },
      desc: { en: 'Distributed food packs to 150,000 lockdown-affected daily wage earners.', bn: 'দেড় লক্ষাধিক দিনমজুর ও দুস্থ পরিবারকে খাদ্য সামগ্রী ও স্বাস্থ্য সুরক্ষা সামগ্রী বিতরণ।' }
    },
    {
      year: '2022',
      title: { en: 'NGO Affairs Bureau Registration (Reg No: 2847)', bn: 'এনজিও বিষয়ক ব্যুরো কর্তৃক নিবন্ধন লাভ' },
      desc: { en: 'Obtained official government NGO certification and 100% tax exemption approval.', bn: 'সরকারি অনুমোদন ও আয়কর আইনের ৪ ৪(৪) ধারায় কর অব্যাহতি অনুমোদন।' }
    },
    {
      year: '2024',
      title: { en: 'Launch of Coastal Solar Tube Well Drive', bn: 'উপকূলীয় সুপেয় পানি প্রজেক্ট শুরু' },
      desc: { en: 'Built 250 deep solar wells in Satkhira, Khulna, and Barguna salinity zones.', bn: 'সাতক্ষীরা ও খুলনার লোনাপানি কবলিত এলাকায় ২৫০টি সোলার ডিপ টিউবওয়েল স্থাপন।' }
    },
    {
      year: '2026',
      title: { en: 'Sylhet & Feni Flood Fleet & 64-District Reach', bn: 'সিলেট ও ফেনী বন্যা উদ্ধার কাজ ও ৬৪ জেলায় বিস্তার' },
      desc: { en: 'Deployed emergency rescue speedboat fleet and crossed 1.2M meals distributed.', bn: 'নিজস্ব স্পিডবোট উদ্ধার বহর নামানো ও ১২ লক্ষাধিক খাদ্য বিতরণের মাইলফলক অর্জন।' }
    }
  ],
  stats: [
    { label: { en: 'Solar Water Wells', bn: 'উপকূলীয় সোলার টিউবওয়েল' }, value: { en: '450+', bn: '৪৫০+' } },
    { label: { en: 'Children Educated', bn: 'শিক্ষার্থী সহায়তা' }, value: { en: '12,500+', bn: '১২,৫০০+' } },
    { label: { en: 'Emergency Meals', bn: 'জরুরি খাদ্য সামগ্রী' }, value: { en: '1,250,000+', bn: '১২,৫০,০০০+' } },
    { label: { en: 'Active Volunteers', bn: 'সক্রিয় স্বেচ্ছাসেবী' }, value: { en: '12,000+', bn: '১২,০০০+' } }
  ]
};

export const initialMissionVisionData: MissionVisionData = {
  id: 'mission_vision_default',
  missionTitle: { en: 'Rapid Relief & Dignified Empowerment', bn: 'মানবতার কল্যাণ ও দ্রুততম পুনর্বাসন' },
  missionDesc: { en: 'To deliver rapid emergency relief within 6 hours of flood disasters, install 25-year solar deep tube wells in salt-affected coastal regions, and sponsor quality education for orphan children with 100% financial transparency.', bn: 'বাংলাদেশের নদীভাঙন, খরা ও বন্যায় বিপর্যস্ত পরিবারগুলোকে ৬ ঘণ্টার মধ্যে জরুরি খাদ্য ও উদ্ধার সুবিধা পৌঁছে দেয়া; উপকূলীয় এলাকায় বিশুদ্ধ খাবার পানির ১০০% নিরাপদ সোলার গভীর নলকূপ স্থাপন করা এবং এতিম ও পথশিশুদের বিনামূল্যে শিক্ষার সুব্যবস্থা করা।' },
  missionPoints: [
    { en: '64-District Emergency Rescue & Relief Fleet', bn: '৬৪ জেলায় দ্রুততম উদ্ধারকাজ ও স্পিডবোট বহর' },
    { en: '100% Zero-Overhead Direct Zakat Policy', bn: '১০০% প্রশাসনিক খরচমুক্ত যাকাত ব্যবস্থা' },
    { en: '100% Tax Exempted & Audited Financial Operations', bn: 'কর অব্যাহতিপ্রাপ্ত অডিটযোগ্য অনুদান ব্যবস্থা' }
  ],
  visionTitle: { en: 'A Resilient, Safe & Empowered Nation', bn: 'একটি সুপেয় পানি ও দারিদ্র্যমুক্ত বাংলাদেশ' },
  visionDesc: { en: 'By 2030, establish 10,000 solar deep water wells in coastal salinity zones, liberate 50,000 extreme poor families from extreme poverty through self-reliance, and educate 5,000 vulnerable children.', bn: '২০৩০ সালের মধ্যে বাংলাদেশের সকল লোনাপানি উপদ্রুত জেলায় ১০,০০০টি সোলার সুপেয় গভীর নলকূপ স্থাপন, ৫০,০০০ দুস্থ পরিবারকে স্বাবলম্বী করা এবং ৫,০০০ পথশিশুকে কারিগরি ও প্রাতিষ্ঠানিক শিক্ষার আওতায় আনা।' },
  visionPoints: [
    { en: '10,000 Coastal Solar Water Wells by 2030', bn: '১০,০০০ সুপেয় ডিপ নলকূপ প্রকল্প' },
    { en: '50,000 Self-Reliant Livelihoods', bn: '৫০,০০০ পরিবারের স্বাবলম্বীকরণ' },
    { en: 'Floating Mobile Health Clinic Fleet', bn: 'ফ্রি মোবাইল ডাক্তার ও হাসপাতাল বোট' }
  ],
  roadmapYear: '2030'
};

