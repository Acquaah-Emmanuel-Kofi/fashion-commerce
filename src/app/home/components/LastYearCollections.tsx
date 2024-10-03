"use client";

import { lastYearCollectionsFilterButtons } from "@/app/shared/helpers/constants.helper";
import { IProduct } from "@/modules/interfaces/products.interface";
import { getLastYearCollections } from "@/services/products/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";

const date = new Date();
const year = date.getFullYear();
const lastYear = year - 1;

export default function LastYearCollections() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [gender, setGender] = useState<string>("all");

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getLastYearCollections(gender === "all", gender);
        setProducts(data);
      } catch (error) {
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
  };

    if (!products) {
      return <div>No Products</div>;
    }

  return (
    <section id="collections" className="mt-20 px-6">
      <div>
        <h1 className="text-5xl font-bold">
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
                    gender === button
                      ? "font-bold border-brackets"
                      : "text-[#8A8A8A]"
                  }`}
                >
                  {gender === button ? `(${button})` : button}
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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {products.slice(0, 3)?.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="w-full max-h-[300px] lg:max-h-[500px] bg-white overflow-hidden relative"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full max-h-[200px] lg:max-h-[400px] object-cover border-2 border-[#D9D9D9]"
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

              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-200 ease-in-out"></div>

              {/* Product Details */}
              <div className="p-2">
                <h1 className="text-gray-600 text-sm lg:text-base line-clamp-1">
                  {product.name}
                </h1>
                <div className="flex items-center justify-between">
                  <p className="text-base lg:text-lg font-bold line-clamp-1">
                    {product.description}
                  </p>
                  <p className="block mt-2 text-black font-semibold lg:text-lg">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center w-full mt-6">
          <button type="button" className="flex flex-col justify-center items-center gap-1">
            <span className="text-[#8A8A8A] text-base">More</span>
            <span className="animate-bounce">
              <IoChevronDownOutline size={25} />
            </span>
          </button>
        </div>
      </main>
    </section>
  );
}
