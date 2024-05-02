import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import InfoBoxes from '@/components/InfoBoxes/InfoBoxes';
import HomeProperties from '@/components/HomeProperties/HomeProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
