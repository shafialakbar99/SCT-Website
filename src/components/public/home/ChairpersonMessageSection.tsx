import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { chairmanData } from '../../../data/leadership';
import { SafeImage } from '../../common/SafeImage';

export const ChairpersonMessageSection: React.FC = () => {
  const { isBn } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: PHOTO OF CHAIRPERSON */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 max-w-sm w-full">
              <SafeImage
                src={chairmanData.imageUrl}
                alt={chairmanData.name.en}
                className="w-full h-96 sm:h-[440px] object-cover object-top"
                fallbackCategory="emergency"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E17]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E6A119] text-slate-900 font-black text-[10px] uppercase tracking-wider mb-1">
                  {isBn ? 'চেয়ারপারসন' : 'Chairperson'}
                </span>
                <h4 className="text-xl font-black text-white tracking-tight">
                  {isBn ? chairmanData.name.bn : chairmanData.name.en}
                </h4>
                <p className="text-xs text-emerald-200 font-medium">
                  {isBn ? chairmanData.role.bn : chairmanData.role.en}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: MESSAGE & QUOTE */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 fill-[#0D6E4F]" />
                {isBn ? 'চেয়ারপারসনের বাণী' : 'Message from Chairperson'}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
                {isBn ? 'সহানুভূতি ও সুস্পষ্ট উদ্দেশ্যে একত্রিত হওয়া' : 'When Compassion and Purpose Come Together'}
              </h2>
            </div>

            {/* Blockquote */}
            <div className="relative bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-md">
              <Quote className="w-10 h-10 text-[#0D6E4F]/20 absolute top-4 right-4" />
              <p className="text-base sm:text-lg font-bold text-slate-800 italic leading-relaxed">
                "{isBn ? chairmanData.quote.bn : chairmanData.quote.en}"
              </p>
            </div>

            {/* Excerpt Body */}
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                {isBn
                  ? 'বহু বছর আগে ব্যক্তিগত সদয় মানবিক কাজ হিসেবে যা শুরু হয়েছিল, তা আজ মর্যাদা, সুযোগ ও শক্তিশালী সমাজ গঠনের একটি যৌথ প্রতিশ্রুতিতে পরিণত হয়েছে। আমরা বিশেষ চাহিদাসম্পন্ন শিশুদের শিক্ষার সুযোগ দিচ্ছি, তরুণদের স্বাবলম্বী করার পথ তৈরি করছি এবং প্রবীণদের মর্যাদাপূর্ণ পরিচর্যা নিশ্চিত করার দিকে এগিয়ে যাচ্ছি।'
                  : 'What began years ago as individual acts of kindness has grown into a shared commitment to build dignity, opportunity, and stronger communities. Our journey is about supporting children with special needs, empowering young people, caring for our elders, and standing beside members of the community.'}
              </p>
              <p>
                {isBn
                  ? 'আমরা প্রতিটি শুভানুধ্যায়ী ও শাহীন সদস্যকে এই অর্থবহ যাত্রায় সঙ্গী হওয়ার আমন্ত্রণ জানাচ্ছি — শুধুমাত্র সম্পদ নয়; মেধা, সময় এবং সহমর্মিতা দিয়েও।'
                  : 'As we begin this journey, we invite every Shaheen and friend of humanity to be part of something meaningful — contributing not only resources, but ideas, experience, time, and heart.'}
              </p>
            </div>

            {/* Sign-off & Button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <div>
                <span className="font-black text-slate-900 block text-base">
                  {isBn ? chairmanData.name.bn : chairmanData.name.en}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {isBn ? chairmanData.designation.bn : chairmanData.designation.en}
                </span>
              </div>

              <Link
                to="/chairman"
                className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#104E7A] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-colors"
              >
                <span>{isBn ? 'চেয়ারপারসনের সম্পূর্ণ বক্তব্য পড়ুন' : 'Read Full Message & Vision'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
