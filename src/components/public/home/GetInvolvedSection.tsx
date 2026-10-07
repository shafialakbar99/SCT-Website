import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HandHeart, 
  GraduationCap, 
  Building, 
  Heart, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const GetInvolvedSection: React.FC = () => {
  const { isBn } = useLanguage();

  const engagementModes = [
    {
      icon: <HandHeart className="w-6 h-6 text-[#0D6E4F]" />,
      roleEn: 'As a Volunteer',
      roleBn: 'স্বেচ্ছাসেবী হিসেবে',
      descEn: 'Offer your time at our SPUS center, assist in inclusive weekend classrooms, organize recreational activities, or mentor youth.',
      descBn: 'সাঁতারকুল সেন্টারে সময় দিন, বিশেষ শিশুদের ক্লাসরুমে সহায়তা করুন, ইভেন্ট পরিচালনা বা যুব মেন্টরিংয়ে অংশ নিন।',
      actionLabelEn: 'Register as Volunteer',
      actionLabelBn: 'স্বেচ্ছাসেবী নিবন্ধন',
      url: '/volunteer',
      btnBg: 'bg-[#0D6E4F] hover:bg-[#0A583F] text-white'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#138086]" />,
      roleEn: 'As an Advisor / Sector Expert',
      roleBn: 'উপদেষ্টা বা বিশেষজ্ঞ হিসেবে',
      descEn: 'Doctors, pediatric therapists, legal advisors, IT architects, and educators sharing professional knowledge to empower our team.',
      descBn: 'চিকিৎসক, স্পিচ/ফিজিওথেরাপিস্ট, আইনজীবী, আইটি বিশেষজ্ঞ বা শিক্ষাবিদ হিসেবে সুপরামর্শ দিয়ে সহায়তা করুন।',
      actionLabelEn: 'Join Expert Pool',
      actionLabelBn: 'বিশেষজ্ঞ পুলে যোগ দিন',
      url: '/volunteer',
      btnBg: 'bg-[#138086] hover:bg-[#0F656A] text-white'
    },
    {
      icon: <Building className="w-6 h-6 text-[#1B365D]" />,
      roleEn: 'As a Strategic Partner',
      roleBn: 'কৌশলগত অংশীদার হিসেবে',
      descEn: 'Corporates, philanthropic foundations, NGOs, and universities co-creating high-impact CSR and research programs.',
      descBn: 'কর্পোরেট প্রতিষ্ঠান, সিএসআর অনুদান, গবেষণা ও সমাজকল্যাণমূলক প্রকল্পে আমাদের সাথে অংশীদারিত্ব স্থাপন করুন।',
      actionLabelEn: 'Partner with SCT',
      actionLabelBn: 'অংশীদারিত্ব প্রস্তাব দিন',
      url: '/contact',
      btnBg: 'bg-[#1B365D] hover:bg-[#104E7A] text-white'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#E06D53]" />,
      roleEn: 'As a Well-Wisher / Supporter',
      roleBn: 'শুভানুধ্যায়ী বা সহযোগী হিসেবে',
      descEn: 'Direct support towards child inclusive education funds, wheelchair distribution, nutrition meals, and assistive equipment.',
      descBn: 'বিশেষ শিশুদের থেরাপি, শিক্ষা সামগ্রী, পুষ্টিকর খাবার বা হুইলচেয়ার তহবিলে সরাসরি সহযোগিতার হাত বাড়িয়ে দিন।',
      actionLabelEn: 'Support the Cause',
      actionLabelBn: 'সহযোগিতার হাত বাড়ান',
      url: '/spus',
      btnBg: 'bg-[#E06D53] hover:bg-[#C9533B] text-white'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FBF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {isBn ? 'অংশগ্রহণ ও সহযোগিতা' : 'Get Involved'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
            {isBn ? 'যুক্ত হওয়ার চারটি প্রধান ক্ষেত্র' : 'Four Ways You Can Support the Cause'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {isBn
              ? 'আপনার সময়, মেধা, সহমর্মিতা বা সহযোগিতা — যেকোনো ভূমিকায় আপনি সমাজের পিছিয়ে পড়া মানুষের জীবনে স্থায়ী পরিবর্তন আনতে পারেন।'
              : 'Your time, your professional skills, your compassion, or your support. No pressure, just a shared dedication to building dignified futures.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModes.map((mode, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {mode.icon}
                </div>

                <h3 className="font-extrabold text-lg text-slate-900">
                  {isBn ? mode.roleBn : mode.roleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">
                  {isBn ? mode.descBn : mode.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to={mode.url}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors ${mode.btnBg}`}
                >
                  <span>{isBn ? mode.actionLabelBn : mode.actionLabelEn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
