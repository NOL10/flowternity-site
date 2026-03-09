import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/programs-section.css';

gsap.registerPlugin(ScrollTrigger);

const ProgramsSection = () => {
  const sectionRef = useRef(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'Basketball',
      image: 'https://images.unsplash.com/photo-1595795279832-13f0df36fbb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      description: 'Two international standard basketball courts designed for training, competition, and excellence.',
      hasCoaching: true,
    },
    {
      id: 2,
      title: 'Pickleball',
      image: 'https://images.unsplash.com/photo-1687102618656-907b757ad5d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      description: 'Dedicated pickleball courts for players of all skill levels to enjoy this fast-growing sport.',
      hasCoaching: false,
    },
    {
      id: 3,
      title: 'Skating',
      image: 'https://images.unsplash.com/photo-1696685139596-ed3f10bbb6f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      description: 'Professional skating facilities for ice skating and roller skating enthusiasts.',
      hasCoaching: true,
    },
    {
      id: 4,
      title: 'Skateboarding',
      image: 'https://images.unsplash.com/photo-1547447546-526c3f7462aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
      description: 'Dedicated skateboarding areas with ramps and obstacles for skateboarders of all levels.',
      hasCoaching: true,
    },
    {
      id: 5,
      title: 'Calisthenics',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      description: 'Calisthenics zones equipped with bars and equipment for bodyweight training and strength building.',
      hasCoaching: true,
    },
    {
      id: 6,
      title: 'Karate',
      image: 'https://images.unsplash.com/photo-1656653121475-e33829581294?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      description: 'Karate studios with professional mats and training equipment for martial arts practice.',
      hasCoaching: true,
    },
  ];

  const joinGameUrl = 'https://join.sportomic.com/flowternity-sports';
  const bookCourtUrl = 'https://www.sportomic.com/flowternity';
  const dividerUrl = 'https://cdn.prod.website-files.com/685077c466f113761c6d796b/6854494c95fab58d560ef202_divider.svg';

  const toggleCardExpansion = (cardId) => {
    setExpandedCardId((prev) => (prev === cardId ? null : cardId));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate feature cards
      gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
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
            delay: i * 0.08,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="things-matter-section fade-in-section">
      <div className="things-matter-container">
        <div className="section-label">Our Programs</div>

        <h2 className="things-matter-title">
          Flowternity invites you to push your limits — to train with purpose, to remember what it feels like
          when dedication meets opportunity.
        </h2>

        <div className="features-grid">
          {programs.map((program) => {
            const isExpanded = expandedCardId === program.id;
            return (
              <div key={program.id} className="feature-card">
                <div
                  className="feature-image rounded-[10px]"
                  onClick={() => !isExpanded && toggleCardExpansion(program.id)}
                  style={{ cursor: !isExpanded ? 'pointer' : 'default' }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="parallax-image rounded-[10px]"
                  />
                  {!isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCardExpansion(program.id);
                      }}
                      className="explore-more-badge"
                    >
                      Explore More
                    </button>
                  )}
                  <div className={`feature-buttons-overlay ${isExpanded ? 'expanded' : 'hidden'}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(joinGameUrl, '_blank');
                        toggleCardExpansion(program.id);
                      }}
                      className="feature-btn join-game-btn"
                    >
                      Join a Game
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(bookCourtUrl, '_blank');
                        toggleCardExpansion(program.id);
                      }}
                      className="feature-btn book-court-btn"
                    >
                      Book a Court
                    </button>
                    {program.hasCoaching && (
                      <Link
                        to="/coaching"
                        className="feature-btn coaching-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardExpansion(program.id);
                        }}
                      >
                        Get Coaching
                      </Link>
                    )}
                  </div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{program.title}</h3>
                  <img
                    src={dividerUrl}
                    alt="Divider"
                    className="feature-divider"
                  />
                  <p className="feature-description">{program.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

