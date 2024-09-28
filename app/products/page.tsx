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
                    <Breadcrumb items={breadcrumbItems} />
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

                <div className="mt-6">
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="w-[170px] lg:w-[300px]  bg-white overflow-hidden"
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
