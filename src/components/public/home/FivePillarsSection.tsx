import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Milestone, 
  Sparkles, 
  Baby, 
  Briefcase, 
  Users2, 
  Building2, 
  HeartHandshake, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const FivePillarsSection: React.FC = () => {
  const { isBn } = useLanguage();

  const pillars = [
    {
      number: '1',
      titleEn: 'Children with Special Needs',
      titleBn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের সমন্বিত বিকাশ',
      periodEn: '2026–2029 (Active Flagship)',
      periodBn: '২০২৬–২০২৯ (সক্রিয় প্রধান প্রকল্প)',
      periodColor: 'bg-emerald-100 text-[#0D6E4F] border-emerald-300',
      descEn: 'Establishing inclusive classrooms, modern speech/occupational therapies, and adaptive learning for 75+ children at SPUS Satarkul.',
      descBn: 'সাঁতারকুল সেন্টারে ৭৫ জন বিশেষ শিশুর আধুনিক অন্তর্ভুক্তিমূলক শিক্ষা, নিয়মিত থেরাপি ও সহায়ক উপকরণ নিশ্চিতকরণ।',
      deliverablesEn: ['Inclusive Education Model', 'Specialized Therapy Center', 'Caregiver Training & Nutrition'],
      deliverablesBn: ['অন্তর্ভুক্তিমূলক শিক্ষা মডেল', 'বিশেষায়িত থেরাপি সেন্টার', 'অভিভাবক প্রশিক্ষণ ও পুষ্টি'],
      icon: <Baby className="w-5 h-5 text-[#0D6E4F]" />,
      accent: 'border-l-4 border-l-[#0D6E4F]'
    },
    {
      number: '2',
      titleEn: 'Youth Employability & Skills',
      titleBn: 'যুব দক্ষতা ও আধুনিক কর্মসংস্থান',
      periodEn: '2029–2030 (Phase 2)',
      periodBn: '২০২৯–২০৩০ (২য় পর্যায়)',
      periodColor: 'bg-teal-100 text-[#138086] border-teal-300',
      descEn: 'Vocational bootcamps, digital literacy, market-linked trade certifications, and career mentoring for underprivileged youth.',
      descBn: 'সুবিধাবঞ্চিত যুবকদের কারিগরি প্রশিক্ষণ, ডিজিটাল স্কিল ডেভেলপমেন্ট ও বাস্তব কর্মসংস্থানের স্থায়ী সংযোগ।',
      deliverablesEn: ['Technical Trade Skills', 'Digital Literacy Lab', 'Job Placement Mentorship'],
      deliverablesBn: ['কারিগরি প্রশিক্ষণ', 'ডিজিটাল লিটারেসি ল্যাব', 'কর্মসংস্থান মেন্টরশিপ'],
      icon: <Briefcase className="w-5 h-5 text-[#138086]" />,
      accent: 'border-l-4 border-l-[#138086]'
    },
    {
      number: '3',
      titleEn: 'Elderly Care & Support',
      titleBn: 'প্রবীণদের মর্যাদাপূর্ণ যত্ন ও সেবা',
      periodEn: '2030+ (Phase 3)',
      periodBn: '২০৩০+ (৩য় পর্যায়)',
      periodColor: 'bg-amber-100 text-amber-800 border-amber-300',
      descEn: 'Community centers for seniors, mobile geriatric health checkups, companionship programs, and dignity preservation.',
      descBn: 'প্রবীণদের স্বাস্থ্য পরীক্ষা, বিনোদন ও সামাজিক মেলামেশার কেন্দ্র এবং মর্যাদাপূর্ণ প্রবীণ কল্যাণ ব্যবস্থা।',
      deliverablesEn: ['Senior Community Daycare', 'Preventive Geriatric Care', 'Intergenerational Programs'],
      deliverablesBn: ['প্রবীণ ডে-কেয়ার কেন্দ্র', 'নিয়মিত স্বাস্থ্য পরীক্ষা', 'আন্তঃপ্রজন্ম যৌথ কার্যক্রম'],
      icon: <Users2 className="w-5 h-5 text-[#D4AF37]" />,
      accent: 'border-l-4 border-l-[#D4AF37]'
    },
    {
      number: '4',
      titleEn: 'Strengthening Grassroots NGOs',
      titleBn: 'তৃণমূল এনজিওদের প্রাতিষ্ঠানিক সক্ষমতা',
      periodEn: 'Ongoing Strategic Focus',
      periodBn: 'ধারাবাহিক প্রাতিষ্ঠানিক লক্ষ্য',
      periodColor: 'bg-blue-100 text-[#1B365D] border-blue-300',
      descEn: 'Transforming local grassroots initiatives through governance training, financial compliance, and monitoring frameworks.',
      descBn: 'তৃণমূল পর্যায়ের সেবামূলক সংস্থাসমূহকে সুশাসন, আর্থিক স্বচ্ছতা ও দীর্ঘমেয়াদী প্রাতিষ্ঠানিক টেকসই রূপদান।',
      deliverablesEn: ['Governance Best Practices', 'Financial Audit Support', 'Operational Resilience'],
      deliverablesBn: ['সুশাসন ও নীতিমালা প্রণয়ন', 'আর্থিক অডিট ও স্বচ্ছতা', 'সংস্থার সক্ষমতা বৃদ্ধি'],
      icon: <Building2 className="w-5 h-5 text-[#1B365D]" />,
      accent: 'border-l-4 border-l-[#1B365D]'
    },
    {
      number: '5',
      titleEn: 'Shaheen Community Care',
      titleBn: 'শাহীন কমিউনিটি পারস্পরিক সুরক্ষা',
      periodEn: 'Dedicated Welfare Reserve',
      periodBn: 'জরুরি কল্যাণ রিজার্ভ ফান্ড',
      periodColor: 'bg-rose-100 text-rose-800 border-rose-300',
      descEn: 'A safety net for members of the Shaheen family facing sudden medical catastrophes, loss of breadwinner, or critical hardship.',
      descBn: 'শাহীন পরিবারের সদস্য বা তাঁদের পরিবারের আকস্মিক স্বাস্থ্য সংকট ও জরুরি প্রয়োজনে নির্ভরযোগ্য মানবিক পাশে দাঁড়ানো।',
      deliverablesEn: ['Medical Crisis Relief', 'Hardship Grants', 'Family Welfare Support'],
      deliverablesBn: ['চিকিৎসা জরুরি সহায়তা', 'এককালীন অনুদান', 'পরিবার কল্যাণ সহায়তা'],
      icon: <HeartHandshake className="w-5 h-5 text-[#E06D53]" />,
      accent: 'border-l-4 border-l-[#E06D53]'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FBF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            {isBn ? 'কৌশলগত পঞ্চস্তম্ভ (২০২৬–২০৩১)' : 'Strategic Roadmap (2026–2031)'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
            {isBn ? 'শাহীন কেয়ার্স ট্রাস্টের ৫টি কৌশলগত মূল স্তম্ভ' : 'Five Pillars of Shaheen Cares Trust'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {isBn
              ? 'একটি সুশৃঙ্খল ৫ বছর মেয়াদী প্রাতিষ্ঠানিক রোডম্যাপ, যা পর্যায়ক্রমিক বাস্তবায়নের মাধ্যমে তৃণমূল পর্যায়ে গভীর ও স্থায়ী প্রভাব নিশ্চিত করে।'
              : 'A structured, phased multi-year framework directing our resources towards impactful, verifiable social transformation.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between ${item.accent} ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                        {isBn ? `স্তম্ভ ০${item.number}` : `Pillar 0${item.number}`}
                      </span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${item.periodColor}`}>
                    {isBn ? item.periodBn : item.periodEn}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="font-extrabold text-lg text-slate-900 mt-2">
                  {isBn ? item.titleBn : item.titleEn}
                </h3>

                {/* Pillar Desc */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  {isBn ? item.descBn : item.descEn}
                </p>

                {/* Key Deliverables */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    {isBn ? 'মূল লক্ষ্য ও ফলাফল:' : 'Key Deliverables:'}
                  </span>
                  {(isBn ? item.deliverablesBn : item.deliverablesEn).map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D6E4F] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0D6E4F]">
                <Link to="/pillars" className="hover:underline flex items-center gap-1">
                  <span>{isBn ? 'বিস্তারিত রূপরেখা দেখুন' : 'Explore Pillar Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Pillars Button */}
        <div className="mt-12 text-center">
          <Link
            to="/pillars"
            className="inline-flex items-center gap-2 bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <span>{isBn ? '৫টি স্তম্ভের সম্পূর্ণ কৌশলগত বিস্তারিত দেখুন' : 'View Full Strategic Pillar Framework'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
