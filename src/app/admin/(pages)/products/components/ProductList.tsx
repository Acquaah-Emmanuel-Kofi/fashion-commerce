"use client"

import NotAvailable from "@/app/shared/components/NotAvailable";
import ProductCardSkeleton from "@/app/shared/components/ProductCardSkeleton";
import useProducts from "@/hooks/useProducts";
import { IProduct } from "@/modules/interfaces/products.interface";
import React from "react";
import AdminProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error, refetch } = useProducts();

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-5">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] lg:h-[500px] bg-gray-100 border-2 border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold">Oops! Something went wrong.</h2>
        <p className="text-gray-600">
          We were unable to fetch products. Please try again later.
        </p>
        <button
          onClick={refetch}
          className="mt-4 px-4 py-2 bg-black text-white "
        >
          Refetch Products
        </button>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <NotAvailable
        title="There Are No Products Available"
        subTitle="Please try again later or adjust your filters."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
      {products.map((product: IProduct) => (
        <AdminProductCard
          key={product.id}
          id={product.id}
          thumbnail={product.images?.[0]}
          images={product.images}
          name={product.name}
          type={product.type}
          price={product.price}
          description={product.description}
          size={product.size}
          color={product.color}
          quantity={1}
        />
      ))}
    </div>
  );
};

export default ProductList;