import React from "react";

const CaptainHome = () => {
    return (
        <div className="h-screen w-full">
            {/* Navbar */}
            <nav className="bg-black w-full h-12 text-white sticky top-0 flex items-center px-4">
                <img
                    className="w-20"
                    src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg"
                    alt="Logo"
                />
            </nav>

            {/* Driver Info and Total Income */}
            <div className="border font-semibold rounded-2xl dark:bg-black dark:text-white flex flex-row justify-between items-center p-3">
                <div>
                    <h2 className="text-green-600">Driver Name</h2>
                    <h4>UP53 cQ 8603</h4>
                    <p>Maruti Suzuki Alto</p>
                </div>
                <div className="flex flex-row justify-between gap-72">
                <div>
                <i class="ri-time-line"></i>
                <h2 className="">6 hours</h2>
                </div>
               <div className="">
               <i class="ri-speed-up-line"></i>
               <h2>30km/hr</h2>
               </div>
                </div>
                <h3 className="font-semibold">Total Income = ₹30000 </h3> {/* Aligned to the right */}
            </div>

            {/* Main Content */}
            <div className="flex flex-row p-5 h-full">
                {/* Left Side Content */}
                <div className="flex-1 p-4">
                    <div className="user bg-red-50">
                        <h1 className="text-3xl font-bold text-center">Ride Call</h1>
                        <div className="p-6">
                            <h1 className="text-2xl font-semibold">Emma Berry</h1>

                        </div>
                    </div>
                </div>

                {/* Right Side Map */}
                <div className="flex-1 w-1/2 p-4 flex justify-end items-center">
                    <img
                        className="w-[70%] mb-40 rounded-2xl shadow-xl"
                        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                        alt="Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default CaptainHome;