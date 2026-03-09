import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import './styles/book-banner.css';

gsap.registerPlugin(ScrollTrigger);

const BookVisitBanner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const joinGameUrl = 'https://join.sportomic.com/flowternity-sports';
  const bookCourtUrl = 'https://www.sportomic.com/flowternity';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a seamless looping animation
      if (textRef.current) {
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
          const firstSet = textRef.current.querySelector('.banner-content-set');
          if (firstSet) {
            const firstSetWidth = firstSet.offsetWidth;

            // Set initial position
            gsap.set(textRef.current, { x: 0 });

            // Create seamless infinite loop
            // With two identical sets, moving by exactly one set width creates seamless loop
            gsap.to(textRef.current, {
              x: -firstSetWidth,
              duration: 20,
              ease: 'none',
              repeat: -1,
            });
          }
        });
      }

      // Scale animation on scroll
      gsap.fromTo(
        bannerRef.current,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const contentSet = (
    <>
      <span className="banner-text">Book a Visit</span>
      <img
        src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/6853ff8bb7215267b2f31695_Kaleo_Icon.svg"
        alt="Kaleo Icon"
        className="banner-icon"
      />
      <span className="banner-text">Book a Visit</span>
      <img
        src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/6853ff8bb7215267b2f31695_Kaleo_Icon.svg"
        alt="Kaleo Icon"
        className="banner-icon"
      />
      <span className="banner-text">Book a Visit</span>
      <img
        src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/6853ff8bb7215267b2f31695_Kaleo_Icon.svg"
        alt="Kaleo Icon"
        className="banner-icon"
      />
      <span className="banner-text">Book a Visit</span>
      <img
        src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/6853ff8bb7215267b2f31695_Kaleo_Icon.svg"
        alt="Kaleo Icon"
        className="banner-icon"
      />
    </>
  );

  return (
    <>
      <div
        ref={bannerRef}
        className="book-visit-banner"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="banner-content">
          <div ref={textRef} className="banner-text-wrapper">
            <div className="banner-content-set">
              {contentSet}
            </div>
            <div className="banner-content-set">
              {contentSet}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-playfair">
              Get Started
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <button
              className="modal-cta-btn modal-join-btn"
              onClick={() => {
                window.open(joinGameUrl, '_blank');
                setIsModalOpen(false);
              }}
            >
              Join a Game
            </button>
            <button
              className="modal-cta-btn modal-book-btn"
              onClick={() => {
                window.open(bookCourtUrl, '_blank');
                setIsModalOpen(false);
              }}
            >
              Book a Court
            </button>
            <Link
              to="/coaching"
              className="modal-cta-btn modal-coaching-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Get Coaching
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookVisitBanner;