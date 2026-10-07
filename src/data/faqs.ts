import { FAQItem } from '../types';

export const initialFAQs: FAQItem[] = [
  {
    id: 'faq-zakat-1',
    category: 'zakat',
    question: {
      en: 'How do I know if my Zakat donation is strictly Shariah-compliant?',
      bn: 'আমার যাকাত শরীয়াহ সম্মত উপায়ে ব্যয় হচ্ছে কিনা কীভাবে নিশ্চিত হব?'
    },
    answer: {
      en: 'We maintain a dedicated Zakat Bank Account strictly separate from general donations. Our Islamic Advisory Board, led by scholar Dr. Shahabuddin Al-Azhari, audits every Zakat allocation. 100% of your Zakat goes directly to eligible poor beneficiaries (Fuqara and Masakeen).',
      bn: 'আমাদের যাকাতের জন্য সম্পূর্ণ আলাদা ব্যাংক অ্যাকাউন্ট রাখা হয়। ড. শাহাবুদ্দিন আল-আজহারীর নেতৃত্বে আলেমদের নিয়ে গঠিত বোর দ্বারা প্রতি ৩ মাস পর পর যাকাত বন্টন অডিট করা হয়। পুরো ১০০% টাকা সরাসরি দরিদ্র মানুষকে স্বাবলম্বী করতে ব্যবহৃত হয়।'
    }
  },
  {
    id: 'faq-tax-2',
    category: 'transparency',
    question: {
      en: 'Can I get an official tax rebate certificate for my donation in Bangladesh?',
      bn: 'আমি কি আমার অনুদানের বিপরীতে আয়কর ছাড় বা ট্যাক্স সার্টিফিকেট পাব?'
    },
    answer: {
      en: 'Yes! Humanity First BD is approved under Section 44(4) of the Income Tax Act in Bangladesh. When you donate online, check the "Tax Exemption Receipt" box or email us with your TIN number. An official tax receipt will be emailed immediately.',
      bn: 'হ্যাঁ, হিউম্যানিটি ফাস্ট বিডি বাংলাদেশ সরকারের আয়কর আইনের ৪৪(৪) ধারা অনুযায়ী কর অব্যাহতিপ্রাপ্ত। অনলাইনে ডানের সময় "ট্যাক্স রসিদ প্রয়োজন" বক্সে টিক দিলে অথবা আমাদের ইমেইল করলে আপনার নামে সিলমোহরকৃত রসিদ দেওয়া হবে।'
    }
  },
  {
    id: 'faq-bkash-3',
    category: 'donation',
    question: {
      en: 'How do I donate via bKash / Nagad or Bank Transfer?',
      bn: 'বিকাশ, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে কীভাবে অনুদান দেব?'
    },
    answer: {
      en: 'On our /donate page, choose your cause, enter the amount, and select bKash / Nagad. You can complete payment instantly via our SSL Gateway or send directly to Merchant bKash Number: 01711001122 with Reference: "RELIEF" or "ZAKAT".',
      bn: 'আমাদের /donate পেজে যেকোনো পরিমাণ লিখে বিকাশ বা নগদ নির্বাচন করুন। সরাসরি মার্চেন্ট নম্বর ০১৭১১০০১১২২ এ পেমেন্ট করে ট্রানজেকশন আইডি প্রদান করতে পারেন।'
    }
  },
  {
    id: 'faq-vol-4',
    category: 'volunteer',
    question: {
      en: 'How can I become a volunteer for flood relief or local drives?',
      bn: 'আমি কীভাবে বন্যা ত্রাণ বা স্থানীয় ড্রাইভে স্বেচ্ছাসেবক হিসেবে যোগ দেব?'
    },
    answer: {
      en: 'Visit /volunteer and submit the application form selecting your district, skills (Rescue, Medical, Logistics, Media), and availability. Our regional volunteer coordinator will contact you via WhatsApp.',
      bn: '/volunteer পেজে গিয় আপনার জেলা, দক্ষতা (উদ্ধার, চিকিৎসা, লজিস্টিকস) নির্বাচন করে ফর্ম পূরণ করুন। আমাদের টিম দ্রুত আপনার সাথে ওয়াটসঅ্যাপে যোগাযোগ করবে।'
    }
  }
];
