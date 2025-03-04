import React from 'react';
import { FaShieldAlt, FaUsers, FaHandshake, FaLock, FaStar, FaHeadset } from 'react-icons/fa';

export default function Benifit() {
  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "सुरक्षित प्रक्रिया",
      content: "कठोर सुरक्षा प्रक्रिया आणि पडताळणी प्रणाली. सर्व वापरकर्ता प्रोफाइल्स व्हेरिफाईड आणि सुरक्षित."
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "परंपरेशी सुसंगत",
      content: "मराठी सांस्कृतिक मूल्यांना अनुसरून जोड्या. कुटुंब-आधारित शोध प्रक्रिया."
    },
    {
      icon: <FaHandshake className="text-3xl text-purple-600" />,
      title: "वैयक्तिकृत मदत",
      content: "अनुभवी सल्लागारांकडून वैयक्तिक मार्गदर्शन. २४/७ सहाय्य सेवा उपलब्ध."
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "गोपनीयता",
      content: "कठोर गोपनीयता धोरण. फक्त परवानगी असलेल्या सदस्यांसोबतच माहिती शेअर."
    },
    {
      icon: <FaStar className="text-3xl text-orange-600" />,
      title: "यशस्वी जोड्या",
      content: "१०,०००+ यशस्वी विवाह. आमच्या यशस्वी जोडप्यांची प्रमाणपत्रे."
    },
    {
      icon: <FaHeadset className="text-3xl text-teal-600" />,
      title: "विशेष समर्थन",
      content: "विवाहपूर्व मार्गदर्शन सेवा. कुटुंब समुपदेशन आणि कागदपत्र मदत."
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-baloo">निर्माण विवाहाचे फायदे</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-3 font-baloo">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-noto">
                {benefit.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-baloo">
            आमचे वचन
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-noto">
            "निर्माण विवाह हा केवळ जोडीदार शोधण्याचा नव्हे तर संपूर्ण कुटुंब जोडण्याचा प्रयत्न आहे. 
            आमची प्रत्येक सेवा मराठी परंपरा आणि आधुनिक तंत्रज्ञानाच्या सुसंवादातून निर्माण केली गेली आहे."
          </p>
        </div>
      </div>
    </main>
  )
}