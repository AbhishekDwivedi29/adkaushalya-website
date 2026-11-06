import React, { useState, useEffect } from 'react';
import './Loader.css';

const homeWords = ["Namaste", "Hello", "Hola", "Bonjour", "Ciao", "Merhaba", "Ad Kaushalya"];
const innerWords = ["Hold on", "Preparing", "Ad Kaushalya"];

const Loader = ({ loaderState, isHome }) => {
  const [index, setIndex] = useState(0);
  const words = isHome ? homeWords : innerWords;
  const intervalSpeed = isHome ? 250 : 300;

  useEffect(() => {
    // Only cycle words when actively loading or on initial load
    if (loaderState !== 'loading' && loaderState !== 'initial') return;
    
    setIndex(0); 

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, [loaderState, isHome, words.length, intervalSpeed]);

  if (loaderState === 'hidden') return null;

  return (
    <div className={`greeting-screen state-${loaderState}`}>
      <h1 className="greeting-word">
        {words[index] || words[words.length - 1]}
      </h1>
    </div>
  );
};

export default Loader;