import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import TrackOrder from './pages/TrackOrder';
import About from './pages/About';
import Founders from './pages/Founders'; // NEW
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio'; // Kept in case you still want the route active
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const AppContent = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [loaderState, setLoaderState] = useState('initial'); 
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === '/');
    setLoaderState('initial');
    document.body.classList.add('locked');

    const timer = setTimeout(() => {
      setLoaderState('leaving');
      setTimeout(() => {
        setLoaderState('hidden');
        document.body.classList.remove('locked');
      }, 700);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname && loaderState === 'hidden') {
      setIsHome(location.pathname === '/');
      document.body.classList.add('locked');
      
      setLoaderState('entering');
      
      setTimeout(() => {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
        setLoaderState('loading');
        
        setTimeout(() => {
          setLoaderState('leaving');
          setTimeout(() => {
            setLoaderState('hidden');
            document.body.classList.remove('locked');
          }, 700);
        }, 1200);
      }, 500);
    }
  }, [location, displayLocation.pathname, loaderState]);

  return (
    <>
      <Loader loaderState={loaderState} isHome={isHome} />
      <Navbar />
      
      <div className="main-content">
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Routes>
      </div>
      
      <Footer />
      <FloatingButtons />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;