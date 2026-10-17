import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Baby, 
  Briefcase, 
  Users2, 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  X,
  Film,
  CheckCircle2,
  Clock,
  Sparkle
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const ShortIntroSection: React.FC = () => {
  const { isBn } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Video playback states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isTheaterOpen, setIsTheaterOpen] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);

  const focusAreas = [
    {
      titleEn: 'Children with special needs',
      titleBn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের সার্বিক বিকাশ',
      icon: <Baby className="w-4 h-4 text-[#0D6E4F]" />,
      bg: 'bg-emerald-50 text-emerald-950 border-emerald-200/80 hover:border-emerald-300'
    },
    {
      titleEn: 'Youth skills & employability',
      titleBn: 'যুব দক্ষতা ও আধুনিক কর্মসংস্থান',
      icon: <Briefcase className="w-4 h-4 text-[#138086]" />,
      bg: 'bg-teal-50 text-teal-950 border-teal-200/80 hover:border-teal-300'
    },
    {
      titleEn: 'Dignified elderly care',
      titleBn: 'প্রবীণদের মর্যাদাপূর্ণ পরিচর্যা ও সেবা',
      icon: <Users2 className="w-4 h-4 text-[#D4AF37]" />,
      bg: 'bg-amber-50 text-amber-950 border-amber-200/80 hover:border-amber-300'
    },
    {
      titleEn: 'Grassroots sustainability',
      titleBn: 'তৃণমূল সংস্থার প্রাতিষ্ঠানিক স্থায়িত্ব',
      icon: <Building2 className="w-4 h-4 text-[#1B365D]" />,
      bg: 'bg-blue-50 text-blue-950 border-blue-200/80 hover:border-blue-300'
    },
    {
      titleEn: 'Shaheen community welfare',
      titleBn: 'শাহীন কমিউনিটির কল্যাণ নিরাপত্তা',
      icon: <ShieldCheck className="w-4 h-4 text-[#E06D53]" />,
      bg: 'bg-rose-50 text-rose-950 border-rose-200/80 hover:border-rose-300'
    },
    {
      titleEn: 'Inclusive communities',
      titleBn: 'বৈষম্যহীন অন্তর্ভুক্তিমূলক সমাজ বিনির্মাণ',
      icon: <Globe2 className="w-4 h-4 text-indigo-700" />,
      bg: 'bg-indigo-50 text-indigo-950 border-indigo-200/80 hover:border-indigo-300'
    },
    {
      titleEn: 'Intergenerational harmony',
      titleBn: 'আন্তঃপ্রজন্ম সেতুবন্ধন ও সৌহার্দ্য',
      icon: <Sparkles className="w-4 h-4 text-purple-700" />,
      bg: 'bg-purple-50 text-purple-950 border-purple-200/80 hover:border-purple-300'
    }
  ];

  // Video event listeners
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
        setVideoError(true);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 225); // default 03:45 if not yet loaded
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#FCFDFD] to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D6E4F0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-36 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Mission Narrative, Focus Areas & Trust Badges */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0D6E4F] border border-emerald-200/80 text-xs font-black uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0D6E4F] animate-ping" />
              <Heart className="w-3.5 h-3.5 fill-[#0D6E4F]" />
              <span>{isBn ? 'আমাদের অঙ্গীকার ও মানবিক লক্ষ্য' : 'Our Commitment & Purpose'}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1B365D] tracking-tight leading-[1.18]">
                {isBn 
                  ? 'একসাথে আমরা তৈরি করছি স্থায়ী কল্যাণ ও মানবিক মর্যাদা' 
                  : 'Together, We Shape Lasting Dignity and Sustainable Change'}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#0D6E4F] via-[#E6A119] to-transparent rounded-full" />
            </div>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {isBn
                ? 'বাংলাদেশের ট্রাস্ট আইন ১৮৮২-এর অধীনে নিবন্ধিত শাহীন কেয়ার্স ট্রাস্ট সুবিধাবঞ্চিত, অসহায় ও পিছিয়ে পড়া জনগোষ্ঠীর জীবনমান উন্নয়ন, তৃণমূল সংগঠনের সক্ষমতা বৃদ্ধি এবং দীর্ঘমেয়াদী মানবিক সহায়তা প্রদানে নিরবচ্ছিন্ন কাজ করছে।'
                : 'Registered under the Bangladesh Trust Act of 1882, Shaheen Cares Trust empowers marginalized children, vulnerable families, and grassroots communities through structured programs, financial transparency, and genuine empathy.'}
            </p>

            {/* 7 Focus Areas Badges */}
            <div className="space-y-3 pt-1">
              <p className="text-xs font-black uppercase text-slate-400 tracking-wider">
                {isBn ? 'আমাদের প্রধান মনোযোগের ৭টি ক্ষেত্র:' : 'Our 7 Core Strategic Focus Areas:'}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs sm:text-[13px] font-bold shadow-xs transition-all duration-200 hover:-translate-y-0.5 ${area.bg}`}
                  >
                    {area.icon}
                    <span>{isBn ? area.titleBn : area.titleEn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Metrics Pill Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-xs text-center">
                <span className="block text-base sm:text-lg font-black text-[#1B365D]">1882</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase">
                  {isBn ? 'ট্রাস্ট আইন নিবন্ধিত' : 'Trust Act 1882'}
                </span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-xs text-center">
                <span className="block text-base sm:text-lg font-black text-[#0D6E4F]">SPUS</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase">
                  {isBn ? '৩ বছর মেয়াদী MoU' : '3-Yr Partnership'}
                </span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-xs text-center">
                <span className="block text-base sm:text-lg font-black text-[#E6A119]">100%</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase">
                  {isBn ? 'স্বচ্ছ ব্যবস্থাপনা' : 'Transparent'}
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/purpose"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D6E4F] hover:bg-[#0A583F] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-950/10 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{isBn ? 'আমাদের রূপরেখা ও ৫টি স্তম্ভ' : 'Explore Our 5 Strategic Pillars'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/videos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#1B365D] border border-slate-300 font-extrabold text-xs sm:text-sm shadow-xs transition-all duration-200"
              >
                <Film className="w-4 h-4 text-[#0D6E4F]" />
                <span>{isBn ? 'সকল ভিডিও দেখুন' : 'Video Gallery'}</span>
              </Link>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Modern ThemeForest Standard Dynamic Video Player */}
          {/* ======================================================== */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Floating Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#0D6E4F] via-[#E6A119] to-[#1B365D] rounded-[2.2rem] opacity-30 blur-lg group-hover:opacity-50 transition duration-1000 -z-10" />

              {/* Main Player Card */}
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-950/40">
                
                {/* Header Bar inside Player Container */}
                <div className="px-4 py-3 bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-extrabold text-[11px] tracking-wide text-white uppercase">
                      {isBn ? 'অফিসিয়াল তথ্যচিত্র' : 'Official Documentary'}
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9.5px] font-black px-1.5 py-0.2 rounded">
                      HD 1080p
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px] font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#E6A119]" />
                    <span>03:45 MIN</span>
                  </div>
                </div>

                {/* Aspect-Video Screen */}
                <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                  
                  {/* HTML5 Video Element */}
                  <video
                    ref={videoRef}
                    src="/Videos/Intro/intro.mp4"
                    poster="/Images/inaguration.jfif"
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    onError={() => {
                      // Note: Video file might be placed by user into /Videos/Intro/intro.mp4
                      console.log('Video intro.mp4 waiting for physical file');
                    }}
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support HTML5 video.
                  </video>

                  {/* INITIAL THUMBNAIL / OVERLAY (When video has not started playing) */}
                  {!hasStarted && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] hover:bg-slate-950/20 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group/overlay p-6 text-center"
                    >
                      {/* Big Pulsing Play Button */}
                      <div className="relative flex items-center justify-center mb-4">
                        {/* Ripple Effect Rings */}
                        <div className="absolute w-20 h-20 rounded-full bg-emerald-500/30 animate-ping" />
                        <div className="absolute w-24 h-24 rounded-full bg-[#E6A119]/20 animate-pulse" />
                        
                        {/* Core Play Icon Button */}
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#0D6E4F] to-[#138086] text-white flex items-center justify-center shadow-2xl group-hover/overlay:scale-110 group-hover/overlay:from-[#E6A119] group-hover/overlay:to-[#F59E0B] group-hover/overlay:text-slate-950 transition-all duration-300">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                        </div>
                      </div>

                      <h4 className="text-white font-black text-sm sm:text-base drop-shadow-md max-w-xs leading-snug">
                        {isBn 
                          ? 'শাহীন কেয়ার্স ট্রাস্ট: পরিচিতি ও মানবিক অভিযাত্রা' 
                          : 'Shaheen Cares Trust: Introducing Our Journey & Vision'}
                      </h4>

                      <p className="text-[#E6A119] text-xs font-bold mt-1.5 drop-shadow flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isBn ? 'ভিডিওটি দেখতে ক্লিক করুন' : 'Click to Play Film'}</span>
                      </p>
                    </div>
                  )}

                  {/* INLINE DYNAMIC CONTROLS OVERLAY (When started playing) */}
                  {hasStarted && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 pointer-events-none">
                      
                      {/* Interactive Controls Bar */}
                      <div className="pointer-events-auto space-y-2">
                        {/* Time Progress Bar */}
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="0"
                            max={duration || 225}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#E6A119]"
                          />
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-between text-white text-xs">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={togglePlay}
                              className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white cursor-pointer transition-colors"
                              aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                            </button>

                            <button
                              onClick={handleReplay}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                              title="Replay"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={toggleMute}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                              aria-label={isMuted ? 'Unmute' : 'Mute'}
                            >
                              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>

                            <span className="text-[11px] font-mono text-slate-300">
                              {formatTime(currentTime)} / {formatTime(duration || 225)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setIsTheaterOpen(true)}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                              title="Theater Fullscreen"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* Bottom Information Ribbon of Player */}
                <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-white text-xs sm:text-[13px] font-extrabold leading-tight">
                      {isBn ? 'শাহীন কেয়ার্স ট্রাস্ট পরিচিতি তথ্যচিত্র' : 'Shaheen Cares Trust Introduction Film'}
                    </h5>
                    <p className="text-slate-400 text-[10.5px] mt-0.5">
                      {isBn ? 'মূল ফাইল: /Videos/Intro/intro.mp4' : 'Source: /Videos/Intro/intro.mp4'}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsTheaterOpen(true)}
                    className="inline-flex items-center gap-1.5 bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{isBn ? 'পূর্ণ স্ক্রিন' : 'Theater View'}</span>
                  </button>
                </div>

              </div>

              {/* Decorative Lower Callout */}
              <div className="mt-4 flex items-center justify-between px-3 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D6E4F]" />
                  {isBn ? 'এসপিইউএস পার্টনারশিপ কাভারেজ' : 'SPUS Partnership Coverage'}
                </span>
                <Link 
                  to="/videos" 
                  className="text-[#0D6E4F] hover:underline font-bold flex items-center gap-1"
                >
                  <span>{isBn ? 'ভিডিও তালিকা' : 'More Videos'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* THEATER / FULLSCREEN CINEMA MODAL */}
      {/* ======================================================== */}
      {isTheaterOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsTheaterOpen(false)}
        >
          <div 
            className="relative bg-black border border-white/15 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-950 text-white border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="bg-[#0D6E4F] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {isBn ? 'অফিসিয়াল ভিডিও' : 'Official Film'}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold truncate text-white">
                  {isBn 
                    ? 'শাহীন কেয়ার্স ট্রাস্ট: পরিচিতি তথ্যচিত্র ও মানবিক রূপরেখা' 
                    : 'Shaheen Cares Trust: Official Introductory Film'}
                </h3>
              </div>
              <button
                onClick={() => setIsTheaterOpen(false)}
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full cursor-pointer transition-colors"
                aria-label="Close theater mode"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Stage */}
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video
                src="/Videos/Intro/intro.mp4"
                poster="/Images/inaguration.jfif"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-slate-900 text-white border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span className="font-medium text-slate-400">
                {isBn ? '১৮৮২ সালের ট্রাস্ট আইন অনুযায়ী সমাজকল্যাণ তথ্যচিত্র' : 'Documentary under Bangladesh Trust Act 1882'}
              </span>
              <span className="font-mono text-[#E6A119]">
                HD 1080p • 03:45
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
