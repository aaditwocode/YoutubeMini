import React from 'react';
import {
  FaHome,
  FaFire,
  FaYoutube,
  FaHistory,
  FaThumbsUp,
  FaClock,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-[220px] bg-white border-r border-gray-200 h-screen pt-4 box-border">
      <ul className="list-none p-0 m-0">
        <li className="flex items-center px-6 py-3 cursor-pointer text-[16px] text-gray-900 hover:bg-gray-100">
          <span className="mr-6 text-[20px]">
            <FaHome />
          </span>
          Home
        </li>
        <li className="flex items-center px-6 py-3 cursor-pointer text-[16px] text-gray-900 hover:bg-gray-100">
          <span className="mr-6 text-[20px]">
            <FaFire />
          </span>
          Trending
        </li>
        <li className="flex items-center px-6 py-3 cursor-pointer text-[16px] text-gray-900 hover:bg-gray-100">
          <span className="mr-6 text-[20px]">
            <FaYoutube />
          </span>
          Subscriptions
        </li>
        <hr className="my-4 border-gray-200" />
        <li className="flex items-center px-6 py-3 cursor-pointer text-[16px] text-gray-900 hover:bg-gray-100">
          <span className="mr-6 text-[20px]">
            <FaHistory />
          </span>
          History
        </li>
        <li className="flex items-center px-6 py-3 cursor-pointer text-[16px] text-gray-900 hover:bg-gray-100">
          <span className="mr-6 text-[20px]">
            <FaThumbsUp />
          </span>
          Liked Videos
        </li>
        <li className="flex items-center px-6 py-3 cursor-pointer text-[16px] text-gray-900 hover:bg-gray-100">
          <span className="mr-6 text-[20px]">
            <FaClock />
          </span>
          Watch Later
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
