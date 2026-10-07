import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Search, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getStaffMembers } from '../api/leadershipApi';
import { LeaderProfile } from '../types';
import { SafeImage } from '../components/common/SafeImage';

export const StaffPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [staffMembers, setStaffMembers] = useState<LeaderProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      try {
        const staffRes = await getStaffMembers();
        setStaffMembers(staffRes);
      } catch (err) {
        console.error('Failed to load staff members from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredStaff = staffMembers.filter(staff => {
    const matchesDept = selectedDept === 'all' || staff.department === selectedDept;
    const matchesSearch = t(staff.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t(staff.role).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  if (loading) {
    return (
      <div className="py-24 bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#0D6E4F] animate-spin" />
        <p className="text-xs font-bold text-slate-600">{isBn ? 'কর্মকর্তাদের তথ্য লোড হচ্ছে...' : 'Loading Staff & Team members...'}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            👥 {isBn ? 'কর্মকর্তা ও ফিল্ড টিম' : 'Our Dedicated Field & Executive Team'}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {isBn ? (
              <>আমাদের <span className="text-[#0D6E4F]">কর্মকর্তা ও কর্মচারীবৃন্দ</span></>
            ) : (
              <>Our <span className="text-[#0D6E4F]">Staff & Field Personnel</span></>
            )}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            {isBn
              ? 'বাংলাদেশের ৬৪ জেলায় দিনরাত আত্মনিবেদিতভাবে দায়িত্ব পালন করে চলা আমাদের সাহসী রেসকিউ কমান্ডার, ডাক্তার, ফাইন্যান্স অফিসার এবং ওয়াশ ইঞ্জিনিয়ারবৃন্দ।'
              : 'The driving force behind our field operations—resilient officers, disaster response commanders, and financial auditors working tirelessly across Bangladesh.'
            }
          </p>
        </div>

        {/* SEARCH & DEPT FILTER CONTROLS */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={isBn ? 'কর্মকর্তা বা পদবী খুঁজুন...' : 'Search staff or role...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            {/* Department Filter Buttons */}
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: 'all', labelEn: 'All Staff', labelBn: 'সকল কর্মকর্তা' },
                { id: 'Operations', labelEn: 'Operations & Rescue', labelBn: 'অপারেশন্স ও রেসকিউ' },
                { id: 'Finance', labelEn: 'Finance & Audit', labelBn: 'ফাইন্যান্স ও অডিট' },
                { id: 'Healthcare', labelEn: 'Healthcare & WASH', labelBn: 'স্বাস্থ্য ও সুপেয় পানি' },
                { id: 'Volunteers', labelEn: 'Volunteer Network', labelBn: 'ভলান্টিয়ার নেটওয়ার্ক' },
                { id: 'IT & Data', labelEn: 'IT & Transparency', labelBn: 'আইটি ও সিস্টেম' }
              ].map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-3.5 py-2 rounded-xl transition-all ${
                    selectedDept === dept.id 
                      ? 'bg-[#0D6E4F] text-white shadow-sm' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {isBn ? dept.labelBn : dept.labelEn}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* STAFF GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0D6E4F]/30 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="relative">
                  <SafeImage
                    src={staff.imageUrl}
                    alt={t(staff.name)}
                    className="w-full h-48 rounded-2xl object-cover ring-2 ring-[#0D6E4F]/10 group-hover:scale-[1.02] transition-transform duration-300"
                    fallbackCategory="leadership"
                  />
                  {staff.department && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#0D6E4F] font-bold text-[10px] px-2.5 py-1 rounded-full border border-slate-200">
                      {staff.department}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                    {t(staff.name)}
                  </h3>
                  <p className="text-xs font-bold text-[#0D6E4F] mt-0.5">
                    {t(staff.role)}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {t(staff.designation)}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  {t(staff.bio)}
                </p>
              </div>

              {/* Contact Info */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500 font-medium">
                {staff.email && (
                  <div className="flex items-center gap-2 text-slate-600 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#0D6E4F] shrink-0" />
                    <span className="truncate">{staff.email}</span>
                  </div>
                )}
                {staff.phone && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-3.5 h-3.5 text-[#0D6E4F] shrink-0" />
                    <span>{staff.phone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* JOIN VOLUNTEERS CALLOUT */}
        <div className="bg-[#0D6E4F] text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-black">
              {isBn ? 'আপনিও আমাদের মাঠপর্যায়ের ভলান্টিয়ার টিমে যোগ দিন' : 'Become a Field Response Volunteer in Your District'}
            </h3>
            <p className="text-xs text-emerald-100">
              {isBn ? 'বাংলাদেশের ৬৪ জেলায় যেকোনো সময় ট্রেইনিং ও ফার্স্ট রেসপন্ডার কার্যক্রমের অংশ হোন।' : 'Join over 12,000 active youth volunteers across Bangladesh in emergency relief drives.'}
            </p>
          </div>

          <Link
            to="/volunteer"
            className="bg-[#E6A119] text-slate-900 px-6 py-3 rounded-xl text-xs font-black shadow-lg hover:bg-[#d49417] transition-all shrink-0"
          >
            {isBn ? 'স্বেচ্ছাসেবক আবেদন করুন' : 'Apply as Volunteer'}
          </Link>
        </div>

      </div>
    </div>
  );
};
