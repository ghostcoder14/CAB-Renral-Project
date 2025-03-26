import React  from "react";
import { Link } from "react-router-dom";

const Riding = () =>{
    return(
      <div className="h-screen w-full bg-gray-100">
       <div className=" p-5 flex flex-row items-start justify-between space-x-8 ">
       <Link to={"/home"} className="sticky">
       <i className="ri-home-line text-2xl sm:text-xl "></i>
       </Link>
       <div className="h-screen w-1/3"> 
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
      </div >
            <button  className=" border w-full text-2xl font-semibold font-mono bg-green-400 px-5 py-3 rounded-2xl">
                Make a payement
            </button>
        </div>
         <div className="">
         <img
            className="w-[65%] rounded-2xl shadow-xl  mt-10"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="Map"
          />
         </div>
       </div>
      </div>
        
    )
}


export default Riding 