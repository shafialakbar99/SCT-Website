import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Megaphone,
  HeartHandshake,
  Image,
  Video,
  FileEdit,
  Newspaper,
  GraduationCap,
  Users,
  FileCheck,
  Calendar,
  HelpCircle,
  UserCheck,
  Settings,
  Globe,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import { useLanguage } from '../../../context/LanguageContext';

interface AdminSidebarProps {
  isOpen: boolean;
  onCloseMobile?: () => void;
  pendingVolunteersCount?: number;
  activeCampaignsCount?: number;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  isOpen,
  onCloseMobile,
  pendingVolunteersCount = 0,
  activeCampaignsCount = 0
}) => {
  const { logout, adminUser } = useAdminAuth();
  const { isBn } = useLanguage();

  const navItems = [
    {
      to: '/admin/dashboard',
      label: isBn ? 'ড্যাশবোর্ড ওভারভিউ' : 'Dashboard',
      icon: LayoutDashboard
    },
    {
      to: '/admin/campaigns',
      label: isBn ? 'ক্যাম্পেইন ম্যানেজার' : 'Campaigns',
      icon: Megaphone,
      badge: activeCampaignsCount > 0 ? `${activeCampaignsCount}` : undefined
    },
    {
      to: '/admin/donations',
      label: isBn ? 'ডোনেশন ট্রানজেকশন' : 'Donations Log',
      icon: HeartHandshake
    },
    {
      to: '/admin/photo-gallery',
      label: isBn ? 'ফটো অ্যালবাম' : 'Photo Gallery',
      icon: Image
    },
    {
      to: '/admin/video-gallery',
      label: isBn ? 'ভিডিও গ্যালারি' : 'Video Gallery',
      icon: Video
    },
    {
      to: '/admin/blogs',
      label: isBn ? 'ব্লগ ও ফিল্ড স্টোরি' : 'Articles & Blogs',
      icon: FileEdit
    },
    {
      to: '/admin/news',
      label: isBn ? 'সংবাদ ও প্রেস রিলিজ' : 'News & Press',
      icon: Newspaper
    },
    {
      to: '/admin/sponsorships',
      label: isBn ? 'স্পনসরশিপ প্রোফাইল' : 'Sponsorships',
      icon: GraduationCap
    },
    {
      to: '/admin/volunteers',
      label: isBn ? 'ভলান্টিয়ার আবেদন' : 'Volunteers',
      icon: Users,
      badge: pendingVolunteersCount > 0 ? `${pendingVolunteersCount}` : undefined,
      badgeColor: 'bg-amber-500'
    },
    {
      to: '/admin/audit-reports',
      label: isBn ? 'অডিট ও বার্ষিক রিপোর্ট' : 'Audit Reports',
      icon: FileCheck
    },
    {
      to: '/admin/events',
      label: isBn ? 'ইভেন্ট ও ড্রাইভ' : 'Events & Drives',
      icon: Calendar
    },
    {
      to: '/admin/faqs',
      label: isBn ? 'সাধারণ জিজ্ঞাসা (FAQ)' : 'FAQ Manager',
      icon: HelpCircle
    },
    {
      to: '/admin/leadership',
      label: isBn ? 'নেতৃত্ব ও টিম সদস্য' : 'Leadership & Team',
      icon: UserCheck
    },
    {
      to: '/admin/settings',
      label: isBn ? 'সাইট কনফিগারেশন' : 'Site Settings',
      icon: Settings
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/40">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0D6E4F] to-emerald-400 flex items-center justify-center text-white font-black text-lg shadow-md shadow-emerald-900/30">
              HF
            </div>
            <div>
              <div className="font-bold text-white text-sm tracking-wide flex items-center gap-1.5">
                Humanity First <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono">ADMIN</span>
              </div>
              <div className="text-[11px] text-slate-400">Control Panel v2.0</div>
            </div>
          </Link>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          <div className="px-3 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            {isBn ? 'মডিউল সমুহ' : 'Core Modules'}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                    isActive
                      ? 'bg-[#0D6E4F] text-white shadow-md shadow-emerald-950/50'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-emerald-400'}`} />
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white ${item.badgeColor || 'bg-emerald-600'}`}>
                          {item.badge}
                        </span>
                      )}
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-white/70" />}
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* User Profile & Footer Actions */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 space-y-2">
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                AD
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">{adminUser?.name || 'Administrator'}</div>
                <div className="text-[10px] text-emerald-400 truncate">{adminUser?.role || 'Super Admin'}</div>
              </div>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-xl transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isBn ? 'লাইভ ওয়েবসাইট দেখুন' : 'View Public Website'}</span>
          </Link>
        </div>
      </aside>
    </>
  );
};
