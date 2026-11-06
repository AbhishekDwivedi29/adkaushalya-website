import React from 'react';
import './PageStyles.css';

const FAQ = () => {
  const faqs = [
    { q: "Do you handle the installation?", a: "Absolutely. Our expert crew handles site-surveys, structural engineering checks, and final mounting to ensure your sign is safe, compliant, and perfectly leveled." },
    { q: "What is your typical turnaround time?", a: "Standard fabrication takes 7-14 business days depending on the materials. Highly custom architectural structures may take 3-4 weeks. If you have a grand opening, let us know and we can expedite." },
    { q: "Are your signs weather-proof?", a: "Yes. Our outdoor metal, ACP, and LED signs are IP67 rated, meaning they are fully protected against heavy rain, dust, and UV exposure. They won't fade or short-circuit." },
    { q: "Do you provide warranties?", a: "We provide a 2-year comprehensive warranty on all LED modules and power supplies, and a 5-year guarantee against material fading or structural warping." }
  ];

  return (
    <div className="page-container">
      <h1 className="page-header">Frequently Asked.</h1>
      <p className="page-subtitle">Everything you need to know before we light up your brand.</p>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <h3 className="faq-question">{faq.q}</h3>
            <p className="faq-answer">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;