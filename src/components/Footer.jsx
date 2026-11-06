import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-btn">
        <Link to="/contact" className="btn-primary btn-outline">Start Your Project</Link>
      </div>

      <h2 className="footer-headline">Anti-invisible.<br/>Engineered to be seen.</h2>
      
      <div className="footer-grid">
        <div className="footer-col flex-2">
          <Logo width={180} />
          <p style={{marginTop: '20px'}}>Join our network of premium brands. Get insights on storefront psychology, material trends, and exclusive agency offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Business email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-col">
          <h3>Expertise</h3>
          <ul>
            <li><Link to="/services">Custom Neon</Link></li>
            <li><Link to="/services">3D Acrylic Letters</Link></li>
            <li><Link to="/services">Metal & Backlit</Link></li>
            <li><Link to="/services">Wayfinding & Safety</Link></li>
            <li><Link to="/services">Large Format Flex</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Client Services</h3>
          <ul>
            <li><Link to="/track-order">Track Fabrication</Link></li>
            <li><Link to="/faq">Installation FAQs</Link></li>
            <li><Link to="/faq">Warranty & Maintenance</Link></li>
            <li><Link to="/contact">Request a Site Visit</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Talk to us</h3>
          <ul>
            <li>hello@adkaushalya.in</li>
            <li>+91 98765 43210</li>
            <li>DM us @adkaushalya.in</li>
            <li className="f-light">Mon–Sat, 9 AM–7 PM IST.<br/>Site visits by appointment.</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ad Kaushalya Signage Solutions · GSTIN XXXXXXXXXXXXXX</p>
        <div className="footer-meta">
          <span>🇮🇳 New Delhi, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;