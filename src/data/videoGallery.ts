import { VideoItem } from '../types';

export const initialVideoGallery: VideoItem[] = [
  {
    id: 'vid-intro-sct',
    title: {
      en: 'Shaheen Cares Trust: Official Introduction Documentary & Journey',
      bn: 'শাহীন কেয়ার্স ট্রাস্ট: অফিসিয়াল পরিচিতি তথ্যচিত্র ও মানবিক অভিযাত্রা'
    },
    category: 'documentary',
    thumbnailUrl: '/Images/shaheen_bg_1.png',
    videoUrl: '/Videos/Intro/intro.mp4',
    duration: '03:45',
    date: '2026-10-09',
    isFeatured: true,
    summary: {
      en: 'Official introductory film of Shaheen Cares Trust detailing our registered mission under Bangladesh Trust Act 1882, strategic pillars, and collaborative partnerships for lasting dignity.',
      bn: '১৮৮২ সালের ট্রাস্ট আইনের অধীন শাহীন কেয়ার্স ট্রাস্টের প্রাতিষ্ঠানিক পরিচিতি, সমাজসেবামূলক লক্ষ্য এবং সুবিধাবঞ্চিত মানুষের জীবনমান উন্নয়নের অফিসিয়াল তথ্যচিত্র।'
    }
  },
  {
    id: 'vid-2',
    title: {
      en: 'Project Overview: SPUS Satarkul Partnership (October 2026 to October 2029)',
      bn: 'প্রকল্প পরিচিতি: এসপিইউএস সাঁতারকুল অংশীদারিত্ব (অক্টোবর ২০২৬ – অক্টোবর ২০২৯)'
    },
    category: 'projects',
    thumbnailUrl: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop',
    youtubeId: 'z8Vqa1-C_Ow',
    duration: '04:45',
    date: '2026-08-15',
    summary: {
      en: 'A field visit report showcasing inclusive education for 75 special needs children and therapy services in Satarkul.',
      bn: 'সাঁতারকুলে বিশেষ চাহিদাসম্পন্ন ৭৫ জন শিশুর শিক্ষা ও ১০০ জন সুবিধাভোগীর থেরাপি সাপোর্ট কার্যক্রমের গ্রাউন্ড রিপোর্ট।'
    }
  }
  
];