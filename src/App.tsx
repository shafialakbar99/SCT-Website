import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';

// Public Pages
import { Home } from './pages/public/Home';
import { DonatePage } from './pages/public/DonatePage';
import { DonorsPage } from './pages/public/DonorsPage';
import { AboutPage } from './pages/public/AboutPage';
import { PurposePage } from './pages/public/PurposePage';
import { PillarsPage } from './pages/public/PillarsPage';
import { SpusProjectPage } from './pages/public/SpusProjectPage';
import { StrategyPage } from './pages/public/StrategyPage';
import { WhyJoinUsPage } from './pages/public/WhyJoinUsPage';
import { ResourcesPage } from './pages/public/ResourcesPage';
import { MissionVisionPage } from './pages/public/MissionVisionPage';
import { ChairmanPage } from './pages/public/ChairmanPage';
import { CeoPage } from './pages/public/CeoPage';
import { BoardPage } from './pages/public/BoardPage';
import { StaffPage } from './pages/public/StaffPage';
import { ZakatCalculatorPage } from './pages/public/ZakatCalculatorPage';
import { CampaignsPage } from './pages/public/CampaignsPage';
import { CampaignDetailPage } from './pages/public/CampaignDetailPage';
import { PhotoGalleryPage } from './pages/public/PhotoGalleryPage';
import { VideoGalleryPage } from './pages/public/VideoGalleryPage';
import { BlogPage } from './pages/public/BlogPage';
import { BlogDetailPage } from './pages/public/BlogDetailPage';
import { NewsPage } from './pages/public/NewsPage';
import { NewsDetailPage } from './pages/public/NewsDetailPage';
import { SponsorPage } from './pages/public/SponsorPage';
import { TransparencyPage } from './pages/public/TransparencyPage';
import { VolunteerPage } from './pages/public/VolunteerPage';
import { EventsPage } from './pages/public/EventsPage';
import { EventDetailPage } from './pages/public/EventDetailPage';
import { ContactPage } from './pages/public/ContactPage';

// Admin Pages
import { AdminPage } from './pages/admin/AdminPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// App Content Wrapper with conditional Header/Footer for Admin Portal
function AppContent() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 font-sans antialiased selection:bg-[#0D6E4F] selection:text-white">
      {/* Header with Search Modal Trigger */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Area */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/purpose" element={<PurposePage />} />
          <Route path="/pillars" element={<PillarsPage />} />
          <Route path="/spus" element={<SpusProjectPage />} />
          <Route path="/projects/spus" element={<SpusProjectPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/join-us" element={<WhyJoinUsPage />} />
          <Route path="/get-involved" element={<WhyJoinUsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/mission" element={<MissionVisionPage />} />
          <Route path="/vision" element={<MissionVisionPage />} />
          <Route path="/leadership/chairman" element={<ChairmanPage />} />
          <Route path="/chairman" element={<ChairmanPage />} />
          <Route path="/leadership/ceo" element={<CeoPage />} />
          <Route path="/ceo" element={<CeoPage />} />
          <Route path="/leadership/board" element={<BoardPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/team" element={<StaffPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/zakat-calculator" element={<ZakatCalculatorPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/:slug" element={<CampaignDetailPage />} />
          <Route path="/gallery/photos" element={<PhotoGalleryPage />} />
          <Route path="/gallery/videos" element={<VideoGalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AdminAuthProvider>
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </AdminAuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
