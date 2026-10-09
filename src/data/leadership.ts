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
  name: { en: 'Data Magfur', bn: 'দাতা মাগফুর' },
  role: { en: 'Chairperson, Board of Trustees', bn: 'চেয়ারপারসন, ট্রাস্টি বোর্ড' },
  designation: { en: 'Chairperson, Shaheen Cares Trust', bn: 'চেয়ারপারসন, শাহীন কেয়ার্স ট্রাস্ট' },
  imageUrl: '/Images/chairman.png?w=800&auto=format&fit=crop',
  quote: {
    en: 'When a community comes together with compassion and purpose, it can create lasting change.',
    bn: 'যখন একটি কমিউনিটি সহানুভূতি ও সুস্পষ্ট উদ্দেশ্য নিয়ে একত্রিত হয়, তখন তা স্থায়ী পরিবর্তন আনতে পারে।'
  },
  bio: {
    en: 'Data Magfur serves as the Chairperson of Shaheen Cares Trust. He has been a pivotal force in mobilizing the Shaheen community—starting from the SSC Class of 1989—and transforming voluntary acts of kindness into a structured, sustainable humanitarian trust established under Bangladesh\'s Trust Act of 1882.',
    bn: 'দাতা মাগফুর শাহীন কেয়ার্স ট্রাস্টের চেয়ারপারসন হিসেবে দায়িত্ব পালন করছেন। ১৯৮৯ ব্যাচের শাহীন সদস্যদের স্বতঃস্ফূর্ত সেবা মনোভাবকে একত্রিত করে ১৮৮২ সালের ট্রাস্ট আইনের অধীনে একটি স্থায়ী প্রাতিষ্ঠানিক রূপে রূপান্তরে তিনি মূল ভূমিকা পালন করেছেন।'
  },
  message: {
    en: `Bismillahir Rahmanir Rahim.

Shaheen Cares Trust is rooted in a simple belief: when a community comes together with compassion and purpose, it can create lasting change.

What began years ago as individual acts of kindness has grown into a shared commitment to build dignity, opportunity, and stronger communities.

Our journey is about:
- Supporting children with special needs
- Empowering young people
- Caring for our elders
- Strengthening organizations
- Standing beside members of the Shaheen community when they need us most

As we begin this journey, we invite every Shaheen to be part of something meaningful — contributing not only resources, but also ideas, experience, time, and heart.

Together, let us build dignified futures.

Warmest regards,
Data Magfur
Chairperson
Shaheen Cares Trust`,
    bn: `বিসমিল্লাহির রহমানির রহিম।

শাহীন কেয়ার্স ট্রাস্টের মূল ভিত্তি একটি সরল বিশ্বাসে রোপিত: যখন একটি সমাজ সহানুভূতি ও সুনির্দিষ্ট উদ্দেশ্য নিয়ে একসাথে কাজ করে, তখন তা স্থায়ী পরিবর্তন আনতে সক্ষম হয়।

বহু বছর আগে ব্যক্তিগত সদয় মানবিক কাজ হিসেবে যা শুরু হয়েছিল, তা আজ মর্যাদা, সুযোগ ও শক্তিশালী সমাজ গঠনের একটি যৌথ প্রতিশ্রুতিতে পরিণত হয়েছে।

আমাদের এই যাত্রার মূল লক্ষ্য:
- বিশেষ চাহিদাসম্পন্ন শিশুদের পাশে দাঁড়ানো
- তরুণদের দক্ষ ও ক্ষমতায়িত করা
- প্রবীণদের মর্যাদাপূর্ণ যত্ন নিশ্চিত করা
- অলাভজনক সামাজিক সংস্থাসমূহের স্থায়ী সক্ষমতা বৃদ্ধি
- শাহীন পরিবারের যেকোনো সদস্য বা সাবেক শিক্ষক বিপদে পড়লে তাঁদের পাশে থাকা

এই নতুন যাত্রার সূচনায়, আমরা প্রতিটি শাহীন সদস্যকে এই অর্থপূর্ণ আন্দোলনের অংশ হতে আহ্বান জানাই — কেবল সম্পদ নয়, আপনাদের চিন্তা, অভিজ্ঞতা, সময় ও আন্তরিকতা নিয়ে পাশে থাকুন।

আসুন একসাথে মর্যাদাপূর্ণ ভবিষ্যৎ গড়ে তুলি।

বিনীত,
দাতা মাগফুর
চেয়ারপারসন
শাহীন কেয়ার্স ট্রাস্ট`
  }
};

