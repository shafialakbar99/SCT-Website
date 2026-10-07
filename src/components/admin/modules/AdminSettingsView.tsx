import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Save, 
  RefreshCw, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  AlertTriangle,
  Database,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SiteConfigTableRow } from '../../../types';
import { adminGetSiteSettings, adminUpdateSiteSettings, adminResetDatabaseToDefaults } from '../../../api/admin/adminSettingsApi';
import { AdminCard } from '../common/AdminCard';

export const AdminSettingsView: React.FC = () => {
  const { isBn } = useLanguage();
  const [config, setConfig] = useState<SiteConfigTableRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await adminGetSiteSettings();
      setConfig(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!config) return;

    try {
      await adminUpdateSiteSettings(config);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetDb = async () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset the database to factory seed data? All temporary custom records will be restored to initial defaults.'
    );
    if (!confirmReset) return;

    setResetting(true);
    try {
      await adminResetDatabaseToDefaults();
      alert('Database successfully reset to defaults.');
      window.location.reload();
    } catch (err) {
      console.error(err);
    } finally {
      setResetting(false);
    }
  };

  if (loading || !config) {
    return (
      <div className="py-12 text-center text-slate-400 text-xs">Loading site configurations...</div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {isBn ? 'সাইট কনফিগারেশন ও সেটিংস' : 'Site Configuration & Settings'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isBn ? 'জরুরি ব্যানার, এনজিও ব্যুরো লাইসেন্স, হেল্পলাইন নম্বর ও ডেটাবেজ ম্যানেজমেন্ট' : 'Configure emergency banners, official contact endpoints, legal registrations and data'}
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>{isBn ? 'পরিবর্তন সংরক্ষণ করুন' : 'Save Changes'}</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Settings successfully updated across the website.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Emergency Alert Banner */}
        <AdminCard title="Emergency Alert Banner (Site-wide Ribbon)">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-white">Show Emergency Alert Bar on Top</label>
                <p className="text-[11px] text-slate-400">Displays a prominent top banner across all pages with urgent disaster notice.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.emergency_banner_active}
                  onChange={(e) => setConfig({ ...config, emergency_banner_active: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Banner Text (English)</label>
                <input
                  type="text"
                  value={config.emergency_banner_text_en}
                  onChange={(e) => setConfig({ ...config, emergency_banner_text_en: e.target.value })}
                  placeholder="e.g. Flash Flood Emergency: Donate hot meals and clean water now."
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Banner Text (বাংলা)</label>
                <input
                  type="text"
                  value={config.emergency_banner_text_bn}
                  onChange={(e) => setConfig({ ...config, emergency_banner_text_bn: e.target.value })}
                  placeholder="আকস্মিক বন্যা দুর্গতদের জন্য জরুরি খাবার ও বিশুদ্ধ পানি নিশ্চিত করুন।"
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </AdminCard>

        {/* Legal & Registrations */}
        <AdminCard title="NGO Affairs Bureau & Tax Registration">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">NGO Affairs Bureau Reg No</label>
              <input
                type="text"
                value={config.ngo_reg_number}
                onChange={(e) => setConfig({ ...config, ngo_reg_number: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Tax Exemption Section</label>
              <input
                type="text"
                value={config.tax_exemption_info}
                onChange={(e) => setConfig({ ...config, tax_exemption_info: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Helpline Phone</label>
              <input
                type="text"
                value={config.helpline_phone}
                onChange={(e) => setConfig({ ...config, helpline_phone: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>
          </div>
        </AdminCard>

        {/* Official Contacts */}
        <AdminCard title="Official Office Address & Contact Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Official Email</label>
              <input
                type="email"
                value={config.contact_email}
                onChange={(e) => setConfig({ ...config, contact_email: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Head Office Address (English)</label>
              <input
                type="text"
                value={config.address_en}
                onChange={(e) => setConfig({ ...config, address_en: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </AdminCard>

        {/* Database Utilities */}
        <AdminCard title="Database Maintenance & Factory Reset">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl border border-rose-200/50 dark:border-rose-900/30">
            <div>
              <h4 className="text-xs font-bold text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" /> Factory Reset Local Repository
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Clears modified entities and restores original seed data for all 12 modules.
              </p>
            </div>

            <button
              type="button"
              onClick={handleResetDb}
              disabled={resetting}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
            >
              {resetting ? 'Resetting...' : 'Reset to Factory Defaults'}
            </button>
          </div>
        </AdminCard>
      </form>
    </div>
  );
};
