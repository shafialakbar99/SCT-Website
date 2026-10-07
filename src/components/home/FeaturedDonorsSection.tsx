import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Award, ArrowRight, Building2, User, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getFeaturedDonors } from '../../api/donationApi';
import { FeaturedDonor } from '../../data/donations';
import { SafeImage } from '../common/SafeImage';

export const FeaturedDonorsSection: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [donors, setDonors] = useState<FeaturedDonor[]>([]);

  useEffect(() => {
    getFeaturedDonors().then(setDonors);
  }, []);

  return (
    <section className="py-16 bg-[#FDFBF7] border-t border-emerald-950/5 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D6E4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E6A119]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#0D6E4F] font-bold tracking-widest text-xs uppercase bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/50">
              <Sparkles className="w-3.5 h-3.5 text-[#E6A119]" />
              <span>{isBn ? 'সম্মানিত দাতা ও শুভানুধ্যায়ী' : 'Honored Patrons & Donors'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {isBn ? (
                <>আমাদের <span className="text-[#0D6E4F]">শীর্ষ দাতা</span> ও কর্পোরেট সিএসআর পার্টনারগণ</>
              ) : (
                <>Our <span className="text-[#0D6E4F]">Featured Donors</span> & Wall of Honor</>
              )}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isBn 
                ? 'যাদের ভালোবাসাময় অনুদানে বাংলাদেশের দূরবর্তী চরাঞ্চল, বন্যা উপদ্রুত এলাকা এবং পথশিশুদের জীবনে স্থায়ী পরিবর্তন এসেছে।'
                : 'Recognizing the extraordinary generosity of individuals, expat patrons, and corporate CSR partners transforming lives across Bangladesh.'
              }
            </p>
          </div>

          <Link
            to="/donors"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#0D6E4F] text-[#0D6E4F] hover:text-white px-6 py-3.5 rounded-2xl text-xs font-bold border border-[#0D6E4F]/20 shadow-sm hover:shadow-lg transition-all shrink-0 group"
          >
            <Award className="w-4 h-4 text-[#E6A119]" />
            <span>{isBn ? 'সকল দাতা তালিকা ও ওয়াল অফ অনার' : 'View Full Wall of Honor'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* DONOR CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donors.slice(0, 4).map((donor) => (
            <div
              key={donor.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0D6E4F]/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D6E4F] via-[#E6A119] to-[#0D6E4F]" />

              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex justify-between items-start gap-2">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                    donor.tier === 'corporate' 
                      ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                      : donor.tier === 'platinum'
                      ? 'bg-amber-100 text-amber-900 border border-amber-200'
                      : 'bg-emerald-100 text-[#0D6E4F] border border-emerald-200'
                  }`}>
                    {donor.tier === 'corporate' ? <Building2 className="w-3 h-3" /> : <Star className="w-3 h-3 fill-current" />}
                    <span>{t(donor.badge)}</span>
                  </span>

                  <span className="text-[10px] text-slate-400 font-semibold">{donor.date}</span>
                </div>

                {/* Donor Info */}
                <div className="flex items-center gap-3 pt-1">
                  <SafeImage
                    src={donor.avatarUrl}
                    alt={donor.name}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-[#0D6E4F]/10 shrink-0"
                    fallbackCategory="avatar"
                  />
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm line-clamp-1 group-hover:text-[#0D6E4F] transition-colors">
                      {donor.isAnonymous ? (isBn ? 'নাম প্রকাশে অনিচ্ছুক দাতা' : 'Anonymous Benefactor') : donor.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t(donor.location)}
                    </p>
                  </div>
                </div>

                {/* Amount Box */}
                <div className="bg-[#FDFBF7] p-3 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    {isBn ? 'মোট অনুদান অবদান' : 'Total Contributed'}
                  </span>
                  <div className="text-lg font-black text-[#0D6E4F] font-mono mt-0.5">
                    ৳{donor.amountBDT.toLocaleString()} <span className="text-xs font-sans text-slate-500 font-bold">BDT</span>
                  </div>
                </div>

                {/* Quote / Impact note */}
                {donor.quote && (
                  <p className="text-xs text-slate-600 italic line-clamp-3 bg-slate-50 p-3 rounded-2xl border border-slate-100/80 leading-relaxed">
                    "{t(donor.quote)}"
                  </p>
                )}
              </div>

              {/* Campaign Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium line-clamp-1">
                  🎯 {t(donor.campaignTitle)}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#0D6E4F] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* STATS BANNER BELOW */}
        <div className="mt-12 bg-[#0D6E4F] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 bg-[#E6A119] text-slate-900 rounded-2xl flex items-center justify-center shrink-0 font-bold shadow-md">
              <ShieldCheck className="w-8 h-8 text-slate-900" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold">
                {isBn ? 'আপনিও হতে পারেন আমাদের অনার অফ ওয়াল সদস্য' : 'Become a Featured Donor on Our Wall of Honor'}
              </h4>
              <p className="text-xs text-emerald-100 mt-1 max-w-xl">
                {isBn 
                  ? 'যেকোনো ক্যাম্পেইনে ২৫,০০০ টাকা বা তার বেশি অনুদান দিলে আপনার নাম বা আপনার প্রিয়জনের স্মৃতিতে সম্মানের স্থান রাখা হয়।'
                  : 'Contributions of ৳25,000 or above receive a dedicated permanent listing on our Wall of Honor with verified tax receipts.'
                }
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/donate"
              className="bg-[#E6A119] hover:bg-[#d49417] text-slate-900 px-6 py-3 rounded-xl text-xs font-black shadow-lg transition-transform active:scale-95 whitespace-nowrap"
            >
              {isBn ? 'এখনই দান করুন' : 'Donate Now'}
            </Link>
            <Link
              to="/transparency"
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap"
            >
              {isBn ? 'ট্যাক্স রেয়াত প্রক্রিয়া' : 'Tax Exemption Info'}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
