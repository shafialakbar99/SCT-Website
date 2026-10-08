import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Compass, Users, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getCeoData } from '../../api/public/leadershipApi';
import { LeaderProfile } from '../../types';
import { SafeImage } from '../../components/common/SafeImage';

export const CeoPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [ceo, setCeo] = useState<LeaderProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getCeoData();
        setCeo(data);
      } catch (err) {
        console.error('Failed to load CEO data from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !ceo) {
    return (
      <div className="py-24 bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#0D6E4F] animate-spin" />
        <p className="text-xs font-bold text-slate-600">{isBn ? 'সিইও-এর তথ্য লোড হচ্ছে...' : "Loading CEO's message..."}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
          <Link to="/" className="hover:text-[#0D6E4F]">{isBn ? 'হোম' : 'Home'}</Link>
          <span>/</span>
          <Link to="/about" className="hover:text-[#0D6E4F]">{isBn ? 'আমাদের কথা' : 'About Us'}</Link>
          <span>/</span>
          <span className="text-[#0D6E4F]">{isBn ? 'সচিবের বাণী' : "Secretary's Message"}</span>
        </div>

        {/* PROFILE & MESSAGE CONTAINER */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PROFILE CARD (4 COLS) */}
            <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
              <div className="relative inline-block lg:block">
                <SafeImage
                  src={ceo.imageUrl}
                  alt={t(ceo.name)}
                  className="w-56 h-72 sm:w-64 sm:h-80 mx-auto rounded-3xl object-cover ring-4 ring-[#0D6E4F]/20 shadow-2xl"
                  fallbackCategory="leadership"
                />
                <span className="absolute -bottom-3 right-4 bg-[#0D6E4F] text-white font-black text-[10px] px-3 py-1 rounded-full uppercase shadow-md">
                  General Secretary
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 leading-snug">
                  {t(ceo.name)}
                </h2>
                <p className="text-xs font-bold text-[#0D6E4F]">
                  {t(ceo.designation)}
                </p>
              </div>
            </div>

            {/* RIGHT MESSAGE BODY (8 COLS) */}
            <div className="lg:col-span-8 space-y-6 text-slate-800">
              
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  {isBn ? 'সচিবের বার্তা' : "Secretary's Address"}
                </span>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
                  {isBn ? 'দক্ষতা, দ্রুত প্রতিক্রিয়া ও শতভাগ মাঠ স্বচ্ছতা' : 'Operational Excellence, Speed & Absolute Field Integrity'}
                </h1>
              </div>

              {/* STYLIZED QUOTE CALLOUT */}
              {ceo.quote && (
                <div className="bg-[#E6A119]/10 p-6 rounded-2xl border-l-4 border-[#E6A119] relative">
                  <Quote className="w-8 h-8 text-[#E6A119]/30 absolute right-4 top-4" />
                  <p className="text-sm font-semibold text-slate-900 italic leading-relaxed">
                    "{t(ceo.quote)}"
                  </p>
                </div>
              )}

              {/* FULL MESSAGE CONTENT */}
              {ceo.message && (
                <div className="text-sm leading-relaxed space-y-4 text-slate-700 whitespace-pre-line font-serif sm:font-sans">
                  {isBn ? ceo.message.bn : ceo.message.en}
                </div>
              )}

              {/* SIGNATURE BLOCK */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 text-sm">{t(ceo.name)}</p>
                  <p className="text-xs text-slate-500 font-semibold">{t(ceo.role)}</p>
                  <p className="text-[10px] font-mono text-[#0D6E4F]">Shaheen Cares Trust</p>
                </div>

                <div className="flex gap-2">
                  <Link
                    to="/leadership/chairman"
                    className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    <span>{isBn ? 'চেয়ারম্যানের বাণী' : 'Chairman Message'}</span>
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-1.5 bg-[#0D6E4F] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0A583F] transition-all"
                  >
                    <span>{isBn ? 'কর্মকর্তা ও টিম দেখুন' : 'View Staff & Team'}</span>
                    <Users className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
