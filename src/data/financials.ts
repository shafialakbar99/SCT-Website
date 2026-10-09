import { AuditReport } from '../types';

export const initialAuditReports: AuditReport[] = [
  {
    id: 'audit-2026-2029',
    year: 'October 2026 to October 2029',
    title: { 
      en: 'SPUS Approved Budget Statement (October 2026 to October 2029)', 
      bn: 'প্রকল্প: SPUS অনুমোদিত বাজেট বিবরণী (অক্টোবর ২০২৬ – অক্টোবর ২০২৯)' 
    },
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileSize: '2.1 MB',
    auditorName: 'Shaheen Cares Trust Finance Committee & Audit Review',
    summary: { 
      en: 'Total Approved Budget: BDT 60 Lacs (6,000,000 BDT) | BDT 20 Lacs per year | Limit: BDT 5 Lacs per quarter on need basis.', 
      bn: 'মোট অনুমোদিত বাজেট: ৬০ লাখ টাকা (৬,০০০,০০০ BDT) | বার্ষিক ২০ লাখ টাকা | প্রয়োজনভিত্তিক ত্রৈমাসিক সীমা: সর্বোচ্চ ৫ লাখ টাকা।' 
    }
  },
  {
    id: 'audit-strategy-2026-2031',
    year: '2026-2031',
    title: { 
      en: 'Five-Year Strategic Plan & Financial Governance Framework', 
      bn: 'পাঁচ বছর মেয়াদী কৌশলগত পরিকল্পনা ও আর্থিক শাসন কাঠামো' 
    },
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileSize: '1.8 MB',
    auditorName: 'Board of Trustees & Sector Advisory Panel',
    summary: { 
      en: 'Focusing on Special Needs (Pillar 1), Youth Employability (Pillar 2), Elderly Care (Pillar 3), and NGO Sustainability (Pillar 4).', 
      bn: 'বিশেষ চাহিদাসম্পন্ন শিশু (স্তম্ভ ১), যুব কর্মসংস্থান (স্তম্ভ ২), প্রবীণ সেবা (স্তম্ভ ৩) ও প্রাতিষ্ঠানিক স্থায়িত্বের (স্তম্ভ ৪) ওপর কেন্দ্রিক।' 
    }
  }
];

export const expenseAllocationData = [
  { nameEn: 'Pillar 1: Special Needs Inclusive Education & Therapy', nameBn: 'স্তম্ভ ১: বিশেষ চাহিদাসম্পন্ন শিশু শিক্ষা ও থেরাপি', value: 36.4, color: '#138086' },
  { nameEn: 'Nutrition, Hygiene & Healthcare Support', nameBn: 'পুষ্টি, হাইজিন ও স্বাস্থ্য সেবা', value: 22.7, color: '#104E7A' },
  { nameEn: 'Pillar 2 & 3: Youth Skills & Elderly Care Systems', nameBn: 'স্তম্ভ ২ ও ৩: যুব দক্ষতা ও প্রবীণ যত্ন ব্যবস্থা', value: 18.2, color: '#D4AF37' },
  { nameEn: 'Pillar 4: SPUS Institutional Capacity & Monitoring', nameBn: 'স্তম্ভ ৪: প্রাতিষ্ঠানিক সক্ষমতা ও মনিটরিং', value: 11.8, color: '#E06D53' },
  { nameEn: 'Staffing, Advocacy & Operational Expenses', nameBn: 'স্টাফিং, অ্যাডভোকেসি ও পরিচালনা খরচ', value: 6.9, color: '#64748B' },
  { nameEn: 'Pillar 5: Shaheen Community Care Reserve', nameBn: 'স্তম্ভ ৫: শাহীন কমিউনিটি সেবা রিজার্ভ', value: 4.0, color: '#94A3B8' }
];