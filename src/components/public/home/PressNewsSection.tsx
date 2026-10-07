import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { NewsItem } from '../../../types';
import { getNewsItems } from '../../../api/public/newsApi';
import { SafeImage } from '../../common/SafeImage';

export const PressNewsSection: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    getNewsItems().then((res) => setNews(res.slice(0, 3)));
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1B365D] text-xs font-black uppercase tracking-wider mb-2 border border-blue-100">
              <Newspaper className="w-3.5 h-3.5 text-[#1B365D]" />
              <span>{isBn ? 'প্রেস ও মিডিয়া কাভারেজ' : 'Press & Media'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B365D] tracking-tight">
              {isBn ? 'সাম্প্রতিক সংবাদ ও প্রেস বিজ্ঞপ্তি' : 'Latest Press Releases & News'}
            </h2>
          </div>

          <Link
            to="/news"
            className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isBn ? 'সব সংবাদ দেখুন' : 'View All News'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-[#FDFBF7] rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden mb-4 h-48">
                  <SafeImage
                    src={item.coverImage}
                    alt={typeof item.title === 'object' ? item.title.en : ''}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackCategory="general"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B365D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {t(item.source)}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(item.publishedAt).toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#0D6E4F] transition-colors line-clamp-2">
                  <Link to={`/news/${item.slug}`}>{t(item.title)}</Link>
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                  {t(item.summary)}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0D6E4F]">
                <Link to={`/news/${item.slug}`} className="hover:underline flex items-center gap-1">
                  <span>{isBn ? 'বিস্তারিত পড়ুন' : 'Read Full Story'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