export const ceoData: LeaderProfile = {
  id: 'ceo-1',
  name: { en: 'Sumana Binte Masud', bn: 'সুমানা বিনতে মাসুদ' },
  role: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' },
  designation: { en: 'General Secretary, Shaheen Cares Trust', bn: 'সাধারণ সম্পাদক, শাহীন কেয়ার্স ট্রাস্ট' },
  imageUrl: '/Images/Sumona-GS.jpeg?w=800&auto=format&fit=crop',
  quote: {
    en: 'From Friendship to Service — From Caring to Lasting Impact.',
    bn: 'বন্ধুত্ব থেকে সেবা — যত্ন থেকে দীর্ঘস্থায়ী প্রভাব।'
  },
  bio: {
    en: 'Sumana Binte Masud serves as the General Secretary of Shaheen Cares Trust, overseeing the strategic implementation of SCT’s Five Pillars (Special Needs, Youth Employability, Elderly Care, Organizational Sustainability, and Shaheen Community Care) and leading partnerships like the SPUS Satarkul project.',
    bn: 'সুমানা বিনতে মাসুদ শাহীন কেয়ার্স ট্রাস্টের সাধারণ সম্পাদক হিসেবে দায়িত্ব পালন করছেন। তিনি ট্রাস্টের পাঁচটি কৌশলগত স্তম্ভ বাস্তবায়নে এবং প্রকল্প (SPUS সাঁতারকুল) পরিচালনায় গুরুত্বপূর্ণ ভূমিকা রাখছেন।'
  },
  message: {
    en: `Greetings to the Shaheen Community & Friends,

Shaheen Cares Trust (SCT) was created to transform the spirit of "Once a Shaheen, Always a Shaheen" into meaningful, structured service to society.

Our primary purpose is to improve the lives of disadvantaged, vulnerable, and underserved people while contributing to the sustainable development of local communities across Bangladesh. 

Through our project with Satarkul Protibandhi Unnayan Sangstha (SPUS) (October 2026 to October 2029), we are supporting inclusive education for 75 children, therapy services for 100 beneficiaries, and strengthening institutional capacity.

We invite you to join us with your time, skills, and compassion as we build an inclusive nation where everyone lives with dignity.

Warm regards,
Sumana Binte Masud
General Secretary
Shaheen Cares Trust`,
    bn: `সুপ্রিয় শাহীন পরিবার ও শুভানুধ্যায়ীবৃন্দ,

"ওয়ান্স এ শাহীন, অলওয়েজ এ শাহীন" চেতনাকে সমাজের সুবিধাবঞ্চিত ও অসহায় মানুষের জন্য অর্থপূর্ণ ও প্রাতিষ্ঠানিক সেবায় রূপান্তর করতেই শাহীন কেয়ার্স ট্রাস্টের (SCT) জন্ম।

আমাদের মূল উদ্দেশ্য হলো বিশেষ চাহিদাসম্পন্ন শিশু, বেকার যুবসমাজ ও প্রবীণদের পাশে দাঁড়ানো এবং স্থানীয় সামাজিক সংস্থাগুলোর প্রাতিষ্ঠানিক সক্ষমতা বৃদ্ধিতে ভূমিকা রাখা।

আমাদের প্রকল্প (অক্টোবর ২০২৬ – অক্টোবর ২০২৯) শুরু হয়েছে সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থার (SPUS) সাথে অংশীদারিত্বের মাধ্যমে, যেখানে ৭৫ জন শিশুর অন্তর্ভুক্তিমূলক শিক্ষা, ১০০ জন সুবিধাভোগীর থেরাপি ও পুনর্বাসন সেবা এবং সংস্থাসমূহের স্থায়িত্ব নিশ্চিত করা হচ্ছে।

আসুন, আমরা সবাই আমাদের মেধা, সময় ও সহমর্মিতা নিয়ে একসাথে কাজ করি।

ধন্যবাদান্তে,
সুমানা বিনতে মাসুদ
সাধারণ সম্পাদক
শাহীন কেয়ার্স ট্রাস্ট`
  }
};

