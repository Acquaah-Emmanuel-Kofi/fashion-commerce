"use client";

import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import Carousel from "@/app/shared/components/carousel/Carousel";
import CarouselPrevButton from "@/app/shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "@/app/shared/components/carousel/CarouselNextButton";
import { IProduct } from "@/modules/interfaces/products.interface";

interface ThisWeekProductsProps {
  products: IProduct[];
}

export default function NewProducts ({ products }: ThisWeekProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleAddToCart = (id: string) => {
    console.log(`Product ${id} added to cart`);
  };

    if (!products) {
      return <div>No Products</div>;
    }

  return (
    <section id="new-this-week" className="">
      <div className="lg:mt-24 mt-12 px-6">
        <h1 className="text-5xl font-bold">
          NEW <br /> THIS WEEK{" "}
          <sup className="text-[#000E8A] text-2xl font-bold">
            ({products.length})
          </sup>
        </h1>
      </div>

      <main>
        <div className="flex justify-end items-center mb-5 px-6">
          <Link href="/products">
            <button type="button" className="text-gray-500">
              See all
            </button>
          </Link>
        </div>

        <div>
          <Carousel
            visibleImages={4}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            {products?.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="w-full max-h-[250px] lg:max-h-[450px] bg-white overflow-hidden relative"
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
          </Carousel>
        </div>
      </main>

      <div className="flex items-center justify-center gap-3 mt-6">
        <CarouselPrevButton onPrev={handlePrev} disabled={currentIndex === 0} />
        <CarouselNextButton
          onNext={handleNext}
          disabled={currentIndex >= products.length - 4}
        />
      </div>
    </section>
  );
};