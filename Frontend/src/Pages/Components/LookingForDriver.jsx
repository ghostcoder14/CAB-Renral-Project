import React from "react";

const LookingForDriver = ({ setDriverPanel }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky top-0 py-4 px-4 bg-white z-10 border-b">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Finding your driver</h1>
          <i
            onClick={() => setDriverPanel(false)}
            className="ri-close-line cursor-pointer text-2xl"
          ></i>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col items-center justify-center py-8">
          {/* Loading Animation */}
          <div className="w-24 h-24 rounded-full border-4 border-gray-200 border-t-green-500 animate-spin mb-6"></div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Looking for your driver</h2>
          <p className="text-gray-600 text-center mb-8">This won't take long...</p>
          
          {/* Driver Info Placeholder */}
          <div className="w-full max-w-md bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          </div>
          
          {/* Vehicle Details */}
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <i className="ri-car-line text-xl mr-2"></i>
                <span className="font-semibold">Vehicle Details</span>
              </div>
            </div>
            <div className="flex bg-gray-50 rounded-lg p-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-28 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
          
          {/* Estimated Time */}
          <div className="w-full max-w-md mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-time-line text-xl mr-2"></i>
                <span className="font-semibold">Estimated pickup</span>
              </div>
              <span className="text-green-600 font-semibold">~3 min</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Button */}
      <div className="sticky bottom-0 p-4 bg-white border-t">
        <button
          onClick={() => setDriverPanel(false)}
          className="bg-red-500 active:bg-red-600 text-white w-full py-2 rounded-lg font-medium text-lg"
        >
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default LookingForDriver;