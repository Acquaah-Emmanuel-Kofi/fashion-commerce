import { Fragment, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { IFilter } from "../interfaces/filters.interface";
import SizeFilter from "@/app/shared/components/SizeFilter";
import { fetchDataFromApi } from "@/services/api";
import { useAppDispatch } from "@/redux/store";
import { setOtherFilters } from "@/redux/features/filtersSlice";
import FiltersPlaceholder from "./FiltersPlaceholder";

const Filters = () => {
  const dispatch = useAppDispatch();

  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | string[]>
  >({});

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleFilter = (id: string) => {
    setOpenFilters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheckboxChange = (filterId: string, value: string) => {
    setSelectedFilters((prevFilters: Record<string, string[] | string>) => {
      const updatedFilters = { ...prevFilters };

      if (Array.isArray(updatedFilters[filterId])) {
        if ((updatedFilters[filterId] as string[]).includes(value)) {
          updatedFilters[filterId] = (
            updatedFilters[filterId] as string[]
          ).filter((v: string) => v !== value);
        } else {
          updatedFilters[filterId] = [
            ...(updatedFilters[filterId] as string[]),
            value,
          ];
        }
      } else {
        updatedFilters[filterId] = [value];
      }

      dispatch(setOtherFilters({ ...updatedFilters, sizes: selectedSize }));
      return updatedFilters;
    });
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    dispatch(setOtherFilters({ ...selectedFilters, sizes: size }));
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchFiltersFromAPI = async () => {
      try {
        const response = await fetchDataFromApi("/product/filter/options");
        const data = await response.data;

        const sizeLabels = data?.sizes.map(
          (value: { id: string; size: string }) => value.size
        );

        setSizes(sizeLabels);

        const transformedFilters: IFilter[] = [
          {
            id: "availability",
            name: "Availability",
            options: [
              { value: "true", label: `Availability (${540})`, checked: false },
              {
                value: "false",
                label: `Out Of Stock (${18})`,
                checked: false,
              },
            ],
          },
          {
            id: "colors",
            name: "Colors",
            options: data?.colors?.map(
              (type: { id: string; color: string }) => ({
                value: type.color,
                label: type.color,
                checked: false,
              })
            ),
          },
          {
            id: "categories",
            name: "Categories",
            options: data?.categories?.map(
              (type: { id: string; category: string }) => ({
                value: type.category,
                label: type.category,
                checked: false,
              })
            ),
          },
        ];

        setFilters(transformedFilters);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchFiltersFromAPI();
  }, []);

  if (isLoading) return <FiltersPlaceholder />;

  return (
    <Fragment>
      {sizes.length !== 0 && (
        <div className="border-b border-dashed border-gray-200 pb-5 mb-2 mt-3">
          <SizeFilter sizes={sizes} onSelect={handleSizeSelect} />
        </div>
      )}

      <div className="space-y-2">
        {filters.map((filter) => (
          <div
            key={filter.id}
            className="border-b border-dashed border-gray-200 pb-2"
          >
            <button
              type="button"
              onClick={() => toggleFilter(filter.id)}
              className="flex justify-between w-full items-center text-gray-700 font-bold py-3 font-beatrice"
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
                      id={`api-filter-${filter.id}-${idx}`}
                      name={`${filter.id}[]`}
                      type="checkbox"
                      defaultChecked={option.checked}
                      onChange={() =>
                        handleCheckboxChange(filter.id, String(option.value))
                      }
                      className="h-4 w-4 rounded border-gray-300 accent-black"
                    />
                    <label
                      htmlFor={`api-filter-${filter.id}-${idx}`}
                      className="ml-3 text-sm text-gray-600 font-beatrice"
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
