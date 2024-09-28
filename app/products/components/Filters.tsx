import { Fragment, useState } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { sizeOptions } from "@/app/shared/helpers/constants.helper";
import { IFiltersProps } from "../interfaces/filters.interface";

const Filters: React.FC<IFiltersProps> = ({ filters }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFilter = (id: string) => {
    setOpenFilters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <Fragment>
      <div>
        <h2 className="font-semibold text-lg mb-6">Filters</h2>
        <div>
          <label htmlFor="size" className="font-semibold">
            Size
          </label>
          <div className="flex space-x-1 border-b border-dashed border-gray-200 pb-5 mb-2 mt-3">
            {sizeOptions.map((size) => (
              <button
                key={size}
                type="button"
                className={`flex justify-center items-center w-11 h-11 border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9] ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filters;
