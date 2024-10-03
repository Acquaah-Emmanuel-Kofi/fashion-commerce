"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Filters from "./Filters";
import { filters } from "@/app/shared/helpers/constants.helper";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import SearchBar from "@/app/shared/components/Searchbar";
import ProductTypeButtons from "./ProductTypeButtons";
import FilteredProducts from "./FilteredProducts";
import { useAppDispatch } from "@/redux/store";
import { clearFilters } from "@/redux/features/filtersSlice";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function ProductsPage() {
  const [toggledFilters, setToggledFilters] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState(false);

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

  return (
    <section className="bg-white">
      <main className={`${toggledFilters ? "px-6" : ""}`}>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="flex justify-between items-center px-6">
            <div className="lg:w-1/4 w-1/6 flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button
                type="button"
                onClick={handleToggleFilter}
                className="block lg:hidden"
              >
                {toggledFilters ? <IoIosArrowBack /> : <IoIosArrowForward />}
              </button>
            </div>
            <div>
              <button type="button" onClick={() => handleClearFilters()}>
                Clear filters
              </button>
            </div>
          </div>

          <div className="flex pl-6">
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

                <ProductTypeButtons />
              </div>

              <div className="mt-6 w-[95%]">
                <FilteredProducts />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
