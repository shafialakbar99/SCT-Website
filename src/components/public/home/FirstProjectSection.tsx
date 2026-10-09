import React from 'react';
import { Link } from 'react-router-dom';
import { 
  School, 
  MapPin, 
  Users, 
  HeartPulse, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SafeImage } from '../../common/SafeImage';

export const FirstProjectSection: React.FC = () => {
  const { isBn } = useLanguage();

  const keyActivities = [
    {
      titleEn: 'Equipping 3 Modern Inclusive Classrooms',
      titleBn: '৩টি আধুনিক অন্তর্ভুক্তিমূলক শ্রেণিকক্ষ সজ্জিতকরণ'
    },
    {
      titleEn: 'Establishing Dedicated Multi-Modal Therapy Facility',
      titleBn: 'বহুমুখী থেরাপি ও পুনর্বাসন সেন্টার স্থাপন'
    },
    {
      titleEn: 'Speech, Occupational & Physiotherapy Services',
      titleBn: 'স্পিচ, অকুপেশনাল ও ফিজিওথেরাপি নিয়মিত সেবা'
    },
    {
      titleEn: 'Nutritious Daily Midday Meal Program',
      titleBn: 'শিশুদের জন্য পুষ্টিকর দুপুরের খাবার কর্মসূচি'
    },
    {
      titleEn: 'Teacher & Caregiver Specialized Guidance',
      titleBn: 'শিক্ষক ও অভিভাবকদের বিশেষায়িত পরিচর্যা প্রশিক্ষণ'
    },
    {
      titleEn: 'Community Anti-Stigma Awareness & Advocacy',
      titleBn: 'কুসংস্কার দূরীকরণ ও সামাজিক অন্তর্ভুক্তি সচেতনতা'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? 'প্রকল্প (অক্টোবর ২০২৬ – অক্টোবর ২০২৯)' : 'Project (October 2026 to October 2029)'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1B365D] tracking-tight">
              {isBn 
                ? 'বিশেষ চাহিদাসম্পন্ন শিশুদের অন্তর্ভুক্তিমূলক শিক্ষা, বিকাশ ও সামাজিক সহায়তা' 
                : 'SPUS Inclusive Education, Development, and Community Support for Children with Disabilities'}
            </h2>
            <div className="mt-2 text-xs font-bold text-[#0D6E4F] flex flex-wrap items-center gap-2">
              <span className="bg-[#0D6E4F]/10 px-2.5 py-0.5 rounded-md">
                {isBn ? 'বাস্তবায়ন সহযোগী: সাঁতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (SPUS)' : 'Implementing Partner: Satarkul Protibandhi Unnayan Sangstha (SPUS)'}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 font-normal">
                {isBn ? '(উল্লেখ্য: SPUS প্রকল্পটি নয়, এটি বাস্তবায়ন সহযোগী সংস্থা)' : '(Note: SPUS is the Implementing Partner, not the project itself)'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-2">
              <MapPin className="w-4 h-4 text-[#E06D53]" />
              <span>{isBn ? 'সাঁতারকুল, বাড্ডা, ঢাকা-১২১২, বাংলাদেশ' : 'Satarkul, Badda, Dhaka-1212, Bangladesh'}</span>
            </div>
          </div>

          <Link
            to="/spus"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D6E4F] hover:text-[#0A583F] hover:underline shrink-0"
          >
            <span>{isBn ? 'সম্পূর্ণ প্রকল্পের বিবরণ ও বাজেট দেখুন' : 'Explore Full Project'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Project Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {isBn
                ? 'বাংলাদেশে বিশেষ চাহিদাসম্পন্ন শিশুদের ৬০% এরও বেশি শিক্ষার অধিকার থেকে বঞ্চিত। কিন্তু সাঁতারকুলে SPUS তৃণমূল মানুষের গভীর আস্থা অর্জন করেছে। প্রতিবন্ধী ব্যক্তিদের নিজস্ব নেতৃত্বে গড়ে ওঠা এই সংস্থা স্থানীয় পরিবারের সাথে কাজ করছে। তাদের সাথে যৌথভাবে শাহীন কেয়ার্স ট্রাস্ট সেবার মান সম্প্রসারণ ও আধুনিকায়নে কাজ শুরু করেছে।'
                : 'More than 60% of children with disabilities in Bangladesh remain out of formal education. Led by persons with disabilities, SPUS has established deep grassroots trust with families in Satarkul. Shaheen Cares Trust serves as a long-term strategic partner to expand its services, stabilize its finances, and scale its model.'}
            </p>

            {/* 4 Stat Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FBF9] border border-emerald-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0D6E4F] block">
                  {isBn ? '৭৫+' : '75+'}
                </span>
                <span className="text-[11px] font-bold text-slate-700 mt-1 block">
                  {isBn ? 'অন্তর্ভুক্তিমূলক শিক্ষার্থী' : 'Inclusive Students'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#138086] block">
                  {isBn ? '১০০+' : '100+'}
                </span>
                <span className="text-[11px] font-bold text-slate-700 mt-1 block">
                  {isBn ? 'থেরাপি সুবিধাভোগী' : 'Therapy Patients'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-amber-700 block">
                  {isBn ? '৬টি' : '6'}
                </span>
                <span className="text-[11px] font-bold text-slate-700 mt-1 block">
                  {isBn ? 'প্রধান প্রকল্প এলাকা' : 'Core Project Areas'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#1B365D] block">
                  {isBn ? '৬০ লাখ' : '60 Lacs'}
                </span>
                <span className="text-[11px] font-bold text-slate-700 mt-1 block">
                  {isBn ? '৩ বছর মেয়াদী বাজেট (BDT)' : '3-Year BDT Budget'}
                </span>
              </div>
            </div>

            {/* Activities Checkmarks */}
            <div className="pt-2">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                {isBn ? 'চলমান ও পরিকল্পিত প্রধান পদক্ষেপসমূহ:' : 'Key Planned Interventions:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {keyActivities.map((act, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0D6E4F] shrink-0" />
                    <span>{isBn ? act.titleBn : act.titleEn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/spus"
                className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-colors"
              >
                <span>{isBn ? 'SPUS প্রজেক্টের সম্পূর্ণ বিশদ ও বাজেট দেখুন' : 'Explore Full SPUS Project Details'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* RIGHT: Visual Card & Photo */}
          <div className="lg:col-span-5">
            <div className="bg-[#FDFBF7] p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-lg space-y-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <SafeImage
                  src="/Images/hero_slider/2.png?w=800&auto=format&fit=crop"
                  alt="SPUS Children Inclusive Classroom"
                  className="w-full h-56 sm:h-64 object-cover"
                  fallbackCategory="education"
                />
                <div className="absolute top-3 left-3 bg-[#1B365D] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {isBn ? 'তৃণমূল বাস্তবায়ন' : 'Grassroots Execution'}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-800 border-b border-slate-200 pb-2">
                  <span>{isBn ? 'প্রকল্পের সময়কাল:' : 'Project Duration:'}</span>
                  <span className="text-[#0D6E4F]">{isBn ? 'অক্টোবর ২০২৬ – অক্টোবর ২০২৯ (৩ বছর)' : 'October 2026 to October 2029 (3 Years)'}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-800 border-b border-slate-200 pb-2">
                  <span>{isBn ? 'মূল লক্ষ্যভুক্ত স্তম্ভ:' : 'Primary Pillar:'}</span>
                  <span className="text-[#138086]">{isBn ? 'স্তম্ভ ১ (বিশেষ চাহিদা)' : 'Pillar 1 (Special Needs)'}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-800">
                  <span>{isBn ? 'জবাবদিহিতা ও অডিট:' : 'Accountability:'}</span>
                  <span className="text-emerald-700 font-bold">{isBn ? '১০০% স্বচ্ছ ব্যাংকিং ও ট্রাস্ট রিপোর্ট' : '100% Audited Trust Reports'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
