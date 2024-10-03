"use client";

import ProductCard from "@/app/shared/components/ProductCard";
import useProducts from "@/hooks/useProducts";

const FilteredProducts = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div>No Products Available</div>;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            thumbnail={product.images?.[0]}
            images={product.images}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
