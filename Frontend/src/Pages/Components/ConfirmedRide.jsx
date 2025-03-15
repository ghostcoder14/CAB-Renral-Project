import React from "react";

const ConfirmRide = ({ setConfirmRidePanel }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Close Button */}
      <div className="sticky top-0 py-4 px-4 bg-white z-10 border-b">
        <i
          onClick={() => setConfirmRidePanel(false)}
          className="ri-arrow-down-line cursor-pointer text-2xl float-right"
        ></i>
      </div>

      <div className="p-4">
        <h1 className="font-semibold text-2xl text-center mb-6">
          Looking for nearby rides
        </h1>

        <div className="w-full">
          <div className="flex justify-center mb-6">
            <img
              className="h-auto w-1/3"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
              alt="Vehicle"
            />
          </div>
          
          <div className="h-0.5 bg-gray-300 w-full my-4"></div>
          <div className="py-2">
          
            <div className="font-semibold text-xl font-mono"><i class="ri-map-pin-line"></i>562/11-A</div>
            <div className="text-gray-600">Kaiondrahalli, Bengaluru, Karnataka</div>
          </div>
          
          <div className="h-0.5 bg-gray-300 w-full my-4"></div>
          <div className="py-2">
            <div className="font-semibold text-xl font-mono"><i class="ri-map-2-line"></i>Third Wave Coffee</div>
            <div className="text-gray-600">
              17th, cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
              Karnataka
            </div>
          </div>
          
          <div className="h-0.5 bg-gray-300 w-full my-4"></div>
          <div className="py-2">
            <div className="font-semibold text-xl"><i class="ri-refund-2-fill"></i>₹ 193</div>
            <div className="text-gray-600">Cash</div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="sticky bottom-0 p-4 bg-white border-t mt-auto">
        <button 
          className="bg-green-600 active:bg-green-700 text-white w-full py-2 rounded-lg font-medium text-lg"
          onClick={() => alert("Ride confirmed!")}
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;