import React from 'react';
import { HomeHero } from '../../components/public/home/HomeHero';
import { ImpactCounters } from '../../components/public/home/ImpactCounters';
import { ShortIntroSection } from '../../components/public/home/ShortIntroSection';
import { WhoWeAreSection } from '../../components/public/home/WhoWeAreSection';
import { OurPurposeSection } from '../../components/public/home/OurPurposeSection';
import { FivePillarsSection } from '../../components/public/home/FivePillarsSection';
import { FirstProjectSection } from '../../components/public/home/FirstProjectSection';
import { ChairpersonMessageSection } from '../../components/public/home/ChairpersonMessageSection';
import { TransparencySection } from '../../components/public/home/TransparencySection';
import { WhyJoinUsSection } from '../../components/public/home/WhyJoinUsSection';
import { GetInvolvedSection } from '../../components/public/home/GetInvolvedSection';
import { UpcomingEventsSection } from '../../components/public/home/UpcomingEventsSection';
import { PressNewsSection } from '../../components/public/home/PressNewsSection';
import { FieldStoriesBlogSection } from '../../components/public/home/FieldStoriesBlogSection';
import { GalleryHighlights } from '../../components/public/home/GalleryHighlights';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* 1. Hero Slider Section */}
      <HomeHero />

      {/* 2. Impact Numbers Section */}
      <ImpactCounters />

      {/* 13. Press & News Section */}
      <PressNewsSection />

      {/* 3. Short Introduction Section */}
      <ShortIntroSection />

      {/* 4. Who We Are Section */}
      <WhoWeAreSection />

      {/* 5. Our Purpose Section 
      <OurPurposeSection />
      */}
      
      {/* 15. Video and Image Gallery Section */}
      <GalleryHighlights />

      {/* 6. Five Pillars Section */}
      <FivePillarsSection />

      {/* 7. Project (SPUS Satarkul) Section */}
      <FirstProjectSection />

      {/* 8. Message from Chairperson Section */}
      <ChairpersonMessageSection />

      {/* 9. Strategic Governance & Transparent Financial Operations Section */}
      <TransparencySection />

      {/* 10. Why Join Us Section */}
      <WhyJoinUsSection />

      {/* 11. Get Involved Section */}
      <GetInvolvedSection />

      {/* 12. Upcoming Events Section */}
      <UpcomingEventsSection />

      {/* 14. Field Stories & Blog Section */}
      <FieldStoriesBlogSection />      
    </main>
  );
};
