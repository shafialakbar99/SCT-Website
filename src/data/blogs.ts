import { BlogPost } from '../types';

export const initialBlogs: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'sustainable-water-solutions-coastal-bangladesh',
    title: {
      en: 'Tackling Salinity: Solar Submersible Wells in Coastal Bangladesh',
      bn: 'লবণাক্ততা মোকাবেলা: উপকূলীয় বাংলাদেশে সোলার সাবমার্সিবল টিউবওয়েল'
    },
    summary: {
      en: 'How solar-powered deep filtration systems are solving the acute drinking water crisis in Satkhira and Bagerhat.',
      bn: 'সৌরশক্তিচালিত গভীর ফিল্টারিং ব্যবস্থা কীভাবে সাতক্ষীরা ও বাগেরহাটের খাবার পানির সঙ্কট দূর করছে।'
    },
    content: {
      en: `## The Crisis of Groundwater Salinity
Climate change and frequent cyclones like Aila, Amphan, and Remal have severely impacted southern coastal Bangladesh. Rising sea levels force saline water into local ponds and shallow aquifers. For decades, local women have walked hours carrying heavy 'kolshis' just to fetch semi-saline water.

## Our Technological Approach
Humanity First BD introduced 600-feet deep solar submersible pumps equipped with multi-stage reverse osmosis and sand filtration units. 

### Key Features of Solar Tube Wells:
1. **Zero Electricity Dependence**: Operates entirely on 1.2kW solar panels.
2. **Deep Aquifer Access**: Taps into pristine freshwater layers below 550 feet.
3. **Community Ownership**: Local water committees are trained to manage routine maintenance.

## Direct Beneficiary Impact
Over 1,840 wells have been successfully commissioned to date, providing clean drinking water to more than 450,000 villagers every day.`,
      bn: `## ভূগর্ভস্থ পানির তীব্র লবণাক্ততা
জলবায়ু পরিবর্তন ও ঘন ঘন ঘূর্ণিঝড়ের প্রভাবে বাংলাদেশের দক্ষিণাঞ্চলীয় উপকূলীয় জেলাগুলোতে দেখা দিয়েছে সুপেয় পানির হাহাকার। স্থানীয় নারী ও শিশুদের পানির পাত্র নিয়ে মাইলের পর মাইল হাঁটতে হয়।

## আমাদের প্রযুক্তিগত উদ্যোগ
হিউম্যানিটি ফাস্ট বিডি ৬০০ ফুট গভীরতায় সোলার সাবমার্সিবল পাম্প এবং মাল্টি-স্টেজ ফিল্টারেশন প্ল্যান্ট স্থাপন করছে।

### প্রযুক্তিগত বৈশিষ্ট্য:
১. **বিদ্যুৎনির্ভরতাহীন**: সম্পূর্ণ সোলার প্যানেলে চালিত।
২. **গভীর স্বাদু পানির স্তর**: ৫৫০ ফুটের নিচের বিশুদ্ধ পানি উত্তোলন।
৩. **কমিউনিটি মালিকানা**: স্থানীয় কমিটি গঠন করে পরিচালনা করা হয়।`
    },
    category: { en: 'Water & Environment', bn: 'পানি ও পরিবেশ' },
    author: {
      name: 'Engr. Mahmudul Hasan',
      role: { en: 'Head of WASH Projects', bn: 'প্রধান, ওয়াশ প্রজেক্ট' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop'
    },
    coverImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1000&auto=format&fit=crop',
    publishedAt: '2026-07-20',
    readTimeMinutes: 5,
    tags: ['Water', 'Climate', 'Satkhira', 'WASH']
  },
  {
    id: 'blog-2',
    slug: 'zakat-as-tool-for-poverty-alleviation',
    title: {
      en: 'Zakat as a Sustainable Tool for Micro-Empowerment in Bangladesh',
      bn: 'বাংলাদেশে দারিদ্র্য বিমোচনে যাকাতের টেকসই ভূমিকা'
    },
    summary: {
      en: 'Why shifting Zakat from one-off handouts to asset-building creates long-term financial independence for widow-headed households.',
      bn: 'এককালীন সাহায্যের বদলে যাকাতের টাকায় ক্ষুদ্র ব্যবসা ও রিকশা কিনে দিয়ে কীভাবে স্থায়ী স্বাবলম্বিতা আনা সম্ভব।'
    },
    content: {
      en: `## Moving Beyond Handouts
Traditionally, Zakat is distributed as small cash gifts or garments during Ramadan. While helpful temporarily, it rarely breaks the poverty cycle.

## The Humanity First BD Model
We utilize Zakat funds to purchase income-generating assets:
- Battery-operated auto-rickshaws for unemployed youth
- Commercial sewing machines & fabric stock for widow micro-entrepreneurs
- Small grocery shop inventory for persons with disabilities

## Audited Shariah Integrity
Every project is verified by our Islamic Advisory Board to ensure 100% compliance with Quranic Zakat categories (Asnaf).`,
      bn: `## স্থায়ী স্বাবলম্বীকরণের মডেল
প্রথাগতভাবে যাকাত সামান্য পোশাক বা সামান্য নগদ টাকায় সীমাবদ্ধ রাখা হয়। কিন্তু তা দারিদ্র্য ঘোচাতে পারে না।

## আমাদের উদ্ভাবনী পথ
আমরা যাকাতের টাকায় আয়ের উপায় তৈরি করে দেই:
- বেকার যুবকদের ব্যাটারিচালিত অটোরিকশা প্রদান
- বিধবা ও দরিদ্র নারীদের সেলাই মেশিন ও প্রাথমিক কাঁচামাল প্রদান
- প্রতিবন্ধী ব্যক্তিদের জন্য ক্ষুদ্র মুদি দোকান তৈরি`
    },
    category: { en: 'Economic Empowerment', bn: 'অর্থনৈতিক স্বাবলম্বীকরণ' },
    author: {
      name: 'Dr. Shahabuddin Al-Azhari',
      role: { en: 'Shariah Advisory Lead', bn: 'শরীয়াহ উপদেষ্টা প্রধান' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop'
    },
    coverImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1000&auto=format&fit=crop',
    publishedAt: '2026-07-12',
    readTimeMinutes: 4,
    tags: ['Zakat', 'Empowerment', 'Islamic Relief']
  }
];
