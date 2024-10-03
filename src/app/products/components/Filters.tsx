import { Fragment, useState } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { IFiltersProps } from "../interfaces/filters.interface";
import SizeFilter from "@/app/shared/components/SizeFilter";

const Filters: React.FC<IFiltersProps> = ({ filters }) => {
  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFilter = (id: string) => {
    setOpenFilters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Fragment>
      <div className="border-b border-dashed border-gray-200 pb-5 mb-2 mt-3">
        <SizeFilter sizes={[]} />
      </div>
      <div className="space-y-2">
        {filters.map((filter) => (
          <div
            key={filter.id}
            className="border-b border-dashed border-gray-200 pb-2"
          >
            <button
              type="button"
              onClick={() => toggleFilter(filter.id)}
              className="flex justify-between w-full items-center text-gray-700 font-bold py-3"
            >
              {filter.name}
              {openFilters[filter.id] ? (
                <IoIosArrowUp className="h-5 w-5 text-gray-700" />
              ) : (
                <IoIosArrowForward className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openFilters[filter.id] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="pt-6 space-y-4">
                {filter.options.map((option, idx) => (
                  <div key={idx} className="flex items-center">
                    <input
                      id={`filter-${filter.id}-${idx}`}
                      name={`${filter.id}[]`}
                      type="checkbox"
                      defaultChecked={option.checked}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${filter.id}-${idx}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Filters;
