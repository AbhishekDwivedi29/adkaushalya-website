import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import './SocialProof.css';

// 1. Import your 4 social images
import social1 from '../assets/images/social/socaiilll.jpg';
import social2 from '../assets/images/social/socail.jpg';
import social3 from '../assets/images/social/social.jpg';
import social4 from '../assets/images/social/socialll.jpg';

const SocialProof = () => {
  const images = [social1, social2, social3, social4];

  return (
    <div className="proof-section">
      <div className="proof-banner">
        <RevealOnScroll>
          <h2>There's no such thing as too much visibility.</h2>
        </RevealOnScroll>
        <div className="proof-text-right">
          <RevealOnScroll delay={200}>
            <p>Handpicked materials to elevate your storefront, make a statement, and bring out the extra in you. Crafted for every version of your business.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={350}>
            <Link to="/about" className="btn-primary" style={{display: 'inline-block'}}>What makes us different</Link>
          </RevealOnScroll>
        </div>
      </div>
      
      <div className="proof-gallery-container">
        <div className="proof-gallery-header">
          <RevealOnScroll>
            <h2>Chosen by the brands who get it</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p>Real storefronts, real glow, no filters needed.</p>
          </RevealOnScroll>
        </div>
        
        <div className="ig-grid">
          {images.map((img, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <img src={img} alt="Client storefront" />
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="ig-btn-container">
          <RevealOnScroll delay={400}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-primary btn-outline" style={{display: 'inline-block'}}>Follow us on Instagram</a>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;