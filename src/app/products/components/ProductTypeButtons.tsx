"use client";

import { ProductTypeButton } from "@/modules/types/common.type";
import { setSelectedType } from "@/redux/features/filtersSlice";
import { useAppDispatch } from "@/redux/store";
import { getButtonTypes } from "@/services/products/api";
import { useEffect, useState } from "react";

const ProductTypeButtons = () => {
  const [productTypes, setProductTypes] = useState<ProductTypeButton[]>([]);

  useEffect(() => {
    const fetchButtonTypes = async () => {
      try {
        const types = await getButtonTypes();
        setProductTypes(types);
      } catch (error) {
        console.error("Error fetching products button types:", error);
      }
    };

    fetchButtonTypes();
  }, []);

  const dispatch = useAppDispatch();
  const [selectedProductType, setSelectedProductType] = useState<string>("");

  const handleProductTypeChange = (type: string) => {
    setSelectedProductType(type);
    dispatch(setSelectedType(type));
  };

  return (
    <div className="w-full h-full grid xs:grid-rows-2 lg:grid-rows-2 grid-flow-col overflow-x-auto scrollbar-none gap-y-[2px] gap-x-4">
      {productTypes.map((type) => (
        <button
          key={type.id}
          type="button"
          className={`flex justify-center items-center text-xs w-[130px] h-5 bg-white border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] jump-xs ${
            selectedProductType === type.name ? "text-black" : "text-[#5E5E5E]"
          }`}
          onClick={() => handleProductTypeChange(type.name)}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
};

export default ProductTypeButtons;
