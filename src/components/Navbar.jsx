import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import LetterSwapPingPong from './LetterSwapPingPong';
import { useComingSoon } from './ComingSoonPopup';
import './styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { openPopup } = useComingSoon() || {};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
        !event.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scrolling to sections
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    } else {
      scrollToSection(hash);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll to hero
      setTimeout(() => {
        scrollToSection('#hero');
      }, 100);
    } else {
      scrollToSection('#hero');
    }
  };

  // Handle hash changes in URL
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      setTimeout(() => {
        scrollToSection(location.hash);
      }, 100);
    }
  }, [location.hash, location.pathname]);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    {
      id: 1,
      label: 'Programs',
      href: '#programs',
      type: 'hash',
    },
    {
      id: 2,
      label: 'Coaching',
      href: '/coaching',
      type: 'route', // route link for navigation
    },
    {
      id: 3,
      label: 'Facilities',
      href: '#facilities',
      type: 'hash', // hash link for smooth scrolling
    },
    {
      id: 4,
      label: 'About',
      href: '#about',
      type: 'hash',
    },
    {
      id: 5,
      label: 'Contact',
      href: '#contact',
      type: 'hash',
    },
  ];

  const renderNavLink = (link) => {
    const letterSwapProps = {
      label: link.label,
      reverse: true,
      staggerFrom: 'first',
      staggerDuration: 0.03,
      className: '',
    };

    if (link.type === 'hash') {
      return (
        <a
          key={link.id}
          href={link.href}
          className="navbar-link"
          onClick={(e) => handleHashClick(e, link.href)}
        >
          <LetterSwapPingPong {...letterSwapProps} />
        </a>
      );
    } else {
      return (
        <Link
          key={link.id}
          to={link.href}
          className="navbar-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          <LetterSwapPingPong {...letterSwapProps} />
        </Link>
      );
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHomePage ? 'home-page' : 'coaching-page'}`}>
      <div className="navbar-container">
        <a
          href="#hero"
          className="navbar-logo tracking-[0.75rem]"
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          onClick={handleLogoClick}
        >
          FLOWTERNITY
        </a>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div ref={menuRef} className={`navbar-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map(renderNavLink)}
          <button className="book-visit-btn mobile-cta-btn" onClick={() => { setMobileMenuOpen(false); window.open('https://chat.whatsapp.com/GnggI8EHjFu6lQUZmB3EHs', '_blank'); }}>
            Join Our Community
          </button>
        </div>

        <button
          className="book-visit-btn desktop-cta-btn ml-6"
          onClick={() => window.open('https://chat.whatsapp.com/GnggI8EHjFu6lQUZmB3EHs', '_blank')}
        >
          Join Our Community
        </button>
      </div>
    </nav>
  );
};

export default Navbar;