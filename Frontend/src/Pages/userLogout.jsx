import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/user/logout`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true, 
                }
            );

            if (response.status === 200) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div>
            <button className="border" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserLogout;
