import pro1 from "../../assets/images/product_1.png";
import pro2 from "../../assets/images/product_2.png";
import ProductCard from "@/app/shared/components/ProductCard";

const products = [
  {
    id: 1,
    img: pro1,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 2,
    img: pro2,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 3,
    img: pro1,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 4,
    img: pro2,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
];

const FilterProducts = () => {
  const handleAddToCart = (id: number) => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
      {products.map((product) => (
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
