import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  Heart,
  Calendar,
  Layers
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { CampaignTableRow } from '../../../types';
import { 
  adminGetCampaigns, 
  adminCreateCampaign, 
  adminUpdateCampaign, 
  adminDeleteCampaign,
  adminToggleCampaignStatus
} from '../../../api/admin/adminCampaignApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminCampaignsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [campaigns, setCampaigns] = useState<CampaignTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CampaignTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<CampaignTableRow | null>(null);

  // Form States
  const [formData, setFormData] = useState<{
    title_en: string;
    title_bn: string;
    slug: string;
    category: string;
    goal_amount: number;
    raised_amount: number;
    donor_count: number;
    days_left: number;
    image_url: string;
    summary_en: string;
    summary_bn: string;
    description_en: string;
    description_bn: string;
    location_en: string;
    location_bn: string;
    is_urgent: boolean;
    is_emergency: boolean;
    is_zakat_eligible: boolean;
    is_featured: boolean;
  }>({
    title_en: '',
    title_bn: '',
    slug: '',
    category: 'emergency',
    goal_amount: 500000,
    raised_amount: 0,
    donor_count: 0,
    days_left: 30,
    image_url: '',
    summary_en: '',
    summary_bn: '',
    description_en: '',
    description_bn: '',
    location_en: 'Dhaka, Bangladesh',
    location_bn: 'ঢাকা, বাংলাদেশ',
    is_urgent: false,
    is_emergency: false,
    is_zakat_eligible: true,
    is_featured: false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetCampaigns();
      setCampaigns(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      title_en: '',
      title_bn: '',
      slug: '',
      category: 'emergency',
      goal_amount: 500000,
      raised_amount: 0,
      donor_count: 0,
      days_left: 30,
      image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop',
      summary_en: '',
      summary_bn: '',
      description_en: '',
      description_bn: '',
      location_en: 'Sylhet, Bangladesh',
      location_bn: 'সিলেট, বাংলাদেশ',
      is_urgent: false,
      is_emergency: false,
      is_zakat_eligible: true,
      is_featured: false
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: CampaignTableRow) => {
    setEditingItem(item);
    setFormData({
      title_en: item.title_en,
      title_bn: item.title_bn,
      slug: item.slug,
      category: item.category,
      goal_amount: item.goal_amount,
      raised_amount: item.raised_amount,
      donor_count: item.donor_count,
      days_left: item.days_left,
      image_url: item.image_url,
      summary_en: item.summary_en,
      summary_bn: item.summary_bn,
      description_en: item.description_en,
      description_bn: item.description_bn,
      location_en: item.location_en,
      location_bn: item.location_bn,
      is_urgent: Boolean(item.is_urgent),
      is_emergency: Boolean(item.is_emergency),
      is_zakat_eligible: Boolean(item.is_zakat_eligible),
      is_featured: Boolean(item.is_featured)
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en) return;

    try {
      if (editingItem) {
        await adminUpdateCampaign(editingItem.id, formData);
      } else {
        await adminCreateCampaign({
          ...formData,
          slug: formData.slug || formData.title_en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        });
      }
      setIsModalOpen(false);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await adminDeleteCampaign(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = async (id: string, field: 'is_urgent' | 'is_emergency' | 'is_zakat_eligible' | 'is_featured') => {
    try {
      await adminToggleCampaignStatus(id, field);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered List
  const filtered = campaigns.filter(c => {
    const matchesSearch = c.title_en.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.title_bn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.slug.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'all' || c.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Top Header & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ক্যাম্পেইন ব্যবস্থাপনা' : 'Campaigns Manager'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'নতুন প্রজেক্ট তৈরি, বাজেট আপডেট এবং জাকাত ও জরুরি ফ্ল্যাগ নিয়ন্ত্রণ করুন' : 'Manage fundraising campaigns, goals, raised amounts and statuses'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন ক্যাম্পেইন যোগ করুন' : 'Create Campaign'}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isBn ? 'ক্যাম্পেইন নাম বা স্লাগ খুঁজুন...' : 'Search campaigns by title or slug...'}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-white"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-white shrink-0"
        >
          <option value="all">{isBn ? 'সকল ক্যাটাগরি' : 'All Categories'}</option>
          <option value="emergency">Emergency Relief</option>
          <option value="water">Clean Water</option>
          <option value="education">Education</option>
          <option value="zakat">Zakat Fund</option>
          <option value="health">Healthcare</option>
          <option value="orphan">Orphan Care</option>
        </select>
      </div>

      {/* Campaigns Table */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading campaigns...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No campaigns match your filter.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Image & Title</th>
                  <th className="pb-3 font-semibold">Category</th>
                  <th className="pb-3 font-semibold">Raised / Goal (BDT)</th>
                  <th className="pb-3 font-semibold text-center">Status Badges</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => {
                  const percent = Math.min(100, Math.round((item.raised_amount / item.goal_amount) * 100)) || 0;
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      {/* Image & Title */}
                      <td className="py-3.5 pr-4">
                        <div className="flex items-center gap-3">
                          <SafeImage
                            src={item.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200'}
                            alt={item.title_en}
                            className="w-12 h-12 rounded-lg object-cover bg-slate-100 dark:bg-slate-800 shrink-0"
                            fallbackCategory="emergency"
                          />
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white text-xs">{item.title_en}</div>
                            <div className="text-[11px] text-slate-400 font-sans">{item.title_bn}</div>
                            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">/campaigns/{item.slug}</div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 pr-4">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[10px] capitalize">
                          {item.category}
                        </span>
                      </td>

                      {/* Raised / Goal */}
                      <td className="py-3.5 pr-4">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ৳ {item.raised_amount.toLocaleString()} <span className="font-normal text-slate-400">/ ৳ {item.goal_amount.toLocaleString()}</span>
                        </div>
                        <div className="w-28 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${percent}%` }} />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{percent}% funded • {item.donor_count} donors</div>
                      </td>

                      {/* Quick Toggles */}
                      <td className="py-3.5 px-2">
                        <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-[160px] mx-auto">
                          <button
                            onClick={() => handleToggle(item.id, 'is_urgent')}
                            title="Toggle Urgent"
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                              item.is_urgent
                                ? 'bg-rose-100 text-rose-700 border-rose-300 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800'
                                : 'bg-slate-100 text-slate-400 border-slate-200 dark:bg-slate-800 dark:text-slate-500'
                            }`}
                          >
                            Urgent
                          </button>
                          <button
                            onClick={() => handleToggle(item.id, 'is_zakat_eligible')}
                            title="Toggle Zakat"
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                              item.is_zakat_eligible
                                ? 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
                                : 'bg-slate-100 text-slate-400 border-slate-200 dark:bg-slate-800 dark:text-slate-500'
                            }`}
                          >
                            Zakat
                          </button>
                          <button
                            onClick={() => handleToggle(item.id, 'is_emergency')}
                            title="Toggle Emergency"
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                              item.is_emergency
                                ? 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800'
                                : 'bg-slate-100 text-slate-400 border-slate-200 dark:bg-slate-800 dark:text-slate-500'
                            }`}
                          >
                            Emergency
                          </button>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                            title="Edit Campaign"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteTarget(item)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                            title="Delete Campaign"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </AdminCard>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? (isBn ? 'ক্যাম্পেইন এডিট করুন' : 'Edit Campaign') : (isBn ? 'নতুন ক্যাম্পেইন তৈরি করুন' : 'Create New Campaign')}
        maxWidth="3xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title EN */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (English) *</label>
              <input
                type="text"
                required
                value={formData.title_en}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                placeholder="e.g. Sylhet Flood Relief 2026"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            {/* Title BN */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (বাংলা)</label>
              <input
                type="text"
                value={formData.title_bn}
                onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
                placeholder="সিলেট ও সুনামগঞ্জ বন্যা জরুরি সহায়তা"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">URL Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="sylhet-flood-relief"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white capitalize"
              >
                <option value="emergency">Emergency Relief</option>
                <option value="water">Clean Water & Tube Wells</option>
                <option value="education">Education & Schools</option>
                <option value="zakat">100% Zakat Fund</option>
                <option value="health">Healthcare & Camps</option>
                <option value="orphan">Orphan Care</option>
              </select>
            </div>

            {/* Goal Amount */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Goal Amount (BDT) *</label>
              <input
                type="number"
                required
                value={formData.goal_amount}
                onChange={(e) => setFormData({ ...formData, goal_amount: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            {/* Raised Amount */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Raised Amount (BDT)</label>
              <input
                type="number"
                value={formData.raised_amount}
                onChange={(e) => setFormData({ ...formData, raised_amount: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            {/* Days Left */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Days Left</label>
              <input
                type="number"
                value={formData.days_left}
                onChange={(e) => setFormData({ ...formData, days_left: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            {/* Cover Image URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Image URL</label>
              <input
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Summaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Summary (EN)</label>
              <textarea
                rows={2}
                value={formData.summary_en}
                onChange={(e) => setFormData({ ...formData, summary_en: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Summary (বাংলা)</label>
              <textarea
                rows={2}
                value={formData.summary_bn}
                onChange={(e) => setFormData({ ...formData, summary_bn: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Checkbox Toggles */}
          <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_urgent}
                onChange={(e) => setFormData({ ...formData, is_urgent: e.target.checked })}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              Mark as Urgent
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_emergency}
                onChange={(e) => setFormData({ ...formData, is_emergency: e.target.checked })}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              Emergency Fund
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_zakat_eligible}
                onChange={(e) => setFormData({ ...formData, is_zakat_eligible: e.target.checked })}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              100% Zakat Eligible
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              Feature on Homepage
            </label>
          </div>

          {/* Modal Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0D6E4F] hover:bg-[#0B5B41] rounded-lg shadow-xs transition-colors"
            >
              {editingItem ? 'Save Changes' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={deleteTarget?.title_en}
      />
    </div>
  );
};
