"use client";

import Layout from "../shared/components/Layout";
import { filters, productTypes } from "../shared/helpers/constants.helper";
import Filters from "./components/Filters";
import pro1 from "../assets/images/product_1.png";
import pro2 from "../assets/images/product_2.png";
import { HiPlus } from "react-icons/hi";
import Image from "next/image";
import SearchBar from "../shared/components/Searchbar";
import { useState } from "react";
import Breadcrumb from "../shared/components/Breadcrumb";


const Products = () => {
  const [selectedProductType, setSelectedProductType] = useState<string | null>(
    null
  );

  const handleSizeClick = (size: string) => {
    setSelectedProductType(size);
    console.log("Selected size:", size);
  };

  return (
    <Layout showFooter={false}>
      <div className="bg-white">
        <main className="px-6">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="flex">
              <div className="lg:w-1/4 w-full">
                <Filters filters={filters} />
              </div>

              <div className="border-2 border-red-500 w-full ml-6">
                <div>
                  <div>
                  </div>

                  <h1 className="font-semibold text-xl">PRODUCTS</h1>

                  <div className="flex items-center gap-10">
                    <div className="w-2/5">
                      <SearchBar />
                    </div>

                    <div className=" w-full flex flex-wrap gap-y-[2px] gap-x-4">
                      {productTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`flex justify-center items-center text-xs w-24 h-5 border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] ${
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
                </div>

  
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Products;
