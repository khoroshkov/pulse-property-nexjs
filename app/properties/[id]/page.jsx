'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';

import PropertyHeader from '@/components/PropertyHeader/PropertyHeader';
import PropertyDetails from '@/components/PropertyDetails/PropertyDetails';
import BookmarkButton from '@/components/Buttons/BookmarkButton';
import ShareButton from '@/components/Buttons/ShareButton';
import PropertyContactForm from '@/components/PropertyContactForm/PropertyContactForm';
import Spinner from '@/components/Spinner/Spinner';
import { FaArrowLeft } from 'react-icons/fa';
import PropertyImages from '@/components/PropertyImages/PropertyImages';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!property) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !isLoading) {
    return <h1 className="text-center text-2xl font-bold mt-20">No property found</h1>;
  }

  return (
    <>
      {isLoading && <Spinner loading={isLoading} />}

      {!isLoading && property && (
        <>
          <PropertyHeader image={property.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center">
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>

          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />

                <aside className="space-y-4">
                  <BookmarkButton property={property} />
                  <ShareButton property={property} />
                  <PropertyContactForm property={PropertyContactForm} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
