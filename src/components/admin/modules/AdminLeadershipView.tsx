import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, UserCheck, Search, Shield } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { LeadershipTableRow } from '../../../types';
import { 
  adminGetLeadership, 
  adminCreateLeadership, 
  adminUpdateLeadership, 
  adminDeleteLeadership 
} from '../../../api/admin/adminLeadershipApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminLeadershipView: React.FC = () => {
  const { isBn } = useLanguage();
  const [members, setMembers] = useState<LeadershipTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<LeadershipTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<LeadershipTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    name_en: '',
    name_bn: '',
    role_en: '',
    role_bn: '',
    bio_en: '',
    bio_bn: '',
    photo_url: '',
    category: 'executive' as 'board' | 'executive' | 'advisory',
    order_index: 1
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetLeadership();
      setMembers(data);
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
      role_en: 'Director of Field Operations',
      role_bn: 'পরিচালক, মাঠ কার্যক্রম',
      bio_en: 'Leading disaster relief responses and coordination across rural Bangladesh for over a decade.',
      bio_bn: 'এক দশকেরও বেশি সময় ধরে দুর্যোগ ব্যবস্থাপনা ও সমন্বয়ে নেতৃত্ব দিচ্ছেন।',
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      category: 'executive',
      order_index: members.length + 1
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: LeadershipTableRow) => {
    setEditingItem(item);
    setFormData({
      name_en: item.name_en,
      name_bn: item.name_bn,
      role_en: item.role_en,
      role_bn: item.role_bn,
      bio_en: item.bio_en,
      bio_bn: item.bio_bn,
      photo_url: item.photo_url,
      category: item.category,
      order_index: item.order_index
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name_en || !formData.role_en) return;

    try {
      if (editingItem) {
        await adminUpdateLeadership(editingItem.id, formData);
      } else {
        await adminCreateLeadership(formData);
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
      await adminDeleteLeadership(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = members.filter(m => {
    const matchesSearch = m.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.role_en.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'all' || m.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'নেতৃত্ব ও টিম সদস্য' : 'Leadership & Board of Directors'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'ট্রাস্টি বোর্ড, নির্বাহী পরিষদ ও উপদেষ্টা কমিটির প্রোফাইল' : 'Manage governing board members, executive trustees and advisor profiles'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন সদস্য যোগ করুন' : 'Add Team Member'}</span>
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
            placeholder="Search team member by name or designation..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white shrink-0"
        >
          <option value="all">All Groups</option>
          <option value="board">Board of Trustees</option>
          <option value="executive">Executive Management</option>
          <option value="advisory">Advisory Council</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <AdminCard key={item.id} className="flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <SafeImage
                  src={item.photo_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'}
                  alt={item.name_en}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600/30 shrink-0"
                  fallbackCategory="leadership"
                />
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.name_en}</h3>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{item.role_en}</div>
                  <span className="inline-block text-[10px] uppercase font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded mt-1">
                    {item.category}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {item.bio_en}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono">Rank #{item.order_index}</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                  title="Edit Profile"
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
            </div>
          </AdminCard>
        ))}
      </div>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Leadership Member' : 'Add New Leadership Member'}
        maxWidth="xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Name (English) *</label>
              <input
                type="text"
                required
                value={formData.name_en}
                onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                placeholder="e.g. Dr. Tariq Ahmad"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Name (বাংলা)</label>
              <input
                type="text"
                value={formData.name_bn}
                onChange={(e) => setFormData({ ...formData, name_bn: e.target.value })}
                placeholder="ড. তারিক আহমদ"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Role / Designation (EN) *</label>
              <input
                type="text"
                required
                value={formData.role_en}
                onChange={(e) => setFormData({ ...formData, role_en: e.target.value })}
                placeholder="e.g. Chairman, Board of Trustees"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Role / Designation (বাংলা)</label>
              <input
                type="text"
                value={formData.role_bn}
                onChange={(e) => setFormData({ ...formData, role_bn: e.target.value })}
                placeholder="চেয়ারম্যান, ট্রাস্টি বোর্ড"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category Group</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as 'board' | 'executive' | 'advisory' })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              >
                <option value="board">Board of Trustees</option>
                <option value="executive">Executive Management</option>
                <option value="advisory">Advisory Council</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Order Index</label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => setFormData({ ...formData, order_index: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Profile Photo URL</label>
            <input
              type="url"
              value={formData.photo_url}
              onChange={(e) => setFormData({ ...formData, photo_url: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Biography (English)</label>
            <textarea
              rows={3}
              value={formData.bio_en}
              onChange={(e) => setFormData({ ...formData, bio_en: e.target.value })}
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
              Save Member
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
