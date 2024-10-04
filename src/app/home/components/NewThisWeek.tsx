"use client";

import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Carousel from "@/app/shared/components/carousel/Carousel";
import CarouselPrevButton from "@/app/shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "@/app/shared/components/carousel/CarouselNextButton";
import { IProduct } from "@/modules/interfaces/products.interface";

interface ThisWeekProductsProps {
  products: IProduct[];
}

export default function NewThisWeek({ products }: ThisWeekProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Only execute this code on the client side
    if (typeof window !== "undefined") {
      const checkScreenWidth = () => {
        const width = window.innerWidth;
        setIsMobile(width < 768); // Update state based on screen width
      };

      // Initial check
      checkScreenWidth();

      // Add event listener for window resize
      window.addEventListener("resize", checkScreenWidth);

      // Cleanup function to remove event listener when component unmounts
      return () => {
        window.removeEventListener("resize", checkScreenWidth);
      };
    }
  }, []);

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
        <h1 className="text-5xl font-bold font-beatrice">
          NEW <br /> THIS WEEK{" "}
          <sup className="text-[#000E8A] text-2xl font-bold font-sans">
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
            visibleImages={isMobile ? 2 : 4}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            {products?.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="w-full bg-white overflow-hidden hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-[200px] lg:h-[350px] object-cover border-2 border-[#D9D9D9]"
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
            ))}
          </Carousel>
        </div>
      </main>

      <div className="flex items-center justify-center gap-3 mt-6">
        <CarouselPrevButton onPrev={handlePrev} disabled={currentIndex === 0} />
        <CarouselNextButton
          onNext={handleNext}
          disabled={currentIndex >= products.length - (isMobile ? 2 : 4)}
        />
      </div>
    </section>
  );
}
