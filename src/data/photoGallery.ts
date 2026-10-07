import { PhotoAlbum } from '../types';

export const initialPhotoAlbums: PhotoAlbum[] = [
  {
    id: 'album-1',
    title: {
      en: 'Feni & Sylhet Flood Emergency Response Operations',
      bn: 'ফেনী ও সিলেট বন্যা জরুরি উদ্ধার ও খাদ্য বিতরণ'
    },
    category: 'flood',
    coverImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1000&auto=format&fit=crop',
    date: 'July 2026',
    location: { en: 'Feni & Sylhet Sadar', bn: 'ফেনী ও সিলেট সদর' },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&auto=format&fit=crop',
        caption: { en: 'Volunteers maneuvering speedboats through flooded streets delivering rations.', bn: 'বন্যা প্লাবিত অঞ্চলে স্পিডবোটে খাদ্যপ্যাক পৌঁছে দিচ্ছেন স্বেচ্ছাসেবকরা।' },
        location: { en: 'Feni Sadar', bn: 'ফেনী সদর' },
        date: '2026-07-26'
      },
      {
        url: 'https://images.unsplash.com/photo-1532629345422-7515fe926fb8?w=1200&auto=format&fit=crop',
        caption: { en: 'Distributing clean water containers and water purification tablets.', bn: 'বিশুদ্ধ খাবার পানির জ্যারিকেন ও ট্যাবলেট বিতরণ।' },
        location: { en: 'Companyganj, Sylhet', bn: 'কোম্পানীগঞ্জ, সিলেট' },
        date: '2026-07-27'
      },
      {
        url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&auto=format&fit=crop',
        caption: { en: 'Handing over emergency medical kits and oral saline to mothers.', bn: 'মা ও শিশুদের মাঝে জরুরি স্যালাইন ও স্যা his সামগ্রী বিতরণ।' },
        location: { en: 'Sunamganj', bn: 'সুনামগঞ্জ' },
        date: '2026-07-28'
      }
    ]
  },
  {
    id: 'album-2',
    title: {
      en: 'Solar Deep Tube Wells Inauguration in Satkhira',
      bn: 'সাতক্ষীরায় সোলার গভীর নলকূপ উদ্বোধন'
    },
    category: 'water',
    coverImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1000&auto=format&fit=crop',
    date: 'June 2026',
    location: { en: 'Koyra & Shyamnagar', bn: 'কয়রা ও শ্যামনগর' },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200&auto=format&fit=crop',
        caption: { en: 'Villagers gathering for safe clean drinking water from the solar pump.', bn: 'সোলার পাম্প থেকে সুপেয় পানি সংগ্রহ করছেন উপকূলীয় অধিবাসীরা।' },
        location: { en: 'Shyamnagar, Satkhira', bn: 'শ্যামনগর, সাতক্ষীরা' },
        date: '2026-06-15'
      }
    ]
  },
  {
    id: 'album-3',
    title: {
      en: 'Kamrangirchar Slum School & Daily Meal Distribution',
      bn: 'কামরাঙ্গীরচর বস্তি স্কুল ও মধ্যাহ্নভোজ কার্যক্রম'
    },
    category: 'education',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop',
    date: 'May 2026',
    location: { en: 'Kamrangirchar, Dhaka', bn: 'কামরাঙ্গীরচর, ঢাকা' },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop',
        caption: { en: 'Children receiving new textbooks, stationery and school uniforms.', bn: 'নতুন বই, খাতা ও স্কুল পোশাক পেয়ে আনন্দিত শিশুরা।' },
        location: { en: 'Dhaka Center', bn: 'ঢাকা কেন্দ্র' },
        date: '2026-05-10'
      }
    ]
  }
];
