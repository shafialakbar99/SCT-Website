import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { sctStrategyData } from '../../data/sctContent';
import {
  Compass,
  Cpu,
  Database,
  Zap,
  Building2,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  TrendingUp,
  Coins,
  Wrench,
  CheckSquare,
  Award,
  Globe,
  BookMarked,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Calendar
} from 'lucide-react';

const approachIconMap: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  Database,
  Zap,
  Building2,
  Users
};

const resultsIconMap: Record<string, React.FC<{ className?: string }>> = {
  Coins,
  Wrench,
  CheckSquare,
  TrendingUp,
  Award
};

export const StrategyPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [activeStrategySection, setActiveStrategySection] = useState<'approaches' | 'theory' | 'pathways' | 'results' | 'alignment'>('approaches');

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#1B365D]/5 via-[#138086]/5 to-transparent border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#138086] transition-colors">{isBn ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <span className="text-[#138086]">{isBn ? 'কৌশলগত পরিকল্পনা' : 'Strategy 2026–2031'}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-black uppercase tracking-wider border border-[#1B365D]/20">
              <Compass className="w-3.5 h-3.5 text-[#138086]" />
              <span>{isBn ? '৫ বছর মেয়াদী কৌশল (২০২৬–২০৩১)' : 'Five-Year Strategic Blueprint (2026–2031)'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] tracking-tight leading-tight">
              {t(sctStrategyData.title)}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#138086] leading-snug">
              {t(sctStrategyData.subtitle)}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              {isBn 
                ? 'শাহীন ৮৯ ব্যাচের এক দশকেরও বেশি স্বেচ্ছাসেবী অভিজ্ঞতার ওপর ভিত্তি করে গড়ে উঠেছে এই সুসংগঠিত প্রাতিষ্ঠানিক রূপরেখা। এটি কেবল অনুদান বিতরণ নয়, বরং একটি দীর্ঘমেয়াদী কেয়ার ইকোসিস্টেম তৈরি করার আন্দোলন।'
                : 'Built upon a decade of voluntary frontline interventions by Shaheen Class of 1989, this blueprint translates compassion into measurable, evidence-based systems of care.'}
            </p>
          </div>

          {/* Section Navigation Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {[
              { id: 'approaches', labelEn: 'Strategic Approaches (5)', labelBn: 'কৌশলগত পদ্ধতি (৫টি)' },
              { id: 'theory', labelEn: 'Theory of Change', labelBn: 'থিওরি অব চেঞ্জ' },
              { id: 'pathways', labelEn: 'Pathways of Change (5)', labelBn: 'পরিবর্তন পথরেখা (৫টি)' },
              { id: 'results', labelEn: 'Results Framework & M&E', labelBn: 'ফলাফল কাঠামো ও মূল্যায়ন' },
              { id: 'alignment', labelEn: 'Global & National Alignment', labelBn: 'এসডিজি ও জাতীয় আইন সংযোগ' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveStrategySection(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                  activeStrategySection === tab.id
                    ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#138086] hover:text-[#138086]'
                }`}
              >
                {isBn ? tab.labelBn : tab.labelEn}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SECTION 1: STRATEGIC APPROACHES */}
      {activeStrategySection === 'approaches' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Core Objectives Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#138086]">
                <Target className="w-4 h-4" />
                <span>{isBn ? 'পাঁচটি মূল লক্ষ্যমাত্রা' : 'Five Core Strategic Objectives'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sctStrategyData.coreObjectives.map((obj, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#1B365D] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {t(obj)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5 Approaches */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                  {isBn ? 'টেকসই প্রভাব সৃষ্টির উপায়' : 'How We Create Sustainable Impact'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                  {isBn ? '৫টি কৌশলগত স্তম্ভের ভিত্তি' : 'Five Strategic Approaches'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {sctStrategyData.strategicApproaches.map((app) => {
                  const IconComp = approachIconMap[app.iconName] || Cpu;
                  return (
                    <div 
                      key={app.id}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-[#138086]/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#138086]/10 text-[#138086] flex items-center justify-center">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-black text-[#1B365D]">
                          {t(app.title)}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {t(app.description)}
                        </p>
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          {app.bullets.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#138086] shrink-0 mt-0.5" />
                              <span>{t(b)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3. SECTION 2: THEORY OF CHANGE */}
      {activeStrategySection === 'theory' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                {isBn ? 'কার্যকারণ সম্পর্ক' : 'Causal Logic Model'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                {isBn ? 'আমাদের থিওরি অব চেঞ্জ (Theory of Change)' : 'Our Theory of Change'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {isBn 
                  ? 'কীভাবে নির্দিষ্ট কর্মসূচি ও প্রাতিষ্ঠানিক রূপান্তর সার্বিক সমাজ পরিবর্তন আনবে তার বৈজ্ঞানিক বিশ্লেষণ।'
                  : 'Mapping from field interventions to societal cohesion through the IF → THEN → BECAUSE model.'}
              </p>
            </div>

            {/* IF -> THEN -> BECAUSE CARDS */}
            <div className="space-y-6">
              
              {/* IF CONTAINER */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#138086]">
                  <span className="px-3 py-1 rounded-full bg-[#138086] text-white">IF</span>
                  <span>{isBn ? 'যদি এই শর্তসমূহ বাস্তবায়িত হয়:' : 'If We Deliver These Interventions:'}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sctStrategyData.theoryOfChange.ifStatements.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#138086] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {t(item)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* THEN CONTAINER (CENTRAL IMPACT) */}
              <div className="bg-gradient-to-r from-[#1B365D] via-[#104E7A] to-[#138086] text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E6A119]">
                  <span className="px-3 py-1 rounded-full bg-[#E6A119] text-slate-950 font-black">THEN</span>
                  <span>{isBn ? 'তাহলে সমাজে এই পরিবর্তন আসবে:' : 'Then Society Transforms As Follows:'}</span>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-black leading-relaxed">
                  "{t(sctStrategyData.theoryOfChange.thenStatement)}"
                </p>
              </div>

              {/* BECAUSE CONTAINER */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#D4AF37]">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-slate-950 font-black">BECAUSE</span>
                  <span>{isBn ? 'কারণ এর অন্তর্নিহিত বিজ্ঞান ও যুক্তি:' : 'Because Of These Structural Fundamentals:'}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sctStrategyData.theoryOfChange.becauseStatements.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {t(item)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 4. SECTION 3: PATHWAYS OF CHANGE */}
      {activeStrategySection === 'pathways' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                {isBn ? 'রূপান্তরের ৫টি পথরেখা' : 'Five Impact Trajectories'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                {isBn ? 'পাথওয়েজ অব চেঞ্জ (Pathways of Change)' : 'Our Pathways of Change'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {isBn 
                  ? 'প্রতিটি পাথওয়ে একটি নির্দিষ্ট জনগোষ্ঠীর সক্ষমতা বৃদ্ধি ও মর্যাদাপূর্ণ জীবনের সাথে সরাসরি সংযুক্ত।'
                  : 'Targeted operational routes connecting interventions to specific population wellbeing.'}
              </p>
            </div>

            <div className="space-y-6">
              {sctStrategyData.pathwaysOfChange.map((pw) => (
                <div
                  key={pw.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#138086]/40 transition-all"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#138086]/10 text-[#138086] text-[10px] font-black uppercase">
                        Pathway 0{pw.id}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {t(pw.subtitle)}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#1B365D]">
                      {t(pw.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t(pw.description)}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <Link
                      to="/pillars"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-[#138086] hover:text-white transition-colors"
                    >
                      {isBn ? 'স্তম্ভ দেখুন' : 'View Pillar'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. SECTION 4: RESULTS FRAMEWORK & M&E */}
      {activeStrategySection === 'results' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Results Framework Pipeline */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                  {isBn ? 'ফলাফল ট্র্যাকিং পাইপলাইন' : 'Results Framework'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                  Inputs → Activities → Outputs → Outcomes → Impact
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {sctStrategyData.resultsFramework.map((stage) => {
                  const IconComp = resultsIconMap[stage.iconName] || Coins;
                  return (
                    <div
                      key={stage.stage}
                      className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black font-mono text-slate-400">
                            STEP {stage.stage}
                          </span>
                          <IconComp className="w-4 h-4 text-[#138086]" />
                        </div>
                        <h4 className="text-base font-black text-[#1B365D]">
                          {t(stage.label)}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {t(stage.description)}
                        </p>
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          {stage.items.map((item, idx) => (
                            <p key={idx} className="text-xs text-slate-700 font-medium">
                              • {t(item)}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* M&E Lifecycle */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1 border-b border-slate-200 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                  {isBn ? 'মূল্যায়ন ও তদারকি পদ্ধতি' : 'Evaluation Lifecycle'}
                </span>
                <h3 className="text-xl font-black text-[#1B365D]">
                  {isBn ? 'আমরা যেভাবে অগ্রগতি মূল্যায়ন করি' : 'How We Systematically Measure Progress'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {sctStrategyData.evaluationLifecycle.map((ev) => (
                  <div key={ev.phase} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-white text-slate-600 block w-fit font-mono">
                      Phase {ev.phase}
                    </span>
                    <h5 className="text-xs font-black text-[#1B365D]">
                      {t(ev.title)}
                    </h5>
                    <span className="text-[11px] font-bold text-[#138086] block">
                      {t(ev.timing)}
                    </span>
                    <p className="text-xs text-slate-600 leading-snug">
                      {t(ev.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 6. SECTION 5: GLOBAL & NATIONAL ALIGNMENT */}
      {activeStrategySection === 'alignment' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                {isBn ? 'আন্তর্জাতিক ও জাতীয় অগ্রাধিকারের সাথে সঙ্গতি' : 'Policy Alignment'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                {isBn ? 'জাতিসংঘ সনদ, এসডিজি ও বাংলাদেশ আইন' : 'Aligned with Global & National Priorities'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {isBn 
                  ? 'শাহীন কেয়ার্স ট্রাস্টের কৌশল বৈশ্বিক মানবাধিকার সনদ ও বাংলাদেশের জাতীয় সুরক্ষা আইনের সাথে শতভাগ সঙ্গতিপূর্ণ।'
                  : 'Grounded in recognized international treaties and statutory laws of Bangladesh.'}
              </p>
            </div>

            <div className="space-y-8">
              {sctStrategyData.strategicAlignment.map((group, gIdx) => (
                <div key={gIdx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                  <h3 className="text-lg font-black text-[#1B365D] border-b border-slate-100 pb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#138086]" />
                    <span>{t(group.category)}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {group.frameworks.map((fw, fwIdx) => (
                      <div key={fwIdx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#1B365D] font-mono">
                            {fw.name}
                          </span>
                          {fw.badge && (
                            <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-white text-slate-500">
                              {fw.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          {t(fw.details)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 7. BOTTOM CTA */}
      <section className="py-14 bg-gradient-to-r from-[#1B365D] to-[#138086] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#E6A119] text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {isBn ? 'কৌশলগত অংশীদারিত্ব' : 'Join Our Strategy'}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            {isBn ? 'থিওরি অব চেঞ্জ বাস্তবায়নে আমাদের সহযোগী হোন' : 'Partner with Us to Operationalize this Theory of Change'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            {isBn 
              ? 'গবেষক, বিশেষজ্ঞ পরামর্শক বা প্রাতিষ্ঠানিক সিএসআর অংশীদার হিসেবে টেকসই সমাজ নির্মাণে যুক্ত হোন।'
              : 'Collaborate with our interdisciplinary expert pool to create lasting, generational impact.'}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/join-us"
              className="bg-[#E6A119] hover:bg-[#d49214] text-slate-950 font-black px-6 py-3 rounded-xl text-xs transition-colors shadow-lg"
            >
              {isBn ? 'বিশেষজ্ঞ পুলে যোগ দিন' : 'Join Expert Advisory Pool'}
            </Link>
            <Link
              to="/resources"
              className="bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-6 py-3 rounded-xl text-xs transition-colors"
            >
              {isBn ? 'দলিল ও তথ্যসূত্র দেখুন' : 'Explore References & Policy Acts'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
