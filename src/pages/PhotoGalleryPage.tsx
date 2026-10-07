import React, { useEffect, useState } from 'react';
import { Image as ImageIcon, MapPin, X, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PhotoAlbum } from '../types';
import { getPhotoAlbums } from '../api/photoGalleryApi';
import { SafeImage } from '../components/common/SafeImage';

export const PhotoGalleryPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [albums, setAlbums] = useState<PhotoAlbum[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    getPhotoAlbums().then(setAlbums);
  }, []);

  const filtered = activeCategory === 'all'
    ? albums
    : albums.filter(a => a.category === activeCategory);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-blue-100 text-blue-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            📷 {isBn ? 'সরেজমিন ছবি অ্যালবামে' : 'Photo Gallery'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'মাঠপর্যায়ের কাজের অ্যালবাম' : 'Eyewitness Field Photography'}
          </h1>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', labelEn: 'All Photos', labelBn: 'সকল ছবি' },
            { id: 'flood', labelEn: 'Flood Relief', labelBn: 'বন্যা উদ্ধার' },
            { id: 'water', labelEn: 'Water Wells', labelBn: 'টিউবওয়েল' },
            { id: 'education', labelEn: 'Education', labelBn: 'শিক্ষা' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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
          {filtered.map((album) => (
            <div key={album.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <div
                onClick={() => setSelectedImage(album.images[0] || { url: album.coverImage, caption: album.title, location: album.location, date: album.date })}
                className="relative h-60 cursor-pointer overflow-hidden group"
              >
                <SafeImage
                  src={album.coverImage}
                  alt={typeof album.title === 'object' ? album.title.en : ''}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackCategory="gallery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0D6E4F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {album.images.length} {isBn ? 'টি ছবি' : 'Photos'}
                </span>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-extrabold text-sm leading-tight">{t(album.title)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-700 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] flex items-center justify-center bg-black">
              <SafeImage
                src={selectedImage.url}
                alt={typeof selectedImage.caption === 'object' ? selectedImage.caption.en : ''}
                className="max-h-[70vh] object-contain"
                fallbackCategory="gallery"
              />
            </div>
            <div className="p-6 text-white space-y-1 bg-slate-900">
              <p className="text-sm font-semibold">{t(selectedImage.caption)}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E6A119]" />
                <span>{t(selectedImage.location)}</span> • {selectedImage.date}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
