import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Target, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SafeImage } from '../../common/SafeImage';

export const WhoWeAreSection: React.FC = () => {
  const { isBn } = useLanguage();

  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-[#0D6E4F]" />,
      titleEn: 'Alumni Bond Transformed to Service',
      titleBn: 'বন্ধুত্ব থেকে জনসেবায় রূপান্তর',
      descEn: "Rooted in the lifelong fellowship of Shaheens (Class of 1989 and beyond), transforming personal bonds into an enduring force for societal good.",
      descBn: "শাহীন সদস্যদের (১৯৮৯ ব্যাচসহ সকল ব্যাচের) আজীবন সৌহার্দ্যকে সমাজের পিছিয়ে পড়া মানুষের কল্যাণে স্থায়ী শক্তিতে রূপান্তর।"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#138086]" />,
      titleEn: 'Structured & Governed by Law',
      titleBn: 'আইনগত কাঠামোর সুশাসন',
      descEn: 'Legally registered under the Bangladesh Trust Act of 1882, ensuring fiduciary discipline, board accountability, and audited transparency.',
      descBn: 'বাংলাদেশের ট্রাস্ট আইন ১৮৮২-এর অধীনে সুসংগঠিত, যার মাধ্যমে আর্থিক শৃঙ্খলা, ট্রাস্টি বোর্ডের জবাবদিহিতা ও শতভাগ অডিট নিশ্চিত।'
    },
    {
      icon: <Target className="w-5 h-5 text-[#D4AF37]" />,
      titleEn: 'Dignity Over Dependence',
      titleBn: 'পরনির্ভরশীলতা নয়, আত্মমর্যাদা',
      descEn: 'Moving beyond temporary hand-outs to build grassroots capacities, inclusive schooling, and sustainable vocational futures.',
      descBn: 'সাময়িক সাহায্যের পরিবর্তে স্থায়ী সক্ষমতা, বিশেষ শিশুদের অন্তর্ভুক্তিমূলক শিক্ষা এবং যুবকদের স্বাবলম্বী কর্মসংস্থান সৃষ্টি।'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: IMAGE & BADGE COMPOSITION */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <SafeImage
                src="/Images/who-we-are.png?w=800&auto=format&fit=crop"
                alt="Shaheen Cares Trust Community Service"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                fallbackCategory="education"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071712]/90 via-[#071712]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="inline-block px-3 py-1 bg-[#D4AF37] text-slate-900 font-black text-[10px] rounded-full uppercase tracking-wider">
                  {isBn ? 'শাহীন ঐতিহ্যের অঙ্গীকার' : 'Shaheen Legacy of Care'}
                </span>
                <p className="font-extrabold text-base sm:text-lg leading-snug drop-shadow-md">
                  {isBn ? '“ওয়ান্স আ শাহীন, অলওয়েজ আ শাহীন — মানবতার কল্যাণে নিবেদিত।”' : '"Once a Shaheen, Always a Shaheen — In Devoted Service to Humanity."'}
                </p>
              </div>
            </div>

            {/* Overlapping Floating Metric Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3.5 z-10 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0D6E4F] flex items-center justify-center shrink-0 font-black text-xl">
                ✓
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-slate-900 block">Trust Act 1882</span>
                <span className="text-slate-500 font-medium">
                  {isBn ? 'নিবন্ধিত স্থায়ী দাতব্য ট্রাস্ট' : 'Registered Perpetual Trust'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT & PILLARS */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5" />
                {isBn ? 'আমাদের পরিচয়' : 'Who We Are'}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
                {isBn 
                  ? 'বন্ধুত্ব থেকে সেবা — শাহীন সমাজের সম্মিলিত শক্তিতে গঠিত ট্রাস্ট' 
                  : 'From Friendship to Service — Rooted in the Spirit of BAF Shaheen'}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {isBn
                  ? 'শাহীন কেয়ার্স ট্রাস্ট (SCT) হলো শাহীন পরিবারের সদস্যগণের একটি যৌথ মানবিক প্রচেষ্টা। ব্যক্তিগত পর্যায়ের সদয় সহায়তার অভিজ্ঞতাকে সুসংগঠিত, দীর্ঘমেয়াদী এবং টেকসই প্রাতিষ্ঠানিক রূপ দিতে এই ট্রাস্ট প্রতিষ্ঠিত হয়েছে।'
                  : 'Shaheen Cares Trust (SCT) is an institutional philanthropy initiative formed by members of the Shaheen community. It transforms voluntary goodwill into structured, auditable, and long-term societal progress.'}
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-200 transition-colors flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#F8FBF9] shrink-0 mt-0.5 border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {isBn ? item.titleBn : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-medium">
                      {isBn ? item.descBn : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors"
              >
                <span>{isBn ? 'আমাদের পূর্ণাঙ্গ ইতিহাস ও লক্ষ্য জানুন' : 'Read Our Full Story & Governance'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
