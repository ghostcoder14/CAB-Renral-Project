import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../../context/captainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { captain, setCaptain } = useContext(captainDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/captain-login");
            return;
        }

        const verifyCaptain = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                } else {
                    throw new Error("Unauthorized");
                }
            } catch (error) {
                console.error("Error verifying captain:", error);
                localStorage.removeItem("token");
                navigate("/captain-login");
            } finally {
                setIsLoading(false);
            }
        };

        verifyCaptain();
    }, [setCaptain, navigate]);

    if (isLoading) {
        return <div>Loading....</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectedWrapper;
