import React, { useEffect, useState, useMemo } from 'react';
import { Play, Video, X, Film, Sparkles, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { VideoItem } from '../../types';
import { getVideoGallery } from '../../api/public/videoGalleryApi';
import { SafeImage } from '../../components/common/SafeImage';

export const VideoGalleryPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    getVideoGallery().then(setVideos);
  }, []);

  const categories = useMemo(() => [
    { id: 'all', labelEn: 'All Videos', labelBn: 'সকল ভিডিও' },
    { id: 'documentary', labelEn: 'Documentaries', labelBn: 'তথ্যচিত্র' },
    { id: 'projects', labelEn: 'Project Reports', labelBn: 'প্রজেক্ট রিপোর্ট' },
    { id: 'messages', labelEn: 'Messages & Speeches', labelBn: 'বাণী ও বক্তব্য' },
  ], []);

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'all') return videos;
    return videos.filter(v => v.category === activeCategory);
  }, [videos, activeCategory]);

  return (
    <div className="py-12 sm:py-16 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0D6E4F]/10 text-[#0D6E4F] font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>{isBn ? 'ভিডিও গ্যালারি ও তথ্যচিত্র' : 'Video Gallery & Impact Films'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {isBn ? 'শাহীন কেয়ার্স ট্রাস্টের পরিচিতি ও প্রজেক্ট ভিডিও' : 'Impact Documentaries & Community Stories'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-2xl mx-auto">
            {isBn 
              ? 'আমাদের মানবিক অভিযাত্রা, বিশেষ চাহিদাসম্পন্ন শিশুদের নিয়ে উদ্যোগ এবং তৃণমূল পর্যায়ের সেবামূলক কার্যক্রমের ভিডিও চিত্র দেখুন।'
              : 'Explore our official documentary, ground updates from inclusive education programs, and community stories.'}
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1B365D] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {isBn ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative h-60 bg-slate-950 overflow-hidden">
                <SafeImage
                  src={vid.thumbnailUrl}
                  alt={typeof vid.title === 'object' ? vid.title.en : ''}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  fallbackCategory="gallery"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#0D6E4F] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#E6A119] group-hover:text-slate-950 transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Badges on Top */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  {vid.isFeatured ? (
                    <span className="inline-flex items-center gap-1 bg-[#E6A119] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md shadow-md uppercase tracking-wide">
                      <Sparkles className="w-3 h-3" />
                      {isBn ? 'মূল তথ্যচিত্র' : 'Featured Film'}
                    </span>
                  ) : vid.videoUrl ? (
                    <span className="inline-flex items-center gap-1 bg-[#0D6E4F] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md uppercase tracking-wide">
                      HD MP4
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-md uppercase tracking-wide">
                      YouTube
                    </span>
                  )}

                  <span className="bg-slate-950/80 backdrop-blur-xs text-white text-[10.5px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E6A119]" />
                    {vid.duration}
                  </span>
                </div>

                {/* Bottom Date */}
                <div className="absolute bottom-3 left-4 text-[11px] text-white/80 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>{vid.date}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#0D6E4F] transition-colors leading-snug">
                    {t(vid.title)}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {t(vid.summary || (vid as any).description)}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0D6E4F]">
                  <span className="inline-flex items-center gap-1 group-hover:underline">
                    {isBn ? 'ভিডিওটি দেখুন' : 'Watch Video'}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-[#0D6E4F] group-hover:bg-[#0D6E4F] group-hover:text-white transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* VIDEO POPUP MODAL */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative bg-slate-900 border border-white/10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-950 text-white border-b border-white/10">
              <div className="flex items-center gap-2.5 min-w-0 pr-3">
                <span className="bg-[#0D6E4F] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                  {selectedVideo.videoUrl ? (isBn ? 'এইচডি ভিডিও' : 'HD Video') : 'YouTube'}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold truncate text-white">
                  {t(selectedVideo.title)}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full z-10 cursor-pointer shrink-0 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Stage */}
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              {selectedVideo.videoUrl ? (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  poster={selectedVideo.thumbnailUrl}
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              ) : selectedVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title="YouTube video player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="text-slate-400 p-8">Video source not found.</div>
              )}
            </div>

            {/* Modal Footer / Description */}
            <div className="p-5 bg-slate-900 text-white border-t border-white/10">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-2 font-medium">
                <span className="flex items-center gap-1.5 text-[#E6A119]">
                  <Clock className="w-3.5 h-3.5" />
                  {isBn ? 'স্থিতিকাল' : 'Duration'}: {selectedVideo.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedVideo.date}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(selectedVideo.summary || (selectedVideo as any).description)}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
