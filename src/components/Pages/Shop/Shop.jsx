import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../components/supabase/SupabaseConfig";
import Button from "../../Shared/Button";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOtherCategories, setShowOtherCategories] = useState(false); // State to toggle display of other categories
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        throw error;
      }
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleProductClick = (productId) => {
    // Navigate to the product info page with the specific product ID
    navigate(`/productinfo/${productId}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="py-8">
      <div className="">
        <h1 className="text-center mb-5 text-2xl font-semibold">
          All Products
        </h1>

        {/* Filter sidebar */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li
              className={`cursor-pointer ${
                selectedCategory === "All" ? "font-semibold" : ""
              }`}
              onClick={() => handleCategoryChange("All")}
            >
              All
              {showOtherCategories && (
                <>
                  <li
                    className={`cursor-pointer ${
                      selectedCategory === "Electronics" ? "font-semibold" : ""
                    }`}
                    onClick={() => handleCategoryChange("Electronics")}
                  >
                    Electronics
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedCategory === "Clothing" ? "font-semibold" : ""
                    }`}
                    onClick={() => handleCategoryChange("Clothing")}
                  >
                    Clothing
                  </li>
                  <li className={`cursor-pointer ${
                    selectedCategory === "Accessories" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleCategoryChange("Accessories")}
                >
                  Accessories
                </li>
              </>
            )}
            </li>
            <>
              <li
                className="cursor-pointer"
                onClick={() => setShowOtherCategories(!showOtherCategories)}
              >
                {showOtherCategories ? "Hide Categories" : "Show Categories"}
              </li>
            </>
          </ul>
        </div>

        {/* Product grid */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-primary"
          />

          {/* Display filtered products */}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md shadow-md overflow-hidden"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product details */}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md shadow-md overflow-hidden"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt="productImage"
                  className="w-full h-auto max-w-[200px] max-h-[200px] object-cover"
                />
                <div className="absolute top-0 left-0 p-2">
                  <span className="bg-primary text-white py-1 px-2 rounded-md text-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between bg-gray-300">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 font-bold">{product.name}</p>
                </div>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="bg-gray-300">
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                  <Button
                    text={"Add to cart"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the parent div click event from being triggered
                      // Implement logic to add the product to the cart
                      console.log("Product added to cart:", product.id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
