import ColorFilter from "@/app/shared/components/ColorFilter";
import SizeFilter from "@/app/shared/components/SizeFilter";
import React, { Fragment } from "react";

interface ProductInfo {
  name: string;
  price: string;
  description: string;
  type: string;
  colors: string[];
  sizes: string[];
}

const ProductInfo: React.FC<ProductInfo> = ({
  name,
  price,
  description,
  type,
  colors,
  sizes,
}) => {
  return (
    <Fragment>
      <h1 className="text-sm font-bold font-beatrice">
        {name ?? "Product Name"}
      </h1>

      <p className="text-sm font-bold">${price ?? "N/A"}</p>
      <p className="text-gray-600 text-xs font-beatrice">{type ?? "N/A"}</p>

      <p className="text-xs font-semibold mt-9 font-beatrice">
        {description ?? "No description available"}
      </p>

      <div className="space-y-5 mt-16">
        <div>
          <ColorFilter colors={colors} />
        </div>
        <div>
          <SizeFilter sizes={sizes} />
        </div>
      </div>

      <p className="text-slate-400 text-xs my-4">
        FIND YOUR SIZE | MEASUREMENT GUIDE
      </p>
    </Fragment>
  );
};

export default ProductInfo;
