import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import NoPage from "./components/Pages/NoPage/NoPage";
import Shop from "./components/Pages/Shop/Shop";
import Blogs from "./components/Blogs/Blogs";
import Products from "./components/Products/Products";
import Contact from "./components/Footer/Things/Contact";
import About from "./components/Footer/Things/About";
import Faq from "./components/Footer/Things/Faq";
import Privacy from "./components/Footer/Things/Privacy";
import Term from "./components/Footer/Things/Term";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-side",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/term" element={<Term/>} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Footer />
       </Router>
    </div>
  );
};

export default App;
