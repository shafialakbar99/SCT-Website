import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Award, Phone, Mail, MapPin, ArrowRight, ExternalLink, BookOpen, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteContent } from '../../data/siteContent';

export const Footer: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 relative pt-16 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B365D] via-[#138086] to-[#E6A119]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TRUST BADGES ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 mb-12 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#138086]/20 border border-[#138086]/40 flex items-center justify-center text-[#138086] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#138086]" />
            </div>
            <div>
              <h5 className="text-white text-sm font-bold">{isBn ? 'ট্রাস্ট আইন ১৮৮২ নিবন্ধিত' : 'Trust Act of 1882 Reg.'}</h5>
              <p className="text-xs text-slate-400 mt-0.5">{t(siteContent.regInfo)}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E6A119]/20 border border-[#E6A119]/40 flex items-center justify-center text-[#E6A119] shrink-0">
              <Award className="w-6 h-6 text-[#E6A119]" />
            </div>
            <div>
              <h5 className="text-white text-sm font-bold">{isBn ? 'শাহীন কমিউনিটি উদ্যোগ' : 'Shaheen Community Initiative'}</h5>
              <p className="text-xs text-slate-400 mt-0.5">{t(siteContent.taxInfo)}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h5 className="text-white text-sm font-bold">{isBn ? 'স্বচ্ছ অডিট ও গভর্ন্যান্স' : 'Audited Governance'}</h5>
              <p className="text-xs text-slate-400 mt-0.5">{isBn ? 'স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্ট দ্বারা নিরীক্ষিত' : 'Independent Fiduciary Audits'}</p>
            </div>
          </div>
        </div>

        {/* FOUR COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/Images/logo.png" 
                alt="Shaheen Cares Trust" 
                className="h-10 w-auto object-contain bg-white rounded-lg p-0.5" 
              />
              <span className="font-black text-white text-base sm:text-lg leading-tight">{t(siteContent.orgName)}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isBn 
                ? 'শাহীন কেয়ার্স ট্রাস্ট (SCT) একটি অলাভজনক মানবকল্যাণ সংস্থা, যা বিশেষ চাহিদাসম্পন্ন শিশু, যুব কর্মসংস্থান ও প্রবীণদের দীর্ঘমেয়াদী যত্নে নিবেদিত।' 
                : 'Shaheen Cares Trust (SCT) is a charitable trust established to build lasting care ecosystems for special needs children, youth, and elders.'}
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#138086] shrink-0 mt-0.5" />
                <span>{t(siteContent.address)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#138086] shrink-0" />
                <span>{t(siteContent.hotline)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#138086] shrink-0" />
                <span>{t(siteContent.email)}</span>
              </div>
            </div>
          </div>

          {/* Col 2: About & Pillars Links */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isBn ? 'কর্মপরিকল্পনা ও স্তম্ভ' : 'Work & Five Pillars'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">📌 {isBn ? 'পটভূমি ও ইতিহাস' : 'Our Story'}</Link></li>
              <li><Link to="/purpose" className="hover:text-[#138086] transition-colors font-bold text-slate-200">🎯 {isBn ? 'আমাদের উদ্দেশ্য (Our Purpose)' : 'Our Purpose'}</Link></li>
              <li><Link to="/pillars" className="hover:text-[#138086] transition-colors font-bold text-slate-200">🏛️ {isBn ? 'আমাদের ৫টি স্তম্ভ' : 'Our Five Pillars'}</Link></li>
              <li><Link to="/spus" className="hover:text-[#E6A119] transition-colors font-bold text-slate-200">★ {isBn ? 'প্রথম প্রজেক্ট (SPUS সাঁতারকুল)' : 'First Project: SPUS'}</Link></li>
              <li><Link to="/strategy" className="hover:text-white transition-colors">🧭 {isBn ? 'কৌশলগত পরিকল্পনা (২০২৬–২০৩১)' : 'Strategy 2026–2031'}</Link></li>
              <li><Link to="/mission" className="hover:text-white transition-colors">👁️ {t(siteContent.nav.missionVision)}</Link></li>
              <li><Link to="/leadership/chairman" className="hover:text-white transition-colors">✍️ {isBn ? 'চেয়ারপারসনের বাণী' : "Chairperson's Message"}</Link></li>
              <li><Link to="/leadership/board" className="hover:text-white transition-colors">👥 {isBn ? 'বোর্ড অফ ট্রাস্টিজ' : 'Board of Trustees'}</Link></li>
            </ul>
          </div>

          {/* Col 3: Direct Bank Deposit Info */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isBn ? 'ট্রাস্ট ব্যাংক হিসাব বিবরণী' : 'Official Trust Bank Account'}
            </h4>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs space-y-2.5">
              <div>
                <span className="text-slate-400 text-[11px] block">{isBn ? 'ব্যাংক নাম:' : 'Bank Name:'}</span>
                <span className="text-white font-bold">{t(siteContent.bankDetails.bankName)}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">{isBn ? 'হিসাবের নাম:' : 'Account Name:'}</span>
                <span className="text-[#E6A119] font-bold">{t(siteContent.bankDetails.accountName)}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">{isBn ? 'অ্যাকাউন্ট নং:' : 'Account No:'}</span>
                <span className="text-white font-mono font-bold">{t(siteContent.bankDetails.accountNo)}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">{isBn ? 'শাখা:' : 'Branch:'}</span>
                <span className="text-slate-300">{t(siteContent.bankDetails.branch)}</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Routing: {t(siteContent.bankDetails.routingNo)}</span>
                <span>Swift: {t(siteContent.bankDetails.swiftCode)}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Get Involved & Transparency */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isBn ? 'যুক্ত হোন ও রিসোর্স' : 'Get Involved & Resources'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-4">
              <li><Link to="/join-us" className="hover:text-white transition-colors font-bold text-slate-200">🤝 {isBn ? 'কেন যুক্ত হবেন (Why Join Us)' : 'Why Join Us'}</Link></li>
              <li><Link to="/volunteer" className="hover:text-white transition-colors">🙋‍♂️ {isBn ? 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' : 'Volunteer'}</Link></li>
              <li><Link to="/transparency" className="hover:text-white transition-colors">🛡️ {isBn ? 'আর্থিক স্বচ্ছতা ও অডিট পোর্টাল' : 'Financial Transparency Hub'}</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">📚 {isBn ? 'তথ্যসূত্র ও আইন (Resources)' : 'References & Laws'}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">📞 {isBn ? 'যোগাযোগ ও পরামর্শ' : 'Contact Us'}</Link></li>
            </ul>

            <Link 
              to="/join-us" 
              className="inline-flex items-center justify-center gap-2 bg-[#138086] hover:bg-[#0f686d] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all w-full shadow-md"
            >
              <span>{isBn ? 'আমাদের সাথে যুক্ত হোন' : 'Join SCT Movement'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Shaheen Cares Trust (SCT). All rights reserved. Registered under Trust Act 1882.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/privacy" className="hover:underline">{isBn ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">{isBn ? 'শর্তাবলী' : 'Terms of Service'}</Link>
            <span>•</span>
            <Link to="/resources" className="hover:underline">{isBn ? 'আইনি সংস্থান' : 'Legal Citations'}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
