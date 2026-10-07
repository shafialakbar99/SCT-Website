import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { EventItem } from '../../../types';
import { getEvents } from '../../../api/public/eventApi';
import { SafeImage } from '../../common/SafeImage';

export const UpcomingEventsSection: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    getEvents().then((items) => setEvents(items.slice(0, 3)));
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#F8FBF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? 'আসন্ন অনুষ্ঠান ও উদ্যোগসমূহ' : 'Upcoming Gatherings & Events'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B365D] tracking-tight">
              {isBn ? 'শাহীন কেয়ার্স ট্রাস্টের অনুষ্ঠানমালা' : 'Events & Community Initiatives'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              {isBn 
                ? 'ট্রাস্টের আনুষ্ঠানিক উদ্বোধন, তৃণমূল কর্মশালা ও বিশেষজ্ঞ ফোরামে অংশ নিন।' 
                : 'Join our official inauguration, inclusive education workshops, and strategic community forums.'}
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D6E4F] hover:underline shrink-0"
          >
            <span>{isBn ? 'সকল ইভেন্ট দেখুন' : 'View All Events'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((evt, idx) => {
            const dateObj = new Date(evt.eventDate);
            const monthStr = dateObj.toLocaleString(isBn ? 'bn-BD' : 'en-US', { month: 'short' });
            const dayStr = dateObj.toLocaleString(isBn ? 'bn-BD' : 'en-US', { day: '2-digit' });
            const isFeatured = idx === 0;

            return (
              <div
                key={evt.id}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? 'border-emerald-300 shadow-lg hover:shadow-xl ring-2 ring-emerald-500/10'
                    : 'border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Image with date badge */}
                  <div className="relative rounded-2xl overflow-hidden mb-5 h-48 bg-slate-100">
                    <SafeImage
                      src={evt.imageUrl}
                      alt={typeof evt.title === 'object' ? evt.title.en : ''}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackCategory="general"
                    />
                    
                    {/* Date Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-2 text-center shadow-md min-w-[52px]">
                      <span className="block text-[11px] font-black uppercase text-[#0D6E4F] leading-tight">
                        {monthStr}
                      </span>
                      <span className="block text-lg font-black text-slate-900 leading-tight">
                        {dayStr}
                      </span>
                    </div>

                    {isFeatured && (
                      <div className="absolute top-3 right-3 bg-[#E6A119] text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {isBn ? 'প্রধান অনুষ্ঠান' : 'Key Milestone'}
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <div className="inline-block text-[11px] font-bold text-[#138086] bg-teal-50 px-2.5 py-0.5 rounded-md mb-2">
                    {t(evt.category)}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#0D6E4F] transition-colors line-clamp-2 leading-snug">
                    <Link to={`/events/${evt.slug}`}>{t(evt.title)}</Link>
                  </h3>

                  {/* Meta details */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E06D53] shrink-0" />
                      <span className="line-clamp-1">{t(evt.location)}</span>
                    </div>
                    {evt.registeredCount ? (
                      <div className="flex items-center gap-2 text-slate-500">
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>
                          {isBn ? `${evt.registeredCount} জন নিবন্ধিত` : `${evt.registeredCount} Registered`}
                        </span>
                      </div>
                    ) : null}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {t(evt.description)}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/events/${evt.slug}`}
                    className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1"
                  >
                    <span>{isBn ? 'বিস্তারিত ও নিবন্ধন' : 'Event Details'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    to={`/events/${evt.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0D6E4F] hover:text-white text-[11px] font-bold text-slate-700 transition-colors"
                  >
                    {isBn ? 'অংশ নিন' : 'Join'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
