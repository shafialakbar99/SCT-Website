import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Calendar, Search, MapPin, Users, Clock } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { EventTableRow } from '../../../types';
import { 
  adminGetEvents, 
  adminCreateEvent, 
  adminUpdateEvent, 
  adminDeleteEvent 
} from '../../../api/admin/adminEventApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';
import { SafeImage } from '../../common/SafeImage';

export const AdminEventsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [events, setEvents] = useState<EventTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EventTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<EventTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    title_en: '',
    title_bn: '',
    date_str: '',
    time_str: '09:00 AM - 05:00 PM',
    location_en: 'Dhaka, Bangladesh',
    location_bn: 'ঢাকা, বাংলাদেশ',
    venue_en: '',
    venue_bn: '',
    type: 'Medical Camp',
    image_url: '',
    volunteer_slots: 20,
    registered_volunteers: 0,
    description_en: '',
    description_bn: '',
    status: 'upcoming' as 'upcoming' | 'ongoing' | 'completed'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetEvents();
      setEvents(data);
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
      date_str: 'August 15, 2026',
      time_str: '09:00 AM - 04:00 PM',
      location_en: 'Sunamganj, Sylhet',
      location_bn: 'সুনামগঞ্জ, সিলেট',
      venue_en: 'Tahirpur Upazila Complex Grounds',
      venue_bn: 'তাহিরপুর উপজেলা পরিষদ প্রাঙ্গণ',
      type: 'Free Medical Camp',
      image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      volunteer_slots: 30,
      registered_volunteers: 0,
      description_en: 'Providing free doctor consultations, clean water tablets, and essential medicines.',
      description_bn: 'বিনামূল্যে বিশেষজ্ঞ চিকিৎসাসেবা ও জরুরি ওষুধ বিতরণ কর্মসূচি।',
      status: 'upcoming'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: EventTableRow) => {
    setEditingItem(item);
    setFormData({
      title_en: item.title_en,
      title_bn: item.title_bn,
      date_str: item.date_str,
      time_str: item.time_str,
      location_en: item.location_en,
      location_bn: item.location_bn,
      venue_en: item.venue_en,
      venue_bn: item.venue_bn,
      type: item.type,
      image_url: item.image_url,
      volunteer_slots: item.volunteer_slots,
      registered_volunteers: item.registered_volunteers,
      description_en: item.description_en,
      description_bn: item.description_bn,
      status: item.status
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en || !formData.date_str) return;

    try {
      if (editingItem) {
        await adminUpdateEvent(editingItem.id, formData);
      } else {
        await adminCreateEvent(formData);
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
      await adminDeleteEvent(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = events.filter(e =>
    e.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.location_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ইভেন্ট ও ড্রাইভ ম্যানেজার' : 'Events & Relief Drives'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'ফিল্ড ড্রাইভ, ফ্রি মেডিকেল ক্যাম্প ও ভলান্টিয়ার শিফট শিডিউল' : 'Schedule humanitarian relief drives, free medical camps and volunteer rosters'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন ইভেন্ট শিডিউল' : 'Schedule Event'}</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search events by name, location, or type..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <AdminCard key={item.id} className="group flex flex-col justify-between overflow-hidden">
            <div>
              <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <SafeImage
                  src={item.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400'}
                  alt={item.title_en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackCategory="general"
                />
                <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded shadow ${
                  item.status === 'upcoming'
                    ? 'bg-blue-600 text-white'
                    : item.status === 'ongoing'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}>
                  {item.status}
                </span>
                <span className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {item.type}
                </span>
              </div>

              <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title_en}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.title_bn}</p>

              <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.date_str}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.time_str}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span className="truncate">{item.venue_en}, {item.location_en}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  <span>{item.registered_volunteers} / {item.volunteer_slots} Volunteers Registered</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => handleOpenEdit(item)}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                title="Edit Event"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeleteTarget(item)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                title="Delete Event"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </AdminCard>
        ))}
      </div>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Event Schedule' : 'Schedule New Event / Medical Camp'}
        maxWidth="2xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Title (English) *</label>
              <input
                type="text"
                required
                value={formData.title_en}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                placeholder="e.g. Free Eye Camp & Cataract Surgery"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Title (বাংলা)</label>
              <input
                type="text"
                value={formData.title_bn}
                onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
                placeholder="বিনামূল্যে চক্ষু চিকিৎসা ও ছানি অপারেশন"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Date *</label>
              <input
                type="text"
                required
                value={formData.date_str}
                onChange={(e) => setFormData({ ...formData, date_str: e.target.value })}
                placeholder="e.g. August 20, 2026"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Timing</label>
              <input
                type="text"
                value={formData.time_str}
                onChange={(e) => setFormData({ ...formData, time_str: e.target.value })}
                placeholder="09:00 AM - 05:00 PM"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Venue / Specific Spot</label>
              <input
                type="text"
                value={formData.venue_en}
                onChange={(e) => setFormData({ ...formData, venue_en: e.target.value })}
                placeholder="e.g. Tahirpur College Grounds"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Location / District</label>
              <input
                type="text"
                value={formData.location_en}
                onChange={(e) => setFormData({ ...formData, location_en: e.target.value })}
                placeholder="Sunamganj, Sylhet"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Type</label>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="Medical Camp / Food Drive / Training"
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'upcoming' | 'ongoing' | 'completed' })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white capitalize"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing Live</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Volunteer Slots</label>
              <input
                type="number"
                value={formData.volunteer_slots}
                onChange={(e) => setFormData({ ...formData, volunteer_slots: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Cover Image URL</label>
              <input
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Description (English)</label>
            <textarea
              rows={3}
              value={formData.description_en}
              onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
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
              Save Event
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
