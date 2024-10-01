"use client";

import Image from "next/image";
import { FiX } from "react-icons/fi";
import { IProduct } from "@/modules/interfaces/products.interface";
import AddToFavoriteButton from "@/app/shared/components/AddToFavoriteButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Link from "next/link";

const CartItem = ({ thumbnail, title, description, price, id, quantity }: IProduct) => {
  return (
    <Link
      href={`/products/${id}`}
      className="flex justify-between relative lg:w-[350px]"
    >
      <button
        type="button"
        className="absolute top-0 right-0 text-gray-600 hover:text-gray-800"
      >
        <FiX size={20} />
      </button>
      <div className="w-[300px] max-h-[350px] lg:max-h-[450px] bg-white overflow-hidden cursor-pointer">
        <div className="relative">
          <Image
            src={thumbnail}
            alt={title}
            className="w-full max-h-[200px] lg:max-h-[400px] object-cover border-2 border-[#D9D9D9]"
            width={300}
            height={376}
            priority
          />
          <div className="absolute bottom-0 right-0">
            <AddToFavoriteButton />
          </div>
        </div>

        <div className="p-2">
          <h1 className="text-gray-600 text-sm lg:text-base line-clamp-1">
            {title}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-base lg:text-lg font-bold line-clamp-1">
              {description}
            </p>
            <p className="block mt-2 text-black font-semibold lg:text-lg">
              ${price}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <p className="text-sm font-bold text-black">L</p>

        <div className="w-7 h-7" style={{ background: "black" }}></div>

        <div className="flex flex-col items-center">
          <button className="w-7 h-7 flex text-xs items-center justify-center border border-[#8A8A8A] hover:bg-gray-200 disabled:text-[#8A8A8A]">
            <FaPlus />
          </button>
          <span className="w-7 h-7 flex text-sm font-bold items-center justify-center border border-[#8A8A8A]">
            {quantity}
          </span>
          <button className="w-7 h-7 flex text-xs items-center justify-center border border-[#8A8A8A] hover:bg-gray-200 disabled:text-[#8A8A8A]">
            <FaMinus />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
