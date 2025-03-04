import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import maharashtraData from "../../public/data/citidata";

const SearchMarriageProfiles = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStates([maharashtraData.state]);
    setSelectedState(maharashtraData.state);
  }, []);

  useEffect(() => {
    if (selectedState) {
      const districtNames = maharashtraData.districts.map((d) => d.name);
      setDistricts(districtNames);
      setSelectedDistrict("");
      setSelectedTaluka("");
      setSelectedCity("");
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      const district = maharashtraData.districts.find((d) => d.name === selectedDistrict);
      if (district) {
        const talukaList = district.talukas.map((t) => t.name);
        setTalukas(talukaList);
      }
      setSelectedTaluka("");
      setSelectedCity("");
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedDistrict && selectedTaluka) {
      const district = maharashtraData.districts.find((d) => d.name === selectedDistrict);
      if (district) {
        const taluka = district.talukas.find((t) => t.name === selectedTaluka);
        if (taluka) {
          setCities(taluka.cities);
        }
      }
      setSelectedCity("");
    }
  }, [selectedTaluka, selectedDistrict]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/search", {
        params: {
          state: selectedState,
          district: selectedDistrict,
          taluka: selectedTaluka,
          city: selectedCity,
        },
      });

      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
      setProfiles([]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          👫 विवाह प्रोफाइल शोधा 💑
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <Dropdown label="🏙️ राज्य" options={states} value={selectedState} onChange={setSelectedState} />
          <Dropdown label="📍 जिल्हा" options={districts} value={selectedDistrict} onChange={setSelectedDistrict} />
          <Dropdown label="🏡 तालुका" options={talukas} value={selectedTaluka} onChange={setSelectedTaluka} />
          <Dropdown label="🌆 शहर" options={cities} value={selectedCity} onChange={setSelectedCity} />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center text-lg font-semibold"
          >
            <FaSearch className="mr-2" /> शोधा
          </button>
        </div>

        {loading && <p className="text-center mt-4 text-gray-600">🔍 शोध सुरू आहे...</p>}

        <div className="mt-6">
          {profiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profiles.map((profile) => (
                <ProfileCard key={profile._id} profile={profile} />
              ))}
            </div>
          ) : (
            !loading && <p className="text-center text-gray-600">⚠️ कोणतीही प्रोफाइल सापडली नाही.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ label, options, value, onChange }) => (
  <div className="flex-1 min-w-[200px]">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">🔽 निवडा</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ProfileCard = ({ profile }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-300">
    <h3 className="text-xl font-semibold text-gray-800">👤 {profile.name}</h3>
    <p className="text-gray-600">🎂 वय: {profile.age}</p>
    <p className="text-gray-600">📍 जिल्हा: {profile.district}, {profile.state}</p>
    <p className="text-gray-600">🎓 शिक्षण: {profile.education}</p>
    <p className="text-gray-600">💼 व्यवसाय: {profile.occupation}</p>
  </div>
);

export default SearchMarriageProfiles;
