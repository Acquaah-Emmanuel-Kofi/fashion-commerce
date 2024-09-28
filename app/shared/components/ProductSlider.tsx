import pro1 from "../../assets/images/product_1.png";
import pro2 from "../../assets/images/product_2.png";
import Image from "next/image";

const ProductSlider = () => {
  return (
    <div className="lg:relative overflow-auto scrollbar-none lg:h-[calc(100vh-130px)] w-full">
      <div className="flex space-x-4 lg:absolute lg:bottom-3">
        <Image
          src={pro1}
          alt="Product 1"
          className="w-[170px] h-[175px] lg:w-[366px] lg:h-[376px] object-cover"
        />
        <Image
          src={pro2}
          alt="Product 2"
          className="w-[170px] h-[175px] lg:w-[366px] lg:h-[376px] object-cover"
        />
        <Image
          src={pro1}
          alt="Product 1"
          className="w-[170px] h-[175px] lg:w-[366px] lg:h-[376px] object-cover"
        />
        <Image
          src={pro2}
          alt="Product 2"
          className="w-[170px] h-[175px] lg:w-[366px] lg:h-[376px] object-cover"
        />
      </div>
    </div>
  );
};

export default ProductSlider;
