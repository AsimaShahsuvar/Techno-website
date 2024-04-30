// import { useState } from "react";

import { useEffect, useRef } from "react";
import Img1 from "../../../assets/blogs/AI-future.jpg"
import SingleBanner from "../../Banners/SingleBanner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  
    return () => {
    }
  }, [])

//   const [data, setData] = useState({ name: "name", email: "email@.com", message: "text" });
const form = useRef()
  const handleSubmit = (e) => {
    e.prevent.default();
    alert("Data sent");
  };

  
//   const handleTextChange = (e) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
  return (
    <>

    <SingleBanner bannerimage={Img1}/>
      {/* <img src={Img1} alt="" /> */}
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit}>

        <div  className="flex flex-col w-[300px] bg-my-image">
          <label 
          className="m-[2px] p-[2px]"
          htmlFor="name">FullName :</label>
          <input
            className="outline-none text-gray-600 cursor-pointer hover:scale-105 duration-300 m-[10px] py-[4px] px-[4px] rounded-[8px]"
            type={"text"}
            name="name"
            // value={data.name}
            autoComplete="off"
            placeholder="Fullname"
            // onChange={handleTextChange}
          />
          <label 
          className="m-[2px] p-[2px]"
          htmlFor="email">Email Adrress :</label>
          <input
            className="outline-none text-gray-600 cursor-pointer hover:scale-105 duration-300 m-[10px] py-[4px] px-[4px] rounded-[8px]"
            type={"email"}
            name="email"
            placeholder="Email"
            // value={data.email}
            // onChange={handleTextChange}
          />
          <label 
          className="m-[2px] p-[2px]"
          htmlFor="message">Text :</label>
          <textarea
            className="outline-none text-gray-600 cursor-pointer hover:scale-105 duration-300 m-[10px] py-[2px] px-[2px] rounded-[8px]"
            type={"message"}
            name="message"
            placeholder="Message"
            // value={data.message}
            // onChange={handleTextChange}
          />
        </div>
        <button 
        type="submit"
        className="m-[10px] cursor-pointer hover:scale-105 duration-300 py-2 px-8 bg-primary rounded-[10px]">
          Send
        </button>
      </form>

    </>
  );
};

export default Contact;
