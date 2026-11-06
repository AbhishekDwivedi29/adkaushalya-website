import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import './PageStyles.css';

// 1. Import all local images from your directories
import catLed from '../assets/images/categories/led.jpg';
import catMetal from '../assets/images/categories/metal.jpg';
import catNeow from '../assets/images/categories/neow.jpg';
import catStandee from '../assets/images/categories/standee.jpg';

import debutBrand from '../assets/images/debut/brand.jpg';

import feat1 from '../assets/images/featured/feat.jpg';
import feat2 from '../assets/images/featured/featt.jpg';
import feat3 from '../assets/images/featured/feattrt.jpg';
import feat4 from '../assets/images/featured/feattta.jpg';

import social1 from '../assets/images/social/socaiilll.jpg';
import social2 from '../assets/images/social/socail.jpg';
import social3 from '../assets/images/social/social.jpg';
import social4 from '../assets/images/social/socialll.jpg';

const Portfolio = () => {
  // 2. Structure them into an array with project details for the hover effect
  const projects = [
    { id: 1, img: debutBrand, title: "The Signature Series", category: "Premium Installation" },
    { id: 2, img: feat1, title: "Lobby Focal Point", category: "Acrylic Halo Letters" },
    { id: 3, img: feat2, title: "Cafe Ambience", category: "Custom Neon Glow" },
    { id: 4, img: catNeow, title: "Storefront Identity", category: "Vibrant Neon" },
    { id: 5, img: catMetal, title: "Corporate Branding", category: "Metal Backlit" },
    { id: 6, img: feat3, title: "Executive Suite", category: "Premium Metal Signage" },
    { id: 7, img: catLed, title: "Night Visibility", category: "LED Board" },
    { id: 8, img: catStandee, title: "Wayfinding", category: "Custom Standee" },
    { id: 9, img: feat4, title: "Outdoor Billboard", category: "Flex Signage" },
    { id: 10, img: social1, title: "Boutique Display", category: "Wall Mounted" },
    { id: 11, img: social2, title: "Minimalist Studio", category: "3D Letters" },
    { id: 12, img: social3, title: "Creative Space", category: "Indoor Glow" },
    { id: 13, img: social4, title: "Modern Retail", category: "Backlit Acrylic" },
  ];

  return (
    <div className="page-container">
      <RevealOnScroll>
        <h1 className="page-header">The Gallery</h1>
      </RevealOnScroll>
      <RevealOnScroll delay={200}>
        <p className="page-subtitle">
          A curated selection of storefronts, interiors, and architectural signage we've brought to life. 
          Real installations for brands that refuse to blend in.
        </p>
      </RevealOnScroll>

      {/* 3. Render the Structured Grid */}
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <RevealOnScroll key={project.id} delay={(idx % 3) * 150} className="portfolio-item">
            <div className="portfolio-img-wrapper">
              <img src={project.img} alt={project.title} loading="lazy" />
              
              {/* Hover Overlay */}
              <div className="portfolio-overlay">
                <div className="portfolio-text">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;