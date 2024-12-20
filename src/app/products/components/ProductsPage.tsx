"use client";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Filters from "./Filters";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import SearchBar from "@/app/shared/components/Searchbar";
import ProductTypeButtons from "./ProductTypeButtons";
import FilteredProducts from "./FilteredProducts";
import { useAppDispatch } from "@/redux/store";
import { clearFilters } from "@/redux/features/filtersSlice";
import { MdClear } from "react-icons/md";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function ProductsPage() {
  const [toggledFilters, setToggledFilters] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleClearFilters = () => {
    dispatch(clearFilters());
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

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setToggledFilters(true);
      setIsHidden(true)
    }
  }, []);

  return (
    <section className="bg-white">
      <main>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="flex justify-between items-center lg:px-6 px-2 mb-6">
            <div className="lg:w-1/4 w-1/6 flex justify-between gap-4 items-center">
              <h2 className="font-semibold text-lg font-beatrice">Filters</h2>
              <button
                type="button"
                onClick={handleToggleFilter}
                className="block lg:hidden"
              >
                {toggledFilters ? <IoIosArrowForward /> : <IoIosArrowBack />}
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleClearFilters()}
                className="flex items-center gap-1"
              >
                <MdClear size={25} />
                Clear filters
              </button>
            </div>
          </div>

          <div className="flex w-[95%] lg:w-full mx-auto lg:pl-6">
            <div
              className={`lg:w-1/4 w-full relative transition-transform duration-300 ${
                toggledFilters ? "-translate-x-full" : "translate-x-0"
              } ${isHidden ? "hidden" : ""}`}
            >
              <div className="sticky top-6">
                <Filters />
              </div>
            </div>

            <div className="w-full lg:ml-6 overflow-hidden ">
              <div className="w-full flex flex-col items-center justify-center mb-3 lg:block">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="font-semibold text-2xl font-beatrice mt-3">
                  PRODUCTS
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-[55%] w-full">
                  <SearchBar />
                </div>

                <ProductTypeButtons />
              </div>

              <div className="mt-6 lg:w-[95%]">
                <FilteredProducts />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
