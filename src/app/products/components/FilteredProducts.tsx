"use client";

import ProductCard from "@/app/shared/components/ProductCard";
import useProducts from "@/hooks/useProducts";

const FilteredProducts = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const productList = products ?? [];

  if (!products) {
    return <div>No Products</div>;
  }
  
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          thumbnail={product.images[0]}
          images={product.images}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default FilteredProducts;
