import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Image, Search, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { PhotoAlbumTableRow } from '../../../types';
import { 
  adminGetPhotoAlbums, 
  adminCreatePhotoAlbum, 
  adminUpdatePhotoAlbum, 
  adminDeletePhotoAlbum 
} from '../../../api/admin/adminPhotoGalleryApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminPhotoGalleryView: React.FC = () => {
  const { isBn } = useLanguage();
  const [albums, setAlbums] = useState<PhotoAlbumTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PhotoAlbumTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<PhotoAlbumTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    title_en: '',
    title_bn: '',
    category: 'Disaster Relief',
    cover_image: '',
    date_str: '2026',
    photos_text: '' // Multi-line URLs for images
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetPhotoAlbums();
      setAlbums(data);
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
      category: 'Emergency Relief',
      cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      date_str: 'July 2026',
      photos_text: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800\nhttps://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: PhotoAlbumTableRow) => {
    setEditingItem(item);
    const photos = item.photos_json || [];
    setFormData({
      title_en: item.title_en,
      title_bn: item.title_bn,
      category: item.category,
      cover_image: item.cover_image,
      date_str: item.date_str,
      photos_text: photos.map(p => typeof p === 'string' ? p : p.url).join('\n')
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en || !formData.cover_image) return;

    const urls = formData.photos_text
      .split('\n')
      .map(u => u.trim())
      .filter(Boolean)
      .map((url, i) => ({
        url,
        caption: { en: `${formData.title_en} - Photo ${i + 1}`, bn: `${formData.title_bn || formData.title_en} - ছবি ${i + 1}` }
      }));

    try {
      if (editingItem) {
        await adminUpdatePhotoAlbum(editingItem.id, {
          title_en: formData.title_en,
          title_bn: formData.title_bn,
          category: formData.category,
          cover_image: formData.cover_image,
          date_str: formData.date_str,
          location_en: editingItem.location_en || 'Bangladesh',
          location_bn: editingItem.location_bn || 'বাংলাদেশ',
          photos_json: urls,
          images_json: urls
        });
      } else {
        await adminCreatePhotoAlbum({
          title_en: formData.title_en,
          title_bn: formData.title_bn,
          category: formData.category,
          cover_image: formData.cover_image,
          date_str: formData.date_str,
          location_en: 'Bangladesh',
          location_bn: 'বাংলাদেশ',
          photos_json: urls,
          images_json: urls
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
      await adminDeletePhotoAlbum(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = albums.filter(a =>
    a.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ফটো অ্যালবাম গ্যালারি' : 'Photo Albums Manager'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'ওয়েবসাইটের ফিল্ড অপারেশন ফটো অ্যালবাম ও ইমেজ আপলোড নিয়ন্ত্রণ' : 'Manage public photo gallery albums, categories, and high-resolution photo URLs'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন অ্যালবাম তৈরি' : 'Add Photo Album'}</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search albums by title or category..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
        />
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const photoCount = item.photos_json?.length || 0;
          return (
            <AdminCard key={item.id} className="group overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <SafeImage
                    src={item.cover_image}
                    alt={item.title_en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackCategory="gallery"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {photoCount} Photos
                  </span>
                  <span className="absolute top-2 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title_en}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.title_bn}</p>
                <div className="text-[11px] text-slate-400 mt-2 font-mono">{item.date_str}</div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                  title="Edit Album"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteTarget(item)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                  title="Delete Album"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </AdminCard>
          );
        })}
      </div>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Photo Album' : 'Create New Photo Album'}
        maxWidth="lg"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Album Title (English) *</label>
            <input
              type="text"
              required
              value={formData.title_en}
              onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
              placeholder="e.g. Feni Flood Boat Rescue Operation"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Album Title (বাংলা)</label>
            <input
              type="text"
              value={formData.title_bn}
              onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
              placeholder="ফেনী উদ্ধার অভিযান"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="Emergency / Water / Medical"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Date String</label>
              <input
                type="text"
                value={formData.date_str}
                onChange={(e) => setFormData({ ...formData, date_str: e.target.value })}
                placeholder="e.g. July 2026"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Cover Image URL *</label>
            <input
              type="url"
              required
              value={formData.cover_image}
              onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Album Photo URLs (one URL per line)
            </label>
            <textarea
              rows={4}
              value={formData.photos_text}
              onChange={(e) => setFormData({ ...formData, photos_text: e.target.value })}
              placeholder="https://images.unsplash.com/photo-1\nhttps://images.unsplash.com/photo-2"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
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
              Save Album
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