export const boardMembersData: LeaderProfile[] = [
  {
    id: 'bm-1',
    name: { en: 'Anisuzzaman Naser Khan', bn: 'আনিসুজ্জামান নাসের খান' },
    role: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' },
    designation: { en: 'Treasurer, Board of Trustees', bn: 'কোষাধ্যক্ষ, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Manages financial transparency, fund management, and banking operations including The City Bank PLC and merchant bKash channels for Shaheen Cares Trust.',
      bn: 'শাহীন কেয়ার্স ট্রাস্টের আর্থিক স্বচ্ছতা, ট্রাস্ট অ্যাকাউন্ট (দি সিটি ব্যাংক পিএলসি) এবং মার্চেন্ট বিকাশ চ্যানেল পর্যবেক্ষণ ও পরিচালনা করেন।'
    }
  },
  {
    id: 'bm-2',
    name: { en: 'Selin Sultana', bn: 'সেলিন সুলতানা' },
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    designation: { en: 'Member, Board of Trustees', bn: 'সদস্য, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Actively guides children with special needs inclusion programs and community engagement frameworks.',
      bn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের অন্তর্ভুক্তিমূলক শিক্ষা ও সামাজিক সচেতনতা তৈরির কাজ পরিচালনা করেন।'
    }
  },
  {
    id: 'bm-3',
    name: { en: 'Shahnaz Sharmeen', bn: 'শাহনাজ শারমীন' },
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    designation: { en: 'Member, Board of Trustees', bn: 'সদস্য, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Advises on youth skills development, vocational pathways, and strategic partnerships.',
      bn: 'যুব কর্মসংস্থান, বৃত্তিমূলক প্রশিক্ষণ এবং কৌশলগত অংশীদারিত্ব নির্ধারণে দিকনির্দেশনা প্রদান করেন।'
    }
  },
  {
    id: 'bm-4',
    name: { en: 'Anirban Yasin Aftab', bn: 'অনির্বাণ ইয়াসিন আফতাব' },
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    designation: { en: 'Member, Board of Trustees', bn: 'সদস্য, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Oversees organizational capacity building (Pillar 4) and project monitoring frameworks.',
      bn: 'অলাভজনক সামাজিক সংস্থাসমূহের প্রাতিষ্ঠানিক সক্ষমতা বৃদ্ধি (স্তম্ভ ৪) এবং প্রজেক্ট তদারকি পরিচালনা করেন।'
    }
  },
  {
    id: 'bm-5',
    name: { en: 'Rozana Rouf', bn: 'রোজানা রউফ' },
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    designation: { en: 'Member, Board of Trustees', bn: 'সদস্য, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Focuses on elderly care initiatives (Pillar 3) and intergenerational community care models.',
      bn: 'প্রবীণদের সেবা ব্যবস্থা (স্তম্ভ ৩) এবং আন্তঃপ্রজন্মীয় সামাজিক সংযোগ উদ্যোগে নিয়োজিত।'
    }
  },
  {
    id: 'bm-6',
    name: { en: 'M Mazedul Islam', bn: 'এম মাজহারুল ইসলাম' },
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    designation: { en: 'Member, Board of Trustees', bn: 'সদস্য, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Leads global Shaheen diaspora outreach and volunteer engagement across North America, Europe, and Australia.',
      bn: 'বিশ্বজুড়ে ছড়িয়ে থাকা শাহীন কমিউনিটির সাথে ট্রাস্টের সমন্বয় ও নেটওয়ার্কিং কার্যক্রম দেখাশোনা করেন।'
    }
  },
  {
    id: 'bm-7',
    name: { en: 'Fazal Salahuddin Ahmad', bn: 'ফজল সালাহউদ্দিন আহমদ' },
    role: { en: 'Trustee', bn: 'ট্রাস্টি' },
    designation: { en: 'Member, Board of Trustees', bn: 'সদস্য, ট্রাস্টি বোর্ড' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: {
      en: 'Coordinates Shaheen Community Care (Pillar 5), supporting teachers and community members in genuine need.',
      bn: 'শাহীন কমিউনিটি কেয়ার (স্তম্ভ ৫) এবং প্রাক্তন শিক্ষক ও প্রবীণ শাহীনদের বিপদে-আপদে সহায়তা নিশ্চিত করেন।'
    }
  }
];

export const staffMembersData: LeaderProfile[] = [
  {
    id: 'staff-1',
    name: { en: 'SPUS Project Coordinator', bn: 'এসপিইউএস প্রজেক্ট কোঅর্ডিনেটর' },
    role: { en: 'Project Lead - Satarkul Center', bn: 'প্রকল্প প্রধান - সাঁতারকুল সেন্টার' },
    designation: { en: 'Inclusive Education Specialist', bn: 'অন্তর্ভুক্তিমূলক শিক্ষা বিশেষজ্ঞ' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: { en: 'Coordinates day-to-day inclusive education for 75 children and therapy services for 100 beneficiaries at SPUS.', bn: 'সাঁতারকুল সেন্টারে ৭৫ জন শিশুর শিক্ষা এবং ১০০ জন সুবিধাভোগীর থেরাপি ও পুনর্বাসন কাজ তদারকি করেন।' },
    department: 'Operations',
    email: 'shaheencares@gmail.com',
    phone: '+880 1805-099605'
  },
  {
    id: 'staff-2',
    name: { en: 'Finance & Governance Secretariat', bn: 'অর্থ ও সুশাসন সচিবালয়' },
    role: { en: 'Accounts & Compliance Lead', bn: 'হিসাব ও কমপ্লায়েন্স প্রধান' },
    designation: { en: 'Finance Officer', bn: 'অর্থ কর্মকর্তা' },
    imageUrl: '/Images/user.jpeg?w=800&auto=format&fit=crop',
    bio: { en: 'Handles financial compliance, quarterly budget tracking for BDT 60 Lacs SPUS project, and bank disclosures.', bn: 'প্রকল্পের অনুমোদিত ৬০ লাখ টাকা বাজেট বরাদ্দ, ত্রৈমাসিক অর্থছাড় ও ব্যাংকিং লেনদেনের হিসাব সংরক্ষণ করেন।' },
    department: 'Finance',
    email: 'shaheencares@gmail.com',
    phone: '+880 1805-099605'
  }
];