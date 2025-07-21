
import React from 'react';

const Button = ({ label }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-400">
      {label}
    </button>
  );
};

export default Button;
