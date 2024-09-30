import ProductCard from "@/app/shared/components/ProductCard";
import { dummyProducts } from "@/app/shared/helpers/constants.helper";

const FilterProducts = () => {
  const handleAddToCart = (id: number) => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
      {dummyProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          description={product.description}
          price={product.price}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default FilterProducts;
