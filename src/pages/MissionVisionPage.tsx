import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getMissionVisionData } from '../api/siteContentApi';
import { MissionVisionData } from '../types';

export const MissionVisionPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [data, setData] = useState<MissionVisionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const mvRes = await getMissionVisionData();
        setData(mvRes);
      } catch (err) {
        console.error('Failed to load mission vision data from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !data) {
    return (
      <div className="py-24 bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#0D6E4F] animate-spin" />
        <p className="text-xs font-bold text-slate-600">{isBn ? 'মিশন ও ভিশন তথ্য লোড হচ্ছে...' : 'Loading Mission & Vision data...'}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            🎯 {isBn ? 'আমাদের মূল দিশা ও ভবিষ্যৎ রূপরেখা' : 'Our Strategic Compass & Future Roadmap'}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {isBn ? (
                <>লক্ষ্য, উদ্দেশ্য ও <span className="text-[#0D6E4F]">ভিশন {data.roadmapYear || '২০৩০'}</span></>
              ) : (
                <>Mission, Vision & <span className="text-[#0D6E4F]">Strategic Objectives</span></>
              )}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            {isBn
              ? 'হিউম্যানিটি ফাস্ট বিডি-এর মিশন হলো বাংলাদেশের প্রাকৃতিক দুর্যোগে নিঃস্ব হওয়া মানুষগুলোর জীবনরক্ষা করা এবং তাদের দীর্ঘমেয়াদী আত্মমর্যাদা ফিরিয়ে আনা।'
              : 'Our mission guides every field rescue mission, deep water well construction, and zero-overhead Zakat distribution across Bangladesh.'
            }
          </p>
        </div>

        {/* MISSION & VISION DUAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* MISSION CARD */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D6E4F]/5 rounded-bl-full pointer-events-none" />
            
            <div className="w-14 h-14 bg-[#0D6E4F] text-white rounded-2xl flex items-center justify-center font-bold shadow-md shadow-[#0D6E4F]/20">
              <Target className="w-7 h-7 text-[#E6A119]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#0D6E4F] uppercase tracking-wider">
                {isBn ? 'আমাদের মিশন' : 'Primary Mission Statement'}
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                {t(data.missionTitle)}
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {t(data.missionDesc)}
            </p>

            <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs font-bold text-slate-700">
              {data.missionPoints.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D6E4F]" />
                  <span>{t(pt)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VISION CARD */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6A119]/10 rounded-bl-full pointer-events-none" />

            <div className="w-14 h-14 bg-[#E6A119] text-slate-900 rounded-2xl flex items-center justify-center font-bold shadow-md">
              <Eye className="w-7 h-7 text-slate-900" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#E6A119] uppercase tracking-wider">
                {isBn ? `আমাদের ভিশন ${data.roadmapYear}` : `Vision ${data.roadmapYear} Roadmap`}
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                {t(data.visionTitle)}
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {t(data.visionDesc)}
            </p>

            <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs font-bold text-slate-700">
              {data.visionPoints.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E6A119]" />
                  <span>{t(pt)}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="bg-[#0D6E4F] text-white rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl font-black">
            {isBn ? 'আমাদের এই মানবকল্যাণmissions অংশীদার হোন' : 'Join Hands to Realize Our Vision for Bangladesh'}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto">
            {isBn
              ? 'আপনার জাকাত, জেনারেল ডোনেশন বা ভলান্টিয়ার অবদানের মাধ্যমে গড়ে উঠুক একটি সুন্দর ও আত্মমর্যাদাশীল বাংলাদেশ।'
              : 'Whether through Zakat, monthly sponsorships, or volunteering on the ground, your partnership transforms lives forever.'
            }
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <Link to="/donate" className="bg-[#E6A119] text-slate-900 px-6 py-3 rounded-xl font-extrabold text-xs shadow-md">
              {isBn ? 'দান করুন' : 'Support Our Mission'}
            </Link>
            <Link to="/volunteer" className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-white/20">
              {isBn ? 'স্বেচ্ছাসেবক হোন' : 'Join as Volunteer'}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
