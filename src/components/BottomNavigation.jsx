import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/bottom-navigation.css';

const BottomNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const joinGameUrl = 'https://join.sportomic.com/flowternity-sports';
  const bookCourtUrl = 'https://www.sportomic.com/flowternity';

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        const viewportHeight = window.innerHeight;

        // Show navigation when hero section bottom has scrolled past viewport bottom
        // This means we've left the hero section
        const shouldBeVisible = heroBottom <= viewportHeight;
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleJoinClick = () => {
    setActiveItem('join');
    window.open(joinGameUrl, '_blank');
    setTimeout(() => {
      setActiveItem(null);
    }, 1000);
  };

  const handleBookClick = () => {
    setActiveItem('book');
    window.open(bookCourtUrl, '_blank');
    setTimeout(() => {
      setActiveItem(null);
    }, 1000);
  };

  return (
    <nav className={`bottom-navigation ${isVisible ? 'visible' : ''}`}>
      <button
        className={`nav-item ${activeItem === 'join' ? 'active' : ''}`}
        onClick={handleJoinClick}
        aria-label="Join"
      >
        <div className="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="nav-label">Join a Game</span>
      </button>

      <button
        className={`nav-item ${activeItem === 'book' ? 'active' : ''}`}
        onClick={handleBookClick}
        aria-label="Book"
      >
        <div className="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="nav-label">Book a Court</span>
      </button>

      <Link
        to="/coaching"
        className={`nav-item ${activeItem === 'coaching' ? 'active' : ''}`}
        onClick={() => setActiveItem('coaching')}
        aria-label="Coaching"
      >
        <div className="nav-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 14C15.866 14 19 10.866 19 7C19 3.13401 15.866 0 12 0C8.13401 0 5 3.13401 5 7C5 10.866 8.13401 14 12 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="nav-label">Get Coaching</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
