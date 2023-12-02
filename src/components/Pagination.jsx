import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <a
        href="#"
        className="flex items-center px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#088397] border rounded-md gap-x-2 hover:bg-[#076777]  dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>

        <span>previous</span>
      </a>

      <div className="items-center hidden md:flex gap-x-3">
        <a
          href="#"
          className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
        >
          1
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-[#088397] hover:text-white"
        >
          2
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-[#088397] hover:text-white"
        >
          3
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-[#088397] hover:text-white"
        >
          ...
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-[#088397] hover:text-white"
        >
          12
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-[#088397] hover:text-white"
        >
          13
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-[#088397] hover:text-white"
        >
          14
        </a>
      </div>

      <a
        href="#"
        className="flex items-center px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#088397] border rounded-md gap-x-2 hover:bg-[#076777]  dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <span>Next</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default Pagination;
