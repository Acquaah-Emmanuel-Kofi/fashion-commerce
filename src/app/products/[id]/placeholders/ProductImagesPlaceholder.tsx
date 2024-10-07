const ProductImagesPlaceholder = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-full max-h-[500px] animate-pulse">
      {/* Main image placeholder */}
      <div className="w-full lg:w-3/4 mb-4">
        <div className="w-full bg-gray-300 h-[200px] lg:h-[450px]"></div>
      </div>

      {/* Thumbnails placeholder */}
      <div className="w-full lg:w-1/4 lg:flex lg:flex-col lg:items-center flex space-x-3 overflow-auto scrollbar-none">
        <div className="flex lg:flex-col gap-2">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="w-14 h-16 bg-gray-300"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImagesPlaceholder;
