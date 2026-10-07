import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, ArrowRight, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { QuickDonateBox } from './QuickDonateBox';
import { SafeImage } from '../common/SafeImage';

const HERO_SLIDES = [
  {
    id: 1,
    title: {
      en: 'Hope & Lifeline for Sylhet & Feni Flood Victims',
      bn: 'সিলেট ও ফেনীর বন্যাদুর্গত মানুষের পাশে আমরা'
    },
    subtitle: {
      en: 'Providing urgent dry rations, clean drinking water, and medical life-kits to 50,000+ stranded households.',
      bn: 'পানিবন্দী ৫০,০০০+ পরিবারের কাছে শুকনো খাবার, খাবার পানি ও জরুরি ঔষধ পৌঁছে দিচ্ছে আমাদের টিম।'
    },
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1600&auto=format&fit=crop',
    badge: { en: 'Active Emergency Relief', bn: 'জরুরি ত্রাণ কার্যক্রম চলমান' },
    ctaUrl: '/campaigns/sylhet-feni-flood-relief'
  },
  {
    id: 2,
    title: {
      en: 'Solar Deep Tube Wells in Saline Coastal Bangladesh',
      bn: 'উপকূলীয় অঞ্চলে সুপেয় পানির নিশ্চয়তা: সোলার টিউবওয়েল'
    },
    subtitle: {
      en: 'Eliminating drinking water salinity in Satkhira & Bagerhat through 600ft deep solar filtration pumps.',
      bn: 'সাতক্ষীরা ও বাগেরহাটে ৬০০ ফুট গভীর সোলার ওয়াটার পাম্পের মাধ্যমে লবণাক্ততামুক্ত খাবার পানি সরবরাহ।'
    },
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&auto=format&fit=crop',
    badge: { en: 'WASH Water Mission', bn: 'সুপেয় পানি প্রজেক্ট' },
    ctaUrl: '/campaigns/clean-water-wells-coastal-bd'
  },
  {
    id: 3,
    title: {
      en: 'Dignified Schooling & Meals for Street Children in Dhaka',
      bn: 'কামরাঙ্গীরচরের পথশিশুদের রঙিন ভবিষ্যৎ তৈরি'
    },
    subtitle: {
      en: 'Educating 250+ working street children with free books, uniforms, and daily hot lunches.',
      bn: 'সুবিধাবঞ্চিত শিশুদের জন্য বিনামূল্যে পড়াশোনা, স্কুলের পোশাক ও প্রতিদিন দুপুরের গরম খাবার।'
    },
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop',
    badge: { en: 'Child Literacy & Nutrition', bn: 'শিশু শিক্ষা ও খাদ্য' },
    ctaUrl: '/campaigns/street-children-education-dhaka'
  }
];

export const HomeHero: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative bg-slate-900 text-white min-h-[640px] flex items-center overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32">
      
      {/* BACKGROUND CROSSFADE IMAGES */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <SafeImage
            src={item.image}
            alt={typeof item.title === 'object' ? item.title.en : ''}
            className="w-full h-full object-cover object-center"
            fallbackCategory={item.id === 1 ? 'emergency' : item.id === 2 ? 'water' : 'education'}
          />
          {/* Gradient Overlay for high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-950/60" />
        </div>
      ))}

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* URGENT FLOOD RELIEF ANNOUNCEMENT BANNER */}
        <div className="inline-flex items-center gap-2 bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 backdrop-blur-md border border-red-400/40 shadow-lg animate-pulse">
          <AlertTriangle className="w-3.5 h-3.5 text-yellow-300" />
          <span>{t(slide.badge)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SLIDE TEXT & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white drop-shadow-md">
              {t(slide.title)}
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-medium leading-relaxed drop-shadow-xs">
              {t(slide.subtitle)}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={slide.ctaUrl}
                className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-[#0D6E4F]/40 flex items-center gap-2 transition-all hover:translate-x-0.5"
              >
                <span>{isBn ? 'প্রজেক্ট বিস্তারিত দেখুন' : 'Explore Full Campaign'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/zakat-calculator"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3.5 rounded-xl font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#E6A119]" />
                <span>{isBn ? 'যাকাত ক্যালকুলেটর' : 'Calculate Zakat'}</span>
              </Link>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-3 pt-6">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentSlide ? 'w-8 bg-[#E6A119]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  title={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT FLOATING QUICK DONATE BOX */}
          <div className="lg:col-span-5">
            <QuickDonateBox className="w-full max-w-md mx-auto lg:ml-auto" />
          </div>

        </div>

      </div>

    </section>
  );
};
