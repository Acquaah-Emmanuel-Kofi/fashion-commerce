"use client";

import CustomSelect from "@/app/shared/components/CustomSelect";
import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { FaRegNoteSticky } from "react-icons/fa6";

interface OrderDetailsProps {
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  orderInfo: {
    shippingMethod: string;
    paymentMethod: string;
    status: string;
  };
  deliveryAddress: {
    address: string;
    city: string;
    region: string;
    country: string;
  };
  paymentInfo: {
    cardType: string;
    maskedCardNumber: string;
    businessName: string;
    phone: string;
  };
  orderDate: {
    start: string;
    end: string;
  };
}

const OrderDetailsInfo: React.FC<OrderDetailsProps> = ({
  orderId,
  customer,
  orderInfo,
  orderDate,
}) => {
  const [status, setStatus] = useState(orderInfo.status);

  const options = [
    { value: "DELIVERED", label: "Delivered" },
    { value: "CANCELLED", label: "Cancelled" },
    { value: "PENDING", label: "Pending" },
  ];

  const handleSelect = (value: string) => {
    setStatus(value);
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-lg font-bold font-beatrice">
            Order ID: <span className="text-gray-600">#{orderId}</span>
          </h1>
          <p className="text-base text-gray-500">
            {orderDate.start} - {orderDate.end}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[200px]">
            <CustomSelect
              options={options}
              onSelect={handleSelect}
              placeholder="Change status"
            />
          </div>
          <button type="button" className="bg-gray-300 p-2">
            <AiOutlinePrinter size={25} />
          </button>
          <button
            type="button"
            className="bg-black hover:bg-slate-800 text-white px-4 py-2"
          >
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Customer Info */}
        <div className="bg-white p-4 border-2 border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black flex justify-center items-center w-9 h-9 rounded">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.99998"
                  cy="4.42857"
                  r="3.42857"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M13 13.8571C13 11.9636 10.3137 10.4286 7 10.4286C3.68629 10.4286 1 11.9636 1 13.8571"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold font-beatrice">Customer</h2>
          </div>
          <p className="text-base">
            <strong>Full Name:</strong> {customer.name}
          </p>
          <p className="text-base">
            <strong>Email:</strong> {customer.email}
          </p>
          <p className="text-base">
            <strong>Phone:</strong> {customer.phone}
          </p>
        </div>

        {/* Order Info */}
        <div className="bg-white p-4 border-2 border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black flex justify-center items-center w-9 h-9 rounded">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.58287 12.8256C2.51504 14 4.24996 14 7.7198 14H8.2802C11.75 14 13.485 14 14.4171 12.8256M1.58287 12.8256C0.650708 11.6511 0.970433 9.86813 1.60989 6.30212C2.06463 3.76617 2.292 2.49819 3.15523 1.74909M1.58287 12.8256C1.58287 12.8256 1.58287 12.8256 1.58287 12.8256ZM14.4171 12.8256C15.3493 11.6511 15.0296 9.86813 14.3901 6.30213C13.9354 3.76617 13.708 2.49819 12.8448 1.74909M14.4171 12.8256C14.4171 12.8256 14.4171 12.8256 14.4171 12.8256ZM12.8448 1.74909C11.9816 1 10.7478 1 8.2802 1H7.7198C5.25223 1 4.01845 1 3.15523 1.74909M12.8448 1.74909C12.8448 1.7491 12.8448 1.74909 12.8448 1.74909ZM3.15523 1.74909C3.15523 1.7491 3.15523 1.74909 3.15523 1.74909Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 4C6.29112 5.16519 7.07665 6 8 6C8.92335 6 9.70888 5.16519 10 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold font-beatrice">
              Shipping Address
            </h2>
          </div>
          <p className="text-base">
            <strong>City:</strong> Accra
          </p>
          <p className="text-base">
            <strong>Postal Code:</strong> 00233
          </p>
          <p className="text-base">
            <strong>Order Status:</strong> {status}
          </p>
        </div>

        {/* Notes */}
        <div className="bg-white p-4 border-2 border-gray-100 ">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black flex justify-center items-center w-9 h-9 rounded">
              <FaRegNoteSticky color="white" />
            </div>
            <h2 className="text-lg font-semibold font-beatrice">Note</h2>
          </div>
          <textarea
            className="w-full mt-2 p-2 border resize-none"
            rows={3}
            placeholder="Type some notes"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsInfo;
