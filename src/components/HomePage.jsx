import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FacilitiesSection from './FacilitiesSection';
import BookVisitBanner from './BookVisitBanner';
import AboutSection from './AboutSection';
import CommunitySection from './CommunitySection';
import ProgramsSection from './ProgramsSection';
import Footer from './Footer';
import BottomNavigation from './BottomNavigation';
import './styles/home-page.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger animations
    const ctx = gsap.context(() => {
      // Fade in animations for sections
      gsap.utils.toArray('.fade-in-section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Parallax effect for images
      // gsap.utils.toArray('.parallax-image').forEach((img) => {
      //   gsap.to(img, {
      //     y: -50,
      //     ease: 'none',
      //     scrollTrigger: {
      //       trigger: img,
      //       start: 'top bottom',
      //       end: 'bottom top',
      //       scrub: true,
      //     },
      //   });
      // });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="kaleo-container">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <FacilitiesSection />
      <BookVisitBanner />
      <CommunitySection />
      <AboutSection />
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default HomePage;

