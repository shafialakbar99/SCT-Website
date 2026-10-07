import { VideoItem } from '../types';

export const initialVideoGallery: VideoItem[] = [
  {
    id: 'vid-1',
    title: {
      en: 'Shaheen Cares Trust: Building Dignified Futures, Together',
      bn: 'শাহীন কেয়ার্স ট্রাস্ট: মর্যাদাপূর্ণ ভবিষ্যৎ গড়ি, একসাথে'
    },
    category: 'overview',
    thumbnailUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    youtubeId: 'kJQP7kiw5Fk', // Authentic YouTube Video ID for Trust/Social Impact
    duration: '05:20',
    date: '2026-08-25',
    summary: {
      en: 'An introductory overview of Shaheen Cares Trust, our core philosophy, and our 5 Strategic Pillars.',
      bn: 'শাহীন কেয়ার্স ট্রাস্টের পরিচিতি, মূল দর্শন এবং ২০২৬–২০৩১ কৌশলগত ৫টি মূল স্তম্ভের চিত্র।'
    }
  },
  {
    id: 'vid-2',
    title: {
      en: 'First Project Overview: SPUS Satarkul Partnership (2026–2029)',
      bn: 'প্রথম প্রকল্প পরিচিতি: এসপিইউএস সাঁতারকুল অংশীদারিত্ব (২০২৬–২০২৯)'
    },
    category: 'projects',
    thumbnailUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    youtubeId: 'L_LUpnjgPso',
    duration: '04:45',
    date: '2026-08-15',
    summary: {
      en: 'A field visit report showcasing inclusive education for 75 special needs children and therapy services in Satarkul.',
      bn: 'সাঁতারকুলে বিশেষ চাহিদাসম্পন্ন ৭৫ জন শিশুর শিক্ষা ও ১০০ জন সুবিধাভোগীর থেরাপি সাপোর্ট কার্যক্রমের গ্রাউন্ড রিপোর্ট।'
    }
  },
  {
    id: 'vid-3',
    title: {
      en: 'Chairperson’s Message: From Friendship to Service',
      bn: 'চেয়ারপারসনের বাণী: বন্ধুত্ব থেকে সেবা — যত্ন থেকে দীর্ঘস্থায়ী প্রভাব'
    },
    category: 'messages',
    thumbnailUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    youtubeId: 'fJ9rUzIMcDQ',
    duration: '06:10',
    date: '2026-07-20',
    summary: {
      en: 'Chairperson Data Magfur shares the vision behind establishing SCT under the Bangladesh Trust Act of 1882.',
      bn: 'চেয়ারপারসন দাতা মাগফুর তুলে ধরেছেন ট্রাস্ট গঠনের পেছনে শাহীন কমিউনিটির চেতনা ও সুদূরপ্রসারী ভিশন।'
    }
  }
];