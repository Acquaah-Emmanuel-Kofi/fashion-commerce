"use client";

import NoProductsAvailable from "@/app/shared/components/NoProductsAvailable";
import ProductCard from "@/app/shared/components/ProductCard";
import ProductCardSkeleton from "@/app/shared/components/ProductCardSkeleton";
import useProducts from "@/hooks/useProducts";
import { IProduct } from "@/modules/interfaces/products.interface";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const FilteredProducts = () => {
  const { products, loading, error } = useProducts();

  const keyword = useAppSelector((state) => state.search.keyword);
  const selectedType = useAppSelector((state) => state.filters.selectedType);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    let filtered = products;

    if (keyword) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
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

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-[300px] lg:h-[500px] bg-gray-100 border-2 border-gray-300 rounded-lg">
        Error: {error}
      </div>
    );

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  if (!displayProducts || displayProducts.length === 0) {
    return <NoProductsAvailable />;
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
