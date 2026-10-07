import React from 'react';
import { Utensils, Droplets, GraduationCap, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { siteContent } from '../../../data/siteContent';

export const ImpactCounters: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Utensils className="w-7 h-7 text-[#0D6E4F]" />,
      number: t(siteContent.counters.meals),
      label: t(siteContent.counters.mealsLabel),
      bg: 'bg-emerald-50 border-emerald-100'
    },
    {
      icon: <Droplets className="w-7 h-7 text-blue-600" />,
      number: t(siteContent.counters.wells),
      label: t(siteContent.counters.wellsLabel),
      bg: 'bg-blue-50 border-blue-100'
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-amber-600" />,
      number: t(siteContent.counters.students),
      label: t(siteContent.counters.studentsLabel),
      bg: 'bg-amber-50 border-amber-100'
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#E06D53]" />,
      number: t(siteContent.counters.lives),
      label: t(siteContent.counters.livesLabel),
      bg: 'bg-rose-50 border-rose-100'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-white border ${stat.bg} shadow-lg hover:shadow-xl transition-all flex items-center gap-4`}
          >
            <div className="p-3.5 rounded-xl bg-white shadow-xs shrink-0">
              {stat.icon}
            </div>
            <div>
              <span className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight block">
                {stat.number}
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
