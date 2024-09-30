"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Filters from "./components/Filters";
import Layout from "../shared/components/Layout";
import { filters, productTypes } from "../shared/helpers/constants.helper";
import Breadcrumb from "../shared/components/Breadcrumb";
import SearchBar from "../shared/components/Searchbar";
import { Provider } from "react-redux";
import store from "@/redux/store";
import FilteredProducts from "./components/FilteredProducts";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function Products() {
  const [toggledFilters, setToggledFilters] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(
    null
  );

  const handleSizeClick = (size: string) => {
    setSelectedProductType(size);
  };

  const handleToggleFilter = () => {
    if (!toggledFilters) {
      setToggledFilters(true);
      setTimeout(() => {
        setIsHidden(true);
      }, 300);
    } else {
      setIsHidden(false);
      setTimeout(() => {
        setToggledFilters(false);
      }, 0);
    }
  };

  return (
    <Provider store={store}>
      <Layout showFooter={false}>
        <div className="bg-white">
          <main className={`${toggledFilters ? "px-6" : "pl-6"}`}>
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="w-1/4 flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Filters</h2>
                <button
                  type="button"
                  onClick={handleToggleFilter}
                  className="block lg:hidden"
                >
                  {toggledFilters ? <IoIosArrowBack /> : <IoIosArrowForward />}
                </button>
              </div>
              <div className="flex">
                <div
                  className={`lg:w-1/4 w-full relative transition-transform duration-300 ${
                    toggledFilters ? "-translate-x-full" : "translate-x-0"
                  } ${isHidden ? "hidden" : ""}`}
                >
                  <div className="sticky top-6">
                    <Filters filters={filters} />
                  </div>
                </div>

                <div className="w-full lg:ml-6 overflow-hidden">
                  <div className="w-full flex flex-col items-center justify-center mb-3 lg:block">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 className="font-semibold text-2xl">PRODUCTS</h1>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-[55%] w-full">
                      <SearchBar />
                    </div>

                    <div className="w-full h-full grid grid-rows-2 grid-flow-col overflow-x-auto scrollbar-none gap-y-[2px] gap-x-4">
                      {productTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`flex justify-center items-center text-xs  w-24 h-5 border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] ${
                            selectedProductType === type
                              ? "bg-black text-white"
                              : "bg-white text-black"
                          }`}
                          onClick={() => handleSizeClick(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 w-[95%]">
                    <FilteredProducts />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </Provider>
  );
}
