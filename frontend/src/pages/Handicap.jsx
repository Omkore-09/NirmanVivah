import { FaWheelchair, FaHandsHelping, FaClock, FaFileAlt, FaMoneyBillWave, FaUniversalAccess } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

export default function HandicapRegistration() {
  return (
    <div className="min-h-screen p-8 bg-slate-800 text-gray-100">
      <div className="container mx-auto max-w-4xl">
        {/* Government Header */}
        <div className="bg-white/5 p-6 rounded-t-lg mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="../../public/images/Ashok-Symbol.png" 
              alt="Government Emblem" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold">Handicap Marriage Portal</h1>
              {/* <p className="text-sm mt-2 text-gray-300">Department of Social Justice & Empowerment</p> */}
            </div>
          </div>
          <FaWheelchair className="w-16 h-16 mx-auto text-emerald-400 mt-4" />
        </div>

        {/* Provisions Section */}
        <div className="bg-white/5 p-8 rounded-b-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-emerald-400/30 pb-4">
            Accessibility Features & Provisions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaHandsHelping className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Dedicated Support Team</h3>
              <p className="text-sm text-gray-300">Personalized assistance throughout the process</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaClock className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Priority Processing</h3>
              <p className="text-sm text-gray-300">Expedited verification scheduling</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaFileAlt className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Flexible Documentation</h3>
              <p className="text-sm text-gray-300">Accommodations for document submission</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaMoneyBillWave className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Fee Concessions</h3>
              <p className="text-sm text-gray-300">Up to 50% reduction in registration fees</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
              <FaUniversalAccess className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="font-semibold mb-2">Accessible Centers</h3>
              <p className="text-sm text-gray-300">Wheelchair-friendly facilities nationwide</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <Link 
              to="/hregister" 
              className="bg-emerald-400 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-500 transition-all text-center text-lg"
            >
              Start Registration
            </Link>
            
            <Link 
              to="/" 
              className="border-2 border-emerald-400/30 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all text-center"
            >
              Return to Portal Home
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Accessibility Helpline: 1800-123-ACCESS (2237) | Available 24/7
        </p>
      </div>
    </div>
  )
}