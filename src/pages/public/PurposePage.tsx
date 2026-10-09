import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { sctPurposeData } from '../../data/sctContent';
import {
  GraduationCap,
  HeartPulse,
  Accessibility,
  TrendingUp,
  Home,
  Users,
  ShieldAlert,
  Leaf,
  Handshake,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Target
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  HeartPulse,
  Accessibility,
  TrendingUp,
  Home,
  Users,
  ShieldAlert,
  Leaf,
  Handshake
};

export const PurposePage: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#1B365D]/5 via-[#138086]/5 to-transparent border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#138086] transition-colors">{isBn ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-[#138086] transition-colors">{isBn ? 'আমাদের কথা' : 'About'}</Link>
            <span>/</span>
            <span className="text-[#138086]">{isBn ? 'আমাদের উদ্দেশ্য' : 'Our Purpose'}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138086]/10 text-[#138086] text-xs font-extrabold uppercase tracking-wider border border-[#138086]/20">
              <Target className="w-3.5 h-3.5" />
              <span>{isBn ? 'শাহীন কেয়ার্স ট্রাস্টের ভিত্তি' : 'Foundational Purpose'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] tracking-tight leading-tight">
              {t(sctPurposeData.heroTitle)}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#138086] leading-snug">
              {t(sctPurposeData.heroTagline)}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
              {t(sctPurposeData.foundationalQuote)}
            </p>
          </div>

          {/* Core Philosophy Callout Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm shadow-slate-200/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{isBn ? 'কমিউনিটি অঙ্গীকার' : 'Shared Community Commitment'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {t(sctPurposeData.missionStatement)}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/pillars"
                className="bg-[#1B365D] hover:bg-[#104E7A] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>{isBn ? 'আমাদের ৫টি স্তম্ভ দেখুন' : 'Explore Our 5 Pillars'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT WE DO: 9 CORE PROGRAMMATIC AREAS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#138086] bg-[#138086]/10 px-3 py-1 rounded-full">
              {isBn ? 'আমরা যা করি' : 'What We Do'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B365D] tracking-tight">
              {isBn ? 'মানবিক সেবার ৯টি সমন্বিত ক্ষেত্র' : 'Nine Interconnected Areas of Service'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {isBn 
                ? 'শিক্ষা, স্বাস্থ্য, প্রতিবন্ধী অন্তর্ভুক্তি থেকে শুরু করে প্রাতিষ্ঠানিক টেকসই উন্নয়ন—আমাদের প্রতিটি কার্যক্রম একটি দীর্ঘমেয়াদী কেয়ার ইকোসিস্টেমের সাথে যুক্ত।'
                : 'From inclusive education and disability care to sustainable community infrastructure, our initiatives work as an integrated care ecosystem.'}
            </p>
          </div>

          {/* Grid of 9 Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sctPurposeData.areas.map((area) => {
              const IconComponent = iconMap[area.iconName] || Heart;
              return (
                <div 
                  key={area.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#138086]/40 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Row: Number & Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-300 group-hover:text-[#138086]/40 font-mono transition-colors">
                        {area.number}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#138086]/10 group-hover:text-[#138086] transition-colors">
                        {t(area.badge)}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B365D]/5 to-[#138086]/10 border border-[#138086]/20 flex items-center justify-center text-[#138086] group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-black text-[#1B365D] group-hover:text-[#138086] transition-colors">
                        {t(area.title)}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(area.description)}
                    </p>

                    {/* Sub-items Checklist */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {area.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#138086] shrink-0 mt-0.5" />
                          <span className="font-medium">{t(item)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-semibold text-[11px]">{isBn ? 'কৌশলগত ক্ষেত্র' : 'Strategic Focus Area'}</span>
                    <Link
                      to="/pillars"
                      className="text-[#138086] font-bold inline-flex items-center gap-1 hover:underline group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>{isBn ? 'বিস্তারিত' : 'Learn more'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. INAUGURATION & CALLOUT BANNER */}
      <section className="py-12 bg-gradient-to-r from-[#1B365D] via-[#104E7A] to-[#138086] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#E6A119] text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
              {isBn ? 'আসন্ন উদ্বোধন' : 'Upcoming Inauguration'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              {isBn ? 'শুক্রবার, ৯ই অক্টোবর ২০২৬ — ঢাকায় আনুষ্ঠানিক যাত্রা' : 'Friday, October 9, 2026 — Official Launch in Dhaka'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              {isBn 
                ? '(অক্টোবর ২০২৬ – অক্টোবর ২০২৯): বিশেষ চাহিদাসম্পন্ন শিশুদের অন্তর্ভুক্তিমূলক শিক্ষা, বিকাশ ও সামাজিক সহায়তা — বাস্তবায়ন সহযোগী: SPUS।'
                : 'SPUS Inclusive Education, Development, and Community Support for Children with Disabilities (October 2026 to October 2029) — Implementing Partner: SPUS.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/spus"
              className="bg-[#E6A119] hover:bg-[#d49214] text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs transition-colors shadow-md"
            >
              {isBn ? 'SPUS প্রজেক্ট দেখুন' : 'Explore SPUS Project'}
            </Link>
            <Link
              to="/join-us"
              className="bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-5 py-2.5 rounded-xl text-xs transition-colors"
            >
              {isBn ? 'আমাদের সাথে যুক্ত হোন' : 'Join Our Mission'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
