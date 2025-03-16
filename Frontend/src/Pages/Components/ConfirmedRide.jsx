import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LookingForDriver from "./LookingForDriver";

const ConfirmRide = ({ setConfirmRidePanel }) => {
  const lookingDriverPanelRef = useRef(null);
  const [driverPanel, setDriverPanel] = useState(false);

  // Animation for driver panel
  useGSAP(() => {
    if (driverPanel) {
      // Show the driver panel with animation
      gsap.to(lookingDriverPanelRef.current, {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Hide the driver panel with animation
      gsap.to(lookingDriverPanelRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(lookingDriverPanelRef.current, { visibility: "hidden" });
        }
      });
    }
  }, [driverPanel]);

  return (
    <div className="flex flex-col h-full">
      {/* Close Button */}
      <div className="sticky top-0 py-4 px-4 bg-white z-10 border-b">
        <i
          onClick={() => setConfirmRidePanel(false)}
          className="ri-arrow-down-line cursor-pointer text-2xl float-right"
        ></i>
      </div>

      <div className="p-4 flex-1 overflow-y-auto pb-24">
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
            <div className="font-semibold text-xl font-mono flex items-center">
              <i className="ri-map-pin-line mr-2"></i>562/11-A
            </div>
            <div className="text-gray-600 ml-6">Kaiondrahalli, Bengaluru, Karnataka</div>
          </div>
          
          <div className="h-0.5 bg-gray-300 w-full my-4"></div>
          <div className="py-2">
            <div className="font-semibold text-xl font-mono flex items-center">
              <i className="ri-map-2-line mr-2"></i>Third Wave Coffee
            </div>
            <div className="text-gray-600 ml-6">
              17th, cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
              Karnataka
            </div>
          </div>
          
          <div className="h-0.5 bg-gray-300 w-full my-4"></div>
          <div className="py-2">
            <div className="font-semibold text-xl flex items-center">
              <i className="ri-refund-2-fill mr-2"></i>₹ 193
            </div>
            <div className="text-gray-600 ml-6">Cash</div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="sticky bottom-0 p-4 bg-white border-t">
        <button
          onClick={() => setDriverPanel(true)}
          className="bg-green-600 sticky active:bg-green-700 text-white w-full py-2 rounded-lg font-medium text-lg"
        >
          Confirm Ride
        </button>
      </div>

      {/* Looking For Driver Panel (Initially Hidden) */}
      <div
        ref={lookingDriverPanelRef}
        className="fixed inset-0 bg-white z-30 opacity-0 invisible flex flex-col"
        style={{ transform: "translateY(50px)" }}
      >
        <LookingForDriver setDriverPanel={setDriverPanel} />
      </div>
    </div>
  );
};

export default ConfirmRide;