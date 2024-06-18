'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const getUnreadMessagesCount = async () => {
    try {
      const res = await fetch('/api/messages/unread-count');

      if (res.status === 200) {
        const data = await res.json();
        setUnreadCount(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUnreadMessagesCount();
  }, []);

  return (
    <MessageContext.Provider value={{ unreadCount, setUnreadCount, loading }}>
      {children}
    </MessageContext.Provider>
  );
};

export function useMessageContext() {
  return useContext(MessageContext);
}
