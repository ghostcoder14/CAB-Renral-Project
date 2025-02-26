import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function CaptainSignUp() {

    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [SignUpData, setSignUpData] = useState('');

    const submithandler = (e) => {
        e.preventDefault();
        setSignUpData({
            firstname: Firstname,
            lastname: Lastname,
            password: Password,
            email: Email,
        });
        console.log(SignUpData);
        setEmail('');
        setFirstname('');
        setPassword('');
        setLastname('');
        setUsername('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
            {/* Uber Logo */}
            <img
                className="w-16 absolute top-4 left-4"
                src="https://pngimg.com/uploads/uber/uber_PNG27.png"
                alt="Uber Logo"
                onClick={() => {
                    navigate('/')
                }}
            />

            {/* Title Above the Form Container */}
            <h1 className="text-2xl font-bold mb-6">Captain's Signup</h1>

            {/* Form Container */}
            <div className="p-7 w-[400px] bg-white border border-gray-300 rounded-xl shadow-lg">
                <form onSubmit={submithandler}>
                    <h3 className="text-xl mb-2 font-semibold">What's your Fullname?</h3>
                    <div className="flex justify-between items-center rounded p-2">
                            <input
                                required
                                value={Firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                type="text"
                                placeholder="Firstname"
                                className="px-4 py-2 rounded w-[48%] bg-[#eeeeee]"
                            />
                            <input
                                required
                                type="text"
                                value={Lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder="Lastname"
                                className="px-4 py-2 rounded w-[48%] bg-[#eeeeee]"
                            />
                        </div>


                    <h3 className="text-xl mt-4 font-semibold">What's your email?</h3>
                    <input
                        required
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@example.com"
                        className=" bg-[#eeeeee] py-2 px-4 rounded w-full text-lg placeholder:text-base"
                    />

                    <h3 className="text-xl mt-4 font-semibold">What's your password?</h3>
                    <input
                        type="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="rounded  bg-[#eeeeee] w-full placeholder:text-base mb-4 py-2 px-4 text-lg"
                    />

                    <button className="text-white bg-black w-full rounded py-2 mb-2 font-semibold">
                        Sign Up
                    </button>

                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/captain-login" className="text-blue-600 font-semibold">
                            Log in
                        </Link>
                    </p>
                </form>

                {/* Captain Login Button */}
                <Link
                    to="/login"
                    className="bg-green-600 text-white font-semibold flex justify-center items-center mt-5 rounded py-2 w-full text-lg"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
}

export default CaptainSignUp;
