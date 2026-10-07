import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NewsItem } from '../../types';
import { getNewsItemBySlug } from '../../api/public/newsApi';
import { SafeImage } from '../../components/common/SafeImage';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isBn } = useLanguage();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (slug) {
      getNewsItemBySlug(slug).then(setNews);
    }
  }, [slug]);

  if (!news) {
    return <div className="py-20 text-center">News item not found</div>;
  }

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <Link to="/news" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0D6E4F]">
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? 'সকল সংবাদের তালিকায় ফিরে যান' : 'Back to News'}</span>
        </Link>

        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
          {t(news.source)}
        </span>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {t(news.title)}
        </h1>

        <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold border-y border-slate-200 py-3">
          <Calendar className="w-4 h-4 text-purple-600" />
          <span>{news.publishedAt}</span>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg h-80">
          <SafeImage
            src={news.coverImage}
            alt={t(news.title)}
            className="w-full h-full object-cover"
            fallbackCategory="general"
          />
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 leading-relaxed text-sm text-slate-700 space-y-4">
          <p className="text-base font-semibold text-slate-900">{t(news.summary)}</p>
          <p>{t(news.content)}</p>
        </div>

      </div>
    </div>
  );
};
