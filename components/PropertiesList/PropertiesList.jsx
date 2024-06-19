'use client';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [total, setTotal] = useState(0);

  const fetchAllProperties = async () => {
    try {
      const res = await fetch(`/api/properties?page=${page}&pageSize=${pageSize}`);

      if (!res.ok) {
        throw new Error('Failed to load properties');
      }

      const data = await res.json();
      setProperties(data.properties);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
      toast.error('Failed to load properties. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchAllProperties();
  }, [page, pageSize]);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} pageSize={pageSize} total={total} onPageChange={handlePageChange} />
    </section>
  );
};

export default PropertiesList;
