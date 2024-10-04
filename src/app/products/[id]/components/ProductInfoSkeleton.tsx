import { Fragment } from "react";

const ProductInfoSkeleton = () => {
  return (
    <Fragment>
      {/* Product Name Skeleton */}
      <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse mb-2"></div>

      {/* Price Skeleton */}
      <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse mb-2"></div>

      {/* Product Type Skeleton */}
      <div className="h-3 bg-gray-300 rounded w-1/5 animate-pulse mb-6"></div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-9">
        <div className="h-3 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6 animate-pulse"></div>
        <div className="h-3 bg-gray-300 rounded w-4/5 animate-pulse"></div>
      </div>

      {/* Filters (Color/Size) Skeleton */}
      <div className="space-y-5 mt-16">
        {/* Color Filter Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>

        {/* Size Filter Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>

      {/* Size Guide Text Skeleton */}
      <div className="mt-4">
        <div className="h-3 bg-gray-300 rounded w-2/3 animate-pulse"></div>
      </div>
    </Fragment>
  );
};

export default ProductInfoSkeleton;
