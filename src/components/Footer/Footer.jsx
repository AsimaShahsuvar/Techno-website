import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/",
//   },
//   {
//     title: "Contact",
//     link: "/contact",
//   },
//   {
//     title: "Blog",
//     link: "/blog",
//   },
// ];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <Link
              to={"/"}
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              GalacTech
            </Link>

            <p className="text-gray-600 dark:text-white/70 lg:pr-2 pt-3">
              Guided by its brand essence of “Stop At Nothing”, GALACTECH is
              committed to unlocking the best and newest technologies for
              forward-looking individuals.
            </p>
          </div>
          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">About Us</h1>
              <ul className="space-y-3">
                {/* {FooterLinks.map((data, index) => ( */}
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    About Us
                    {/* {data.title} */}
                  </Link>
                </li>
                <li
                // key={index}
                >
                  <Link
                    to={"/"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    Home
                    {/* {data.title} */}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    Contact
                    {/* {data.title} */}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/blogs"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    Blog
                    {/* {data.title} */}
                  </Link>
                </li>

                {/* ))} */}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Support</h1>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={"/faq"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/privacy"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/term"}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>7040 Avenida Encinas</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+99455667777777</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
