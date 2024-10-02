"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "@/app/shared/components/Searchbar";
import Carousel from "@/app/shared/components/carousel/Carousel";
import ProductCard from "@/app/shared/components/ProductCard";
import CarouselPrevButton from "@/app/shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "@/app/shared/components/carousel/CarouselNextButton";
import { IProducts } from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "@/services/api";

export default async function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const response: IProducts = await fetchDataFromApi(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/product/new-collection`
  );

  const products = response.data;

  if (!response) {
    return <div>Error fetching data.</div>;
  }

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
            <h1 className="text-5xl font-bold mb-2 lg:mb-4">NEW COLLECTION</h1>
            <p>
              Summer <br /> 2024
            </p>
          </div>

          <div className="block mt-[10%] lg:hidden">
            <Carousel
              visibleImages={3}
              currentIndex={currentIndex}
              onNext={handleNext}
              onPrev={handlePrev}
            >
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  thumbnail={product.thumbnail}
                  images={product.images}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </Carousel>
          </div>

          <div className="lg:mt-[37%] mt-[5%] flex justify-between gap-5 items-center">
            <Link href="/products" className="lg:w-full w-1/2">
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
            </Link>

            <div className="items-center gap-3 hidden lg:flex">
              <CarouselPrevButton
                onPrev={handlePrev}
                disabled={currentIndex === 0}
              />
              <CarouselNextButton
                onNext={handleNext}
                disabled={currentIndex >= products.length - 3}
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[70%] lg:ml-10">
          <Carousel
            visibleImages={3}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                images={product.images}
                thumbnail={product.images[0]}
                name={product.name}
                description={product.description}
                price={product.price}
                showProductDetails={false}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}
