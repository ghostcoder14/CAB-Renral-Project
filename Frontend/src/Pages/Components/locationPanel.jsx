import React from 'react';

const LocationPanel = ({ setVehiclePanel }) => {
  const locations = [
    "41B, Model Town, Gharuan, Punjab",
    "42B, Model Town, Gharuan, Punjab",
    "43B, Model Town, Gharuan, Punjab",
  ];
 
  return (
    <div className="font-mono">
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => setVehiclePanel(true)} 
          className="bg-white active:border-black border px-1 rounded py-1 cursor-pointer"
        >
          {location}
        </div>
      ))}
    </div>
  );
};

export default LocationPanel;