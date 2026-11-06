import React from 'react';
import './TrackOrder.css';

const TrackOrder = () => {
  return (
    <div className="track-order-page">
      <div className="track-container">
        <h1 className="page-title">Track your order</h1>
        
        <div className="track-content">
          <p>
            We'll email you a tracking link as soon as your custom signage leaves our workshop. 
            You can also track its fabrication and shipping status directly from your Ad Kaushalya account.
          </p>
          
          <div className="track-form-box">
            <p className="form-prompt">
              Enter your email address to get a one-time code, no password needed. Or enter your tracking link.
            </p>
            
            <form className="track-form">
              <input type="email" placeholder="Email address or Order ID" required />
              <button type="submit" className="btn-primary">Continue</button>
            </form>
          </div>

          <p className="contact-prompt">
            Or DM us on Instagram <a href="#">@adkaushalya.in</a> and we'll follow up closely until your sign reaches you safely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;