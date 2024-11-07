/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/signup", {
        email,
        password,
        username,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/api/auth/google";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const error = urlParams.get("error");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/home");
    }

    if (error) {
      setError(decodeURIComponent(error));
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md space-y-8 items-center">
        
        <div className="text-center">
          <h2 className="mt-6 text-[31px] font-[700] text-gray-900">
            Hey Its Good to See you
          </h2>
        </div>

      
        <form
          className="mt-8 space-y-6 w-[320px] items-center ml-2"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <div className="relative">
              <div className="absolute -top-2 flex items-center w-full">
                <span className="text-[14px] text-[#0FA47F] bg-white pr-2 pl-2">
                  User name
                </span>
                <div className="flex-grow h-[1px]"></div>
              </div>

              <input
                type="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full mt-2 px-3 py-2 border-2 border-[#0FA47F] rounded-md focus:outline-none focus:border-emerald-600"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute -top-2 flex items-center w-full">
                <span className="text-[14px] text-[#0FA47F] bg-white pr-2 pl-2">
                  Email address
                </span>
                <div className="flex-grow h-[1px]"></div>
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 border-2 border-[#0FA47F] rounded-md focus:outline-none focus:border-emerald-600"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="relative h-[64px]">
            <div className="relative">
      
              <div className="absolute -top-2 flex items-center w-full">
                <span className="text-[14px] text-[#0FA47F] bg-white pl-2 pr-2">
                  Password
                </span>
                <div className="flex-grow- h-[1px]"></div>
              </div>

            
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 border-2 border-[#0FA47F] rounded-md focus:outline-none focus:border-emerald-600"
                placeholder=""
                required
              />
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-[#00B894] hover:bg-[#00A583] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B894]"
            >
              Continue
            </button>
          </div>
        </form>

   
        <div className="text-center text-[14px] w-[320px] ml-2">
          <span className="text-gray-600">Already have an account? </span>
          <a
            href="/login"
            className="font-medium text-[#0FA47F] hover:text-[#00A583]"
          >
            Login
          </a>
        </div>

       
        <div className="relative w-[320px] ml-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

       
        <div className="space-y-3 w-[320px] ml-2">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-start px-4 py-3 border border-gray-300 rounded-md shadow-sm text-[15px] font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B894]"
          >
            <FcGoogle className="h-5 w-5 mr-5" />
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full flex items-start px-4 py-3 border border-gray-300 rounded-md shadow-sm text-[15px] font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B894]"
          >
            
            <svg
              className="h-5 w-5 mr-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path d="M9.5 0H0V9.5H9.5V0Z" fill="#F25022" />{" "}
              <path d="M20 0H10.5V9.5H20V0Z" fill="#7FBA00" />{" "}
              <path d="M9.5 10.5H0V20H9.5V10.5Z" fill="#00A4EF" />{" "}
              <path d="M20 10.5H10.5V20H20V10.5Z" fill="#FFB900" />{" "}
            </svg>
            Continue with Microsoft Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
