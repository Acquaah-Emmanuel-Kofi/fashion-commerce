import { useCurrency } from "@/hooks/useCurrency";
import React from "react";

interface CurrencyDisplayProps {
  amount: number;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ amount }) => {
  const { currency, loading } = useCurrency();

  if (loading)
    return (
      <div className="w-24 space-y-1">
        <div className="h-2 w-full bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-2 w-2/4 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-2 w-3/12 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    );

  return (
    <span className="text-2xl font-bold truncate">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(amount)}
    </span>
  );
};

export default CurrencyDisplay;
