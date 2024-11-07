/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#343541] flex flex-col items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-white text-[15px] sm:text-2xl font-[500]">
              Welcome to ChatterBot
            </h1>
            
            <div className="flex gap-3 justify-center">
              <button onClick={()=> navigate("/login")} className="px-6 py-2  bg-[#0FA47F] text-white rounded-md text-[14px] hover:bg-[#00a885] transition-colors duration-200">
                Log In
              </button>
              <button onClick={()=> navigate("/signup")} className="px-8 py-2   bg-[#0FA47F] text-white rounded-md text-[14px] hover:bg-[#00a885] transition-colors duration-200">
                Sign up
              </button>
            </div>
          </div>
        </div>
      );
}

export default Welcome