import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { ImpactCounters } from '../components/home/ImpactCounters';
import { UrgentCampaigns } from '../components/home/UrgentCampaigns';
import { FeaturedDonorsSection } from '../components/home/FeaturedDonorsSection';
import { SponsorshipCarousel } from '../components/home/SponsorshipCarousel';
import { GalleryHighlights } from '../components/home/GalleryHighlights';
import { TransparencySection } from '../components/home/TransparencySection';
import { BlogNewsHighlights } from '../components/home/BlogNewsHighlights';
import { VolunteerCallout } from '../components/home/VolunteerCallout';

export const Home: React.FC = () => {
  return (
    <main>
      <HomeHero />
      <ImpactCounters />
      <UrgentCampaigns />
      <FeaturedDonorsSection />
      <SponsorshipCarousel />
      <GalleryHighlights />
      <TransparencySection />
      <BlogNewsHighlights />
      <VolunteerCallout />
    </main>
  );
};
