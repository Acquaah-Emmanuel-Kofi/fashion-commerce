import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";

export default function DashboardNavbar() {
  return (
    <div className="flex justify-end items-center p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500" />
        <div className="relative">
          <button className="flex items-center">
            <span className="font-bold font-beatrice">ADMIN</span>
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
