import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Neon Signs",
      subtitle: "Why pick one color?",
      img: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "3D Letters",
      subtitle: "Perfectly Mismatched.",
      img: "https://images.unsplash.com/photo-1629813589053-1577a7b8e5c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "LED Boards",
      subtitle: "Timeless, Never Basic.",
      img: "https://images.unsplash.com/photo-1629813589053-1577a7b8e5c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Experimental",
      subtitle: "Dare to Differ.",
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="services-section">
      <h3 className="section-title">Too bold? Good.</h3>
      <div className="services-grid">
        {services.map((svc) => (
          <div className="service-card" key={svc.id}>
            <img src={svc.img} alt={svc.title} />
            <div className="service-info">
              <h4>{svc.title}</h4>
              <p>{svc.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;