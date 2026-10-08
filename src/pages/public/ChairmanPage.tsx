import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Quote, ArrowRight, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getChairmanData } from '../../api/public/leadershipApi';
import { LeaderProfile } from '../../types';
import { SafeImage } from '../../components/common/SafeImage';

export const ChairmanPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [chairman, setChairman] = useState<LeaderProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getChairmanData();
        setChairman(data);
      } catch (err) {
        console.error('Failed to load chairman data from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !chairman) {
    return (
      <div className="py-24 bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#0D6E4F] animate-spin" />
        <p className="text-xs font-bold text-slate-600">{isBn ? 'চেয়ারম্যানের তথ্য লোড হচ্ছে...' : "Loading Chairman's message..."}</p>
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
          <span className="text-[#0D6E4F]">{isBn ? 'চেয়ারম্যানের বাণী' : "Chairman's Message"}</span>
        </div>

        {/* PROFILE & MESSAGE CONTAINER */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PROFILE CARD (4 COLS) */}
            <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
              <div className="relative inline-block lg:block">
                <SafeImage
                  src={chairman.imageUrl}
                  alt={t(chairman.name)}
                  className="w-56 h-72 sm:w-64 sm:h-80 mx-auto rounded-3xl object-cover ring-4 ring-[#0D6E4F]/20 shadow-2xl"
                  fallbackCategory="leadership"
                />
                <span className="absolute -bottom-3 right-4 bg-[#E6A119] text-slate-900 font-black text-[10px] px-3 py-1 rounded-full uppercase shadow-md">
                  Founder & Chairman
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 leading-snug">
                  {t(chairman.name)}
                </h2>
                <p className="text-xs font-bold text-[#0D6E4F]">
                  {t(chairman.designation)}
                </p>
              </div>

              <div className="p-4 bg-[#FDFBF7] rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-2 text-left">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#0D6E4F]" />
                  <span>Key Qualifications</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-500">
                  <li>• Managing Director of Data Enterprises Limited</li>
                  <li>• Former Director & Active Member of Dhaka Chamber of Commerce & Industry (DCCI)</li>
                  <li>• Former JCI World Vice President (2006) & JCI Bangladesh National President (2004)</li>
                  <li>• Vice President of Bangladesh Sustainable & Renewable Energy Association (BSREA)</li>
                  <li>• President of Ex-Shaheen Association Dhaka (ESAD) (2024–25)</li>
                  <li>• Past President of Rotary Club of Metropolitan Dhaka (2001–02) & Paul Harris Fellow</li>
                  <li>• M.B.S. in Finance & Banking from Dhaka University and Proud Shaheen Alumnus</li>
                </ul>
              </div>
            </div>

            {/* RIGHT MESSAGE BODY (8 COLS) */}
            <div className="lg:col-span-8 space-y-6 text-slate-800">
              
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  {isBn ? 'চেয়ারম্যানের অফিসিয়াল বাণী' : "Chairman's Official Address"}
                </span>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
                  {isBn ? 'স্বচ্ছতা ও সম্মানের সাথে মানবতার সেবা' : 'A Message of Compassion, Dignity & Absolute Transparency'}
                </h1>
              </div>

              {/* STYLIZED QUOTE CALLOUT */}
              {chairman.quote && (
                <div className="bg-[#0D6E4F]/5 p-6 rounded-2xl border-l-4 border-[#0D6E4F] relative">
                  <Quote className="w-8 h-8 text-[#0D6E4F]/20 absolute right-4 top-4" />
                  <p className="text-sm font-semibold text-[#0D6E4F] italic leading-relaxed">
                    "{t(chairman.quote)}"
                  </p>
                </div>
              )}

              {/* FULL MESSAGE CONTENT */}
              {chairman.message && (
                <div className="text-sm leading-relaxed space-y-4 text-slate-700 whitespace-pre-line font-serif sm:font-sans">
                  {isBn ? chairman.message.bn : chairman.message.en}
                </div>
              )}

              {/* SIGNATURE BLOCK */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 text-sm">{t(chairman.name)}</p>
                  <p className="text-xs text-slate-500 font-semibold">{t(chairman.role)}</p>
                  <p className="text-[10px] font-mono text-[#0D6E4F]">Shaheen Cares Trust</p>
                </div>

                <Link
                  to="/leadership/ceo"
                  className="inline-flex items-center gap-2 bg-[#0D6E4F] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0A583F] shadow-sm transition-all"
                >
                  <span>{isBn ? 'সচিবের বাণী পড়ুন' : "Read Secretary's Message"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
