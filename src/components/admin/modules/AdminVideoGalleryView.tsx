import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Video, Search, Play } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VideoItemTableRow } from '../../../types';
import { 
  adminGetVideoItems, 
  adminCreateVideoItem, 
  adminUpdateVideoItem, 
  adminDeleteVideoItem 
} from '../../../api/admin/adminVideoGalleryApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminVideoGalleryView: React.FC = () => {
  const { isBn } = useLanguage();
  const [videos, setVideos] = useState<VideoItemTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<VideoItemTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<VideoItemTableRow | null>(null);
  const [previewVideoId, setPreviewVideoId] = useState<string | null>(null);

  // Form
  const [formData, setFormData] = useState({
    title_en: '',
    title_bn: '',
    youtube_id: '',
    category: 'Field Documentary',
    duration: '04:15',
    thumbnail_url: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetVideoItems();
      setVideos(data);
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
      youtube_id: 'dQw4w9WgXcQ',
      category: 'Field Documentary',
      duration: '03:45',
      thumbnail_url: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: VideoItemTableRow) => {
    setEditingItem(item);
    setFormData({
      title_en: item.title_en,
      title_bn: item.title_bn,
      youtube_id: item.youtube_id,
      category: item.category,
      duration: item.duration,
      thumbnail_url: item.thumbnail_url
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en || !formData.youtube_id) return;

    try {
      if (editingItem) {
        await adminUpdateVideoItem(editingItem.id, formData);
      } else {
        await adminCreateVideoItem(formData);
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
      await adminDeleteVideoItem(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = videos.filter(v =>
    v.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.youtube_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ইউটিউব ভিডিও গ্যালারি' : 'YouTube Video Gallery'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'ইউটিউব ভিডিও ID সংযোজন, লাইভ প্লেয়ার টেস্ট ও ক্যাটাগরি ব্যবস্থাপনা' : 'Manage YouTube video embeds with live preview player and categories'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন ভিডিও যোগ করুন' : 'Add Video'}</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search videos by title or YouTube ID..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <AdminCard key={item.id} className="group flex flex-col justify-between overflow-hidden">
            <div>
              <div 
                onClick={() => setPreviewVideoId(item.youtube_id)}
                className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-900 cursor-pointer"
              >
                <SafeImage
                  src={item.thumbnail_url || `https://img.youtube.com/vi/${item.youtube_id}/mqdefault.jpg`}
                  alt={item.title_en}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  fallbackCategory="general"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {item.duration}
                </span>
                <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>

              <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title_en}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.title_bn}</p>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-mono">
                ID: {item.youtube_id}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setPreviewVideoId(item.youtube_id)}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <Play className="w-3.5 h-3.5" /> Test Play
              </button>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                  title="Edit Video"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteTarget(item)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                  title="Delete Video"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>

      {/* Live YouTube Player Modal */}
      <AdminModal
        isOpen={Boolean(previewVideoId)}
        onClose={() => setPreviewVideoId(null)}
        title="Live YouTube Video Preview"
        maxWidth="3xl"
      >
        {previewVideoId && (
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
            <iframe
              src={`https://www.youtube.com/embed/${previewVideoId}?autoplay=1`}
              title="YouTube Preview"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </AdminModal>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Video Item' : 'Add New YouTube Video'}
        maxWidth="lg"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (English) *</label>
            <input
              type="text"
              required
              value={formData.title_en}
              onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
              placeholder="e.g. Clean Drinking Water for 50,000 People"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (বাংলা)</label>
            <input
              type="text"
              value={formData.title_bn}
              onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
              placeholder="৫০ হাজার মানুষের নিরাপদ পানির সংস্থান"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">YouTube Video ID *</label>
              <input
                type="text"
                required
                value={formData.youtube_id}
                onChange={(e) => setFormData({ ...formData, youtube_id: e.target.value })}
                placeholder="e.g. dQw4w9WgXcQ"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="04:20"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="Documentary / Relief / Medical"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          {/* Real-time thumbnail preview */}
          {formData.youtube_id && (
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <SafeImage
                src={`https://img.youtube.com/vi/${formData.youtube_id}/mqdefault.jpg`}
                alt="Thumbnail"
                className="w-20 h-12 object-cover rounded bg-black shrink-0"
                fallbackCategory="general"
              />
              <div className="text-[11px] text-slate-500">
                Auto YouTube Thumbnail Detected: <span className="font-mono text-emerald-600">{formData.youtube_id}</span>
              </div>
            </div>
          )}

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
              Save Video
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
