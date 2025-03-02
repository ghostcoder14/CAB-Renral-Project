import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { captainDataContext } from '../../context/captainContext';
import axios from 'axios';


function CaptainSignUp() {

    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Password, setPassword] = useState('');
    const[vehicleColor,setvehicleColor] = useState('')
    const[vehiclePlate, setvehiclePlate] = useState('')
    const[vehicleCapacity, setvehicleCapacity] = useState('')
    const[vehicleType, setvehicleType] = useState('')

     const{captain, setCaptain} = useContext(captainDataContext)

     const submithandler = async (e) => {
        e.preventDefault();
        const captainData = {
            firstname: Firstname,
            lastname: Lastname,
            password: Password,
            email: Email,
            vehicle: {
                color: vehicleColor,
                vehicleType: vehicleType,
                capacity: vehicleCapacity,
                plate: vehiclePlate
            }
        };
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/registerCaptain`, captainData);
            
            if (response.status === 201) {
                const data = response.data; 
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error("Error registering captain:", error);
           
        }
    
        setEmail('');
        setFirstname('');
        setPassword('');
        setLastname('');
        setvehicleCapacity('');
        setvehicleColor('');
        setvehiclePlate('');
        setvehicleType('');
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
        <img
            className="w-16 absolute top-4 left-4"
            src="https://pngimg.com/uploads/uber/uber_PNG27.png"
            alt="Uber Logo"
            onClick={() => navigate('/')}
        />
        <h1 className="text-2xl font-bold mb-4">Captain's Signup</h1>
        <div className="p-6 w-[450px] bg-white border border-gray-300 rounded-lg shadow-lg">
            <form onSubmit={submithandler}>
                <label className="font-semibold">Full Name</label>
                <div className="flex justify-between mb-3">
                    <input required value={Firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Firstname" className="px-3 py-2 rounded w-[48%] bg-[#eeeeee]" />
                    <input required type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" className="px-3 py-2 rounded w-[48%] bg-[#eeeeee]" />
                </div>
                
                <label className="font-semibold">Email</label>
                <input required type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className=" bg-[#eeeeee] py-2 px-3 rounded w-full text-lg mb-3" />
                
                <label className="font-semibold">Password</label>
                <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="rounded bg-[#eeeeee] w-full mb-3 py-2 px-3 text-lg" />
                
                <label className="font-semibold">Vehicle Color</label>
                <input required type="text" value={vehicleColor} onChange={(e) => setvehicleColor(e.target.value)} placeholder="Vehicle Color" className="rounded bg-[#eeeeee] w-full mb-3 py-2 px-3 text-lg" />
                
                <label className="font-semibold">Vehicle Plate</label>
                <input required type="text" value={vehiclePlate} onChange={(e) => setvehiclePlate(e.target.value)} placeholder="Vehicle Plate" className="rounded bg-[#eeeeee] w-full mb-3 py-2 px-3 text-lg" />
                
                <div className="flex justify-between mb-3">
                    <div className="w-[48%]">
                        <label className="font-semibold">Capacity</label>
                        <input required type="number" value={vehicleCapacity} onChange={(e) => setvehicleCapacity(e.target.value)} placeholder="Capacity" className="rounded bg-[#eeeeee] w-full py-2 px-3 text-lg" />
                    </div>
                    <div className="w-[48%]">
                        <label className="font-semibold">Vehicle Type</label>
                        <select required value={vehicleType} onChange={(e) => setvehicleType(e.target.value)} className="rounded bg-[#eeeeee] w-full py-2 px-3 text-lg">
                            <option value="" disabled>Vehicle Type</option>
                            <option value="Car">Car</option>
                            <option value="Motorbike">Motorbike</option>
                            <option value="Auto">Auto</option>
                        </select>
                    </div>
                </div>
                
                <button className="text-white bg-black w-full rounded py-2 mb-2 font-semibold">Sign Up</button>
                <p className="text-center text-sm">
                    Already have an account? <Link to="/captain-login" className="text-blue-600 font-semibold">Log in</Link>
                </p>
            </form>
            <Link to="/login" className="bg-green-600 text-white font-semibold flex justify-center items-center mt-4 rounded py-2 w-full text-lg">Sign in as User</Link>
        </div>
    </div>
    );
}

export default CaptainSignUp;
