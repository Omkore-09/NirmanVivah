import React from 'react'

export default function Location() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Locations</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Section */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Address</h2>
              <p className="text-gray-600 text-lg">
                Nirman Vivah Bhavan<br />
                123 Marriage Plaza, 4th Floor<br />
                New Delhi - 110001<br />
                <span className="block mt-3 font-semibold">
                  Phone: +91 11 2345 6789<br />
                  Email: contact@nirmanvivah.com
                </span>
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Working Hours</h2>
              <div className="text-gray-600 text-lg space-y-2">
                <p className="font-semibold">Monday - Friday:<br />9:00 AM - 6:00 PM</p>
                <p className="font-semibold">Saturday:<br />10:00 AM - 4:00 PM</p>
                <p className="font-semibold text-red-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </main>
  )
}