import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { IProductProps } from "../interfaces/constants.interface";

const ProductCard: React.FC<IProductProps> = ({
  id,
  img,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="w-[160px] lg:w-[300px] bg-white overflow-hidden">
      <div className="relative">
        <Image
          src={img}
          alt={title}
          className="w-full max-h-[200px] lg:max-h-[400px] object-cover"
          width={300} 
          height={376}
        />
        <button
          type="button"
          className="flex justify-between bg-[#DCDCDC70] text-[#0C0C0C] items-center p-2.5 absolute bottom-1 left-2/4 -translate-x-2/4"
          onClick={() => onAddToCart(id)}
        >
          <HiPlus />
        </button>
      </div>

      <div className="p-2">
        <h1 className="text-sm lg:text-lg font-bold">{title}</h1>
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-xs lg:text-sm">{description}</div>
          <label
            htmlFor="price"
            className="block mt-2 text-black font-semibold lg:text-lg"
          >
            ${price}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
