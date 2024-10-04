import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/modules/interfaces/products.interface";

interface ProductCardProps extends IProduct {
  showProductDetails?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  thumbnail,
  name,
  type,
  price,
  id,
  showProductDetails = true,
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="w-full max-h-[300px] lg:max-h-[500px] bg-white overflow-hidden cursor-pointer hover:shadow-lg"
    >
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={name}
          className="w-full max-h-[250px] lg:max-h-[350px] object-cover border-2 border-[#D9D9D9]"
          width={300}
          height={376}
          priority
        />
      )}

      {showProductDetails && (
        <div className="p-2">
          <h1 className="text-gray-600 text-sm lg:text-base line-clamp-1">
            {type}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-base lg:text-lg font-bold line-clamp-1">
              {name}
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
