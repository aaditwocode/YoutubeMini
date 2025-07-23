import React from 'react';
import { USER_ICON } from '../assets/constants';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start space-x-3 p-2 hover:bg-gray-100 rounded-md">
      <img
        src={USER_ICON}
        alt="user"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
