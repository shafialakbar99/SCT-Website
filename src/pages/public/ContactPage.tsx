import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteContent } from '../../data/siteContent';
import { initialFAQs } from '../../data/faqs';

export const ContactPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>(initialFAQs[0].id);
  const [sent, setSent] = useState(false);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            📞 {isBn ? 'যোগাযোগ ও হেল্পলাইন' : 'Contact & Support'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isBn ? 'যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন' : 'We are Here to Listen & Assist'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBn ? '২৪/৭ ডাইরেক্ট হেল্পলাইন ও হোয়াটসঅ্যাপ সাপোর্ট সাপোর্ট উপলব্ধ।' : '24/7 Helpline and Field Coordination Offices.'}
          </p>
        </div>

        {/* 3 COL CONTACT DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0D6E4F]/10 text-[#0D6E4F] flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">{isBn ? '২৪/৭ হেল্পলাইন' : 'Direct Helpline'}</h3>
            <p className="text-xs font-bold text-[#0D6E4F]">{t(siteContent.hotline)}</p>
            <p className="text-[11px] text-slate-400">Emergencies & Zakat Queries</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E6A119]/10 text-[#E6A119] flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">{isBn ? 'অফিসিয়াল ইমেইল' : 'Official Email'}</h3>
            <p className="text-xs font-bold text-slate-800">{t(siteContent.email)}</p>
            <p className="text-[11px] text-slate-400">Donor relations & Partnership</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">{isBn ? 'প্রধান কার্যালয়' : 'Head Office'}</h3>
            <p className="text-xs text-slate-600">{t(siteContent.address)}</p>
          </div>
        </div>

        {/* CONTACT FORM & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4"
          >
            <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#0D6E4F]" />
              <span>{isBn ? 'আমাদের বার্তা পাঠান' : 'Send Us a Message'}</span>
            </h3>

            {sent ? (
              <div className="p-6 bg-emerald-50 text-[#0D6E4F] rounded-2xl text-center font-bold text-xs space-y-2">
                <CheckCircle2 className="w-8 h-8 mx-auto" />
                <p>{isBn ? 'বার্তা পাঠানো হয়েছে! শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।' : 'Message received! Our team will respond shortly.'}</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder={isBn ? 'আপনার নাম' : 'Your Name'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  />
                  <input
                    type="email"
                    required
                    placeholder={isBn ? 'আপনার ইমেইল' : 'Your Email'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  />
                </div>
                <input
                  type="text"
                  placeholder={isBn ? 'বিষয় (Subject)' : 'Subject'}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                />
                <textarea
                  rows={4}
                  required
                  placeholder={isBn ? 'আপনার বার্তা বিস্তারিত লিখুন...' : 'Write your message details...'}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3 px-4 rounded-xl font-extrabold text-xs shadow-md"
                >
                  {isBn ? 'বার্তা পাঠান' : 'Submit Message'}
                </button>
              </>
            )}
          </form>

          {/* FREQUENTLY ASKED QUESTIONS (FAQ Accordion) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              {isBn ? 'সাধারণ জিজ্ঞাসাবলী (FAQ)' : 'Frequently Asked Questions'}
            </h3>

            <div className="space-y-3">
              {initialFAQs.map((faq) => (
                <div key={faq.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex justify-between items-center text-xs font-bold text-slate-800"
                  >
                    <span>{t(faq.question)}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === faq.id && (
                    <div className="p-3.5 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {t(faq.answer)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
