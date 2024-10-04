"use client";

import NotAvailable from "@/app/shared/components/NotAvailable";
import ProductCard from "@/app/shared/components/ProductCard";
import ProductCardSkeleton from "@/app/shared/components/ProductCardSkeleton";
import useProducts from "@/hooks/useProducts";
import { IProduct } from "@/modules/interfaces/products.interface";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const FilteredProducts = () => {
  const { products, loading, error, refetch } = useProducts();

  const keyword = useAppSelector((state) => state.search.keyword);
  const selectedType = useAppSelector((state) => state.filters.selectedType);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    let filtered = products;

    if (keyword) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(keyword.toLowerCase()) ||
          product.type.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(
        (product) =>
          product.type.toLowerCase().trim() ===
          selectedType.toLowerCase().trim()
      );
    }

    setFilteredProducts(filtered);
  }, [keyword, selectedType, products]);

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

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] lg:h-[500px] bg-gray-100 border-2 border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold">No products available</h2>
        <p className="text-gray-600">
          Sorry, we couldn&apos;t find any products matching your search
          criteria.
        </p>
      </div>
    );
  }

  if (error)
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

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  if (!displayProducts || displayProducts.length === 0) {
    return (
      <NotAvailable
        title="No Products Found"
        subTitle="Please try again later or adjust your filters."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
      {displayProducts.map((product: IProduct) => (
        <ProductCard
          key={product.id}
          id={product.id}
          thumbnail={product.images?.[0]}
          images={product.images}
          name={product.name}
          type={product.type}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default FilteredProducts;
