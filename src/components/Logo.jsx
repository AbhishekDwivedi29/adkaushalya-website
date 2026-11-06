import React from 'react';

const LogoMonolith = ({ width = 280, color = "var(--c-mahogany)" }) => {
  return (
    <svg width={width} viewBox="0 0 450 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Solid Bold Monogram */}
      <g transform="translate(10, 15)">
        {/* Chevron 'A' (No crossbar for modern look) */}
        <path d="M15 80 L55 0 L95 80 H72 L55 40 L38 80 Z" fill={color} />
        {/* Sharp 'K' */}
        <path d="M105 0 H125 V80 H105 Z M175 0 L125 45 L175 80 H150 L125 55 V35 L150 0 Z" fill={color} />
      </g>
      
      {/* Commanding Typography */}
      <text x="190" y="60" fontFamily="var(--font-display), 'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill={color} letterSpacing="-1.5">
        AD KAUSHALYA
      </text>
      <text x="194" y="86" fontFamily="var(--font-sans), sans-serif" fontSize="14" fontWeight="700" fill={color} letterSpacing="4.5">
        PREMIUM SIGNAGE
      </text>
    </svg>
  );
};

export default LogoMonolith;