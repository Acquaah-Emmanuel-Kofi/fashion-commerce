import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import pro1 from "../../assets/images/product_1.png";
import pro2 from "../../assets/images/product_2.png";
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
        <h1 className="text-5xl font-bold mb-2 lg:mb-4 relative lg:w-1/4">
          NEW <br /> THIS WEEK{" "}
          <span className="text-[#000E8A] text-2xl font-bold absolute top-7 lg:right-7 right-10">
            (50)
          </span>
        </h1>
      </div>

    </section>
  );
};

export default NewProducts;
