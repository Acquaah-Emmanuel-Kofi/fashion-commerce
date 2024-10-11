"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setSearchKeyword } from "@/redux/features/searchSlice";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const keyword = useAppSelector((state) => state.search.keyword);

  const router = useRouter();
  const pathname = usePathname();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchKeyword(value));
  };

  const handleRoute = () => {
    if (pathname === "/") {
      router.push("/products");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleRoute();
    }
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
        value={keyword}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        className="search-input w-full border-none outline-none bg-transparent"
      />

      <button
        type="submit"
        onClick={handleRoute}
        className="text-sm text-gray-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
