import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Video, Play, MapPin, X, ArrowRight, Layers, Eye } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { initialPhotoAlbums } from '../../../data/photoGallery';
import { initialVideoGallery } from '../../../data/videoGallery';
import { PhotoAlbum, VideoItem } from '../../../types';
import { SafeImage } from '../../common/SafeImage';
import { PhotoLightboxModal } from '../../common/PhotoLightboxModal';

export const GalleryHighlights: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  // Modal Video state
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Modal Photo Slider state
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const handleOpenAlbum = (album: PhotoAlbum, index = 0) => {
    setSelectedAlbum(album);
    setActivePhotoIndex(index);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER & TOGGLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-[#0D6E4F] uppercase tracking-wider inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{isBn ? 'সরেজমিন ছবি ও ভিডিও ডকুমেন্টারি' : 'Field Photo & Video Gallery'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {isBn ? 'আমাদের মাঠপর্যায়ের কাজের চিত্র' : 'Eyewitness Field Impact'}
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="bg-slate-200/80 p-1 rounded-xl flex items-center gap-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'photos' ? 'bg-[#0D6E4F] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                <span>{isBn ? 'ছবি গ্যালারি' : 'Photo Gallery'}</span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'videos' ? 'bg-[#0D6E4F] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>{isBn ? 'ভিডিও ডকুমেন্টারি' : 'Video Gallery'}</span>
              </button>
            </div>

            <Link
              to={activeTab === 'photos' ? '/gallery/photos' : '/gallery/videos'}
              className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1"
            >
              <span>{isBn ? 'সব দেখুন' : 'View All'}</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CONTENT GRID */}
        {activeTab === 'photos' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initialPhotoAlbums.map((album) => {
              const imageCount = album.images?.length || 1;
              return (
                <div 
                  key={album.id} 
                  onClick={() => handleOpenAlbum(album, 0)}
                  className="group relative rounded-2xl overflow-hidden shadow-md h-64 cursor-pointer bg-slate-900"
                >
                  <SafeImage
                    src={album.coverImage}
                    alt={typeof album.title === 'object' ? album.title.en : ''}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackCategory="gallery"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                  
                  {/* Image count badge */}
                  <span className="absolute top-3 left-3 bg-[#0D6E4F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase flex items-center gap-1 shadow-md">
                    <Layers className="w-3 h-3" />
                    <span>{imageCount} {isBn ? 'টি ছবি' : 'Photos'}</span>
                  </span>

                  {/* Hover eye icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#0D6E4F]" />
                      <span>{isBn ? 'স্লাইডার দেখুন' : 'View Slider'}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-[#E6A119] bg-slate-900/80 px-2 py-0.5 rounded uppercase">
                      {album.date}
                    </span>
                    <h4 className="text-sm font-extrabold mt-1 group-hover:text-[#E6A119] transition-colors line-clamp-2">
                      {t(album.title)}
                    </h4>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[#E6A119]" />
                      <span>{t(album.location)}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initialVideoGallery.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group relative rounded-2xl overflow-hidden shadow-md h-64 cursor-pointer bg-slate-900"
              >
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
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  {vid.videoUrl ? (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded shadow">
                      {isBn ? 'মূল তথ্যচিত্র' : 'Official HD'}
                    </span>
                  ) : (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded shadow">
                      YouTube
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded uppercase">
                    {vid.duration}
                  </span>
                  <h4 className="text-sm font-extrabold mt-1 group-hover:text-[#E6A119] transition-colors line-clamp-2">
                    {t(vid.title)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* VIDEO POPUP MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-slate-950 border border-white/10 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-3.5 border-b border-white/10 bg-slate-900/90 text-white">
              <div className="truncate pr-3">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#0D6E4F] text-white px-2 py-0.5 rounded mr-2">
                  {selectedVideo.videoUrl ? (isBn ? 'ভিডিও তথ্যচিত্র' : 'HD Video') : 'YouTube'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white truncate">
                  {t(selectedVideo.title)}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full z-10 cursor-pointer shrink-0 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="p-8 text-center text-slate-400">Video source not found.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN PHOTO SLIDER / CAROUSEL MODAL */}
      <PhotoLightboxModal
        album={selectedAlbum}
        initialIndex={activePhotoIndex}
        onClose={() => setSelectedAlbum(null)}
      />

    </section>
  );
};
