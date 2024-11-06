import CurrencyDisplay from "@/app/shared/components/CurrencyDisplay";
import React from "react";

interface StatsCardProps {
  title: string;
  value: number;
  percentage: number;
  isLoading: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  isLoading,
}) => {
  return (
    <div className="bg-white p-4 w-full md:w-1/4 flex flex-col gap-4 jump-xs">
      <h3 className="text-gray-500 font-beatrice">{title}</h3>
      <div className="flex items-center gap-2">
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
        {isLoading ? (
          <div className="w-24 space-y-1">
            <div className="h-2 w-full bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-2 w-2/4 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        ) : (
          <CurrencyDisplay
            amount={value}
            className="text-2xl font-bold"
          />
        )}
      </div>
      {isLoading ? (
        <span className="h-4 w-8 bg-green-200 rounded-md animate-pulse"></span>
      ) : (
        <span className="text-green-500">{percentage}%</span>
      )}
    </div>
  );
};

export default StatsCard;
