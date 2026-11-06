import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import './Categories.css';

// 1. Import your specific category images
import neowImg from '../assets/images/categories/neow.jpg';
import ledImg from '../assets/images/categories/led.jpg';
import metalImg from '../assets/images/categories/metal.jpg';
import standeeImg from '../assets/images/categories/standee.jpg';

const Categories = () => {
  const cats = [
    {
      title: "Custom Neon",
      subtitle: "Why pick one color?",
      img: neowImg
    },
    {
      title: "LED Boards",
      subtitle: "Bright & Efficient.",
      img: ledImg
    },
    {
      title: "Metal Backlit",
      subtitle: "Timeless, Never Basic.",
      img: metalImg
    },
    {
      title: "Standees & Wayfinding",
      subtitle: "Dare to Differ.",
      img: standeeImg
    }
  ];

  return (
    <div className="categories-section">
      <RevealOnScroll>
        <h3 className="section-title">Too bold? Good.</h3>
      </RevealOnScroll>
      
      <div className="categories-grid">
        {cats.map((cat, idx) => (
          <RevealOnScroll key={idx} delay={idx * 150} className="cat-card">
            <img src={cat.img} alt={cat.title} />
            <div className="cat-info">
              <h4>{cat.title}</h4>
              <p>{cat.subtitle}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Categories;