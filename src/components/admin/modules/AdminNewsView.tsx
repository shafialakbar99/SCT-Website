import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Newspaper, Search, FileText } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { NewsItemTableRow } from '../../../types';
import { 
  adminGetNews, 
  adminCreateNews, 
  adminUpdateNews, 
  adminDeleteNews 
} from '../../../api/admin/adminNewsApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';

export const AdminNewsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [newsList, setNewsList] = useState<NewsItemTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItemTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<NewsItemTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    title_en: '',
    title_bn: '',
    slug: '',
    summary_en: '',
    summary_bn: '',
    content_en: '',
    content_bn: '',
    source_en: 'Humanity First Media Centre',
    source_bn: 'হিউম্যানিটি ফার্স্ট প্রেস উইং',
    published_at: new Date().toISOString().slice(0, 10),
    cover_image: '',
    pdf_attachment_url: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetNews();
      setNewsList(data);
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
      summary_en: '',
      summary_bn: '',
      content_en: '',
      content_bn: '',
      source_en: 'Humanity First Media Centre',
      source_bn: 'হিউম্যানিটি ফার্স্ট প্রেস উইং',
      published_at: new Date().toISOString().slice(0, 10),
      cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      pdf_attachment_url: 'https://humanityfirstbd.org/press-release-doc.pdf'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: NewsItemTableRow) => {
    setEditingItem(item);
    setFormData({
      title_en: item.title_en,
      title_bn: item.title_bn,
      slug: item.slug,
      summary_en: item.summary_en,
      summary_bn: item.summary_bn,
      content_en: item.content_en,
      content_bn: item.content_bn,
      source_en: item.source_en,
      source_bn: item.source_bn,
      published_at: item.published_at,
      cover_image: item.cover_image,
      pdf_attachment_url: item.pdf_attachment_url || ''
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en) return;

    try {
      if (editingItem) {
        await adminUpdateNews(editingItem.id, formData);
      } else {
        await adminCreateNews({
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
      await adminDeleteNews(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = newsList.filter(n =>
    n.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.title_bn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.source_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'সংবাদ ও প্রেস রিলিজ' : 'News & Press Releases'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'অফিসিয়াল নোটিশ, প্রেস রিলিজ ও পিডিএফ এটাচমেন্ট প্রকাশ করুন' : 'Publish official notices, press releases, and downloadable PDF circulars'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন প্রেস রিলিজ' : 'Publish Notice'}</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search news releases by headline or source..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
        />
      </div>

      {/* Table */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading news...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No press releases found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Headline & Slug</th>
                  <th className="pb-3 font-semibold">Source</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold">PDF Attachment</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    {/* Headline */}
                    <td className="py-3.5 pr-4">
                      <div className="font-bold text-slate-900 dark:text-white text-xs">{item.title_en}</div>
                      <div className="text-[11px] text-slate-400 font-sans">{item.title_bn}</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">/news/{item.slug}</div>
                    </td>

                    {/* Source */}
                    <td className="py-3.5 pr-4 text-slate-700 dark:text-slate-300 font-medium">
                      {item.source_en}
                    </td>

                    {/* Date */}
                    <td className="py-3.5 pr-4 text-slate-500 font-mono">
                      {item.published_at}
                    </td>

                    {/* PDF Attachment */}
                    <td className="py-3.5 pr-4">
                      {item.pdf_attachment_url ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                          <FileText className="w-3 h-3" /> Attached
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[10px]">None</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                          title="Edit News"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          title="Delete News"
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
        title={editingItem ? 'Edit Press Release' : 'Publish New Press Release'}
        maxWidth="2xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Headline (English) *</label>
              <input
                type="text"
                required
                value={formData.title_en}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                placeholder="e.g. Humanity First Dispatches Relief to Feni"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Headline (বাংলা)</label>
              <input
                type="text"
                value={formData.title_bn}
                onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
                placeholder="ফেনী দুর্গতদের জন্য জরুরি সহায়তা প্রেরণ"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Source / Department</label>
              <input
                type="text"
                value={formData.source_en}
                onChange={(e) => setFormData({ ...formData, source_en: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Publish Date</label>
              <input
                type="date"
                value={formData.published_at}
                onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Cover Image URL</label>
              <input
                type="url"
                value={formData.cover_image}
                onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">PDF Attachment Document URL</label>
              <input
                type="url"
                value={formData.pdf_attachment_url}
                onChange={(e) => setFormData({ ...formData, pdf_attachment_url: e.target.value })}
                placeholder="https://humanityfirstbd.org/press.pdf"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Press Release Summary</label>
            <textarea
              rows={2}
              value={formData.summary_en}
              onChange={(e) => setFormData({ ...formData, summary_en: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Statement Body</label>
            <textarea
              rows={5}
              value={formData.content_en}
              onChange={(e) => setFormData({ ...formData, content_en: e.target.value })}
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
              Publish Notice
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
