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
    time: '04:00 PM - 08:30 PM',
    location: { en: 'Grand Ballroom, Dhaka, Bangladesh', bn: 'গ্র্যান্ড বলরুম, ঢাকা, বাংলাদেশ' },
    imageUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    category: { en: 'Trust Launch & Gathering', bn: 'উদ্বোধনী অনুষ্ঠান' },
    registeredCount: 450
  },
  {
    id: 'evt-2',
    slug: 'spus-satarkul-inclusive-learning-and-therapy-workshop',
    title: { 
      en: 'SPUS Special Needs Inclusive Education & Assistive Distribution Drive', 
      bn: 'এসপিইউএস অন্তর্ভুক্তিমূলক শিক্ষা ও সহায়ক উপকরণ বিতরণ অনুষ্ঠান' 
    },
    description: {
      en: 'Distributing specialized learning kits, hygiene packs, and assistive devices for 75 children and therapy beneficiaries in Satarkul.',
      bn: 'সাঁতারকুলে বিশেষ চাহিদাসম্পন্ন ৭৫ জন শিশুর মাঝে শিক্ষা উপকরণ, হাইজিন কিট ও সহায়কমূলক ডিভাইস বিতরণ।'
    },
    eventDate: '2026-11-15',
    time: '10:00 AM - 02:00 PM',
    location: { en: 'SPUS Campus, Satarkul, Dhaka', bn: 'এসপিইউএস ক্যাম্পাস, সাঁতারকুল, ঢাকা' },
    imageUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    category: { en: 'Special Needs Drive', bn: 'বিশেষ চাহিদাসম্পন্ন সেবা' },
    registeredCount: 120
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
    imageUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    category: { en: 'Strategic Planning', bn: 'কৌশলগত ফোরাম' },
    registeredCount: 85
  }
];