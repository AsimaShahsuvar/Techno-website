import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { supabase } from "../supabase/SupabaseConfig";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [search]); // Trigger fetchProducts whenever search changes

  const fetchProducts = async () => {
    try {
      let { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("name", `%${search}%`); // Use ilike to perform case-insensitive search
      if (error) {
        throw error;
      }
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  return (
    <div className="flex justify-between items-center gap-4">
      {/* search input */}
      <div className="relative group hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/3 right-3 duration-200" />
      </div>
    </div>
  );
};

export default SearchBar;
