import React from 'react';
import './PageStyles.css';

const ServicesPage = () => {
  const services = [
    { title: "Custom Neon Art", desc: "Hand-bent, vibrant glass and LED neon signs designed to create highly photogenic, Instagram-ready interiors." },
    { title: "3D Premium Acrylic", desc: "Precision laser-cut lettering that adds depth, shadow, and architectural elegance to your lobby or storefront." },
    { title: "Metal & Backlit Halos", desc: "Industrial-grade steel, brass, and aluminum signs featuring reverse-lit LED halos for a sophisticated night-time glow." },
    { title: "Wayfinding & Structural", desc: "Pylons, monument signs, and directional boards engineered for large campuses and commercial real estate." }
  ];

  return (
    <div className="page-container">
      <h1 className="page-header">Our Capabilities</h1>
      <p className="page-subtitle">End-to-end design, fabrication, and installation for brands that refuse to blend in.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {services.map((svc, idx) => (
          <div key={idx} style={{ padding: '40px', border: '1px solid var(--c-mahogany)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>{svc.title}</h3>
            <p style={{ fontWeight: 300, lineHeight: 1.5 }}>{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;