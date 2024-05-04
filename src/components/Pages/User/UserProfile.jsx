import { useParams } from "react-router-dom";
import SingleBanner from "../../Banners/SingleBanner";
import Img2 from "../../../assets/profile/userside.avif";
import UserSidebar from "../../UserProfile/UserSidebar";
import AccountSettings from "../../UserProfile/AccountSettings";
import ChangePassword from "../../UserProfile/ChangePassword";

const UserProfile = () => {
  const { activepage } = useParams();

  return (
    <div className="userprofile flex flex-col">
      {/* Single Banner */}
      <SingleBanner heading={`My Profile `} bannerimage={Img2} />

      {/* Welcome message and logout button */}
      <div className="flex items-center justify-center  p-4 bg-gray-200">
        <h3 className="text-xl text-gray-500 ">Welcome back, {}</h3>
      </div>
       <div className="bg-gray-200">
       <div className=" flex justify-center text-md">
       <button className="px-4 py-2 bg-primary hover:bg-blue-500 text-white rounded-md text ">
          Logout
        </button>
       </div>
       </div>

      {/* User profile content */}
      <div className="flex w-full justify-center mt-10vh gap-20px">
        {/* Left side */}
        <div className="w-1/5 border border-gray-300 rounded-md min-h-1/2 mr-5"> {/* Added mr-5 for right margin */}
          <UserSidebar activepage={activepage} />
        </div>
        {/* Right side */}
        <div className="w-3/5 border border-gray-300 rounded-md min-h-1/2">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
