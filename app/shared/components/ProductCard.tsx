import Image from "next/image";
import { IProductProps } from "../interfaces/constants.interface";
import Link from "next/link";

const ProductCard: React.FC<IProductProps> = ({
  img,
  title,
  description,
  price,
  id
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="w-full max-h-[250px] lg:max-h-[450px] bg-white overflow-hidden"
    >
      <div className="relative">
        <Image
          src={img}
          alt={title}
          className="w-full max-h-[200px] lg:max-h-[400px] object-cover"
          width={300}
          height={376}
        />
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
    </Link>
  );
};

export default ProductCard;
