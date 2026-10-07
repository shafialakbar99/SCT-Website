import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, GraduationCap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { initialSponsorships } from '../../data/sponsorships';
import { SafeImage } from '../common/SafeImage';

export const SponsorshipCarousel: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-[#E6A119]/20 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            👶 {isBn ? 'একটি শিশুর দায়িত্ব নিন' : 'Sponsor a Life'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            {isBn ? 'এতিম ও মেধাবী শিশুদের প্রতিমাসের শিক্ষা ও খাদ্য স্পন্সর' : 'Orphan & Child Education Monthly Sponsorship'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {isBn ? 'প্রতিমাসে মাত্র ২০০০ টাকায় একটি এতিম শিশুর ৩ বেলা পুষ্টিকর খাবার, বই-খাতা ও চিকিৎসা নিশ্চিত হয়।' : 'Just BDT 2,000/month guarantees a child nutrition, school supplies, clothing, and healthcare.'}
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialSponsorships.map((spon) => (
            <div
              key={spon.id}
              className="bg-[#FDFBF7] rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <SafeImage
                    src={spon.imageUrl}
                    alt={spon.childName}
                    className="w-full h-full object-cover"
                    fallbackCategory="orphan"
                  />
                  <span className="absolute top-3 left-3 bg-[#0D6E4F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    {spon.academicGrade}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {spon.childName} ({spon.age} {isBn ? 'বছর' : 'yrs'})
                  </h3>
                  <span className="text-xs font-bold text-[#0D6E4F] bg-emerald-100 px-2.5 py-1 rounded-full">
                    ৳{spon.monthlyAmountBDT.toLocaleString()}/{isBn ? 'মাস' : 'mo'}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#E6A119]" />
                  <span>{t(spon.location)}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {t(spon.story)}
                </p>
              </div>

              <Link
                to={`/donate?type=sponsorship&id=${spon.id}`}
                className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-2.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all"
              >
                <Heart className="w-3.5 h-3.5 text-[#E6A119] fill-[#E6A119]" />
                <span>{isBn ? 'এই শিশুটিকে স্পন্সর করুন' : 'Sponsor This Child'}</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
