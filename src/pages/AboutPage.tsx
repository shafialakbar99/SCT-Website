import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAboutOrganization } from '../api/siteContentApi';
import { AboutOrganization } from '../types';
import { SafeImage } from '../components/common/SafeImage';

export const AboutPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'mission' | 'values' | 'history'>('overview');
  const [aboutData, setAboutData] = useState<AboutOrganization | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAboutOrganization();
        setAboutData(data);
      } catch (err) {
        console.error('Failed to load about organization data from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !aboutData) {
    return (
      <div className="py-24 bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#0D6E4F] animate-spin" />
        <p className="text-xs font-bold text-slate-600">{isBn ? 'সংগঠনের তথ্য লোড হচ্ছে...' : 'Loading Organization Info...'}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HERO SECTION */}
        <div className="bg-[#0D6E4F] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-[#E6A119] text-slate-900 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              {isBn ? 'আমাদের ইতিহাস ও কার্যক্রম' : 'About Humanity First BD'}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {t(aboutData.heroTitle)}
            </h1>

            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              {t(aboutData.heroSubtitle)}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                ✓ NGO Affairs Bureau Reg: 2847
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                ✓ 100% Tax Exempt under Sec 44(4)
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                ✓ 64 Districts Operational Reach
              </span>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex p-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-xs font-bold gap-2 overflow-x-auto">
          {[
            { id: 'overview', labelEn: 'Organizational Overview', labelBn: 'সংগঠনের পরিচিতি' },
            { id: 'mission', labelEn: 'Mission & Vision 2030', labelBn: 'লক্ষ্য ও ভিশন ২০৩০' },
            { id: 'values', labelEn: 'Core Operational Values', labelBn: 'আমাদের মূলনীতি' },
            { id: 'history', labelEn: 'History & Key Milestones', labelBn: 'ইতিহাস ও মাইলফলক' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.id ? 'bg-[#0D6E4F] text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {isBn ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {isBn ? 'কেন হিউম্যানিটি ফাস্ট বিডি আলাদা?' : 'Why Humanity First BD Stands Out'}
                </h2>
                <div className="whitespace-pre-line">
                  {t(aboutData.overview)}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {aboutData.stats.map((st, idx) => (
                    <div key={idx} className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                      <span className="text-xl font-black text-[#0D6E4F] block">{t(st.value)}</span>
                      <span className="text-xs font-bold text-slate-600">
                        {t(st.label)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <SafeImage
                  src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop"
                  alt="Relief Distribution"
                  className="w-full h-80 object-cover"
                  fallbackCategory="emergency"
                />
              </div>
            </div>

            {/* QUICK LINK TO LEADERSHIP */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-lg font-black text-slate-900">
                  {isBn ? 'আমাদের গভর্ন্যান্স ও নেতৃত্ব দল দেখুন' : 'Meet Our Leadership & Executive Governance'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isBn ? 'চেয়ারম্যান, সিইও এবং ট্রাস্টি বোর্ডের বার্তা পাঠ করুন।' : 'Read messages from Chairman, Managing Director/CEO, and Board of Trustees.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link to="/leadership/chairman" className="bg-[#0D6E4F] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm">
                  {isBn ? 'চেয়ারম্যানের বাণী' : 'Chairman Message'}
                </Link>
                <Link to="/leadership/ceo" className="bg-[#0D6E4F] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm">
                  {isBn ? 'সিইও-এর বাণী' : 'CEO Message'}
                </Link>
                <Link to="/leadership/board" className="bg-slate-100 text-slate-800 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-200">
                  {isBn ? 'ট্রাস্টি বোর্ড' : 'Board of Trustees'}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MISSION & VISION */}
        {activeTab === 'mission' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* MISSION CARD */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
                <div className="w-12 h-12 bg-[#0D6E4F]/10 text-[#0D6E4F] rounded-2xl flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {isBn ? 'আমাদের মিশন (Our Mission)' : 'Our Mission'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isBn
                    ? 'বাংলাদেশের প্রতিটি প্রাকৃতিক দুর্যোগে দ্রুততম সময়ের মধ্যে উদ্ধারকাজ ও ত্রাণ নিশ্চিত করা, উপকূলীয় অঞ্চলে নিরাপদ খাবার পানির স্থায়ী সুযোগ তৈরি করা এবং সুবিধাবঞ্চিত এতিম ও পথশিশুদের সুশিক্ষায় শিক্ষিত করে গড়ে তোলা।'
                    : 'To provide rapid, honorable disaster relief during catastrophes, establish sustainable solar clean water infrastructure in climate-vulnerable coastal belts, and empower marginalized children through holistic primary education.'
                  }
                </p>
              </div>

              {/* VISION CARD */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
                <div className="w-12 h-12 bg-[#E6A119]/10 text-[#E6A119] rounded-2xl flex items-center justify-center font-bold">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {isBn ? 'আমাদের ভিশন ২০৩০ (Our Vision 2030)' : 'Our Vision 2030'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isBn
                    ? 'একটি স্বাবলম্বী, দারিদ্র্যমুক্ত ও বৈষম্যহীন বাংলাদেশ গড়ে তোলা যেখানে কোনো মা নিরাপদ সুপেয় পানির অভাবে ভুগবে না এবং কোনো শিশু দারিদ্র্যের কারণে শিক্ষার আলো থেকে বঞ্চিত হবে না।'
                    : 'A resilient, self-sufficient, and poverty-free Bangladesh where every citizen enjoys clean water, dignified shelter, equal healthcare, and quality education.'
                  }
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: CORE VALUES */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.coreValues.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#0D6E4F]" />
                <h4 className="font-extrabold text-[#0D6E4F] text-base">
                  {t(v.title)}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(v.desc)}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: HISTORY */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-8">
            <h3 className="text-xl font-black text-slate-900">
              {isBn ? 'সংগঠনের যাত্রাপথ ও উল্লেখযোগ্য মাইলফলক' : 'Our Organizational Timeline & Growth'}
            </h3>

            <div className="space-y-6 relative border-l-2 border-[#0D6E4F]/20 pl-6 ml-2">
              {aboutData.historyMilestones.map((item, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0D6E4F] ring-4 ring-emerald-100" />
                  <span className="text-xs font-mono font-bold text-[#E6A119] bg-amber-50 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {t(item.title)}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {t(item.desc)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
