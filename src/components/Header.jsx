import React from 'react';
import { HAM_ICON, LOGO_ICON, USER_ICON, SEARCH_ICON } from '../assets/constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'; // Ensure the path is correct

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 items-center px-4 py-2 shadow">
      {/* Left: Hamburger + Logo */}
      <div className="col-span-2 flex items-center gap-4">
        <img
          src={HAM_ICON}
          alt="Sidemenu Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img src={LOGO_ICON} alt="logo" className="w-14 h-14" />
      </div>

      {/* Middle: Search Box */}
      <div className="col-span-8 flex justify-center items-center gap-2">
        <input
          type="text"
          className="border px-2 py-1 rounded-full bg-gray-200 w-1/2"
          placeholder="Enter your text"
        />
        <button className="bg-gray-300 px-3 py-1 rounded-full hover:bg-red-500 flex items-center justify-center">
          <img src={SEARCH_ICON} alt="search icon" className="w-5 h-5" />
        </button>
      </div>

      {/* Right: User Icon */}
      <div className="col-span-2 flex justify-end items-center">
        <img src={USER_ICON} alt="user icon" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Header;
