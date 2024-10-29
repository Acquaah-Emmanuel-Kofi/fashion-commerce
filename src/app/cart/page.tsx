"use client";

import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import Layout from "../shared/components/Layout";
import useCart from "@/hooks/useCart";
import Carousel from "../shared/components/carousel/Carousel";
import { useEffect, useState } from "react";
import CarouselPrevButton from "../shared/components/carousel/CarouselPrevButton";
import CarouselNextButton from "../shared/components/carousel/CarouselNextButton";
import { IProduct } from "@/modules/interfaces/products.interface";
import toast from "react-hot-toast";
import useFavorite from "@/hooks/useFavorites";
import { MdClear } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setSelectedItemsToRender } from "@/redux/features/itemsToRenderSlice";

const CartPage = () => {
  const {
    items: cartItems,
    totalAmount,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clear: clearCart,
  } = useCart();
  const { items: favoriteItems, clearFavorites: clearFavorites } =
    useFavorite();

    const dispatch = useAppDispatch();
    const itemsToRender = useAppSelector((state) => state.itemsToRender.itemsToRender);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
    const currentItems = itemsToRender === "cart" ? cartItems : favoriteItems;
    if (currentIndex < currentItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClearAll = () => {
    if (itemsToRender === "cart") {
      clearCart();
      toast.success("All cart items removed!");
    } else {
      clearFavorites();
      toast.success("All favorite items removed!");
    }
  };

  const currentItems = itemsToRender === "cart" ? cartItems : favoriteItems;

  const setActiveView = (itemsToRender: string) => {
    dispatch(setSelectedItemsToRender(itemsToRender))
  }

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-10">
          <h1
            className={`lg:text-lg text-base font-bold cursor-pointer ${
              itemsToRender === "cart" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveView("cart")}
          >
            SHOPPING BAG
          </h1>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveView("favorites")}
              className={`flex justify-between items-center border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9]  ${
                itemsToRender === "favorites" ? "bg-black" : "bg-white"
              }`}
            >
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.27919 9.48979L7.25766 9.14045L7.27919 9.48979ZM4.16808 3.87948L4.14172 4.22849C4.2366 4.23565 4.3303 4.20389 4.40126 4.1405C4.47221 4.07711 4.51431 3.98757 4.51784 3.89249L4.16808 3.87948ZM9.39345 7.60105L9.73816 7.66168L9.39345 7.60105ZM7.25766 9.14045C6.35892 9.19583 5.41962 9.30499 4.50199 9.19854C3.60232 9.09417 2.76301 8.78436 2.08002 8.01982L1.55799 8.48617C2.38652 9.41363 3.40496 9.77597 4.42133 9.89388C5.41974 10.0097 6.45477 9.89125 7.30072 9.83912L7.25766 9.14045ZM2.08002 8.01982C1.4115 7.27148 1.27374 6.26616 1.61525 5.48669C1.94702 4.72943 2.76111 4.12421 4.14172 4.22849L4.19444 3.53048C2.55623 3.40674 1.44003 4.14228 0.974082 5.20578C0.517874 6.24707 0.714989 7.54251 1.55799 8.48617L2.08002 8.01982ZM7.30072 9.83912C7.60445 9.82041 7.92963 9.79931 8.22475 9.7394C8.51975 9.67951 8.8232 9.57396 9.06343 9.35935L8.59708 8.83732C8.48938 8.93354 8.32513 9.00474 8.08549 9.05339C7.84597 9.10201 7.56958 9.12123 7.25766 9.14045L7.30072 9.83912ZM9.73816 7.66168C9.88497 6.82694 10.1189 5.81176 10.116 4.80666C10.113 3.78348 9.86732 2.73078 9.03879 1.80332L8.51675 2.26967C9.19974 3.03421 9.41332 3.90301 9.41598 4.80871C9.41869 5.73249 9.20472 6.65359 9.04874 7.54042L9.73816 7.66168ZM9.03879 1.80332C8.19579 0.859669 6.93067 0.518298 5.84474 0.854663C4.73563 1.19821 3.87938 2.22473 3.81832 3.86648L4.51784 3.89249C4.56929 2.5089 5.26213 1.76794 6.05185 1.52332C6.86475 1.27153 7.84823 1.52133 8.51675 2.26967L9.03879 1.80332ZM9.04874 7.54042C8.99461 7.84821 8.94447 8.12069 8.86925 8.35323C8.79399 8.58589 8.70479 8.7411 8.59708 8.83732L9.06343 9.35935C9.30366 9.14474 9.44263 8.85507 9.53527 8.56866C9.62796 8.28214 9.68544 7.96139 9.73816 7.66168L9.04874 7.54042Z"
                  fill={`${
                    itemsToRender === "favorites" ? "#FFFFFF" : " #1E1E1E"
                  }`}
                />
              </svg>
            </button>
            <h1
              className={`lg:text-lg text-lg font-bold cursor-pointer ${
                itemsToRender === "favorites"
                  ? "font-bold"
                  : "font-normal text-gray-600"
              }`}
              onClick={() => setActiveView("favorites")}
            >
              FAVORITES
            </h1>
          </div>
          {/* Clear Cart Button */}
          {currentItems.length > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              className="text-sm flex items-center gap-1"
            >
              <MdClear size={25} />
              Clear {itemsToRender === "cart" ? "Cart" : "Favorites"}
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Cart Items */}
          <div className="flex border-t-2 border-b-2 border-[#C9C9C9] pt-5 pb-8 lg:w-[60%] fade-right">
            {currentItems.length === 0 ? (
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
                  Your {itemsToRender === "cart" ? "cart" : "favorites"} is
                  empty!
                </p>
                <p>
                  Explore our products and add them to your{" "}
                  {itemsToRender === "cart" ? "cart" : "favorites"}!
                </p>
              </div>
            ) : (
              <Carousel
                visibleImages={isMobile ? 1 : 2}
                currentIndex={currentIndex}
                onNext={handleNext}
                onPrev={handlePrev}
              >
                {currentItems.map((item: IProduct) => (
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

        {currentItems.length > 0 && (
          <div className="items-center gap-3 hidden lg:flex mt-[3%]">
            <CarouselPrevButton
              onPrev={handlePrev}
              disabled={currentIndex === 0}
            />
            <CarouselNextButton
              onNext={handleNext}
              disabled={
                currentIndex >= currentItems.length - (isMobile ? 1 : 2)
              }
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
