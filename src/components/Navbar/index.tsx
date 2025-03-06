"use client"; // Add this if using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import "../../app/globals.css";
import Logo from "../../../public/MercuriMart.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 flex justify-end">
        <AccountCircleIcon className="my-auto"/>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none cursor-pointer border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        English
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-5 mt-8 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                English
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Myanmar
              </a>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
}
