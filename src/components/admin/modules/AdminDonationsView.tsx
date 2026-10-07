import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Search, 
  Trash2, 
  FileText, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Receipt,
  Eye
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { DonationTableRow } from '../../../types';
import { 
  adminGetDonations, 
  adminCreateDonation, 
  adminDeleteDonation, 
  exportDonationsToCSV 
} from '../../../api/admin/adminDonationApi';
import { AdminCard } from '../common/AdminCard';
import { AdminModal } from '../common/AdminModal';
import { ConfirmDeleteModal } from '../common/ConfirmDeleteModal';

export const AdminDonationsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [donations, setDonations] = useState<DonationTableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('all');

  // Modals
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState<DonationTableRow | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DonationTableRow | null>(null);

  // New Donation Form
  const [formData, setFormData] = useState({
    donor_name: '',
    campaign_id: 'camp-1',
    campaign_title_en: 'Emergency Sylhet & Feni Flood Relief',
    campaign_title_bn: 'জরুরি সিলেট ও ফেনী বন্যা ত্রাণ',
    amount: 10000,
    currency: 'BDT',
    payment_method: 'bKash',
    trx_id: 'BK9920199',
    is_anonymous: false,
    tax_exemption_requested: true
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetDonations();
      setDonations(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    const csvContent = exportDonationsToCSV(filtered);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `humanity-first-donations-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.donor_name || !formData.amount) return;

    try {
      await adminCreateDonation(formData);
      setIsCreateOpen(false);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await adminDeleteDonation(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = donations.filter(d => {
    const matchesSearch = d.donor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.trx_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.campaign_title_en.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPayment = paymentFilter === 'all' || d.payment_method.toLowerCase() === paymentFilter.toLowerCase();
    return matchesSearch && matchesPayment;
  });

  const totalFilteredSum = filtered.reduce((acc, curr) => acc + (curr.currency === 'USD' ? curr.amount * 120 : curr.amount), 0);

  return (
    <div className="space-y-6">
      {/* Header with Export & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'ডোনেশন ট্রানজেকশন খাতা' : 'Donations & Transactions Log'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'প্রাপ্ত অনলাইন ও অফলাইন অনুদানের তালিকা ও ট্যাক্স এক্সেমপশন রশিদ' : 'Track verified donor transactions, download CSV reports and issue receipts'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{isBn ? 'ম্যানুয়াল এন্ট্রি' : 'Add Donation'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isBn ? 'দাতার নাম, ট্রানজেকশন ID বা ক্যাম্পেইন খুঁজুন...' : 'Search by donor name, TRX ID, or campaign...'}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-white"
          />
        </div>

        <select
          value={paymentFilter}
          onChange={(e) => setPaymentFilter(e.target.value)}
          className="px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-white shrink-0"
        >
          <option value="all">{isBn ? 'সকল পেমেন্ট মেথড' : 'All Payment Methods'}</option>
          <option value="bkash">bKash</option>
          <option value="nagad">Nagad</option>
          <option value="bank transfer">Bank Transfer</option>
          <option value="card / paypal">Card / PayPal</option>
        </select>
      </div>

      {/* Summary Banner */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs">
        <span className="font-semibold text-emerald-800 dark:text-emerald-300">
          Showing <span className="font-bold">{filtered.length}</span> transactions
        </span>
        <span className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">
          Total: ৳ {totalFilteredSum.toLocaleString()} BDT
        </span>
      </div>

      {/* Donations Table */}
      <AdminCard>
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">Loading donations...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">No donations found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Donor & Date</th>
                  <th className="pb-3 font-semibold">Campaign</th>
                  <th className="pb-3 font-semibold">Method & TRX ID</th>
                  <th className="pb-3 font-semibold">Tax Exemption</th>
                  <th className="pb-3 font-semibold text-right">Amount</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    {/* Donor & Date */}
                    <td className="py-3.5 pr-4">
                      <div className="font-bold text-slate-900 dark:text-white">
                        {item.donor_name}
                        {item.is_anonymous && (
                          <span className="ml-1.5 text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded">
                            Anon
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.created_at || 'Recent'}</div>
                    </td>

                    {/* Campaign */}
                    <td className="py-3.5 pr-4 max-w-[200px]">
                      <div className="text-slate-700 dark:text-slate-200 font-medium truncate">{item.campaign_title_en}</div>
                    </td>

                    {/* Method & TRX ID */}
                    <td className="py-3.5 pr-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{item.payment_method}</div>
                      <div className="font-mono text-[10px] text-slate-400">{item.trx_id}</div>
                    </td>

                    {/* Tax Exemption */}
                    <td className="py-3.5 pr-4">
                      {item.tax_exemption_requested ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3" /> 84C Eligible
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400">Not requested</span>
                      )}
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 text-right font-bold text-emerald-600 dark:text-emerald-400">
                      {item.currency} {item.amount.toLocaleString()}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedReceipt(item)}
                          className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                          title="View Official Receipt"
                        >
                          <Receipt className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
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

      {/* View Receipt Modal */}
      <AdminModal
        isOpen={Boolean(selectedReceipt)}
        onClose={() => setSelectedReceipt(null)}
        title="Official Donation Receipt Preview"
        maxWidth="lg"
      >
        {selectedReceipt && (
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-4 font-mono">
            <div className="text-center border-b pb-3 border-slate-200 dark:border-slate-700">
              <div className="font-bold text-base text-slate-900 dark:text-white">HUMANITY FIRST BANGLADESH</div>
              <div className="text-[10px] text-slate-500">NGO Affairs Bureau Reg: 1422 • Section 84C Tax Exempted</div>
              <div className="font-bold text-emerald-600 mt-1">DONATION RECEIPT #{selectedReceipt.id}</div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Donor:</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedReceipt.donor_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Campaign:</span>
                <span className="font-bold text-slate-800 dark:text-white truncate max-w-[250px]">{selectedReceipt.campaign_title_en}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount:</span>
                <span className="font-bold text-emerald-600 text-sm">{selectedReceipt.currency} {selectedReceipt.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Gateway:</span>
                <span className="font-bold">{selectedReceipt.payment_method} ({selectedReceipt.trx_id})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date Issued:</span>
                <span>{selectedReceipt.created_at}</span>
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-700">
              This is a digitally generated tax exemption receipt. Humanity First BD appreciates your sincere contribution.
            </div>
          </div>
        )}
      </AdminModal>

      {/* Manual Donation Modal */}
      <AdminModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Add Manual Offline / Bank Donation"
        maxWidth="md"
      >
        <form onSubmit={handleCreateDonation} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Donor Name *</label>
            <input
              type="text"
              required
              value={formData.donor_name}
              onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
              placeholder="e.g. Al-Haj Shafiqul Islam"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Amount *</label>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              >
                <option value="BDT">BDT (৳)</option>
                <option value="USD">USD ($)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Payment Method</label>
            <select
              value={formData.payment_method}
              onChange={(e) => setFormData({ ...formData, payment_method: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            >
              <option value="Bank Transfer">Bank Transfer (Brac/City/IBBL)</option>
              <option value="bKash">bKash Merchant</option>
              <option value="Nagad">Nagad Merchant</option>
              <option value="Cash / Cheque">Cash / Cheque</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Transaction ID / Bank Reference</label>
            <input
              type="text"
              value={formData.trx_id}
              onChange={(e) => setFormData({ ...formData, trx_id: e.target.value })}
              placeholder="e.g. BRAC-CHQ-104992"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
            />
          </div>

          <div className="flex items-center gap-4 pt-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.tax_exemption_requested}
                onChange={(e) => setFormData({ ...formData, tax_exemption_requested: e.target.checked })}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              Tax Exemption Receipt
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_anonymous}
                onChange={(e) => setFormData({ ...formData, is_anonymous: e.target.checked })}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              Keep Anonymous
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsCreateOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0D6E4F] hover:bg-[#0B5B41] rounded-lg shadow-xs"
            >
              Save Donation Record
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        itemName={`Donation from ${deleteTarget?.donor_name} (${deleteTarget?.currency} ${deleteTarget?.amount})`}
      />
    </div>
  );
};
