import { FaHeart, FaUserPlus, FaEnvelope, FaFileUpload, FaMoneyBillAlt, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'
// import img from '../../public/images/Ashok-Symbol.png'

export default function NewRegistration() {
  return (
    <div className="min-h-screen p-8 bg-[#2C4E2D] text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Government Header */}
        <div className="bg-white/10 p-6 rounded-t-lg mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="../../public/images/Ashok-Symbol.png" 
              alt="Government Emblem" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold">New Marriage Registration</h1>
              {/* <p className="text-sm mt-2">Ministry of Home Affairs, Government of India</p> */}
            </div>
          </div>
          {/* <FaHeart className="w-16 h-16 mx-auto text-white mt-4" /> */}
        </div>

        {/* Registration Process */}
        <div className="bg-white/10 p-8 rounded-b-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white/30 pb-4">
            Registration Procedure
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaUserPlus className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="font-semibold mb-2">1. Account Creation</h3>
              <p className="text-sm text-white/80">Provide basic personal details</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaEnvelope className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="font-semibold mb-2">2. Verification</h3>
              <p className="text-sm text-white/80">Verify email & mobile number</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaFileUpload className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="font-semibold mb-2">3. Document Upload</h3>
              <p className="text-sm text-white/80">Upload required documents</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaMoneyBillAlt className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="font-semibold mb-2">4. Fee Payment</h3>
              <p className="text-sm text-white/80">Secure online payment gateway</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaCalendarAlt className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="font-semibold mb-2">5. Appointment</h3>
              <p className="text-sm text-white/80">Schedule verification visit</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <Link 
              to="/register" 
              className="bg-white text-[#2C4E2D] px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all text-center text-lg hover:scale-[1.02]"
            >
              Begin Registration
            </Link>
            
            <Link 
              to="/" 
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Return to Home
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-white/80 mt-8">
          For assistance, contact: marriageportal[at]gov.in | Helpline: 1800-123-4567
        </p>
      </div>
    </div>
  )
}