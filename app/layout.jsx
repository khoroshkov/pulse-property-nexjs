import React from 'react';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import { Context } from '@/context/authContext';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import '@/assets/styles/global.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rental, find properties'
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Context>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Context>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
