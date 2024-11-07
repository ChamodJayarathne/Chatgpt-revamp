// src/components/GoogleCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const error = urlParams.get("error");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/home"); 
    }

    if (error) {
      
      console.error(decodeURIComponent(error));
      navigate("/login"); 
    }
  }, [navigate]);

  return <div>Loading...</div>; 
};

export default GoogleCallback;
