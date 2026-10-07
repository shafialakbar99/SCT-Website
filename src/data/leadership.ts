import { Localized } from '../types';

export interface LeaderProfile {
  id: string;
  name: Localized;
  role: Localized;
  designation: Localized;
  imageUrl: string;
  bio: Localized;
  message?: Localized;
  quote?: Localized;
  email?: string;
  phone?: string;
  linkedin?: string;
  department?: string;
  joinedYear?: string;
}

export const chairmanData: LeaderProfile = {
  id: 'chairman-1',
  name: { en: 'Dr. Mushtaq Ahmed Chowdhury', bn: 'ড. মোশতাক আহমেদ চৌধুরী' },
  role: { en: 'Chairman, Board of Trustees', bn: 'চেয়ারম্যান, বোর্ড অফ ট্রাস্টিজ' },
  designation: { en: 'Founder & Chairman, Humanity First BD', bn: 'প্রতিষ্ঠাতা ও চেয়ারম্যান, হিউম্যানিটি ফাস্ট বিডি' },
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
  quote: {
    en: 'Charity is not merely a relief act; it is the fundamental restoration of human dignity and equal opportunity.',
    bn: 'দান কেবল কোনো তাৎক্ষণিক সাহায্য নয়; এটি মানুষের মৌলিক আত্মমর্যাদা ও সমান সুযোগ পুনর্দখলের আন্দোলন।'
  },
  bio: {
    en: 'Dr. Mushtaq Ahmed Chowdhury is a renowned Bangladeshi public health strategist, humanitarian scholar, and former Vice-Chair of BRAC. With over 35 years of global field leadership across South Asia and Africa, he founded Humanity First BD to deliver transparent, community-led, zero-overhead poverty alleviation and emergency disaster response.',
    bn: 'ড. মোশতাক আহমেদ চৌধুরী বাংলাদেশের খ্যাতনামা জনস্বাস্থ্য কৌশলবিদ, মানবতাবাদী গবেষক এবং ব্র্যাকের সাবেক ভাইস-চেয়ারম্যান। দক্ষিণ এশিয়া ও আফ্রিকায় দীর্ঘ ৩৫ বছরের মাঠপর্যায়ের অভিজ্ঞতা নিয়ে তিনি হিউম্যানিটি ফাস্ট বিডি প্রতিষ্ঠা করেন, যার মূল লক্ষ্য স্বচ্ছতা, স্থানীয় জনসম্পৃক্ততা এবং ১০০% জবাবদিহিতার মাধ্যমে দারিদ্র্য বিমোচন ও দুর্যোগ প্রশমন।'
  },
  message: {
    en: `Bismillahir Rahmanir Rahim.

Dear Donors, Volunteers, Well-Wishers, and Respected Citizens of Bangladesh,

Welcome to Humanity First BD. When we laid the foundation of this organization, our vision was simple yet profound: to create a trusted bridge of compassion where every taka contributed reaches the most deserving and vulnerable families in Bangladesh with absolute transparency and respect.

Bangladesh is a nation of incredible resilience. Yet, from coastal salinity in Satkhira to flash floods in Sylhet and Feni, millions of our brothers and sisters face sudden catastrophes that threaten their basic survival. True humanitarian work goes beyond distributing single emergency meals; it requires long-term empowerment through clean drinking water wells, primary education for street children, sustainable livelihoods for widows, and 100% verified Zakat distribution.

At Humanity First BD, we strictly adhere to zero financial leakage. Our audited financial reports, live field progress videos, and verifiable donor receipts ensure that your hard-earned wealth becomes a transformative force for good.

I extend my heartfelt gratitude to our global Bangladeshi diaspora, local corporate CSR partners, and passionate youth volunteers who stand on the frontlines day and night. Together, we can eradicate poverty, restore hope, and build a Bangladesh where no child sleeps hungry.

May Almighty Allah bless our sincere efforts.

Warmest regards,
Dr. Mushtaq Ahmed Chowdhury
Chairman, Board of Trustees
Humanity First BD`,
    bn: `বিসমিল্লাহির রহমানির রহিম।

শ্রদ্ধেয় সম্মানিত দাতাগণ, স্বেচ্ছাসেবী, শুভানুধ্যায়ী ও প্রিয় দেশবাসী,

হিউম্যানিটি ফাস্ট বিডি-এর পক্ষ থেকে আপনাদের আন্তরিক সালাম ও শুভেচ্ছা। আমরা যখন এই সংগঠনের যাত্রা শুরু করেছিলাম, আমাদের লক্ষ্য ছিল একটি সুদৃঢ় ও বিশ্বস্ত সেতু গড়ে তোলা—যেখানে আপনাদের কষ্টার্জিত প্রতিটি টাকা শতভাগ স্বচ্ছতা ও মানবিক মর্যাদার সাথে নদীভাঙন, বন্যা ও চরম দারিদ্র্যে আক্রান্ত মানুষের দোরগোড়ায় পৌঁছে যাবে।

আমাদের প্রিয় বাংলাদেশ সীমাহীন সম্ভাবনার দেশ, তবে ভৌগোলিক কারণে খরা, বন্যা ও দুর্যোগ আমাদের প্রান্তিক জনগোষ্ঠীকে বারবার বিপর্যস্ত করে। শুধু সাময়িক ত্রাণ বিতরণ করে স্থায়ী উন্নয়ন সম্ভব নয়; তাই আমরা বিশুদ্ধ খাবার পানির সুপেয় গভীর নলকূপ, পথশিশুদের বিনামূল্যে শিক্ষা, বিধবা ও এতিমদের স্বাবলম্বীকরণ এবং ১০০% শরীয়াহসম্মত যাকাত মডেলের মাধ্যমে দীর্ঘমেয়াদী ক্ষমতায়নে বিশ্বাস করি।

আমাদের সকল আর্থিক হিসাব নিরীক্ষিত এবং নিবন্ধিত। আপনাদের ভালোবাসা ও অনুদানই আমাদের মূল চালিকাশক্তি। আসুন, আমরা একসাথে এমন এক বাংলাদেশ গড়ে তুলি যেখানে ক্ষুধা, নিরক্ষরতা ও অনিশ্চয়তা দূর হবে।

মহান আল্লাহ আমাদের এই মানবিক প্রচেষ্টাকে কবুল করুন।

বিনীত,
ড. মোশতাক আহমেদ চৌধুরী
চেয়ারম্যান, বোর্ড অফ ট্রাস্টিজ
হিউম্যানিটি ফাস্ট বিডি`
  }
};

