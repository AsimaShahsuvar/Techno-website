import React, { useState } from "react";

const AccountSettings = () => {
  // State variables to manage input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Validate email format before saving changes
    if (validateEmail(email) || email === "") {
      console.log("Changes saved!");
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Email:", email);
      // Reset email error state
      setEmailError("");
    } else {
      // Set email error state
      setEmailError("Invalid email format!");
      // Show alert for invalid email format
      alert("Invalid email format!");
    }

    // Validate name is not empty
    if (name.trim() === "") {
      // Set name error state
      setNameError("Name cannot be empty!");
      // Show alert for empty name
      alert("Name cannot be empty!");
    } else {
      // Reset name error state
      setNameError("");
    }
  };

  // Function to validate email format
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Function to validate phone number format
  const validatePhone = (value) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="px-4 sm:px-10 py-8px sm:py-20px m-10 text-2xl text-primary font-bold">
        Personal Information
      </h1>

      {/* Your Name and Phone Mobile */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between w-full px-4 sm:px-10 py-4 sm:py-8">
        {/* Your Name */}
        <div className="w-full sm:w-2/5 mb-4 sm:mb-0 pr-4">
          <label htmlFor="name" className="text-lg font-light mb-2 sm:mb-5">
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-solid text-gray-700 border-gray-300 rounded-md outline-none focus:border-gray-400"
            required
          />
          {/* Display name error message */}
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>

        {/* Gap between Your Name and Phone Mobile */}
        <div className="w-full sm:w-1/12"></div>

        {/* Phone Mobile */}
        <div className="w-full sm:w-2/5">
          <label htmlFor="phone" className="text-lg font-light mb-2 sm:mb-5">
            Phone Mobile <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => {
              const value = e.target.value;
              if (validatePhone(value) || value === "") {
                setPhone(value);
              }
            }}
            className="w-full px-4 py-3 border border-solid text-gray-700 border-gray-300 rounded-md outline-none focus:border-gray-400"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full px-4 sm:px-10 py-4 sm:py-8">
        <div className="w-full sm:w-2/5 mb-4 sm:mb-0 pr-4">
          <label htmlFor="email" className="text-lg font-light mb-2 sm:mb-5">
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-solid text-gray-700 border-gray-300 rounded-md outline-none focus:border-gray-400"
            required
          />
          {/* Display email error message */}
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
      </div>

      {/* Save Changes Button */}
      <button
        className="px-4 py-2 bg-primary text-white rounded-md m-10"
        onClick={handleSaveChanges}
      >
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
