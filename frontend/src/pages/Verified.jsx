import { FaCheckDouble } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

export default function VerifiedRegistration() {
  return (
    <div className="min-h-screen p-8 bg-[#00B894] text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <FaCheckDouble className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Verified Registration</h1>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Verification Benefits</h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 border rounded-lg">Priority Matching</div>
            <div className="p-4 border rounded-lg">Government Recognition</div>
            <div className="p-4 border rounded-lg">Legal Protection</div>
          </div>
        </div>

        <Link to="/" className="mt-8 inline-block bg-white text-[#00B894] px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
          Go Back
        </Link>
      </div>
    </div>
  )
}