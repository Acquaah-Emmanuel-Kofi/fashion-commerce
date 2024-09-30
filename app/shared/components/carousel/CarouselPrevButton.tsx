import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface PrevButtonProps {
  onPrev: () => void;
  disabled: boolean;
}

const CarouselPrevButton: React.FC<PrevButtonProps> = ({
  onPrev,
  disabled,
}) => {
  return (
    <button
      onClick={onPrev}
      disabled={disabled}
      className="flex justify-between items-center border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] disabled:text-[#D9D9D9]"
    >
      <IoIosArrowBack />
    </button>
  );
};

export default CarouselPrevButton;
