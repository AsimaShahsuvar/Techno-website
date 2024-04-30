import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {


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

              {/* Menu items */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                  <Link
                    to={"/"}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to={"/shop"}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    Shop
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    Blogs
                  </Link>
                </ul>
              </div>
            </div>

            {/* Navbar Right section */}
            <div className="flex justify-between items-center gap-4">
              <SearchBar />

              {/* Order-button section */}
              <button className="relative p-3">
                <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
               
                </div>
              </button>
              {/* login */}
              <button className="text-gray-500 dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 rounded-md">
                <Link to={"/login"}>Login</Link>
              </button>

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
