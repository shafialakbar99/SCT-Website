import React from 'react';
import { SponsorshipCarousel } from '../../components/public/home/SponsorshipCarousel';
import { useLanguage } from '../../context/LanguageContext';
import { Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SponsorPage: React.FC = () => {
  const { isBn } = useLanguage();

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-[#E6A119]/20 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            👶 {isBn ? 'স্পন্সরশিপ পোর্টাল' : 'Child Sponsorship Portal'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {isBn ? 'একটি শিশুর জীবন বদলে দিন' : 'Sponsor an Orphaned or Disadvantaged Child'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isBn 
              ? 'আপনার প্রতিমাসের ২০০০ টাকার স্পন্সরশিপের মাধ্যমে একটি শিশুর খাবার, পড়ালেখা, চিকিৎসা ও পোশাক নিশ্চিত হয়।' 
              : 'Monthly sponsorship of BDT 2,000 ensures 3 nutritious meals daily, school books, uniforms, and medical coverage.'}
          </p>
        </div>

        {/* SPONSORSHIP BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titleEn: 'Monthly Academic Progress Report',
              titleBn: 'প্রতিমাসের স্কুল রিপোর্ট ও রেজাল্ট কার্ড',
              descEn: 'Receive quarterly updates on your child’s grades and wellbeing.',
              descBn: 'ত্রৈমাসিক রিপোর্ট কার্ড সরাসরি আপনার ইমেইলে পাঠানো হবে।'
            },
            {
              titleEn: 'Direct Handwritten Letters & Greetings',
              titleBn: 'শিশুর হাতে লেখা চিঠি ও ঈদ উপহার',
              descEn: 'Exchange letters and send Eid greetings to your sponsored child.',
              descBn: 'ঈদে বিশেষ উপহার পাঠাতে পারেন ও শিশুর সঙ্গে যোগাযোগ রাখতে পারেন।'
            },
            {
              titleEn: '100% Shariah Compliant Care',
              titleBn: 'শরীয়াহ সম্মত এতিম লালন-পালন',
              descEn: 'Audited expenses managed by our dedicated child welfare officers.',
              descBn: 'আমাদের চাইল্ড কেয়ার অফিসারদের তত্ত্বাবধানে যত্ন নেওয়া হয়।'
            }
          ].map((b, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#0D6E4F]" />
              <h3 className="font-extrabold text-slate-900 text-sm">{isBn ? b.titleBn : b.titleEn}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{isBn ? b.descBn : b.descEn}</p>
            </div>
          ))}
        </div>

        {/* REUSE CAROUSEL LIST */}
        <SponsorshipCarousel />

      </div>
    </div>
  );
};
