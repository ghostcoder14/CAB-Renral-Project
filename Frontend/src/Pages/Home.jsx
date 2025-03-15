import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import LocationPanel from './Components/locationPanel';
import { useGSAP } from '@gsap/react';
import VehiclePanel from './Components/vehilePanel';


const Home = () => {
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const pickupDropdownRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedVehicelRef = useRef(null)

  // Animation for pickup dropdown
  useEffect(() => {
    if (showPickupDropdown) {
      gsap.to(pickupDropdownRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(pickupDropdownRef.current, { opacity: 0, y: "-10px", duration: 0.3, ease: "power2.in" });
    }
  }, [showPickupDropdown]);

  // Animation for vehicle info div
  useGSAP(() => {
    if (vehiclePanel) {
      // Show animation
      gsap.to(vehiclePanelRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Hide animation
      gsap.to(vehiclePanelRef.current, {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [vehiclePanel]);

  // Function to close the vehicle panel
  const closeVehiclePanel = () => {
    setVehiclePanel(false);
  };

  return (
    <div className="bg-gray-100 w-screen h-screen">
      {/* Navbar */}
      <nav className="bg-black w-screen h-12 text-white sticky top-0 flex items-center px-4">
        <img
          className="w-20"
          src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg"
          alt="Logo"
        />
      </nav>

      {/* Main Container - Row Layout */}
      <div className="p-7 flex flex-row items-start justify-between space-x-8">
        {/* Form Section */}
        <div className="font-mono w-1/4 mt-16 relative">
          <form className="w-full">
            <h1 className="font-mono text-5xl font-bold">Find a trip..</h1>

            {/* Pickup Location */}
            <div className="relative mt-6">
              <input
                className="bg-[#eeee] mb-3 rounded px-10 py-2 w-full text-lg relative z-10"
                type="text"
                placeholder="Enter the pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                onFocus={() => setShowPickupDropdown(true)}
                onBlur={() => setTimeout(() => setShowPickupDropdown(false), 200)}
              />

              {/* Pickup Dropdown */}
              <div
                ref={pickupDropdownRef}
                className={`absolute top-full left-0 w-full bg-white rounded shadow-md transition-opacity duration-300 overflow-hidden ${
                  showPickupDropdown ? "block" : "hidden"
                }`}
                style={{ position: "absolute", zIndex: 20, marginTop: "-10px" }}
              >
                <LocationPanel setVehiclePanel={setVehiclePanel} />
              </div>
            </div>

            {/* Destination Location */}
            <div className="relative mt-6">
              <input
                className="bg-[#eeee] rounded px-10 py-2 w-full text-lg relative"
                type="text"
                placeholder="Enter the drop-off location"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onFocus={() => setShowDestinationDropdown(true)}
                onBlur={() => setTimeout(() => setShowDestinationDropdown(false), 200)}
              />

              {/* Destination Dropdown */}
              <div
                className={`absolute top-full left-0 w-full bg-white rounded shadow-md transition-opacity duration-300 overflow-hidden ${
                  showDestinationDropdown ? "block" : "hidden"
                }`}
                style={{ position: "absolute", zIndex: 10 }}
              >
                <LocationPanel setVehiclePanel={setVehiclePanel} />
              </div>
            </div>
          </form>
        </div>

        {/* Vehicle Info Div */}
        <div
          ref={vehiclePanelRef}
          className="bg-white w-1/3 h-[50%] mt-10 relative rounded p-4"
          style={{ opacity: 0, transform: 'translateX(100%)' }}
        >
          <VehiclePanel closeVehiclePanel={closeVehiclePanel} /> 
        </div>
        
        <img
          className="w-[35%] rounded-2xl shadow-xl mt-10"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Home;