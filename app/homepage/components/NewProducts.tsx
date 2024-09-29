import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import pro1 from "../../../assets/images/product_1.png";
import pro2 from "../../../assets/images/product_2.png";
import Image from "next/image";
import { HiPlus } from "react-icons/hi";

const NewProducts = () => {
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
    <section>
      <div className="lg:mt-24 mt-12 px-6">
        <h1 className="text-5xl font-bold">
          NEW <br /> THIS WEEK{" "}
          <sup className="text-[#000E8A] text-2xl font-bold">(50)</sup>
        </h1>
      </div>

      <main>
        <div className="flex justify-end items-center mb-5 px-6">
          <button type="button" className="flex text-gray-500">
            See all
          </button>
        </div>

        <div className="overflow-auto scrollbar-none w-full pl-6 flex">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[170px] lg:w-[366px]  bg-white overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={product.img}
                    alt={product.title}
                    className="w-full h-[175px] lg:h-[376px] object-cover"
                  />
                  <button
                    type="button"
                    className="flex justify-between bg-[#DCDCDC70] text-[#0C0C0C] items-center p-2.5 absolute bottom-1 left-2/4 -translate-x-2/4"
                  >
                    <HiPlus />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-2">
                  <h1 className="text-sm lg:text-lg font-bold">
                    {product.title}
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600 text-xs lg:text-sm">
                      {product.description}
                    </div>
                    <label
                      htmlFor="price"
                      className="block mt-2 text-black font-semibold lg:text-lg"
                    >
                      ${product.price}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          type="button"
          className="flex justify-between items-center border border-[#D9D9D9] hover:bg-[#D9D9D9] p-2.5"
        >
          <IoIosArrowBack />
        </button>
        <button
          type="button"
          className="flex justify-between items-center border border-[#D9D9D9] hover:bg-[#D9D9D9] p-2.5"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default NewProducts;
