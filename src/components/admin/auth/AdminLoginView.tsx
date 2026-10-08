import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowRight, Eye, EyeOff, KeyRound, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import { useLanguage } from '../../../context/LanguageContext';

export const AdminLoginView: React.FC = () => {
  const { login } = useAdminAuth();
  const { isBn } = useLanguage();
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(pin);
    if (!success) {
      setError(isBn ? 'ভুল পিন কোড! ডেমো পিন: 1234' : 'Incorrect security PIN! Try default demo PIN: 1234');
    }
  };

  const handleQuickDemo = () => {
    setPin('1234');
    login('1234');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Header Icon */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-[#0D6E4F] dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner border border-emerald-200/60 dark:border-emerald-800/40">
            <ShieldCheck className="w-8 h-8 text-[#0D6E4F] dark:text-emerald-400" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {isBn ? 'শাহীন কেয়ার্স ট্রাস্ট অ্যাডমিন পোর্টাল' : 'Shaheen Cares Trust Admin'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isBn ? 'এডমিনিস্ট্রেটর ড্যাশবোর্ডে প্রবেশ করতে সিকিউরিটি পিন দিন' : 'Enter administrator credentials or security PIN'}
          </p>
        </div>

        {/* Demo Credentials Info Box */}
        <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/50 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300">
            <KeyRound className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Demo PIN: <strong className="font-mono text-emerald-700 dark:text-emerald-300">1234</strong></span>
          </div>
          <button
            type="button"
            onClick={handleQuickDemo}
            className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 hover:underline"
          >
            One-Click Login
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-2 text-xs">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {isBn ? 'সিকিউরিটি পিন / পাসওয়ার্ড' : 'Security PIN / Password'}
            </label>
            <div className="relative">
              <input
                type={showPin ? 'text' : 'password'}
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••"
                className="w-full px-4 py-3 text-center text-lg font-mono tracking-widest bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D6E4F] text-slate-900 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0D6E4F] hover:bg-[#0B5B41] text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            <span>{isBn ? 'ড্যাশবোর্ডে প্রবেশ করুন' : 'Unlock Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
          Protected with session authentication & NGO audit tracking.
        </div>
      </div>
    </div>
  );
};
