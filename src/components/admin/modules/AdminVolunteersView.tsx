import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye, 
  Trash2, 
  Download, 
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VolunteerTableRow } from '../../../types';
import { 
  adminGetVolunteers, 
  adminUpdateVolunteerStatus, 
  adminDeleteVolunteer 
} from '../../../api/admin/adminVolunteerApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';

export const AdminVolunteersView: React.FC = () => {
  const { isBn } = useLanguage();
  const [volunteers, setVolunteers] = useState<VolunteerTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modals
  const [selectedVolunteer, setSelectedVolunteer] = useState<VolunteerTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<VolunteerTableRow | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetVolunteers();
      setVolunteers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, status: 'approved' | 'rejected' | 'pending') => {
    try {
      await adminUpdateVolunteerStatus(id, status);
      if (selectedVolunteer && selectedVolunteer.id === id) {
        setSelectedVolunteer({ ...selectedVolunteer, status });
      }
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await adminDeleteVolunteer(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'District', 'Availability', 'Status', 'Applied At'];
    const rows = filtered.map(v => [
      v.id,
      `"${v.name}"`,
      `"${v.email}"`,
      `"${v.phone}"`,
      `"${v.district}"`,
      `"${v.availability}"`,
      v.status,
      v.created_at || ''
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `volunteers-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = volunteers.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.phone.includes(searchQuery) ||
                          v.district.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ভলান্টিয়ার আবেদন ব্যবস্থাপনা' : 'Volunteer Applications'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'স্বেচ্ছাসেবক নিবন্ধন তালিকা, পর্যালোচনা এবং তাৎক্ষণিক অনুমোদন' : 'Review applicant credentials, skills, availability and approve team members'}
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
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
            placeholder="Search applicants by name, email, phone, or district..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white shrink-0"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending Review</option>
          <option value="approved">Approved Volunteers</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading applicants...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No volunteer applicants found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Applicant & Date</th>
                  <th className="pb-3 font-semibold">Contact & District</th>
                  <th className="pb-3 font-semibold">Availability & Skills</th>
                  <th className="pb-3 font-semibold text-center">Status</th>
                  <th className="pb-3 font-semibold text-right">Review Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    {/* Applicant */}
                    <td className="py-3.5 pr-4">
                      <div className="font-bold text-slate-900 dark:text-white text-xs">{item.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.created_at || 'Recent'}</div>
                    </td>

                    {/* Contact & District */}
                    <td className="py-3.5 pr-4">
                      <div className="text-slate-800 dark:text-slate-200">{item.phone}</div>
                      <div className="text-[11px] text-slate-500">{item.district} • {item.email}</div>
                    </td>

                    {/* Availability */}
                    <td className="py-3.5 pr-4">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-[10px]">
                        {item.availability}
                      </span>
                      <div className="text-[10px] text-slate-400 truncate max-w-[150px] mt-0.5">{item.skills}</div>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-2 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold capitalize ${
                        item.status === 'approved'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : item.status === 'rejected'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {item.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedVolunteer(item)}
                          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                          title="View Full Application"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'approved')}
                          className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                          title="Approve Volunteer"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'rejected')}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          title="Reject Application"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          title="Delete Record"
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

      {/* View Applicant Detail Modal */}
      <AdminModal
        isOpen={Boolean(selectedVolunteer)}
        onClose={() => setSelectedVolunteer(null)}
        title="Volunteer Application Dossier"
        maxWidth="lg"
      >
        {selectedVolunteer && (
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{selectedVolunteer.name}</h3>
                <p className="text-slate-500">{selectedVolunteer.district}, Bangladesh</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
                selectedVolunteer.status === 'approved'
                  ? 'bg-emerald-100 text-emerald-700'
                  : selectedVolunteer.status === 'rejected'
                  ? 'bg-rose-100 text-rose-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {selectedVolunteer.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
              <div>
                <span className="text-slate-400 block text-[10px]">Email Address:</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selectedVolunteer.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Phone Number:</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selectedVolunteer.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Availability:</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selectedVolunteer.availability}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Date Applied:</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selectedVolunteer.created_at || 'Recent'}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-500 font-bold block mb-1">Key Skills & Experience:</span>
              <p className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300">
                {selectedVolunteer.skills || 'General relief volunteer and logistics support.'}
              </p>
            </div>

            <div>
              <span className="text-slate-500 font-bold block mb-1">Motivation / Why join Humanity First:</span>
              <p className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 italic">
                "{selectedVolunteer.motivation || 'Dedicated to serving marginalized communities in flood and emergency relief operations across Bangladesh.'}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedVolunteer.id, 'approved')}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5" /> Approve Volunteer
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedVolunteer.id, 'rejected')}
                  className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <XCircle className="w-3.5 h-3.5" /> Reject
                </button>
              </div>

              <button
                onClick={() => setSelectedVolunteer(null)}
                className="px-4 py-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </AdminModal>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={`Applicant: ${deleteTarget?.name}`}
      />
    </div>
  );
};
