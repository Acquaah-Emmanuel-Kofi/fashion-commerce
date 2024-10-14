import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";

export default function DashboardNavbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <div className="flex lg:justify-end justify-between items-center p-4 bg-white border-b z-50">
      <button
        type="button"
        className="block lg:hidden mr-4 text-gray-600"
        onClick={toggleSidebar}
      >
        <svg
          width="28"
          height="18"
          viewBox="0 0 28 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 1L1 1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19 9L1 9"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 17H1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500" />
        <div className="relative">
          <button className="flex items-center">
            <span className="font-bold font-beatrice hidden lg:block">ADMIN</span>
            <Image
              src="https://res.cloudinary.com/dvul0elbb/image/upload/e_gen_background_replace:prompt_Light_blue_background_with_soft_reflections/wmlmb18y1i769f7obc9w"
              alt="Admin"
              width={300}
              height={300}
              className="h-8 w-8 rounded-full ml-2 object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
