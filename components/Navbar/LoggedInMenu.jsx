'use client';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthContext } from '@/context/authContext.js';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import UnreadMessageCount from './UnreadMessageCount';

const LoggedInMenu = () => {
  const { isLoggedIn, signIn, signOut, providers, session, loading } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileImage = session?.user?.image;

  const handleProfileMenuOpen = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="hidden md:block md:ml-6">
        {!isLoggedIn && (
          <div className="flex items-center">
            <button
              className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              onClick={() => signIn(providers?.google?.id)}>
              <FaGoogle className="text-white mr-2" /> Login or Register
            </button>
          </div>
        )}
      </div>

      {isLoggedIn && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
          <Link href="/messages" className="relative group">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <UnreadMessageCount />
          </Link>
          {/* <!-- Profile dropdown button --> */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}>
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src={profileImage || profileDefault}
                  alt="user profile avatar"
                  height={0}
                  width={0}
                  sizes="100vw"
                />
              </button>
            </div>

            {/* <!-- Profile dropdown --> */}
            {isProfileOpen && (
              <div
                id="user-menu"
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                  onClick={() => setIsProfileOpen(false)}>
                  Your Profile
                </Link>
                <Link
                  href="/properties/saved"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={() => setIsProfileOpen(false)}>
                  Saved Properties
                </Link>
                <button
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoggedInMenu;
