import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getSmartFallback, SVG_FALLBACKS, getOptimizedImageUrl } from '../../utils/imageFallbacks';

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallbackCategory?: keyof typeof SVG_FALLBACKS;
  fallbackSrc?: string;
  disableOptimization?: boolean;
  timeoutMs?: number;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackCategory,
  fallbackSrc,
  loading = 'lazy',
  disableOptimization = false,
  timeoutMs = 3500,
  onError,
  onLoad,
  ...props
}) => {
  // Stage 0: CDN optimized (wsrv.nl WebP cache)
  // Stage 1: Direct Origin URL (Unsplash or host)
  // Stage 2: Self-contained SVG Vector Fallback (data URI, 100% resilient offline/mobile)
  const [stage, setStage] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resolveSource = useCallback((currentStage: number): string => {
    if (!src) {
      return fallbackSrc || (fallbackCategory ? SVG_FALLBACKS[fallbackCategory] : getSmartFallback(alt));
    }
    
    // Data URIs, blobs, or local paths don't need proxying
    if (src.startsWith('data:') || src.startsWith('blob:') || src.startsWith('/') || disableOptimization) {
      if (currentStage === 0) return src;
      return fallbackSrc || (fallbackCategory ? SVG_FALLBACKS[fallbackCategory] : getSmartFallback(src || alt));
    }

    if (currentStage === 0) {
      return getOptimizedImageUrl(src);
    }
    if (currentStage === 1) {
      return src;
    }
    return fallbackSrc || (fallbackCategory ? SVG_FALLBACKS[fallbackCategory] : getSmartFallback(src || alt));
  }, [src, alt, fallbackCategory, fallbackSrc, disableOptimization]);

  const [currentSrc, setCurrentSrc] = useState<string>(() => resolveSource(0));

  // Reset stage when src prop changes
  useEffect(() => {
    setStage(0);
    setIsLoaded(false);
    setCurrentSrc(resolveSource(0));
  }, [src, resolveSource]);

  // Network timeout guard: If an external image takes too long on mobile networks, fallback to stage 2
  useEffect(() => {
    if (stage >= 2 || isLoaded) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    if (currentSrc.startsWith('http://') || currentSrc.startsWith('https://')) {
      timerRef.current = setTimeout(() => {
        if (!isLoaded) {
          setStage(2);
          setCurrentSrc(resolveSource(2));
        }
      }, timeoutMs);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSrc, stage, isLoaded, timeoutMs, resolveSource]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStage((prev) => {
      const nextStage = prev + 1;
      const nextSrc = resolveSource(nextStage);
      setCurrentSrc(nextSrc);
      return nextStage;
    });
    if (onError) onError(e);
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} transition-opacity duration-200 ${!isLoaded && stage < 2 ? 'opacity-80' : 'opacity-100'}`}
      loading={loading}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  );
};
