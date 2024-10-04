const NoProductsAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] lg:h-[500px] bg-gray-100 border-2 border-gray-300 rounded-lg">
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v18h18V3H3zM9 9l3 3m0 0l3-3m-3 3v6"
        />
      </svg>
      <p className="text-gray-600 text-lg">No products found</p>
      <p className="text-gray-500 text-sm">
        Please try again later or adjust your filters.
      </p>
    </div>
  );
};

export default NoProductsAvailable;
