import { NewsItem } from '../types';

export const initialNews: NewsItem[] = [
  {
    id: 'news-1',
    slug: 'annual-audit-report-released-2025-2026',
    title: {
      en: 'Humanity First BD Releases Independent FY 2025-26 Financial Audit Report',
      bn: 'হিউম্যানিটি ফাস্ট বিডি এর অর্থবছর ২০২৫-২৬ এর বার্ষিক অডিট রিপোর্ট প্রকাশ'
    },
    summary: {
      en: 'Independent chartered accounting audit confirms 88.4% of total funds were directly spent on field humanitarian programs.',
      bn: 'স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্ট ফার্মের অডিটে দেখা গেছে প্রাপ্ত মোট ফান্ডের ৮৮.৪% সরাসরি মাঠপর্যায়ের মানবিক সহায়তায় ব্যয় হয়েছে।'
    },
    content: {
      en: 'Humanity First BD is proud to announce the publication of our annual audited financial statements for FY 2025-26. Conducted by A. Qasem & Co. Chartered Accountants, the report confirms strict compliance with NGO Affairs Bureau regulations. 88.4% went to direct programs, 7.2% to administrative operations, and 4.4% to fundraising efforts.',
      bn: 'হিউম্যানিটি ফাস্ট বিডি অত্যন্ত আনন্দের সাথে ২০২৫-২৬ অর্থবছরের অডিট রিপোর্ট প্রকাশ করেছে। প্রতিবেদন অনুযায়ী মোট অনুদানের ৮৮.৪% সরাসরি জনগণের সেবায়, ৭.২% প্রশাসনিক কাজে এবং ৪.৪% ফান্ড সংগ্রহে ব্যয় হয়েছে।'
    },
    source: { en: 'Official Press Release', bn: 'প্রেস বিজ্ঞপ্তি' },
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop',
    publishedAt: '2026-07-01',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'news-2',
    slug: 'disaster-relief-mou-signed-with-local-districts',
    title: {
      en: 'MoU Signed with Sylhet & Feni District Administration for Rapid Disaster Response',
      bn: 'দ্রুত দুর্যোগ মোকাবেলায় সিলেট ও ফেনী জেলা প্রশাসনের সাথে সমঝোতা স্মারক স্বাক্ষর'
    },
    summary: {
      en: 'Joint coordination protocol established to streamline emergency boat rescue operations and relief supply logistics during flash floods.',
      bn: 'বন্যার সময় উদ্ধার অভিযান ও ত্রাণ সামগ্রী দ্রুত পৌঁছানোর জন্য জেলা প্রশাসনের সাথে যৌথ সমন্বয় প্রটোকল গঠিত।'
    },
    content: {
      en: 'To optimize emergency response speed, Humanity First BD signed a Memorandum of Understanding with the District Disaster Management Committees of Sylhet and Feni.',
      bn: 'জরুরি দুর্যোগে দ্রুততার সাথে কাজ করতে সিলেট ও ফেনী জেলা দুর্যোগ ব্যবস্থাপনা কমিটির সাথে দ্বিপাক্ষিক সমঝোতা স্মারক স্বাক্ষরিত হয়।'
    },
    source: { en: 'Daily Star / Prothom Alo', bn: 'দৈনিক প্রথম আলো' },
    coverImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1000&auto=format&fit=crop',
    publishedAt: '2026-06-18'
  }
];
