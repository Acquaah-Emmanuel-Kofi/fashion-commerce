import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";

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
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)",
  });
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleThumbnailClick = (thumbnail: string | StaticImageData) => {
    setSelectedImage(thumbnail);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      imageContainerRef.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const { left, top, width, height } =
      imageContainerRef.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };
    const touch = e.touches[0];
    const x = ((touch.clientX - left) / width) * 100;
    const y = ((touch.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  const handleTouchEnd = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:w-full gap-5 min-h-[500px] max-h-[500px] lg:max-h-[700px]">
      {/* Main image with zoom follow effect */}
      <div
        className="w-full mb-4 group relative overflow-hidden"
        ref={imageContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={selectedImage}
          alt="Product Image"
          unoptimized
          width={900}
          height={200}
          priority
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out cursor-pointer"
          style={zoomStyle}
        />
      </div>

      {/* Thumbnails */}
      <div className="w-full lg:w-1/6 lg:flex lg:flex-col lg:items-center flex space-x-3 lg:space-x-0 overflow-auto scrollbar-none">
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
