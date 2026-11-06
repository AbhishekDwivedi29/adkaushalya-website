import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import './DebutDrop.css';

// 1. Import your debut image
import brandImg from '../assets/images/debut/brand.jpg';

const DebutDrop = () => {
  return (
    <div className="debut-section">
      <div className="debut-header">
        <RevealOnScroll>
          <h2>Pick your kind of impact</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <Link to="/services" className="shop-all-link">View all services</Link>
        </RevealOnScroll>
      </div>
      
      <div className="debut-content">
        <RevealOnScroll delay={100} className="debut-image-wrapper">
          {/* 2. Apply the image here */}
          <img src={brandImg} alt="Signature Install" />
          <div className="circular-badge">
            <svg viewBox="0 0 100 100">
              <path id="curve" d="M 50 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
              <text><textPath href="#curve">✦ PREMIUM ✦ CRAFTED ✦ PREMIUM ✦ CRAFTED</textPath></text>
            </svg>
            <span className="badge-center">AK</span>
          </div>
        </RevealOnScroll>
        
        <div className="debut-text">
          <RevealOnScroll delay={200}>
            <span className="badge">The Signature Series</span>
          </RevealOnScroll>
          <RevealOnScroll delay={350}>
            <h2>The Signature Series.<br/>Consider This Our Entrance.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={500}>
            <p>Four distinct styles. Four brand personalities. One bold execution.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={650}>
            <Link to="/portfolio" className="btn-primary" style={{display: 'inline-block'}}>See the gallery</Link>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default DebutDrop;