// import { useContext } from "react";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
// import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center gap-4">
      {/* search input */}
      <div className="relative group hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/3 right-3 duration-200" />
      </div>
    </div>
  );
};

export default SearchBar;
