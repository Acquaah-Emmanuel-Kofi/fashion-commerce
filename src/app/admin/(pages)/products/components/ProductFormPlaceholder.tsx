import React from "react";

const ProductFormPlaceholder: React.FC = () => {
  return (
    <div className="p-4 bg-white animate-pulse">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {/* Left Side Form Fields */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 w-3/12"></div>
          <div className="h-10 bg-gray-200"></div>

          <div className="h-6 bg-gray-200 w-3/12"></div>
          <div className="h-10 bg-gray-200"></div>

          <div className="h-6 bg-gray-200 w-3/12"></div>
          <div className="h-10 bg-gray-200"></div>

          <div className="h-6 bg-gray-200 w-3/12"></div>
          <div className="h-10 bg-gray-200"></div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <div className="h-6 bg-gray-200 w-3/12 mb-2"></div>
              <div className="h-10 bg-gray-200"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-200 w-3/12 mb-2"></div>
              <div className="h-10 bg-gray-200"></div>
            </div>
          </div>

          <div className="h-6 bg-gray-200 w-1/2"></div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200"></div>
            <div className="h-6 bg-gray-200 w-1/2 ml-3"></div>
          </div>
        </div>

        {/* Right Side Image Upload and Gallery */}
        <div className="space-y-6">
          <div className="w-full h-[350px] bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
        </div>
      </div>

      <div className="flex justify-end w-full mt-2">
        <div className="grid grid-cols-3 lg:w-3/12 w-full gap-3">
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormPlaceholder;
