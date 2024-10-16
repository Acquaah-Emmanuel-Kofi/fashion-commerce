import React from "react";

type LoadingOverlayProps = {
  isLoading: boolean;
};

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
