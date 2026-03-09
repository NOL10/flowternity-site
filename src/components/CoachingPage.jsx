import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import TextRotate from './TextRotate';
import { useComingSoon } from './ComingSoonPopup';
import './styles/coaching.css';

gsap.registerPlugin(ScrollTrigger);

const CoachingPage = () => {
  const containerRef = useRef(null);
  const { openPopup } = useComingSoon() || {};

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Animate sport cards - set initial state but keep visible
      gsap.utils.toArray('.colorful-sport-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });

      // Animate why coaching cards
      gsap.utils.toArray('.why-coaching-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });

      // Animate collage images
      gsap.utils.toArray('.collage-image').forEach((img, i) => {
        gsap.fromTo(
          img,
          { opacity: 0.3, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="coaching-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="coaching-hero-section">
        <div className="coaching-hero-content">
          <div className="coaching-hero-label">Everyone starts somewhere</div>
          <div className="coaching-hero-banner">
            <h1 className="coaching-hero-title">CHAMPIONS START HERE</h1>
          </div>
          <p className="coaching-hero-description">
            Learn a sport from expert coaches at Flowternity, while tracking your progress on your phone
          </p>
        </div>
      </section>

      {/* Programs Section - Split Layout */}
      <section className="programs-split-section">
        <div className="programs-split-container">
          <div className="programs-left">
            <div className="programs-label">OUR PROGRAMS</div>
            <h2 className="programs-question">KIDS OR ADULTS?</h2>
            <h2 className="programs-answer">WE GOT YOU COVERED</h2>
            <button className="programs-cta-btn" onClick={() => openPopup?.()}>
              BOOK A FREE TRIAL
            </button>
          </div>
          <div className="programs-right">
            <div className="colorful-sport-card sport-basketball">
              <img src="/assets/bballl.png" alt="Basketball" className="sport-icon" />
              <div className="sport-content">
                <h3 className="sport-name">BASKETBALL</h3>
                <p className="sport-tagline">Learn a popular team sport</p>
              </div>
            </div>
            <div className="colorful-sport-card sport-pickleball">
              <img src="/assets/pickleball.png" alt="Pickleball" className="sport-icon" />
              <div className="sport-content">
                <h3 className="sport-name">PICKLEBALL</h3>
                <p className="sport-tagline">Master a sport almost everyone has played</p>
              </div>
            </div>
            <div className="colorful-sport-card sport-skating">
              <img src="/assets/skatinng.png" alt="Skating" className="sport-icon" />
              <div className="sport-content">
                <h3 className="sport-name">SKATING</h3>
                <p className="sport-tagline">Learn an important life skill</p>
              </div>
            </div>
            <div className="colorful-sport-card sport-karate">
              <img src="/assets/karate.png" alt="Karate" className="sport-icon" />
              <div className="sport-content">
                <h3 className="sport-name">KARATE</h3>
                <p className="sport-tagline">Master discipline and technique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Take Coaching Here Section */}
      <section className="why-coaching-section">
        <div className="why-coaching-container">
          <div className="why-coaching-header">
            <div className="why-coaching-label">WHAT IS SO SPECIAL ABOUT US?</div>
          </div>
          <div className="why-coaching-grid">
            <div className="why-coaching-card">
              <h3 className="why-coaching-title">EXPERT COACHES</h3>
              <p className="why-coaching-description">
                Learn from experienced coaches who understand the fundamentals and advanced techniques of each sport. Our coaches are dedicated to helping you reach your full potential.
              </p>
            </div>
            <div className="why-coaching-card">
              <h3 className="why-coaching-title">TRACK & MEASURE PROGRESS</h3>
              <p className="why-coaching-description">
                It's not just training, but training the smart way. We provide insights on your game based on regular assessments. Be aware of how you play - all on our app.
              </p>
            </div>
            <div className="why-coaching-card">
              <h3 className="why-coaching-title">SMALL CLASS SIZE</h3>
              <p className="why-coaching-description">
                We know how much personalized attention makes a difference when you train. We ensure there's enough students in a batch to strike a fine balance between fun and individual attention.
              </p>
            </div>
            <div className="why-coaching-card">
              <h3 className="why-coaching-title">AGE APPROPRIATE TRAINING</h3>
              <p className="why-coaching-description">
                What works for adults might not work for kids, that's why we have specific training standards for kids vs adults. We take special care to ensure age-appropriate coaching methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Coaching We Provide Section */}
      <section className="what-coaching-section">
        <div className="what-coaching-container">
          <div className="what-coaching-left">
            <div className="what-coaching-label">WHAT WE COACH</div>
            <h2 className="what-coaching-title">COMPREHENSIVE SPORTS TRAINING</h2>
            <p className="what-coaching-description">
              At Flowternity, we offer structured coaching programs across multiple sports. Whether you're a beginner looking to learn the basics or an advanced player aiming to refine your skills, our programs are designed to help you excel.
            </p>
            <div className="what-coaching-features">
              <div className="what-coaching-feature-item">
                <span className="feature-check">✓</span>
                <span>Structured curriculum for each sport</span>
              </div>
              <div className="what-coaching-feature-item">
                <span className="feature-check">✓</span>
                <span>Progressive skill development</span>
              </div>
              <div className="what-coaching-feature-item">
                <span className="feature-check">✓</span>
                <span>Regular assessments and feedback</span>
              </div>
              <div className="what-coaching-feature-item">
                <span className="feature-check">✓</span>
                <span>Competition preparation</span>
              </div>
              <div className="what-coaching-feature-item">
                <span className="feature-check">✓</span>
                <span>Flexible scheduling options</span>
              </div>
            </div>
          </div>
          <div className="what-coaching-right">
            <div className="what-coaching-collage">
              <div className="collage-row">
                <img src="https://168de2eiuo.ucarecd.net/cb7436d2-03d9-40c7-950b-00b50a83c03c/download1.jpeg" alt="Pickleball" className="collage-image" />
                <img src="https://168de2eiuo.ucarecd.net/aa7a678d-3065-4e96-9ed7-09ebd445cf70/karate.avif" alt="Karate" className="collage-image" />
              </div>
              <div className="collage-row">
                <img src="https://168de2eiuo.ucarecd.net/2515a535-ff74-410f-a446-40caf9c4bfee/bb.webp" alt="Basketball" className="collage-image" />
                <img src="https://168de2eiuo.ucarecd.net/e140a7a3-d0d6-400d-a42c-215b4d2bfcb0/skate.jpg" alt="Skating" className="collage-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-coaching-section">
        <div className="facilities-coaching-container">
          <div className="facilities-coaching-image">
            <img src="https://168de2eiuo.ucarecd.net/1fb33de0-0502-453f-b42b-3dadfaac2ea7/bbh.webp" alt="International Standard Courts" className="facilities-image" />
          </div>
          <div className="facilities-coaching-content">
            <h2 className="facilities-coaching-title">TRAIN AT WORLD CLASS FACILITIES</h2>
            <p className="facilities-coaching-subtitle">Built for performance</p>
            <div className="facilities-coaching-list">
              <div className="facility-item">
                <span className="facility-check">✓</span>
                <span>Two international standard basketball courts</span>
              </div>
              <div className="facility-item">
                <span className="facility-check">✓</span>
                <span>Dedicated pickleball courts</span>
              </div>
              <div className="facility-item">
                <span className="facility-check">✓</span>
                <span>Skating rink and skateboarding area</span>
              </div>
              <div className="facility-item">
                <span className="facility-check">✓</span>
                <span>Karate training space</span>
              </div>
              <div className="facility-item">
                <span className="facility-check">✓</span>
                <span>Premium amenities and equipment</span>
              </div>
            </div>
            <button className="facilities-cta-btn" onClick={() => openPopup?.()}>
              FIND LOCATION NEAR YOU
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="coaching-cta-section">
        <div className="cta-container">
          <div className="cta-yellow">
            <h2 className="cta-main-title">BOOK A FREE TRIAL</h2>
            <button className="cta-start-btn" onClick={() => openPopup?.()}>
              START LEARNING
            </button>
          </div>
          <div className="cta-red">
            <h2 className="cta-question">
              <TextRotate
                texts={[
                  "WHAT PLANS?",
                  "WEEKEND?",
                  "SUMMER?",
                  "AFTER SCHOOL?",
                ]}
                as="span"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                loop={true}
                auto={true}
              />
            </h2>
            <h2 className="cta-answer">
              <TextRotate
                texts={[
                  "AFTER SCHOOL?",
                  "WEEKEND PLANS?",
                  "SUMMER CAMP?",
                  "WHAT PLANS?",
                ]}
                as="span"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                loop={true}
                auto={true}
              />
            </h2>
            <p className="cta-tagline">
              <TextRotate
                texts={[
                  "WE'VE GOT A SPORT FOR YOU",
                  "WE'VE GOT YOU COVERED",
                  "START YOUR JOURNEY",
                  "JOIN US TODAY",
                ]}
                as="span"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.015}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                loop={true}
                auto={true}
              />
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoachingPage;
