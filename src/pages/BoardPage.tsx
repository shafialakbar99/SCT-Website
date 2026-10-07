import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getBoardMembers, getChairmanData } from '../api/leadershipApi';
import { LeaderProfile } from '../types';
import { SafeImage } from '../components/common/SafeImage';

export const BoardPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [boardMembers, setBoardMembers] = useState<LeaderProfile[]>([]);
  const [chairman, setChairman] = useState<LeaderProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [boardRes, chairmanRes] = await Promise.all([
          getBoardMembers(),
          getChairmanData()
        ]);
        setBoardMembers(boardRes);
        setChairman(chairmanRes);
      } catch (err) {
        console.error('Failed to load board data from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#0D6E4F] animate-spin" />
        <p className="text-xs font-bold text-slate-600">{isBn ? 'ট্রাস্টি বোর্ডের তথ্য লোড হচ্ছে...' : 'Loading Board of Trustees...'}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            🏛️ {isBn ? 'গভর্ন্যান্স ও ট্রাস্টি বোর্ড' : 'Governance & Oversight Board'}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {isBn ? (
              <>বোর্ড অফ <span className="text-[#0D6E4F]">ট্রাস্টিজ ও উপদেষ্টা পরিষদ</span></>
            ) : (
              <>Board of <span className="text-[#0D6E4F]">Trustees & Advisors</span></>
            )}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            {isBn
              ? 'আমাদের ট্রাস্টি বোর্ড বিশিষ্ট আইনজ্ঞ, জনস্বাস্থ্য বিশেষজ্ঞ, চার্টার্ড অ্যাকাউন্ট্যান্ট এবং সামাজিক উদ্যোক্তাদের দ্বারা গঠিত, যারা এনজিও নীতিমালা ও শতভাগ আর্থিক স্বচ্ছতা পর্যবেক্ষণ নিশ্চিত করেন।'
              : 'Our Board of Trustees comprises distinguished Supreme Court advocates, public health leaders, chartered accountants, and engineers ensuring flawless governance.'
            }
          </p>
        </div>

        {/* CHAIRMAN HIGHLIGHT CARD */}
        {chairman && (
          <div className="bg-gradient-to-br from-[#0D6E4F] to-[#0A583F] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <SafeImage
              src={chairman.imageUrl}
              alt={t(chairman.name)}
              className="w-36 h-36 rounded-2xl object-cover ring-4 ring-[#E6A119] shrink-0 shadow-lg"
              fallbackCategory="leadership"
            />
            <div className="space-y-3 text-center md:text-left">
              <span className="bg-[#E6A119] text-slate-900 font-black text-[10px] px-3 py-1 rounded-full uppercase">
                Board Chairman
              </span>
              <h2 className="text-2xl font-black">{t(chairman.name)}</h2>
              <p className="text-xs text-emerald-100 max-w-2xl leading-relaxed">
                {t(chairman.bio)}
              </p>
              <div className="pt-2">
                <Link
                  to="/leadership/chairman"
                  className="inline-flex items-center gap-2 bg-white text-[#0D6E4F] px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-50 transition-colors"
                >
                  <span>{isBn ? 'চেয়ারম্যানের পূর্ণাঙ্গ বক্তব্য পড়ুন' : "Read Chairman's Full Address"}</span>
                  →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TRUSTEES GRID */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-3">
            {isBn ? 'সম্মানিত ট্রাস্টি সদস্যবৃন্দ' : 'Trustee Board Members'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0D6E4F]/30 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <SafeImage
                      src={member.imageUrl}
                      alt={t(member.name)}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#0D6E4F]/20 shrink-0 shadow-sm"
                      fallbackCategory="leadership"
                    />
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                        {t(member.name)}
                      </h3>
                      <p className="text-xs font-bold text-[#0D6E4F] mt-0.5">
                        {t(member.role)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-3 rounded-2xl border border-slate-100 text-[11px] font-semibold text-slate-600">
                    🏢 {t(member.designation)}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    {t(member.bio)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400 flex items-center justify-between">
                  <span>NGO Affairs Bureau Approved</span>
                  <ShieldCheck className="w-4 h-4 text-[#0D6E4F]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GOVERNANCE GUARANTEE BANNER */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900">
              {isBn ? 'বার্ষিক অডিট ও গভর্নেন্স রিপোর্ট' : 'Annual Audit Reports & NGO Compliance'}
            </h3>
            <p className="text-xs text-slate-500">
              {isBn ? 'আমাদের সকল অডিট রিপোর্ট এবং ট্যাক্স এক্সেমপশন কাগজপত্র অনলাইন পোর্টালে উন্মুক্ত।' : 'View our transparent financial statements and chartered auditor certificates.'}
            </p>
          </div>

          <Link
            to="/transparency"
            className="bg-[#0D6E4F] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md hover:bg-[#0A583F] shrink-0"
          >
            {isBn ? 'আর্থিক স্বচ্ছতা পেজে যান' : 'View Financial Reports'}
          </Link>
        </div>

      </div>
    </div>
  );
};
