import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight, ExternalLink, Tv, Sparkles, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { NewsItem } from '../../../types';
import { getNewsItems } from '../../../api/public/newsApi';
import { SafeImage } from '../../common/SafeImage';
import { MediaSourceBadge } from '../../common/MediaSourceBadge';

export const PressNewsSection: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tv' | 'press' | 'official'>('all');

  useEffect(() => {
    getNewsItems().then(setNews);
  }, []);

  // Separate featured inauguration story from list
  const featuredItem = useMemo(() => {
    return news.find((item) => item.featured) || news[0];
  }, [news]);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'tv') return item.sourceType === 'tv';
      if (selectedCategory === 'press') return item.sourceType === 'newspaper' || item.sourceType === 'portal';
      if (selectedCategory === 'official') return item.sourceType === 'official';
      return true;
    });
  }, [news, selectedCategory]);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-black uppercase tracking-wider mb-2.5 border border-[#1B365D]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#E6A119]" />
              <span>{isBn ? 'ইনঅগোরেশন ও মিডিয়া কাভারেজ' : 'Inauguration & Media Coverage'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1B365D] tracking-tight">
              {isBn ? 'জাতীয় গণমাধ্যমে শাহীন কেয়ার্স ট্রাস্ট' : 'Shaheen Cares Trust in National Media'}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl font-normal">
              {isBn
                ? '৯ই অক্টোবর ২০২৬-এর আনুষ্ঠানিক শুভ উদ্বোধন ও সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থার (SPUS) সাথে ঐতিহাসিক সমঝোতা স্মারক স্বাক্ষর নিয়ে দেশের শীর্ষ টেলিভিশন ও সংবাদমাধ্যমের প্রতিবেদন।'
                : 'Extensive press and broadcast coverage of the grand inauguration and landmark MoU signing with SPUS for special needs children.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B365D] text-white hover:bg-[#104E7A] text-xs font-bold transition-all shadow-xs"
            >
              <span>{isBn ? 'সকল মিডিয়া কাভারেজ' : 'View All Media'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6A119]" />
            </Link>
          </div>
        </div>

        {/* 1. FEATURED INAUGURATION & MOU SPOTLIGHT CARD */}
        {featuredItem && (
          <div className="mb-12 bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Media Image / Gallery Preview */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-slate-900 overflow-hidden">
                <SafeImage
                  src={featuredItem.coverImage}
                  alt={t(featuredItem.title)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fallbackCategory="emergency"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="bg-[#E6A119] text-slate-950 text-[10.5px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {isBn ? 'শুভ উদ্বোধন ও চুক্তি স্বাক্ষর' : 'Grand Inauguration & MoU'}
                  </span>
                  <MediaSourceBadge
                    sourceType={featuredItem.sourceType}
                    sourceName={featuredItem.sourceName}
                    fallbackSource={featuredItem.source}
                    size="sm"
                  />
                </div>

                {/* Gallery Count pill if available */}
                {featuredItem.gallery && featuredItem.gallery.length > 0 && (
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-white/90 font-medium">
                      <ImageIcon className="w-3.5 h-3.5 text-[#E6A119]" />
                      {featuredItem.gallery.length} {isBn ? 'টি অনুষ্ঠান ও চুক্তি স্মারক আলোকচিত্র' : 'Ceremony Photos'}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[11px] text-white/80">
                      {featuredItem.publishedAt}
                    </span>
                  </div>
                )}
              </div>

              {/* Story Content */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-[#FDFBF7]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-4 h-4 text-[#0D6E4F]" />
                    <span>{new Date(featuredItem.publishedAt).toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0D6E4F] transition-colors leading-snug">
                    <Link to={`/news/${featuredItem.slug}`}>
                      {t(featuredItem.title)}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t(featuredItem.summary)}
                  </p>

                  {/* Thumbnail Row of ceremony */}
                  {featuredItem.gallery && (
                    <div className="pt-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {isBn ? 'অনুষ্ঠানের আলোকচিত্র সমূহ' : 'Inauguration Moments'}
                      </p>
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {featuredItem.gallery.slice(0, 5).map((imgUrl, i) => (
                          <Link
                            key={i}
                            to={`/news/${featuredItem.slug}`}
                            className="w-14 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 hover:border-[#0D6E4F] transition-all hover:scale-105"
                          >
                            <img src={imgUrl} alt="Moment" className="w-full h-full object-cover" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={`/news/${featuredItem.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D6E4F] hover:bg-[#0A4D37] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>{isBn ? 'সম্পূর্ণ প্রতিবেদন ও ফটো দেখুন' : 'View Full Report & Photos'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {isBn ? '১৮৮২ ট্রাস্ট আইনের অধীন নিবন্ধিত' : 'Registered under Trust Act 1882'}
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. CATEGORY FILTER TABS & TV CHIP STRIP */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl w-fit">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#1B365D] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'সকল কাভারেজ' : 'All Media'} ({news.length})
            </button>
            <button
              onClick={() => setSelectedCategory('tv')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'tv'
                  ? 'bg-white text-rose-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tv className="w-3.5 h-3.5 text-rose-600" />
              <span>{isBn ? 'টিভি চ্যানেল কাভারেজ' : 'TV Broadcasts'}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('press')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'press'
                  ? 'bg-white text-[#0D6E4F] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5 text-[#0D6E4F]" />
              <span>{isBn ? 'জাতীয় পত্রিকা ও পোর্টাল' : 'Press & Portals'}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('official')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'official'
                  ? 'bg-white text-[#1B365D] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'অফিসিয়াল বিজ্ঞপ্তি' : 'Official Releases'}
            </button>
          </div>

          <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
            <span>{isBn ? 'মোট সংবাদ প্রকাশনা:' : 'Published News Outlets:'}</span>
            <span className="bg-[#1B365D] text-white font-mono px-2 py-0.5 rounded-md text-[11px] font-bold">
              {filteredNews.length}
            </span>
          </div>
        </div>

        {/* 3. NEWS FEED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredNews
            .filter((item) => item.id !== (featuredItem?.id && selectedCategory === 'all' ? featuredItem.id : ''))
            .map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Cover Image with Badge */}
                  <div className="relative rounded-2xl overflow-hidden mb-4 h-48 bg-slate-100">
                    <SafeImage
                      src={item.coverImage}
                      alt={t(item.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackCategory="general"
                    />
                    
                    {/* Source Brand Badge */}
                    <div className="absolute top-3 left-3">
                      <MediaSourceBadge
                        sourceType={item.sourceType}
                        sourceName={item.sourceName}
                        fallbackSource={item.source}
                        size="sm"
                      />
                    </div>

                    {/* External Link Quick Badge */}
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-1.5 rounded-full transition-transform hover:scale-110 shadow-sm"
                        title={isBn ? 'মূল সংবাদে যান' : 'Visit original source'}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#E6A119]" />
                      </a>
                    )}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{new Date(item.publishedAt).toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-bold text-slate-600 truncate">{item.sourceName || t(item.source)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#0D6E4F] transition-colors line-clamp-2 leading-snug">
                    <Link to={`/news/${item.slug}`}>{t(item.title)}</Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                    {t(item.summary)}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    to={`/news/${item.slug}`}
                    className="font-bold text-[#0D6E4F] hover:underline flex items-center gap-1"
                  >
                    <span>{isBn ? 'বিস্তারিত পড়ুন' : 'Read Story'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  {item.externalUrl ? (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-[#1B365D] hover:underline text-[11.5px]"
                    >
                      <span>{isBn ? 'মূল পোর্টাল' : 'Source'}</span>
                      <ExternalLink className="w-3 h-3 text-[#E6A119]" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-400">
                      {isBn ? 'অফিসিয়াল' : 'Official'}
                    </span>
                  )}
                </div>
              </article>
            ))}
        </div>

      </div>
    </section>
  );
};
