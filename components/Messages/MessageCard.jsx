'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useMessageContext } from '@/context/messageContext';

const MessageCard = ({ message }) => {
  const { setUnreadCount } = useMessageContext();
  const { body, createdAt, name, phone, email, read, property, sender, _id } = message;
  const [isRead, setIsRead] = useState(read);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleReadMessage = async (id) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: 'PUT'
      });

      if (res.status === 200) {
        const { read } = await res.json();
        setIsRead(read);
        setUnreadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));
        if (read) {
          toast.success('Marked as read');
        } else {
          toast.success('Marked as new');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Can not mark this message as read. Please try again later.');
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const res = await fetch(`api/messages/${id}`, {
        method: 'DELETE'
      });
      if (res.status === 200) {
        setIsDeleted(true);
        setUnreadCount((prevCount) => prevCount - 1);
        toast.success('Message successfully deleted');
      }
    } catch (error) {
      console.log(error);
      toast.error('Can not delete this message. Please try again later.');
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-3 bg-yellow-500 text-white px-2 py-1 rounded-md">
          New
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry:</span> {property.name}
      </h2>
      <p className="text-gray-700">{body}</p>

      <ul className="mt-4">
        <li>
          <strong>Name:</strong> {sender.username}
        </li>

        <li>
          <strong>Reply Email:</strong>{' '}
          <a href={`mailto:${email}`} className="text-blue-500">
            {email}
          </a>
        </li>
        <li>
          <strong>Reply Phone:</strong>{' '}
          <a href={`tel:${phone}`} className="text-blue-500">
            {phone}
          </a>
        </li>
        <li>
          <strong>Received:</strong> {new Date(createdAt).toLocaleString()}
        </li>
      </ul>
      <button
        className={`mt-4 mr-3 ${
          isRead ? 'bg-gray-300' : 'bg-blue-500 text-white'
        } py-1 px-3 rounded-md`}
        onClick={() => handleReadMessage(_id)}>
        {isRead ? 'Mark as New' : 'Mark As Read'}
      </button>
      <button
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"
        onClick={() => handleDeleteMessage(_id)}>
        Delete
      </button>
    </div>
  );
};

export default MessageCard;
