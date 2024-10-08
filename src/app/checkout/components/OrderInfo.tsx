"use client";

import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function OrderInfo() {
  const { items, totalAmount } = useCart();

  return (
    <div>
      <div className="flex justify-end">
        <span className="bg-gray-100 text-[#000E8A] w-[30px] h-[30px] flex justify-center items-center">
          ({items.length})
        </span>
      </div>
      <h1 className="text-base font-medium font-beatrice mb-6 px-6">
        YOUR ORDER
      </h1>

      <div className="h-[300px] overflow-y-auto px-6">
        {items.length === 0 ? (
          <div className="w-full min-h-[250px] flex justify-center items-center flex-col">
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
              No Orders Yet!
            </p>
            <p className="text-center">
              Ready to start shopping? Check out our latest products and place
              your first order.
            </p>
          </div>
        ) : (
          <Fragment>
            {items.map((item) => (
              <div key={item.id} className=" mb-4 flex gap-4">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={300}
                  height={376}
                  className="min-w-[113px] w-[113px] h-[134px] object-contain border-2 border-[#D9D9D9]"
                  priority
                />

                <div className="flex flex-col w-full justify-between py-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <h2 className="text-black font-beatrice text-base font-semibold mb-2">
                        {item.name}
                      </h2>
                      <p className="text-gray-700 font-beatrice text-sm font-semibold">
                        {item.color ?? "Color"}/{item.size ?? "Size"}
                      </p>
                    </div>

                    <Link href={`/products/${item.id}`}>
                      <button type="button" className="underline font-semibold">
                        Change
                      </button>
                    </Link>
                  </div>

                  <div className="flex justify-between ">
                    <p className="text-[#000E8A] font-semibold">
                      ({item.quantity})
                    </p>
                    <p className="text-black">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        )}
      </div>

      <div className="px-6">
        <div className="w-full h-1 bg-[#DFDFDF] my-6"></div>

        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium font-beatrice mb-4">Subtotal</h2>
          <p className="text-black font-beatrice text-lg font-semibold">
            ${totalAmount}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium font-beatrice mb-4">Shipping</h2>
          <p className="text-black font-beatrice text-lg font-semibold">
            $0.00
          </p>
        </div>

        <div className="w-full h-1 bg-[#DFDFDF] my-6"></div>

        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium font-beatrice mb-4">Total</h2>
          <p className="text-black font-beatrice text-lg font-semibold">
            ${totalAmount}
          </p>
        </div>
      </div>
    </div>
  );
}
