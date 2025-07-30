import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-32 h-32">
        {/* Spinning circle */}
        <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin"></div>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center text-red-600 font-bold text-lg">
          DAFOSEAD
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
