import { EventItem } from '../types';

export const initialEvents: EventItem[] = [
  {
    id: 'evt-1',
    slug: 'shaheen-cares-trust-official-inauguration-2026',
    title: { 
      en: 'Official Inauguration Ceremony of Shaheen Cares Trust', 
      bn: 'শাহীন কেয়ার্স ট্রাস্টের আনুষ্ঠানিক উদ্বোধন অনুষ্ঠান ২০২৬' 
    },
    description: {
      en: 'Celebrating the formal launch of SCT under the Trust Act of 1882, bringing together Trustees, Shaheen Alumni, and sector leaders in Dhaka.',
      bn: '১৮৮২ সালের ট্রাস্ট আইনের অধীন নিবন্ধিত শাহীন কেয়ার্স ট্রাস্টের আনুষ্ঠানিক উদ্বোধন ও সুধী সমাবেশ।'
    },
    eventDate: '2026-10-09',
    time: '07:00 PM - 09:30 PM',
    location: { en: 'Banquet Hall, Banani Club Limited, Dhaka, Bangladesh', bn: 'ব্যাঙ্কুয়েট হল, বনানী ক্লাব লিমিটেড, ঢাকা, বাংলাদেশ' },
    imageUrl: '/Images/News/inaguration.jfif?w=2000&auto=format&fit=crop',
    category: { en: 'Trust Launch & Gathering', bn: 'উদ্বোধনী অনুষ্ঠান' },
    registeredCount: 120
  },
  {
    id: 'evt-2',
    slug: 'spus-satarkul-inclusive-learning-and-therapy-workshop',
    title: { 
      en: 'SPUS Special Needs Inclusive Education & Learning Materials Drive', 
      bn: 'এসপিইউএস অন্তর্ভুক্তিমূলক শিক্ষা ও শ্রেণিকক্ষ শিক্ষা উপকরণ বিতরণ' 
    },
    description: {
      en: 'Distributing specialized learning kits, books, and nutrition packs for 75 special needs children in Satarkul.',
      bn: 'সাঁতারকুলে বিশেষ চাহিদাসম্পন্ন ৭৫ জন শিশুর মাঝে শিক্ষা উপকরণ, বই-খাতা ও পুষ্টিকর খাদ্য সামগ্রী বিতরণ।'
    },
    eventDate: '2026-09-15',
    time: '10:00 AM - 02:00 PM',
    location: { en: 'SPUS Campus, Satarkul, Dhaka', bn: 'এসপিইউএস ক্যাম্পাস, সাঁতারকুল, ঢাকা' },
    imageUrl: '/Images/Photo_Gallery/8.jpeg?w=2000&auto=format&fit=crop',
    category: { en: 'Special Needs Drive', bn: 'বিশেষ চাহিদাসম্পন্ন সেবা' },
    registeredCount: 95
  },
  {
    id: 'evt-3',
    slug: 'sct-strategy-2026-2031-expert-consultation-forum',
    title: { 
      en: 'Strategy 2026–2031 Advisory Forum on Youth & Care Economy', 
      bn: 'কৌশলগত পরিকল্পনা ২০২৬-২০৩১: যুব কর্মসংস্থান ও কেয়ার ইকোসিস্টেম ফোরাম' 
    },
    description: {
      en: 'An expert consultation engaging domain specialists, trustees, and NGO leaders to refine youth vocational frameworks and elderly care systems.',
      bn: 'বিশেষজ্ঞ পুল ও ট্রাস্টি বোর্ডের উপস্থিতিতে যুবদের আন্তর্জাতিক মানের দক্ষতা ও প্রবীণ যত্ন ফ্রেমওয়ার্ক রূপরেখা সভা।'
    },
    eventDate: '2026-12-05',
    time: '03:00 PM - 06:30 PM',
    location: { en: 'SCT Conference Room, Gulshan-1, Dhaka', bn: 'এসসিটি কনফারেন্স রুম, গুলশান-১, ঢাকা' },
    imageUrl: '/Images/shaheen_bg_1.png?w=2000&auto=format&fit=crop',
    category: { en: 'Strategic Planning', bn: 'কৌশলগত ফোরাম' },
    registeredCount: 85
  }
];