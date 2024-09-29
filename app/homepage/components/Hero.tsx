import ProductSlider from "@/app/shared/components/ProductSlider";
import SearchBar from "@/app/shared/components/Searchbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    return (
      <main className="flex flex-col px-6">
        <div className=" w-full lg:w-1/4">
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

          <div className="mt-6">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-end">
          <div className="w-full lg:w-1/4">
            <div className="lg:mt-18 mt-[20%]">
              <h1 className="text-5xl font-bold mb-2 lg:mb-4">
                NEW COLLECTION
              </h1>
              <p>
                Summer <br /> 2024
              </p>
            </div>

            <div className="block mt-[10%] lg:hidden">
              <ProductSlider />
            </div>

            <div className="lg:mt-[37%] mt-[5%] flex justify-between gap-5 items-center">
              <button
                type="button"
                className="flex justify-between items-center bg-[#D9D9D9] py-2.5 px-4 lg:w-full w-1/2"
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

              <div className="items-center gap-3 hidden lg:flex">
                <button
                  type="button"
                  className="flex justify-between items-center border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9]"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  type="button"
                  className="flex justify-between items-center border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9]"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[70%]">
            <ProductSlider />
          </div>
        </div>
      </main>
    );
}

export default Hero;