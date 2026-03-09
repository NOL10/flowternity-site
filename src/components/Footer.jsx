import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="footer-section">
      <div className="footer-content">
        <div className="footer-header">
          <div className="footer-logo">
            <h2 className="footer-logo-text">FLOWTERNITY</h2>
            <p className="footer-tagline">Multi-Sport Facility</p>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-column">
            <h3 className="footer-column-title">Contact</h3>
            <div className="footer-contact-info">
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <address className="contact-value">
                  1456 Old Flour Mill Road,<br />
                  Dodda Kempaih Layout, Horamavu, Kalkere,<br />
                  Bengaluru, Karnataka 560113
                </address>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+9198866 96155" className="contact-value">+91 98866 96155</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:info@flowternity.com" className="contact-value">info@flowternity.com</a>
              </div>
            </div>
          </div>
          {/*<div className="footer-column">
            <h3 className="footer-column-title">Hours</h3>
            <div className="footer-hours">
              <div className="hours-item">
                <span className="hours-day">Monday - Friday:</span>
                <span className="hours-time">6:00 AM - 10:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Saturday:</span>
                <span className="hours-time">7:00 AM - 9:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Sunday:</span>
                <span className="hours-time">8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>*/}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <nav className="footer-nav">
              <a href="#facilities" className="footer-link" onClick={(e) => handleHashClick(e, '#facilities')}>Facilities</a>
              <a href="#about" className="footer-link" onClick={(e) => handleHashClick(e, '#about')}>About</a>
              <a href="#programs" className="footer-link" onClick={(e) => handleHashClick(e, '#programs')}>Programs</a>
              <a href="#contact" className="footer-link" onClick={(e) => handleHashClick(e, '#contact')}>Contact</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Flowternity. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/p/Flowternity-Sports-Multi-Sport-Facility-61573655250336/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">Facebook</a>
            <a href="https://www.instagram.com/flowternity_sports/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;