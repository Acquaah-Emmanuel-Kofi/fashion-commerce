"use client";

import ProductCard from "@/app/shared/components/ProductCard";
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  if (!displayProducts || displayProducts.length === 0) {
    return <div>No Products Available</div>;
  }

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
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
