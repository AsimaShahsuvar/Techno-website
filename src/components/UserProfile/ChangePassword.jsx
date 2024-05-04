import { useState } from 'react';

const ChangePassword = () => {
  // State variables to manage input values
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Add functionality to save changes here
    console.log("Changes saved!");
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    console.log("Email:", email);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="px-4 sm:px-10 py-8px sm:py-20px m-10 text-2xl text-primary font-bold">
        Personal Information
      </h1>

      {/* Password side */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between w-full px-4 sm:px-10 py-4 sm:py-8">
        {/* Old Password*/}
        <div className="w-full sm:w-2/5 mb-4 sm:mb-0 pr-4">
          <label htmlFor="oldpass" className="text-lg font-light mb-2 sm:mb-5">
            Old Password <span className="text-primary">*</span>
          </label>
          <input
            type="password"
            name="oldpass"
            id="oldpass"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full px-4 py-3 border border-solid text-gray-700 border-gray-300 rounded-md outline-none focus:border-gray-400"
            required
          />
        </div>

        {/* New Password */}
        <div className="w-full sm:w-2/5 mb-4 sm:mb-0 pr-4">
          <label htmlFor="newpass" className="text-lg font-light mb-2 sm:mb-5">
            New Password <span className="text-primary">*</span>
          </label>
          <input
            type="password"
            name="newpass"
            id="newpass"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
        </div>
      </div>

      {/* Save Changes Button */}
      <button className="px-4 py-2 bg-primary text-white rounded-md m-10 outline-none hover:bg-blue-500 hover:text-gray-100" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default ChangePassword;
