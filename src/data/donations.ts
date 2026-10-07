import { Donation, Localized } from '../types';

export interface FeaturedDonor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'zakat' | 'corporate';
  amountBDT: number;
  currency: string;
  avatarUrl: string;
  location: Localized;
  badge: Localized;
  campaignTitle: Localized;
  date: string;
  isAnonymous: boolean;
  quote?: Localized;
  isCorporate?: boolean;
  companyLogo?: string;
  trxId: string;
}

export const initialDonations: Donation[] = [
  {
    id: 'don-101',
    campaignId: 'camp-1',
    campaignTitle: { en: 'Emergency Sylhet & Feni Flood Relief', bn: 'জরুরি সিলেট ও ফেনী বন্যা ত্রাণ' },
    amount: 500000,
    currency: 'BDT',
    donorName: 'Summit Group Foundation (CSR)',
    isAnonymous: false,
    paymentMethod: 'Bank Transfer',
    trxId: 'BRAC-TRX-99411',
    createdAt: '2026-07-30 08:15',
    taxExemptionRequested: true
  },
  {
    id: 'don-102',
    campaignId: 'camp-1',
    campaignTitle: { en: 'Emergency Sylhet & Feni Flood Relief', bn: 'জরুরি সিলেট ও ফেনী বন্যা ত্রাণ' },
    amount: 250000,
    currency: 'BDT',
    donorName: 'Dr. Zulfikar Rahman',
    isAnonymous: false,
    paymentMethod: 'Bank Transfer',
    trxId: 'EBL-TRX-88219',
    createdAt: '2026-07-30 07:42',
    taxExemptionRequested: true
  },
  {
    id: 'don-103',
    campaignId: 'camp-4',
    campaignTitle: { en: '100% Verified Zakat Empower Fund', bn: '১০০% বিশ্বস্ত ও যাকাতযোগ্য স্বাবলম্বীকরণ ফান্ড' },
    amount: 150000,
    currency: 'BDT',
    donorName: 'Anonymous Well-Wisher (Dhaka Expat)',
    isAnonymous: true,
    paymentMethod: 'Bank Transfer',
    trxId: 'BRAC-TRX-99482',
    createdAt: '2026-07-29 19:20',
    taxExemptionRequested: false
  },
  {
    id: 'don-104',
    campaignId: 'camp-2',
    campaignTitle: { en: 'Deep Solar Tube Wells in Coastal Belts', bn: 'উপকূলীয় গভীর সৌর টিউবওয়েল' },
    amount: 1000,
    currency: 'USD',
    donorName: 'Farhana Hossain (USA Expat)',
    isAnonymous: false,
    paymentMethod: 'Card / PayPal',
    trxId: 'PAYPAL-8839211',
    createdAt: '2026-07-29 16:05',
    taxExemptionRequested: false
  },
  {
    id: 'don-105',
    campaignId: 'camp-3',
    campaignTitle: { en: 'Street Children Education Program', bn: 'পথশিশু শিক্ষা কার্যক্রম' },
    amount: 50000,
    currency: 'BDT',
    donorName: 'Apex Philanthropy Trust',
    isAnonymous: false,
    paymentMethod: 'Bank Transfer',
    trxId: 'CITY-TRX-33921',
    createdAt: '2026-07-29 11:30',
    taxExemptionRequested: true
  },
  {
    id: 'don-106',
    campaignId: 'camp-1',
    campaignTitle: { en: 'Emergency Sylhet & Feni Flood Relief', bn: 'জরুরি সিলেট ও ফেনী বন্যা ত্রাণ' },
    amount: 25000,
    currency: 'BDT',
    donorName: 'Kazi Nazmul',
    isAnonymous: false,
    paymentMethod: 'bKash',
    trxId: 'BK449201B7',
    createdAt: '2026-07-28 14:10',
    taxExemptionRequested: false
  },
  {
    id: 'don-107',
    campaignId: 'camp-4',
    campaignTitle: { en: '100% Verified Zakat Empower Fund', bn: '১০০% বিশ্বস্ত ও যাকাতযোগ্য স্বাবলম্বীকরণ ফান্ড' },
    amount: 100000,
    currency: 'BDT',
    donorName: 'Al-Haj Kabir Ahmed',
    isAnonymous: false,
    paymentMethod: 'Nagad',
    trxId: 'NG882190C4',
    createdAt: '2026-07-28 10:00',
    taxExemptionRequested: true
  },
  {
    id: 'don-108',
    campaignId: 'camp-2',
    campaignTitle: { en: 'Deep Solar Tube Wells in Coastal Belts', bn: 'উপকূলীয় গভীর সৌর টিউবওয়েল' },
    amount: 15000,
    currency: 'BDT',
    donorName: 'Shahnaz Parveen',
    isAnonymous: false,
    paymentMethod: 'bKash',
    trxId: 'BK990011Z2',
    createdAt: '2026-07-27 18:30',
    taxExemptionRequested: false
  }
];

