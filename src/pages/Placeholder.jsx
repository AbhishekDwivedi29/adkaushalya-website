import React from 'react';
import { Link } from 'react-router-dom';

const Placeholder = () => {
  return (
    <div style={{ padding: '150px 40px', textAlign: 'center', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Coming Soon.</h2>
      <p style={{ marginBottom: '30px' }}>This page is currently being crafted by the Ad Kaushalya team.</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>Back to Home</Link>
    </div>
  );
};

export default Placeholder;