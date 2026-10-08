import React, { useEffect, useState } from 'react';
import { Image as ImageIcon, MapPin, Calendar, Layers, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PhotoAlbum } from '../../types';
import { getPhotoAlbums } from '../../api/public/photoGalleryApi';
import { SafeImage } from '../../components/common/SafeImage';
import { PhotoLightboxModal } from '../../components/common/PhotoLightboxModal';

export const PhotoGalleryPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [albums, setAlbums] = useState<PhotoAlbum[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  useEffect(() => {
    getPhotoAlbums().then(setAlbums);
  }, []);

  const filtered = activeCategory === 'all'
    ? albums
    : albums.filter(a => a.category === activeCategory);

  const handleOpenAlbum = (album: PhotoAlbum, index = 0) => {
    setSelectedAlbum(album);
    setActivePhotoIndex(index);
  };

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-emerald-100 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>{isBn ? 'সরেজমিন ছবি ও আর্কাইভ' : 'Field Photo Gallery'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'শাহীন কেয়ার্স ট্রাস্টের মাঠপর্যায়ের কাজের অ্যালবাম' : 'Eyewitness Field Photography & Meetings'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {isBn 
              ? 'যেকোনো অ্যালবামে ক্লিক করে সবগুলো ছবি স্লাইডার ও ফুলস্ক্রিন ক্যারোসেলে দেখুন।' 
              : 'Click any album to view all photographs in the interactive slider & carousel.'}
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', labelEn: 'All Photos', labelBn: 'সকল ছবি' },
            { id: 'special-needs', labelEn: 'Special Needs & SPUS', labelBn: 'বিশেষ চাহিদা ও সাঁতারকুল' },
            { id: 'governance', labelEn: 'Governance & Strategy', labelBn: 'সুশাসন ও কৌশলগত সভা' },
            { id: 'community', labelEn: 'Community Care', labelBn: 'কমিউনিটি কর্মসূচি' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0D6E4F] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isBn ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* GALLERY ALBUMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((album) => {
            const imageCount = album.images?.length || 1;
            return (
              <div 
                key={album.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => handleOpenAlbum(album, 0)}
              >
                {/* Main Cover Image with Overlay */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <SafeImage
                    src={album.coverImage}
                    alt={typeof album.title === 'object' ? album.title.en : ''}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackCategory="gallery"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  
                  {/* Photo count badge */}
                  <div className="absolute top-3 left-3 bg-[#0D6E4F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Layers className="w-3 h-3" />
                    <span>{imageCount} {isBn ? 'টি ছবি' : 'PHOTOS'}</span>
                  </div>

                  {/* Click to open slider hover pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30">
                    <span className="bg-white/95 text-slate-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#0D6E4F]" />
                      <span>{isBn ? 'গ্যালারি স্লাইডার দেখুন' : 'View Carousel'}</span>
                    </span>
                  </div>

                  {/* Album Title & Location on image overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold text-[#E6A119] uppercase tracking-wider block mb-1">
                      {album.date}
                    </span>
                    <h3 className="font-extrabold text-sm leading-snug line-clamp-2 text-white group-hover:text-[#E6A119] transition-colors">
                      {t(album.title)}
                    </h3>
                  </div>
                </div>

                {/* Card footer details & thumbnail quick jumps */}
                <div className="p-4 bg-white flex flex-col justify-between flex-1 space-y-3">
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#E6A119] shrink-0" />
                    <span className="truncate">{t(album.location)}</span>
                  </p>

                  {/* If more than 1 image, show thumbnail buttons that jump to specific slide */}
                  {imageCount > 1 && (
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {album.images.slice(0, 4).map((img, idx) => (
                          <button
                            key={`${img.url}-${idx}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenAlbum(album, idx);
                            }}
                            className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 hover:border-[#0D6E4F] hover:scale-105 transition-all cursor-pointer relative"
                            title={`Jump to photo ${idx + 1}`}
                          >
                            <SafeImage
                              src={img.url}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                              fallbackCategory="gallery"
                            />
                            {idx === 3 && imageCount > 4 && (
                              <div className="absolute inset-0 bg-slate-900/80 text-white text-[9px] font-bold flex items-center justify-center">
                                +{imageCount - 4}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>

                      <span className="text-[11px] font-bold text-[#0D6E4F] group-hover:underline flex items-center gap-1">
                        <span>{isBn ? 'স্লাইড দেখুন' : 'Slide View'}</span> →
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX SLIDER & CAROUSEL MODAL */}
      <PhotoLightboxModal
        album={selectedAlbum}
        initialIndex={activePhotoIndex}
        onClose={() => setSelectedAlbum(null)}
      />

    </div>
  );
};
