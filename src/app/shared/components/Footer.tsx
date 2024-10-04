import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-50 text-gray-800 min-h-[calc(100vh-80px)] relative">
      <div className="container mx-auto px-6 lg:mt-[5%] flex flex-col-reverse lg:flex-row justify-between items-center">
        {/* Left Section: Info Links */}
        <div className="flex lg:flex-col lg:space-y-20 w-4/5 lg:w-auto justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-xs mb-8 text-gray-400">INFO</h1>
            <ul>
              <li className="hover:underline cursor-pointer uppercase text-gray-400 text-sm">
                Pricing
              </li>
              <li className="hover:underline cursor-pointer uppercase text-gray-400 text-sm">
                About
              </li>
              <li className="hover:underline cursor-pointer uppercase text-gray-400 text-sm">
                Contacts
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h1 className="text-xs mb-8">LANGUAGES</h1>
            <ul>
              <li className="hover:underline cursor-pointer text-gray-400 text-sm">
                ENG
              </li>
              <li className="hover:underline cursor-pointer text-gray-400 text-sm">
                ESP
              </li>
              <li className="hover:underline cursor-pointer text-gray-400 text-sm">
                SVE
              </li>
            </ul>
          </div>
        </div>

        {/* Center Section: Technologies */}
        <div className="text-center mb-8 md:mb-0 h-[310px]">
          <h2 className="lg:text-left text-center text-gray-400">
            Technologies
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <h1 className="text-7xl tracking-wider font-extrabold text-black">
              <span className="text-gray-200">VR</span> <br />
              XIV <br />
              QR
            </h1>
            <p className="text-sm text-gray-500">Near-field communication</p>
          </div>
        </div>

        <div></div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full flex justify-around items-center mt-8 text-sm text-gray-500 absolute bottom-2 ">
        <p></p>
        <p>© 2024 — copyright</p>
        <p className="hover:underline cursor-pointer">privacy</p>
      </div>
    </footer>
  );
}
