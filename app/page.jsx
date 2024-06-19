import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import InfoBoxes from '@/components/InfoBoxes/InfoBoxes';
import HomeProperties from '@/components/HomeProperties/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
