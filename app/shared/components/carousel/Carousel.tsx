import React, { useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
  visibleImages: number;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  visibleImages,
  onNext,
  onPrev,
  currentIndex,
}) => {
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const imageWidthPercentage = 100 / visibleImages;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartRef.current - touchEndRef.current;
    if (
      distance > 50 &&
      currentIndex < React.Children.count(children) - visibleImages
    ) {
      onNext();
    } else if (distance < -50 && currentIndex > 0) {
      onPrev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div
            className="flex-shrink-0 mx-2"
            style={{ width: `${imageWidthPercentage}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
