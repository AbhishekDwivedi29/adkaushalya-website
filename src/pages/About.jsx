import React from 'react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-header">We build landmarks, <br/>not just signs.</h1>
      <p className="page-subtitle">
        Ad Kaushalya was born out of a simple belief: in a crowded street, your business shouldn't whisper. It should command attention.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=800&auto=format&fit=crop" 
            alt="Our Workshop" 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Engineering Attention</h2>
          <p style={{ fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.6, marginBottom: '20px' }}>
            From high-end retail boutiques to massive corporate headquarters, we engineer signage that captures the essence of your brand. We are a full-stack signage agency—handling everything from 3D conceptualization and municipal permitting to in-house fabrication and flawless installation.
          </p>
          <p style={{ fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.6 }}>
            Our materials are sourced for durability, and our LEDs are calibrated for maximum lumen output with minimum energy drain. When you work with Ad Kaushalya, you aren't buying a board; you're investing in your brand's physical presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;