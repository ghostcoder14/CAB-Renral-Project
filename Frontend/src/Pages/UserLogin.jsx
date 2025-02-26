import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userdata, setUserData] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        });
       
        console.log(userdata)
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 relative">
            <img 
                className="w-16 absolute top-4 left-4" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  
                alt="Uber Logo"
                onClick={() => {
                    navigate('/')
                }}
            />
            <div className="p-7 w-[400px] bg-white border -300 rounded-xl shadow-lg">
                <form onSubmit={submitHandler}>
                    <h3 className="text-xl mb-2 font-semibold">What's your email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        placeholder="email@example.com" 
                        className="bg-[#eeeeee] px-4 rounded py-2 w-full text-lg placeholder:text-base"
                    />
                    <h3 className="text-xl mb-2 mt-4 font-semibold">Enter Password</h3>
                    <input
                        required 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password" 
                        className="bg-[#eeeeee] py-2 px-4 rounded mb-4 w-full text-lg placeholder:text-base"
                    />
                    <button className="text-white bg-black w-full rounded py-2 mb-2 font-semibold">Login</button>
                    <p className="text-center text-sm">
                        New here? <Link to="/signup" className="text-blue-600 font-semibold">Create new Account</Link>
                    </p>
                </form>
                <Link 
                    to="/captain-login" 
                    className="bg-[#10b461] text-white font-semibold flex justify-center items-center mt-5 rounded py-2 w-full text-lg"
                >
                    Sign in as Captain
                </Link>
            </div>
        </div>
    );
}

export default UserLogin;
