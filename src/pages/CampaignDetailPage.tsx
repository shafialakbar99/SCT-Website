import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Clock, Users, ShieldCheck, MapPin, CheckCircle2, Share2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Campaign } from '../types';
import { getCampaignBySlug } from '../api/campaignApi';
import { initialDonations } from '../data/donations';
import { SafeImage } from '../components/common/SafeImage';

export const CampaignDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isBn } = useLanguage();

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'expense' | 'updates' | 'donors'>('overview');

  useEffect(() => {
    if (slug) {
      getCampaignBySlug(slug).then((res) => {
        setCampaign(res || null);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-500 animate-pulse">
        {isBn ? 'ক্যাম্পেইন লোড হচ্ছে...' : 'Loading campaign details...'}
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold text-slate-800">{isBn ? 'ক্যাম্পেইনটি পাওয়া যায়নি' : 'Campaign Not Found'}</h2>
        <Link to="/campaigns" className="text-xs text-[#0D6E4F] underline mt-2 inline-block">Back to Campaigns</Link>
      </div>
    );
  }

  const pct = Math.min(100, Math.round((campaign.raisedAmount / campaign.goalAmount) * 100));

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* BREADCRUMB */}
        <Link to="/campaigns" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0D6E4F]">
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? 'সকল ক্যাম্পেইনে ফিরে যান' : 'Back to All Campaigns'}</span>
        </Link>

        {/* HERO TITLE & MEDIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {campaign.isEmergency && <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Emergency Relief</span>}
                {campaign.isZakatEligible && <span className="bg-[#E6A119] text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Zakat Eligible</span>}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                {t(campaign.title)}
              </h1>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <MapPin className="w-4 h-4 text-[#E6A119]" />
                <span>{t(campaign.location)}</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80 sm:h-96">
              <SafeImage
                src={campaign.imageUrl}
                alt={t(campaign.title)}
                className="w-full h-full object-cover"
                fallbackCategory={campaign.category as any}
              />
            </div>

            {/* TAB CONTENT NAVIGATION */}
            <div className="bg-white rounded-2xl p-2 border border-slate-200 flex items-center gap-2 text-xs font-bold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-[#0D6E4F] text-white' : 'text-slate-600'}`}
              >
                {isBn ? 'বিবরণ' : 'Overview'}
              </button>
              <button
                onClick={() => setActiveTab('expense')}
                className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'expense' ? 'bg-[#0D6E4F] text-white' : 'text-slate-600'}`}
              >
                {isBn ? 'খরচের হিসাব' : 'Expense Allocation'}
              </button>
              <button
                onClick={() => setActiveTab('updates')}
                className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'updates' ? 'bg-[#0D6E4F] text-white' : 'text-slate-600'}`}
              >
                {isBn ? 'ফিল্ড আপডেট' : 'Updates'} ({campaign.updates?.length || 0})
              </button>
              <button
                onClick={() => setActiveTab('donors')}
                className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'donors' ? 'bg-[#0D6E4F] text-white' : 'text-slate-600'}`}
              >
                {isBn ? 'দাতাদের তালিকা' : 'Donors List'}
              </button>
            </div>

            {/* TAB DETAILS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm leading-relaxed text-xs sm:text-sm text-slate-700 space-y-4">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p>{t(campaign.description)}</p>
                </div>
              )}

              {activeTab === 'expense' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900">{isBn ? 'বাজেট বণ্টন চিত্র' : 'Budget Allocation Breakdown'}</h4>
                  {campaign.expenseBreakdown ? (
                    <div className="space-y-3">
                      {campaign.expenseBreakdown.map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs font-bold mb-1">
                            <span>{t(item.category)}</span>
                            <span>{item.percentage}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0D6E4F]" style={{ width: `${item.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400">100% Direct Field Distribution</p>
                  )}
                </div>
              )}

              {activeTab === 'updates' && (
                <div className="space-y-6">
                  {campaign.updates?.map((u, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-[10px] font-bold text-slate-400">{u.date}</span>
                      <h5 className="font-bold text-slate-900 text-sm">{t(u.title)}</h5>
                      <p className="text-xs text-slate-600">{t(u.text)}</p>
                    </div>
                  )) || <p className="text-slate-400">No field updates published yet.</p>}
                </div>
              )}

              {activeTab === 'donors' && (
                <div className="space-y-3">
                  {initialDonations.map((d) => (
                    <div key={d.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs">
                      <span className="font-bold text-slate-800">{d.isAnonymous ? 'Anonymous Donor' : d.donorName}</span>
                      <span className="font-extrabold text-[#0D6E4F]">৳{d.amount.toLocaleString()} ({d.paymentMethod})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* RIGHT SIDEBAR DONATION WIDGET */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-6 sticky top-24">
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#0D6E4F] text-base font-black">৳{campaign.raisedAmount.toLocaleString()}</span>
                  <span className="text-slate-500">Goal: ৳{campaign.goalAmount.toLocaleString()}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div className="h-full bg-gradient-to-r from-[#0D6E4F] to-[#E6A119] rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold pt-1">
                  <span>{campaign.donorCount} Donors</span>
                  <span>{campaign.daysLeft} Days Remaining</span>
                </div>
              </div>

              <Link
                to={`/donate?campaign=${campaign.id}`}
                className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3.5 px-4 rounded-xl font-black text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#E6A119] fill-[#E6A119]" />
                <span>{isBn ? 'এই প্রজেক্টে দান করুন' : 'Donate to This Cause'}</span>
              </Link>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert(isBn ? 'ক্যাম্পেইন লিঙ্ক কপি হয়েছে!' : 'Campaign link copied!');
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>{isBn ? 'বন্ধুদের সাথে শেয়ার করুন' : 'Share Campaign'}</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
