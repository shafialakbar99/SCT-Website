import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Image as ImageIcon, X, ChevronLeft, ChevronRight, Share2, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NewsItem } from '../../types';
import { getNewsItemBySlug, getNewsItems } from '../../api/public/newsApi';
import { SafeImage } from '../../components/common/SafeImage';
import { MediaSourceBadge } from '../../components/common/MediaSourceBadge';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isBn } = useLanguage();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      getNewsItemBySlug(slug).then((res) => {
        setNews(res || null);
      });
    }
    getNewsItems().then(setAllNews);
  }, [slug]);

  if (!news) {
    return (
      <div className="py-24 text-center bg-[#FDFBF7] min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          {isBn ? 'সংবাদটি খুঁজে পাওয়া যায়নি' : 'News item not found'}
        </h2>
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B365D] text-white text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isBn ? 'সংবাদের তালিকায় ফিরে যান' : 'Back to News List'}</span>
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedNews = allNews
    .filter((n) => n.id !== news.id)
    .slice(0, 3);

  const galleryImages = news.gallery && news.gallery.length > 0 ? news.gallery : [];

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* TOP NAV & CONTROLS */}
        <div className="flex items-center justify-between">
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0D6E4F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isBn ? 'সকল সংবাদের তালিকায় ফিরে যান' : 'Back to All Media Coverage'}</span>
          </Link>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">{isBn ? 'লিঙ্ক কপি হয়েছে' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{isBn ? 'শেয়ার করুন' : 'Share Story'}</span>
              </>
            )}
          </button>
        </div>

        {/* ARTICLE HEADER */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <MediaSourceBadge
              sourceType={news.sourceType}
              sourceName={news.sourceName}
              fallbackSource={news.source}
              size="md"
            />
            {news.featured && (
              <span className="bg-[#E6A119] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3 h-3" />
                {isBn ? 'প্রধান প্রতিবেদন' : 'Featured Story'}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight">
            {t(news.title)}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold border-y border-slate-200/90 py-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0D6E4F]" />
              <span>{new Date(news.publishedAt).toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </span>
            <span className="text-slate-300">•</span>
            <span>{isBn ? 'উৎস:' : 'Source:'} <strong className="text-slate-700 font-bold">{news.sourceName || t(news.source)}</strong></span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">{isBn ? 'শাহীন কেয়ার্স ট্রাস্ট সচিবালয়' : 'Shaheen Cares Trust'}</span>
          </div>
        </header>

        {/* EXTERNAL OUTLET CALLOUT BANNER IF PRESENT */}
        {news.externalUrl && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-950">
                  {isBn
                    ? `এই সংবাদটি মূলত ${news.sourceName || t(news.source)}-এর অফিশিয়াল মাধ্যমে প্রকাশিত হয়েছে।`
                    : `This report was published by ${news.sourceName || t(news.source)}.`}
                </p>
                <p className="text-[11px] text-blue-800/80 mt-0.5">
                  {isBn ? 'সরাসরি মূল চ্যানেলের ওয়েবসাইট বা পোর্টালে প্রতিবেদনটি দেখতে পারেন।' : 'You can read or view the full original coverage on their official platform.'}
                </p>
              </div>
            </div>

            <a
              href={news.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shrink-0 transition-all shadow-xs"
            >
              <span>{isBn ? 'মূল সংবাদ দেখুন' : 'Visit Original Source'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E6A119]" />
            </a>
          </div>
        )}

        {/* COVER HERO IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 max-h-[500px] bg-slate-900 relative">
          <SafeImage
            src={news.coverImage}
            alt={t(news.title)}
            className="w-full h-full object-cover max-h-[500px]"
            fallbackCategory="general"
          />
        </div>

        {/* MAIN BODY CONTENT */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          {/* Summary Lead paragraph */}
          <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#0D6E4F] text-slate-800 font-semibold text-sm sm:text-base leading-relaxed">
            {t(news.summary)}
          </div>

          {/* Full Content */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {t(news.content)}
          </div>
        </article>

        {/* INAUGURATION PHOTO GALLERY SECTION */}
        {galleryImages.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#0D6E4F]" />
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {isBn ? 'অনুষ্ঠানের আলোকচিত্র গ্যালারি' : 'Event Photo Gallery'}
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {galleryImages.length} {isBn ? 'টি ছবি' : 'Photos'}
              </span>
            </div>

            <p className="text-xs text-slate-500 font-normal">
              {isBn
                ? 'বড় আকারে দেখতে যেকোনো ছবিতে ক্লিক করুন।'
                : 'Click on any photo below to view in full size.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className="relative rounded-2xl overflow-hidden aspect-4/3 group border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs">
                      {isBn ? 'বড় করে দেখুন' : 'Enlarge'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* LIGHTBOX MODAL */}
        {activeImageIndex !== null && galleryImages.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => setActiveImageIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={galleryImages[activeImageIndex]}
                alt={`Ceremony Moment ${activeImageIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-white/80 text-xs font-mono mt-3">
                {activeImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <button
              onClick={() => setActiveImageIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* RELATED MEDIA COVERAGE */}
        {relatedNews.length > 0 && (
          <section className="pt-8 border-t border-slate-200/90 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {isBn ? 'অন্যান্য গণমাধ্যম কাভারেজ' : 'Other Media Coverage'}
              </h3>
              <Link to="/news" className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1">
                <span>{isBn ? 'সবগুলো দেখুন' : 'View All'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedNews.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="rounded-xl overflow-hidden h-36 mb-3 relative bg-slate-100">
                      <SafeImage
                        src={rel.coverImage}
                        alt={t(rel.title)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        fallbackCategory="general"
                      />
                      <div className="absolute top-2 left-2">
                        <MediaSourceBadge
                          sourceType={rel.sourceType}
                          sourceName={rel.sourceName}
                          fallbackSource={rel.source}
                          size="sm"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 font-semibold mb-1">{rel.publishedAt}</p>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0D6E4F] transition-colors line-clamp-2">
                      <Link to={`/news/${rel.slug}`}>{t(rel.title)}</Link>
                    </h4>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100">
                    <Link
                      to={`/news/${rel.slug}`}
                      className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1"
                    >
                      <span>{isBn ? 'পড়ুন' : 'Read'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
