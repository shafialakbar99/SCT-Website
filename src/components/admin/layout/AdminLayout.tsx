import React, { useState, useEffect } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminNavbar } from './AdminNavbar';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import { adminGetDashboardMetrics } from '../../../api/admin/adminDashboardApi';

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, pageTitle }) => {
  const { isAuthenticated } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingVolunteersCount, setPendingVolunteersCount] = useState(0);
  const [activeCampaignsCount, setActiveCampaignsCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      adminGetDashboardMetrics().then(metrics => {
        setPendingVolunteersCount(metrics.pendingVolunteersCount);
        setActiveCampaignsCount(metrics.activeCampaignsCount);
      }).catch(err => console.error(err));
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onCloseMobile={() => setSidebarOpen(false)}
        pendingVolunteersCount={pendingVolunteersCount}
        activeCampaignsCount={activeCampaignsCount}
      />

      {/* Main Wrapper with left margin for desktop sidebar */}
      <div className="lg:pl-72 flex flex-col flex-1 min-w-0 transition-all duration-300">
        {/* Top Navbar */}
        <AdminNavbar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          title={pageTitle}
        />

        {/* Content Outlet */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
