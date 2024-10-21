import ColorFilter from "@/app/shared/components/ColorFilter";
import SizeFilter from "@/app/shared/components/SizeFilter";
import React, { Fragment, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { IProductDetails } from "@/modules/interfaces/products.interface";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";

interface IProducts {
  products: IProductDetails;
}

const ProductInfo: React.FC<IProducts> = ({ products }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const cartItem = {
        ...products,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
      };
      addItem(cartItem)
      
    } else {
      toast.error("Please select a size and color before adding to the cart.");
    }
  };

  return (
    <Fragment>
      <h1 className="text-lg font-bold font-beatrice">
        {products.name ?? "Product Name"}
      </h1>

      <p className="text-lg font-bold">${products.price ?? "N/A"}</p>

      <p className="text-gray-600 text-sm font-beatrice">
        {products.type ?? "N/A"}
      </p>

      <p className="text-sm font-semibold mt-9 font-beatrice">
        {products.description ?? "No description available"}
      </p>

      <div className="space-y-5 mt-16">
        <div>
          <ColorFilter colors={products.colors} onSelect={setSelectedColor} />
        </div>
        <div>
          <SizeFilter sizes={products.sizes} onSelect={setSelectedSize} />
        </div>
      </div>

      <p className="text-slate-400 text-xs my-4">
        FIND YOUR SIZE | MEASUREMENT GUIDE
      </p>

      <AddToCartButton onAddToCart={handleAddToCart} />
    </Fragment>
  );
};

export default ProductInfo;
