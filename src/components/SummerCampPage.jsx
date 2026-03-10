import React from 'react';
import { CampNavbar } from './camp/navbar.jsx';
import { CampHero } from './camp/hero.jsx';
import { CampSports } from './camp/sports.jsx';
import { CampSchedule } from './camp/schedule.jsx';
import { CampHighlights } from './camp/highlights.jsx';
import { CampFacility } from './camp/facility.jsx';
import { CampTestimonials } from './camp/testimonials.jsx';
import { CampHowItWorks } from './camp/how-it-works.jsx';
import { CampPricing } from './camp/pricing.jsx';
import { CampRegistration } from './camp/registration.jsx';
import { CampContact } from './camp/contact.jsx';
import { CampFooter } from './camp/footer.jsx';
import { FloatingCTA } from './camp/floating-cta.jsx';
import { CampSEO } from './camp/seo.jsx';

const SummerCampPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CampSEO />
      <CampNavbar />
      <CampHero />
      <CampHighlights />
      <CampSports />
      <CampSchedule />
      <CampFacility />
      <CampTestimonials />
      <CampHowItWorks />
      <CampPricing />
      <CampRegistration />
      <CampContact />
      <CampFooter />
      <FloatingCTA />
    </main>
  );
};

export default SummerCampPage;
