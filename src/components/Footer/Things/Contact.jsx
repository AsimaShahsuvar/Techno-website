import { useEffect, useRef } from "react";
import Img1 from "../../../assets/blogs/AI-techno.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      // Cleanup if needed
    };
  }, []);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data sent");
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen relative">
      <img src={Img1} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto py-[10px] bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
        <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col">
            <label className="mb-2 text-white" htmlFor="name">Full Name:</label>
            <input
              className="mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Full Name"
            />
            <label className="mb-2 text-white" htmlFor="email">Email Address:</label>
            <input
              className="mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <label className="mb-2 text-white" htmlFor="message">Message:</label>
            <textarea
              className="mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              type="message"
              name="message"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
