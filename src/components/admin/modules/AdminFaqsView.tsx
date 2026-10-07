import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, HelpCircle, Search } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaqTableRow } from '../../../types';
import { 
  adminGetFaqs, 
  adminCreateFaq, 
  adminUpdateFaq, 
  adminDeleteFaq 
} from '../../../api/admin/adminFaqApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';

export const AdminFaqsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [faqs, setFaqs] = useState<FaqTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<FaqTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<FaqTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    category: 'zakat',
    question_en: '',
    question_bn: '',
    answer_en: '',
    answer_bn: '',
    order_index: 1
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetFaqs();
      setFaqs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      category: 'donation',
      question_en: '',
      question_bn: '',
      answer_en: '',
      answer_bn: '',
      order_index: faqs.length + 1
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: FaqTableRow) => {
    setEditingItem(item);
    setFormData({
      category: item.category,
      question_en: item.question_en,
      question_bn: item.question_bn,
      answer_en: item.answer_en,
      answer_bn: item.answer_bn,
      order_index: item.order_index
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.question_en || !formData.answer_en) return;

    try {
      if (editingItem) {
        await adminUpdateFaq(editingItem.id, formData);
      } else {
        await adminCreateFaq(formData);
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
      await adminDeleteFaq(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = faqs.filter(f => {
    const matchesSearch = f.question_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.question_bn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'all' || f.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'সাধারণ জিজ্ঞাসা (FAQ) ব্যবস্থাপনা' : 'FAQ Knowledgebase'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'ডোনেশন, জাকাত নীতি, কর রেয়াত ও ভলান্টিয়ারিং বিষয়ক প্রশ্নোত্তর' : 'Manage frequent donor questions regarding tax exemption, 100% zakat policy and programs'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন FAQ যোগ করুন' : 'Add FAQ'}</span>
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
            placeholder="Search FAQs by question keywords..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white shrink-0"
        >
          <option value="all">All FAQ Categories</option>
          <option value="zakat">Zakat & Shariah</option>
          <option value="donation">Donations & 84C Tax</option>
          <option value="volunteer">Volunteering</option>
          <option value="general">General NGO Operations</option>
        </select>
      </div>

      {/* FAQs List */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading FAQs...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No FAQs found.</div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filtered.map((item) => (
              <div key={item.id} className="py-4 flex items-start justify-between gap-4 group">
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Order: #{item.order_index}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.question_en}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.question_bn}</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">{item.answer_en}</p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                    title="Edit FAQ"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(item)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    title="Delete FAQ"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </AdminCard>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit FAQ Item' : 'Add New FAQ'}
        maxWidth="xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              >
                <option value="zakat">Zakat & Shariah</option>
                <option value="donation">Donations & Tax</option>
                <option value="volunteer">Volunteering</option>
                <option value="general">General Operations</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Display Order</label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => setFormData({ ...formData, order_index: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Question (English) *</label>
            <input
              type="text"
              required
              value={formData.question_en}
              onChange={(e) => setFormData({ ...formData, question_en: e.target.value })}
              placeholder="e.g. How does Humanity First ensure 100% Zakat policy?"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Question (বাংলা)</label>
            <input
              type="text"
              value={formData.question_bn}
              onChange={(e) => setFormData({ ...formData, question_bn: e.target.value })}
              placeholder="হিউম্যানিটি ফার্স্ট কীভাবে ১০০% জাকাত বণ্টন নিশ্চিত করে?"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Answer (English) *</label>
            <textarea
              rows={3}
              required
              value={formData.answer_en}
              onChange={(e) => setFormData({ ...formData, answer_en: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Answer (বাংলা)</label>
            <textarea
              rows={3}
              value={formData.answer_bn}
              onChange={(e) => setFormData({ ...formData, answer_bn: e.target.value })}
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
              Save FAQ
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={deleteTarget?.question_en}
      />
    </div>
  );
};
