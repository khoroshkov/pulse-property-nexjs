'use client';
import { createContext, useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export const AuthContext = createContext();

export const Context = ({ children }) => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  useEffect(() => {
    if (session && session?.user?.id) {
      console.log('session', session);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, signIn, signOut, providers, session }}>
      {children}
    </AuthContext.Provider>
  );
};
