import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserdataContext } from "../../context/userContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();
  const { setUser } = useContext(UserdataContext);

  useEffect(() => {
    let isMounted = true; 
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoading(false);
      navigate("/login");
      return;
    }

    const verifyUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (isMounted) {
          if (response.status === 200) {
            setUser(response.data.user);
          } else {
            throw new Error("Unauthorized");
          }
        }
      } catch (error) {
        console.error("Error verifying the user:", error);
        localStorage.removeItem("token");
        if (isMounted) {
          setIsLoading(false);
          navigate("/login");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    verifyUser();

    return () => {
      isMounted = false; 
    };
  }, [setUser, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
