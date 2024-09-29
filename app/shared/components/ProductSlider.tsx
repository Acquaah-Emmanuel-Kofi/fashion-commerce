import pro1 from "../../assets/images/product_1.png";
import pro2 from "../../assets/images/product_2.png";
import Image from "next/image";

const ProductSlider = () => {
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

  return (
    <div className="overflow-auto scrollbar-none w-full flex lg:ml-20 lg:h-[320px]">
      <div className="flex space-x-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[170px] lg:w-[300px] h-full bg-white overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.img}
              alt={product.title}
              className="w-full h-[175px] lg:h-[376px] object-cover"
            />

            {/* Product Details */}
            <div className="p-2 block lg:hidden">
              <h1 className="text-sm lg:text-lg font-bold">{product.title}</h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-xs lg:text-sm">
                  {product.description}
                </p>

                <p className="block mt-2 text-black font-semibold lg:text-lg">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
