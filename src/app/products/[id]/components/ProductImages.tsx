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
    <div className="flex flex-col lg:flex-row lg:w-full gap-5 min-h-[500px] max-h-[500px] lg:max-h-[700px]  border-2 border-yellow-500">
      {/* Main image */}
      <div className="w-full mb-4">
        <Image
          src={selectedImage}
          alt="Product Image"
          unoptimized
          width={900}
          height={200}
          priority
          className="w-full h-full object-cover max-w-[450px] border-2 border-green-500"
        />
      </div>

      {/* Thumbnails */}
      <div className="w-full lg:w-1/6 lg:flex lg:flex-col lg:items-center flex space-x-3 lg:space-x-0 overflow-auto scrollbar-none border-2 border-red-500">
        <div className="flex lg:flex-col gap-2">
          {thumbnails?.map((thumb, idx) => (
            <div
              key={idx}
              className={`cursor-pointer ${
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
