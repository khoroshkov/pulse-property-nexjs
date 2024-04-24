'use client';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const Context = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
  );
};
