const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-h-[300px] lg:max-h-[500px] bg-white overflow-hidden cursor-pointer animate-pulse">
      {/* Skeleton for Image */}
      <div className="w-full h-[300px] lg:-h-[400px] bg-gray-300 border-2 border-[#D9D9D9]"></div>

      {/* Skeleton for Product Details */}
      <div className="p-2">
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
