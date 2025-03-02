import React, { useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import {UserdataContext} from '../../context/userContext'
const UserSignUp = () => {

    const navigate = useNavigate()
    
    const[Email, setEmail] = useState('')
    const[Firstname, setFirstname] = useState('')
    const[Lastname, setlastname] = useState('')
    const[Password, setPassword] = useState('')
    const[username, setUsername ] = useState('')
    const{user , setUser} = useContext(UserdataContext)


    const submithandler = async(e) => {
        e.preventDefault();
      const newUser = {
        firstname: Firstname,
        lastname: Lastname,
        password: Password,
        email: Email,
        username: username
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser)

      if(response.status === 201){
         const data = response.data
         setUser(data.user)
         localStorage.setItem('token', data.token ) 
         navigate('/home')
      }

       console.log(user);
       setEmail('');
       setFirstname('');
       setPassword('');
       setlastname('');
       setUsername('');
    }



     
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
            
            {/* Form Container */}
            <div className="p-7 w-[400px] bg-white  border rounded-xl shadow-lg">
                <form onSubmit={submithandler}>
                    <h3 className="text-xl mb-2 font-semibold">What's your Fullname?</h3>
                    <div>
                        <input
                            required
                            value={Firstname}
                            onChange={(e)=>{
                                setFirstname(e.target.value)
                            }}
                            type="text"
                            placeholder="Firstname"
                            className="bg-[#eeeeee] px-4 rounded py-2 w-full text-lg placeholder:text-base"
                        />
                        <input
                            required
                            type="text"
                            value={Lastname}
                            onChange={(e)=>{
                                setlastname(e.target.value)
                            }}
                            placeholder="Lastname"
                            className="bg-[#eeeeee] px-4 rounded py-2 w-full text-lg placeholder:text-base mt-2.5"
                        />
                    </div>

                    <h3 className="text-xl mt-4 font-semibold">What's your email?</h3>
                    <input
                        required
                        type="email"
                        value={Email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        placeholder="example@example.com"
                        className="bg-[#eeeeee] py-2 px-4 rounded w-full text-lg placeholder:text-base"
                    />

                    <h3 className="font-semibold text-xl mt-4">What's your username?</h3>
                    <input
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}
                        className="rounded bg-[#eeeeee] w-full placeholder:text-base py-2 px-4 text-lg"
                    />

                    <h3 className="text-xl mt-4 font-semibold">What's your password?</h3>
                    <input
                        type="password"
                        value={Password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        placeholder="Password"
                        className="rounded bg-[#eeeeee] w-full placeholder:text-base mb-4 py-2 px-4 text-lg"
                    />

                    <button className="text-white bg-black w-full rounded py-2 mb-2 font-semibold">
                        Sign Up
                    </button>

                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 font-semibold">
                            Log in
                        </Link>
                    </p>
                </form>

                {/* Captain Login Button */}
                <Link 
                    to="/captain-login" 
                    className="bg-[#10b461] text-white font-semibold flex justify-center items-center mt-5 rounded py-2 w-full text-lg"
                >
                    Sign in as Captain
                </Link>
            </div>
        </div>
    );
};

export default UserSignUp;
