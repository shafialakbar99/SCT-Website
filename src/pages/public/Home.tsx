import React from 'react';
import { HomeHero } from '../../components/public/home/HomeHero';
import { ImpactCounters } from '../../components/public/home/ImpactCounters';
import { UrgentCampaigns } from '../../components/public/home/UrgentCampaigns';
import { FeaturedDonorsSection } from '../../components/public/home/FeaturedDonorsSection';
import { SponsorshipCarousel } from '../../components/public/home/SponsorshipCarousel';
import { GalleryHighlights } from '../../components/public/home/GalleryHighlights';
import { TransparencySection } from '../../components/public/home/TransparencySection';
import { BlogNewsHighlights } from '../../components/public/home/BlogNewsHighlights';
import { VolunteerCallout } from '../../components/public/home/VolunteerCallout';

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
