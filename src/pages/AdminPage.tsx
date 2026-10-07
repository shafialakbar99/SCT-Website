import React, { useState, useEffect } from 'react';
import { Lock, Unlock, ShieldCheck, Plus, Trash2, Edit3, Heart, Users, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Campaign, Donation } from '../types';
import { getCampaigns, createCampaign } from '../api/campaignApi';
import { getDonations } from '../api/donationApi';

export const AdminPage: React.FC = () => {
  const { isBn } = useLanguage();

  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'campaigns' | 'donations' | 'volunteers'>('campaigns');

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);

  // New campaign modal state
  const [showNewModal, setShowNewModal] = useState(false);
  const [newTitleEn, setNewTitleEn] = useState('');
  const [newTitleBn, setNewTitleBn] = useState('');
  const [newGoal, setNewGoal] = useState('500000');
  const [newCategory, setNewCategory] = useState('emergency');

  useEffect(() => {
    if (isAuthenticated) {
      loadAdminData();
    }
  }, [isAuthenticated]);

  const loadAdminData = async () => {
    const cData = await getCampaigns();
    const dData = await getDonations();
    setCampaigns(cData);
    setDonations(dData);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert(isBn ? 'ভুল পিন কোড! সঠিক পিন: 1234' : 'Invalid PIN Code! Try default: 1234');
    }
  };

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleEn) return;

    await createCampaign({
      title: { en: newTitleEn, bn: newTitleBn || newTitleEn },
      slug: newTitleEn.toLowerCase().replace(/\s+/g, '-'),
      category: newCategory as any,
      summary: { en: 'New campaign created via admin panel', bn: 'নতুন ক্যাম্পেইন' },
      description: { en: 'Detailed campaign description', bn: 'ক্যাম্পেইন বিবরণ' },
      goalAmount: Number(newGoal) || 500000,
      raisedAmount: 0,
      donorCount: 0,
      daysLeft: 30,
      imageUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop',
      isEmergency: newCategory === 'emergency',
      isZakatEligible: true,
      location: { en: 'Sylhet, Bangladesh', bn: 'সিলেট, বাংলাদেশ' }
    });

    setShowNewModal(false);
    setNewTitleEn('');
    setNewTitleBn('');
    loadAdminData();
  };

  if (!isAuthenticated) {
    return (
      <div className="py-20 bg-[#FDFBF7] min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full border border-slate-200 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-[#0D6E4F]/10 text-[#0D6E4F] rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8 text-[#0D6E4F]" />
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Admin Management Portal</h2>
            <p className="text-xs text-slate-500 mt-1">Default Demo PIN: <code className="bg-slate-100 font-bold px-1.5 py-0.5 rounded text-slate-800">1234</code></p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              placeholder="Enter PIN..."
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full text-center tracking-widest text-lg font-mono py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
            />
            <button
              type="submit"
              className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3 rounded-xl text-xs font-bold shadow-md"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-[#F8F9FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* ADMIN HEADER */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#E6A119]" />
            <div>
              <h1 className="text-xl font-black">NGO Admin Control Dashboard</h1>
              <p className="text-xs text-slate-400">Single Table Storage Engine Active</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNewModal(true)}
              className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>New Campaign</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600/20 text-red-300 hover:bg-red-600 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all"
            >
              Lock Session
            </button>
          </div>
        </div>

        {/* ADMIN NAV TABS */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 flex gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-4 py-2.5 rounded-xl transition-all ${activeTab === 'campaigns' ? 'bg-[#0D6E4F] text-white' : 'text-slate-600'}`}
          >
            Campaigns ({campaigns.length})
          </button>
          <button
            onClick={() => setActiveTab('donations')}
            className={`px-4 py-2.5 rounded-xl transition-all ${activeTab === 'donations' ? 'bg-[#0D6E4F] text-white' : 'text-slate-600'}`}
          >
            Donations Received ({donations.length})
          </button>
        </div>

        {/* TAB 1: CAMPAIGNS MANAGER */}
        {activeTab === 'campaigns' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base">Active Campaigns Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Title</th>
                    <th className="p-3">Goal (BDT)</th>
                    <th className="p-3">Raised (BDT)</th>
                    <th className="p-3">Donors</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {campaigns.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50/80">
                      <td className="p-3 font-bold text-slate-900">{c.title.en}</td>
                      <td className="p-3 font-mono">৳{c.goalAmount.toLocaleString()}</td>
                      <td className="p-3 font-mono text-[#0D6E4F] font-bold">৳{c.raisedAmount.toLocaleString()}</td>
                      <td className="p-3 font-bold">{c.donorCount}</td>
                      <td className="p-3">
                        <span className="bg-emerald-100 text-[#0D6E4F] px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: DONATIONS LOG */}
        {activeTab === 'donations' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base">Donations Audit Stream</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Donor Name</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Gateway</th>
                    <th className="p-3">Trx ID</th>
                    <th className="p-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {donations.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50/80">
                      <td className="p-3 font-bold text-slate-900">{d.isAnonymous ? 'Anonymous' : d.donorName}</td>
                      <td className="p-3 font-mono text-[#0D6E4F] font-bold">{d.currency} {d.amount.toLocaleString()}</td>
                      <td className="p-3 font-bold">{d.paymentMethod}</td>
                      <td className="p-3 font-mono text-slate-500">{d.trxId}</td>
                      <td className="p-3 text-slate-400">{d.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* CREATE NEW CAMPAIGN MODAL */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleCreateCampaign} className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">Create New Campaign</h3>
            <input
              type="text"
              required
              placeholder="Campaign Title (English)"
              value={newTitleEn}
              onChange={(e) => setNewTitleEn(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs font-bold"
            />
            <input
              type="text"
              placeholder="Campaign Title (Bengali)"
              value={newTitleBn}
              onChange={(e) => setNewTitleBn(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs font-bold"
            />
            <input
              type="number"
              required
              placeholder="Goal Amount BDT"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs font-bold"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full bg-[#0D6E4F] text-white py-2.5 rounded-xl text-xs font-bold"
              >
                Create Campaign
              </button>
              <button
                type="button"
                onClick={() => setShowNewModal(false)}
                className="w-full bg-slate-200 text-slate-700 py-2.5 rounded-xl text-xs font-bold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
