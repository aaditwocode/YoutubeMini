import React, { useEffect, useState, useRef } from 'react';
import { HAM_ICON, LOGO_ICON, USER_ICON, SEARCH_ICON } from '../assets/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchquery, setsearchquery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchquery.trim()) {
        if (searchCache[searchquery]) {
          setSuggestions(searchCache[searchquery]);
        } else {
          getSuggestions(searchquery);
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchquery]);

  const getSuggestions = async (query) => {
    try {
      const res = await fetch(`${YOUTUBE_SEARCH_API}${query}`);
      const data = await res.json();
      const topFive = data[1].slice(0, 5);
      setSuggestions(topFive);

      dispatch(cacheResults({ [query]: topFive }));
    } catch (err) {
      console.error('Failed to fetch suggestions', err);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 items-center px-4 py-2 shadow relative bg-white z-20">
      {/* Left */}
      <div className="col-span-2 flex items-center gap-4">
        <img
          src={HAM_ICON}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img src={LOGO_ICON} alt="logo" className="w-14 h-14" />
      </div>

      {/* Middle */}
      <div className="col-span-8 flex flex-col items-center relative">
        <div className="flex gap-2 items-center w-full justify-center">
          <input
            type="text"
            ref={inputRef}
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="border px-3 py-1 rounded-full bg-gray-100 w-1/2 focus:outline-none"
            placeholder="Search YouTube"
          />
          <button className="bg-gray-200 px-3 py-1 rounded-full">
            <img src={SEARCH_ICON} alt="search" className="w-5 h-5" />
          </button>
        </div>

        {isFocused && suggestions.length > 0 && (
          <ul className="bg-white border mt-1 rounded w-1/2 absolute top-full left-1/2 transform -translate-x-1/2 shadow z-10">
            {suggestions.map((sugg, idx) => (
              <li
                key={idx}
                className="px-4 py-2 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setsearchquery(sugg);
                  setIsFocused(false);
                }}
              >
                {sugg}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right */}
      <div className="col-span-2 flex justify-end items-center">
        <img src={USER_ICON} alt="user" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Header;
