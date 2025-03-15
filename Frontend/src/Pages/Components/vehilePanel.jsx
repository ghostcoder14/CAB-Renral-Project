import React, { useRef, useState } from "react";
import ConfirmRide from "./ConfirmedRide";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const VehiclePanel = ({ closeVehiclePanel }) => {
  const confirmedVehicleRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  useGSAP(() => {
    if (confirmRidePanel) {
      // Show the confirmation panel with animation
      gsap.to(confirmedVehicleRef.current, {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Hide the confirmation panel with animation
      gsap.to(confirmedVehicleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(confirmedVehicleRef.current, { visibility: "hidden" });
        }
      });
    }
  }, [confirmRidePanel]);

  return (
    <div className="flex flex-col h-full max-h-screen overflow-hidden bg-white ">
      {/* Close Button */}
      <div className="py-4 px-4 bg-white z-10 border-b">
        <i
          onClick={closeVehiclePanel}
          className="ri-arrow-right-line cursor-pointer text-2xl"
        ></i>
      </div>

      {/* Vehicle Selection List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">Choose a Vehicle</h1>

          <div className="flex flex-col space-y-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => setConfirmRidePanel(true)}
                className="flex bg-white flex-row p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <img
                  className="w-16 h-16 mr-2"
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
                  alt="UBERGO"
                />
                <div className="flex-1 ml-3">
                  <h1 className="text-sm font-semibold">UberGO</h1>
                  <div className="flex items-center space-x-1">
                    <i className="ri-user-line"></i>
                    <span>4</span>
                  </div>
                  <h1 className="text-sm">2 mins away</h1>
                  <h1 className="text-sm">Affordable compact rides</h1>
                </div>
                <h1 className="font-bold ml-2 mr-3">₹ 193</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirm Ride Panel (Initially Hidden) */}
      <div
        ref={confirmedVehicleRef}
        className="fixed inset-0 bg-white z-20 opacity-0 invisible overflow-y-auto"
        style={{ transform: "translateY(50px)" }}
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} />
      </div>
    </div>
  );
};

export default VehiclePanel;