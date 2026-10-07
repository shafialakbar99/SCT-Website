import React, { useState } from 'react';
import { UserPlus, CheckCircle2, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { submitVolunteerApplication } from '../../api/public/volunteerApi';
import confetti from 'canvas-confetti';

export const VolunteerPage: React.FC = () => {
  const { isBn } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Sylhet');
  const [skill, setSkill] = useState('Medical & First Aid');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setLoading(true);
    await submitVolunteerApplication({
      fullName,
      email: `${fullName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      phone,
      district,
      skills: [skill],
      availability: 'weekends'
    });

    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            🤝 {isBn ? 'স্বেচ্ছাসেবক প্ল্যাটফর্ম' : 'Volunteer Registration'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'দেশের যেকোনো দুর্যোগে মানবিক কাজ করুন' : 'Join Our National Volunteer Force'}
          </h1>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 shadow-xl space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#0D6E4F] mx-auto" />
            <h2 className="text-2xl font-bold text-slate-900">
              {isBn ? 'আপনার আবেদন সফলভাবে জমা হয়েছে!' : 'Application Submitted Successfully!'}
            </h2>
            <p className="text-xs text-slate-600">
              {isBn ? 'আমাদের ডিস্ট্রিক্ট কো-অর্ডিনেটর শীঘ্রই আপনার সাথে ফোন নম্বরে যোগাযোগ করবেন।' : 'Our regional volunteer coordinator will contact you shortly.'}
            </p>
            <button onClick={() => setSubmitted(false)} className="bg-[#0D6E4F] text-white px-5 py-2.5 rounded-xl text-xs font-bold">
              {isBn ? 'আরেকটি ফর্ম পুরণ করুন' : 'Submit Another Form'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'আপনার পূর্ণ নাম' : 'Full Name'}</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'মোবাইল নম্বর' : 'Phone Number'}</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'জেলা' : 'District'}</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="Sylhet">Sylhet (সিলেট)</option>
                  <option value="Feni">Feni (ফেনী)</option>
                  <option value="Dhaka">Dhaka (ঢাকা)</option>
                  <option value="Chittagong">Chittagong (চট্টগ্রাম)</option>
                  <option value="Satkhira">Satkhira (সাতক্ষীরা)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{isBn ? 'দক্ষতা / এরিয়া' : 'Skillset'}</label>
                <select
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="Medical & First Aid">Medical & First Aid</option>
                  <option value="Flood Rescue & Boating">Flood Rescue & Boating</option>
                  <option value="Ration Distribution & Logistics">Ration Distribution</option>
                  <option value="Media & Photography">Media & Photography</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3.5 px-4 rounded-xl text-sm font-black shadow-lg mt-4 flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>{isBn ? 'আবেদন পাঠান' : 'Submit Application'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
