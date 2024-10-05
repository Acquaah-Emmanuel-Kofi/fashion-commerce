"use client";

import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import Layout from "../shared/components/Layout";
import useCart from "@/hooks/useCart";
import Carousel from "../shared/components/carousel/Carousel";
import { useEffect, useState } from "react";
import CarouselPrevButton from "../shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "../shared/components/carousel/CarouselNextButton";
import { ICartItem } from "@/modules/interfaces/products.interface";

const CartPage = () => {
  const {
    items,
    totalAmount,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clear,
  } = useCart();

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
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-10">
          <h1 className="lg:text-2xl text-lg font-bold">SHOPPING BAG</h1>
          <div className="flex items-center gap-2">
            {/* <AddToFavoriteButton /> */}
            <h1 className="lg:text-2xl text-lg text-gray-600 font-semibold">
              FAVOURITES
            </h1>
          </div>
          {/* Clear Cart Button */}
          {items.length > 0 && (
            <button type="button" onClick={clear} className="text-sm">
              Clear Cart
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Cart Items */}
          <div className="flex border-t-2 border-b-2 border-[#C9C9C9] pt-5 pb-8 lg:w-[60%] ">
            {items.length === 0 ? (
              <div className="w-full min-h-[350px] flex justify-center items-center flex-col">
                <p className="text-lg font-semibold flex items-center gap-2">
                  <span>
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.58287 12.8256C2.51504 14 4.24996 14 7.7198 14H8.2802C11.75 14 13.485 14 14.4171 12.8256M1.58287 12.8256C0.650708 11.6511 0.970433 9.86813 1.60989 6.30212C2.06463 3.76617 2.292 2.49819 3.15523 1.74909M1.58287 12.8256C1.58287 12.8256 1.58287 12.8256 1.58287 12.8256ZM14.4171 12.8256C15.3493 11.6511 15.0296 9.86813 14.3901 6.30213C13.9354 3.76617 13.708 2.49819 12.8448 1.74909M14.4171 12.8256C14.4171 12.8256 14.4171 12.8256 14.4171 12.8256ZM12.8448 1.74909C11.9816 1 10.7478 1 8.2802 1H7.7198C5.25223 1 4.01845 1 3.15523 1.74909M12.8448 1.74909C12.8448 1.7491 12.8448 1.74909 12.8448 1.74909ZM3.15523 1.74909C3.15523 1.7491 3.15523 1.74909 3.15523 1.74909Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6 4C6.29112 5.16519 7.07665 6 8 6C8.92335 6 9.70888 5.16519 10 4"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Your cart is empty!
                </p>
                <p>Explore our products and add them to your cart!</p>
              </div>
            ) : (
              <Carousel
                visibleImages={isMobile ? 1 : 2}
                currentIndex={currentIndex}
                onNext={handleNext}
                onPrev={handlePrev}
              >
                {items.map((item: ICartItem) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                ))}
              </Carousel>
            )}
          </div>

          {/* Cart Summary */}
          <CartSummary totalAmount={totalAmount} />
        </div>

        {items.length > 0 && (
          <div className="items-center gap-3 hidden lg:flex mt-[3%]">
            <CarouselPrevButton
              onPrev={handlePrev}
              disabled={currentIndex === 0}
            />
            <CarouselNextButton
              onNext={handleNext}
              disabled={currentIndex >= items.length - (isMobile ? 1 : 2)}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
