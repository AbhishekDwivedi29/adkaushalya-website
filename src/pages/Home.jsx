import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import DebutDrop from '../components/DebutDrop';
import Featured from '../components/Featured';
import SocialProof from '../components/SocialProof';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <DebutDrop />
      <Featured />
      <SocialProof />
    </>
  );
};

export default Home;