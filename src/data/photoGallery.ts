import { PhotoAlbum } from '../types';

export const initialPhotoAlbums: PhotoAlbum[] = [
  {
    id: 'album-1',
    title: {
      en: 'Special Needs Support & Clothes Distribution at SPUS Satarkul',
      bn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের মাঝে বস্ত্র ও সহায়তা বিতরণ'
    },
    category: 'special-needs',
    coverImage: '/Images/Photo_Gallery/8.jpeg',
    date: 'May 2026',
    location: { en: 'SPUS Center, Satarkul, Badda, Dhaka', bn: 'এসপিইউএস সেন্টার, সাঁতারকুল, বাড্ডা, ঢাকা' },
    images: [
      {
        url: '/Images/Photo_Gallery/7.jpeg',
        caption: { 
          en: 'Special needs children and families attending the "Cover with Care" gift distribution drive.', 
          bn: 'বিশেষ চাহিদাসম্পন্ন শিশু ও অভিভাবকদের অংশগ্রহণে বস্ত্র বিতরণ অনুষ্ঠান।' 
        },
        location: { en: 'Satarkul, Dhaka', bn: 'সাঁতারকুল, ঢাকা' },
        date: '2026-05-20'
      },
      {
        url: '/Images/Photo_Gallery/8.jpeg',
        caption: { 
          en: 'SCT Trustees and SPUS representatives handing over clothes to a special needs student.', 
          bn: 'বিশেষ চাহিদাসম্পন্ন এক শিক্ষার্থীর হাতে নতুন পোশাক তুলে দিচ্ছেন এসসিটি ট্রাস্টিবৃন্দ।' 
        },
        location: { en: 'Satarkul, Dhaka', bn: 'সাঁতারকুল, ঢাকা' },
        date: '2026-05-20'
      }
    ]
  },
  {
    id: 'album-2',
    title: {
      en: 'Strategic Priorities and Project Review Meeting',
      bn: 'কৌশলগত অগ্রাধিকার ও প্রজেক্ট রিভিউ সভা'
    },
    category: 'governance',
    coverImage: '/Images/Photo_Gallery/1.jpeg',
    date: 'June 2026',
    location: { en: 'Bahari Ahar, RAPA Plaza, Dhanmondi, Dhaka', bn: 'বাহারি আহার, রাপা প্লাজা, ধানমন্ডি, ঢাকা' },
    images: [
      {
        url: '/Images/Photo_Gallery/1.jpeg',
        caption: { 
          en: 'Chairperson Data Magfur presenting SCT’s Strategic Priorities and Five Pillars.', 
          bn: 'চেয়ারপারসন দাতা মাগফুর এসসিটির কৌশলগত পরিকল্পনা ও ৫টি মূল স্তম্ভ উপস্থাপন করছেন।' 
        },
        location: { en: 'Dhanmondi, Dhaka', bn: 'ধানমন্ডি, ঢাকা' },
        date: '2026-06-19'
      },
      {
        url: '/Images/Photo_Gallery/3.jpeg',
        caption: { 
          en: 'Trustees and advisory panel members reviewing project implementation goals.', 
          bn: 'প্রকল্প বাস্তবায়ন লক্ষ্যমাত্রা পর্যালোচনায় ট্রাস্টি ও বিশেষজ্ঞ প্যানেল।' 
        },
        location: { en: 'Dhanmondi, Dhaka', bn: 'ধানমন্ডি, ঢাকা' },
        date: '2026-06-19'
      },
      {
        url: '/Images/Photo_Gallery/4.jpeg',
        caption: { 
          en: 'Overview of the Board of Trustees consultation meeting at Dhanmondi.', 
          bn: 'ধানমন্ডিতে আয়োজিত ট্রাস্টি বোর্ডের বিশেষ যৌথ পর্যালোচনা সভা।' 
        },
        location: { en: 'Dhanmondi, Dhaka', bn: 'ধানমন্ডি, ঢাকা' },
        date: '2026-06-19'
      },
      {
        url: '/Images/Photo_Gallery/5.jpeg',
        caption: { 
          en: 'Interactive session with youth and beneficiary representatives during the review meeting.', 
          bn: 'রিভিউ সভায় তরুণ ও প্রতিনিধি সুবিধাবোধীদের সাথে অভিজ্ঞতা ও পরিকল্পনা বিনিময়।' 
        },
        location: { en: 'Dhanmondi, Dhaka', bn: 'ধানমন্ডি, ঢাকা' },
        date: '2026-06-19'
      },
      {
        url: '/Images/Photo_Gallery/6.jpeg',
        caption: { 
          en: 'General Secretary Sumana Binte Masud with Trustees and committee members.', 
          bn: 'সাধারণ সম্পাদক সুমানা বিনতে মাসুদ ও অন্যান্য ট্রাস্টিবৃন্দের যৌথ উপস্থিতি।' 
        },
        location: { en: 'Dhanmondi, Dhaka', bn: 'ধানমন্ডি, ঢাকা' },
        date: '2026-06-19'
      }
    ]
  },
  {
    id: 'album-3',
    title: {
      en: 'Shaheen Cares Trust Formal Registration under Trust Act 1882',
      bn: '১৮৮২ সালের ট্রাস্ট আইনের অধীনে এসসিটির অফিশিয়াল রেজিস্ট্রেশন'
    },
    category: 'governance',
    coverImage: '/Images/Photo_Gallery/2.jpeg',
    date: 'June 2026',
    location: { en: 'Dhaka, Bangladesh', bn: 'ঢাকা, বাংলাদেশ' },
    images: [
      {
        url: '/Images/Photo_Gallery/2.jpeg',
        caption: { 
          en: 'Board of Trustees holding the official registration certificate under the Trust Act of 1882.', 
          bn: '১৮৮২ সালের ট্রাস্ট আইনের অধীনে অফিশিয়াল রেজিস্ট্রেশন সনদসহ ট্রাস্টি পর্ষদ।' 
        },
        location: { en: 'Dhaka, Bangladesh', bn: 'ঢাকা, বাংলাদেশ' },
        date: '2026-06-25'
      }
    ]
  }
];