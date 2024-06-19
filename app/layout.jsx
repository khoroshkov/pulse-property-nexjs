import React from 'react';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import { MessageContextProvider } from '@/context/messageContext';
import { Context } from '@/context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import '@/assets/styles/global.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rental, find properties'
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <MessageContextProvider>
        <html lang="en">
          <body>
            <Context>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </Context>
            <ToastContainer />
          </body>
        </html>
      </MessageContextProvider>
    </AuthProvider>
  );
};

export default MainLayout;
