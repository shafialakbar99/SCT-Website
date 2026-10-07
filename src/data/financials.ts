import { AuditReport } from '../types';

export const initialAuditReports: AuditReport[] = [
  {
    id: 'audit-2026',
    year: '2025-2026',
    title: { en: 'Annual Audited Financial Statement FY 2025-26', bn: 'বার্ষিক অডিটকৃত হিসাব বিবরণী ২০২৫-২৬' },
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileSize: '3.8 MB',
    auditorName: 'A. Qasem & Co. Chartered Accountants',
    summary: { en: 'Total Income: ৳4.85 Crore | Field Program Expenses: 88.4% | Admin: 7.2% | Fundraising: 4.4%', bn: 'মোট আয়: ৪.৮৫ কোটি টাকা | মাঠপর্যায়ে ব্যয়: ৮৮.৪% | প্রশাসনিক: ৭.২% | ফান্ড সংগ্রাহক: ৪.৪%' }
  },
  {
    id: 'audit-2025',
    year: '2024-2025',
    title: { en: 'Annual Audited Financial Statement FY 2024-25', bn: 'বার্ষিক অডিটকৃত হিসাব বিবরণী ২০২৪-২৫' },
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileSize: '3.1 MB',
    auditorName: 'Hoda Vasi Chowdhury & Co.',
    summary: { en: 'Total Income: ৳3.92 Crore | Field Program Expenses: 87.9% | Admin: 7.5% | Fundraising: 4.6%', bn: 'মোট আয়: ৩.৯২ কোটি টাকা | মাঠপর্যায়ে ব্যয়: ৮৭.৯% | প্রশাসনিক: ৭.৫% | ফান্ড সংগ্রাহক: ৪.৬%' }
  }
];

export const expenseAllocationData = [
  { nameEn: 'Emergency Disaster Relief', nameBn: 'জরুরি বন্যা ও দুর্যোগ ত্রাণ', value: 42, color: '#0D6E4F' },
  { nameEn: 'Clean Water & WASH Wells', nameBn: 'সুপেয় পানি ও নলকূপ', value: 24, color: '#124E5B' },
  { nameEn: 'Orphan & Child Education', nameBn: 'এতিম ও শিশু শিক্ষা', value: 14, color: '#E6A119' },
  { nameEn: 'Zakat Self-Reliance Drives', nameBn: 'যাকাত স্বাবলম্বীকরণ', value: 8.4, color: '#E06D53' },
  { nameEn: 'Administrative & Staff Cost', nameBn: 'প্রশাসনিক ও পরিচালনা খরচ', value: 7.2, color: '#64748B' },
  { nameEn: 'Fundraising & Awareness', nameBn: 'ফান্ড রাইজিং ও প্রচার', value: 4.4, color: '#94A3B8' }
];
