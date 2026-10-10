import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight, ExternalLink, Tv, Search, Sparkles, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NewsItem } from '../../types';
import { getNewsItems } from '../../api/public/newsApi';
import { SafeImage } from '../../components/common/SafeImage';
import { MediaSourceBadge } from '../../components/common/MediaSourceBadge';

export const NewsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tv' | 'press' | 'official'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getNewsItems().then(setNews);
  }, []);

  const featuredItem = useMemo(() => {
    return news.find((item) => item.featured) || news[0];
  }, [news]);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      // Category filter
      if (selectedCategory === 'tv' && item.sourceType !== 'tv') return false;
      if (selectedCategory === 'press' && item.sourceType !== 'newspaper' && item.sourceType !== 'portal') return false;
      if (selectedCategory === 'official' && item.sourceType !== 'official') return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleEn = item.title.en.toLowerCase();
        const titleBn = item.title.bn.toLowerCase();
        const summaryEn = item.summary.en.toLowerCase();
        const summaryBn = item.summary.bn.toLowerCase();
        const sourceName = (item.sourceName || '').toLowerCase();
        return (
          titleEn.includes(query) ||
          titleBn.includes(query) ||
          summaryEn.includes(query) ||
          summaryBn.includes(query) ||
          sourceName.includes(query)
        );
      }
      return true;
    });
  }, [news, selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1B365D]/10 text-[#1B365D] font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-[#1B365D]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#E6A119]" />
            <span>{isBn ? 'মিডিয়া কভারেজ ও প্রেস রিলিজ' : 'Media Coverage & Press Releases'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {isBn ? 'সংবাদমাধ্যম ও জাতীয় কভারেজ' : 'Press Highlights & Broadcasts'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-2xl mx-auto">
            {isBn
              ? 'শাহীন কেয়ার্স ট্রাস্টের আনুষ্ঠানিক শুভ উদ্বোধন, সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থার (SPUS) সাথে ঐতিহাসিক সমঝোতা স্মারক এবং সামাজিক উন্নয়ন উদ্যোগের জাতীয় মিডিয়া কভারেজ।'
              : 'Television features, national press reports, and official announcements celebrating SCT’s inauguration and long-term disability development partnership.'}
          </p>
        </div>

        {/* 1. FEATURED INAUGURATION BANNER */}
        {featuredItem && !searchQuery && (
          <div className="mb-12 bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-slate-900 overflow-hidden">
                <SafeImage
                  src={featuredItem.coverImage}
                  alt={t(featuredItem.title)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fallbackCategory="emergency"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
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

                {featuredItem.gallery && (
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                      <ImageIcon className="w-3.5 h-3.5 text-[#E6A119]" />
                      {featuredItem.gallery.length} {isBn ? 'টি অনুষ্ঠান ও চুক্তি স্মারক আলোকচিত্র' : 'Ceremony Photos'}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[11px]">
                      {featuredItem.publishedAt}
                    </span>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-[#FDFBF7]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-4 h-4 text-[#0D6E4F]" />
                    <span>{new Date(featuredItem.publishedAt).toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0D6E4F] transition-colors leading-snug">
                    <Link to={`/news/${featuredItem.slug}`}>
                      {t(featuredItem.title)}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t(featuredItem.summary)}
                  </p>

                  {/* Ceremony Moments Gallery Strip */}
                  {featuredItem.gallery && (
                    <div className="pt-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {isBn ? 'অনুষ্ঠানের আলোকচিত্র সমূহ' : 'Inauguration Moments'}
                      </p>
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {featuredItem.gallery.slice(0, 6).map((imgUrl, i) => (
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

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    to={`/news/${featuredItem.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D6E4F] hover:bg-[#0A4D37] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>{isBn ? 'সম্পূর্ণ প্রতিবেদন ও ফটো গ্যালারি' : 'Read Full Report & Gallery'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {isBn ? 'অফিসিয়াল প্রেস রিলিজ' : 'Official Press Release'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. FILTER CONTROLS & SEARCH */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'সকল সংবাদ' : 'All Media'} ({news.length})
            </button>
            <button
              onClick={() => setSelectedCategory('tv')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'tv'
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tv className="w-3.5 h-3.5 text-rose-500" />
              <span>{isBn ? 'টেলিভিশন কাভারেজ' : 'TV Broadcasts'}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('press')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'press'
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5 text-[#0D6E4F]" />
              <span>{isBn ? 'জাতীয় পত্রিকা ও পোর্টাল' : 'Press & Online'}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('official')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'official'
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'অফিসিয়াল ঘোষণা' : 'Official Notices'}
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isBn ? 'সংবাদ বা চ্যানেল খুঁজুন...' : 'Search news or outlet...'}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20 focus:border-[#1B365D]"
            />
          </div>
        </div>

        {/* 3. NEWS FEED GRID */}
        {filteredNews.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200">
            <Newspaper className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-bold text-sm">
              {isBn ? 'কোনো সংবাদ খুঁজে পাওয়া যায়নি' : 'No news items found'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredNews.map((n) => (
              <article
                key={n.id}
                className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 h-48 bg-slate-100">
                    <SafeImage
                      src={n.coverImage}
                      alt={t(n.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackCategory="general"
                    />
                    
                    <div className="absolute top-3 left-3">
                      <MediaSourceBadge
                        sourceType={n.sourceType}
                        sourceName={n.sourceName}
                        fallbackSource={n.source}
                        size="sm"
                      />
                    </div>

                    {n.externalUrl && (
                      <a
                        href={n.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-1.5 rounded-full transition-transform hover:scale-110 shadow-sm"
                        title={isBn ? 'মূল সংবাদ মাধ্যমে যান' : 'Visit original media'}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#E6A119]" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{new Date(n.publishedAt).toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-bold text-slate-600 truncate">{n.sourceName || t(n.source)}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#0D6E4F] transition-colors line-clamp-2 leading-snug">
                    <Link to={`/news/${n.slug}`}>{t(n.title)}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                    {t(n.summary)}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    to={`/news/${n.slug}`}
                    className="font-bold text-[#0D6E4F] hover:underline flex items-center gap-1"
                  >
                    <span>{isBn ? 'বিস্তারিত পড়ুন' : 'Read Full Story'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  {n.externalUrl ? (
                    <a
                      href={n.externalUrl}
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
        )}

      </div>
    </div>
  );
};
