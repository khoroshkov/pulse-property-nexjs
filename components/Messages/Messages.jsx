'use client';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner/Spinner';
import MessageCard from './MessageCard';

const Messages = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const getAllMessages = async () => {
    try {
      const res = await fetch('api/messages');

      if (res.status === 200) {
        const messages = await res.json();
        setMessages(messages);
      }
    } catch (error) {
      console.log(error);
      toast.error('Can not get messages right now. Try again later');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Messages</h1>
          <div className="space-y-4">
            {loading ? <Spinner loading={loading} /> : null}

            {!loading && messages.length === 0 ? (
              <p>You have no messages</p>
            ) : (
              messages.map((message) => <MessageCard key={message._id} message={message} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
