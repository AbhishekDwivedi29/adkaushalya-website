import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import './Hero.css';

// 1. Import the video file from your local assets
import heroVideo from '../assets/images/hero/video.mp4'; 

const Hero = () => {
  return (
    <div className="hero-section">
      
      {/* 2. Use the video tag with background attributes */}
      <video 
        src={heroVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      />
      
      <div className="hero-overlay">
        <div className="hero-content">
          <RevealOnScroll delay={100}>
            <h2>Make them look twice</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <p>Your everyday dose of main character brand energy.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={500}>
            <Link to="/portfolio" className="btn-primary hero-btn" style={{display: 'inline-block'}}>
              Explore Projects
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;