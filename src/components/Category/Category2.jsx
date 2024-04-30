import Image1 from "../../assets/category/gaming.webp";
import Image2 from "../../assets/category/vr.webp";
import Image3 from "../../assets/category/speaker.webp";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";

const Category2 = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br 
            from-slate-500 to-gray/100 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textcolor={"text-white"}
                />
              </div>
            </div>
            <img
              onClick={() => navigate("/productinfo")}
              src={Image1}
              alt="#"
              className="w-[250px] absolute top-1/2 -translate-y-1/2 bottom-0 right-12"
            />
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-slate-500 to-brandViolet/90 
            text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textcolor={"text-white"}
                />
              </div>
            </div>
            <img
              onClick={() => navigate("/productinfo")}
              src={Image2}
              alt="#"
              className="w-[250px] absolute top-1/2 -translate-y-1/2 bottom-0 right-12"
            />
          </div>
          {/* third col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-slate-500 
            to-brandPink/90 text-white rounded-3xl relative 
            h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textcolor={"text-white"}
                />
              </div>
            </div>
            <img
              onClick={() => navigate("/productinfo")}
              src={Image3}
              alt="#"
              className="w-[200px] absolute top-1/2 -translate-y-1/2 bottom-0 right-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
