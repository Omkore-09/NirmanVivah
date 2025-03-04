import { FaEdit, FaSave, FaUser, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function UpdateRegistration() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/check-registration/${mobileNumber}`);
      const data = await response.json();

      if (data.type === "normal" || data.type === "handicap") {
        setUserType(data.type);
        setUserData(data.user);
        setEditedData(data.user);
        setIsVerified(true);
      } else {
        setUserType("not_registered");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-2xl transition-all transform hover:scale-105">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">🔄 Update Registration</h1>

        {!isVerified ? (
          <>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">📞 Enter Mobile Number</label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/, ""))}
                  placeholder="📱 10-digit number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500"
                  maxLength="10"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-yellow-700 text-white px-4 py-3 rounded-lg hover:bg-yellow-800 transition-transform transform hover:scale-105"
                  disabled={mobileNumber.length !== 10}
                >
                  ✅ Submit
                </button>
              </div>
            </div>
          </>
        ) : userType === "normal" || userType === "handicap" ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">📝 Your Details</h2>
            <div className="bg-gray-100 p-6 rounded-lg text-left space-y-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-blue-600" />
                <label className="font-semibold">Name:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p>{userData.name}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <FaPhone className="text-green-600" />
                <label className="font-semibold">Mobile:</label>
                <p>{userData.number}</p>
              </div>

              <div className="flex items-center space-x-2">
                <FaBirthdayCake className="text-pink-600" />
                <label className="font-semibold">DOB:</label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dob"
                    value={editedData.dob}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p>{new Date(userData.dob).toLocaleDateString()}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-600" />
                <label className="font-semibold">Address:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editedData.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p>{userData.address}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <label className="font-semibold">🧑‍💼 Gender:</label>
                <p>{userData.gender}</p>
              </div>

              {userType === "handicap" && (
                <>
                  <div className="flex items-center space-x-2">
                    <FaAccessibleIcon className="text-purple-600" />
                    <label className="font-semibold">Disability Type:</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="handicapType"
                        value={editedData.handicapType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      <p>{userData.handicapType}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="font-semibold">♿ Handicap %:</label>
                    {isEditing ? (
                      <input
                        type="number"
                        name="handicapPercentage"
                        value={editedData.handicapPercentage}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      <p>{userData.handicapPercentage}%</p>
                    )}
                  </div>
                </>
              )}

              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition-transform transform hover:scale-105"
                >
                  💾 Save Changes
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  ✏️ Edit Details
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500">🚨 No Registration Found</h2>
            <p className="text-gray-700">You are not registered. Please register below.</p>
            <div className="mt-4 space-x-3">
              <Link to="/register" className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">
                📝 Register as Normal
              </Link>
              <Link to="/handicap-register" className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                ♿ Register as Handicap
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
