import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import './Featured.css';

// 1. Import your featured images matching your exact filenames
import feat1 from '../assets/images/featured/feat.jpg';
import feat2 from '../assets/images/featured/featt.jpg';
import feat3 from '../assets/images/featured/feattrt.jpg';
import feat4 from '../assets/images/featured/feattta.jpg';

const Featured = () => {
  const projects = [
    { id: 1, name: "Acrylic Halo Letters", type: "Retail / Facade", tag: "Most Requested", img: feat1 },
    { id: 2, name: "Custom Neon Glow", type: "Interior / Decor", tag: "Trending", img: feat2 },
    { id: 3, name: "Metal Backlit Sign", type: "Corporate / Lobby", tag: "Premium", img: feat3 },
    { id: 4, name: "Outdoor Flex Board", type: "Exterior / Billboard", tag: "Standard", img: feat4 }
  ];

  return (
    <div className="featured-section">
      <div className="featured-header">
        <RevealOnScroll>
          <h2>Our top requests</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p>The signage styles businesses ask for the most, day in and day out.</p>
        </RevealOnScroll>
      </div>
      <div className="product-grid">
        {projects.map((proj, index) => (
          <RevealOnScroll key={proj.id} delay={index * 150} className="product-card">
            <div className="img-wrapper">
              <span className="product-tag">{proj.tag}</span>
              <img src={proj.img} alt={proj.name} />
            </div>
            <div className="product-details">
              <h4>{proj.name}</h4>
              <p>{proj.type}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Featured;