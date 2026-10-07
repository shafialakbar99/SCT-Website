import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  School, 
  Target, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SafeImage } from '../../common/SafeImage';

interface HeroSlide {
  id: number;
  badge: { en: string; bn: string };
  title: { en: string; bn: string };
  subtitle: { en: string; bn: string };
  primaryBtn: { labelEn: string; labelBn: string; url: string };
  secondaryBtn: { labelEn: string; labelBn: string; url: string };
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: {
      en: 'Trust Act 1882 Registered • Humanitarian Initiative',
      bn: '১৮৮২ সালের ট্রাস্ট আইনে নিবন্ধিত • মানবিক উদ্যোগ'
    },
    title: {
      en: 'Building Dignified Futures, Together',
      bn: 'একসাথে মর্যাদাপূর্ণ ভবিষ্যৎ বিনির্মাণ'
    },
    subtitle: {
      en: "Shaheen Cares Trust is a charitable and humanitarian initiative of the Shaheen community, created to transform the spirit of 'Once a Shaheen, Always a Shaheen' into meaningful service to society.",
      bn: "শাহীন কেয়ার্স ট্রাস্ট হলো শাহীন সম্প্রদায়ের একটি দাতব্য ও মানবিক উদ্যোগ, যা 'ওয়ান্স আ শাহীন, অলওয়েজ আ শাহীন' চেতনাকে সমাজের অর্থবহ সেবায় রূপান্তর করার লক্ষ্যে প্রতিষ্ঠিত।"
    },
    primaryBtn: {
      labelEn: 'Join Shaheen Cares Trust',
      labelBn: 'শাহীন কেয়ার্স ট্রাস্টে যোগ দিন',
      url: '/why-join-us'
    },
    secondaryBtn: {
      labelEn: 'Our Work',
      labelBn: 'আমাদের কার্যক্রম',
      url: '/purpose'
    },
    image: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop'
  },
  {
    id: 2,
    badge: {
      en: 'From Friendship to Service • Lasting Impact',
      bn: 'বন্ধুত্ব থেকে সেবা • টেকসই প্রভাব'
    },
    title: {
      en: 'From Friendship to Service — From Caring to Lasting Impact',
      bn: 'বন্ধুত্ব থেকে সেবা — যত্ন থেকে স্থায়ী প্রভাব'
    },
    subtitle: {
      en: 'We believe that when a community comes together with compassion and purpose, it can create lasting change.',
      bn: 'আমরা বিশ্বাস করি যখন একটি সমাজ সহানুভূতি ও সুস্পষ্ট উদ্দেশ্য নিয়ে একত্রিত হয়, তখন তা স্থায়ী পরিবর্তন আনতে পারে।'
    },
    primaryBtn: {
      labelEn: 'Our First Project',
      labelBn: 'আমাদের প্রথম প্রজেক্ট (SPUS)',
      url: '/spus'
    },
    secondaryBtn: {
      labelEn: 'Get Involved',
      labelBn: 'অংশগ্রহণ করুন',
      url: '/volunteer'
    },
    image: '/Images/filler-image.jpeg?w=2000&auto=format&fit=crop'
  }
];

