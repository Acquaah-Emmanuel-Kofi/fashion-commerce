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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const products = [
  {
    id: 1,
    img: pro1,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 2,
    img: pro2,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 3,
    img: pro1,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 4,
    img: pro2,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

const Products = () => {
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
    <Layout showFooter={false}>
      <div className="bg-white">
        <main className="px-6">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="w-1/4 flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button type="button" onClick={handleToggleFilter} className="block lg:hidden">
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

              <div className="w-full lg:ml-6">
                <div className="w-full flex flex-col items-center justify-center mb-3 lg:block">
                  <Breadcrumb items={breadcrumbItems} />
                  <h1 className="font-semibold text-2xl">PRODUCTS</h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="lg:w-2/5 w-full">
                    <SearchBar />
                  </div>

                  <div className="w-full flex flex-wrap gap-y-[2px] gap-x-4">
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

                <div className="mt-6">
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="w-[170px] lg:w-[300px] bg-white overflow-hidden"
                      >
                        <div className="relative">
                          <Image
                            src={product.img}
                            alt={product.title}
                            className="w-full h-[175px] lg:h-[376px] object-cover"
                          />
                          <button
                            type="button"
                            className="flex justify-between bg-[#DCDCDC70] text-[#0C0C0C] items-center p-2.5 absolute bottom-1 left-2/4 -translate-x-2/4"
                          >
                            <HiPlus />
                          </button>
                        </div>

                        <div className="p-2">
                          <h1 className="text-sm lg:text-lg font-bold">
                            {product.title}
                          </h1>
                          <div className="flex items-center justify-between">
                            <div className="text-gray-600 text-xs lg:text-sm">
                              {product.description}
                            </div>
                            <label
                              htmlFor="price"
                              className="block mt-2 text-black font-semibold lg:text-lg"
                            >
                              ${product.price}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
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
