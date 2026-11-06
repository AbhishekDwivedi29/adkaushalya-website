import React from 'react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-header">Ready to be seen?</h1>
      <p className="page-subtitle">Drop your project details below. Our design consultants will get back to you within 24 hours with a custom quote.</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <input type="text" placeholder="Your Name *" required />
          <input type="text" placeholder="Business/Brand Name *" required />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email Address *" required />
          <input type="tel" placeholder="Phone Number" />
        </div>
        
        <select required>
          <option value="" disabled selected>Select Signage Type *</option>
          <option value="neon">Custom Neon</option>
          <option value="3d">3D Acrylic / Channel Letters</option>
          <option value="metal">Metal / Backlit Halo</option>
          <option value="outdoor">Outdoor Flex / Hoarding</option>
          <option value="other">Not Sure / Needs Consultation</option>
        </select>

        <textarea placeholder="Tell us about your space. Approximate dimensions, indoor or outdoor, and your vision..." required></textarea>
        
        <button type="submit" className="btn-primary" style={{ width: 'fit-content', padding: '15px 50px' }}>Request Quote</button>
      </form>
    </div>
  );
};

export default Contact;