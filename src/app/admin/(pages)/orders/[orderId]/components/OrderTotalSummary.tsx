import React from 'react'

export default function OrderTotalSummary () {
    return (
      <div className="p-4 bg-white space-y-4">
        <h2 className="font-semibold font-beatrice">Order Total Summary</h2>
        <div className="flex justify-between w-full ">
          <p className="text-base">Subtotal</p>
          <p className="font-semibold text-base">GHS3,203</p>
        </div>

        <div className="flex justify-between w-full ">
          <p className="text-base">Tax (20%)</p>
          <p className="font-semibold text-base">GHS6,023</p>
        </div>

        <div className="flex justify-between w-full ">
          <p className="text-base">Discount</p>
          <p className="font-semibold text-base">GHS0</p>
        </div>

        <div className='border border-dashed border-gray-200'></div>

        <div className="flex justify-between w-full ">
          <p className="text-xl font-semibold">Total</p>
          <p className="font-semibold text-xl">GHS9,226</p>
        </div>
      </div>
    );
}