import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Heart, Clock, Users, ShieldCheck, Filter, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Campaign } from '../types';
import { getCampaigns } from '../api/campaignApi';
import { SafeImage } from '../components/common/SafeImage';

export const CampaignsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [searchParams] = useSearchParams();
  const catFilter = searchParams.get('cat');

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>(catFilter || 'all');

  useEffect(() => {
    getCampaigns().then((data) => {
      setCampaigns(data);
      setLoading(false);
    });
  }, []);

  const filtered = activeCategory === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.category === activeCategory);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            {isBn ? 'জীবন বাঁচানোর উদ্যোগ' : 'Active Relief Causes'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'সকল মানবিক ক্যাম্পেইন ও প্রজেক্ট' : 'Humanitarian Campaigns & Drives'}
          </h1>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', labelEn: 'All Causes', labelBn: 'সকল ক্যাটাগরি' },
            { id: 'emergency', labelEn: 'Emergency Relief', labelBn: 'জরুরি ত্রাণ' },
            { id: 'zakat', labelEn: 'Zakat Fund', labelBn: 'যাকাত ফান্ড' },
            { id: 'water', labelEn: 'Clean Water', labelBn: 'সুপেয় পানি' },
            { id: 'education', labelEn: 'Education', labelBn: 'শিক্ষা' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0D6E4F] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isBn ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* CAMPAIGN GRID */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-3xl h-96 animate-pulse border border-slate-200" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((camp) => {
              const pct = Math.min(100, Math.round((camp.raisedAmount / camp.goalAmount) * 100));

              return (
                <div key={camp.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col group">
                  <div className="relative h-52 overflow-hidden">
                    <SafeImage
                      src={camp.imageUrl}
                      alt={typeof camp.title === 'object' ? camp.title.en : ''}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackCategory={camp.category as any}
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {camp.isEmergency && <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Emergency</span>}
                      {camp.isZakatEligible && <span className="bg-[#E6A119] text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Zakat</span>}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base hover:text-[#0D6E4F] transition-colors line-clamp-2">
                        <Link to={`/campaigns/${camp.slug}`}>{t(camp.title)}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">{t(camp.summary)}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-[#0D6E4F]">৳{camp.raisedAmount.toLocaleString()} raised</span>
                        <span className="text-slate-700">৳{camp.goalAmount.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                        <div className="h-full bg-gradient-to-r from-[#0D6E4F] to-[#E6A119] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>

                    <Link
                      to={`/donate?campaign=${camp.id}`}
                      className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#E6A119] fill-[#E6A119]" />
                      <span>{isBn ? 'এখনই দান করুন' : 'Donate Now'}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
