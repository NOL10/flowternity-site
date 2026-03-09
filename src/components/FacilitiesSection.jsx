import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typewriter from './Typewriter';
import './styles/facilities-section.css';

gsap.registerPlugin(ScrollTrigger);

const FacilitiesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate images
      gsap.utils.toArray('.ranch-photo').forEach((photo, i) => {
        gsap.fromTo(
          photo,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: photo,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.05,
          }
        );
      });

      // Animate title words
      gsap.utils.toArray('.title-word').forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.what-lives-title',
              start: 'top 85%',
            },
            delay: i * 0.02,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="facilities" className="what-lives-section fade-in-section">
      <div className="what-lives-container">
        <div className="section-label">Our Facilities</div>

        <h2 className="what-lives-title">
          <span className="title-word">Flowternity</span>{' '}
          <span className="title-word">is</span>{' '}
          <span className="title-word">more</span>{' '}
          <span className="title-word">than</span>{' '}
          <span className="title-word">a</span>{' '}
          <span className="title-word">sports</span>{' '}
          <span className="title-word">venue</span>{' '}
          <span className="title-word">it's</span>{' '}
          <span className="title-word">a</span>{' '}
          <span className="title-word">community</span>{' '}
          <span className="title-word">hub.</span>{' '}
          <span className="title-word">Two</span>{' '}
          <span className="title-word">international</span>{' '}
          <span className="title-word">basketball</span>{' '}
          <span className="title-word">courts.</span>{' '}
          <span className="title-word">Pickleball</span>{' '}
          <span className="title-word">courts.</span>{' '}
          <span className="title-word">Skating</span>{' '}
          <span className="title-word">and</span>{' '}
          <span className="title-word">skateboarding</span>{' '}
          <span className="title-word">areas.</span>{' '}
          <span className="title-word">Calisthenics</span>{' '}
          <span className="title-word">zones.</span>{' '}
          <span className="title-word">Karate</span>{' '}
          <span className="title-word">studios.</span>{' '}
          <span className="title-word">All</span>{' '}
          <span className="title-word">under</span>{' '}
          <span className="title-word">one</span>{' '}
          <span className="title-word">roof.</span>
        </h2>

        <div className="ranch-photos-grid">
          <div className="ranch-photo ranch-photo-1">
            <img
              src="https://images.unsplash.com/photo-1509027572446-af8401acfdc3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
              alt="Basketball Court"
              className="parallax-image rounded-[10px]"
            />
          </div>
          <div className="ranch-photo ranch-photo-2">
            <img
              src="https://images.unsplash.com/photo-1693142517840-525fb46721e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471"
              alt="Sports Facility"
              className="parallax-image rounded-[10px]"
            />
          </div>
          <div className="ranch-photo ranch-photo-3">
            <img
              src="https://images.unsplash.com/photo-1598300606161-4019d0dfec28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
              alt="Multi-Sport Venue"
              className="parallax-image rounded-[10px]"
            />
          </div>
        </div>

        <div className="breathe-text">
          <Typewriter
            text="EXCELLENCE"
            as="span"
            speed={100}
            waitTime={2000}
            deleteSpeed={50}
            loop={true}
            showCursor={false}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

