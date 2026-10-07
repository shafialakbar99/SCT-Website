import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Baby, 
  Briefcase, 
  Users2, 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const ShortIntroSection: React.FC = () => {
  const { isBn } = useLanguage();

  const focusAreas = [
    {
      titleEn: 'Children with special needs',
      titleBn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের সার্বিক বিকাশ',
      icon: <Baby className="w-4 h-4 text-[#0D6E4F]" />,
      bg: 'bg-emerald-50 text-emerald-900 border-emerald-200'
    },
    {
      titleEn: 'Youth skills and employability',
      titleBn: 'যুব দক্ষতা ও আধুনিক কর্মসংস্থান',
      icon: <Briefcase className="w-4 h-4 text-[#138086]" />,
      bg: 'bg-teal-50 text-teal-900 border-teal-200'
    },
    {
      titleEn: 'Elderly care',
      titleBn: 'প্রবীণদের মর্যাদাপূর্ণ পরিচর্যা ও সেবা',
      icon: <Users2 className="w-4 h-4 text-[#D4AF37]" />,
      bg: 'bg-amber-50 text-amber-900 border-amber-200'
    },
    {
      titleEn: 'Organizational sustainability',
      titleBn: 'তৃণমূল সংস্থার প্রাতিষ্ঠানিক স্থায়িত্ব',
      icon: <Building2 className="w-4 h-4 text-[#1B365D]" />,
      bg: 'bg-blue-50 text-blue-900 border-blue-200'
    },
    {
      titleEn: 'Shaheen community care',
      titleBn: 'শাহীন কমিউনিটির পারস্পরিক কল্যাণ নিরাপত্তা',
      icon: <ShieldCheck className="w-4 h-4 text-[#E06D53]" />,
      bg: 'bg-rose-50 text-rose-900 border-rose-200'
    },
    {
      titleEn: 'Inclusive communities',
      titleBn: 'বৈষম্যহীন অন্তর্ভুক্তিমূলক সমাজ বিনির্মাণ',
      icon: <Globe2 className="w-4 h-4 text-indigo-700" />,
      bg: 'bg-indigo-50 text-indigo-900 border-indigo-200'
    },
    {
      titleEn: 'Intergenerational support',
      titleBn: 'আন্তঃপ্রজন্ম পারস্পরিক সেতুবন্ধন',
      icon: <Sparkles className="w-4 h-4 text-purple-700" />,
      bg: 'bg-purple-50 text-purple-900 border-purple-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-extrabold uppercase tracking-wide">
            <Heart className="w-3.5 h-3.5 fill-[#0D6E4F]" />
            {isBn ? 'আমাদের অঙ্গীকার ও উদ্দেশ্য' : 'Our Commitment & Purpose'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
            {isBn ? 'একসাথে, আমরা স্থায়ী কল্যাণ তৈরি করতে পারি' : 'Together, We Can Create Lasting Good'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {isBn
              ? 'শাহীন কেয়ার্স ট্রাস্ট সুবিধাবঞ্চিত, অসহায় ও পিছিয়ে পড়া মানুষের জীবনমান উন্নয়ন এবং স্থানীয় সমাজের টেকসই উন্নয়নে কাজ করে।'
              : 'Shaheen Cares Trust works to improve the lives of disadvantaged, vulnerable, and underserved people and contribute to the sustainable development of local communities.'}
          </p>
        </div>

        {/* 7 Focus Areas Grid */}
        <div className="mt-10 pt-4 max-w-4xl mx-auto">
          <p className="text-xs font-black uppercase text-slate-400 tracking-wider text-center mb-5">
            {isBn ? 'আমাদের প্রধান মনোযোগের ক্ষেত্রসমূহ' : 'Our Core Focus Areas'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold shadow-xs transition-transform hover:-translate-y-0.5 ${area.bg}`}
              >
                {area.icon}
                <span>{isBn ? area.titleBn : area.titleEn}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/purpose"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D6E4F] hover:text-[#0A583F] hover:underline"
            >
              <span>{isBn ? 'আমাদের উদ্দেশ্যের বিস্তারিত জানুন' : 'Learn more about our purpose and approach'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
