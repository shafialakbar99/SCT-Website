import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const VolunteerCallout: React.FC = () => {
  const { isBn } = useLanguage();

  const partners = [
    'NGO Affairs Bureau BD',
    'BRAC Bank',
    'SSL Commerz',
    'Bangladesh Red Crescent',
    'Dhaka University Volunteer Club',
    'Sylhet Disaster Relief Forum'
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D6E4F]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-[#0D6E4F] to-[#0A583F] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-white/10">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="bg-[#E6A119] text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {isBn ? 'স্বেচ্ছাসেবক নেটওয়ার্ক' : 'Join Our Network'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {isBn ? 'বাংলাদেশের ৬৪ জেলায় আমাদের স্বেচ্ছাসেবক দলে যোগ দিন' : 'Become a Humanitarian Relief Volunteer'}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {isBn ? 'আপনার মেধা, সময় ও মানবিক শক্তি দিয়ে বন্যা উদ্ধার, বিনামূল্যে চিকিৎসা ক্যাম্প ও বৃক্ষরোপণে অংশ নিন।' : 'Contribute your time, rescue skills, and energy during floods, medical camps, and community drives.'}
            </p>
          </div>

          <Link
            to="/volunteer"
            className="bg-[#E6A119] hover:bg-[#C98B12] text-slate-900 font-black px-8 py-4 rounded-2xl text-sm shadow-xl flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
          >
            <UserPlus className="w-5 h-5" />
            <span>{isBn ? 'আবেদন ফর্ম পূরণ করুন' : 'Apply as Volunteer'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* PARTNERS LOGO STRIP */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            {isBn ? 'আমাদের অংশীদার ও সহযোগী সংস্থাসমূহ' : 'Trusted Institutional & Strategic Partners'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
            {partners.map((p, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300 hover:opacity-100 transition-opacity"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
