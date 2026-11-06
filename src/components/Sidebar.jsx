import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        
        <div className="sidebar-header">
          <Link to="/" onClick={closeSidebar} className="sidebar-logo">
            <Logo width={150} />
          </Link>
          <button className="close-btn" onClick={closeSidebar}>
            <X size={32} strokeWidth={1} />
          </button>
        </div>

        <div className="sidebar-content">
          <ul className="sidebar-main-menu">
            <li>
              <Link to="/services" onClick={closeSidebar}>Services</Link> 
              <ArrowRight className="menu-arrow" size={24} strokeWidth={1.5}/>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeSidebar}>Portfolio</Link> 
              <ArrowRight className="menu-arrow" size={24} strokeWidth={1.5}/>
            </li>
            <li>
              <Link to="/about" onClick={closeSidebar}>Our Agency</Link> 
              <ArrowRight className="menu-arrow" size={24} strokeWidth={1.5}/>
            </li>
            <li>
              <Link to="/contact" onClick={closeSidebar}>Get a Quote</Link> 
              <ArrowRight className="menu-arrow" size={24} strokeWidth={1.5}/>
            </li>
          </ul>

          <div className="sidebar-divider"></div>

          <ul className="sidebar-sub-menu">
            <li><Link to="/faq" onClick={closeSidebar}>FAQs</Link></li>
            <li><Link to="/track-order" onClick={closeSidebar}>Track Fabrication</Link></li>
            {/* Removed Client Portal Login */}
          </ul>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-socials">
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <Link to="/contact" className="sidebar-cta" onClick={closeSidebar}>Ready to stand out? ↗</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;