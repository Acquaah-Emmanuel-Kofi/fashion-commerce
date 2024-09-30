"use client";

import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { dummyProducts } from "@/app/shared/helpers/constants.helper";
import { useState } from "react";
import Carousel from "@/app/shared/components/carousel/Carousel";
import CarouselPrevButton from "@/app/shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "@/app/shared/components/carousel/CarouselNextButton";
import Link from "next/link";

const NewProducts = () => {
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
    <section>
      <div className="lg:mt-24 mt-12 px-6">
        <h1 className="text-5xl font-bold">
          NEW <br /> THIS WEEK{" "}
          <sup className="text-[#000E8A] text-2xl font-bold">(50)</sup>
        </h1>
      </div>

      <main>
        <div className="flex justify-end items-center mb-5 px-6">
          <button type="button" className="flex text-gray-500">
            See all
          </button>
        </div>

        <div>
          <Carousel
            visibleImages={4}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            {dummyProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="w-full max-h-[250px] lg:max-h-[450px] bg-white overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={product.img}
                    alt={product.title}
                    className="w-full max-h-[200px] lg:max-h-[400px] object-cover"
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
              </Link>
            ))}
          </Carousel>
        </div>
      </main>

      <div className="flex items-center justify-center gap-3 mt-6">
        <CarouselPrevButton onPrev={handlePrev} disabled={currentIndex === 0} />
        <CarouselNextButton
          onNext={handleNext}
          disabled={currentIndex >= dummyProducts.length - 3}
        />
      </div>
    </section>
  );
};

export default NewProducts;
