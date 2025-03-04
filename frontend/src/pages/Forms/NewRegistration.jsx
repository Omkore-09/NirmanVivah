import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import maharashtraData from "../../../public/data/citidata";

export default function RegistrationForm() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    dob: "",
    address: "",
    gender: "",
    caste: "",
    education: "",
    fatherName: "",
    motherName: "",
    state: "",
    district: "",
    taluka: "",
    city: "",
  });

  useEffect(() => {
    if (user && user.primaryPhoneNumber) {
      setFormData((prev) => ({ ...prev, number: user.primaryPhoneNumber }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" && { district: "", taluka: "", city: "" }),
      ...(name === "district" && { taluka: "", city: "" }),
      ...(name === "taluka" && { city: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cleanedFormData = {
        ...formData,
        number: formData.number?.phoneNumber || "",
      };
      console.log("Sending Data:", cleanedFormData);

      const response = await fetch("https://nirmanvivah-backend.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedFormData),
      });

      const responseData = await response.json();
      console.log("Server Response:", responseData);

      if (response.ok) {
        alert("Registration Successful!");
        setTimeout(() => navigate("/new"), 2000);
      } else {
        throw new Error(responseData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error during submission:", error.message);
      alert("Registration failed. Please try again.");
    }
  };

  const selectedDistrict = maharashtraData.districts.find(
    (d) => d.name === formData.district
  );
  const selectedTaluka = selectedDistrict?.talukas.find(
    (t) => t.name === formData.taluka
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#2C4E2D] text-white p-6 rounded-t-lg mb-8 text-center">
          <h1 className="text-3xl font-bold">New Marriage Registration</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-b-lg shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputField
                label="Father's Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Mother's Name"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <DropdownField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={[
                  { name: "Male" },
                  { name: "Female" },
                  { name: "Other" },
                ]}
                required
              />
              <DropdownField
                label="Caste"
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                options={[
                  { name: "General" },
                  { name: "OBC" },
                  { name: "SC" },
                  { name: "ST" },
                ]}
                required
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <DropdownField
                label="Education Qualification"
                name="education"
                value={formData.education}
                onChange={handleChange}
                options={[
                  { name: "High School" },
                  { name: "Bachelor's Degree" },
                  { name: "Master's Degree" },
                  { name: "Doctorate" },
                ]}
                required
              />

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  className="w-full p-3 rounded border border-gray-300 outline-none"
                  readOnly
                />
              </div>
              <DropdownField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                options={[{ name: maharashtraData.state }]}
                required
              />
              <DropdownField
                label="District"
                name="district"
                value={formData.district}
                onChange={handleChange}
                options={maharashtraData.districts}
                required
              />
              <DropdownField
                label="Taluka"
                name="taluka"
                value={formData.taluka}
                onChange={handleChange}
                options={selectedDistrict?.talukas || []}
                required
                disabled={!formData.district}
              />

              <DropdownField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                options={
                  selectedTaluka?.cities?.map((city) => ({ name: city })) || []
                }
                required
                disabled={!formData.taluka}
              />
            </div>
          </div>

          <TextAreaField
            label="Permanent Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#2C4E2D] text-white py-3 rounded-lg font-semibold hover:bg-[#1B3A1E] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded border border-gray-300 outline-none"
      required={required}
    />
  </div>
);

const DropdownField = ({
  label,
  name,
  value,
  onChange,
  options,
  required,
  disabled,
}) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded border border-gray-300 outline-none"
      required={required}
      disabled={disabled}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded border border-gray-300 outline-none h-32"
      required={required}
    />
  </div>
);
