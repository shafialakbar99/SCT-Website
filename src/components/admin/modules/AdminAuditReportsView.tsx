import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Search, Download } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { AuditReportTableRow } from '../../../types';
import { 
  adminGetAuditReports, 
  adminCreateAuditReport, 
  adminUpdateAuditReport, 
  adminDeleteAuditReport 
} from '../../../api/admin/adminAuditApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';

export const AdminAuditReportsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [reports, setReports] = useState<AuditReportTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AuditReportTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<AuditReportTableRow | null>(null);

  // Form
  const [formData, setFormData] = useState({
    year_str: '2025-2026',
    title_en: '',
    title_bn: '',
    auditor_name: 'Rahman Rahman Huq (KPMG Bangladesh)',
    pdf_url: 'https://humanityfirstbd.org/audits/annual-audit-2025.pdf',
    file_size: '2.4 MB',
    summary_en: 'Comprehensive statutory audit report verifying 100% compliance and zero financial leakage.',
    summary_bn: 'শতভাগ স্বচ্ছতা এবং জিরো লিকেজ নিশ্চিতকারী স্বাধীন সংবিধিবদ্ধ অডিট প্রতিবেদন।'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetAuditReports();
      setReports(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      year_str: '2025-2026',
      title_en: 'Annual Statutory Audit Report 2025-2026',
      title_bn: 'বার্ষিক সংবিধিবদ্ধ অডিট প্রতিবেদন ২০২৫-২০২৬',
      auditor_name: 'Rahman Rahman Huq (KPMG Bangladesh)',
      pdf_url: 'https://humanityfirstbd.org/audits/annual-audit-2025.pdf',
      file_size: '3.1 MB',
      summary_en: 'Full independent financial audit verifying funds allocation and receipts.',
      summary_bn: 'তহবিল বণ্টন এবং ব্যয়ের শতভাগ স্বচ্ছতা সম্বলিত স্বাধীন নিরীক্ষা প্রতিবেদন।'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: AuditReportTableRow) => {
    setEditingItem(item);
    setFormData({
      year_str: item.year_str || '',
      title_en: item.title_en || '',
      title_bn: item.title_bn || '',
      auditor_name: item.auditor_name || '',
      pdf_url: item.pdf_url || '',
      file_size: item.file_size || '2.0 MB',
      summary_en: item.summary_en || '',
      summary_bn: item.summary_bn || ''
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title_en || !formData.pdf_url) return;

    try {
      if (editingItem) {
        await adminUpdateAuditReport(editingItem.id, formData);
      } else {
        await adminCreateAuditReport(formData);
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
      await adminDeleteAuditReport(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = reports.filter(r =>
    r.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.year_str.includes(searchQuery) ||
    r.auditor_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'বার্ষিক অডিট ও আর্থিক প্রতিবেদন' : 'Audit & Financial Reports'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'এনজিও ব্যুরো ও স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্ট ফার্মের নিরীক্ষা প্রতিবেদন প্রকাশ' : 'Manage statutory financial audit PDF reports, auditor firms, and annual statements'}
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isBn ? 'নতুন অডিট রিপোর্ট যোগ করুন' : 'Upload Audit Report'}</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by financial year, title, or chartered auditor..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
        />
      </div>

      {/* Table */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading audit reports...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No audit reports found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Financial Year & Title</th>
                  <th className="pb-3 font-semibold">Chartered Auditor</th>
                  <th className="pb-3 font-semibold">Summary Notes</th>
                  <th className="pb-3 font-semibold">File Document</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    {/* Financial Year & Title */}
                    <td className="py-3.5 pr-4">
                      <span className="font-mono text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                        FY {item.year_str}
                      </span>
                      <div className="font-bold text-slate-900 dark:text-white text-xs mt-1">{item.title_en}</div>
                      <div className="text-[11px] text-slate-400">{item.title_bn}</div>
                    </td>

                    {/* Chartered Auditor */}
                    <td className="py-3.5 pr-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{item.auditor_name}</div>
                    </td>

                    {/* Summary */}
                    <td className="py-3.5 pr-4 max-w-xs">
                      <p className="text-slate-600 dark:text-slate-300 truncate">{item.summary_en}</p>
                    </td>

                    {/* File Document */}
                    <td className="py-3.5 pr-4">
                      <a
                        href={item.pdf_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 font-mono text-[10px]"
                      >
                        <Download className="w-3 h-3" /> PDF ({item.file_size})
                      </a>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer"
                          title="Edit Audit Report"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
                          title="Delete Audit Report"
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
        title={editingItem ? 'Edit Audit Report' : 'Upload New Audit Report Record'}
        maxWidth="xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Financial Year *</label>
              <input
                type="text"
                required
                value={formData.year_str}
                onChange={(e) => setFormData({ ...formData, year_str: e.target.value })}
                placeholder="2025-2026"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">File Size *</label>
              <input
                type="text"
                required
                value={formData.file_size}
                onChange={(e) => setFormData({ ...formData, file_size: e.target.value })}
                placeholder="3.2 MB"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (English) *</label>
              <input
                type="text"
                required
                value={formData.title_en}
                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title (Bangla) *</label>
              <input
                type="text"
                required
                value={formData.title_bn}
                onChange={(e) => setFormData({ ...formData, title_bn: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Chartered Auditor Firm Name *</label>
            <input
              type="text"
              required
              value={formData.auditor_name}
              onChange={(e) => setFormData({ ...formData, auditor_name: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Report PDF Download URL *</label>
            <input
              type="url"
              required
              value={formData.pdf_url}
              onChange={(e) => setFormData({ ...formData, pdf_url: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-mono text-[11px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Summary (English)</label>
              <textarea
                rows={2}
                value={formData.summary_en}
                onChange={(e) => setFormData({ ...formData, summary_en: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Summary (Bangla)</label>
              <textarea
                rows={2}
                value={formData.summary_bn}
                onChange={(e) => setFormData({ ...formData, summary_bn: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold text-white bg-[#0D6E4F] hover:bg-[#0B5B41] rounded-xl shadow-xs cursor-pointer"
            >
              {editingItem ? 'Save Changes' : 'Upload Report'}
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Audit Report"
        description={`Are you sure you want to permanently delete the audit report for FY ${deleteTarget?.year_str}? This action cannot be undone.`}
      />
    </div>
  );
};
