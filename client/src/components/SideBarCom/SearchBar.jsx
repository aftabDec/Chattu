import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full mt-5 px-5 py-6">
      <label className="flex items-center gap-2 bg-blue-950 rounded-xl border border-blue-900 p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary-light">
        <input
          type="text"
          className="flex-grow w-full bg-transparent border-none outline-none placeholder-gray-400 text-gray-400"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-7 h-7 cursor-pointer text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
