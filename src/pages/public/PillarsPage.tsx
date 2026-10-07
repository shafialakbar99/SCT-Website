import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { sctPillarsData, PillarItem } from '../../data/sctContent';
import {
  HeartHandshake,
  Briefcase,
  UserCheck,
  Building,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  HeartHandshake,
  Briefcase,
  UserCheck,
  Building,
  ShieldCheck
};

export const PillarsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const location = useLocation();
  const [selectedPillarId, setSelectedPillarId] = useState<string>('pillar-1');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (sctPillarsData.some(p => p.id === id || p.slug === id)) {
        setSelectedPillarId(id.startsWith('pillar-') ? id : `pillar-${id}`);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#138086]/5 via-[#1B365D]/5 to-transparent border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#138086] transition-colors">{isBn ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <span className="text-[#138086]">{isBn ? 'আমাদের ৫টি স্তম্ভ' : 'Our Five Pillars'}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138086]/10 text-[#138086] text-xs font-extrabold uppercase tracking-wider border border-[#138086]/20">
              <Layers className="w-3.5 h-3.5" />
              <span>{isBn ? 'কৌশলগত কর্মপরিকল্পনা ২০২৬–২০৩১' : 'Strategic Action Architecture (2026–2031)'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] tracking-tight leading-tight">
              {isBn ? 'আমাদের ৫টি কৌশলগত স্তম্ভ' : 'Our Five Strategic Pillars'}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#138086] leading-snug">
              {isBn 
                ? 'একটি স্বাবলম্বী, সহমর্মী ও আন্তঃপ্রজন্মীয় সমাজ গঠনের পঞ্চস্তর রূপরেখা'
                : 'A Phased, Intergenerational Framework for Sustainable Human Development'}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              {isBn 
                ? 'শাহীন কেয়ার্স ট্রাস্টের প্রতিটি স্তম্ভ একে অপরের সাথে সংযুক্ত। বিশেষ শিশুদের অন্তর্ভুক্তি থেকে শুরু করে যুব কর্মসংস্থান ও প্রবীণদের মর্যাদাপূর্ণ পরিচর্যা—সবকিছু একটি স্থায়ী প্রাতিষ্ঠানিক কেয়ার ইকোসিস্টেমের মধ্যে পরিচালিত হয়।'
                : 'Rather than running disconnected projects, SCT builds an evolving continuum: special needs children receive therapy today, young caregivers are certified to support elders tomorrow, and grassroots NGOs achieve self-reliance.'}
            </p>
          </div>

          {/* Quick Pillar Jump Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {sctPillarsData.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-2 ${
                  selectedPillarId === pillar.id
                    ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#138086] hover:text-[#138086]'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 text-current flex items-center justify-center text-[10px] font-black">
                  {pillar.pillarNumber}
                </span>
                <span>{t(pillar.title)}</span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 2. TIMELINE ROADMAP VISUAL */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#138086] mb-6">
              <Calendar className="w-4 h-4" />
              <span>{isBn ? 'পর্যায়ক্রমিক বাস্তবায়ন সময়রেখা' : 'Phased Implementation Roadmap'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {sctPillarsData.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-1" 
                    style={{ backgroundColor: pillar.accentColor }} 
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Pillar {pillar.pillarNumber}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 leading-snug line-clamp-1">
                    {t(pillar.title)}
                  </h4>
                  <p className="text-[11px] font-bold text-[#138086]">
                    {t(pillar.period)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP DIVE INTO EACH PILLAR */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sctPillarsData.map((pillar, index) => {
            const IconComponent = iconMap[pillar.iconName] || HeartHandshake;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm shadow-slate-200/40 relative overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Decorative Top Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5" 
                  style={{ backgroundColor: pillar.accentColor }} 
                />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Summary & Meta */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: pillar.accentColor }}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-slate-400 block font-mono">
                          Pillar {pillar.pillarNumber}
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-slate-100 text-slate-700">
                          {t(pillar.period)}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D] tracking-tight">
                      {t(pillar.title)}
                    </h2>

                    <p className="text-sm font-semibold text-[#138086] leading-relaxed">
                      {t(pillar.shortDesc)}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t(pillar.longDesc)}
                    </p>

                    {/* Target Groups Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                      <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#138086]" />
                        <span>{isBn ? 'সুবিধাভোগী জনগোষ্ঠী' : 'Target Beneficiary Groups'}</span>
                      </h5>
                      <div className="space-y-1">
                        {pillar.targetGroups.map((tg, idx) => (
                          <p key={idx} className="text-xs text-slate-700 font-medium">
                            • {t(tg)}
                          </p>
                        ))}
                      </div>
                    </div>

                    {pillar.pillarNumber === 1 && (
                      <div className="pt-2">
                        <Link
                          to="/spus"
                          className="inline-flex items-center gap-2 bg-[#138086] hover:bg-[#0f686d] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
                        >
                          <span>{isBn ? '১ম স্তম্ভের প্রজেক্ট (SPUS) দেখুন' : 'Explore Flagship Project (SPUS)'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Key Deliverables & Action Points */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <h4 className="text-sm font-black uppercase tracking-wider text-[#1B365D] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span>{isBn ? 'মূল লক্ষ্য ও বাস্তবায়ন পদক্ষেপ' : 'Key Deliverables & Action Outcomes'}</span>
                      </h4>
                      <span className="text-xs font-bold text-slate-400 font-mono">
                        {pillar.deliverables.length} Deliverables
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {pillar.deliverables.map((deliv, idx) => (
                        <div 
                          key={idx} 
                          className="p-3.5 bg-white rounded-2xl border border-slate-200/70 shadow-xs flex items-start gap-3 hover:border-[#138086]/30 transition-colors"
                        >
                          <div 
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-bold"
                            style={{ backgroundColor: pillar.accentColor }}
                          >
                            {idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                            {t(deliv)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Pillar Bridge Note */}
                    <div className="p-3.5 rounded-xl bg-white/60 border border-slate-200/50 text-[11px] text-slate-500 leading-snug">
                      <span className="font-bold text-slate-700">{isBn ? 'কৌশলগত সংযোগ:' : 'Strategic Linkage:'}</span>{' '}
                      {isBn 
                        ? 'এই স্তম্ভটি ২০২৬-২০৩১ সালের পাঁচ বছর মেয়াদী কৌশলগত কর্মকাঠামো এবং জাতিসংঘ টেকসই উন্নয়ন অভীষ্টের (SDGs) সাথে সরাসরি সামঞ্জস্যপূর্ণ।'
                        : 'Directly aligned with the 5-Year Action Plan (2026–2031) and multilateral SDGs for maximum durability.'}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-14 bg-gradient-to-r from-[#1B365D] to-[#138086] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#E6A119] text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {isBn ? 'অংশগ্রহণ ও সহযোগিতা' : 'Get Involved With Our Pillars'}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            {isBn ? 'এই স্থায়ী পরিবর্তনের অংশীদার হতে চান?' : 'Want to Support One of Our Core Pillars?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {isBn 
              ? 'আপনার মেধা, সময়, পরামর্শ কিংবা অনুদান দিয়ে বিশেষ চাহিদাসম্পন্ন শিশু, তরুণ ও প্রবীণদের কল্যাণে সক্রিয় ভূমিকা রাখুন।'
              : 'Whether as a volunteer, technical advisor, institutional partner, or donor—your contribution shapes a dignified future.'}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/join-us"
              className="bg-[#E6A119] hover:bg-[#d49214] text-slate-950 font-black px-6 py-3 rounded-xl text-xs transition-colors shadow-lg"
            >
              {isBn ? 'আমাদের সাথে যুক্ত হোন' : 'Join Our Movement'}
            </Link>
            <Link
              to="/strategy"
              className="bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-6 py-3 rounded-xl text-xs transition-colors"
            >
              {isBn ? 'কৌশল ও থিওরি অব চেঞ্জ দেখুন' : 'Explore Strategy 2026–2031'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
