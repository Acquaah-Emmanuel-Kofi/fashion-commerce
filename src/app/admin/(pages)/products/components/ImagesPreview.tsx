import React, { useState, useRef } from "react";
import Image from "next/image";

interface ImageZoomProps {
  mainImage: string | File;
  images: (string | File)[];
  name: string;
}

const ImagesPreview: React.FC<ImageZoomProps> = ({ mainImage, images, name }) => {
  const [selectedImage, setSelectedImage] = useState<string | File>(
    mainImage
  );
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
  });
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleThumbnailClick = (thumbnail: string | File) => {
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
    setZoomStyle({ transformOrigin: `${x}% ${y}%` });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center center" });
  };

  return (
    <div className="w-full">
      {/* Image Display Container */}
      <div
        className="w-full h-[350px] bg-gray-200 flex justify-center items-center"
        ref={imageContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {images.length === 0 ? (
          <p>No Image Uploaded Yet!</p>
        ) : (
          <Image
            src={
              typeof selectedImage === "string"
                ? selectedImage
                : URL.createObjectURL(selectedImage)
            }
            alt={`${name} image`}
            width={300}
            height={300}
            className="w-full h-full object-contain"
            style={{ transformOrigin: zoomStyle.transformOrigin }}
          />
        )}
      </div>

      {/* Thumbnails (if applicable) */}
      <div className="flex space-x-2 mt-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt={`Thumbnail ${index + 1}`}
              width={50}
              height={50}
              className="object-cover"
              onClick={() => handleThumbnailClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesPreview;
