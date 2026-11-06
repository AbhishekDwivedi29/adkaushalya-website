import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <h2>There's no such thing as too much visibility.</h2>
        <div className="banner-text">
          <p>Handpicked materials to elevate your storefront, make a statement, and bring out the extra in your brand. Crafted for every version of your business.</p>
          <button className="btn-primary">What makes us different</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;