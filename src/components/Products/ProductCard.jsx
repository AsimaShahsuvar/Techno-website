import { useEffect, useState } from "react";
import Button from "../Shared/Button";
import { supabase } from "../../components/supabase/SupabaseConfig";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        throw error;
      }
      // Adding a new property 'showDescription' to each product
      const productsWithDescription = data.map((product) => ({
        ...product,
        showDescription: false,
      }));
      setProducts(productsWithDescription);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const toggleDescription = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, showDescription: !product.showDescription };
        }
        return product;
      });
    });
  };

  const addToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log("Product added to cart:", productId);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-md shadow-md overflow-hidden"
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
              <div className="ml-auto">
                {product.showDescription ? (
                  <IoMdClose
                    className="text-gray-600 cursor-pointer"
                    onClick={() => toggleDescription(product.id)}
                  />
                ) : (
                  <FaAngleDown
                    className="text-gray-600 cursor-pointer"
                    onClick={() => toggleDescription(product.id)}
                  />
                )}
              </div>
            </div>
            {/* Conditionally render description based on state */}
            {product.showDescription && (
              <p className="text-gray-600 mt-2">{product.description}</p>
            )}
            <div className="flex justify-between items-center mt-2 bg-gray-300">
              <div className="bg-gray-300">
                <p className="text-gray-600">${product.price}</p>
              </div>
              {/* Conditionally render icon based on state */}
              <Button
                text={"Add to cart"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
                onClick={() => addToCart(product.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
