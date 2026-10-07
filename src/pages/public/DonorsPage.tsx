import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Search, Filter, Heart, Building2, Star, CheckCircle2, ArrowRight, Sparkles, User, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getFeaturedDonors, getDonations } from '../../api/public/donationApi';
import { FeaturedDonor } from '../../data/donations';
import { Donation } from '../../types';
import { SafeImage } from '../../components/common/SafeImage';

export const DonorsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  
  const [featuredDonors, setFeaturedDonors] = useState<FeaturedDonor[]>([]);
  const [recentDonations, setRecentDonations] = useState<Donation[]>([]);
  const [activeTab, setActiveTab] = useState<'wall' | 'stream'>('wall');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    getFeaturedDonors().then(setFeaturedDonors);
    getDonations().then(setRecentDonations);
  }, []);

  const filteredFeatured = featuredDonors.filter(donor => {
    const matchesTier = selectedTier === 'all' || donor.tier === selectedTier;
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t(donor.campaignTitle).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          donor.trxId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTier && matchesSearch;
  });

  return (
    <div className="py-12 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* PAGE HERO HEADER */}
        <div className="bg-gradient-to-br from-[#0D6E4F] via-[#0A583F] to-[#073F2D] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#E6A119]/20 border border-[#E6A119]/30 text-[#E6A119] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{isBn ? 'স্বচ্ছতা ও সম্মানের প্রাচীর' : 'Wall of Honor & Gratitude'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {isBn ? 'সম্মানিত দাতা ও পৃষ্ঠপোষকবৃন্দ' : 'Our Honored Donors & Benefactors'}
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {isBn 
                ? 'বাংলাদেশের বিভিন্ন দুর্যোগপূর্ণ অঞ্চল ও সুবিধাবঞ্চিত মানুষের মুখে হাসি ফোটাতে যাদের অবদান অপরিসীম। হিউম্যানিটি ফাস্ট বিডি-এর পক্ষ থেকে তাদের সকলকে জানাই গভীর শ্রদ্ধাবোধ।'
                : 'Every act of kindness leaves a lasting imprint. We proudly honor the compassionate individuals, diaspora patrons, and corporate leaders empowering communities across Bangladesh.'
              }
            </p>

            {/* IMPACT MINI STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">
                  {isBn ? 'মোট নিবন্ধিত দাতা' : 'Donor Community'}
                </span>
                <span className="text-2xl font-black text-white font-mono mt-0.5 block">14,250+</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">
                  {isBn ? 'সংগৃহীত অনুদান' : 'Total Raised'}
                </span>
                <span className="text-2xl font-black text-[#E6A119] font-mono mt-0.5 block">৳3.85 Cr+</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">
                  {isBn ? 'কর অব্যাহতি সুবিধা' : 'Tax Exempt Status'}
                </span>
                <span className="text-xl font-black text-white mt-0.5 block">100% Eligible</span>
              </div>
            </div>
          </div>
        </div>

        {/* TABS & SEARCH CONTROLS */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            
            {/* View Switcher Tabs */}
            <div className="flex p-1.5 bg-slate-100 rounded-2xl text-xs font-bold gap-1">
              <button
                onClick={() => setActiveTab('wall')}
                className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                  activeTab === 'wall' ? 'bg-[#0D6E4F] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-4 h-4 text-[#E6A119]" />
                <span>{isBn ? 'ওয়াল অফ অনার (শীর্ষ দাতা)' : 'Wall of Honor (Top Donors)'}</span>
              </button>

              <button
                onClick={() => setActiveTab('stream')}
                className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                  activeTab === 'stream' ? 'bg-[#0D6E4F] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <RefreshCw className="w-4 h-4" />
                <span>{isBn ? 'সর্বশেষ অনুদান স্ট্রিম' : 'Recent Donations Stream'}</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={isBn ? 'দাতা বা প্রজেক্ট সার্চ করুন...' : 'Search donor or campaign...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

          </div>

          {/* TIER FILTER BUTTONS FOR WALL OF HONOR */}
          {activeTab === 'wall' && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>{isBn ? 'ক্যাটাগরি ফিল্টার:' : 'Filter Tier:'}</span>
              </span>

              {[
                { id: 'all', labelEn: 'All Patrons', labelBn: 'সকল দাতা' },
                { id: 'corporate', labelEn: 'Corporate CSR', labelBn: 'কর্পোরেট সিএসআর' },
                { id: 'platinum', labelEn: 'Platinum (৳5 Lakh+)', labelBn: 'প্লাটিনাম (৫ লাখ+)' },
                { id: 'gold', labelEn: 'Gold (৳1 Lakh+)', labelBn: 'গোল্ড (১ লাখ+)' },
                { id: 'silver', labelEn: 'Silver (৳25k+)', labelBn: 'সিলভার (২৫ হাজার+)' },
                { id: 'zakat', labelEn: 'Zakat Donors', labelBn: 'যাকাত দাতা' }
              ].map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`px-3.5 py-2 rounded-xl transition-all ${
                    selectedTier === tier.id 
                      ? 'bg-[#0D6E4F] text-white shadow-sm' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {isBn ? tier.labelBn : tier.labelEn}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TAB 1: WALL OF HONOR FEATURED CARDS */}
        {activeTab === 'wall' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatured.map((donor) => (
              <div
                key={donor.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0D6E4F]/30 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                {/* Top Colored Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0D6E4F]" />

                <div className="space-y-4">
                  {/* Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                      donor.tier === 'corporate' 
                        ? 'bg-blue-100 text-blue-800' 
                        : donor.tier === 'platinum'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-emerald-100 text-[#0D6E4F]'
                    }`}>
                      {donor.isCorporate ? <Building2 className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5 fill-current" />}
                      <span>{t(donor.badge)}</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">{donor.date}</span>
                  </div>

                  {/* Donor Avatar & Details */}
                  <div className="flex items-center gap-4">
                    <SafeImage
                      src={donor.avatarUrl}
                      alt={donor.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#0D6E4F]/20 shrink-0 shadow-sm"
                      fallbackCategory="avatar"
                    />
                    <div>
                      <h3 className="font-black text-slate-900 text-base leading-snug">
                        {donor.isAnonymous ? (isBn ? 'নাম প্রকাশে অনিচ্ছুক দাতা' : 'Anonymous Benefactor') : donor.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        📍 {t(donor.location)}
                      </p>
                    </div>
                  </div>

                  {/* Amount Block */}
                  <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {isBn ? 'অবদানকৃত অনুদান' : 'Contribution'}
                      </span>
                      <span className="text-xl font-black text-[#0D6E4F] font-mono">
                        ৳{donor.amountBDT.toLocaleString()} BDT
                      </span>
                    </div>

                    <span className="bg-emerald-50 text-[#0D6E4F] text-[10px] font-bold px-2.5 py-1 rounded-lg border border-emerald-100">
                      ✓ Verified
                    </span>
                  </div>

                  {/* Donor Quote */}
                  {donor.quote && (
                    <blockquote className="text-xs text-slate-600 italic bg-slate-50 p-3.5 rounded-2xl border border-slate-100 leading-relaxed">
                      "{t(donor.quote)}"
                    </blockquote>
                  )}
                </div>

                {/* Campaign Footer Tag */}
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold flex items-center justify-between">
                  <span className="line-clamp-1">🎯 {t(donor.campaignTitle)}</span>
                  <span className="font-mono text-[10px] text-slate-400 shrink-0 ml-2">{donor.trxId}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: RECENT AUDIT STREAM TABLE */}
        {activeTab === 'stream' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {isBn ? 'লাইভ অনুদান অডিট স্ট্রিম' : 'Live Verified Donation Audit Stream'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isBn ? 'অনলাইনে প্রাপ্ত প্রতিটি অনুদানের স্বচ্ছ বিবরণ' : 'Every single verified transaction received via bKash, Nagad, or Bank.'}
                </p>
              </div>

              <span className="bg-emerald-100 text-[#0D6E4F] text-xs font-bold px-3 py-1 rounded-full">
                {recentDonations.length} Transactions Logged
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">{isBn ? 'দাতা' : 'Donor Name'}</th>
                    <th className="p-3.5">{isBn ? 'ক্যাম্পেইন' : 'Campaign'}</th>
                    <th className="p-3.5">{isBn ? 'পরিমাণ' : 'Amount'}</th>
                    <th className="p-3.5">{isBn ? 'পেমেন্ট মেথড' : 'Method'}</th>
                    <th className="p-3.5">{isBn ? 'ট্রানজেকশন আইডি' : 'Trx ID'}</th>
                    <th className="p-3.5">{isBn ? 'তারিখ' : 'Date'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentDonations.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-extrabold text-slate-900">
                        {d.isAnonymous ? (isBn ? 'অজ্ঞাত দাতা' : 'Anonymous') : d.donorName}
                      </td>
                      <td className="p-3.5 font-medium text-slate-600 max-w-xs truncate">
                        {d.campaignTitle ? t(d.campaignTitle) : 'General Relief'}
                      </td>
                      <td className="p-3.5 font-mono text-[#0D6E4F] font-black text-sm">
                        {d.currency} {d.amount.toLocaleString()}
                      </td>
                      <td className="p-3.5 font-bold text-slate-700">
                        {d.paymentMethod}
                      </td>
                      <td className="p-3.5 font-mono text-slate-400">
                        {d.trxId}
                      </td>
                      <td className="p-3.5 text-slate-400 text-[11px]">
                        {d.createdAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA CARD */}
        <div className="bg-[#0D6E4F] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-black">
              {isBn ? 'আপনিও দান করে ওয়াল অফ অনারে যুক্ত হোন' : 'Empower Lives and Join Our Wall of Honor Today'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {isBn 
                ? 'আপনার অনুদান সরাসরি সুবিধাবঞ্চিত পরিবারগুলোর জীবনে আলো নিয়ে আসবে। প্রতিটি অনুদানের রসিদ ও আয়কর অব্যাহতির সনদ সরবরাহ করা হয়।'
                : 'Your donation directly changes lives in disaster-stricken and poverty-affected regions across Bangladesh. Receive instant tax exemption receipts.'
              }
            </p>
          </div>

          <Link
            to="/donate"
            className="bg-[#E6A119] hover:bg-[#d49417] text-slate-900 px-8 py-4 rounded-2xl font-black text-xs shadow-xl transition-all shrink-0 active:scale-95"
          >
            {isBn ? 'এখনই দান করুন' : 'Donate Now'}
          </Link>
        </div>

      </div>
    </div>
  );
};
