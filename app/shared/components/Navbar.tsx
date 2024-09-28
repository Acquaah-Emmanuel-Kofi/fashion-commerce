const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <button type="button" className="block">
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
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19 9L1 9"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M14 17H1"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <ul className="hidden lg:flex space-x-6 ml-4">
          <li>
            <a href="#" className="text-gray-700 font-medium text-base">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium text-base">
              Collections
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium text-base">
              New
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
