import { VideoItem } from '../types';

export const initialVideoGallery: VideoItem[] = [
  {
    id: 'vid-1',
    title: {
      en: 'Field Report: Delivering Hope in Flood-Ravaged Feni',
      bn: 'মাঠপর্যায়ের রিপোর্ট: ফেনীর বন্যাকবলিত অঞ্চলে আমাদের ত্রাণ মিশন'
    },
    category: 'reports',
    thumbnailUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1000&auto=format&fit=crop',
    youtubeId: 'L_LUpnjgPso', // Sample YouTube video ID
    duration: '04:12',
    date: '2026-07-27',
    summary: {
      en: 'Watch how our dedicated volunteers navigated deep floodwaters to reach isolated elderly villagers with food and medical supplies.',
      bn: 'আমাদের তরুণ স্বেচ্ছাসেবকরা কীভাবে পানিবন্দী বৃদ্ধ ও শিশুদের মাঝে জীবনরক্ষাকারী সামগ্রী নিয়ে হাজির হয়েছেন তার চিত্র।'
    }
  },
  {
    id: 'vid-2',
    title: {
      en: 'Transforming Lives: Water Wells in Coastal Satkhira',
      bn: 'জীবনযাত্রার পরিবর্তন: সাতক্ষীরায় টিউবওয়েল বসানোর সাফল্য'
    },
    category: 'interviews',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1000&auto=format&fit=crop',
    youtubeId: 'kJQP7kiw5Fk',
    duration: '06:45',
    date: '2026-06-20',
    summary: {
      en: 'Beneficiary Interview: Monowara Begum describes how having clean drinking water right in her village transformed her family’s health.',
      bn: 'উপকৃত মনোয়ারা বেগম জানাচ্ছেন বিশুদ্ধ পানি পাওয়ার পর কীভাবে তাদের পরিবারের রোগব্যাধি কমে গেছে।'
    }
  },
  {
    id: 'vid-3',
    title: {
      en: 'Annual Impact & Transparency Documentary 2025-2026',
      bn: 'বার্ষিক প্রভাব ও স্বচ্ছতা ডকুমেন্টারি ২০২৫-২০২৬'
    },
    category: 'documentary',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop',
    youtubeId: 'fJ9rUzIMcDQ',
    duration: '12:30',
    date: '2026-05-01',
    summary: {
      en: 'Full 85%+ program allocation breakdown and interviews with independent financial auditors.',
      bn: 'ফান্ডের ৮৫%+ সরাসরি প্রকল্পে ব্যয়ের হিসাব এবং স্বাধীন অডিটরের সাক্ষাৎকার সংবলিত ডকুমেন্টারি।'
    }
  }
];
