import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import './PageStyles.css';

// Import Suyash's image from the team folder
import suyashImg from '../assets/images/team/founder.jpg';

const Founders = () => {
  return (
    <div className="page-container">
      <RevealOnScroll>
        <h1 className="page-header">The Visionaries<br/>Behind the Glow.</h1>
      </RevealOnScroll>
      <RevealOnScroll delay={200}>
        <p className="page-subtitle">
          Meet the leadership driving Ad Kaushalya. We are dedicated to engineering 
          attention and turning local businesses into unforgettable landmarks.
        </p>
      </RevealOnScroll>

      <div className="team-grid">
        
        {/* CEO Profile - Dharmendra Singh Kumar */}
        <RevealOnScroll delay={300} className="team-member">
          {/* Placeholder circle since no image is available yet */}
          <div className="team-img-wrapper placeholder-img">
            <span>Image Coming Soon</span>
          </div>
          
          <h2 className="team-name">Dharmendra Singh Kumar</h2>
          <h4 className="team-role">Chief Executive Officer</h4>
          
          <p className="team-bio">
            As the driving force behind Ad Kaushalya, Dharmendra brings years of strategic leadership and a relentless commitment to quality. He believes that a brand's physical storefront is its most powerful, silent salesperson.
          </p>
          <p className="team-bio">
            Under his operational guidance, the agency has scaled from a boutique fabrication shop to a full-service signage powerhouse. Dharmendra ensures that every project—from corporate wayfinding to complex retail facades—is executed with structural integrity and delivered strictly on time.
          </p>
        </RevealOnScroll>

        {/* Consultant Profile - Suyash */}
        <RevealOnScroll delay={450} className="team-member">
          {/* Suyash's Circular Image */}
          <div className="team-img-wrapper">
            <img src={suyashImg} alt="Suyash - Consultant" className="team-img" />
          </div>
          
          <h2 className="team-name">Suyash</h2>
          <h4 className="team-role">Lead Design Consultant</h4>
          
          <p className="team-bio">
            Suyash is the creative architect responsible for translating brand identities into physical, illuminated masterpieces. With a deep understanding of architectural materials, typography, and LED mapping, he bridges the gap between vision and fabrication.
          </p>
          <p className="team-bio">
            Whether it is selecting the perfect acrylic thickness for a 3D halo effect or calibrating the exact lumen output for a custom neon piece, Suyash ensures every curve and edge is perfectly designed for maximum visual impact and aesthetic perfection.
          </p>
        </RevealOnScroll>

      </div>
    </div>
  );
};

export default Founders;