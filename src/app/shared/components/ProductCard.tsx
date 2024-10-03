import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/modules/interfaces/products.interface";

interface ProductCardProps extends IProduct {
  showProductDetails?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  thumbnail,
  name,
  description,
  price,
  id,
  showProductDetails = true,
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="relative w-full max-h-[300px] lg:max-h-[500px] bg-white overflow-hidden cursor-pointer"
    >
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={name}
          className="w-full max-h-[200px] lg:max-h-[400px] object-cover border-2 border-[#D9D9D9]"
          width={300}
          height={376}
          priority
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-200 ease-in-out"></div>

      {showProductDetails && (
        <div className="p-2">
          <h1 className="text-gray-600 text-sm lg:text-base line-clamp-1">
            {name}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-base lg:text-lg font-bold line-clamp-1">
              {description}
            </p>
            <p className="block mt-2 text-black font-semibold lg:text-lg">
              ${price}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
