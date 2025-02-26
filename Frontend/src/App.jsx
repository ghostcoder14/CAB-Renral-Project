import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"; 
import UserLogin from "./Pages/UserLogin";
import UserSignUp from "./Pages/UserSignUp";
import CaptainSignUp from "./Pages/captainSignUp";
import CaptainLogin from "./Pages/captainLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/captain-signUp" element={<CaptainSignUp />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </div>
  );
};

export default App;
