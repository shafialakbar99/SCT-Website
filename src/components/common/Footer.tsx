import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Award, Phone, Mail, MapPin, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteContent } from '../../data/siteContent';

export const Footer: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 relative pt-16 pb-12 overflow-hidden">
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D6E4F] via-[#E6A119] to-[#0D6E4F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TRUST BADGES ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 mb-12 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D6E4F]/20 border border-[#0D6E4F]/40 flex items-center justify-center text-[#0D6E4F] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#E6A119]" />
            </div>
            <div>
              <h5 className="text-white text-sm font-bold">{isBn ? 'এনজিও ব্যুরো নিবন্ধিত' : 'Govt Registered NGO'}</h5>
              <p className="text-xs text-slate-400 mt-0.5">{t(siteContent.regInfo)}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E6A119]/20 border border-[#E6A119]/40 flex items-center justify-center text-[#E6A119] shrink-0">
              <Award className="w-6 h-6 text-[#E6A119]" />
            </div>
            <div>
              <h5 className="text-white text-sm font-bold">{isBn ? '১০০% কর অব্যাহতিপ্রাপ্ত' : '100% Tax Exempted'}</h5>
              <p className="text-xs text-slate-400 mt-0.5">{t(siteContent.taxInfo)}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h5 className="text-white text-sm font-bold">{isBn ? '৮৫%+ সরাসরি মানবিক সহায়তা' : '85%+ Program Expense'}</h5>
              <p className="text-xs text-slate-400 mt-0.5">{isBn ? 'স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্ট দ্বারা নিরীক্ষিত' : 'Audited by Chartered Accountants'}</p>
            </div>
          </div>
        </div>

        {/* FOUR COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: About & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0D6E4F] text-white flex items-center justify-center font-bold">
                <Heart className="w-4 h-4 text-[#E6A119] fill-[#E6A119]" />
              </div>
              <span className="font-extrabold text-white text-lg">{t(siteContent.orgName)}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {isBn 
                ? 'হিউম্যানিটি ফাস্ট বিডি বাংলাদেশে বন্যা ত্রাণ, সুপেয় পানি, এতিম শিশু লালন-পালন ও যাকাত স্বাবলম্বীকরণে নিবেদিতপ্রাণ একটি মানবিক সংস্থা।' 
                : 'Humanity First BD is a non-profit humanitarian organization dedicated to flood relief, clean water, orphan sponsorship, and audited Zakat empowerment in Bangladesh.'}
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#E6A119] shrink-0 mt-0.5" />
                <span>{t(siteContent.address)}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#E6A119] shrink-0" />
                <span>{t(siteContent.hotline)}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#E6A119] shrink-0" />
                <span>{t(siteContent.email)}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">{isBn ? 'সংগঠন ও লিডারশিপ' : 'About & Leadership'}</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">📌 {t(siteContent.nav.aboutUs)}</Link></li>
              <li><Link to="/mission" className="hover:text-white transition-colors">🎯 {t(siteContent.nav.missionVision)}</Link></li>
              <li><Link to="/leadership/chairman" className="hover:text-white transition-colors">✍️ {t(siteContent.nav.chairmanMessage)}</Link></li>
              <li><Link to="/leadership/ceo" className="hover:text-white transition-colors">💬 {t(siteContent.nav.ceoMessage)}</Link></li>
              <li><Link to="/leadership/board" className="hover:text-white transition-colors">🏛️ {t(siteContent.nav.boardOfTrustees)}</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">👥 {t(siteContent.nav.staffMembers)}</Link></li>
              <li><Link to="/donors" className="hover:text-[#E6A119] transition-colors font-bold text-slate-300">🏆 {t(siteContent.nav.donors)}</Link></li>
              <li><Link to="/transparency" className="hover:text-white transition-colors">🛡️ {t(siteContent.nav.transparency)}</Link></li>
            </ul>
          </div>

          {/* Col 3: Direct Bank Deposit Info */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">{isBn ? 'ডাইরেক্ট ব্যাংক অ্যাকাউন্ট' : 'Bank Transfer Info'}</h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs space-y-2">
              <div>
                <span className="text-slate-400 font-medium block">{isBn ? 'ব্যাংক নাম:' : 'Bank Name:'}</span>
                <span className="text-white font-bold">{t(siteContent.bankDetails.bankName)}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">{isBn ? 'হিসাবের নাম:' : 'Account Name:'}</span>
                <span className="text-[#E6A119] font-bold">{t(siteContent.bankDetails.accountName)}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">{isBn ? 'অ্যাকাউন্ট নং:' : 'Account No:'}</span>
                <span className="text-white font-mono font-bold">{t(siteContent.bankDetails.accountNo)}</span>
              </div>
              <div className="pt-1 border-t border-white/10 text-[11px] text-slate-400">
                <span>Routing: {t(siteContent.bankDetails.routingNo)}</span> • <span>Swift: {t(siteContent.bankDetails.swiftCode)}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & WhatsApp Support */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">{isBn ? 'আপডেট পেতে সাবস্ক্রাইব করুন' : 'Newsletter & Hotline'}</h4>
            <p className="text-xs text-slate-400 mb-3">{isBn ? 'আমাদের ফিল্ড আপডেট ও অডিট রিপোর্ট ইমেইলে পান।' : 'Receive quarterly impact reports & emergency field alerts.'}</p>
            <form onSubmit={(e) => { e.preventDefault(); alert(isBn ? 'ধন্যবাদ! আপনার ইমেইল নিবন্ধিত হয়েছে।' : 'Thank you for subscribing!'); }} className="flex mb-4">
              <input 
                type="email" 
                placeholder={isBn ? 'আপনার ইমেইল...' : 'Your email address...'} 
                required
                className="bg-white/10 text-white placeholder-slate-500 text-xs px-3 py-2 rounded-l-lg focus:outline-none w-full border border-white/10 border-r-0"
              />
              <button type="submit" className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-3 py-2 rounded-r-lg text-xs font-bold shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <a 
              href={`https://wa.me/8801711001122?text=Hello%20Humanity%20First%20BD`} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all w-full justify-center shadow-lg shadow-emerald-900/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isBn ? 'হোয়াটসঅ্যাপ হেল্পলাইন (+8801711001122)' : 'WhatsApp Helpline Chat'}</span>
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Humanity First BD. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/transparency" className="hover:text-slate-300">Privacy & Audit Policy</Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-[#E6A119] text-slate-400 font-semibold flex items-center gap-1">
              ⚙️ Admin Portal
            </Link>
          </div>
        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON (BOTTOM RIGHT) */}
      <a
        href={`https://wa.me/8801711001122?text=Assalamu%20Alaikum%20Humanity%20First%20BD`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
          {isBn ? 'সরাসরি চ্যাট করুন' : 'Chat with Us'}
        </span>
      </a>

    </footer>
  );
};
