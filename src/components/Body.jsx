import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className={darkTheme ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <button
        onClick={toggleTheme}
        className="p-2 m-2 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        Toggle Theme
      </button>

      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
