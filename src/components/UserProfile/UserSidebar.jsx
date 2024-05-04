import { MdManageAccounts } from "react-icons/md";
import {
  AiOutlineLock,
  AiOutlineShopping,
  AiOutlineHome,
} from "react-icons/ai";
import { PiNotepad } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./UserSidebar.css"; // Import the CSS file here

const UserSidebar = ({ activepage }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Account Settings */}
      {activepage === "accountsettings" ? (
        <div className="sidebar-item-active">
          <MdManageAccounts className="sidebar-icon" />
          <span>Account Settings</span>
        </div>
      ) : (
        <Link to="/user/accountsettings" className="sidebar-item">
          <MdManageAccounts className="sidebar-icon" />
          <span>Account Settings</span>
        </Link>
      )}

      {/* Your Orders */}
      {activepage === "yourorders" ? (
        <div className="sidebar-item-active">
          <AiOutlineShopping className="sidebar-icon" />
          <span>Your Orders</span>
        </div>
      ) : (
        <Link to="/user/yourorders" className="sidebar-item">
          <AiOutlineShopping className="sidebar-icon" />
          <span>Your Orders</span>
        </Link>
      )}

      {/* Address */}
      {activepage === "address" ? (
        <div className="sidebar-item-active">
          <AiOutlineHome className="sidebar-icon" />
          <span>Address</span>
        </div>
      ) : (
        <Link to="/user/address" className="sidebar-item">
          <AiOutlineHome className="sidebar-icon" />
          <span>Address</span>
        </Link>
      )}

      {/* Legal Notice */}
      {activepage === "legalnotice" ? (
        <div className="sidebar-item-active">
          <PiNotepad className="sidebar-icon" />
          <span>Legal Notice</span>
        </div>
      ) : (
        <Link to="/user/legalnotice" className="sidebar-item">
          <PiNotepad className="sidebar-icon" />
          <span>Legal Notice</span>
        </Link>
      )}

      {/* Change Password */}
      {activepage === "changepassword" ? (
        <div className="sidebar-item-active">
          <AiOutlineLock className="sidebar-icon" />
          <span>Change Password</span>
        </div>
      ) : (
        <Link to="/user/changepassword" className="sidebar-item">
          <AiOutlineLock className="sidebar-icon" />
          <span>Change Password</span>
        </Link>
      )}
    </div>
  );
};

export default UserSidebar;
