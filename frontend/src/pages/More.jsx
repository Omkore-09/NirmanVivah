import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaImage, FaUserCircle } from "react-icons/fa";

const reviews = [
  { name: "Amit Sharma", review: "Excellent service! Highly recommended.", rating: 5 },
  { name: "Pooja Singh", review: "Very helpful and smooth experience.", rating: 4 },
  { name: "Rahul Verma", review: "A great platform for finding the right match.", rating: 5 },
  { name: "Sneha Patil", review: "User-friendly and well-designed!", rating: 4 },
];

export default function More() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    setSelectedImage((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
    setSelectedImage((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">📷 Gallery & Reviews 📝</h1>

        {/* Image Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">📸 Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-40 flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer shadow-md hover:scale-105 transition"
                onClick={() => openLightbox(index)}
              >
                <FaImage className="text-gray-700 text-6xl" />
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
              <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>
                ✖
              </button>
              <button className="absolute left-4 text-white text-3xl" onClick={prevImage}>
                <FaArrowLeft />
              </button>
              <div className="w-80 h-80 flex items-center justify-center bg-gray-500 rounded-lg">
                <FaImage className="text-white text-8xl" />
              </div>
              <button className="absolute right-4 text-white text-3xl" onClick={nextImage}>
                <FaArrowRight />
              </button>
            </div>
          )}
        </section>

        {/* Review Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">⭐ User Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <FaUserCircle className="text-gray-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                  <p className="text-gray-600 mt-2">{review.review}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
