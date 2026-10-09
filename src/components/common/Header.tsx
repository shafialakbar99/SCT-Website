import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe,
  Search,
  Heart,
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
  Compass,
  FileText,
  Target,
  HandHeart,
  Calendar,
  Building,
  Activity,
  ShieldCheck,
  GitBranch,
  Newspaper,
  Image,
  Video,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { siteContent } from '../../data/siteContent';
import { chairmanData, ceoData } from '../../data/leadership';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t, isBn } = useLanguage();
  const location = useLocation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [activeMegaTab, setActiveMegaTab] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMegaTab(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (tabKey: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaTab(tabKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaTab(null);
    }, 280);
  };

  const closeMegaMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaTab(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileSub = (key: string) => {
    setMobileSubMenu(prev => prev === key ? null : key);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        
        {/* TOP EMERGENCY / INAUGURATION ALERT BAR WITH SCROLLING & FLASHING DONATE APPEAL */}
        <div className="bg-[#1B365D] text-white text-[10.5px] sm:text-[11.5px] py-1 sm:py-1.5 px-3 sm:px-6 flex items-center justify-between border-b border-white/10 gap-2 overflow-hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden mr-2 min-w-0">
            <span className="bg-[#E6A119] text-slate-950 font-black px-1.5 sm:px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              {isBn ? 'বিজ্ঞপ্তি' : 'INAUGURATION'}
            </span>
            <div className="truncate text-white/95 font-medium">
              {t(siteContent.emergencyTicker)}
            </div>
            <Link 
              to="/spus" 
              className="hidden md:inline-flex items-center text-[#E6A119] hover:underline font-bold text-[11px] shrink-0 ml-1 whitespace-nowrap"
            >
              {isBn ? 'SPUS দেখুন' : 'Explore SPUS'} <ArrowRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-white/90">
            {/* Mobile quick donate link */}
            <Link
              to="/donate"
              className="sm:hidden flex items-center gap-1 text-[#E6A119] hover:underline font-bold text-[10.5px]"
            >
              <Heart className="w-2.5 h-2.5 fill-[#E6A119]" />
              <span>{isBn ? 'অনুদান' : 'Donate'}</span>
            </Link>

            {/* Hotline */}
            <a href={`tel:${siteContent.hotline.en}`} className="hidden sm:flex items-center gap-1 hover:text-[#E6A119] transition-colors">
              <Phone className="w-3 h-3 text-[#E6A119]" />
              <span className="font-semibold text-[11px]">{t(siteContent.hotline)}</span>
            </a>

            {/* Language Toggle Button */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10.5px] sm:text-[11px] font-bold transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[#E6A119]" />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs relative">
          <div className="max-w-7xl mx-auto px-2.5 sm:px-5 lg:px-6 h-18 sm:h-20 flex items-center justify-between gap-1 sm:gap-2">
            
            {/* LOGO AREA (FLEXIBLE ON MOBILE SO IT NEVER CUTS OFF) */}
            <Link 
              to="/" 
              onClick={closeMegaMenu} 
              className="flex items-center gap-2 sm:gap-3 py-1 group min-w-0 flex-1 max-w-[210px] xs:max-w-[260px] sm:max-w-none shrink"
            >
              <img 
                src="/Images/logo_circle_part.png" 
                alt="Shaheen Cares Trust Emblem" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col min-w-0">
                <span className="font-black text-[#1B365D] text-sm xs:text-base sm:text-xl xl:text-2xl leading-none tracking-tight truncate">
                  {t(siteContent.orgName)}
                </span>
                <span className="text-[10px] sm:text-xs text-[#138086] font-bold tracking-tight hidden md:block mt-1 truncate">
                  {t(siteContent.orgTagline)}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS (STREAMLINED & COMPACT FOR BANGLA & ENGLISH) */}
            <nav className="hidden lg:flex items-center gap-0 xl:gap-0.5 text-[11px] xl:text-[12px] font-bold text-slate-700">
              
              {/* Home */}
              <Link 
                to="/" 
                onClick={closeMegaMenu}
                className={`px-1.5 xl:px-2 py-1 rounded-md whitespace-nowrap transition-colors ${
                  location.pathname === '/' ? 'text-[#138086] font-extrabold bg-slate-100/70' : 'hover:text-[#138086] hover:bg-slate-100/60'
                }`}
              >
                {isBn ? 'হোম' : 'Home'}
              </Link>

              {/* 1. ABOUT MEGA MENU */}
              <div
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/about"
                  className={`px-1.5 xl:px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'about' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/60'
                  }`}
                >
                  <span>{isBn ? 'আমাদের কথা' : 'About'}</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </Link>
              </div>

              {/* 2. OUR WORK / FIVE PILLARS MEGA MENU */}
              <div
                onMouseEnter={() => handleMouseEnter('pillars')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/pillars"
                  className={`px-1.5 xl:px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'pillars' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/60'
                  }`}
                >
                  <span>{isBn ? 'কার্যক্রম' : 'Our Work'}</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </Link>
              </div>

              {/* 3. SPUS */}
              <div
                onMouseEnter={() => handleMouseEnter('spus')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/spus"
                  className={`px-1.5 xl:px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'spus' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/60'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#138086] animate-pulse" />
                    <span>{isBn ? 'SPUS' : 'SPUS'}</span>
                  </span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </Link>
              </div>

              {/* 4. STRATEGY */}
              <div
                onMouseEnter={() => handleMouseEnter('strategy')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/strategy"
                  className={`px-1.5 xl:px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'strategy' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/60'
                  }`}
                >
                  <span>{isBn ? 'কৌশল' : 'Strategy'}</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </Link>
              </div>

              {/* 5. MEDIA & RESOURCES (CONSOLIDATED: BLOG, EVENTS, NEWS, PHOTOS, VIDEOS, TRANSPARENCY, CITATIONS) */}
              <div
                onMouseEnter={() => handleMouseEnter('media')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/news"
                  className={`px-1.5 xl:px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'media' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/60'
                  }`}
                >
                  <span>{isBn ? 'মিডিয়া ও রিসোর্স' : 'Media'}</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </Link>
              </div>

              {/* 6. GET INVOLVED */}
              <div
                onMouseEnter={() => handleMouseEnter('involved')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/join-us"
                  className={`px-1.5 xl:px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'involved' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/60'
                  }`}
                >
                  <span>{isBn ? 'যুক্ত হোন' : 'Get Involved'}</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </Link>
              </div>

              {/* 7. Contact */}
              <Link 
                to="/contact" 
                onClick={closeMegaMenu}
                className={`px-1.5 xl:px-2 py-1 rounded-md whitespace-nowrap transition-colors ${
                  location.pathname === '/contact' ? 'text-[#138086] font-extrabold bg-slate-100/70' : 'hover:text-[#138086] hover:bg-slate-100/60'
                }`}
              >
                {isBn ? 'যোগাযোগ' : 'Contact'}
              </Link>

            </nav>

            {/* ACTION BUTTONS (SEARCH & JOIN/DONATE + MOBILE HAMBURGER) */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              
              {/* Global Search Button */}
              <button
                id="search-trigger-btn"
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 sm:p-2 text-slate-600 hover:text-[#138086] hover:bg-slate-100 rounded-lg sm:rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
                title="Search (Ctrl+K)"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Primary CTA Button (Standalone Donate Now Appeal) */}
              <Link
                to="/donate"
                className="bg-[#0D6E4F] hover:bg-[#09523B] text-white px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black shadow-xs sm:shadow-md shadow-emerald-900/20 hover:shadow-lg flex items-center gap-1 sm:gap-1.5 transition-all shrink-0 whitespace-nowrap"
                title="Donate Now to Shaheen Cares Trust"
              >
                <Heart className="w-3.5 h-3.5 text-[#E6A119] fill-[#E6A119] shrink-0" />
                <span className="hidden xs:inline">{isBn ? 'অনুদান দিন' : 'Donate Now'}</span>
                <span className="xs:hidden">{isBn ? 'অনুদান' : 'Donate'}</span>
              </Link>

              {/* Mobile Menu Toggle Button (ALWAYS VISIBLE & NEVER OVERFLOWING) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-slate-800 hover:text-[#138086] lg:hidden rounded-lg sm:rounded-xl hover:bg-slate-100 cursor-pointer shrink-0 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#1B365D]" /> : <Menu className="w-6 h-6 text-[#1B365D]" />}
              </button>

            </div>

          </div>

          {/* ========================================================= */}
          {/* DESKTOP MEGA MENU DROPDOWN PANEL                          */}
          {/* ========================================================= */}
          {activeMegaTab && (
            <div
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute top-[calc(100%-1px)] left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50 animate-fadeIn"
            >
              {/* Invisible Hover Bridge */}
              <div className="absolute -top-3 left-0 w-full h-3 bg-transparent" />

              <div className="max-w-7xl mx-auto p-6 sm:p-8">
                
                {/* 1. ABOUT MEGA MENU */}
                {activeMegaTab === 'about' && (
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1 border-r border-slate-100 pr-4 space-y-3">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                        {isBn ? 'সংগঠন ও উদ্দেশ্য' : 'About SCT'}
                      </h4>
                      <div className="space-y-1.5">
                        <Link to="/about" onClick={closeMegaMenu} className="p-2 rounded-xl hover:bg-[#138086]/5 flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:text-[#138086] transition-colors">
                          <BookOpen className="w-4 h-4 text-[#138086]" />
                          <span>{isBn ? 'আমাদের পটভূমি ও ইতিহাস' : 'Our Story & Background'}</span>
                        </Link>
                        <Link to="/mission" onClick={closeMegaMenu} className="p-2 rounded-xl hover:bg-[#138086]/5 flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:text-[#138086] transition-colors">
                          <Target className="w-4 h-4 text-[#138086]" />
                          <span>{isBn ? 'ভিশন ও মিশন' : 'Vision & Mission'}</span>
                        </Link>
                        <Link to="/purpose" onClick={closeMegaMenu} className="p-2 rounded-xl hover:bg-[#138086]/5 flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:text-[#138086] transition-colors">
                          <Sparkles className="w-4 h-4 text-[#E6A119]" />
                          <span>{isBn ? 'আমাদের উদ্দেশ্য (Our Purpose)' : 'Our Purpose & What We Do'}</span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-2 px-2 border-r border-slate-100 pr-4 space-y-3">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                        {isBn ? 'নেতৃত্ব ও গভর্ন্যান্স' : 'Leadership & Governance'}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to="/leadership/chairman" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-[#138086]/5 rounded-2xl border border-slate-100 transition-colors">
                          <span className="text-[10px] font-black text-[#E6A119] uppercase block">{t(chairmanData.designation)}</span>
                          <h5 className="text-xs font-black text-slate-900 mt-0.5">{isBn ? 'চেয়ারপারসনের বাণী' : "Chairperson's Message"}</h5>
                          <p className="text-[11px] text-slate-500 mt-1 font-semibold">{t(chairmanData.name)}</p>
                        </Link>

                        <Link to="/leadership/ceo" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-[#138086]/5 rounded-2xl border border-slate-100 transition-colors">
                          <span className="text-[10px] font-black text-[#138086] uppercase block">{t(ceoData.designation)}</span>
                          <h5 className="text-xs font-black text-slate-900 mt-0.5">{isBn ? 'সাধারণ সম্পাদকের বার্তা' : "General Secretary's Message"}</h5>
                          <p className="text-[11px] text-slate-500 mt-1 font-semibold">{t(ceoData.name)}</p>
                        </Link>

                        <Link to="/leadership/board" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-[#138086]/5 rounded-2xl border border-slate-100 transition-colors">
                          <span className="text-[10px] font-black text-slate-400 uppercase block">Trustees</span>
                          <h5 className="text-xs font-black text-slate-900 mt-0.5">{isBn ? 'বোর্ড অফ ট্রাস্টিজ' : 'Board of Trustees'}</h5>
                          <p className="text-[11px] text-slate-500 mt-1 font-semibold">{isBn ? '৯ জন প্রতিষ্ঠাতা ট্রাস্টি' : '9 Founding Trustees'}</p>
                        </Link>

                        <Link to="/team" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-[#138086]/5 rounded-2xl border border-slate-100 transition-colors">
                          <span className="text-[10px] font-black text-slate-400 uppercase block">Secretariat</span>
                          <h5 className="text-xs font-black text-slate-900 mt-0.5">{isBn ? 'সচিবালয় ও টিম' : 'Secretariat & Staff'}</h5>
                          <p className="text-[11px] text-slate-500 mt-1 font-semibold">{isBn ? 'মাঠপর্যায় সমন্বয়কবৃন্দ' : 'Dedicated Operations'}</p>
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-1 space-y-3">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                        {isBn ? 'স্বীকৃতি ও নীতি' : 'Legal & Trust Act'}
                      </h4>
                      <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 space-y-2">
                        <span className="text-[10px] font-black text-[#0D6E4F] uppercase block">Trust Act 1882</span>
                        <p className="text-xs font-bold text-slate-800">
                          {isBn ? 'বাংলাদেশ ট্রাস্ট আইন ১৮৮২-এর অধীনে সম্পূর্ণ বিধিবদ্ধ দাতব্য ট্রাস্ট।' : 'Registered under Bangladesh Trust Act of 1882.'}
                        </p>
                        <Link to="/transparency" onClick={closeMegaMenu} className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1 pt-1">
                          <span>{isBn ? 'আর্থিক স্বচ্ছতা দেখুন' : 'Transparency Details'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. PILLARS MEGA MENU */}
                {activeMegaTab === 'pillars' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-black text-[#1B365D]">
                          {isBn ? 'কৌশলগত পঞ্চস্তম্ভ (২০২৬–২০৩১)' : 'Our Five Strategic Pillars (2026–2031)'}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {isBn ? 'টেকসই সামাজিক পরিবর্তন ও অন্তর্ভুক্তিমূলক সমাজ গঠনের পঞ্চমুখী কর্মপরিকল্পনা।' : 'A multi-phase systemic intervention model for long-term social dignity.'}
                        </p>
                      </div>
                      <Link to="/pillars" onClick={closeMegaMenu} className="text-xs font-bold text-[#138086] hover:underline flex items-center gap-1">
                        <span>{isBn ? 'সব স্তম্ভের বিস্তারিত' : 'View All Pillars'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-5 gap-3">
                      <Link to="/pillars#pillar-1" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 hover:shadow-sm transition-all space-y-2">
                        <span className="text-[10px] font-black uppercase text-[#138086] bg-[#138086]/10 px-2 py-0.5 rounded">Pillar 1</span>
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'বিশেষ চাহিদাসম্পন্ন শিশু' : 'Special Needs'}</h5>
                        <p className="text-[11px] text-slate-500 leading-snug">{isBn ? '২০২৬–২০২৯: শিক্ষা, থেরাপি ও অন্তর্ভুক্তিকরণ' : '2026–2029: Education, Therapy & SPUS Project'}</p>
                      </Link>

                      <Link to="/pillars#pillar-2" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 hover:shadow-sm transition-all space-y-2">
                        <span className="text-[10px] font-black uppercase text-[#104E7A] bg-[#104E7A]/10 px-2 py-0.5 rounded">Pillar 2</span>
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'যুব দক্ষতা ও কর্মসংস্থান' : 'Youth Skills'}</h5>
                        <p className="text-[11px] text-slate-500 leading-snug">{isBn ? '২০২৯–২০৩০: কেয়ার ইকোনমি ও ভোকেশনাল প্রশিক্ষণ' : '2029–2030: Vocational & Care Economy Skills'}</p>
                      </Link>

                      <Link to="/pillars#pillar-3" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 hover:shadow-sm transition-all space-y-2">
                        <span className="text-[10px] font-black uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">Pillar 3</span>
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'মর্যাদাপূর্ণ প্রবীণ সেবা' : 'Elderly Care'}</h5>
                        <p className="text-[11px] text-slate-500 leading-snug">{isBn ? '২০৩০+: ডে-কেয়ার, মানসিক সুস্থতা ও জেন-ব্রিজ' : '2030+: Day Care, Well-being & Intergenerational'}</p>
                      </Link>

                      <Link to="/pillars#pillar-4" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 hover:shadow-sm transition-all space-y-2">
                        <span className="text-[10px] font-black uppercase text-[#E06D53] bg-[#E06D53]/10 px-2 py-0.5 rounded">Pillar 4</span>
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'এনজিও সক্ষমতা ও স্থায়িত্ব' : 'NGO Capacity'}</h5>
                        <p className="text-[11px] text-slate-500 leading-snug">{isBn ? 'ঘাসমূল সংস্থাগুলোর সক্ষমতা ও সুশাসন বৃদ্ধি' : 'Grassroots NGO Governance & Sustainability'}</p>
                      </Link>

                      <Link to="/pillars#pillar-5" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 hover:shadow-sm transition-all space-y-2">
                        <span className="text-[10px] font-black uppercase text-[#0D6E4F] bg-[#0D6E4F]/10 px-2 py-0.5 rounded">Pillar 5</span>
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'শাহীন কমিউনিটি সেবা' : 'Shaheen Care'}</h5>
                        <p className="text-[11px] text-slate-500 leading-snug">{isBn ? 'জরুরি চিকিৎসা তহবিল ও পারস্পরিক সহায়তা' : 'Community Safety Net & Mutual Support'}</p>
                      </Link>
                    </div>
                  </div>
                )}

                {/* 3. SPUS MEGA MENU */}
                {activeMegaTab === 'spus' && (
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1 border-r border-slate-100 pr-4 space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#138086] bg-[#138086]/10 px-2 py-0.5 rounded">Timeline: Oct 2026 – Oct 2029</span>
                      <h4 className="text-sm font-black text-[#1B365D]">
                        {isBn ? 'প্রকল্প: এসপিইউএস (SPUS) অন্তর্ভুক্তিমূলক শিক্ষা, উন্নয়ন এবং প্রতিবন্ধী শিশুদের জন্য কমিউনিটি সহায়তা' : 'Project: SPUS Inclusive Education, Development, and Community Support for Children with Disabilities'}
                      </h4>
                      <p className="text-[11px] font-bold text-[#0D6E4F]">
                        {isBn ? 'বাস্তবায়নকারী সহযোগী: SPUS' : 'Implementing Partner: SPUS'}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {isBn ? 'সাঁতারকুলে বিশেষ চাহিদাসম্পন্ন শিশুদের অন্তর্ভুক্তিমূলক শিক্ষা, বিকাশ ও থেরাপি সেবা।' : 'Providing inclusive education, therapy & grassroots community empowerment.'}
                      </p>
                      <Link to="/spus" onClick={closeMegaMenu} className="text-xs font-bold text-[#138086] hover:underline flex items-center gap-1 pt-2">
                        <span>{isBn ? 'সম্পূর্ণ প্রজেক্ট প্রোফাইল' : 'Full Project Profile'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="col-span-3 grid grid-cols-3 gap-3">
                      <Link to="/spus" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <Activity className="w-5 h-5 text-[#138086]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'সেবা প্যাকেজ' : 'Service Packages'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'শিক্ষা, থেরাপি ও পুষ্টি' : 'Education, Therapy, Nutrition'}</p>
                      </Link>

                      <Link to="/spus" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <Calendar className="w-5 h-5 text-[#104E7A]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? '৬টি প্রধান কার্যক্রম' : '6 Key Interventions'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'অনুমোদিত মাঠপর্যায়ের কর্মপরিকল্পনা' : 'Approved Field Interventions'}</p>
                      </Link>

                      <Link to="/spus" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'অনুমোদিত বাজেট' : 'Approved Budget'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? '৬০ লাখ টাকা (ত্রৈমাসিকে সর্বোচ্চ ৫ লাখ)' : 'BDT 60 Lacs (Max 5L/Quarter)'}</p>
                      </Link>
                    </div>
                  </div>
                )}

                {/* 4. STRATEGY MEGA MENU */}
                {activeMegaTab === 'strategy' && (
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1 border-r border-slate-100 pr-4 space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#138086] bg-[#138086]/10 px-2 py-0.5 rounded">Action Plan</span>
                      <h4 className="text-sm font-black text-[#1B365D]">
                        {isBn ? 'কৌশলগত পরিকল্পনা ২০২৬–২০৩১' : 'Strategy 2026–2031'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {isBn ? '৫টি কৌশলগত পদ্ধতি, থিওরি অব চেঞ্জ ও ফলাফল তদারকি রূপরেখা।' : 'Comprehensive five-year framework creating sustainable care ecosystems.'}
                      </p>
                      <Link to="/strategy" onClick={closeMegaMenu} className="text-xs font-bold text-[#138086] hover:underline flex items-center gap-1 pt-2">
                        <span>{isBn ? 'সম্পূর্ণ কৌশল পাঠ করুন' : 'View Full Strategy'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="col-span-3 grid grid-cols-3 gap-3">
                      <Link to="/strategy" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <Compass className="w-5 h-5 text-[#138086]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'কৌশলগত পদ্ধতি (৫টি)' : '5 Strategic Approaches'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'কেয়ার সিস্টেম ও নলেজ হাব' : 'Care Systems & Knowledge Base'}</p>
                      </Link>

                      <Link to="/strategy" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <GitBranch className="w-5 h-5 text-[#104E7A]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'থিওরি অব চেঞ্জ' : 'Theory of Change'}</h5>
                        <p className="text-[11px] text-slate-500">IF → THEN → BECAUSE Model</p>
                      </Link>

                      <Link to="/strategy" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <Globe className="w-5 h-5 text-[#D4AF37]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'এসডিজি ও বাংলাদেশ আইন' : 'SDG & Policy Alignment'}</h5>
                        <p className="text-[11px] text-slate-500">CRPD, CRC, SDGs & Trust Act 1882</p>
                      </Link>
                    </div>
                  </div>
                )}

                {/* 5. MEDIA & RESOURCES MEGA MENU (CONSOLIDATED: BLOG, EVENTS, NEWS, PHOTOS, VIDEOS, TRANSPARENCY, CITATIONS) */}
                {activeMegaTab === 'media' && (
                  <div className="grid grid-cols-12 gap-5">
                    {/* Left overview card */}
                    <div className="col-span-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-blue-100 text-[#1B365D] uppercase">
                          {isBn ? 'মিডিয়া ও রিসোর্স হাব' : 'Media & Knowledge Hub'}
                        </span>
                        <h4 className="text-sm font-black text-[#1B365D]">
                          {isBn ? 'সংবাদ, প্রকাশনা, অডিট ও তথ্যভাণ্ডার' : 'News, Publications, Audits & Records'}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {isBn
                            ? 'শাহীন কেয়ার্স ট্রাস্টের সাম্প্রতিক সংবাদ বিজ্ঞপ্তি, ভিডিও তথ্যচিত্র, ফটো গ্যালারি, সংবিধিবদ্ধ আইন ও সনদ এবং আর্থিক অডিট রিপোর্ট।'
                            : 'Explore press releases, field stories, documentaries, photo albums, statutory frameworks, and certified audit reports.'}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#138086]">
                        <Link to="/news" onClick={closeMegaMenu} className="hover:underline flex items-center gap-1">
                          <span>{isBn ? 'প্রেস ও সংবাদ' : 'All Media'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link to="/resources" onClick={closeMegaMenu} className="hover:underline flex items-center gap-1">
                          <span>{isBn ? 'রিসোর্স ভাণ্ডার' : 'Resources'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right grid: Media items + Resources & Audits */}
                    <div className="col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {/* Blog */}
                      <Link to="/blog" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-xs transition-all flex items-start gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0D6E4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'মাঠপর্যায়ের গল্প ও ব্লগ' : 'Stories & Blog'}
                          </h5>
                          <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                            {isBn ? 'বাস্তব অভিজ্ঞতা' : 'Voices from field'}
                          </p>
                        </div>
                      </Link>

                      {/* Events */}
                      <Link to="/events" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-xs transition-all flex items-start gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#138086] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'আসন্ন অনুষ্ঠানমালা' : 'Events & Programs'}
                          </h5>
                          <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                            {isBn ? 'উদ্বোধনী ও সমাবেশ' : 'Launch & forums'}
                          </p>
                        </div>
                      </Link>

                      {/* News */}
                      <Link to="/news" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-xs transition-all flex items-start gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1B365D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Newspaper className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'প্রেস রিলিজ ও সংবাদ' : 'Press Releases'}
                          </h5>
                          <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                            {isBn ? 'অফিসিয়াল ঘোষণা' : 'Notices & updates'}
                          </p>
                        </div>
                      </Link>

                      {/* Photo Gallery */}
                      <Link to="/gallery/photos" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-xs transition-all flex items-start gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Image className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'ফটো গ্যালারি' : 'Photo Gallery'}
                          </h5>
                          <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                            {isBn ? 'সাঁতারকুল স্থিরচিত্র' : 'Field photos'}
                          </p>
                        </div>
                      </Link>

                      {/* Video Gallery */}
                      <Link to="/gallery/videos" onClick={closeMegaMenu} className="p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-xs transition-all flex items-start gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#E06D53] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Video className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'ভিডিও গ্যালারি' : 'Video Gallery'}
                          </h5>
                          <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                            {isBn ? 'ডকুমেন্টারি ও বার্তা' : 'Films & reports'}
                          </p>
                        </div>
                      </Link>

                      {/* Transparency & Audits (Integrated inside Media) */}
                      <Link to="/transparency" onClick={closeMegaMenu} className="p-3 bg-emerald-50/70 hover:bg-white rounded-xl border border-emerald-200/80 hover:border-[#0D6E4F] hover:shadow-xs transition-all flex items-start gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0D6E4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#0D6E4F]">
                            {isBn ? 'স্বচ্ছতা ও অডিট' : 'Audits & Records'}
                          </h5>
                          <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                            {isBn ? 'নিরীক্ষিত রিপোর্ট' : 'Audited CA filings'}
                          </p>
                        </div>
                      </Link>

                      {/* Resources & Statutory Citations (Integrated inside Media) */}
                      <Link to="/resources" onClick={closeMegaMenu} className="col-span-2 sm:col-span-3 p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-xs transition-all flex items-center justify-between group">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#138086]/10 text-[#138086] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                              {isBn ? 'রিসোর্স ভাণ্ডার ও সংবিধিবদ্ধ তথ্যসূত্র (Resources & Citations)' : 'Resources & Statutory Citations Repository'}
                            </h5>
                            <p className="text-[10.5px] text-slate-500 mt-0.5">
                              {isBn ? 'জাতিসংঘ সনদ (CRPD, CRC), বাংলাদেশ ট্রাস্ট আইন ১৮৮২ ও প্রতিবন্ধী ব্যক্তি অধিকার আইন ২০১৩।' : 'UN CRPD, CRC, SDGs, Bangladesh Trust Act 1882, Rights & Protection of Persons with Disabilities Act 2013.'}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#138086] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* 6. GET INVOLVED MEGA MENU */}
                {activeMegaTab === 'involved' && (
                  <div className="grid grid-cols-4 gap-4">
                    <Link to="/join-us" onClick={closeMegaMenu} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#138086]/40 hover:bg-white transition-all space-y-2">
                      <HandHeart className="w-6 h-6 text-[#138086]" />
                      <h5 className="text-xs font-black text-slate-900">{isBn ? 'কেন যুক্ত হবেন? (Why Join Us)' : 'Why Join Us'}</h5>
                      <p className="text-[11px] text-slate-500">{isBn ? 'বাস্তব অন্তর্ভুক্তি ও স্থায়ী পরিবর্তনের অংশীদার হোন' : 'Be part of real inclusion and lasting change.'}</p>
                    </Link>

                    <Link to="/volunteer" onClick={closeMegaMenu} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#138086]/40 hover:bg-white transition-all space-y-2">
                      <Users className="w-6 h-6 text-[#104E7A]" />
                      <h5 className="text-xs font-black text-slate-900">{isBn ? 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' : 'Volunteer With Us'}</h5>
                      <p className="text-[11px] text-slate-500">{isBn ? 'সাঁতারকুল সেন্টারে সময় ও মেধা দিন' : 'Offer your time and support children.'}</p>
                    </Link>

                    <Link to="/contact" onClick={closeMegaMenu} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#138086]/40 hover:bg-white transition-all space-y-2">
                      <Building className="w-6 h-6 text-[#D4AF37]" />
                      <h5 className="text-xs font-black text-slate-900">{isBn ? 'উপদেষ্টা ও প্রাতিষ্ঠানিক পার্টনার' : 'Advisor / Strategic Partner'}</h5>
                      <p className="text-[11px] text-slate-500">{isBn ? 'সিএসআর ও গবেষণা যৌথ কার্যক্রম' : 'Pro-bono expert pool & CSR alliances.'}</p>
                    </Link>

                    <Link to="/donate" onClick={closeMegaMenu} className="p-4 bg-[#1B365D] text-white rounded-2xl hover:bg-[#104E7A] transition-all space-y-2">
                      <Heart className="w-6 h-6 text-[#E6A119]" />
                      <h5 className="text-xs font-black">{isBn ? 'অনুদান ও সহায়তা' : 'Support / Donate'}</h5>
                      <p className="text-[11px] text-slate-200">{isBn ? 'দি সিটি ব্যাংক পিএলসি ও অনুমোদিত চ্যানেল' : 'The City Bank PLC & verified channels.'}</p>
                    </Link>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* MOBILE NAVIGATION DRAWER (100% VISIBLE & ROBUST)           */}
        {/* ========================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(theme(spacing.18))] sm:top-[calc(theme(spacing.20))] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 overflow-y-auto">
            <div className="bg-white border-b border-slate-200 px-4 pt-3 pb-8 space-y-2 animate-fadeIn text-sm font-bold text-slate-800 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl">
              
              {/* TOP ACTION CARD INSIDE DRAWER */}
              <div className="bg-gradient-to-r from-[#1B365D] to-[#0D6E4F] rounded-2xl p-4 text-white mb-3 shadow-md flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-[#E6A119] uppercase tracking-wider">
                    {isBn ? 'শাহীন কেয়ার্স ট্রাস্ট' : 'Shaheen Cares Trust'}
                  </h4>
                  <p className="text-[11px] text-white/90 font-medium mt-0.5">
                    {isBn ? 'বন্ধুত্ব থেকে সেবা — যত্ন থেকে দীর্ঘস্থায়ী প্রভাব' : 'From Friendship to Service — Dignity for All'}
                  </p>
                </div>
                <Link
                  to="/join-us"
                  onClick={closeMegaMenu}
                  className="bg-[#E6A119] hover:bg-[#F2B02A] text-slate-950 px-3 py-1.5 rounded-xl text-xs font-extrabold shrink-0 shadow-sm transition-all"
                >
                  {isBn ? 'যুক্ত হোন' : 'Join Us'}
                </Link>
              </div>

              {/* Home */}
              <Link 
                to="/" 
                onClick={closeMegaMenu} 
                className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
                  location.pathname === '/' ? 'bg-[#0D6E4F]/10 text-[#0D6E4F]' : 'hover:bg-slate-50'
                }`}
              >
                <span>{isBn ? 'হোম পেজ' : 'Home'}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>

              {/* 1. About Accordion */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleMobileSub('about')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#138086]" />
                    <span>{isBn ? 'আমাদের কথা (About SCT)' : 'About SCT'}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubMenu === 'about' ? 'rotate-180 text-[#138086]' : ''}`} />
                </button>
                {mobileSubMenu === 'about' && (
                  <div className="pl-6 pr-3 pb-3 pt-1 space-y-2 text-xs font-semibold text-slate-600 bg-slate-50/50">
                    <Link to="/about" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'পটভূমি ও ইতিহাস' : 'Our Story & Background'}</Link>
                    <Link to="/mission" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'ভিশন ও মিশন' : 'Vision & Mission'}</Link>
                    <Link to="/purpose" onClick={closeMegaMenu} className="block py-1 text-[#138086] font-bold">• {isBn ? 'আমাদের উদ্দেশ্য (Our Purpose)' : 'Our Purpose'}</Link>
                    <Link to="/leadership/chairman" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'চেয়ারপারসনের বাণী' : "Chairperson's Message"}</Link>
                    <Link to="/leadership/ceo" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'সাধারণ সম্পাদকের বার্তা' : "General Secretary's Message"}</Link>
                    <Link to="/leadership/board" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'বোর্ড অফ ট্রাস্টিজ' : 'Board of Trustees'}</Link>
                    <Link to="/team" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'টিম ও সচিবালয়' : 'Secretariat & Team'}</Link>
                  </div>
                )}
              </div>

              {/* 2. Pillars Accordion */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleMobileSub('pillars')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#104E7A]" />
                    <span>{isBn ? 'কার্যক্রম (Five Pillars)' : 'Our Five Pillars'}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubMenu === 'pillars' ? 'rotate-180 text-[#138086]' : ''}`} />
                </button>
                {mobileSubMenu === 'pillars' && (
                  <div className="pl-6 pr-3 pb-3 pt-1 space-y-2 text-xs font-semibold text-slate-600 bg-slate-50/50">
                    <Link to="/pillars" onClick={closeMegaMenu} className="block py-1 font-bold text-[#138086]">• {isBn ? 'সকল স্তম্ভের সামগ্রিক রূপরেখা' : 'Pillars Overview'}</Link>
                    <Link to="/pillars#pillar-1" onClick={closeMegaMenu} className="block py-1">• 1. {isBn ? 'বিশেষ চাহিদাসম্পন্ন শিশু (২০২৬–২০২৯)' : 'Special Needs (2026–2029)'}</Link>
                    <Link to="/pillars#pillar-2" onClick={closeMegaMenu} className="block py-1">• 2. {isBn ? 'যুব কর্মসংস্থান (২০২৯–২০৩০)' : 'Youth Employability (2029–2030)'}</Link>
                    <Link to="/pillars#pillar-3" onClick={closeMegaMenu} className="block py-1">• 3. {isBn ? 'প্রবীণ সেবা (২০৩০ থেকে)' : 'Elderly Care (2030 onward)'}</Link>
                    <Link to="/pillars#pillar-4" onClick={closeMegaMenu} className="block py-1">• 4. {isBn ? 'প্রাতিষ্ঠানিক সক্ষমতা ও স্থায়িত্ব' : 'Organizational Sustainability'}</Link>
                    <Link to="/pillars#pillar-5" onClick={closeMegaMenu} className="block py-1">• 5. {isBn ? 'শাহীন কমিউনিটি সেবা' : 'Shaheen Community Care'}</Link>
                  </div>
                )}
              </div>

              {/* 3. Project: SPUS */}
              <Link 
                to="/spus" 
                onClick={closeMegaMenu} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl border border-emerald-100 bg-emerald-50/50 text-[#0D6E4F] font-bold"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0D6E4F] animate-pulse" />
                  <span>{isBn ? 'প্রকল্প: SPUS সাঁতারকুল (২০২৬–২০২৯)' : 'Project: SPUS Satarkul (2026–2029)'}</span>
                </span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* 4. Strategy */}
              <Link 
                to="/strategy" 
                onClick={closeMegaMenu} 
                className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
                  location.pathname === '/strategy' ? 'bg-[#104E7A]/10 text-[#104E7A]' : 'hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#104E7A]" />
                  <span>{isBn ? 'কৌশলগত পরিকল্পনা ২০২৬–২০৩১' : 'Strategy 2026–2031'}</span>
                </span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>

              {/* 5. Media & Resources Accordion */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleMobileSub('media')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Newspaper className="w-4 h-4 text-[#1B365D]" />
                    <span>{isBn ? 'মিডিয়া ও রিসোর্স (Media & Resources)' : 'Media & Resources'}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubMenu === 'media' ? 'rotate-180 text-[#138086]' : ''}`} />
                </button>
                {mobileSubMenu === 'media' && (
                  <div className="pl-6 pr-3 pb-3 pt-1 space-y-2 text-xs font-semibold text-slate-600 bg-slate-50/50">
                    <Link to="/blog" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'মাঠপর্যায়ের ব্লগ ও গল্প' : 'Blog & Field Stories'}</Link>
                    <Link to="/events" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'আসন্ন অনুষ্ঠান ও ইভেন্টস' : 'Events & Programs'}</Link>
                    <Link to="/news" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'প্রেস রিলিজ ও সংবাদ' : 'Press Releases & News'}</Link>
                    <Link to="/gallery/photos" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'ফটো গ্যালারি' : 'Photo Gallery'}</Link>
                    <Link to="/gallery/videos" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'ভিডিও ডকুমেন্টারি' : 'Video Gallery'}</Link>
                    <div className="border-t border-slate-200/80 my-1 pt-1 space-y-1">
                      <Link to="/transparency" onClick={closeMegaMenu} className="block py-1 text-[#0D6E4F] font-bold">• {isBn ? 'আর্থিক স্বচ্ছতা ও অডিট রিপোর্ট' : 'Financial Transparency & Audits'}</Link>
                      <Link to="/resources" onClick={closeMegaMenu} className="block py-1 text-[#138086] font-bold">• {isBn ? 'তথ্যসূত্র, আইন ও নীতিমালা' : 'Resources & Statutory Citations'}</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Get Involved Accordion */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleMobileSub('involved')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HandHeart className="w-4 h-4 text-[#138086]" />
                    <span>{isBn ? 'যুক্ত হোন (Get Involved)' : 'Get Involved'}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubMenu === 'involved' ? 'rotate-180 text-[#138086]' : ''}`} />
                </button>
                {mobileSubMenu === 'involved' && (
                  <div className="pl-6 pr-3 pb-3 pt-1 space-y-2 text-xs font-semibold text-slate-600 bg-slate-50/50">
                    <Link to="/join-us" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'কেন যুক্ত হবেন (Why Join Us)' : 'Why Join Us'}</Link>
                    <Link to="/volunteer" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' : 'Volunteer'}</Link>
                    <Link to="/contact" onClick={closeMegaMenu} className="block py-1 hover:text-[#0D6E4F]">• {isBn ? 'উপদেষ্টা / অংশীদারিত্ব' : 'Partner with SCT'}</Link>
                    <Link to="/donate" onClick={closeMegaMenu} className="block py-1 font-bold text-[#E6A119]">• {isBn ? 'অনুদান ও সহায়তা' : 'Support / Donate'}</Link>
                  </div>
                )}
              </div>

              {/* 7. Contact */}
              <Link 
                to="/contact" 
                onClick={closeMegaMenu} 
                className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
                  location.pathname === '/contact' ? 'bg-slate-100 text-[#138086]' : 'hover:bg-slate-50'
                }`}
              >
                <span>{isBn ? 'যোগাযোগ ও সচিবালয়' : 'Contact & Secretariat'}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>

              {/* Standalone Donate Now Appeal in Mobile Drawer */}
              <div className="pt-4 space-y-2">
                <Link
                  to="/donate"
                  onClick={closeMegaMenu}
                  className="w-full bg-[#0D6E4F] hover:bg-[#09523B] text-white py-3.5 px-4 rounded-2xl text-xs font-black text-center shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Heart className="w-4 h-4 text-[#E6A119] fill-[#E6A119] animate-pulse" />
                  <span>{isBn ? 'সরাসরি অনুদান দিন (Donate Now Appeal)' : 'Donate Now Appeal (Standalone)'}</span>
                </Link>
                <p className="text-[10.5px] text-center text-slate-500 font-medium">
                  {isBn 
                    ? '* যে কেউ আনুষ্ঠানিকভাবে সম্পৃক্ত না হয়েও সরাসরি অনুদান দিতে পারেন' 
                    : '* Standalone Appeal: Anyone can donate directly without being involved'}
                </p>
              </div>

              {/* Quick Language switch on mobile */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold border-t border-slate-100 mt-4">
                <span>{isBn ? 'ভাষা পরিবর্তন:' : 'Change Language:'}</span>
                <button
                  onClick={toggleLanguage}
                  className="text-[#0D6E4F] font-bold underline cursor-pointer"
                >
                  {language === 'en' ? 'বাংলা সংস্করণ' : 'English Version'}
                </button>
              </div>

            </div>
          </div>
        )}

      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
