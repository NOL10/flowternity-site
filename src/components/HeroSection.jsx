import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './styles/hero.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const iconRef = useRef(null);

  const joinGameUrl = 'https://join.sportomic.com/flowternity-sports';
  const bookCourtUrl = 'https://www.sportomic.com/flowternity';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate title letters
      tl.fromTo(
        '.hero-title-letter',
        { opacity: 0, y: 100, rotationX: -90 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.05 }
      )
        .fromTo(
          iconRef.current,
          { opacity: 0, scale: 0, rotation: -180 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.hero-btn',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero-section">
      <div className="hero-background">
        <video
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          alt="Flowternity Sports Facility"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div ref={iconRef} className="hero-icon">
          <img
            src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/6853ff8bb7215267b2f31695_Kaleo_Icon.svg"
            alt="Flowternity Icon"
          />
        </div>

        <h1 ref={titleRef} className="hero-title">
          <span className="hero-title-letter">F</span>
          <span className="hero-title-letter">L</span>
          <span className="hero-title-letter">O</span>
          <span className="hero-title-letter">W</span>
          <span className="hero-title-letter">T</span>
          <span className="hero-title-letter">E</span>
          <span className="hero-title-letter">R</span>
          <span className="hero-title-letter">N</span>
          <span className="hero-title-letter">I</span>
          <span className="hero-title-letter">T</span>
          <span className="hero-title-letter">Y</span>
        </h1>

        <p ref={descRef} className="hero-description">
          Multi-Sport Facility. Two International Standard Basketball Courts • Pickleball • Skating / Skateboarding • Calisthenics • Karate and more. Experience world-class sports facilities designed for athletes of all levels.
        </p>

        <div ref={buttonsRef} className="hero-buttons">
          <button
            className="hero-btn hero-join-btn"
            onClick={() => {
              window.open(joinGameUrl, '_blank');
            }}
          >
            Join a Game
          </button>
          <button
            className="hero-btn hero-book-btn"
            onClick={() => {
              window.open(bookCourtUrl, '_blank');
            }}
          >
            Book a Court
          </button>
          <Link
            to="/coaching"
            className="hero-btn hero-coaching-btn"
          >
            Get Coaching
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;