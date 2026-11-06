import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAbout = (e) => {
    e.preventDefault();
    setIsAboutOpen(!isAboutOpen);
  };

  const closeAbout = () => {
    setIsAboutOpen(false);
  };

  return (
    <>
      <div className="announcement-bar">
        <p>
          Your brand deserves the spotlight. Book a free site consultation today.{' '}
          <Link to="/contact" style={{ color: 'inherit' }}><u>Get a Quote</u></Link>
        </p>
      </div>
      
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-left">
            <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} strokeWidth={1.5} />
            </button>
            <div className="desktop-links">
              <Link to="/services">Services</Link>
              {/* Expandable About Toggle */}
              <button className="about-toggle" onClick={toggleAbout}>
                About {isAboutOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>
          
          <div className="nav-center">
            <Link to="/" className="logo-link" onClick={closeAbout}>
              <Logo width={200} />
            </Link>
          </div>
          
          <div className="nav-right">
            <Link to="/contact" className="location desktop-only" style={{textDecoration: 'underline'}}>
              Get a Quote
            </Link>
            
            <div className="nav-icons">
              <a href="tel:+919876543210" title="Call Us Directly" style={{color: 'inherit'}}>
                <Phone size={20} strokeWidth={1.5} className="desktop-only" />
              </a>
              <Link to="/contact" title="Our Workshop Location" style={{color: 'inherit'}}>
                <MapPin size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </nav>

        {/* The Expandable Mega-Menu */}
        <div className={`about-mega-menu ${isAboutOpen ? 'open' : ''}`}>
          <div className="mega-menu-links">
            <Link to="/about" onClick={closeAbout}>Our story</Link>
            <Link to="/founders" onClick={closeAbout}>The founder</Link>
            <Link to="/faq" onClick={closeAbout}>Signage care</Link>
            <Link to="/faq" onClick={closeAbout}>FAQs</Link>
            <Link to="/contact" onClick={closeAbout}>Contact us</Link>
          </div>
          <button className="close-mega-menu" onClick={closeAbout}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;