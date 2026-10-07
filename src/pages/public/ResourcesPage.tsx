import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { sctResourcesData } from '../../data/sctContent';
import {
  BookMarked,
  Globe,
  FileText,
  Users2,
  Award,
  Search,
  ExternalLink,
  ShieldCheck,
  Download,
  Building,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  BookMarked,
  FileText,
  Users2,
  Award
};

export const ResourcesPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredCategories = sctResourcesData.map(cat => {
    const items = cat.items.filter(item => {
      const matchText = `${item.title} ${item.subtitle.en} ${item.subtitle.bn} ${item.organization}`.toLowerCase();
      return matchText.includes(searchTerm.toLowerCase());
    });
    return { ...cat, items };
  }).filter(cat => cat.items.length > 0);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#1B365D]/5 via-[#138086]/5 to-transparent border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#138086] transition-colors">{isBn ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <span className="text-[#138086]">{isBn ? 'তথ্যসূত্র ও সংস্থান' : 'Resources & References'}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138086]/10 text-[#138086] text-xs font-black uppercase tracking-wider border border-[#138086]/20">
              <BookMarked className="w-3.5 h-3.5" />
              <span>{isBn ? 'আইনি ভিত্তি ও আন্তর্জাতিক ফ্রেমওয়ার্ক' : 'Knowledge & Legal Repository'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] tracking-tight leading-tight">
              {isBn ? 'তথ্যসূত্র, আইন ও গবেষণা সংস্থান' : 'Resources & References'}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed pt-2">
              {isBn 
                ? 'জাতিসংঘ সনদ, বাংলাদেশ সরকারের ট্রাস্ট ও প্রতিবন্ধী আইন, জনমিতিক গবেষণা এবং শাহীন কেয়ার্স ট্রাস্টের প্রাতিষ্ঠানিক ভিত্তি দলিলসমূহের উন্মুক্ত সংগ্রহ।'
                : 'The official policy instruments, UN conventions, Bangladesh statutes, and demographic studies guiding SCT strategic initiatives.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-8 max-w-md relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder={isBn ? 'সনদ, আইন বা সংস্থার নাম দিয়ে খুঁজুন...' : 'Search conventions, laws, or institutions...'}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white shadow-xs"
            />
          </div>

        </div>
      </section>

      {/* 2. REPOSITORY CATEGORIES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Quick Notice to Financial Audit Statements */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0D6E4F]/10 text-[#0D6E4F] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900">
                  {isBn ? 'বার্ষিক অডিট ও আর্থিক স্বচ্ছতা রিপোর্ট খুঁজছেন?' : 'Looking for Financial Audits & Governance Reports?'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {isBn ? 'আমাদের স্বচ্ছতা পোর্টালে চার্টার্ড অ্যাকাউন্ট্যান্টস দ্বারা নিরীক্ষিত পূর্ণ বিবরণী রয়েছে।' : 'All financial statements are openly available on our Financial Transparency Hub.'}
                </p>
              </div>
            </div>
            <Link
              to="/transparency"
              className="bg-[#1B365D] hover:bg-[#104E7A] text-white px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-colors"
            >
              {isBn ? 'স্বচ্ছতা পোর্টালে যান' : 'View Financial Transparency Hub'}
            </Link>
          </div>

          {filteredCategories.map((cat, idx) => {
            const IconComp = iconMap[cat.iconName] || BookMarked;
            return (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#138086]/10 text-[#138086] flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#1B365D]">
                      {t(cat.categoryTitle)}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t(cat.description)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 transition-colors space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-white text-[#138086] border border-slate-200 shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {t(item.subtitle)}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700 flex items-center gap-1">
                          <Building className="w-3 h-3 text-slate-400" />
                          <span>{item.organization}</span>
                        </span>
                        <span className="text-[#138086] font-bold inline-flex items-center gap-1">
                          <span>{isBn ? 'অনুমোদিত উৎস' : 'Cited Source'}</span>
                          <CheckCircle2 className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
};
