"use client";

import SearchBar from "@/app/shared/components/Searchbar";
import { useState } from "react";
import Carousel from "@/app/shared/components/carousel/Carousel";
import CarouselPrevButton from "@/app/shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "@/app/shared/components/carousel/CarouselNextButton";
import { dummyProducts } from "@/app/shared/helpers/constants.helper";
import ProductCard from "@/app/shared/components/ProductCard";
import Link from "next/link";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < dummyProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAddToCart = (id: number) => {
    console.log(`Product ${id} added to cart`);
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
              {dummyProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  onAddToCart={handleAddToCart}
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
                disabled={currentIndex >= dummyProducts.length - 3}
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
            {dummyProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.img}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={handleAddToCart}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default Hero;
