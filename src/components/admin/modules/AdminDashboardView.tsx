import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Megaphone, 
  Users, 
  HeartHandshake, 
  Plus, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { adminGetDashboardMetrics, AdminDashboardMetrics } from '../../../api/admin/adminDashboardApi';
import { AdminCard } from '../common/AdminCard';
import { Link } from 'react-router-dom';

export const AdminDashboardView: React.FC = () => {
  const { isBn } = useLanguage();
  const [metrics, setMetrics] = useState<AdminDashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetDashboardMetrics();
      setMetrics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !metrics) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0D6E4F] to-emerald-800 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {isBn ? 'অ্যাডমিন পোর্টাল' : 'Central Admin Hub'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-2 tracking-tight">
            {isBn ? 'স্বাগতম, অ্যাডমিনিস্ট্রেটর' : 'Welcome back, Administrator'}
          </h2>
          <p className="text-emerald-100 text-sm opacity-90 leading-relaxed">
            {isBn 
              ? 'হিউম্যানিটি ফার্স্ট বাংলাদেশ-এর সকল ক্যাম্পেইন, ফান্ডিং ও ডোনেশন, ভলান্টিয়ার আবেদন এবং সাইট সেটিংস রিয়েল-টাইমে নিয়ন্ত্রণ করুন।'
              : 'Monitor donations in real-time, approve volunteer applications, publish field stories, and configure live site parameters.'}
          </p>
        </div>

        {/* Quick actions row */}
        <div className="relative z-10 mt-6 flex flex-wrap gap-3">
          <Link
            to="/admin/campaigns"
            className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 hover:bg-emerald-50 font-bold text-xs rounded-xl shadow-xs transition-all"
          >
            <Plus className="w-4 h-4 text-emerald-700" />
            <span>{isBn ? 'নতুন ক্যাম্পেইন তৈরি' : 'Create Campaign'}</span>
          </Link>
          <Link
            to="/admin/volunteers"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl border border-emerald-500/40 transition-all"
          >
            <Users className="w-4 h-4" />
            <span>{isBn ? 'ভলান্টিয়ার রিকোয়েস্ট' : 'Review Volunteers'} ({metrics.pendingVolunteersCount})</span>
          </Link>
        </div>
      </div>

      {/* Primary KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Funds Raised */}
        <AdminCard className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? 'মোট সংগৃহীত ফান্ড' : 'Total Raised'}
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              ৳ {metrics.totalRaisedBDT.toLocaleString()}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>{metrics.totalDonationCount} {isBn ? 'টি সফল ডোনেশন' : 'verified transactions'}</span>
            </div>
          </div>
        </AdminCard>

        {/* Active Campaigns */}
        <AdminCard className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? 'সক্রিয় ক্যাম্পেইন' : 'Active Campaigns'}
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 flex items-center justify-center">
              <Megaphone className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {metrics.activeCampaignsCount} <span className="text-sm font-normal text-slate-500">/ {metrics.totalCampaignsCount}</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {isBn ? 'জরুরি ও জাকাত প্রজেক্ট চলমান' : 'Emergency & Zakat drives live'}
            </div>
          </div>
        </AdminCard>

        {/* Volunteer Applications */}
        <AdminCard className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? 'ভলান্টিয়ার আবেদন' : 'Pending Volunteers'}
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
              {metrics.pendingVolunteersCount}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {metrics.totalVolunteersCount} {isBn ? 'মোট আবেদনকারী' : 'total registered'}
            </div>
          </div>
        </AdminCard>

        {/* Sponsorships */}
        <AdminCard className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isBn ? 'স্পনসরশিপ প্রকল্প' : 'Sponsorships'}
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {metrics.sponsoredChildrenCount} <span className="text-sm font-normal text-slate-500">/ {metrics.totalSponsorshipsCount}</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {isBn ? 'শিক্ষার্থী স্পনসরপ্রাপ্ত' : 'Children sponsored'}
            </div>
          </div>
        </AdminCard>
      </div>

      {/* Dual Column: Recent Donations vs Recent Volunteer Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Donations Table */}
        <AdminCard
          title={isBn ? 'সাম্প্রতিক ডোনেশন সমূহ' : 'Recent Transactions'}
          subtitle={isBn ? 'সর্বশেষ প্রাপ্ত অনলাইন ও ব্যাংক অনুদান' : 'Latest verified donations'}
          action={
            <Link to="/admin/donations" className="text-xs font-bold text-emerald-600 hover:text-emerald-700">
              {isBn ? 'সব দেখুন →' : 'View All →'}
            </Link>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-2 font-semibold">{isBn ? 'দাতা' : 'Donor'}</th>
                  <th className="pb-2 font-semibold">{isBn ? 'ক্যাম্পেইন' : 'Campaign'}</th>
                  <th className="pb-2 font-semibold">{isBn ? 'মেথড' : 'Method'}</th>
                  <th className="pb-2 font-semibold text-right">{isBn ? 'পরিমাণ' : 'Amount'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {metrics.recentDonations.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="py-3 font-bold text-slate-900 dark:text-white">{d.donorName}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-300 max-w-[150px] truncate">{d.campaignTitle}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px]">
                        {d.paymentMethod}
                      </span>
                    </td>
                    <td className="py-3 font-bold text-emerald-600 text-right">
                      {d.currency} {d.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>

        {/* Recent Volunteers Applicants */}
        <AdminCard
          title={isBn ? 'ভলান্টিয়ার আবেদন' : 'Recent Volunteer Applicants'}
          subtitle={isBn ? 'অনুমোদনের অপেক্ষায় থাকা আবেদনসমূহ' : 'Awaiting review and approval'}
          action={
            <Link to="/admin/volunteers" className="text-xs font-bold text-emerald-600 hover:text-emerald-700">
              {isBn ? 'সব দেখুন →' : 'View All →'}
            </Link>
          }
        >
          <div className="space-y-3">
            {metrics.recentVolunteers.map((v) => (
              <div key={v.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">{v.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{v.district} • {v.phone}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                    v.status === 'approved' 
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400' 
                      : v.status === 'rejected'
                      ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400'
                  }`}>
                    {v.status}
                  </span>
                  <Link
                    to="/admin/volunteers"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>
    </div>
  );
};
