import { useState, useEffect, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { FaUserAstronaut } from "react-icons/fa";
import Img1 from "../../assets/profile/user.webp"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch cart data from your backend or wherever it's stored
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      // Example API call to fetch cart items
      const response = await fetch("/api/cart");
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      // console.error("Error fetching cart data:", error.message);
    }
  };

  return (
    <div className="bg-gray dark:bg-slate-600 top-0 z-50">
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
          <div className="container flex justify-between">
            {/* Logo and Links section */}
            <div className="flex items-center gap-4">
              <Link
                to={"/"}
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              >
                GalacTech
              </Link>

              {/* Responsive Menu button */}
              <button
                className="lg:hidden text-gray-600 text-2xl w-[25px] h-[25px] hover:text-gray-500 cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                &#9776;
              </button>

              {/* Menu items */}
              <div className={`lg:flex ${showMenu ? "flex" : "hidden"}`}>
                <div className="lg:block">
                  <ul className="flex items-center gap-4">
                    <Link
                      to={"/"}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      Home
                    </Link>
                  </ul>
                </div>
                <div className="lg:block">
                  <ul className="flex items-center gap-4">
                    <Link
                      to={"/shop"}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      Shop
                    </Link>
                  </ul>
                </div>
                <div className="lg:block">
                  <ul className="flex items-center gap-4">
                    <Link
                      to={"/blogs"}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      Blogs
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navbar Right section */}
            <div className="flex justify-between items-center gap-4">
              <SearchBar />

              {/* Order-button section */}
              <button className="relative p-3">
                <FaShoppingCart className="text-xl text-gray-600 cursor-pointer w-[25px] h-[25px] hover:text-gray-500 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {cartItems.length}
                </div>
              </button>
              {/* login */}
              <div className="relative" ref={dropdownRef}>
                <div onClick={handleDropdownToggle}>
                  <FaUserAstronaut className="text-gray-600 text-2xl w-[25px] h-[25px] hover:text-gray-500 cursor-pointer" />
                </div>

                {/** Conditionally render login-related items based on screen size */}
                <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
                  <Dropdown.Menu className="my-[10px] mx-[-25px] text-gray-600 dark:text-gray-300 absolute right-0 top-full mt-2 rounded-md shadow-md bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    {/** Render login-related items only if not on phone screens */}
                    {!showMenu && (
                      <>
                        <Link to="/signin">
                          <li className="list-none m-[15px] text-s w-[50px] h-[25px] hover:text-gray-400 cursor-pointer">
                            Login
                          </li>
                        </Link>
                        <Link to="/signup">
                          <li className="list-none m-[15px] text-s w-[50px] h-[25px] hover:text-gray-400 cursor-pointer">
                            Signup
                          </li>
                        </Link>
                        <Link to="/user/accountsettings">
                          <li className="list-none m-[15px] text-s w-[50px] h-[25px] hover:text-gray-400 cursor-pointer">
                            Profile
                          </li>
                        </Link>
                        <Link to="/signin">
                          <li className="list-none m-[15px] text-s w-[50px] h-[25px] hover:text-gray-400 cursor-pointer">
                            Logout
                          </li>
                        </Link>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* Dark mode section */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
