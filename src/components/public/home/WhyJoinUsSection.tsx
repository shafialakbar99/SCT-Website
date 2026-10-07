import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Award, 
  Shield, 
  Sparkles, 
  ArrowRight,
  UserPlus
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { sctWhyJoinUsData } from '../../../data/sctContent';

const ICONS = [
  <Heart className="w-6 h-6 text-[#0D6E4F]" />,
  <BookOpen className="w-6 h-6 text-[#138086]" />,
  <Users className="w-6 h-6 text-[#1B365D]" />,
  <Award className="w-6 h-6 text-[#D4AF37]" />,
  <Shield className="w-6 h-6 text-[#E06D53]" />,
  <Sparkles className="w-6 h-6 text-purple-600" />
];

export const WhyJoinUsSection: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0D6E4F] text-xs font-black uppercase tracking-wider border border-emerald-100">
            <UserPlus className="w-3.5 h-3.5" />
            {isBn ? 'কেন আমাদের সাথে যুক্ত হবেন?' : 'Why Join Shaheen Cares Trust'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
            {isBn ? 'একটি স্বচ্ছ ও মহৎ সমাজ বিনির্মাণের অংশীদার হোন' : 'Be Part of a Transparent, Purposeful Mission'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {isBn
              ? 'ব্যক্তিগত সামর্থ্য আর প্রাতিষ্ঠানিক আন্তরিকতার মেলবন্ধনে আমরা প্রতিটি মানুষের অধিকার ও মর্যাদাপূর্ণ ভবিষ্যৎ নিশ্চিত করতে কাজ করছি।'
              : 'When you join Shaheen Cares Trust, your time, skills, and support directly uplift marginalized lives with verifiable, auditable integrity.'}
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sctWhyJoinUsData.reasons.map((reason, idx) => (
            <div
              key={reason.id}
              className="p-7 rounded-3xl bg-[#FDFBF7] border border-slate-200/90 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {ICONS[idx % ICONS.length]}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0D6E4F] transition-colors">
                  {isBn ? reason.title.bn : reason.title.en}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">
                  {isBn ? reason.desc.bn : reason.desc.en}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#0D6E4F]">
                <span>{isBn ? 'প্রভাব দেখুন' : 'Positive Impact'}</span>
                <span className="text-slate-400 font-mono text-[11px]">#0{reason.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link
            to="/why-join-us"
            className="inline-flex items-center gap-2 bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <span>{isBn ? 'যুক্ত হওয়ার কারণ ও বিস্তারিত দেখুন' : 'Discover Why Join Us & Testimonials'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
