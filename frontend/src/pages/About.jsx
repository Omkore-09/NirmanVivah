import React from 'react';
import { FaBullseye, FaEye, FaHistory, FaListOl } from 'react-icons/fa';

export default function About() {
    return (
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-baloo">
            निर्माण विवाह 
          </h1>

          {/* Company Story Section */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <FaHistory className="text-3xl text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800 font-baloo">आमचा प्रवास</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-noto">
              २०१० मध्ये महाराष्ट्रातील एका लहान पायरीपासून सुरुवात केलेला निर्माण विवाहचा प्रवास,
              आज राज्यातील सर्वात विश्वासार्ह विवाह सेवा बनला आहे. लग्न सल्लागार रोहन आणि प्रिया देशपांडे 
              यांनी सुरू केलेल्या या संकल्पनेने आजवर १०,०००हून अधिक जोडप्यांना सुखी विवाहबंधनात बांधले आहे. 
              स्थानिक समुदायासाठीच्या छोट्या प्रयत्नापासून सुरुवात करून, आज आम्ही आधुनिक तंत्रज्ञान आणि 
              सांस्कृतिक संवेदनशीलता यांच्या समतोल साधत महाराष्ट्रभर सेवा पुरवत आहोत.
            </p>
          </section>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaBullseye className="text-2xl text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 font-baloo">उद्दिष्ट</h3>
              </div>
              <p className="text-gray-600 font-noto">
                खऱ्या जुळण्याद्वारे जीवनभराचे नाते निर्माण करणे. 
                आधुनिक अपेक्षांसोबत मराठी सांस्कृतिक मूल्ये जपणारी 
                विवाहसेवा पुरविणे.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaEye className="text-2xl text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 font-baloo">दृष्टीकोन</h3>
              </div>
              <p className="text-gray-600 font-noto">
                भारतभर मजबूत कुटुंबसंस्थेचा पाया रचणाऱ्या सुसंवादी विवाहाचा 
                सर्वात विश्वासार्ह सहयोगी बनणे.
              </p>
            </div>

            {/* Objectives */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaListOl className="text-2xl text-orange-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 font-baloo">उद्दिष्टे</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2 font-noto">
                <li>१००% पडताळलेली प्रोफाइल्स</li>
                <li>९५%+ ग्राहक समाधान</li>
                <li>२०२५ पर्यंत ५ नव्या राज्यांत विस्तार</li>
                <li>२०२४ पर्यंत AI-आधारित जुळवणी</li>
              </ul>
            </div>
          </div>

          {/* Commitment Section */}
          <section className="bg-blue-600 text-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 font-baloo">आमचे वचन</h2>
            <p className="leading-relaxed font-noto">
              निर्माण विवाहमध्ये आम्ही पारंपारिक जुळवणी पद्धती आणि आधुनिक तंत्रज्ञान यांचा समन्वय साधतो. 
              ५०हून अधिक अनुभवी सल्लागार प्रत्येक प्रोफाइल वैयक्तिकरित्या तपासतात. आमच्या नियमित 
              कुटुंब संमेलनांद्वारे विवाहपूर्व तयारीचे मार्गदर्शन आणि काटेकोर गोपनीयता धोरण - 
              आपला विश्वास हाच आमचा सर्वात मोठा खजिना आहे.
            </p>
            <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full 
              hover:bg-blue-50 transition-colors font-semibold font-baloo">
              आमच्या संघाशी भेटा
            </button>
          </section>
        </div>
      </main>
    )
}