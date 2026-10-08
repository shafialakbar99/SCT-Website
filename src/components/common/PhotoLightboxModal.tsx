import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Layers, 
  Maximize2,
  Sparkles
} from 'lucide-react';
import { PhotoAlbum } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { SafeImage } from './SafeImage';

interface PhotoLightboxModalProps {
  album: PhotoAlbum | null;
  initialIndex?: number;
  onClose: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  album,
  initialIndex = 0,
  onClose
}) => {
  const { t, isBn } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Synchronize initial index when album changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [album, initialIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!album) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [album, currentIndex]);

  if (!album) return null;

  const images = album.images && album.images.length > 0
    ? album.images
    : [{ url: album.coverImage, caption: album.title, location: album.location, date: album.date }];

  const total = images.length;
  const currentPhoto = images[currentIndex] || images[0];

  const handlePrev = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
    >
      {/* 1. TOP BAR */}
      <div className="flex items-center justify-between text-white pb-3 sm:pb-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3 min-w-0 pr-4">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h3 className="font-extrabold text-sm sm:text-base text-white truncate">
              {t(album.title)}
            </h3>
            <p className="text-[11px] text-slate-400 flex items-center gap-2 truncate mt-0.5">
              <span>{album.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E6A119]" />
                {t(album.location)}
              </span>
            </p>
          </div>
        </div>

        {/* Counter Badge & Close Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {total > 1 && (
            <span className="bg-white/10 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-full border border-white/10">
              {isBn 
                ? `${total} টির মধ্যে ${currentIndex + 1} নং ছবি` 
                : `${currentIndex + 1} / ${total}`}
            </span>
          )}

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-[#E6A119] transition-colors cursor-pointer"
            title="Close (Esc)"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. MAIN CENTER STAGE WITH SLIDER CONTROLS */}
      <div 
        className="relative flex-1 flex items-center justify-center my-3 sm:my-4 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}
        {total > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-[#0D6E4F] text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Previous image"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* The Active Image */}
        <div className="relative max-h-full max-w-full flex flex-col items-center justify-center p-1 sm:p-2">
          <SafeImage
            key={currentPhoto.url}
            src={currentPhoto.url}
            alt={typeof currentPhoto.caption === 'object' ? currentPhoto.caption.en : ''}
            className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            fallbackCategory="gallery"
          />

          {/* Floating Caption / Metadata below or over image */}
          {currentPhoto.caption && (
            <div className="mt-3 max-w-2xl bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-center">
              <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                {t(currentPhoto.caption)}
              </p>
              {(currentPhoto.location || currentPhoto.date) && (
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 flex items-center justify-center gap-2">
                  {currentPhoto.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#E6A119]" />
                      {t(currentPhoto.location)}
                    </span>
                  )}
                  {currentPhoto.date && <span>• {currentPhoto.date}</span>}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Next Button */}
        {total > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-[#0D6E4F] text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Next image"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}
      </div>

      {/* 3. BOTTOM THUMBNAIL STRIP / CAROUSEL PREVIEW */}
      {total > 1 && (
        <div className="shrink-0 pt-2 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-1 max-w-4xl mx-auto custom-scrollbar">
            {images.map((img, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={`${img.url}-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-11 sm:w-20 sm:h-14 rounded-xl overflow-hidden shrink-0 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'ring-2 ring-[#E6A119] ring-offset-2 ring-offset-slate-950 scale-105 opacity-100 shadow-lg'
                      : 'opacity-50 hover:opacity-100 border border-white/10'
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                >
                  <SafeImage
                    src={img.url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    fallbackCategory="gallery"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#E6A119]/20" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