export const ceoData: LeaderProfile = {
  id: 'ceo-1',
  name: { en: 'Syeda Razia Begum', bn: 'সৈয়দা রাজিয়া বেগম' },
  role: { en: 'Managing Director & CEO', bn: 'ব্যবস্থাপনা পরিচালক ও সিইও' },
  designation: { en: 'Executive Director, Humanity First BD Operations', bn: 'নির্বাহী পরিচালক, হিউম্যানিটি ফাস্ট বিডি অপারেশন্স' },
  imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop',
  quote: {
    en: 'Speed, accountability, and empathy are the core pillars driving our field operations across all 64 districts.',
    bn: 'দ্রুত সাড়া প্রদান, নিখুঁত জবাবদিহিতা এবং সহানুভূতি—এই তিনটি স্তম্ভেই পরিচালিত হয় বাংলাদেশের ৬৪ জেলায় আমাদের সকল ফিল্ড কার্যক্রম।'
  },
  bio: {
    en: 'Syeda Razia Begum holds a Master in Development Studies from Sussex University and brings over 22 years of executive experience leading disaster risk reduction programs at UNICEF and Red Crescent Bangladesh. She leads Humanity First BD’s daily field operations, emergency speedboat fleets, and 12,000+ volunteer network.',
    bn: 'সাসেক্স ইউনিভার্সিটি থেকে ডেভেলপমেন্ট স্টাডিজে স্নাতকোত্তর ডিগ্রিধারী সৈয়দা রাজিয়া বেগম ইউনিসেফ এবং রেড ক্রিসেন্ট বাংলাদেশে ২২ বছর দুর্যোগ প্রশমন ও শিশু কল্যাণ কর্মসূচিতে নেতৃত্ব দিয়েছেন। তিনি হিউম্যানিটি ফাস্ট বিডির দৈনন্দিন মাঠপর্যায়ের কার্যক্রম, ইমার্জেন্সি রেসকিউ টিম এবং ১২,০০০+ স্বেচ্ছাসেবী নেটওয়ার্ক পরিচালনা করছেন।'
  },
  message: {
    en: `Warm Greetings to Everyone,

As the Managing Director and CEO of Humanity First BD, I am privileged to lead a dedicated team of field officers, emergency medical responders, and youth volunteers who serve on the frontlines of humanitarian action.

Our operational model is built on three unbreakable promises:
1. Rapid Emergency Response: Deploying relief boats and medical kits within 6 hours of flood warnings.
2. Verified Target Selection: Hand-picking beneficiary families through strict community baseline audits to prevent duplicate aid distribution.
3. Tech-Enabled Transparency: Providing real-time SMS alerts and photo/video proof for every campaign donation made by our supporters.

In 2025-2026 alone, our teams constructed 450+ solar-powered deep tube wells in coastal Satkhira & Khulna, fed over 1.2 million disaster survivors, and sponsored 1,200 orphan students. But our work is far from over.

We invite individuals, corporate bodies, and international partners to collaborate with us. Every single contribution—no matter how small—directly changes a life forever.

Thank you for trusting Humanity First BD as your charity partner of choice.

Warm regards,
Syeda Razia Begum
Managing Director & CEO
Humanity First BD`,
    bn: `সুপ্রিয় সুধীবৃন্দ,

হিউম্যানিটি ফাস্ট বিডির ব্যবস্থাপনা পরিচালক ও সিইও হিসেবে মাঠপর্যায়ে নিয়োজিত আমাদের সাহসী রেসকিউ টিম, চিকিৎসক এবং তরুণ স্বেচ্ছাসেবীদের নেতৃত্ব দিতে পেরে আমি গর্বিত।

আমাদের প্রতিটি মাঠপর্যায়ের কার্যক্রম পরিচালিত হয় তিনটি মূল প্রতিশ্রুতির ওপর:
১. দ্রুততম প্রতিক্রিয়া: দুর্যোগের প্রথম ৬ ঘণ্টার মধ্যেই ভাসমান স্পিডবোট ও মেডিকেল কিট পৌঁছানো।
২. প্রকৃত উপকারভোগী বাছাই: স্থানীয় যাচাই-বাছাই প্রক্রিয়ার মাধ্যমে সত্যিকারের নিঃস্ব পরিবারগুলোকে চিহ্নিত করা।
৩. ডিজিটাল স্বচ্ছতা: প্রতিটি অনুদানের ট্র্যাকিং ও ছবির মাধ্যমে নিশ্চিত তথ্যদাতাদের প্রদান করা।

বিগত বছরে আমরা ৪৫০টিরও বেশি উপকূলীয় সুপেয় নলকূপ স্থাপন করেছি, ১২ লক্ষাধিক মানুষকে পুষ্টিকর খাদ্য পৌঁছে দিয়েছি এবং ১,২০০ জন এতিম শিশুর শিক্ষার সার্বিক দায়িত্ব নিয়েছি।

আপনার সহযোগিতা ও ভালোবাসা নিয়ে আমরা সামনের দিনগুলোতে আরও বেশি মানুষের মুখে হাসি ফোটাতে প্রতিশ্রুতিবদ্ধ।

ধন্যবাদান্তে,
সৈয়দা রাজিয়া বেগম
ব্যবস্থাপনা পরিচালক ও সিইও
হিউম্যানিটি ফাস্ট বিডি`
  }
};

