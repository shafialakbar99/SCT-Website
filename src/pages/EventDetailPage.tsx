import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EventItem } from '../types';
import { getEventBySlug, registerForEvent } from '../api/eventApi';
import { SafeImage } from '../components/common/SafeImage';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isBn } = useLanguage();
  const [event, setEvent] = useState<EventItem | null>(null);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (slug) getEventBySlug(slug).then((res) => setEvent(res || null));
  }, [slug]);

  if (!event) return <div className="py-20 text-center">Event not found</div>;

  const handleRegister = async () => {
    await registerForEvent(event.id, { name: 'Volunteer', phone: '01700000000' });
    setRegistered(true);
  };

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link to="/events" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0D6E4F]">
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? 'সকল ইভেন্টে ফিরে যান' : 'Back to Events'}</span>
        </Link>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {t(event.title)}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold border-y border-slate-200 py-3">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-[#0D6E4F]" /> {event.eventDate} ({event.time})</span>
          <span>•</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#E6A119]" /> {t(event.location)}</span>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg h-80">
          <SafeImage
            src={event.imageUrl}
            alt={t(event.title)}
            className="w-full h-full object-cover"
            fallbackCategory="healthcare"
          />
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 text-sm text-slate-700 space-y-4">
          <p>{t(event.description)}</p>
        </div>

        <div className="bg-[#0D6E4F] rounded-3xl p-8 text-white text-center space-y-4 shadow-xl">
          {registered ? (
            <div className="space-y-2">
              <CheckCircle2 className="w-12 h-12 text-[#E6A119] mx-auto" />
              <h3 className="text-xl font-bold">{isBn ? 'আপনার আসন নিবন্ধিত হয়েছে!' : 'Your Seat is Registered!'}</h3>
              <p className="text-xs text-emerald-100">{isBn ? 'আমরা এসএমএসের মাধ্যমে আপনাকে বিস্তারিত ভেন্যু টাইম পাঠিয়ে দিব।' : 'We will send you reminder alerts prior to the event.'}</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold">{isBn ? 'এই ইভেন্টে স্বেচ্ছাসেবী বা দর্শক হিসেবে অংশ নিন' : 'Join as a Volunteer or Attendee'}</h3>
              <button
                onClick={handleRegister}
                className="bg-[#E6A119] text-slate-900 px-8 py-3.5 rounded-xl font-black text-xs shadow-md"
              >
                {isBn ? 'ফ্রি রেজিস্ট্রেশন করুন' : 'Confirm Registration (Free)'}
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
