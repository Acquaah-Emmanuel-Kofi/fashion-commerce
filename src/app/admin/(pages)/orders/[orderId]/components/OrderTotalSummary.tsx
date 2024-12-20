"use client";

import CurrencyDisplay from "@/app/shared/components/CurrencyDisplay";
import React from "react";

export default function OrderTotalSummary({
  subTotal,
  totalAmount,
  shippingCost,
  tax,
}: {
  subTotal: number;
  totalAmount: number;
  shippingCost: number;
  tax: number;
}) {
  return (
    <div className="p-4 bg-white space-y-4 lg:w-[400px] w-full">
      <h2 className="font-semibold font-beatrice">Order Total Summary</h2>
      <div className="flex justify-between w-full ">
        <p className="text-base font-beatrice">Subtotal</p>
        <CurrencyDisplay
          amount={subTotal}
          className="font-semibold text-base"
        />
      </div>

      <div className="flex justify-between w-full ">
        <p className="text-base font-beatrice">Shipping</p>
        <CurrencyDisplay
          amount={shippingCost}
          className="font-semibold text-base"
        />
      </div>

      <div className="flex justify-between w-full ">
        <p className="text-base font-beatrice">Tax</p>
        <CurrencyDisplay amount={tax} className="font-semibold text-base" />
      </div>

      <div className="border border-dashed border-gray-200"></div>

      <div className="flex justify-between w-full ">
        <p className="text-xl font-semibold font-beatrice">Total</p>
        <CurrencyDisplay
          amount={totalAmount}
          className="font-semibold text-base"
        />
      </div>
    </div>
  );
}
