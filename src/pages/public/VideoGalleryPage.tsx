import React, { useEffect, useState } from 'react';
import { Play, Video, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { VideoItem } from '../../types';
import { getVideoGallery } from '../../api/public/videoGalleryApi';
import { SafeImage } from '../../components/common/SafeImage';

export const VideoGalleryPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    getVideoGallery().then(setVideos);
  }, []);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            🎬 {isBn ? 'ভিডিয়ো ডকুমেন্টারি' : 'Video Documentaries'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'সরেজমিন ফিল্ড ডকুমেন্টারি' : 'Field Relief Documentaries'}
          </h1>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid.youtubeId)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md cursor-pointer group"
            >
              <div className="relative h-56 bg-slate-900">
                <SafeImage
                  src={vid.thumbnailUrl}
                  alt={typeof vid.title === 'object' ? vid.title.en : ''}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  fallbackCategory="gallery"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0D6E4F] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {vid.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-slate-900 text-sm hover:text-[#0D6E4F] transition-colors leading-snug">
                  {t(vid.title)}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">{t(vid.description)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* VIDEO POPUP */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-black w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
