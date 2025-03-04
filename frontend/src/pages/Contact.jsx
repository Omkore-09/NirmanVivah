import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

export default function Contact() {
  const offices = [
    {
      name: " Office 1",
      address: "Nirman Vivah, 12th Floor, Business Plaza, Senapati Bapat Road, Pune - 411016",
      phoneNumbers: [
        { name: "(MD)", number: "+91 98765 43210" },
        { name: " (Manager)", number: "+91 87654 32109" }
      ],
      officeNumber: "+91 20 12345678",
      workingHours: "Mon-Sat: 9:30 AM - 7:00 PM | Sun: 10:00 AM - 2:00 PM",
      mapLink: "https://goo.gl/maps/xyzPuneOffice"
    },
    {
      name: "Office 2",
      address: "Nirman Vivah, Tower B, Financial District, Bandra Kurla Complex, Mumbai - 400051",
      phoneNumbers: [
        { name: "Abc (Director)", number: "+91 91234 56789" },
        { name: "Me (Counselor)", number: "+91 89876 54321" }
      ],
      officeNumber: "+91 22 87654321",
      workingHours: "Mon-Sat: 10:00 AM - 8:00 PM | Sun: Closed",
      mapLink: "https://goo.gl/maps/xyzMumbaiOffice"
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl text-red-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{office.name}</h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 flex items-start">
                  <span className="inline-block mr-2">📍</span>
                  {office.address}
                </p>

                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <FaPhone className="text-blue-500 mr-2" />
                    <span className="font-medium text-gray-700">Contact Numbers:</span>
                  </div>
                  {office.phoneNumbers.map((phone, idx) => (
                    <div key={idx} className="ml-6 mb-2">
                      <p className="text-gray-600">{phone.name}</p>
                      <a href={`tel:${phone.number}`} className="text-blue-600 hover:underline">
                        {phone.number}
                      </a>
                    </div>
                  ))}
                  <div className="ml-6 mt-3">
                    <p className="text-gray-600">Office:</p>
                    <a href={`tel:${office.officeNumber}`} className="text-blue-600 hover:underline">
                      {office.officeNumber}
                    </a>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <FaClock className="text-green-500 mr-2" />
                    <span className="font-medium text-gray-700">Working Hours:</span>
                  </div>
                  <p className="text-gray-600 ml-6">{office.workingHours}</p>
                </div>

                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Locate on Map
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">General Inquiries</h3>
          <p className="text-gray-600 mb-2">
            📧 Email: <a href="mailto:contact@nirmanvivah.com" className="text-blue-600 hover:underline">
              contact@nirmanvivah.com
            </a>
          </p>
          <p className="text-gray-600">
            📞 Helpline: <a href="tel:+911234567890" className="text-blue-600 hover:underline">
              +91 12345 67890
            </a> (24/7 Available)
          </p>
        </div>
      </div>
    </main>
  );
}