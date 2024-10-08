"use client";

import Image from "next/image";
import { FiX } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { IProduct } from "@/modules/interfaces/products.interface";
import toast from "react-hot-toast";
import AddToFavoriteButton from "@/app/shared/components/AddToFavoriteButton";

const CartItem = ({
  item,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}: {
  item: IProduct;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}) => {
  const handleRemoveFromCart = (id: string) => {
    removeItem(id);
    toast.success("Successfully removed item from cart!");
  };

  return (
    <div className="flex justify-between relative lg:w-[350px] w-[300px]">
      <button
        type="button"
        className="absolute top-0 right-0 text-gray-600 hover:text-gray-800"
        onClick={() => handleRemoveFromCart(item.id)}
      >
        <FiX size={20} />
      </button>
      <Link
        href={`/products/${item.id}`}
        className="w-[300px]  bg-white overflow-hidden cursor-pointer"
      >
        <div className="relative">
          <Image
            src={item.images[0]}
            alt={item.name}
            className="lg:w-full w-[90%] max-h-[250px] lg:max-h-[350px] object-contain border-2 border-[#D9D9D9]"
            width={300}
            height={376}
            priority
          />
          <div className="absolute bottom-0 right-0">
            <AddToFavoriteButton products={item} />
          </div>
        </div>

        <div className="p-2">
          <h1 className="text-gray-600 text-sm lg:text-base line-clamp-1 font-beatrice">
            {item.type}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-base lg:text-lg font-medium line-clamp-1 font-beatrice">
              {item.name}
            </p>
            <p className="block mt-2 text-black font-medium lg:text-lg">
              ${item.price}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-col justify-center gap-4">
        <p className="text-sm font-bold text-black">{item.size}</p>
        <div className="w-7 h-7" style={{ background: item.color }}></div>

        <div className="flex flex-col items-center">
          <button
            className="w-7 h-7 flex text-xs items-center justify-center border border-[#8A8A8A] hover:bg-gray-200"
            onClick={() => increaseQuantity(item.id)}
          >
            <FaPlus />
          </button>
          <span className="w-7 h-7 flex text-sm font-bold items-center justify-center border border-[#8A8A8A]">
            {item.quantity}
          </span>
          <button
            className="w-7 h-7 flex text-xs items-center justify-center border border-[#8A8A8A] hover:bg-gray-200"
            onClick={() => decreaseQuantity(item.id)}
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
