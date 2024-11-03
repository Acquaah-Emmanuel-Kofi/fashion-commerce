"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "@/app/shared/components/Searchbar";
import Carousel from "@/app/shared/components/carousel/Carousel";
import CarouselPrevButton from "@/app/shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "@/app/shared/components/carousel/CarouselNextButton";
import { IProduct } from "@/modules/interfaces/products.interface";
import { useAppDispatch } from "@/redux/store";
import { setSelectedCollection } from "@/redux/features/collectionSlice";
import { lastYearCollectionsFilterButtons } from "@/app/shared/helpers/constants.helper";
import ProductCard from "@/app/shared/components/ProductCard";

interface HeroProps {
  products: IProduct[];
}

export default function Hero({ products }: HeroProps) {
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleCollectionChange = (type: string) => {
    dispatch(setSelectedCollection(type));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenWidth = () => {
        const width = window.innerWidth;
        setIsMobile(width < 768); 
      };

      checkScreenWidth();

      window.addEventListener("resize", checkScreenWidth);

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

  return (
    <main className="flex flex-col px-6">
      <div className=" w-full lg:w-1/4 font-beatrice">
        <ul>
          {lastYearCollectionsFilterButtons
            .slice(1, 4)
            .map((button: string, index: number) => (
              <li key={index}>
                <Link
                  href="#collections"
                  className="text-gray-700 uppercase"
                  onClick={() => handleCollectionChange(button.toLowerCase())}
                >
                  {button}
                </Link>
              </li>
            ))}
        </ul>

        <div className="mt-4">
          <SearchBar />
        </div>
      </div>

      <div className="flex items-end">
        <div className="w-full lg:w-1/4">
          <div className="lg:mt-18 mt-[20%] jump-xs">
            <h1 className="text-5xl font-bold lg:mb-4 font-beatrice">
              NEW COLLECTION
            </h1>
            <p className="font-beatrice text-base">
              Summer <br /> 2024
            </p>
          </div>

          <div className="block mt-[10%] lg:hidden fade-down">
            <Carousel
              visibleImages={isMobile ? 2 : 3}
              currentIndex={currentIndex}
              onNext={handleNext}
              onPrev={handlePrev}
            >
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  thumbnail={product.images[0]}
                  images={product.images}
                  name={product.name}
                  types={product.types}
                  price={product.price}
                  description={product.description}
                  size={product.size}
                  color={product.color}
                  quantity={1}
                />
              ))}
            </Carousel>
          </div>

          <div className="lg:mt-[37%] mt-[5%] flex justify-between gap-5 items-center">
            <Link href="/products" className="lg:w-full w-1/2">
              <button
                type="button"
                className="group flex justify-between items-center bg-[#D9D9D9] py-2.5 px-4 w-full font-beatrice text-sm lg:text-base hover:bg-black hover:text-white transition-colors"
              >
                Go To Shop
                <svg
                  width="50"
                  height="14"
                  viewBox="0 0 50 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black stroke-black group-hover:fill-white group-hover:stroke-white transition-all duration-500 transform fade-right"
                >
                  <path
                    d="M1 7H48.5M48.5 7L42.5 1M48.5 7L42.5 13"
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
                disabled={currentIndex >= products?.length - (isMobile ? 2 : 3)}
              />
            </div>
          </div>
        </div>

        {products && (products?.length === 0) ? (
          <div className="hidden lg:block lg:w-[70%] lg:ml-10 fade-left">
            <h1>Oops! There are no new collections yet. 👀</h1>
          </div>
        ) : (
          <div className="hidden lg:block lg:w-[70%] lg:ml-10 fade-left">
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
                  images={product.images}
                  thumbnail={product.images[0]}
                  name={product.name}
                  types={product.types}
                  price={product.price}
                  showProductDetails={false}
                  description={product.description}
                  size={product.size}
                  color={product.color}
                  quantity={1}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </main>
  );
}
