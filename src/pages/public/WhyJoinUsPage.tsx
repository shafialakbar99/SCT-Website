import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { sctWhyJoinUsData } from '../../data/sctContent';
import {
  Heart,
  BookOpen,
  Users,
  Award,
  Shield,
  Sparkles,
  HandHeart,
  GraduationCap,
  Building,
  ArrowRight,
  CheckCircle2,
  Send,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';

const reasonIconMap: Record<string, React.FC<{ className?: string }>> = {
  Heart,
  BookOpen,
  Users,
  Award,
  Shield,
  Sparkles
};

const engageIconMap: Record<string, React.FC<{ className?: string }>> = {
  HandHeart,
  GraduationCap,
  Building,
  Heart
};

export const WhyJoinUsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<string>('volunteer');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    profession: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#138086]/10 via-[#1B365D]/5 to-transparent border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#138086] transition-colors">{isBn ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <span className="text-[#138086]">{isBn ? 'আমাদের সাথে যুক্ত হোন' : 'Why Join Us'}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138086]/10 text-[#138086] text-xs font-black uppercase tracking-wider border border-[#138086]/20">
              <HandHeart className="w-3.5 h-3.5" />
              <span>{isBn ? 'ঐক্যের মানবিক শক্তি' : 'Community Movement'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] tracking-tight leading-tight">
              {t(sctWhyJoinUsData.heroTitle)}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed pt-2">
              {t(sctWhyJoinUsData.heroSubtitle)}
            </p>
          </div>

        </div>
      </section>

      {/* 2. SIX REASONS WHY JOIN US */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
              {isBn ? 'কেন যুক্ত হবেন?' : 'Why Be Part of SCT?'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
              {isBn ? 'আমাদের সাথে কাজ করার ৬টি অর্থপূর্ণ কারণ' : 'Six Reasons to Join Our Movement'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sctWhyJoinUsData.reasons.map((r) => {
              const IconComp = reasonIconMap[r.iconName] || Sparkles;
              return (
                <div
                  key={r.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-[#138086]/40 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#138086]/10 text-[#138086] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#1B365D]">
                    {t(r.title)}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t(r.desc)}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WAYS TO ENGAGE & DIRECT FORM */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#138086]">
              {isBn ? 'অংশগ্রহণের পথ' : 'Ways to Engage'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B365D]">
              {isBn ? 'আপনি যেভাবে অবদান রাখতে পারেন' : 'Choose How You Want to Contribute'}
            </h2>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sctWhyJoinUsData.waysToEngage.map((way, idx) => {
              const IconComp = engageIconMap[way.iconName] || Heart;
              const roleKey = idx === 0 ? 'volunteer' : idx === 1 ? 'advisor' : idx === 2 ? 'partner' : 'donor';
              const isSelected = selectedRole === roleKey;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedRole(roleKey)}
                  className={`cursor-pointer rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1B365D] text-white border-[#1B365D] shadow-md scale-[1.02]'
                      : 'bg-[#FAF8F5] text-slate-800 border-slate-200 hover:border-[#138086]/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isSelected ? 'bg-white/10 text-white' : 'bg-[#138086]/10 text-[#138086]'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black">
                      {t(way.role)}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
                      {t(way.desc)}
                    </p>
                  </div>

                  <div className="pt-4 mt-2">
                    <span className={`text-[11px] font-bold underline flex items-center gap-1 ${isSelected ? 'text-[#E6A119]' : 'text-[#138086]'}`}>
                      <span>{t(way.actionLabel)}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* APPLICATION / INQUIRY FORM */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-slate-200 max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#138086] bg-[#138086]/10 px-3 py-0.5 rounded-full inline-block">
                {isBn ? 'সরাসরি যুক্ত হওয়ার ফরম' : 'Direct Engagement Inquiry'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1B365D]">
                {isBn ? 'আপনার চিন্তা, দক্ষতা ও আগ্রহ আমাদের জানান' : 'Tell Us About Your Interest & Skills'}
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#0D6E4F] mx-auto" />
                <h4 className="text-lg font-black text-[#0D6E4F]">
                  {isBn ? 'আপনার বার্তা সফলভাবে গৃহীত হয়েছে!' : 'Thank You for Reaching Out!'}
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {isBn 
                    ? 'শাহীন কেয়ার্স ট্রাস্টের সেক্রেটারিয়েট থেকে শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।'
                    : 'The Shaheen Cares Trust team will get in touch with you shortly. Together, let us build dignified futures.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#138086] underline pt-2 block mx-auto"
                >
                  {isBn ? 'আরেকটি বার্তা পাঠান' : 'Submit another response'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'আপনার পূর্ণ নাম' : 'Full Name'} *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanveer Ahmed"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'ইমেইল ঠিকানা' : 'Email Address'} *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'ফোন / হোয়াটসঅ্যাপ' : 'Phone / WhatsApp'} *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'শাহীন ব্যাচ (প্রযোজ্য হলে)' : 'Shaheen Batch (if applicable)'}</label>
                    <input
                      type="text"
                      value={formData.batch}
                      onChange={e => setFormData({ ...formData, batch: e.target.value })}
                      placeholder="e.g. SSC 1989 / Other"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'পেশা / দক্ষতার ক্ষেত্র' : 'Profession & Key Skillset'}</label>
                  <input
                    type="text"
                    value={formData.profession}
                    onChange={e => setFormData({ ...formData, profession: e.target.value })}
                    placeholder="e.g. Medical, IT, Special Educator, Corporate, Legal, Student"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'কীভাবে যুক্ত হতে চান বা আপনার বার্তা' : 'How You Would Like to Contribute / Message'}</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isBn ? 'আপনার আগ্রহের ক্ষেত্র বা সংক্ষিপ্ত ভাবনা লিখুন...' : 'Briefly share how you would like to be part of SCT initiatives...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#138086] outline-hidden bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1B365D] hover:bg-[#104E7A] text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isBn ? 'আগ্রহ প্রকাশ জমা দিন' : 'Submit Expression of Interest'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. CLOSING STATEMENT BANNER */}
      <section className="py-16 bg-[#1B365D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Sparkles className="w-8 h-8 text-[#E6A119] mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
            {isBn ? 'কোনো কৃত্রিম চাপ নেই। কোনো বাধ্যবাধকতা নেই।' : 'No Ask. No Pressure.'}
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            "{t(sctWhyJoinUsData.closingQuote)}"
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#E6A119]" />
              <span>shaheencares@gmail.com</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#E6A119]" />
              <span>+880 1805-099605</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
