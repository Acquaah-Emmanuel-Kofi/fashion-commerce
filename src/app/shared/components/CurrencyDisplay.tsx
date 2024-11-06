import { useCurrency } from "@/hooks/useCurrency";
import React from "react";

interface CurrencyDisplayProps {
  amount: number;
  className?: string;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  amount,
  className,
}) => {
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
    <span className={`truncate ${className}`}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      })
        .format(amount)
        .replace(/\s/g, "")}
    </span>
  );
};

export default CurrencyDisplay;
