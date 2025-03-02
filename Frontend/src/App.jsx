import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Pages/UserLogin";
import UserSignUp from "./Pages/UserSignUp";
import CaptainSignUp from "./Pages/captainSignUp";
import CaptainLogin from "./Pages/captainLogin";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import UserProtectedWrapper from "./Pages/userProtectedWrapper";
import UserLogout from "./Pages/userLogout";
import CaptainHome from "./Pages/captainHome";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} /> 
        <Route path="/captain-signUp" element={<CaptainSignUp />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />   
        <Route path= "/home" element ={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        }/>
        <Route path="/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
         </UserProtectedWrapper>
        } />
        <Route path="/captain-home" element={
          <CaptainHome/>
        }/>
        
      </Routes>
    </div>
  );
};

export default App;
