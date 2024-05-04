import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/SupabaseConfig";
import Img1 from "../../assets/login/signup.jpg"

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  

 async function handleSubmit (e) {
    e.preventDefault();
    try {
        const {data, error} = await supabase.auth.signUp(
            { email: formData.email ,
             password: formData.password,
             options: {
                 data: {
                     full_name: formData.fullname,
                 }
             }
         }
         )
         alert("Check your email for verification link")
    } catch (error) {
        alert(error )
    }
    console.log(formData);
  }

  return (
    <div className="container mx-auto h-screen flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${Img1})` }}>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white light:bg-blue-[#4f44ff] shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <h1 className="flex justify-center items-center font-bold text-gray-700 m-2 p-2 text-[20px]">Sign Up</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
              Fullname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Fullname"
              name="fullname"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
           <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
            <Link
              to="/signin"
              className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-primary-dark py-2"
            >
              Already have an account? <span className="text-primary m-2">Sign In</span>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
