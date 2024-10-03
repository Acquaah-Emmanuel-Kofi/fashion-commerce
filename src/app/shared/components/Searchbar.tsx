"use client"

import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { setSearchKeyword } from "@/redux/features/searchSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch(setSearchKeyword(value));
  };

  return (
      <div className="flex w-full grow items-center gap-2  px-4 py-2.5 bg-[#D9D9D9]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.80834"
            cy="7.80834"
            r="6.80834"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M12.825 12.825L15.3333 15.3334"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input w-full border-none outline-none bg-transparent"
        />

        <button type="submit" className="text-sm text-gray-500">
          Search
        </button>
      </div>
  );
};

export default SearchBar;
