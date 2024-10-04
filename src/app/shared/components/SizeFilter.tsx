import { Fragment, useState } from "react";

interface SizeFilterProps {
  sizes: string[];
  onSelect: (size: string) => void; 
}

const SizeFilter: React.FC<SizeFilterProps> = ({ sizes, onSelect }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    onSelect(size);
    setSelectedSize(size);
  };

  return (
    <Fragment>
      <label htmlFor="size" className="font-semibold font-beatrice">
        Size
      </label>
      <div className="flex space-x-1 ">
        {sizes?.map((size) => (
          <button
            key={size}
            type="button"
            className={`flex justify-center items-center w-11 h-11 border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] font-beatrice ${
              selectedSize?.toLowerCase()?.trim() ===
              size?.toLowerCase()?.trim()
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default SizeFilter;
