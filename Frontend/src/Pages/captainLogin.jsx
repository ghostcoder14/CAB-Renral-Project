import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CaptainLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[captainData, setCaptaindata] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptaindata({
            email: email,
            password:password
        })
         console.log(captainData)
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 relative">
            
            <img 
                className="w-16 absolute top-4 left-4" 
                src="https://pngimg.com/uploads/uber/uber_PNG27.png"  
                alt="Uber Logo"
                onClick={() => {
                    navigate('/')
                }}
            />
            
            {/* Form Container */}
            <div className="p-7 w-[400px]  border bg-white rounded-xl shadow-lg">
                <form onSubmit={submitHandler}>
                    <h3 className="text-xl mb-2 font-semibold">What's your email?</h3>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="bg-[#eeeeee] px-4 rounded py-2 w-full text-lg placeholder:text-base"
                    />

                    <h3 className="text-xl mt-4 font-semibold">Enter Password</h3>
                    <input
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="bg-[#eeeeee] py-2 px-4 rounded w-full text-lg placeholder:text-base"
                    />

                    <button className="text-white bg-black w-full rounded py-2 mt-6 font-semibold">Login</button>
                </form>

                <p className="text-center text-sm mt-4">
                    New here?{' '}
                    <Link to='/captain-signUp' className='text-blue-600 font-semibold'>
                        Register as a fleet
                    </Link>
                </p>

                {/* User Login Button */}
                <Link 
                    to='/login' 
                    className='bg-[#d5622d] text-white font-semibold flex justify-center items-center mt-5 rounded py-2 w-full text-lg'
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
};

export default CaptainLogin;
