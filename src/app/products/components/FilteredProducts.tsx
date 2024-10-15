"use client";

import NotAvailable from "@/app/shared/components/NotAvailable";
import ProductCard from "@/app/shared/components/ProductCard";
import ProductCardSkeleton from "@/app/shared/components/ProductCardSkeleton";
import useProducts from "@/hooks/useProducts";
import {
  IProduct,
  IProductDetails,
} from "@/modules/interfaces/products.interface";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const FilteredProducts = () => {
  const { products, loading, error, refetch } = useProducts();

  const keyword = useAppSelector((state) => state.search.keyword);
  const selectedType = useAppSelector((state) => state.filters.selectedType);
  const otherFilter = useAppSelector((state) => state.filters.otherFilters);
  const [filteredProducts, setFilteredProducts] = useState<IProductDetails[]>(
    []
  );

  useEffect(() => {
    if (!products || products.length === 0) return;

    let filtered = products;

    if (keyword) {
      filtered = filtered.filter(
        (product: IProduct) =>
          product.name.toLowerCase().includes(keyword.toLowerCase()) ||
          product.type.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(
        (product: IProduct) =>
          product.type.toLowerCase().trim() ===
          selectedType.toLowerCase().trim()
      );
    }

    if (otherFilter) {
      if (otherFilter.sizes) {
        filtered = filtered.filter((product: IProductDetails) =>
          product.sizes?.includes(otherFilter.sizes)
        );
      }

      if (otherFilter.colors) {
        filtered = filtered.filter((product: IProductDetails) =>
          product.colors?.includes(otherFilter.color)
        );
      }

      if (otherFilter.categories) {
        filtered = filtered.filter((product: IProductDetails) =>
          product.categories?.includes(otherFilter.categories.toLowerCase())
        );
      }

      if (otherFilter.availability) {
        filtered = filtered.filter(
          (product: IProductDetails) =>
            product.available === (otherFilter.availability === "true")
        );
      }
    }

    setFilteredProducts(filtered);
  }, [keyword, selectedType, products, otherFilter]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
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
          className="mt-4 px-4 py-2 bg-black hover:bg-slate-800 text-white "
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

  if (filteredProducts.length === 0) {
    return (
      <NotAvailable
        title={`No results for: ${keyword || selectedType}`}
        subTitle="Sorry, we couldn't find any products matching your search criteria."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
      {filteredProducts.map((product: IProduct) => (
        <ProductCard
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

export default FilteredProducts;
