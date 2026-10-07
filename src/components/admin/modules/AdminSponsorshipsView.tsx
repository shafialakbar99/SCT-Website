import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, GraduationCap, Search, CheckCircle2, UserCheck, Heart } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SponsorshipTableRow } from '../../../types';
import { 
  adminGetSponsorships, 
  adminCreateSponsorship, 
  adminUpdateSponsorship, 
  adminDeleteSponsorship,
  adminToggleSponsorshipStatus
} from '../../../api/admin/adminSponsorshipApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminSponsorshipsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [items, setItems] = useState<SponsorshipTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<SponsorshipTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<SponsorshipTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    name_en: '',
    name_bn: '',
    age: 9,
    gender: 'boy' as 'boy' | 'girl',
    class_level_en: 'Class 4',
    class_level_bn: 'চতুর্থ শ্রেণি',
    location_en: 'Brahmanbaria, Bangladesh',
    location_bn: 'ব্রাহ্মণবাড়িয়া, বাংলাদেশ',
    monthly_cost_bdt: 2500,
    monthly_cost_usd: 25,
    story_en: '',
    story_bn: '',
    ambition_en: 'Wants to be a Doctor',
    ambition_bn: 'ভবিষ্যতে ডাক্তার হতে চায়',
    photo_url: '',
    status: 'available' as 'available' | 'sponsored',
    sponsored_by: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetSponsorships();
      setItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      name_en: '',
      name_bn: '',
      age: 9,
      gender: 'boy',
      class_level_en: 'Class 4',
      class_level_bn: 'চতুর্থ শ্রেণি',
      location_en: 'Brahmanbaria, Bangladesh',
      location_bn: 'ব্রাহ্মণবাড়িয়া, বাংলাদেশ',
      monthly_cost_bdt: 2500,
      monthly_cost_usd: 25,
      story_en: 'Lost father in a river erosion accident. Dreams of continuing primary school.',
      story_bn: 'নদী ভাঙনে বাবার অকাল মৃত্যুতে পড়ালেখা বন্ধের উপক্রম। স্কুলে যাওয়ার স্বপ্ন দেখে।',
      ambition_en: 'Wants to become a Teacher',
      ambition_bn: 'শিক্ষক হওয়ার স্বপ্ন',
      photo_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400',
      status: 'available',
      sponsored_by: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: SponsorshipTableRow) => {
    setEditingItem(item);
    setFormData({
      name_en: item.name_en,
      name_bn: item.name_bn,
      age: item.age,
      gender: item.gender,
      class_level_en: item.class_level_en,
      class_level_bn: item.class_level_bn,
      location_en: item.location_en,
      location_bn: item.location_bn,
      monthly_cost_bdt: item.monthly_cost_bdt,
      monthly_cost_usd: item.monthly_cost_usd,
      story_en: item.story_en,
      story_bn: item.story_bn,
      ambition_en: item.ambition_en,
      ambition_bn: item.ambition_bn,
      photo_url: item.photo_url,
      status: item.status,
      sponsored_by: item.sponsored_by || ''
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name_en) return;

    try {
      if (editingItem) {
        await adminUpdateSponsorship(editingItem.id, formData);
      } else {
        await adminCreateSponsorship(formData);
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
      await adminDeleteSponsorship(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await adminToggleSponsorshipStatus(id);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = items.filter(s => {
    const matchesSearch = s.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.name_bn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.location_en.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'স্পনসরশিপ ও এতিম সহায়তা প্রোফাইল' : 'Sponsorship & Orphan Care'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'অনাথ ও সুবিধাবঞ্চিত শিশুদের শিক্ষাবৃত্তি প্রোফাইল ও স্পনসর সংযোগ' : 'Manage student profiles, monthly sponsorship fees, ambitions, and adoption statuses'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন প্রোফাইল তৈরি' : 'Add Child Profile'}</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student by name or district..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white shrink-0"
        >
          <option value="all">All Profiles</option>
          <option value="available">Available for Sponsorship</option>
          <option value="sponsored">Currently Sponsored</option>
        </select>
      </div>

      {/* Table */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading child profiles...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No profiles found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Child Profile</th>
                  <th className="pb-3 font-semibold">Class & Location</th>
                  <th className="pb-3 font-semibold">Monthly Cost</th>
                  <th className="pb-3 font-semibold">Ambition</th>
                  <th className="pb-3 font-semibold text-center">Status</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    {/* Child Profile */}
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <SafeImage
                          src={item.photo_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200'}
                          alt={item.name_en}
                          className="w-11 h-11 rounded-full object-cover bg-slate-100 dark:bg-slate-800 shrink-0"
                          fallbackCategory="orphan"
                        />
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white text-xs">{item.name_en}</div>
                          <div className="text-[11px] text-slate-400">{item.name_bn} • {item.age} yrs • {item.gender}</div>
                        </div>
                      </div>
                    </td>

                    {/* Class & Location */}
                    <td className="py-3.5 pr-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{item.class_level_en}</div>
                      <div className="text-[11px] text-slate-500">{item.location_en}</div>
                    </td>

                    {/* Cost */}
                    <td className="py-3.5 pr-4 font-bold text-emerald-600 dark:text-emerald-400">
                      ৳ {item.monthly_cost_bdt.toLocaleString()} <span className="font-normal text-slate-400 text-[10px]">($ {item.monthly_cost_usd}/mo)</span>
                    </td>

                    {/* Ambition */}
                    <td className="py-3.5 pr-4 max-w-[160px] truncate text-slate-600 dark:text-slate-300">
                      {item.ambition_en}
                    </td>

                    {/* Status Toggle */}
                    <td className="py-3.5 px-2 text-center">
                      <button
                        onClick={() => handleToggleStatus(item.id)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors ${
                          item.status === 'sponsored'
                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                            : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}
                      >
                        {item.status === 'sponsored' ? 'Sponsored' : 'Available'}
                      </button>
                      {item.sponsored_by && (
                        <div className="text-[9px] text-slate-400 mt-0.5 truncate max-w-[100px] mx-auto">
                          By: {item.sponsored_by}
                        </div>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                          title="Edit Child Profile"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          title="Delete Profile"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AdminCard>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Sponsorship Profile' : 'Add New Child for Sponsorship'}
        maxWidth="2xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Child Name (English) *</label>
              <input
                type="text"
                required
                value={formData.name_en}
                onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                placeholder="e.g. Arif Rahman"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Child Name (বাংলা)</label>
              <input
                type="text"
                value={formData.name_bn}
                onChange={(e) => setFormData({ ...formData, name_bn: e.target.value })}
                placeholder="আরিফ রহমান"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'boy' | 'girl' })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white capitalize"
              >
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Class Level (EN)</label>
              <input
                type="text"
                value={formData.class_level_en}
                onChange={(e) => setFormData({ ...formData, class_level_en: e.target.value })}
                placeholder="Class 4"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Location / District (EN)</label>
              <input
                type="text"
                value={formData.location_en}
                onChange={(e) => setFormData({ ...formData, location_en: e.target.value })}
                placeholder="Brahmanbaria, Bangladesh"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Monthly Cost (BDT) *</label>
              <input
                type="number"
                required
                value={formData.monthly_cost_bdt}
                onChange={(e) => setFormData({ ...formData, monthly_cost_bdt: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Photo URL</label>
              <input
                type="url"
                value={formData.photo_url}
                onChange={(e) => setFormData({ ...formData, photo_url: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Future Ambition (EN)</label>
              <input
                type="text"
                value={formData.ambition_en}
                onChange={(e) => setFormData({ ...formData, ambition_en: e.target.value })}
                placeholder="Wants to be an Engineer"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Sponsor Name (if active)</label>
              <input
                type="text"
                value={formData.sponsored_by}
                onChange={(e) => setFormData({ ...formData, sponsored_by: e.target.value })}
                placeholder="Leave blank if available"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Background Story (English)</label>
            <textarea
              rows={3}
              value={formData.story_en}
              onChange={(e) => setFormData({ ...formData, story_en: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0D6E4F] hover:bg-[#0B5B41] rounded-lg shadow-xs"
            >
              Save Profile
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={deleteTarget?.name_en}
      />
    </div>
  );
};
