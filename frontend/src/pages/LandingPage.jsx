import React from "react";
import { SignInButton } from "@clerk/clerk-react";
// import logo from "../assets/logo1.png"; 
import logo from "/images/logomain.png"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Company Name */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#9b1c1c] mb-4">
        Nirman Vivah Kendra
      </h1>

      {/* Logo */}
      <img src={logo} alt="Company Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-6" />

      {/* Inspirational Quote */}
      <p className="text-lg md:text-xl text-gray-700 italic mb-6">
        "Start your beautiful journey with the one meant for you!"
      </p>

      {/* Sign In Button */}
      <SignInButton mode="modal">
        <button className="px-6 py-3 bg-[#9b1c1c] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
          Sign In to Continue
        </button>
      </SignInButton>
    </div>
  );
}
