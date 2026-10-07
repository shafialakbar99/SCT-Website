import React from 'react';
import { School, HeartPulse, Compass, CircleDollarSign } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const ImpactCounters: React.FC = () => {
  const { isBn } = useLanguage();

  const metrics = [
    {
      icon: <School className="w-7 h-7 text-[#0D6E4F]" />,
      number: isBn ? '৭৫' : '75',
      label: isBn ? 'সাঁতারকুলে বিশেষ চাহিদাসম্পন্ন শিশু শিক্ষা (SPUS)' : 'Children in Inclusive Education (SPUS)',
      sub: isBn ? 'নিয়মিত শ্রেণিকক্ষ ও শিক্ষা সহায়তা' : 'Formal inclusive classrooms & supplies',
      borderColor: 'border-emerald-100 hover:border-emerald-300',
      iconBg: 'bg-emerald-50'
    },
    {
      icon: <HeartPulse className="w-7 h-7 text-[#138086]" />,
      number: isBn ? '১০০' : '100',
      label: isBn ? 'থেরাপি ও পুনর্বাসন সেবা সুবিধাভোগী' : 'Therapy & Rehabilitation Beneficiaries',
      sub: isBn ? 'স্পিচ, অকুপেশনাল ও ফিজিওথেরাপি' : 'Speech, occupational & physical therapy',
      borderColor: 'border-teal-100 hover:border-teal-300',
      iconBg: 'bg-teal-50'
    },
    {
      icon: <Compass className="w-7 h-7 text-[#D4AF37]" />,
      number: isBn ? '৫' : '5',
      label: isBn ? 'কৌশলগত মূল স্তম্ভ (২০২৬–২০৩১)' : 'Core Strategic Pillars (2026–2031)',
      sub: isBn ? '৫ বছরের দীর্ঘমেয়াদী রূপরেখা' : 'Multi-year progressive roadmap',
      borderColor: 'border-amber-100 hover:border-amber-300',
      iconBg: 'bg-amber-50'
    },
    {
      icon: <CircleDollarSign className="w-7 h-7 text-[#1B365D]" />,
      number: isBn ? '১১.০M টাকা' : 'BDT 11.0M',
      label: isBn ? '৩ বছর মেয়াদী SPUS প্রকল্প বাজেট (~$৮৮হাজার)' : '3-Year SPUS Project Budget (~$88K)',
      sub: isBn ? 'শতভাগ নিরীক্ষিত ও স্বচ্ছ বরাদ্দ' : '100% audited transparent allocation',
      borderColor: 'border-blue-100 hover:border-blue-300',
      iconBg: 'bg-blue-50'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-white border ${item.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 flex items-start gap-4 group`}
          >
            <div className={`p-3.5 rounded-xl ${item.iconBg} shadow-xs shrink-0 group-hover:scale-105 transition-transform`}>
              {item.icon}
            </div>
            <div>
              <span className="font-black text-2xl sm:text-3xl text-slate-900 tracking-tight block">
                {item.number}
              </span>
              <span className="text-xs font-bold text-slate-800 mt-1 block leading-snug">
                {item.label}
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block font-medium">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
