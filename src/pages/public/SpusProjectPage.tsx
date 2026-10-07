import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { sctSpusProjectData } from '../../data/sctContent';
import {
  GraduationCap,
  Activity,
  Apple,
  Briefcase,
  Megaphone,
  Shield,
  BookOpen,
  Smile,
  Scissors,
  DollarSign,
  Volume2,
  CheckCircle,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  FileText,
  Heart,
  Sparkles,
  Download
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Activity,
  Apple,
  Briefcase,
  Megaphone,
  Shield,
  BookOpen,
  Smile,
  Scissors,
  DollarSign,
  Volume2,
  CheckCircle
};

export const SpusProjectPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'activities' | 'budget' | 'diligence'>('overview');

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#138086]/10 via-[#1B365D]/5 to-transparent border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#138086] transition-colors">{isBn ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <Link to="/pillars" className="hover:text-[#138086] transition-colors">{isBn ? 'কর্মপরিকল্পনা' : 'Our Work'}</Link>
            <span>/</span>
            <span className="text-[#138086]">{isBn ? 'প্রথম প্রজেক্ট (SPUS)' : 'First Project (SPUS)'}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#138086]/10 text-[#138086] text-xs font-black uppercase tracking-wider border border-[#138086]/20 inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isBn ? 'ফ্ল্যাগশিপ অংশীদারিত্ব' : 'Flagship Initiative'}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold font-mono">
                  {sctSpusProjectData.associatedPillars}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] tracking-tight leading-tight">
                {t(sctSpusProjectData.title)}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-800">
                  <MapPin className="w-4 h-4 text-[#138086]" />
                  <span>{t(sctSpusProjectData.location)}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Calendar className="w-4 h-4 text-[#138086]" />
                  <span>{t(sctSpusProjectData.period)}</span>
                </span>
              </div>

              <p className="text-base sm:text-lg font-bold text-[#138086] leading-snug">
                {t(sctSpusProjectData.partnerName)}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {t(sctSpusProjectData.goal)}
              </p>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm shadow-slate-200/50 space-y-4">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-[#138086]/10 to-[#1B365D]/5 border border-[#138086]/20">
                <span className="text-3xl sm:text-4xl font-black text-[#1B365D] block font-mono">
                  {sctSpusProjectData.whySpus.stat}
                </span>
                <span className="text-[11px] font-bold text-slate-600 mt-1 block">
                  {t(sctSpusProjectData.whySpus.statLabel)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xl font-black text-[#138086] block">75</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{isBn ? 'বিশেষ শিশু' : 'Children'}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xl font-black text-[#104E7A] block">100+</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{isBn ? 'থেরাপি গ্রহীতা' : 'Therapy Rec.'}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <span className="text-xs text-slate-500 block">{isBn ? '৩ বছর মেয়াদী মোট বাজেট:' : '3-Year Total Budget:'}</span>
                <span className="text-base font-black text-[#1B365D] font-mono">
                  {sctSpusProjectData.budget.totalBdt} ({sctSpusProjectData.budget.totalUsd})
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
            {[
              { id: 'overview', labelEn: 'Project Overview', labelBn: 'প্রকল্প বিবরণ ও সহায়তা' },
              { id: 'activities', labelEn: 'Key Activities (8 Areas)', labelBn: 'প্রধান কার্যক্রম (৮টি ক্ষেত্র)' },
              { id: 'budget', labelEn: '3-Year Budget Plan', labelBn: '৩ বছরের বাজেট পরিকল্পনা' },
              { id: 'diligence', labelEn: 'Due Diligence & Impact', labelBn: 'যাচাই ও প্রত্যাশিত ফলাফল' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                  activeTab === tab.id
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

      {/* 2. TAB 1: OVERVIEW & WHY SPUS */}
      {activeTab === 'overview' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* WHY SPUS SECTION */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#138086] bg-[#138086]/10 px-3 py-1 rounded-full">
                  {isBn ? 'কেন সাঁতারকুল ও SPUS?' : 'Why Satarkul & SPUS?'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D] tracking-tight">
                  {isBn ? 'তৃণমূল মানুষের আস্থা ও অধিকারভিত্তিক কাজ' : 'Community Trust That Money Cannot Buy'}
                </h2>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-[#0D6E4F] font-bold text-xs sm:text-sm">
                  {isBn ? 'প্রতিবন্ধী ব্যক্তিদের নিজস্ব নেতৃত্বে পরিচালিত সংস্থা' : 'Disability-led organization directly representing the families it serves.'}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  {t(sctSpusProjectData.whySpus.narrative)}
                </p>
                <p className="font-semibold text-slate-800">
                  {isBn 
                    ? 'এই অংশীদারিত্বের মাধ্যমে শাহীন কেয়ার্স ট্রাস্টের দুটি স্তম্ভ (১ম স্তম্ভ: বিশেষ চাহিদাসম্পন্ন শিশু এবং ৪র্থ স্তম্ভ: প্রাতিষ্ঠানিক সক্ষমতা ও স্থায়িত্ব) একযোগে কার্যকর হচ্ছে।'
                    : 'This multi-year partnership unites SCT Pillar 1 (Children with Special Needs) and Pillar 4 (Organizational Sustainability) into a practical field reality.'}
                </p>
              </div>
            </div>

            {/* WHAT WE'RE SUPPORTING: 6 CORE AREAS */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                  {isBn ? 'আমাদের সরাসরি সহযোগিতা' : 'What We Are Supporting'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                  {isBn ? 'সাঁতারকুলে বাস্তবায়নাধীন ৬টি সেবা প্যাকেজ' : 'Six Comprehensive Service Packages'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sctSpusProjectData.supportedAreas.map((area, idx) => {
                  const IconComp = iconMap[area.iconName] || Activity;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-[#138086]/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-[#138086]/10 text-[#138086] flex items-center justify-center">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-black text-[#1B365D] font-mono block">
                              {area.metric}
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">
                              {t(area.metricLabel)}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-base font-black text-[#1B365D]">
                          {t(area.category)}
                        </h4>

                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          {area.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle className="w-3.5 h-3.5 text-[#138086] shrink-0 mt-0.5" />
                              <span>{t(detail)}</span>
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

      {/* 3. TAB 2: KEY ACTIVITIES */}
      {activeTab === 'activities' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                {isBn ? 'মাঠপর্যায়ের কার্যক্রম' : 'Operational Scope'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                {isBn ? 'SPUS প্রকল্পের ৮টি প্রধান কর্মপরিকল্পনা' : 'Eight Concrete Project Activities'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {isBn 
                  ? '২০২৬ থেকে ২০২৯ সাল পর্যন্ত প্রতিটি কার্যক্রম সুনির্দিষ্ট ফলাফল ও তদারকি কাঠামোর অধীনে পরিচালিত হবে।'
                  : 'Tracked against verified milestone indicators and clinical child development logs.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sctSpusProjectData.activities.map((act) => {
                const IconComp = iconMap[act.iconName] || BookOpen;
                return (
                  <div
                    key={act.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-[#138086]/40 transition-all space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-[#1B365D]/5 text-[#1B365D] font-mono font-black text-xs flex items-center justify-center">
                        0{act.id}
                      </span>
                      <IconComp className="w-5 h-5 text-[#138086]" />
                    </div>

                    <h4 className="text-sm font-black text-[#1B365D] leading-snug">
                      {t(act.title)}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(act.description)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. TAB 3: 3-YEAR PROJECT BUDGET */}
      {activeTab === 'budget' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                {isBn ? 'স্বচ্ছ অর্থনৈতিক রূপরেখা' : 'Transparent Financial Framework'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
                {isBn ? '৩ বছর মেয়াদী প্রস্তাবিত বাজেট বিবরণী' : 'Three-Year Project Proposed Budget Statement'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {isBn 
                  ? 'মোট প্রস্তাবিত বাজেট: ১ কোটি ৩২.৭ লক্ষ টাকা (~১০৮,০০০ ইউএস ডলার)। স্বাধীন অডিট ও কঠোর গভর্ন্যান্স নিয়মে পরিচালিত।'
                  : 'Total Proposed Budget: BDT 13.27M (~$108,000 USD) governed by strict fiduciary disclosures.'}
              </p>
            </div>

            {/* Yearly Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-[#1B365D] font-black uppercase text-[11px] tracking-wider">
                      <th className="py-4 px-4">{isBn ? 'অর্থবছর' : 'Project Year'}</th>
                      <th className="py-4 px-4">{isBn ? 'বাজেট (বিডিটি)' : 'Budget (BDT)'}</th>
                      <th className="py-4 px-4">{isBn ? 'আনুমানিক ইউএসডি' : 'Approx. USD'}</th>
                      <th className="py-4 px-4">{isBn ? 'মূল বাস্তবায়ন ফোকাস' : 'Key Strategic Deliverables'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {sctSpusProjectData.budget.yearlyBreakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 font-black text-slate-900 whitespace-nowrap">
                          {row.year}
                        </td>
                        <td className="py-4 px-4 font-black text-[#138086] font-mono whitespace-nowrap">
                          {row.bdt}
                        </td>
                        <td className="py-4 px-4 font-mono whitespace-nowrap">
                          {row.usd}
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600">
                          {t(row.focus)}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 font-black text-[#1B365D]">
                      <td className="py-4 px-4 font-black uppercase text-xs">{isBn ? 'মোট ৩ বছর' : 'Total 3 Years'}</td>
                      <td className="py-4 px-4 font-black text-[#138086] font-mono">{sctSpusProjectData.budget.totalBdt}</td>
                      <td className="py-4 px-4 font-mono">{sctSpusProjectData.budget.totalUsd}</td>
                      <td className="py-4 px-4 text-xs text-slate-500">{isBn ? '৭৫ শিশু, ১০০ থেরাপি গ্রহীতা ও সম্পূর্ণ প্রাতিষ্ঠানিক রূপান্তর' : 'Full inclusion and institutional handover'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category Allocation Pills */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-sm font-black text-[#1B365D] uppercase tracking-wider">
                {isBn ? 'বাজেট বরাদ্দের খাতসমূহ' : 'Key Budget Expense Categories'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sctSpusProjectData.budget.categories.map((cat, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-800">
                    <CheckCircle className="w-4 h-4 text-[#138086] shrink-0" />
                    <span>{t(cat)}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. TAB 4: DUE DILIGENCE & IMPACT */}
      {activeTab === 'diligence' && (
        <section className="py-16 sm:py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* EXPECTED IMPACT */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
                  {isBn ? 'প্রত্যাশিত সামাজিক ফলাফল' : 'Expected Project Impact'}
                </span>
                <h3 className="text-2xl font-black text-[#1B365D]">
                  {isBn ? 'আমরা যা অর্জন করতে চাই' : 'What We Hope to Achieve'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sctSpusProjectData.expectedImpact.map((imp, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#138086] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {t(imp)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DUE DILIGENCE MATRIX */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
              <div className="space-y-1 border-b border-slate-200 pb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#1B365D]">
                  {isBn ? 'প্রাতিষ্ঠানিক যাচাই ও ঝুঁকি পর্যালোচনা' : 'Institutional Due Diligence & Governance Matrix'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1B365D]">
                  {isBn ? 'স্বচ্ছ মূল্যায়ন: শক্তি, সীমাবদ্ধতা ও ঝুঁকি নিরসন' : 'Strengths, Addressed Gaps & Risk Management'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Strengths */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 space-y-3">
                  <div className="flex items-center gap-2 text-[#0D6E4F] font-black text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isBn ? 'সংস্থার মূল শক্তি' : 'Core Strengths'}</span>
                  </div>
                  <div className="space-y-2">
                    {sctSpusProjectData.dueDiligence.strengths.map((str, idx) => (
                      <p key={idx} className="text-xs text-slate-700 font-medium">
                        • {t(str)}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Gaps */}
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-3">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-black text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
                    <span>{isBn ? 'চিহ্নিত সীমাবদ্ধতা' : 'Identified Gaps'}</span>
                  </div>
                  <div className="space-y-2">
                    {sctSpusProjectData.dueDiligence.gaps.map((gap, idx) => (
                      <p key={idx} className="text-xs text-slate-700 font-medium">
                        • {t(gap)}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Manageable Risks */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-slate-700 font-black text-xs uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-[#138086]" />
                    <span>{isBn ? 'ঝুঁকি নিরসন কৌশল' : 'Manageable Risks'}</span>
                  </div>
                  <div className="space-y-2">
                    {sctSpusProjectData.dueDiligence.manageableRisks.map((risk, idx) => (
                      <p key={idx} className="text-xs text-slate-700 font-medium">
                        • {t(risk)}
                      </p>
                    ))}
                  </div>
                </div>

              </div>

              {/* Recommendation Box */}
              <div className="p-5 rounded-2xl bg-[#1B365D] text-white space-y-2">
                <span className="text-[10px] font-black text-[#E6A119] uppercase tracking-wider">
                  {isBn ? 'গভর্ন্যান্স সেক্রেটারিয়েট সিদ্ধান্ত' : 'Governance Recommendation'}
                </span>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  {t(sctSpusProjectData.dueDiligence.recommendation)}
                </p>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 6. BOTTOM CALLOUT CTA */}
      <section className="py-14 bg-gradient-to-r from-[#1B365D] to-[#138086] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#E6A119] text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {isBn ? 'সরাসরি অংশ নিন' : 'Support SPUS Project'}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            {isBn ? '৭৫ জন বিশেষ শিশুর শিক্ষার দায়িত্ব নিন' : 'Transform the Lives of Special Needs Children in Satarkul'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            {isBn 
              ? 'আপনার অনুদান, থেরাপি উপকরণ কিংবা স্বেচ্ছাসেবার মাধ্যমে সাঁতারকুল সেন্টারের প্রতিটি শিশুর মুখে হাসি ফোটাতে পাশে থাকুন।'
              : 'Every contribution directly funds specialized educators, therapy devices, and daily hot nutritious meals.'}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="bg-[#E6A119] hover:bg-[#d49214] text-slate-950 font-black px-6 py-3 rounded-xl text-xs transition-colors shadow-lg"
            >
              {isBn ? 'SPUS তহবিলে অনুদান দিন' : 'Donate to SPUS Project'}
            </Link>
            <Link
              to="/volunteer"
              className="bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-6 py-3 rounded-xl text-xs transition-colors"
            >
              {isBn ? 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' : 'Volunteer at Satarkul Center'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
