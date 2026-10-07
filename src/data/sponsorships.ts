import { Sponsorship } from '../types';

export const initialSponsorships: Sponsorship[] = [
  {
    id: 'spon-1',
    title: { en: 'Sponsor Orphaned Student Care - Aariz', bn: 'এতিম শিশু আরিজের লালন-পালন ও শিক্ষা স্পন্সর' },
    type: 'orphan',
    childName: 'Aariz (Pseudonymized for Protection)',
    age: 9,
    gender: 'boy',
    location: { en: 'Sunamganj, Sylhet', bn: 'সুনামগঞ্জ, সিলেট' },
    monthlyAmountBDT: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop',
    academicGrade: 'Grade 3',
    story: {
      en: 'Aariz lost his father during severe flooding in 2024. His mother works as a domestic maid earning barely enough for rent. Aariz dreams of becoming a school teacher.',
      bn: 'আরিজ ২০২৪ সালের বন্যায় বাবাকে হারায়। তার মা মানুষের বাসায় কাজ করে জীবিকা নির্বাহ করেন। আরিজের স্বপ্ন সে বড় হয়ে শিক্ষক হবে।'
    },
    isSponsored: false
  },
  {
    id: 'spon-2',
    title: { en: 'Sponsor Talented Girl Student - Sumaiya', bn: 'মেধাবী ছাত্রী সুমাইয়ার পড়াশোনা স্পন্সর' },
    type: 'student',
    childName: 'Sumaiya',
    age: 12,
    gender: 'girl',
    location: { en: 'Kamrangirchar, Dhaka', bn: 'কামরাঙ্গীরচর, ঢাকা' },
    monthlyAmountBDT: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop',
    academicGrade: 'Grade 6',
    story: {
      en: 'Sumaiya secured top marks in her primary completion exam despite living in a crowded slum. Sponsorship covers her coaching, uniform, books, and nutrition.',
      bn: 'বস্তি এলাকায় থেকেও সুমাইয়া প্রাথমিকে মেধা তালিকায় স্থান পেয়েছে। আপনার ২৫০০ টাকা তার পুরো মাসের শিক্ষা ও খাদ্যের দায়িত্ব নেবে।'
    },
    isSponsored: false
  },
  {
    id: 'spon-3',
    title: { en: 'Sponsor Orphaned Boy - Rahim', bn: 'এতিম শিশু রহিমের স্পন্সরশিপ' },
    type: 'orphan',
    childName: 'Rahim',
    age: 8,
    gender: 'boy',
    location: { en: 'Kurigram', bn: 'কুড়িগ্রাম' },
    monthlyAmountBDT: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop',
    academicGrade: 'Grade 2',
    story: {
      en: 'Rahim lives with his elderly grandmother in Kurigram. Your monthly support ensures three hot meals a day, medical checkups, and school supplies.',
      bn: 'রহিম কুড়িগ্রামে তার বৃদ্ধা দাদীর সাথে থাকে। আপনার মাসিক সাহায্য তার পড়ালেখা ও ৩ বেলা আহার নিশ্চিত করবে।'
    },
    isSponsored: false
  }
];
