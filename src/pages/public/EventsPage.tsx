import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { EventItem } from '../../types';
import { getEvents } from '../../api/public/eventApi';
import { SafeImage } from '../../components/common/SafeImage';

export const EventsPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            📅 {isBn ? 'ফিল্ড ইভেন্ট ও ক্যাম্প' : 'Field Events & Medical Drives'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'আসন্ন ত্রাণ বিতরণ ও ফ্রি মেডিকেল ক্যাম্প' : 'Upcoming Relief Drives & Volunteer Meets'}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((ev) => (
            <div key={ev.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row group">
              <SafeImage
                src={ev.imageUrl}
                alt={t(ev.title)}
                className="w-full sm:w-48 h-48 object-cover shrink-0"
                fallbackCategory="healthcare"
              />
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#0D6E4F] bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                      {ev.eventDate}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">{ev.time}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base hover:text-[#0D6E4F] transition-colors line-clamp-2 mt-2">
                    <Link to={`/events/${ev.slug}`}>{t(ev.title)}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E6A119]" />
                    <span>{t(ev.location)}</span>
                  </p>
                </div>

                <Link to={`/events/${ev.slug}`} className="bg-[#0D6E4F] text-white py-2 px-3 rounded-xl text-xs font-bold text-center">
                  {isBn ? 'অংশগ্রহণ রেজিস্ট্রেশন' : 'Register to Join'}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
