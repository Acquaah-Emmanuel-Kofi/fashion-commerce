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
    <div className="flex flex-col lg:flex-row lg:w-full">
      {/* Main image */}
      <div className="w-full lg:w-3/4 mb-4">
        <Image
          src={selectedImage} // Display the selected image
          alt="Product Image"
          layout="responsive"
          unoptimized
          width={900}
          height={200}
          className="w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="w-full lg:w-1/4 lg:flex lg:flex-col lg:items-center">
        <div className="flex lg:flex-col gap-2">
          {thumbnails?.map((thumb, idx) => (
            <div
              key={idx}
              className={`w-14 h-16 cursor-pointer ${
                selectedImage === thumb ? "opacity-100" : "opacity-50"
              } hover:opacity-100 transition-opacity duration-300`}
              onClick={() => handleThumbnailClick(thumb)} // Set main image on click
            >
              <Image
                src={thumb}
                alt={`Thumbnail ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
