import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SearchBar from "./Searchbar";
import ProductSlider from "./ProductSlider";

const Sidebar = () => {
  return (
    <div className="lg:w-1/4 w-full p-6">
      <div>
        <ul>
          <li>
            <h3 className="text-gray-700 uppercase">Men</h3>
          </li>
          <li>
            <h3 className="text-gray-700 uppercase">Women</h3>
          </li>
          <li>
            <h3 className="text-gray-700 uppercase">Kids</h3>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <SearchBar />
      </div>

      <div className="lg:mt-18 mt-12">
        <h1 className="text-5xl font-bold mb-2 lg:mb-4">NEW COLLECTION</h1>
        <p>
          Summer <br /> 2024
        </p>
      </div>

      <div className="block mt-12 lg:hidden">
        <ProductSlider />
      </div>

      <div className="mt-28 flex justify-between gap-5 items-center">
        <button
          type="button"
          className="flex justify-between items-center bg-[#D9D9D9] py-2.5 px-4 w-full"
        >
          Go To Shop
          <svg
            width="50"
            height="14"
            viewBox="0 0 50 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H48.5M48.5 7L42.5 1M48.5 7L42.5 13"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex justify-between items-center border border-[#D9D9D9] p-2.5"
          >
            <IoIosArrowBack />
          </button>
          <button
            type="button"
            className="flex justify-between items-center border border-[#D9D9D9] p-2.5"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
