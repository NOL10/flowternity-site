import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/community-section.css';

gsap.registerPlugin(ScrollTrigger);

const CommunitySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate step cards
      const stepCards = gsap.utils.toArray('.step-card');
      if (stepCards.length > 0) {
        stepCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse',
              },
              delay: i * 0.1,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="community" className="join-community-section fade-in-section">
      <div className="join-community-container">
        <div className="section-label">Join Our Community</div>

        <h2 className="join-community-title">
          Join Daily Games hosted by Flowternity
        </h2>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">Step 1</div>
            <p className="step-description">
              Select available date and time slot to enroll
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">Step 2</div>
            <p className="step-description">
              We'll handle equipment and players. Your role? Show up.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">Step 3</div>
            <p className="step-description">
              Play with new players. Leave with new friends.
            </p>
          </div>
        </div>

        <div className="join-button-container">
          <button
            onClick={() => window.open('https://join.sportomic.com/flowternity-sports', '_blank')}
            className="join-game-button"
          >
            Join a Game at Flowternity
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