export const featuredDonorsData: FeaturedDonor[] = [
  {
    id: 'fd-1',
    name: 'Summit Philanthropy & CSR',
    tier: 'corporate',
    amountBDT: 1500000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop',
    location: { en: 'Dhaka, Bangladesh', bn: 'ঢাকা, বাংলাদেশ' },
    badge: { en: 'Platinum CSR Patron', bn: 'প্লাটিনাম সিএসআর অভিভাবক' },
    campaignTitle: { en: 'Sylhet & Feni Emergency Rescue Fleet', bn: 'সিলেট ও ফেনী ইমার্জেন্সি রেসকিউ বোট বহর' },
    date: 'July 2026',
    isAnonymous: false,
    isCorporate: true,
    quote: {
      en: 'Partnering with Humanity First BD guarantees our corporate CSR funds reach affected flood victims with 100% verifiable field proof.',
      bn: 'হিউম্যানিটি ফাস্ট বিডির সাথে যুক্ত হয়ে আমরা নিশ্চিত করেছি যে আমাদের সিএসআর ফান্ড সরাসরি বন্যা উপদ্রুত মানুষের কাছে দ্রুত পৌঁছায়।'
    },
    trxId: 'SUMMIT-CSR-2026-01'
  },
  {
    id: 'fd-2',
    name: 'Dr. Zulfikar Rahman & Family',
    tier: 'platinum',
    amountBDT: 750000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    location: { en: 'London, UK (Expat)', bn: 'লন্ডন, যুক্তরাজ্য (প্রবাসী)' },
    badge: { en: 'Lifetime Humanity Patron', bn: 'আজীবন মানব হিতৈষী' },
    campaignTitle: { en: 'Coastal Deep Tube Wells & Solar Water Plants', bn: 'উপকূলীয় গভীর সৌর টিউবওয়েল প্রজেক্ট' },
    date: 'June 2026',
    isAnonymous: false,
    quote: {
      en: 'Seeing clean water flowing in Satkhira villages under my mother’s name gives our family immense peace.',
      bn: 'সাতক্ষীরার গ্রামে আমার মায়ের নামে সুপেয় পানির ডিপ নলকূপ চালু হতে দেখে আমাদের পরিবারে অপার শান্তি এসেছে।'
    },
    trxId: 'EXP-UK-882190'
  },
  {
    id: 'fd-3',
    name: 'Anonymous Benefactor (Zakat Donor)',
    tier: 'zakat',
    amountBDT: 500000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop',
    location: { en: 'Gulshan, Dhaka', bn: 'গুলশান, ঢাকা' },
    badge: { en: 'Verified Zakat Patron', bn: 'যাকাত দাতা' },
    campaignTitle: { en: '100% Verified Zakat Empower Fund', bn: '১০০% বিশ্বস্ত ও যাকাতযোগ্য স্বাবলম্বীকরণ ফান্ড' },
    date: 'July 2026',
    isAnonymous: true,
    quote: {
      en: 'The 100% zero-overhead Zakat policy and detailed beneficiary receipts give me total confidence in my obligatory charity.',
      bn: '১০০% কোন প্রশাসনিক খরচ ছাড়া যাকাত পাওয়ার সুবিধা ও উপকারভোগীর রসিদ আমাকে যাকাত প্রদানে আস্থা প্রদান করেছে।'
    },
    trxId: 'ZAKAT-2026-991'
  },
  {
    id: 'fd-4',
    name: 'Apex Philanthropy Foundation',
    tier: 'corporate',
    amountBDT: 400000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    location: { en: 'Dhaka, Bangladesh', bn: 'ঢাকা, বাংলাদেশ' },
    badge: { en: 'Gold Corporate Partner', bn: 'গোল্ড কর্পোরেট পার্টনার' },
    campaignTitle: { en: 'Street Children Primary Schooling & Meals', bn: 'পথশিশু প্রাথমিক শিক্ষা ও খাবার প্রজেক্ট' },
    date: 'May 2026',
    isAnonymous: false,
    isCorporate: true,
    quote: {
      en: 'Education is the ultimate gift. Humanity First BD operates street schools with true love and accountability.',
      bn: 'শিক্ষাই সেরা উপহার। হিউম্যানিটি ফাস্ট বিডি ভালোবাসার সাথে পথশিশুদের স্বপ্নের স্কুল পরিচালনা করছে।'
    },
    trxId: 'APEX-EDU-4402'
  },
  {
    id: 'fd-5',
    name: 'Engr. Tariqul & Farhana Islam',
    tier: 'gold',
    amountBDT: 250000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop',
    location: { en: 'New York, USA', bn: 'নিউ ইয়র্ক, যুক্তরাষ্ট্র' },
    badge: { en: 'Gold Diaspora Patron', bn: 'গোল্ড প্রবাসী দাতা' },
    campaignTitle: { en: 'Orphan Student Sponsorship Program', bn: 'এতিম শিশু শিক্ষা স্পন্সরশিপ' },
    date: 'July 2026',
    isAnonymous: false,
    quote: {
      en: 'Sponsoring 5 orphans every month brings us closer to our home country and its future leaders.',
      bn: 'প্রতি মাসে ৫ জন এতিম শিশুকে স্পন্সর করে আমরা আমাদের দেশের ভবিষ্যৎ বিনির্মাণে ভূমিকা রাখতে পারছি।'
    },
    trxId: 'NY-USA-88129'
  },
  {
    id: 'fd-6',
    name: 'Al-Haj Kabir Ahmed',
    tier: 'gold',
    amountBDT: 150000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop',
    location: { en: 'Chittagong, Bangladesh', bn: 'চট্টগ্রাম, বাংলাদেশ' },
    badge: { en: 'Gold Community Pillar', bn: 'গোল্ড সমাজসেবী' },
    campaignTitle: { en: 'Free Field Medical Clinic & Medicine Fund', bn: 'ফ্রি ফিল্ড মেডিকেল ক্যাম্প ও ওষুধ ফান্ড' },
    date: 'July 2026',
    isAnonymous: false,
    quote: {
      en: 'Providing free insulin and essential medicines to flooded villages is a lifesaving deed.',
      bn: 'বন্যা উপদ্রুত এলাকায় ফ্রি ইনসুলিন ও প্রয়োজনীয় ওষুধ সরবরাহ একটি জীবন রক্ষাকারী মহান কাজ।'
    },
    trxId: 'CTG-KABIR-112'
  },
  {
    id: 'fd-7',
    name: 'Shahnaz Parveen & Siblings',
    tier: 'silver',
    amountBDT: 75000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop',
    location: { en: 'Sylhet, Bangladesh', bn: 'সিলেট, বাংলাদেশ' },
    badge: { en: 'Silver Community Hero', bn: 'সিলভার সমাজসেবী' },
    campaignTitle: { en: 'Widow Micro-Livelihood Sewing Machines', bn: 'বিধবা নারী সেলাই মেশিন স্বাবলম্বীকরণ' },
    date: 'June 2026',
    isAnonymous: false,
    quote: {
      en: 'Seeing rural women earning an independent income with sewing machines is truly fulfilling.',
      bn: 'গ্রামীণ নারীদের নিজের পায়ে দাঁড়াতে দেখে আমাদের আত্মতুষ্টি অর্জন হয়েছে।'
    },
    trxId: 'SYL-SHAHNAZ-88'
  },
  {
    id: 'fd-8',
    name: 'United Group CSR Division',
    tier: 'corporate',
    amountBDT: 800000,
    currency: 'BDT',
    avatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    location: { en: 'Dhaka, Bangladesh', bn: 'ঢাকা, বাংলাদেশ' },
    badge: { en: 'Platinum CSR Alliance', bn: 'প্লাটিনাম সিএসআর এলায়েন্স' },
    campaignTitle: { en: 'Emergency Winter Blanket & Shelter Kits', bn: 'জরুরি শীতবস্ত্র ও অস্থায়ী আশ্রয় কিট' },
    date: 'December 2025',
    isAnonymous: false,
    isCorporate: true,
    quote: {
      en: 'Direct distribution in northern char areas during winter was flawlessly coordinated.',
      bn: 'উত্তরাঞ্চলের চরাঞ্চলে শীতবস্ত্র বিতরণ কার্যক্রম অত্যন্ত সুশৃঙ্খলভাবে সম্পন্ন করা হয়েছে।'
    },
    trxId: 'UNITED-CSR-991'
  }
];
