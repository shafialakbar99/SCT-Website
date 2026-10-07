import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Search } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { BlogPostTableRow } from '../../../types';
import { 
  adminGetBlogs, 
  adminCreateBlog, 
  adminUpdateBlog, 
  adminDeleteBlog 
} from '../../../api/admin/adminBlogApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminBlogsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPostTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BlogPostTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<BlogPostTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    title_en: '',
    title_bn: '',
    slug: '',
    summary_en: '',
    summary_bn: '',
    content_en: '',
    content_bn: '',
    category_en: 'Field Story',
    category_bn: 'মাঠ প্রতিবেদন',
    author_name: 'Field Operations Team',
    author_role_en: 'Disaster Relief Coordinator',
    author_role_bn: 'দুর্যোগ ত্রাণ সমন্বয়ক',
    cover_image: '',
    published_at: new Date().toISOString().slice(0, 10),
    read_time_minutes: 4,
    tags_text: 'Flood Relief, Sylhet, Volunteer'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetBlogs();
      setBlogs(data);
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
      category_en: 'Field Story',
      category_bn: 'মাঠ প্রতিবেদন',
      author_name: 'Humanity First Communications',
      author_role_en: 'Field Operations Specialist',
      author_role_bn: 'মাঠ সমন্বয়ক',
      cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
      published_at: new Date().toISOString().slice(0, 10),
      read_time_minutes: 4,
      tags_text: 'Emergency, Flood, Zakat, Water'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: BlogPostTableRow) => {
    setEditingItem(item);
    setFormData({
      title_en: item.title_en || '',
      title_bn: item.title_bn || '',
      slug: item.slug || '',
      summary_en: item.summary_en || '',
      summary_bn: item.summary_bn || '',
      content_en: item.content_en || '',
      content_bn: item.content_bn || '',
      category_en: item.category_en || 'Field Story',
      category_bn: item.category_bn || 'মাঠ প্রতিবেদন',
      author_name: item.author_name || 'Humanity First',
      author_role_en: item.author_role_en || 'Staff',
      author_role_bn: item.author_role_bn || 'কর্মী',
      cover_image: item.cover_image || '',
      published_at: item.published_at || new Date().toISOString().slice(0, 10),
      read_time_minutes: item.read_time_minutes || 4,
      tags_text: (item.tags_json || []).join(', ')
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en) return;

    const tags = formData.tags_text.split(',').map(t => t.trim()).filter(Boolean);
    const slug = formData.slug || formData.title_en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const payload = {
      title_en: formData.title_en,
      title_bn: formData.title_bn || formData.title_en,
      slug,
      summary_en: formData.summary_en,
      summary_bn: formData.summary_bn || formData.summary_en,
      content_en: formData.content_en,
      content_bn: formData.content_bn || formData.content_en,
      category_en: formData.category_en,
      category_bn: formData.category_bn,
      author_name: formData.author_name,
      author_role_en: formData.author_role_en,
      author_role_bn: formData.author_role_bn,
      cover_image: formData.cover_image,
      published_at: formData.published_at,
      read_time_minutes: Number(formData.read_time_minutes) || 4,
      tags_json: tags
    };

    try {
      if (editingItem) {
        await adminUpdateBlog(editingItem.id, payload);
      } else {
        await adminCreateBlog(payload);
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
      await adminDeleteBlog(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = blogs.filter(b =>
    (b.title_en || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (b.title_bn || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (b.category_en || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ব্লগ ও ফিল্ড স্টোরি পাবলিশার' : 'Field Stories & Articles Manager'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'ওয়েবসাইটের ফিল্ড রিপোর্ট, মানবিক গল্প ও ব্লগ পোস্ট তৈরি এবং এডিট করুন' : 'Draft, edit, categorize and publish humanitarian field reports and articles'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন আর্টিকেল লিখুন' : 'Write New Article'}</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles by title, author, or category..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
        />
      </div>

      {/* Blogs List */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading articles...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No articles found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Article & Slug</th>
                  <th className="pb-3 font-semibold">Author</th>
                  <th className="pb-3 font-semibold">Category</th>
                  <th className="pb-3 font-semibold">Published Date</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    {/* Article & Slug */}
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <SafeImage
                          src={item.cover_image || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200'}
                          alt={item.title_en}
                          className="w-12 h-12 rounded-lg object-cover bg-slate-100 dark:bg-slate-800 shrink-0"
                          fallbackCategory="education"
                        />
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white text-xs">{item.title_en}</div>
                          <div className="text-[11px] text-slate-400 font-sans">{item.title_bn}</div>
                          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">/blog/{item.slug}</div>
                        </div>
                      </div>
                    </td>

                    {/* Author */}
                    <td className="py-3.5 pr-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{item.author_name}</div>
                      <div className="text-[10px] text-slate-400">{item.author_role_en}</div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 pr-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold text-[10px]">
                        {item.category_en}
                      </span>
                    </td>

                    {/* Published Date */}
                    <td className="py-3.5 pr-4">
                      <div className="text-slate-700 dark:text-slate-300 font-medium">{item.published_at}</div>
                      <div className="text-[10px] text-slate-400">{item.read_time_minutes} min read</div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer"
                          title="Edit Article"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
                          title="Delete Article"
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
        title={editingItem ? 'Edit Article' : 'Compose Field Story / Blog'}
        maxWidth="3xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (English) *</label>
              <input
                type="text"
                required
                value={formData.title_en}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                placeholder="e.g. Rebuilding Hope in Flood-Affected Sylhet"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (বাংলা)</label>
              <input
                type="text"
                value={formData.title_bn}
                onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
                placeholder="বন্যাপ্লাবিত সিলেটে আশার আলো"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">URL Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="rebuilding-hope-sylhet"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category (EN)</label>
              <input
                type="text"
                value={formData.category_en}
                onChange={(e) => setFormData({ ...formData, category_en: e.target.value })}
                placeholder="Field Story / Medical / Water"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Author Name</label>
              <input
                type="text"
                value={formData.author_name}
                onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Author Role</label>
              <input
                type="text"
                value={formData.author_role_en}
                onChange={(e) => setFormData({ ...formData, author_role_en: e.target.value })}
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
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Tags (Comma separated)</label>
              <input
                type="text"
                value={formData.tags_text}
                onChange={(e) => setFormData({ ...formData, tags_text: e.target.value })}
                placeholder="Flood, Sylhet, Relief, Volunteer"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Summary (Short Excerpt)</label>
            <textarea
              rows={2}
              value={formData.summary_en}
              onChange={(e) => setFormData({ ...formData, summary_en: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Detailed Story Content (English / Markdown)</label>
            <textarea
              rows={6}
              value={formData.content_en}
              onChange={(e) => setFormData({ ...formData, content_en: e.target.value })}
              placeholder="Write the full report narrative here..."
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0D6E4F] hover:bg-[#0B5B41] rounded-lg shadow-xs cursor-pointer"
            >
              Publish Article
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
