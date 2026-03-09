import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/about-section.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards
      gsap.utils.toArray('.info-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="land-section fade-in-section">
      <div className="land-container">
        <div className="section-label">About Flowternity</div>

        <h2 className="land-title">
          Flowternity was created to bring athletes together — to excellence, to passion, to something greater
          than individual achievement.
        </h2>

        <div className="info-cards">
          <div className="info-card">
            <img
              src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/68540427bc46875dd34cd085_Kaleo_Icon-dark.svg"
              alt="Flowternity Icon"
              className="card-icon"
            />
            <h3 className="card-title">World-class facilities & professional standards</h3>
            <div className="card-divider">—</div>
            <p className="card-description">
              Flowternity is a multi-sport facility built for athletes who demand excellence. With two international standard basketball courts, dedicated spaces for pickleball, skating, calisthenics, and karate, we provide the infrastructure for champions to train and compete.
            </p>
          </div>

          <div className="info-card">
            <img
              src="https://cdn.prod.website-files.com/685077c466f113761c6d796b/68540427bc46875dd34cd085_Kaleo_Icon-dark.svg"
              alt="Flowternity Icon"
              className="card-icon"
            />
            <h3 className="card-title">A community of athletes, coaches, and champions —</h3>
            <div className="card-divider">—</div>
            <p className="card-description">
              At Flowternity, sports unite us. From basketball players perfecting their shots to karate practitioners mastering their forms, this is where dedication meets opportunity, and passion becomes performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

