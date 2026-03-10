import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import { OtherLocations } from './camp/other-locations.jsx';
import { CampFooter } from './camp/footer.jsx';
import { FloatingCTA } from './camp/floating-cta.jsx';

const SummerCampPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Flowternity Summer Sports Camp 2026",
    "description": "Multi-sport summer camp 2026 featuring basketball, futsal, skating, skateboarding, calisthenics, and karate for kids and teens",
    "url": "https://join.sportomic.com/flowternity-sports/summer-camp",
    "location": {
      "@type": "Place",
      "name": "Flowternity Sports Facility",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
      }
    },
    "startDate": "2026-05-01",
    "endDate": "2026-07-31",
    "offers": {
      "@type": "Offer",
      "price": "4999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Flowternity Sports",
      "url": "https://join.sportomic.com/flowternity-sports"
    }
  };

  return (
    <>
      <Helmet>
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/favicon camp.jpeg" />
        <link rel="apple-touch-icon" href="/favicon camp.jpeg" />

        {/* Primary Meta Tags */}
        <title>Summer Camp 2026 | Flowternity Multi-Sport Facility Bangalore</title>
        <meta name="description" content="Join Flowternity's exciting summer camp 2026! Basketball, futsal, skating, skateboarding, calisthenics & karate. International standard facilities. Ages 6-16. Register now!" />
        <meta name="keywords" content="summer camp 2026, sports camp 2026 Bangalore, summer camp Bangalore 2026, kids summer camp 2026, basketball camp 2026, futsal training 2026, skating classes 2026, skateboarding lessons 2026, calisthenics for children 2026, karate classes 2026, multi-sport camp 2026, Bangalore summer activities 2026, summer sports camp 2026" />
        <meta name="author" content="Flowternity Sports" />
        <link rel="canonical" href="https://join.sportomic.com/flowternity-sports/summer-camp" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Summer Camp 2026 | Flowternity Multi-Sport Facility" />
        <meta property="og:description" content="Join Flowternity's exciting summer camp 2026! Basketball, futsal, skating, skateboarding, calisthenics & karate. International standard facilities. Ages 6-16." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://join.sportomic.com/flowternity-sports/summer-camp" />
        <meta property="og:image" content="https://playverseproduction.blob.core.windows.net/venue-logos/venue-logos/1762528502281-Logo_Basketball.jpg.jpg" />
        <meta property="og:image:alt" content="Flowternity Summer Camp 2026 - Multi-sport facility for kids" />
        <meta property="og:site_name" content="Flowternity Sports" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Summer Camp 2026 | Flowternity Multi-Sport Facility" />
        <meta name="twitter:description" content="Join Flowternity's exciting summer camp 2026! Basketball, futsal, skating, skateboarding & more. Register now!" />
        <meta name="twitter:image" content="https://playverseproduction.blob.core.windows.net/venue-logos/venue-logos/1762528502281-Logo_Basketball.jpg.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="ICBM" content="12.9716,77.5946" />
        <meta name="date" content="2026-05-01" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
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
        <OtherLocations />
        <CampFooter />
        <FloatingCTA />
      </main>
    </>
  );
};

export default SummerCampPage;
