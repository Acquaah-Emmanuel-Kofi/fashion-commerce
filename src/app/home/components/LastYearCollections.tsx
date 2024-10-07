"use client";

import { lastYearCollectionsFilterButtons } from "@/app/shared/helpers/constants.helper";
import { IProduct } from "@/modules/interfaces/products.interface";
import { getLastYearCollections } from "@/services/products/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import ProductPlaceholder from "../placeholders/ProductPlaceholder";

const date = new Date();
const year = date.getFullYear();
const lastYear = year - 1;

export default function LastYearCollections() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [gender, setGender] = useState<string>("all");
  const [error, setError] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    const fetchCollections = async () => {
      setError(false);
      try {
        const data = await getLastYearCollections(true, gender);
        setProducts(data);
      } catch (error) {
        setProducts([]);
        setError(true);
        console.error("Error fetching last year collections:", error);
      }
    };

    fetchCollections();
  }, [gender]);

  const handleAddToCart = (id: string) => {
    console.log(`Product ${id} added to cart`);
  };

  const handleGenderChange = (newGender: string) => {
    setGender(newGender.toLowerCase());
    setVisibleCount(3);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section id="collections" className="my-20 px-6">
      <div>
        <h1 className="text-5xl font-bold font-beatrice">
          XIV <br /> COLLECTIONS <br /> {lastYear.toString().slice(-2)} -{" "}
          {year.toString().slice(-2)}
        </h1>
      </div>

      <main>
        <div className="flex justify-between items-center mb-5 border-b-2 border-[#DFDFDF] pb-4 my-6">
          <ul className="flex items-center gap-7">
            {lastYearCollectionsFilterButtons.map((button) => (
              <li key={button}>
                <button
                  type="button"
                  onClick={() => handleGenderChange(button)}
                  className={`text-sm ${
                    gender === button.toLowerCase()
                      ? "font-bold"
                      : "text-[#8A8A8A]"
                  }`}
                >
                  {gender === button.toLowerCase() ? `(${button})` : button}
                </button>
              </li>
            ))}
          </ul>
          <div>
            <Link href="/products">
              <button type="button" className="text-gray-500">
                See all
              </button>
            </Link>
          </div>
        </div>

        {error ? (
          <div className="text-red-500 text-center text-lg mt-10">
            Error fetching {gender} collections
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            {products ? (
              products.slice(0, visibleCount).map((product, index) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className={`w-full bg-white overflow-hidden hover:shadow-lg transition-opacity duration-700 ease-in-out ${
                    index >= visibleCount - 3 && index < visibleCount
                      ? "opacity-100 translate-y-10"
                      : "opacity-100 translate-y-0"
                  }`}
                  style={{
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                  }}
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-[350px] lg:h-[350px] object-cover border-2 border-[#D9D9D9]"
                      width={300}
                      height={376}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product.id);
                      }}
                      className="flex justify-between bg-[#DCDCDC70] text-[#0C0C0C] hover:bg-black hover:text-white transition items-center p-2.5 absolute bottom-1 left-2/4 -translate-x-2/4"
                    >
                      <HiPlus />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-2">
                    <h1 className="text-gray-600 text-sm lg:text-base line-clamp-1 font-beatrice">
                      {product.type}
                    </h1>
                    <div className="flex items-center justify-between">
                      <p className="text-base lg:text-lg font-medium line-clamp-1 font-beatrice">
                        {product.name}
                      </p>
                      <p className="block mt-2 text-black font-medium lg:text-lg">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {Array.from({ length: 3 }).map((item, index) => (
                  <ProductPlaceholder key={`${Number(item) + index}`} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* "More" Button */}
        {visibleCount < products.length && ( // Only show button if there are more products to show
          <div className="flex justify-center items-center w-full mt-[15%] lg:mt-[5%]">
            <button
              type="button"
              onClick={handleLoadMore}
              className="flex flex-col justify-center items-center gap-1"
            >
              <span className="text-[#8A8A8A] text-base">More</span>
              <span className="animate-bounce">
                <IoChevronDownOutline size={25} />
              </span>
            </button>
          </div>
        )}
      </main>
    </section>
  );
}
