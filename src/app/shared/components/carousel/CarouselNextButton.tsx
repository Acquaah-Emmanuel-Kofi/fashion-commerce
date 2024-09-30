import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface NextButtonProps {
  onNext: () => void;
  disabled: boolean;
}

const CarouselNextButton: React.FC<NextButtonProps> = ({
  onNext,
  disabled,
}) => {
  return (
    <button
      onClick={onNext}
      disabled={disabled}
      className="flex justify-between items-center border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] disabled:text-[#D9D9D9]"
    >
      <IoIosArrowForward />
    </button>
  );
};

export default CarouselNextButton;