export const HomeHero: React.FC = () => {
  const { isBn } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative bg-[#0F241D] text-white min-h-[640px] lg:min-h-[680px] flex items-center overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32">
      
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
            alt={item.title.en}
            className="w-full h-full object-cover object-center"
            fallbackCategory="emergency"
          />
          {/* ThemeForest Deep Forest Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071712]/95 via-[#0A2019]/85 to-[#071712]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#138086]/20 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SLIDE TEXT & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#138086]/30 border border-[#138086]/50 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E6A119]" />
              <span>{isBn ? slide.badge.bn : slide.badge.en}</span>
            </div>

            {/* Slide Title */}
            <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tight text-white drop-shadow-md">
              {isBn ? slide.title.bn : slide.title.en}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-xs">
              {isBn ? slide.subtitle.bn : slide.subtitle.en}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to={slide.primaryBtn.url}
                className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-[#0D6E4F]/40 flex items-center gap-2 transition-all hover:translate-x-0.5 border border-emerald-400/30"
              >
                <span>{isBn ? slide.primaryBtn.labelBn : slide.primaryBtn.labelEn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to={slide.secondaryBtn.url}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-5 py-3.5 rounded-xl font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>{isBn ? slide.secondaryBtn.labelBn : slide.secondaryBtn.labelEn}</span>
              </Link>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-1.5 ml-4">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: ACTIVE INITIATIVES & GOVERNANCE CARD (NO DONATION / NO DONOR BOX) */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-md mx-auto lg:ml-auto bg-white/95 backdrop-blur-md text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/30 space-y-5">
              
              {/* Header with Trust Act 1882 Badge */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-[#0D6E4F] border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0D6E4F]" />
                    {isBn ? '১৮৮২ সালের ট্রাস্ট আইন নিবন্ধিত' : 'Trust Act 1882 Registered'}
                  </span>
                  <h3 className="text-xl font-black text-[#1B365D] mt-2 tracking-tight">
                    {isBn ? 'এক নজরে শাহীন কেয়ার্স ট্রাস্ট' : 'Shaheen Cares Trust at a Glance'}
                  </h3>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3.5 text-xs">
                
                {/* 1. First Project SPUS */}
                <div className="p-3.5 rounded-2xl bg-[#F8FBF9] border border-emerald-100 hover:border-emerald-200 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0D6E4F]/10 text-[#0D6E4F] flex items-center justify-center shrink-0 mt-0.5">
                    <School className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span>{isBn ? 'প্রথম প্রকল্প (SPUS সাঁতারকুল)' : 'First Project (SPUS):'}</span>
                    </div>
                    <p className="text-slate-600 mt-0.5 leading-relaxed font-medium">
                      {isBn 
                        ? 'সাঁতারকুলে ৭৫ জন বিশেষ শিশুর অন্তর্ভুক্তিমূলক শিক্ষা ও ১০০ জন সুবিধাভোগীর বহুমুখী থেরাপি সেবা।'
                        : '75 Children in Inclusive Education & 100 Therapy Beneficiaries in Satarkul.'}
                    </p>
                  </div>
                </div>

                {/* 2. 5 Strategic Pillars */}
                <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-200 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">
                      {isBn ? '৫টি কৌশলগত মূল স্তম্ভ (২০২৬–২০৩১)' : '5 Strategic Pillars (2026–2031):'}
                    </div>
                    <p className="text-slate-600 mt-0.5 leading-relaxed font-medium">
                      {isBn 
                        ? 'বিশেষ চাহিদা (২০২৬–২৯), যুব কর্মসংস্থান (২০২৯–৩০), প্রবীণ সেবা (২০৩০+), এনজিও স্থায়িত্ব ও শাহীন কমিউনিটি কেয়ার।'
                        : 'Special Needs (2026–2029), Youth Employability (2029–2030), Elderly Care (2030+), NGO Sustainability, & Shaheen Community Care.'}
                    </p>
                  </div>
                </div>

                {/* 3. Inauguration Date */}
                <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-200 transition-colors flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-600/10 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">
                      {isBn ? 'আনুষ্ঠানিক শুভ উদ্বোধন' : 'Inauguration Date:'}
                    </div>
                    <p className="text-slate-600 mt-0.5 leading-relaxed font-medium">
                      {isBn 
                        ? 'শুক্রবার, ৯ অক্টোবর ২০২৬ — ঢাকা, বাংলাদেশ।'
                        : 'Friday, October 9, 2026 in Dhaka, Bangladesh.'}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to="/why-join-us"
                  className="w-full bg-[#1B365D] hover:bg-[#104E7A] text-white py-3 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <span>{isBn ? 'যুক্ত হোন / আমাদের সাথে পার্টনার হোন →' : 'Get Involved / Partner With Us →'}</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
