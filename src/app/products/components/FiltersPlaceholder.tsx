import { Fragment } from "react";

const FiltersPlaceholder = () => {
  return (
    <Fragment>
      {/* Size Filter Skeleton */}
      <div className="border-b border-dashed border-gray-200 pb-5 mb-2 mt-3">
        <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      {/* Filters Skeleton */}
      <div className="space-y-2">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="border-b border-dashed border-gray-200 pb-2"
          >
            <div className="flex justify-between w-full items-center py-3">
              <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-5 w-5 bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            <div className="pt-6 space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="h-4 w-4 bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="ml-3 h-5 w-16 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FiltersPlaceholder;
