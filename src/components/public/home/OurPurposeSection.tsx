import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Baby, 
  Briefcase, 
  Users2, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const OurPurposeSection: React.FC = () => {
  const { isBn } = useLanguage();

  const purposeAreas = [
    {
      num: '01',
      titleEn: 'Children with Special Needs',
      titleBn: 'বিশেষ চাহিদাসম্পন্ন শিশুদের সুরক্ষা ও শিক্ষা',
      descEn: 'Equitable inclusive schooling, specialized multi-modal therapies (speech, physio, sensory), and accessible learning environments.',
      descBn: 'অন্তর্ভুক্তিমূলক বিশেষ শিক্ষা, নিয়মিত বহুমুখী থেরাপি সেবা ও শিশুদের সহায়ক উপকরণ নিশ্চিতকরণ।',
      icon: <Baby className="w-6 h-6 text-[#0D6E4F]" />,
      tag: 'Pillar 1 Focus (2026–2029)',
      tagBn: '১ম স্তম্ভের মূল লক্ষ্য'
    },
    {
      num: '02',
      titleEn: 'Youth Employability & Skills',
      titleBn: 'যুব দক্ষতা ও আধুনিক কর্মসংস্থান',
      descEn: 'Vocational trades, market-aligned digital competencies, mentorship, and economic pathways for disadvantaged adolescents.',
      descBn: 'প্রযুক্তিগত ও কারিগরি দক্ষতা প্রশিক্ষণ, মেন্টরশিপ এবং স্বাবলম্বী আয়ের সুনির্দিষ্ট পথ তৈরি।',
      icon: <Briefcase className="w-6 h-6 text-[#138086]" />,
      tag: 'Pillar 2 Focus (2029–2030)',
      tagBn: '২য় স্তম্ভের লক্ষ্য'
    },
    {
      num: '03',
      titleEn: 'Elderly Care & Dignified Living',
      titleBn: 'প্রবীণদের যত্ন, স্বাস্থ্যসেবা ও মর্যাদা',
      descEn: 'Geriatric health support, community wellness spaces, companionship initiatives, and safeguarding dignity in older age.',
      descBn: 'বয়োজ্যেষ্ঠদের স্বাস্থ্যসেবা সহায়তা, একাকীত্ব দূরীকরণে কমিউনিটি কেন্দ্র ও মর্যাদাপূর্ণ জীবনযাপন।',
      icon: <Users2 className="w-6 h-6 text-[#D4AF37]" />,
      tag: 'Pillar 3 Focus (2030+)',
      tagBn: '৩য় স্তম্ভের লক্ষ্য'
    },
    {
      num: '04',
      titleEn: 'Strengthening Grassroots NGOs',
      titleBn: 'তৃণমূল এনজিওর সক্ষমতা ও স্থায়িত্ব',
      descEn: 'Governance mentoring, accounting rigor, staff capacity building, and long-term organizational sustainability.',
      descBn: 'তৃণমূল পর্যায়ের সেবামূলক প্রতিষ্ঠানগুলোর সুশাসন, হিসাব নিরীক্ষা ও প্রাতিষ্ঠানিক সক্ষমতা জোরদার।',
      icon: <Building2 className="w-6 h-6 text-[#1B365D]" />,
      tag: 'Core Institutional Goal',
      tagBn: 'প্রাতিষ্ঠানিক সক্ষমতা'
    },
    {
      num: '05',
      titleEn: 'Shaheen Community Safety Net',
      titleBn: 'শাহীন কমিউনিটির সুরক্ষা ও কল্যাণ ফান্ড',
      descEn: 'Mutual support, healthcare relief for alumni in distress, bereavement aid, and family welfare emergencies.',
      descBn: 'শাহীন পরিবারের সদস্যদের অসুস্থতা, আকস্মিক সংকট বা জরুরী প্রয়োজনে নির্ভরযোগ্য মানবিক পাশে দাঁড়ানো।',
      icon: <ShieldCheck className="w-6 h-6 text-[#E06D53]" />,
      tag: 'Dedicated Alumni Reserve',
      tagBn: 'কমিউনিটি ওয়েলফেয়ার'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-[#138086] text-xs font-black uppercase tracking-wider border border-teal-100">
            <Heart className="w-3.5 h-3.5" />
            {isBn ? 'আমাদের মূল উদ্দেশ্য' : 'Our Purpose'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
            {isBn ? 'মর্যাদাপূর্ণ মানবিক সহায়তা ও টেকসই উন্নয়ন' : 'Dignified Support Across Generations & Vulnerabilities'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {isBn
              ? 'আমাদের প্রতিটি লক্ষ্য দীর্ঘমেয়াদী পরিকল্পনা এবং বাস্তবভিত্তিক পদক্ষেপের সমন্বয়ে গঠিত, যাতে প্রতিটি সুবিধাভোগী আত্মমর্যাদার সাথে বাঁচতে পারে।'
              : 'Shaheen Cares Trust focuses on structured interventions that uphold human dignity, establish equal opportunity, and build resilient community support structures.'}
          </p>
        </div>

        {/* 5 Purpose Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {purposeAreas.map((area, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl bg-[#FDFBF7] border border-slate-200/90 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <span className="text-xs font-black text-slate-400 font-mono">
                    {area.num}
                  </span>
                </div>

                <span className="inline-block text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 mb-2">
                  {isBn ? area.tagBn : area.tag}
                </span>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0D6E4F] transition-colors">
                  {isBn ? area.titleBn : area.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  {isBn ? area.descBn : area.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0D6E4F]">
                <span>{isBn ? 'পরিকল্পনা দেখুন' : 'Explore focus'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/purpose"
            className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#104E7A] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <span>{isBn ? 'আমাদের সম্পূর্ণ উদ্দেশ্য ও কর্মপরিকল্পনা দেখুন' : 'View Full Purpose & Methodology'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
