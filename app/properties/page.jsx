import React from 'react';
import PropertySearch from '@/components/Hero/PropertySearch';
import PropertiesList from '@/components/PropertiesList';

const PropertiesPage = async () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearch />
        </div>
      </section>

      <PropertiesList />
    </>
  );
};

export default PropertiesPage;
