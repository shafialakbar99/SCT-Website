import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NewsItem } from '../types';
import { getNewsItems } from '../api/newsApi';
import { SafeImage } from '../components/common/SafeImage';

export const NewsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    getNewsItems().then(setNews);
  }, []);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            📰 {isBn ? 'সংবাদ ও অফিসিয়াল ঘোষণা' : 'Press Releases & News'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'মিডিয়া কভারেজ ও নোটিশ' : 'Media Highlights & Press Coverage'}
          </h1>
        </div>

        {/* NEWS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((n) => (
            <div key={n.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row group">
              <SafeImage
                src={n.coverImage}
                alt={typeof n.title === 'object' ? n.title.en : ''}
                className="w-full sm:w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-500 shrink-0"
                fallbackCategory="general"
              />
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full uppercase">
                    {t(n.source)}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base hover:text-[#0D6E4F] transition-colors line-clamp-2 mt-2">
                    <Link to={`/news/${n.slug}`}>{t(n.title)}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{t(n.summary)}</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {n.publishedAt}</span>
                  <Link to={`/news/${n.slug}`} className="text-[#0D6E4F] font-bold hover:underline flex items-center gap-1">
                    <span>{isBn ? 'বিস্তারিত' : 'Details'}</span> <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
