import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { AdminLoginView } from '../../components/admin/auth/AdminLoginView';
import { AdminLayout } from '../../components/admin/layout/AdminLayout';

// Module Views
import { AdminDashboardView } from '../../components/admin/modules/AdminDashboardView';
import { AdminCampaignsView } from '../../components/admin/modules/AdminCampaignsView';
import { AdminDonationsView } from '../../components/admin/modules/AdminDonationsView';
import { AdminPhotoGalleryView } from '../../components/admin/modules/AdminPhotoGalleryView';
import { AdminVideoGalleryView } from '../../components/admin/modules/AdminVideoGalleryView';
import { AdminBlogsView } from '../../components/admin/modules/AdminBlogsView';
import { AdminNewsView } from '../../components/admin/modules/AdminNewsView';
import { AdminSponsorshipsView } from '../../components/admin/modules/AdminSponsorshipsView';
import { AdminVolunteersView } from '../../components/admin/modules/AdminVolunteersView';
import { AdminAuditReportsView } from '../../components/admin/modules/AdminAuditReportsView';
import { AdminEventsView } from '../../components/admin/modules/AdminEventsView';
import { AdminFaqsView } from '../../components/admin/modules/AdminFaqsView';
import { AdminLeadershipView } from '../../components/admin/modules/AdminLeadershipView';
import { AdminSettingsView } from '../../components/admin/modules/AdminSettingsView';

export const AdminPage: React.FC = () => {
  const { isAuthenticated } = useAdminAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <AdminLoginView />;
  }

  // Get Page Title from path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('campaigns')) return 'Campaigns Manager';
    if (path.includes('donations')) return 'Donations & Transactions';
    if (path.includes('photo-gallery')) return 'Photo Albums Gallery';
    if (path.includes('video-gallery')) return 'Video Embeds Gallery';
    if (path.includes('blogs')) return 'Field Stories & Articles';
    if (path.includes('news')) return 'News & Press Releases';
    if (path.includes('sponsorships')) return 'Sponsorship & Orphan Care';
    if (path.includes('volunteers')) return 'Volunteer Applications';
    if (path.includes('audit-reports')) return 'Annual Financial & Audit Reports';
    if (path.includes('events')) return 'Events & Relief Drives';
    if (path.includes('faqs')) return 'FAQ Knowledgebase';
    if (path.includes('leadership')) return 'Leadership & Governance Team';
    if (path.includes('settings')) return 'Site Parameters & Settings';
    return 'Admin Dashboard';
  };

  return (
    <AdminLayout pageTitle={getPageTitle()}>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/dashboard" element={<AdminDashboardView />} />
        <Route path="/campaigns" element={<AdminCampaignsView />} />
        <Route path="/donations" element={<AdminDonationsView />} />
        <Route path="/photo-gallery" element={<AdminPhotoGalleryView />} />
        <Route path="/video-gallery" element={<AdminVideoGalleryView />} />
        <Route path="/blogs" element={<AdminBlogsView />} />
        <Route path="/news" element={<AdminNewsView />} />
        <Route path="/sponsorships" element={<AdminSponsorshipsView />} />
        <Route path="/volunteers" element={<AdminVolunteersView />} />
        <Route path="/audit-reports" element={<AdminAuditReportsView />} />
        <Route path="/events" element={<AdminEventsView />} />
        <Route path="/faqs" element={<AdminFaqsView />} />
        <Route path="/leadership" element={<AdminLeadershipView />} />
        <Route path="/settings" element={<AdminSettingsView />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </AdminLayout>
  );
};
