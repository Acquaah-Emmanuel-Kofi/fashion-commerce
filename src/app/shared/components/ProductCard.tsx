import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/modules/interfaces/products.interface";

const ProductCard: React.FC<IProduct> = ({
  thumbnail,
  title,
  description,
  price,
  id,
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="relative w-full max-h-[250px] lg:max-h-[450px] bg-white overflow-hidden border-2 border-[#D9D9D9] cursor-pointer"
    >
      <div>
        <Image
          src={thumbnail}
          alt={title}
          className="w-full max-h-[200px] lg:max-h-[400px] object-cover"
          width={300}
          height={376}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-200 ease-in-out"></div>

      <div className="p-2">
        <h1 className="text-gray-600 text-sm lg:text-base">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-base lg:text-lg font-bold line-clamp-1">
            {description}
          </p>
          <p className="block mt-2 text-black font-semibold lg:text-lg">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
