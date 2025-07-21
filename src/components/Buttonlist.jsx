// ButtonList.jsx
import React from 'react';
import Button from './button';

const ButtonList = () => {
  const buttonLabels = [
    "All",
    "Cricket",
    "Gaming",
    "Music",
    "News",
    "Sports",
    "Live",
    "Comedy",
    "Coding",
    "Movies",
    "shows",
    "Music",
    "News",
    "Sports",
    "Live",
    "Comedy",
    "Coding",
    "Music",
    "Comedy world"
  ];

  return (
    <div className="flex flex-wrap gap-2 px-4 py-2 bg-white shadow">
      {buttonLabels.map((label, index) => (
        <Button key={index} label={label} />
      ))}
    </div>
  );
};

export default ButtonList;
