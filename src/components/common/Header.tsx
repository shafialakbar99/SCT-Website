import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, Search, Heart, Phone, Shield, Palette, Menu, X, ChevronDown, AlertCircle, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { siteContent } from '../../data/siteContent';
import { SearchModal } from './SearchModal';
import { SafeImage } from './SafeImage';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t, isBn } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        
        {/* TOP EMERGENCY ALERT BAR */}
        <div className="bg-[#0D6E4F] text-white text-[11px] md:text-xs py-1.5 px-3 sm:px-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2 overflow-hidden mr-2">
            <span className="bg-[#E6A119] text-slate-900 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              {isBn ? 'জরুরি নোটিশ' : 'URGENT'}
            </span>
            <div className="truncate text-white/95">
              {t(siteContent.emergencyTicker)}
            </div>
            <Link 
              to="/donate" 
              className="hidden lg:inline-flex items-center text-[#E6A119] hover:underline font-semibold text-[11px] shrink-0 ml-1"
            >
              {t(siteContent.nav.donateNow)} <ArrowRight className="w-3 h-3 ml-0.5" />
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
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium transition-all"
              title="Switch Language"
            >
              <Globe className="w-3 h-3 text-[#E6A119]" />
              <span className="font-bold">{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium transition-all"
              title="Toggle Theme"
            >
              <Palette className="w-3 h-3 text-[#E6A119]" />
              <span className="hidden md:inline">{theme === 'hope-humanity' ? 'Theme 2' : 'Theme 1'}</span>
            </button>
          </div>
        </div>

        {/* MAIN STICKY NAVIGATION BAR */}
        <div className="glass-nav border-b border-slate-200/80 shadow-xs relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* LOGO AREA */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D6E4F] to-[#0A583F] text-white flex items-center justify-center shadow-md shadow-[#0D6E4F]/20 font-bold">
                <Heart className="w-5 h-5 text-[#E6A119] fill-[#E6A119]" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-slate-900 text-lg sm:text-xl leading-tight tracking-tight">
                  {t(siteContent.orgName)}
                </span>
                <span className="text-[10px] text-slate-500 font-medium hidden sm:block">
                  {t(siteContent.orgTagline)}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS WITH MEGA MENU MECHANICS */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-bold text-slate-700 shrink">
              
              <Link 
                to="/" 
                className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 whitespace-nowrap transition-colors"
              >
                {t(siteContent.nav.home)}
              </Link>

              {/* Mega Menu Trigger 0: About & Leadership */}
              <div
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/about"
                  className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 flex items-center gap-0.5 whitespace-nowrap transition-colors"
                >
                  {t(siteContent.nav.aboutUs)}
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>
              </div>

              {/* Mega Menu Trigger 1: Causes & Campaigns */}
              <div
                onMouseEnter={() => handleMouseEnter('causes')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/campaigns"
                  className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 flex items-center gap-0.5 whitespace-nowrap transition-colors"
                >
                  {isBn ? 'ক্যাম্পেইন' : 'Causes'}
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>
              </div>

              <Link 
                to="/donors" 
                className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 flex items-center gap-1 whitespace-nowrap transition-colors text-slate-800 font-extrabold"
              >
                <Award className="w-3.5 h-3.5 text-[#E6A119]" />
                {isBn ? 'দাতাগণ' : 'Donors'}
              </Link>

              <Link 
                to="/zakat-calculator" 
                className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 flex items-center gap-1 whitespace-nowrap transition-colors text-[#0D6E4F] font-extrabold"
              >
                {isBn ? 'যাকাত' : 'Zakat Calc'}
              </Link>

              {/* Mega Menu Trigger 2: Media & Gallery */}
              <div
                onMouseEnter={() => handleMouseEnter('media')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <span className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 flex items-center gap-0.5 whitespace-nowrap cursor-pointer transition-colors">
                  {isBn ? 'মিডিয়া' : 'Media'}
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </span>
              </div>

              {/* Mega Menu Trigger 3: Get Involved */}
              <div
                onMouseEnter={() => handleMouseEnter('involved')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <span className="px-2 py-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-slate-100/80 flex items-center gap-0.5 whitespace-nowrap cursor-pointer transition-colors">
                  {isBn ? 'অংশগ্রহণ' : 'Get Involved'}
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </span>
              </div>

            </nav>

            {/* ACTION BUTTONS (SEARCH & DONATE) */}
            <div className="flex items-center gap-2">
              
              {/* Global Search Button */}
              <button
                id="search-trigger-btn"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-[#0D6E4F] hover:bg-slate-100 rounded-lg flex items-center gap-1.5 transition-colors"
                title="Search (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  Ctrl+K
                </span>
              </button>

              {/* Primary Donate CTA Button */}
              <Link
                to="/donate"
                className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-[#0D6E4F]/20 hover:shadow-lg hover:shadow-[#0D6E4F]/30 flex items-center gap-1.5 transition-all transform active:scale-95"
              >
                <Heart className="w-4 h-4 text-[#E6A119] fill-[#E6A119]" />
                <span>{t(siteContent.nav.donateNow)}</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0D6E4F] lg:hidden rounded-lg hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>

          {/* MEGA MENU DROPDOWN PANEL AT HEADER COMPONENT LEVEL WITH 300MS BRIDGE */}
          {activeMegaTab && (
            <div
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
              className="absolute top-[calc(100%-1px)] left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50 animate-fadeIn"
            >
              {/* Invisible Bridge Element */}
              <div className="absolute -top-3 left-0 w-full h-3 bg-transparent" />

              <div className="max-w-7xl mx-auto p-6 grid grid-cols-4 gap-6">
                
                {activeMegaTab === 'about' && (
                  <>
                    <div className="col-span-1 border-r border-slate-100 pr-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {isBn ? 'সংগঠন ও রূপরেখা' : 'About Organization'}
                      </h4>
                      <div className="space-y-2">
                        <Link to="/about" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          📌 {t(siteContent.nav.aboutUs)}
                        </Link>
                        <Link to="/mission" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          🎯 {t(siteContent.nav.missionVision)}
                        </Link>
                        <Link to="/transparency" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          🛡️ {t(siteContent.nav.transparency)}
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-2 px-2 border-r border-slate-100 pr-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {isBn ? 'নেতৃত্ব ও গভর্ন্যান্স' : 'Leadership & Governance'}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to="/leadership/chairman" onClick={() => setActiveMegaTab(null)} className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-100 transition-colors">
                          <span className="text-[10px] font-bold text-[#E6A119] uppercase block">Founder & Chairman</span>
                          <h5 className="text-xs font-extrabold text-slate-900 mt-0.5">{isBn ? 'চেয়ারম্যানের বাণী' : "Chairman's Message"}</h5>
                          <p className="text-[11px] text-slate-500 mt-1">Dr. Mushtaq Ahmed Chowdhury</p>
                        </Link>

                        <Link to="/leadership/ceo" onClick={() => setActiveMegaTab(null)} className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-100 transition-colors">
                          <span className="text-[10px] font-bold text-[#0D6E4F] uppercase block">Managing Director & CEO</span>
                          <h5 className="text-xs font-extrabold text-slate-900 mt-0.5">{isBn ? 'সিইও-এর বার্তা' : "CEO's Message"}</h5>
                          <p className="text-[11px] text-slate-500 mt-1">Syeda Razia Begum</p>
                        </Link>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                        <Link to="/leadership/board" onClick={() => setActiveMegaTab(null)} className="p-2.5 rounded-lg hover:bg-slate-100 font-bold text-slate-700 block">
                          🏛️ {t(siteContent.nav.boardOfTrustees)}
                        </Link>
                        <Link to="/team" onClick={() => setActiveMegaTab(null)} className="p-2.5 rounded-lg hover:bg-slate-100 font-bold text-slate-700 block">
                          👥 {t(siteContent.nav.staffMembers)}
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-1 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#0D6E4F]">NGO Bureau Reg: 2847</span>
                        <h5 className="text-sm font-bold text-slate-900 mt-1">{isBn ? 'স্বচ্ছ এনজিও পরিচালনা' : 'Audited Governance'}</h5>
                        <p className="text-xs text-slate-600 mt-1">{isBn ? '৬৪ জেলায় দ্রুততম ও অডিটযোগ্য মানবিক সহায়তায় নিবেদিত।' : 'Operating under strict public accountability across 64 Bangladesh districts.'}</p>
                      </div>
                      <Link to="/donors" onClick={() => setActiveMegaTab(null)} className="mt-3 bg-[#0D6E4F] text-white text-xs font-bold py-2 px-3 rounded-lg text-center">
                        {isBn ? 'দাতা তালিকা দেখুন' : 'View Wall of Honor'}
                      </Link>
                    </div>
                  </>
                )}

                {activeMegaTab === 'causes' && (
                  <>
                    <div className="col-span-1 border-r border-slate-100 pr-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {isBn ? 'ক্যাম্পেইন ক্যাটাগরি' : 'Campaign Categories'}
                      </h4>
                      <div className="space-y-2">
                        <Link to="/campaigns?cat=emergency" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          🚨 {isBn ? 'জরুরি বন্যা ও খরা ত্রাণ' : 'Emergency Relief'}
                        </Link>
                        <Link to="/campaigns?cat=zakat" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          🌙 {isBn ? '১০০% যাকাতযোগ্য প্রজেক্ট' : 'Zakat Eligible Projects'}
                        </Link>
                        <Link to="/campaigns?cat=water" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          💧 {isBn ? 'উপকূলীয় সুপেয় পানি ও নলকূপ' : 'Clean Water Wells'}
                        </Link>
                        <Link to="/campaigns?cat=education" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-emerald-50 text-slate-800 hover:text-[#0D6E4F] text-xs font-semibold">
                          📚 {isBn ? 'পথশিশু ও প্রাথমিক শিক্ষা' : 'Education & Literacy'}
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-2 px-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {isBn ? 'জরুরি ফান্ডিং প্রয়োজন' : 'Urgent Funding Needed'}
                      </h4>
                      <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 flex items-start gap-4">
                        <SafeImage
                          src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=300&auto=format&fit=crop"
                          alt="Flood Relief"
                          className="w-24 h-24 object-cover rounded-lg shrink-0"
                          fallbackCategory="emergency"
                        />
                        <div>
                          <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded uppercase">Urgent</span>
                          <h5 className="text-sm font-bold text-slate-900 mt-1">Sylhet & Feni Flood Relief Drive</h5>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-2">Providing dry food packs and clean water in Sylhet & Feni.</p>
                          <Link to="/campaigns/sylhet-feni-flood-relief" onClick={() => setActiveMegaTab(null)} className="inline-flex items-center text-xs font-bold text-[#0D6E4F] mt-2 hover:underline">
                            {isBn ? 'বিস্তারিত দেখুন' : 'View Campaign'} →
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 bg-amber-50/50 p-4 rounded-xl border border-amber-100 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#E6A119]">Zakat Tool</span>
                        <h5 className="text-sm font-bold text-slate-900 mt-1">{isBn ? 'যাকাত হিসাব করুন' : 'Calculate Your Zakat'}</h5>
                        <p className="text-xs text-slate-600 mt-1">{isBn ? 'সঠিক নিসাব ও ২.৫% হিসেব করে দান করুন।' : 'Assess 2.5% Nisab easily with our tool.'}</p>
                      </div>
                      <Link to="/zakat-calculator" onClick={() => setActiveMegaTab(null)} className="mt-3 bg-[#0D6E4F] text-white text-xs font-bold py-2 px-3 rounded-lg text-center">
                        {isBn ? 'ক্যালকুলেটর খুলুন' : 'Open Calculator'}
                      </Link>
                    </div>
                  </>
                )}

                {activeMegaTab === 'media' && (
                  <>
                    <div className="col-span-1 border-r border-slate-100 pr-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {isBn ? 'মিডিয়া সেন্টারে জানুন' : 'Media Center'}
                      </h4>
                      <div className="space-y-2">
                        <Link to="/gallery/photos" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-slate-50 text-slate-800 text-xs font-semibold">
                          📷 {t(siteContent.nav.photos)}
                        </Link>
                        <Link to="/gallery/videos" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-slate-50 text-slate-800 text-xs font-semibold">
                          🎥 {t(siteContent.nav.videos)}
                        </Link>
                        <Link to="/blog" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-slate-50 text-slate-800 text-xs font-semibold">
                          ✍️ {t(siteContent.nav.blogs)}
                        </Link>
                        <Link to="/news" onClick={() => setActiveMegaTab(null)} className="block p-2 rounded-lg hover:bg-slate-50 text-slate-800 text-xs font-semibold">
                          📰 {t(siteContent.nav.news)}
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-2 gap-4">
                      <div className="p-3 border border-slate-100 rounded-xl hover:border-[#0D6E4F]/30 transition-colors">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Featured Documentary</span>
                        <h5 className="text-xs font-bold text-slate-900 mt-1">Field Report: Flood Rescue in Feni</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Watch how our speedboats delivered rations to isolated villages.</p>
                        <Link to="/gallery/videos" onClick={() => setActiveMegaTab(null)} className="text-xs text-[#0D6E4F] font-bold mt-2 inline-block">Watch Video →</Link>
                      </div>
                      <div className="p-3 border border-slate-100 rounded-xl hover:border-[#0D6E4F]/30 transition-colors">
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Field Blog</span>
                        <h5 className="text-xs font-bold text-slate-900 mt-1">Solar Tube Wells in Satkhira</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Solving groundwater salinity in coastal Bangladesh.</p>
                        <Link to="/blog" onClick={() => setActiveMegaTab(null)} className="text-xs text-[#0D6E4F] font-bold mt-2 inline-block">Read Article →</Link>
                      </div>
                    </div>
                  </>
                )}

                {activeMegaTab === 'involved' && (
                  <>
                    <div className="col-span-2 pr-4 border-r border-slate-100 space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {isBn ? 'আমাদের সাথে যুক্ত হোন' : 'Ways to Participate'}
                      </h4>
                      <Link to="/volunteer" onClick={() => setActiveMegaTab(null)} className="p-3 rounded-xl hover:bg-emerald-50 flex items-start gap-3 transition-colors border border-slate-100">
                        <div className="p-2 bg-emerald-100 text-[#0D6E4F] rounded-lg">🙋‍♂️</div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{t(siteContent.nav.volunteer)}</h5>
                          <p className="text-[11px] text-slate-500">{isBn ? 'আপনার জেলায় ত্রাণ ও উদ্ধার টিমে কাজ করুন।' : 'Join ground rescue & relief teams across Bangladesh.'}</p>
                        </div>
                      </Link>
                      <Link to="/sponsor" onClick={() => setActiveMegaTab(null)} className="p-3 rounded-xl hover:bg-amber-50 flex items-start gap-3 transition-colors border border-slate-100">
                        <div className="p-2 bg-amber-100 text-[#E6A119] rounded-lg">👶</div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{t(siteContent.nav.sponsor)}</h5>
                          <p className="text-[11px] text-slate-500">{isBn ? 'মাসিক ২০০০ টাকায় এতিম শিশুর লালন-পালন স্পন্সর করুন।' : 'Sponsor an orphan student for BDT 2000/month.'}</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-span-2 pl-2 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {isBn ? 'স্বচ্ছতা ও যোগাযোগ' : 'Transparency & Contact'}
                        </h4>
                        <div className="space-y-2">
                          <Link to="/transparency" onClick={() => setActiveMegaTab(null)} className="p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors">
                            <span>🛡️ {t(siteContent.nav.transparency)}</span>
                            <span className="text-[10px] text-[#0D6E4F] bg-emerald-100 px-2 py-0.5 rounded font-semibold">NGO Bureau Audited</span>
                          </Link>
                          <Link to="/contact" onClick={() => setActiveMegaTab(null)} className="p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors">
                            <span>📞 {t(siteContent.nav.contact)}</span>
                            <span className="text-[10px] text-slate-500">Banani, Dhaka</span>
                          </Link>
                        </div>
                      </div>
                      <Link to="/contact" onClick={() => setActiveMegaTab(null)} className="inline-block bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-lg text-center mt-3 hover:bg-slate-800 transition-colors">
                        {isBn ? 'যোগাযোগ ও পার্টনারশিপ' : 'Contact Partnerships Desk'}
                      </Link>
                    </div>
                  </>
                )}

              </div>
            </div>
          )}

        </div>

        {/* MOBILE MENU overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn text-sm font-bold text-slate-800">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">
              {t(siteContent.nav.home)}
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#0D6E4F]">
              📌 {t(siteContent.nav.aboutUs)}
            </Link>
            <div className="pl-4 space-y-1 text-xs font-semibold text-slate-600">
              <Link to="/leadership/chairman" onClick={() => setMobileMenuOpen(false)} className="block py-1">
                • {t(siteContent.nav.chairmanMessage)}
              </Link>
              <Link to="/leadership/ceo" onClick={() => setMobileMenuOpen(false)} className="block py-1">
                • {t(siteContent.nav.ceoMessage)}
              </Link>
              <Link to="/leadership/board" onClick={() => setMobileMenuOpen(false)} className="block py-1">
                • {t(siteContent.nav.boardOfTrustees)}
              </Link>
              <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="block py-1">
                • {t(siteContent.nav.staffMembers)}
              </Link>
            </div>
            <Link to="/donors" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#E6A119]">
              🏆 {t(siteContent.nav.donors)}
            </Link>
            <Link to="/campaigns" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">
              {t(siteContent.nav.causes)}
            </Link>
            <Link to="/zakat-calculator" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#0D6E4F]">
              {t(siteContent.nav.zakat)}
            </Link>
            <Link to="/transparency" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">
              {t(siteContent.nav.transparency)}
            </Link>
            <Link to="/volunteer" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">
              {t(siteContent.nav.volunteer)}
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">
              {t(siteContent.nav.contact)}
            </Link>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs text-slate-400 font-normal">
              ⚙️ {t(siteContent.nav.admin)}
            </Link>
          </div>
        )}

      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