export const boardMembersData: LeaderProfile[] = [
  {
    id: 'bm-1',
    name: { en: 'Advocate Shamsul Alam', bn: 'এডভোকেট শামসুল আলম' },
    role: { en: 'Vice-Chairman & Legal Counsel', bn: 'ভাইস-চেয়ারম্যান ও লিগ্যাল কাউন্সিল' },
    designation: { en: 'Senior Advocate, Bangladesh Supreme Court', bn: 'সিনিয়র এডভোকেট, বাংলাদেশ সুপ্রিম কোর্ট' },
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop',
    bio: {
      en: 'Oversees NGO compliance, tax exemption certifications under Section 44(4), and legal governance for all charitable trusts.',
      bn: 'এনজিও ব্যুরো রেজিষ্ট্রেশন, আয়কর আইন অনুযায়ী ১০০% কর অব্যাহতি সার্টিফিকেশন এবং আইনি প্রক্রিয়া নিশ্চিত করেন।'
    }
  },
  {
    id: 'bm-2',
    name: { en: 'Prof. Dr. Farhana Yasmin', bn: 'অধ্যাপক ড. ফারহানা ইয়াসমিন' },
    role: { en: 'Trustee - Health & Medical Care', bn: 'ট্রাস্টি - স্বাস্থ্য ও চিকিৎসা বিষয়ক' },
    designation: { en: 'Former Head of Pediatrics, BSMMU Dhaka', bn: 'সাবেক প্রধান, শিশুরোগ বিভাগ, বিএসএমএমইউ' },
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop',
    bio: {
      en: 'Guides mobile health camps, child malnutrition intervention, and medical supply distribution in flood-hit regions.',
      bn: 'বন্যা উপদ্রুত অঞ্চলে ফ্রি মেডিকেল ক্যাম্প, পুষ্টিহীনতা দূরীকরণ ও বিনামূল্যে ওষুধ বিতরণ কার্যক্রম পরিচালনা করেন।'
    }
  },
  {
    id: 'bm-3',
    name: { en: 'Tariqul Islam FCA', bn: 'তারিকুল ইসলাম এফসিএ' },
    role: { en: 'Trustee & Treasurer', bn: 'ট্রাস্টি ও কোষাধ্যক্ষ' },
    designation: { en: 'Senior Partner, Rahman & Associates Chartered Accountants', bn: 'সিনিয়র পার্টনার, রহমান অ্যান্ড অ্যাসোসিয়েটস চার্টার্ড অ্যাকাউন্ট্যান্টস' },
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop',
    bio: {
      en: 'Ensures quarterly financial audits, Zakat segregation accounts, and strict anti-money laundering compliance.',
      bn: 'সংগঠনের বার্ষিক অডিট, যাকাত ফান্ড পৃথকীকরণ ও আন্তর্জাতিক আর্থিক বিধিমালা পর্যবেক্ষণ করেন।'
    }
  },
  {
    id: 'bm-4',
    name: { en: 'Dr. Shahabuddin Ahmed', bn: 'ড. শাহাবুদ্দিন আহমেদ' },
    role: { en: 'Trustee - Education & Youth Development', bn: 'ট্রাস্টি - শিক্ষা ও যুব উন্নয়ন' },
    designation: { en: 'Former Professor, Dhaka University Dept of Development Studies', bn: 'সাবেক অধ্যাপক, ঢাকা বিশ্ববিদ্যালয়' },
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop',
    bio: {
      en: 'Leads youth volunteer leadership training, orphan scholarship criteria, and vocational skill centers.',
      bn: 'স্বেচ্ছাসেবক দক্ষতা উন্নয়ন প্রশিক্ষণ, পথশিশু স্কুল পরিচালনা এবং এতিম বৃত্তি কর্মসূচির রূপরেখা তৈরি করেন।'
    }
  },
  {
    id: 'bm-5',
    name: { en: 'Nasreen Jahan', bn: 'নাসরীন জাহান' },
    role: { en: 'Trustee - Women Empowerment', bn: 'ট্রাস্টি - নারী স্বাবলম্বীকরণ' },
    designation: { en: 'Social Entrepreneur & Gender Specialist', bn: 'সামাজিক উদ্যোক্তা ও নারী অধিকারকর্মী' },
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop',
    bio: {
      en: 'Spearheads widow self-reliance projects, micro-sewing machines distribution, and rural women hygiene awareness.',
      bn: 'দুস্থ মহিলাদের সেলাই মেশিন বিতরণ, সামাজিক কুটির শিল্প শিক্ষা ও গ্রামীণ নারী স্বাস্থ্য রক্ষা কার্যক্রমে নিয়োজিত।'
    }
  },
  {
    id: 'bm-6',
    name: { en: 'Engr. Mahbubur Rahman', bn: 'প্রকৌশলী মাহবুবুর রহমান' },
    role: { en: 'Trustee - WASH & Infrastructure', bn: 'ট্রাস্টি - পানি ও দুর্যোগ অবকাঠামো' },
    designation: { en: 'Civil & Environmental Engineer', bn: 'সিভিল ও পরিবেশ প্রকৌশলী' },
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop',
    bio: {
      en: 'Designs solar-powered coastal deep tube wells, flood shelter infrastructure, and rain-water harvesting tanks.',
      bn: 'উপকূলীয় সুপেয় ডিপ টিউবওয়েল, খরা অঞ্চলের ওয়াটার ট্যাংক ও সৌরবিদ্যুৎ ব্যবস্থার কারিগরি ডিজাইন অনুমোদন করেন।'
    }
  }
];

