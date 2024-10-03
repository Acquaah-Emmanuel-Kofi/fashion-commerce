import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IProductImagesProps {
  mainImage: string | StaticImageData;
  thumbnails?: string[] | StaticImageData[];
}

const ProductImages: React.FC<IProductImagesProps> = ({
  mainImage,
  thumbnails,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    mainImage
  );

  const handleThumbnailClick = (thumbnail: string | StaticImageData) => {
    setSelectedImage(thumbnail);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:w-full max-h-[500px]">
      {/* Main image */}
      <div className="w-full lg:w-3/4 mb-4">
        <Image
          src={selectedImage}
          alt="Product Image"
          unoptimized
          width={900}
          height={200}
          priority
          className="w-full object-contain max-h-[200px] lg:max-h-[450px]"
        />
      </div>

      {/* Thumbnails */}
      <div className="w-full lg:w-1/4 lg:flex lg:flex-col lg:items-center flex space-x-3 overflow-auto scrollbar-none">
        <div className="flex lg:flex-col gap-2">
          {thumbnails?.map((thumb, idx) => (
            <div
              key={idx}
              className={`w-14 h-16 cursor-pointer ${
                selectedImage === thumb ? "opacity-100" : "opacity-50"
              } hover:opacity-100 transition-opacity duration-300`}
              onClick={() => handleThumbnailClick(thumb)}
            >
              <Image
                src={thumb}
                alt={`Thumbnail ${idx}`}
                className="w-full h-full object-cover"
                width={56}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
