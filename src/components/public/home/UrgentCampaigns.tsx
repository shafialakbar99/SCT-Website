import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Users, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Campaign } from '../../../types';
import { getCampaigns } from '../../../api/public/campaignApi';
import { SafeImage } from '../../common/SafeImage';

export const UrgentCampaigns: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCampaigns().then((data) => {
      setCampaigns(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              🚨 {isBn ? 'জরুরি ত্রাণ ও সহায়তামূলক প্রজেক্ট' : 'Urgent Active Relief Causes'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isBn ? 'জীবন বাঁচানোর জরুরি আহ্বান' : 'Featured Urgent Humanitarian Causes'}
            </h2>
          </div>
          <Link
            to="/campaigns"
            className="mt-4 md:mt-0 text-xs font-bold text-[#0D6E4F] hover:text-[#0A583F] flex items-center gap-1 group shrink-0"
          >
            <span>{isBn ? 'সবগুলো ক্যাম্পেইন দেখুন' : 'View All Campaigns'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* CAMPAIGN CARDS GRID */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-3xl h-96 animate-pulse border border-slate-200 p-4" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.slice(0, 3).map((camp) => {
              const pct = Math.min(100, Math.round((camp.raisedAmount / camp.goalAmount) * 100));

              return (
                <div
                  key={camp.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden">
                    <SafeImage
                      src={camp.imageUrl}
                      alt={t(camp.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackCategory={camp.category as any}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {camp.isEmergency && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                          {isBn ? 'জরুরি' : 'Emergency'}
                        </span>
                      )}
                      {camp.isZakatEligible && (
                        <span className="bg-[#E6A119] text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          {isBn ? 'যাকাতযোগ্য' : 'Zakat Eligible'}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E6A119]" />
                      <span>{t(camp.location)}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg hover:text-[#0D6E4F] transition-colors line-clamp-2">
                        <Link to={`/campaigns/${camp.slug}`}>{t(camp.title)}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {t(camp.summary)}
                      </p>
                    </div>

                    {/* Progress Bar & Financial Metrics */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-[#0D6E4F]">
                          ৳{camp.raisedAmount.toLocaleString()} <span className="text-slate-400 font-normal">{isBn ? 'সংগৃহীত' : 'raised'}</span>
                        </span>
                        <span className="text-slate-700">
                          ৳{camp.goalAmount.toLocaleString()} <span className="text-slate-400 font-normal">{isBn ? 'লক্ষ্য' : 'goal'}</span>
                        </span>
                      </div>

                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                        <div
                          className="h-full bg-gradient-to-r from-[#0D6E4F] to-[#E6A119] rounded-full transition-all duration-1000"
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-1">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          {camp.donorCount.toLocaleString()} {isBn ? 'জন দাতা' : 'donors'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#E6A119]" />
                          {camp.daysLeft} {isBn ? 'দিন বাকি' : 'days left'}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/donate?campaign=${camp.id}`}
                      className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-md shadow-[#0D6E4F]/20 flex items-center justify-center gap-2 transition-all"
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
    </section>
  );
};