export const staffMembersData: LeaderProfile[] = [
  {
    id: 'staff-1',
    name: { en: 'Kamrul Hasan', bn: 'কামরুল হাসান' },
    role: { en: 'Head of Emergency Field Operations', bn: 'প্রধান, ফিল্ড ইমার্জেন্সি অপারেশন্স' },
    designation: { en: 'Disaster Management Specialist', bn: 'ডিজাস্টার ম্যানেজমেন্ট স্পেশালিস্ট' },
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop',
    bio: { en: 'Manages field speedboats, rapid distribution trucks, and emergency shelter camps.', bn: 'জরুরি স্পিডবোট, উদ্ধারকারী জলযান ও ত্রাণ বিতরণ গাড়িবহর পরিচালনা করেন।' },
    department: 'Operations',
    email: 'kamrul@humanityfirstbd.org',
    phone: '+880 1711-223344'
  },
  {
    id: 'staff-2',
    name: { en: 'Nusrat Jahan Mitu', bn: 'নুসরাত জাহান মিতু' },
    role: { en: 'Senior Finance & Audit Officer', bn: 'সিনিয়র ফাইন্যান্স ও অডিট অফিসার' },
    designation: { en: 'Accounts Lead', bn: 'হিসাব প্রধান' },
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop',
    bio: { en: 'Responsible for donation reconciliation, tax certificate issuance, and online payment gateway logs.', bn: 'অনলাইন অনুদান হিসাব, ট্যাক্স রসিদ প্রদান ও ব্যাংক বিবরণী সমন্বয় করেন।' },
    department: 'Finance',
    email: 'finance@humanityfirstbd.org',
    phone: '+880 1711-334455'
  },
  {
    id: 'staff-3',
    name: { en: 'Tanveer Ahmed Chowdhury', bn: 'তানভীর আহমেদ চৌধুরী' },
    role: { en: 'National Volunteer Coordinator', bn: 'জাতীয় স্বেচ্ছাসেবক সমন্বয়কারী' },
    designation: { en: 'Youth & Volunteer Lead', bn: 'যুব ও ভランটিয়ার প্রধান' },
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop',
    bio: { en: 'Coordinates 12,000+ registered volunteers in 64 districts during flood & medical drives.', bn: 'বাংলাদেশের ৬৪ জেলার ১২,০০০ স্বেচ্ছাসেবীর সমন্বয় ও দুর্যোগকালীন প্রশিক্ষণ প্রদান করেন।' },
    department: 'Volunteers',
    email: 'volunteers@humanityfirstbd.org',
    phone: '+880 1711-445566'
  },
  {
    id: 'staff-4',
    name: { en: 'Dr. Sharmin Akter', bn: 'ডা. শারমীন আক্তার' },
    role: { en: 'Chief Medical Response Officer', bn: 'চিফ মেডিকেল রেসপন্স অফিসার' },
    designation: { en: 'Medical Officer', bn: 'চিকিৎসা কর্মকর্তা' },
    imageUrl: 'https://images.unsplash.com/photo-1594824813566-88855ce78347?w=800&auto=format&fit=crop',
    bio: { en: 'Leads free field clinics, waterborne disease prevention, and maternal emergency health care.', bn: 'ফ্রি মোবাইল ক্লিনিক, পানিবাহিত রোগ প্রতিরোধ ও শিশু চিকিৎসা ক্যাম্প পরিচালনা করেন।' },
    department: 'Healthcare',
    email: 'medical@humanityfirstbd.org',
    phone: '+880 1711-556677'
  },
  {
    id: 'staff-5',
    name: { en: 'Kazi Mahfuzur Rahman', bn: 'কাজী মাহফুজুর রহমান' },
    role: { en: 'Sylhet Regional Relief Commander', bn: 'সিলেট আঞ্চলিক ত্রাণ কমান্ডার' },
    designation: { en: 'Regional Officer', bn: 'আঞ্চলিক কর্মকর্তা' },
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop',
    bio: { en: 'In charge of Sylhet, Sunamganj, and Moulvibazar emergency relief distribution centers.', bn: 'সিলেট, সুনামগঞ্জ ও মৌলভীবাজার এলাকার ত্রাণ সামগ্রী বিতরণ কেন্দ্র তত্ত্বাবধান করেন।' },
    department: 'Field',
    email: 'sylhet@humanityfirstbd.org',
    phone: '+880 1711-667788'
  },
  {
    id: 'staff-6',
    name: { en: 'Sadia Sultana', bn: 'সাদিয়া সুলতানা' },
    role: { en: 'Communications & Media Relations Lead', bn: 'যোগাযোগ ও মিডিয়া রিলেশন্স প্রধান' },
    designation: { en: 'PR Specialist', bn: 'পিআর বিশেষজ্ঞ' },
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop',
    bio: { en: 'Handles field stories, press releases, video documentaries, and donor communications.', bn: 'ফিল্ড স্টোরি লিখন, প্রামাণ্যচিত্র নির্মাণ ও প্রেস বিজ্ঞপ্তি প্রকাশের দায়িত্বে নিয়োজিত।' },
    department: 'Communications',
    email: 'media@humanityfirstbd.org',
    phone: '+880 1711-778899'
  },
  {
    id: 'staff-7',
    name: { en: 'Engr. Anisur Rahman', bn: 'প্রকৌশলী আনিসুর রহমান' },
    role: { en: 'Coastal Water Project Manager', bn: 'উপকূলীয় সুপেয় পানি প্রজেক্ট ম্যানেজার' },
    designation: { en: 'WASH Engineer', bn: 'ওয়াশ ইঞ্জিনিয়ার' },
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop',
    bio: { en: 'Supervises drilling of 1000ft deep solar tube wells in coastal Satkhira, Bagerhat, and Barguna.', bn: 'সাতক্ষীরা, বাগেরহাট ও বরগুনায় ১০০০ ফুট গভীর টিউবওয়েল খনন কাজ তদারকি করেন।' },
    department: 'WASH',
    email: 'water@humanityfirstbd.org',
    phone: '+880 1711-889900'
  },
  {
    id: 'staff-8',
    name: { en: 'Rashedul Islam', bn: 'রাশেদুল ইসলাম' },
    role: { en: 'IT & Transparency Systems Administrator', bn: 'আইটি ও স্বচ্ছতা সিস্টেম এডমিন' },
    designation: { en: 'Software Systems Specialist', bn: 'সফটওয়্যার সিস্টেম স্পেশালিস্ট' },
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop',
    bio: { en: 'Maintains online donation portal, SMS notification engine, and database integrity.', bn: 'অনলাইন ডোনেশন পোর্টাল, এসএমএস রসিদ ইনফ্রাস্ট্রাকচার ও ডাটাবেজ পরিচালনা করেন।' },
    department: 'IT & Data',
    email: 'it@humanityfirstbd.org',
    phone: '+880 1711-990011'
  }
];
