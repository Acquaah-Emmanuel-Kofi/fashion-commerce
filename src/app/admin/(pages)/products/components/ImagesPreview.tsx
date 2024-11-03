import React, { useState, useRef, useEffect } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [thumbnailURLs, setThumbnailURLs] = useState<string[]>([]);
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)",
  });
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainImage instanceof File) {
      const url = URL.createObjectURL(mainImage);
      setSelectedImage(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setSelectedImage(mainImage);
    }
  }, [mainImage]);

  useEffect(() => {
    const urls = images.map((image) =>
      typeof image === "string" ? image : URL.createObjectURL(image)
    );

    setThumbnailURLs(urls);

    return () => {
      urls.forEach((url) => {
        if (url.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [images]);

  const handleThumbnailClick = (thumbnail: string) => {
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

  const handleMouseAndTouchLeave = () => {
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
        onMouseLeave={handleMouseAndTouchLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseAndTouchLeave}
      >
        {images.length === 0 ? (
          <p>No Image Uploaded Yet!</p>
        ) : (
          <Image
            src={selectedImage}
            alt={`${name} image`}
            width={300}
            height={300}
            className="w-full h-full object-contain transition-transform duration-300 ease-in-out cursor-pointer"
            style={zoomStyle}
          />
        )}
      </div>

      <div className="flex space-x-5 mt-4">
        {thumbnailURLs.map((thumbnailURL, index) => (
          <div key={index} className="relative">
            <Image
              src={thumbnailURL}
              alt={`Thumbnail ${index}`}
              width={50}
              height={50}
              className="object-cover cursor-pointer"
              onClick={() => handleThumbnailClick(thumbnailURL)}
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
