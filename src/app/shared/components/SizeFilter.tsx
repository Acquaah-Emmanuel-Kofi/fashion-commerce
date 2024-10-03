import { Fragment, useState } from "react";

interface ISizes {
  sizes: string[]
}

const SizeFilter: React.FC<ISizes> = ({sizes}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <Fragment>
      <label htmlFor="size" className="font-semibold">
        Size
      </label>
      <div className="flex space-x-1 ">
        {sizes?.map((size) => (
          <button
            key={size}
            type="button"
            className={`flex justify-center items-center w-11 h-11 border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] ${
              selectedSize?.toLowerCase()?.trim() === size?.toLowerCase()?.trim()
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
