import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Globe,
  Search,
  Heart,
  Phone,
  Shield,
  Palette,
  Menu,
  X,
  ChevronDown,
  AlertCircle,
  ArrowRight,
  Award,
  Layers,
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
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  GitBranch,
  Newspaper,
  Image,
  Video
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { siteContent } from '../../data/siteContent';
import { chairmanData, ceoData } from '../../data/leadership';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t, isBn } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [activeMegaTab, setActiveMegaTab] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (tabKey: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaTab(tabKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaTab(null);
    }, 300); // 300ms buffer to prevent flicker
  };

  const closeMegaMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaTab(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        
        {/* TOP EMERGENCY / INAUGURATION ALERT BAR */}
        <div className="bg-[#1B365D] text-white text-[11px] md:text-xs py-1.5 px-3 sm:px-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2 overflow-hidden mr-2">
            <span className="bg-[#E6A119] text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              {isBn ? 'বিজ্ঞপ্তি' : 'INAUGURATION'}
            </span>
            <div className="truncate text-white/95 font-medium">
              {t(siteContent.emergencyTicker)}
            </div>
            <Link 
              to="/spus" 
              className="hidden lg:inline-flex items-center text-[#E6A119] hover:underline font-bold text-[11px] shrink-0 ml-1"
            >
              {isBn ? 'SPUS প্রজেক্ট দেখুন' : 'Explore SPUS'} <ArrowRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-white/90">
            {/* Hotline */}
            <a href={`tel:${siteContent.hotline.en}`} className="hidden sm:flex items-center gap-1 hover:text-[#E6A119] transition-colors">
              <Phone className="w-3 h-3 text-[#E6A119]" />
              <span className="font-semibold text-[11px]">{t(siteContent.hotline)}</span>
            </a>

            {/* Language Toggle Button */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[#E6A119]" />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-2">
            
            {/* LOGO AREA (PROMINENT & ENLARGED) */}
            <Link to="/" onClick={closeMegaMenu} className="flex items-center gap-3 shrink-0 py-1.5 group">
              <img 
                src="/Images/logo.png" 
                alt="Shaheen Cares Trust Logo" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-xs transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-black text-[#1B365D] text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight">
                  {t(siteContent.orgName)}
                </span>
                <span className="text-xs text-[#138086] font-bold tracking-tight hidden sm:block mt-0.5">
                  {t(siteContent.orgTagline)}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS (THEMEFOREST STANDARDS) */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[11px] xl:text-xs font-bold text-slate-700">
              
              {/* Home */}
              <Link 
                to="/" 
                onClick={closeMegaMenu}
                className="px-2 xl:px-2.5 py-1.5 rounded-lg hover:text-[#138086] hover:bg-slate-100/80 whitespace-nowrap transition-colors"
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
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'about' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{isBn ? 'আমাদের কথা' : 'About'}</span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
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
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'pillars' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{isBn ? 'কার্যক্রম' : 'Our Work'}</span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
                </Link>
              </div>

              {/* 3. FIRST PROJECT: SPUS */}
              <div
                onMouseEnter={() => handleMouseEnter('spus')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/spus"
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'spus' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#138086] animate-pulse" />
                    <span>{isBn ? 'SPUS প্রজেক্ট' : 'First Project'}</span>
                  </span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
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
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'strategy' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{isBn ? 'কৌশল' : 'Strategy'}</span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
                </Link>
              </div>

              {/* 5. GET INVOLVED */}
              <div
                onMouseEnter={() => handleMouseEnter('involved')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/join-us"
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'involved' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{isBn ? 'যুক্ত হোন' : 'Get Involved'}</span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
                </Link>
              </div>

              {/* 6. MEDIA */}
              <div
                onMouseEnter={() => handleMouseEnter('media')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/news"
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'media' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{isBn ? 'মিডিয়া' : 'Media'}</span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
                </Link>
              </div>

              {/* 7. RESOURCES & REFERENCES */}
              <div
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/resources"
                  className={`px-1.5 xl:px-2 py-1.5 rounded-lg flex items-center gap-0.5 whitespace-nowrap transition-colors ${
                    activeMegaTab === 'resources' ? 'text-[#138086] bg-slate-100/80' : 'hover:text-[#138086] hover:bg-slate-100/80'
                  }`}
                >
                  <span>{isBn ? 'রিসোর্স' : 'Resources'}</span>
                  <ChevronDown className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60" />
                </Link>
              </div>

              {/* 8. Contact */}
              <Link 
                to="/contact" 
                onClick={closeMegaMenu}
                className="px-1.5 xl:px-2 py-1.5 rounded-lg hover:text-[#138086] hover:bg-slate-100/80 whitespace-nowrap transition-colors"
              >
                {isBn ? 'যোগাযোগ' : 'Contact'}
              </Link>

            </nav>

            {/* ACTION BUTTONS (SEARCH & JOIN/DONATE) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              
              {/* Global Search Button */}
              <button
                id="search-trigger-btn"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-[#138086] hover:bg-slate-100 rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
                title="Search (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Primary CTA Button */}
              <Link
                to="/join-us"
                className="bg-[#1B365D] hover:bg-[#104E7A] text-white px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#1B365D]/20 hover:shadow-lg flex items-center gap-1.5 transition-all whitespace-nowrap"
              >
                <Heart className="w-3.5 h-3.5 text-[#E6A119] fill-[#E6A119] shrink-0" />
                <span>{isBn ? 'যুক্ত হোন' : 'Join Us / Donate'}</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#138086] lg:hidden rounded-xl hover:bg-slate-100 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="absolute top-[calc(100%-1px)] left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50 animate-fadeIn"
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
                      </div>

                      <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                        <Link to="/leadership/board" onClick={closeMegaMenu} className="p-2.5 rounded-xl hover:bg-slate-100 font-bold text-slate-800 flex items-center gap-2">
                          <Building className="w-4 h-4 text-slate-500" />
                          <span>{isBn ? 'বোর্ড অফ ট্রাস্টিজ' : 'Board of Trustees'}</span>
                        </Link>
                        <Link to="/team" onClick={closeMegaMenu} className="p-2.5 rounded-xl hover:bg-slate-100 font-bold text-slate-800 flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-500" />
                          <span>{isBn ? 'এক্সপার্ট পুল ও টিম' : 'Secretariat & Team'}</span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-1 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#138086]/10 text-[#138086] uppercase">Legal Status</span>
                        <h5 className="text-xs font-black text-[#1B365D]">Trust Act of 1882</h5>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {isBn ? 'বাংলাদেশের ১৮৮২ সালের ট্রাস্ট আইনের অধীনে নিবন্ধিত মানবকল্যাণ সংস্থা।' : 'Formally established and governed under the Trust Act of 1882.'}
                        </p>
                      </div>
                      <Link to="/transparency" onClick={closeMegaMenu} className="text-xs font-bold text-[#138086] hover:underline flex items-center gap-1 mt-3">
                        <span>{isBn ? 'আর্থিক স্বচ্ছতা পোর্টাল' : 'Transparency Portal'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* 2. OUR WORK / FIVE PILLARS MEGA MENU */}
                {activeMegaTab === 'pillars' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="text-sm font-black text-[#1B365D]">
                          {isBn ? 'আমাদের ৫টি কৌশলগত স্তম্ভ (২০২৬–২০৩১)' : 'Our Five Strategic Pillars (2026–2031)'}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {isBn ? 'আন্তঃপ্রজন্মীয় যত্ন ব্যবস্থা ও টেকসই সমাজ গঠনের পঞ্চস্তর রূপরেখা' : 'Phased intergenerational systems bridging special needs, youth, and elderly care.'}
                        </p>
                      </div>
                      <Link to="/pillars" onClick={closeMegaMenu} className="text-xs font-black text-[#138086] hover:underline flex items-center gap-1">
                        <span>{isBn ? 'সকল স্তম্ভ বিস্তারিত' : 'View Full Pillar Architecture'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-5 gap-3">
                      {[
                        { num: 1, title: 'Children with Special Needs', bnTitle: 'বিশেষ চাহিদাসম্পন্ন শিশু', year: '2026–2029', hash: 'pillar-1', color: '#138086' },
                        { num: 2, title: 'Youth Employability', bnTitle: 'যুব কর্মসংস্থান ও দক্ষতা', year: '2029–2030', hash: 'pillar-2', color: '#104E7A' },
                        { num: 3, title: 'Elderly Care', bnTitle: 'প্রবীণ সেবা ও যত্ন', year: '2030 onward', hash: 'pillar-3', color: '#D4AF37' },
                        { num: 4, title: 'Organizational Sustainability', bnTitle: 'প্রাতিষ্ঠানিক সক্ষমতা ও স্থায়িত্ব', year: 'All Phases', hash: 'pillar-4', color: '#E06D53' },
                        { num: 5, title: 'Shaheen Community Care', bnTitle: 'শাহীন কমিউনিটি সেবা', year: 'Ongoing', hash: 'pillar-5', color: '#64748B' }
                      ].map(p => (
                        <Link
                          key={p.num}
                          to={`/pillars#${p.hash}`}
                          onClick={closeMegaMenu}
                          className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-sm transition-all space-y-2 group"
                        >
                          <div className="flex items-center justify-between">
                            <span 
                              className="w-5 h-5 rounded-full text-white text-[10px] font-black flex items-center justify-center font-mono"
                              style={{ backgroundColor: p.color }}
                            >
                              {p.num}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 font-mono">{p.year}</span>
                          </div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086] leading-snug">
                            {isBn ? p.bnTitle : p.title}
                          </h5>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. FIRST PROJECT: SPUS MEGA MENU */}
                {activeMegaTab === 'spus' && (
                  <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-5 space-y-3 border-r border-slate-100 pr-6">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-[#138086]/10 text-[#138086] text-[10px] font-black uppercase">
                          Flagship Project (2026–2029)
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 font-mono">Pillars 1 & 4</span>
                      </div>
                      <h4 className="text-base font-black text-[#1B365D]">
                        {isBn ? 'সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (SPUS)' : 'Satarkul Protibandhi Unnayan Sangstha'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {isBn 
                          ? 'সাঁতারকুলে ৭৫ জন বিশেষ শিশুর অন্তর্ভুক্তিমূলক শিক্ষা, ১০০ সুবিধাভোগীর থেরাপি এবং প্রাতিষ্ঠানিক টেকসই উন্নয়নে ৩ বছর মেয়াদী প্রথম প্রধান প্রকল্প।'
                          : 'Supporting inclusive education for 75 children, regular therapy for 100 beneficiaries, and long-term NGO institutional capacity building.'}
                      </p>
                      <div className="pt-2">
                        <Link
                          to="/spus"
                          onClick={closeMegaMenu}
                          className="bg-[#138086] text-white px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 hover:bg-[#0f686d] transition-colors"
                        >
                          <span>{isBn ? 'সম্পূর্ণ প্রকল্প বিবরণ দেখুন' : 'Explore Full Project'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-7 grid grid-cols-3 gap-3">
                      <Link to="/spus" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <Activity className="w-5 h-5 text-[#138086]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'সেবা প্যাকেজ' : 'Service Packages'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'শিক্ষা, থেরাপি ও পুষ্টি' : 'Education, Therapy, Nutrition'}</p>
                      </Link>

                      <Link to="/spus" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <Calendar className="w-5 h-5 text-[#104E7A]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? '৮টি প্রধান কার্যক্রম' : '8 Key Activities'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'মাঠপর্যায়ের রূপরেখা' : 'Operational Implementation'}</p>
                      </Link>

                      <Link to="/spus" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#138086]/40 transition-all space-y-1.5">
                        <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'বাজেট ও যাচাই' : 'Budget & Diligence'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? '১৩.২৭ মিলিয়ন টাকা' : 'BDT 13.27M (~$108K)'}</p>
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
                        <p className="text-[11px] text-slate-500">CRPD, SDGs & Disability Act 2013</p>
                      </Link>
                    </div>
                  </div>
                )}

                {/* 5. GET INVOLVED MEGA MENU */}
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
                      <p className="text-[11px] text-slate-200">{isBn ? 'সিটি ব্যাংক ও বিকাশ অনুদান চ্যানেল' : 'The City Bank PLC & verified channels.'}</p>
                    </Link>
                  </div>
                )}

                {/* 6. MEDIA MEGA MENU */}
                {activeMegaTab === 'media' && (
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-blue-100 text-[#1B365D] uppercase">
                          {isBn ? 'মিডিয়া সেন্টার' : 'Media Center'}
                        </span>
                        <h4 className="text-sm font-black text-[#1B365D]">
                          {isBn ? 'সংবাদ, ইভেন্ট ও ফিল্ড স্টোরিজ' : 'News, Events & Field Stories'}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {isBn
                            ? 'শাহীন কেয়ার্স ট্রাস্টের সাম্প্রতিক সংবাদ বিজ্ঞপ্তি, ভিডিও তথ্যচিত্র, ফটো গ্যালারি এবং অনুষ্ঠানমালা।'
                            : 'Explore our latest press releases, upcoming events, photo albums, and video documentaries.'}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#138086]">
                        <span>{isBn ? 'সকল মিডিয়া কনটেন্ট' : 'All Media Content'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="col-span-8 grid grid-cols-2 gap-3">
                      {/* Blog */}
                      <Link to="/blog" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-sm transition-all flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0D6E4F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'মাঠপর্যায়ের ব্লগ ও গল্প' : 'Field Stories & Blog'}
                          </h5>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isBn ? 'সাঁতারকুল ও মাঠপর্যায়ের বাস্তব অভিজ্ঞতা' : 'Voices and insights from our field workers'}
                          </p>
                        </div>
                      </Link>

                      {/* Events */}
                      <Link to="/events" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-sm transition-all flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#138086] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'আসন্ন অনুষ্ঠান ও ইভেন্টস' : 'Upcoming Events & Programs'}
                          </h5>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isBn ? 'উদ্বোধনী অনুষ্ঠান, কর্মশালা ও সমাবেশ' : 'Official launch, forums & workshops'}
                          </p>
                        </div>
                      </Link>

                      {/* News */}
                      <Link to="/news" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-sm transition-all flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1B365D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Newspaper className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'প্রেস রিলিজ ও সংবাদ' : 'Press Releases & News'}
                          </h5>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isBn ? 'অফিসিয়াল ঘোষণা ও মিডিয়া কভারেজ' : 'Secretariat announcements and media coverage'}
                          </p>
                        </div>
                      </Link>

                      {/* Photo Gallery */}
                      <Link to="/gallery/photos" onClick={closeMegaMenu} className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-sm transition-all flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Image className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'ফটো গ্যালারি' : 'Field Photo Gallery'}
                          </h5>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isBn ? 'সাঁতারকুল সেন্টার ও মাঠপর্যায়ের স্থিরচিত্র' : 'Eyewitness photos from field and meetings'}
                          </p>
                        </div>
                      </Link>

                      {/* Video Gallery */}
                      <Link to="/gallery/videos" onClick={closeMegaMenu} className="col-span-2 p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#138086]/40 hover:shadow-sm transition-all flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E06D53] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Video className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 group-hover:text-[#138086]">
                            {isBn ? 'ভিডিও ডকুমেন্টারি ও রিপোর্ট' : 'Video Documentaries & Reports'}
                          </h5>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isBn ? 'চেয়ারপারসনের বক্তব্য, পরিচিতি ও প্রজেক্ট ভিডিও' : 'Impact films, documentary reports & messages'}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}

                {/* 7. RESOURCES MEGA MENU */}
                {activeMegaTab === 'resources' && (
                  <div className="grid grid-cols-2 gap-6">
                    <Link to="/transparency" onClick={closeMegaMenu} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#138086]/40 hover:bg-white transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0D6E4F] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'আর্থিক স্বচ্ছতা ও অডিট পোর্টাল' : 'Financial Transparency & Audits'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্টস দ্বারা নিরীক্ষিত বার্ষিক স্টেটমেন্ট ও বাজেট বিবরণী।' : 'Audited reports certified by independent Chartered Accountants.'}</p>
                      </div>
                    </Link>

                    <Link to="/resources" onClick={closeMegaMenu} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#138086]/40 hover:bg-white transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#138086]/10 text-[#138086] flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-xs font-black text-slate-900">{isBn ? 'তথ্যসূত্র, আইন ও গবেষণা সংস্থান' : 'Resources & References Repository'}</h5>
                        <p className="text-[11px] text-slate-500">{isBn ? 'জাতিসংঘ সনদ (CRPD, CRC), বাংলাদেশ ট্রাস্ট আইন ১৮৮২ ও প্রতিবন্ধী আইন ২০১৩।' : 'UN CRPD, CRC, SDGs, Bangladesh Trust Act 1882 & statutory citations.'}</p>
                      </div>
                    </Link>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* MOBILE NAVIGATION DRAWER (ACCORDION STYLE)                */}
        {/* ========================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-8 space-y-2 animate-fadeIn text-sm font-bold text-slate-800 max-h-[80vh] overflow-y-auto">
            
            <Link to="/" onClick={closeMegaMenu} className="block py-2 border-b border-slate-100">
              {isBn ? 'হোম' : 'Home'}
            </Link>

            {/* About Accordion */}
            <div className="border-b border-slate-100 py-1">
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === 'about' ? null : 'about')}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span>{isBn ? 'আমাদের কথা (About SCT)' : 'About SCT'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'about' ? 'rotate-180 text-[#138086]' : ''}`} />
              </button>
              {mobileSubMenu === 'about' && (
                <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-slate-600 animate-fadeIn">
                  <Link to="/about" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'পটভূমি ও ইতিহাস' : 'Our Story'}</Link>
                  <Link to="/mission" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'ভিশন ও মিশন' : 'Vision & Mission'}</Link>
                  <Link to="/purpose" onClick={closeMegaMenu} className="block py-1 text-[#138086] font-bold">• {isBn ? 'আমাদের উদ্দেশ্য (Our Purpose)' : 'Our Purpose'}</Link>
                  <Link to="/leadership/chairman" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'চেয়ারপারসনের বাণী' : "Chairperson's Message"}</Link>
                  <Link to="/leadership/ceo" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'সাধারণ সম্পাদকের বার্তা' : "General Secretary's Message"}</Link>
                  <Link to="/leadership/board" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'বোর্ড অফ ট্রাস্টিজ' : 'Board of Trustees'}</Link>
                  <Link to="/team" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'টিম ও কর্মী' : 'Secretariat & Team'}</Link>
                </div>
              )}
            </div>

            {/* Pillars Accordion */}
            <div className="border-b border-slate-100 py-1">
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === 'pillars' ? null : 'pillars')}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span>{isBn ? 'কার্যক্রম (Five Pillars)' : 'Our Five Pillars'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'pillars' ? 'rotate-180 text-[#138086]' : ''}`} />
              </button>
              {mobileSubMenu === 'pillars' && (
                <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-slate-600 animate-fadeIn">
                  <Link to="/pillars" onClick={closeMegaMenu} className="block py-1 font-bold text-[#138086]">• {isBn ? 'সকল স্তম্ভের সামগ্রিক রূপরেখা' : 'Pillars Overview'}</Link>
                  <Link to="/pillars#pillar-1" onClick={closeMegaMenu} className="block py-1">• 1. {isBn ? 'বিশেষ চাহিদাসম্পন্ন শিশু (২০২৬–২০২৯)' : 'Special Needs (2026–2029)'}</Link>
                  <Link to="/pillars#pillar-2" onClick={closeMegaMenu} className="block py-1">• 2. {isBn ? 'যুব কর্মসংস্থান (২০২৯–২০৩০)' : 'Youth Employability (2029–2030)'}</Link>
                  <Link to="/pillars#pillar-3" onClick={closeMegaMenu} className="block py-1">• 3. {isBn ? 'প্রবীণ সেবা (২০৩০ থেকে)' : 'Elderly Care (2030 onward)'}</Link>
                  <Link to="/pillars#pillar-4" onClick={closeMegaMenu} className="block py-1">• 4. {isBn ? 'প্রাতিষ্ঠানিক সক্ষমতা ও স্থায়িত্ব' : 'Organizational Sustainability'}</Link>
                  <Link to="/pillars#pillar-5" onClick={closeMegaMenu} className="block py-1">• 5. {isBn ? 'শাহীন কমিউনিটি সেবা' : 'Shaheen Community Care'}</Link>
                </div>
              )}
            </div>

            {/* First Project SPUS */}
            <Link to="/spus" onClick={closeMegaMenu} className="block py-2 border-b border-slate-100 text-[#138086] font-bold">
              ★ {isBn ? 'প্রথম প্রজেক্ট: SPUS সাঁতারকুল' : 'First Project: SPUS Satarkul'}
            </Link>

            {/* Strategy */}
            <Link to="/strategy" onClick={closeMegaMenu} className="block py-2 border-b border-slate-100">
              {isBn ? 'কৌশলগত পরিকল্পনা ২০২৬–২০৩১' : 'Strategy 2026–2031'}
            </Link>

            {/* Get Involved */}
            <div className="border-b border-slate-100 py-1">
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === 'involved' ? null : 'involved')}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span>{isBn ? 'যুক্ত হোন (Get Involved)' : 'Get Involved'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'involved' ? 'rotate-180 text-[#138086]' : ''}`} />
              </button>
              {mobileSubMenu === 'involved' && (
                <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-slate-600 animate-fadeIn">
                  <Link to="/join-us" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'কেন যুক্ত হবেন (Why Join Us)' : 'Why Join Us'}</Link>
                  <Link to="/volunteer" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' : 'Volunteer'}</Link>
                  <Link to="/contact" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'উপদেষ্টা / অংশীদারিত্ব' : 'Partner with SCT'}</Link>
                  <Link to="/donate" onClick={closeMegaMenu} className="block py-1 font-bold text-[#E6A119]">• {isBn ? 'অনুদান ও সহায়তা' : 'Support / Donate'}</Link>
                </div>
              )}
            </div>

            {/* Media Accordion */}
            <div className="border-b border-slate-100 py-1">
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === 'media' ? null : 'media')}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span>{isBn ? 'মিডিয়া ও সংবাদ (Media)' : 'Media & Updates'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'media' ? 'rotate-180 text-[#138086]' : ''}`} />
              </button>
              {mobileSubMenu === 'media' && (
                <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-slate-600 animate-fadeIn">
                  <Link to="/blog" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'ফিল্ড ব্লগ ও গল্প' : 'Blog & Field Stories'}</Link>
                  <Link to="/events" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'আসন্ন ইভেন্টস' : 'Events & Programs'}</Link>
                  <Link to="/news" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'প্রেস রিলিজ ও সংবাদ' : 'Press Releases'}</Link>
                  <Link to="/gallery/photos" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'ফটো গ্যালারি' : 'Photo Gallery'}</Link>
                  <Link to="/gallery/videos" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'ভিডিও ডকুমেন্টারি' : 'Video Gallery'}</Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="border-b border-slate-100 py-1">
              <button 
                onClick={() => setMobileSubMenu(mobileSubMenu === 'resources' ? null : 'resources')}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span>{isBn ? 'রিসোর্স ও স্বচ্ছতা' : 'Resources & Transparency'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'resources' ? 'rotate-180 text-[#138086]' : ''}`} />
              </button>
              {mobileSubMenu === 'resources' && (
                <div className="pl-4 pb-2 space-y-2 text-xs font-semibold text-slate-600 animate-fadeIn">
                  <Link to="/transparency" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'আর্থিক স্বচ্ছতা ও অডিট রিপোর্ট' : 'Financial Transparency'}</Link>
                  <Link to="/resources" onClick={closeMegaMenu} className="block py-1">• {isBn ? 'তথ্যসূত্র, আইন ও নীতিমালা' : 'Resources & Legal References'}</Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link to="/contact" onClick={closeMegaMenu} className="block py-2 border-b border-slate-100">
              {isBn ? 'যোগাযোগ' : 'Contact Us'}
            </Link>

            {/* Bottom Direct CTA */}
            <div className="pt-4">
              <Link
                to="/join-us"
                onClick={closeMegaMenu}
                className="w-full bg-[#1B365D] text-white py-3 rounded-xl text-xs font-bold text-center block shadow-md"
              >
                {isBn ? 'যুক্ত হোন' : 'Join Our Movement'}
              </Link>
            </div>

          </div>
        )}

      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};