import ColorFilter from "@/app/shared/components/ColorFilter";
import SizeFilter from "@/app/shared/components/SizeFilter";
import React, { Fragment, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { IProductDetails } from "@/modules/interfaces/products.interface";
import useCart from "@/hooks/useCart";

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
        quantity: 0,
      };
      addItem(cartItem);
    } else {
      alert("Please select a size and color before adding to the cart.");
    }
  };

  return (
    <Fragment>
      <h1 className="text-sm font-bold font-beatrice">
        {products.name ?? "Product Name"}
      </h1>

      <p className="text-sm font-bold">${products.price ?? "N/A"}</p>
      <p className="text-gray-600 text-xs font-beatrice">
        {products.type ?? "N/A"}
      </p>

      <p className="text-xs font-semibold mt-9 font-beatrice">
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
