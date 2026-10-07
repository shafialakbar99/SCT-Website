import { EventItem } from '../types';

export const initialEvents: EventItem[] = [
  {
    id: 'evt-1',
    slug: 'dhaka-blood-donation-and-health-camp-2026',
    title: { en: 'Mega Voluntary Blood Donation & Medical Camp', bn: 'মেগা স্বেচ্ছায় রক্তদান ও বিনামূল্যে চিকিৎসা ক্যাম্প' },
    description: {
      en: 'Join us at Dhaka University TSC for a day-long free health checkup, diabetes screening, and voluntary blood donation drive.',
      bn: 'ঢাকা বিশ্ববিদ্যালয় টিএসসিতে দিনব্যাপী বিনামূল্যে চিকিৎসা সেবা, ডায়াবেটিস পরীক্ষা ও স্বেচ্ছায় রক্তদান কর্মসূচী।'
    },
    eventDate: '2026-08-15',
    time: '09:00 AM - 05:00 PM',
    location: { en: 'TSC Premises, Dhaka University', bn: 'টিএসসি প্রাঙ্গণ, ঢাকা বিশ্ববিদ্যালয়' },
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1000&auto=format&fit=crop',
    category: { en: 'Health & Blood Drive', bn: 'স্বাস্থ্য ও রক্তদান' },
    registeredCount: 380
  },
  {
    id: 'evt-2',
    slug: 'tree-plantation-coastal-green-belt-2026',
    title: { en: '10,000 Mangrove Tree Plantation Drive', bn: 'উপকূলীয় এলাকায় ১০,০০০ ম্যানগ্রোভ বৃক্ষরোপণ' },
    description: {
      en: 'Planting mangrove saplings along the embankments of Koyra and Shyamnagar to protect against embankment erosion.',
      bn: 'বেড়িবাঁধ রক্ষায় কয়রা ও শ্যামনগরে ১০,০০০ ম্যানগ্রোভ চারা রোপণ অভিযান।'
    },
    eventDate: '2026-08-28',
    time: '08:00 AM - 03:00 PM',
    location: { en: 'Koyra Embankment, Khulna', bn: 'কয়রা বেড়িবাঁধ, খুলনা' },
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1000&auto=format&fit=crop',
    category: { en: 'Environment & Forestry', bn: 'পরিবেশ ও বৃক্ষরোপণ' },
    registeredCount: 195
  }
];
