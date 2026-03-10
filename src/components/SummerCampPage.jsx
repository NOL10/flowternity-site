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
import { CampFooter } from './camp/footer.jsx';
import { FloatingCTA } from './camp/floating-cta.jsx';

const SummerCampPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Flowternity Summer Sports Camp",
    "description": "Multi-sport summer camp featuring basketball, futsal, skating, skateboarding, calisthenics, and karate for kids and teens",
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
    "startDate": "2024-05-01",
    "endDate": "2024-07-31",
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
        {/* Primary Meta Tags */}
        <title>Summer Sports Camp 2024 | Flowternity Multi-Sport Facility Bangalore</title>
        <meta name="description" content="Join Flowternity's exciting summer sports camp! Basketball, futsal, skating, skateboarding, calisthenics & karate. International standard facilities. Ages 6-16. Register now!" />
        <meta name="keywords" content="summer camp Bangalore, sports camp for kids, basketball camp, futsal training, skating classes, skateboarding lessons, calisthenics for children, karate classes, multi-sport camp, Bangalore sports activities" />
        <meta name="author" content="Flowternity Sports" />
        <link rel="canonical" href="https://join.sportomic.com/flowternity-sports/summer-camp" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Summer Sports Camp 2024 | Flowternity Multi-Sport Facility" />
        <meta property="og:description" content="Join Flowternity's exciting summer sports camp! Basketball, futsal, skating, skateboarding, calisthenics & karate. International standard facilities. Ages 6-16." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://join.sportomic.com/flowternity-sports/summer-camp" />
        <meta property="og:image" content="https://playverseproduction.blob.core.windows.net/venue-logos/venue-logos/1762528502281-Logo_Basketball.jpg.jpg" />
        <meta property="og:image:alt" content="Flowternity Summer Sports Camp - Multi-sport facility for kids" />
        <meta property="og:site_name" content="Flowternity Sports" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Summer Sports Camp 2024 | Flowternity Multi-Sport Facility" />
        <meta name="twitter:description" content="Join Flowternity's exciting summer sports camp! Basketball, futsal, skating, skateboarding & more. Register now!" />
        <meta name="twitter:image" content="https://playverseproduction.blob.core.windows.net/venue-logos/venue-logos/1762528502281-Logo_Basketball.jpg.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="ICBM" content="12.9716,77.5946" />

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
        <CampFooter />
        <FloatingCTA />
      </main>
    </>
  );
};

export default SummerCampPage;
