import React from 'react';
import { Menu, Globe, Sun, Moon, LogOut, Bell, ExternalLink } from 'lucide-react';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';

interface AdminNavbarProps {
  onToggleSidebar: () => void;
  title?: string;
}

export const AdminNavbar: React.FC<AdminNavbarProps> = ({ onToggleSidebar, title }) => {
  const { logout, adminUser } = useAdminAuth();
  const { language, toggleLanguage, isBn } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      {/* Left section: Hamburger & Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        {title && (
          <h1 className="font-bold text-slate-800 dark:text-white text-base sm:text-lg hidden sm:block">
            {title}
          </h1>
        )}
      </div>

      {/* Right section: Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
          title="Toggle Language"
        >
          <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
        </button>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>

        {/* Public Website Preview Link */}
        <Link
          to="/"
          target="_blank"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>{isBn ? 'লাইভ ওয়েবসাইট' : 'Live Website'}</span>
        </Link>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block" />

        {/* Admin Profile & Logout */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0D6E4F] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            A
          </div>
          <div className="hidden xl:block text-left">
            <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{adminUser?.name || 'Super Admin'}</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Executive</div>
          </div>
          <button
            onClick={logout}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
