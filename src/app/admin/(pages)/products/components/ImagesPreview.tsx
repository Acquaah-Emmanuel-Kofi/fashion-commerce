import React, { useState, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";

interface ImagesPreviewProps {
  mainImage: string | File;
  images: (string | File)[];
  name: string;
  onRemoveImage: (index: number) => void;
}

const ImagesPreview: React.FC<ImagesPreviewProps> = ({
  mainImage,
  images,
  name,
  onRemoveImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | File>(mainImage);
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)", 
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

  return (
    <div className="w-full">
      {/* Image Display Container */}
      <div
        className="w-full h-[350px] bg-gray-200 flex justify-center items-center overflow-hidden"
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
            className="w-full h-full object-contain transition-transform duration-300 ease-in-out" 
            style={zoomStyle} 
          />
        )}
      </div>

      <div className="flex space-x-5 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt={`Thumbnail ${index}`}
              width={50}
              height={50}
              className="object-cover cursor-pointer"
              onClick={() => handleThumbnailClick(image)}
            />
            {/* Remove Button */}
            <button
              className="absolute -right-2 -top-2"
              onClick={() => onRemoveImage(index)}
            >
              <IoCloseCircle color="red" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesPreview;
