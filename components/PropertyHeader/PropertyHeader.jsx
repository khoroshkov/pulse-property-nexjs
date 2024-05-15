import React from 'react';
import Image from 'next/image';

const PropertyHeader = ({ image }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src={image}
            alt=""
            className="object-cover h-[400px] w-full"
            width="1800"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;
