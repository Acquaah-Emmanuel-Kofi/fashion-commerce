import React from "react";

export default function OrderTotalSummary({
  subTotal,
  totalAmount,
}: {
  subTotal: number;
  totalAmount: number;
}) {
  return (
    <div className="p-4 bg-white space-y-4 lg:w-[400px] w-full">
      <h2 className="font-semibold font-beatrice">Order Total Summary</h2>
      <div className="flex justify-between w-full ">
        <p className="text-base font-beatrice">Subtotal</p>
        <p className="font-semibold text-base">GHS{subTotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between w-full ">
        <p className="text-base font-beatrice">Shipping</p>
        <p className="font-semibold text-base">GHS0</p>
      </div>

      <div className="border border-dashed border-gray-200"></div>

      <div className="flex justify-between w-full ">
        <p className="text-xl font-semibold font-beatrice">Total</p>
        <p className="font-semibold text-xl">GHS{totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}
