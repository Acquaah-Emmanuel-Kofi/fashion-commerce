"use client";

import CustomSelect from "@/app/shared/components/CustomSelect";
import { formatDate } from "@/app/shared/helpers/functions.helper";
import { ApiResponse } from "@/modules/interfaces/common.interface";
import { IOrder } from "@/modules/interfaces/order.interface";
import { hideLoading, showLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/store";
import { patchDataToApi } from "@/services/api";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePrinter } from "react-icons/ai";
import { FaRegNoteSticky } from "react-icons/fa6";

const OrderDetailsInfo: React.FC<IOrder> = ({
  id,
  orderStatus,
  dateCreated,
  dateUpdated,
  contactInfo,
  shippingAddress,
}) => {
  const [status, setStatus] = useState<string>(orderStatus);
   const dispatch = useAppDispatch();

  const options = [
    { value: "DELIVERED", label: "Delivered" },
    { value: "CANCELLED", label: "Cancelled" },
    { value: "PENDING", label: "Pending" },
  ];

  const handleSelect = (value: string) => {
    setStatus(value);
  };

  const handleSave = async () => {
    dispatch(showLoading());
    
    try {
      const response: ApiResponse<IOrder> = await patchDataToApi(
        `/order/update/${id}?status=${status}`
      );

      if (response && response.status === 201) {
        toast.success("Order status updated successfully!");
        setStatus(status);
      } else {
        toast.error(
          `Something went wrong. ${
            response ? response.message : "Unknown error"
          }`
        );
      }
    } catch (error) {
      toast.error(
        `An unexpected error occurred while updating status. ${error}`
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-4">
        <div>
          <h1 className="text-lg font-bold font-beatrice">
            Order ID: <span className="text-gray-600">#{id}</span>
          </h1>
          <p className="text-base text-gray-500">
            {formatDate(dateCreated)} - {formatDate(dateUpdated)}
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
            onClick={handleSave}
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
          <p className="text-base truncate line-clamp-1 whitespace-nowrap max-w-[20rem]">
            <strong>Full Name:</strong>{" "}
            {`${shippingAddress.firstname} ${shippingAddress.lastname}`}
          </p>
          <p className="text-base truncate line-clamp-1 whitespace-nowrap max-w-[20rem]">
            <strong>Email:</strong> {contactInfo.email}
          </p>
          <p className="text-base truncate line-clamp-1 whitespace-nowrap max-w-[20rem]">
            <strong>Phone:</strong> {contactInfo.phone}
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
          <p className="text-base truncate line-clamp-1 whitespace-nowrap max-w-[20rem]">
            <strong>City:</strong> {shippingAddress.city ?? "N/A"}
          </p>
          <p className="text-base truncate line-clamp-1 whitespace-nowrap max-w-[20rem]">
            <strong>Postal Code:</strong> {shippingAddress.postalCode ?? "N/A"}
          </p>
          <p className="text-base truncate line-clamp-1 whitespace-nowrap max-w-[20rem]">
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
