import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/category/earphone.webp";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Category from "../Category/Category";

const ProductInfo = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      img: Image1,
      description:
        "Dual beamforming microphone Dual optical sensors Motion-detecting accelerometer Speech-detecting accelerometer",
      price: "250 $",
    },
    {
      id: 2,
      img: Image2,
      description:
        "Dual beamforming microphone Dual optical sensors Motion-detecting accelerometer Speech-detecting accelerometer",
      price: "250 $",
    },
    {
      id: 3,
      img: Image3,
      description:
        "Dual beamforming microphone Dual optical sensors Motion-detecting accelerometer Speech-detecting accelerometer",
      price: "250 $",
    },
    {
      id: 4,
      img: "gaming",
      description:
        "Dual beamforming microphone Dual optical sensors Motion-detecting accelerometer Speech-detecting accelerometer",
      price: "250 $",
    },
    {
      id: 5,
      img: "VR",
      description:
        "Dual beamforming microphone Dual optical sensors Motion-detecting accelerometer Speech-detecting accelerometer",
      price: "250 $",
    },
    {
      id: 6,
      img: "Homepod",
      description:
        "Dual beamforming microphone Dual optical sensors Motion-detecting accelerometer Speech-detecting accelerometer",
      price: "250 $",
    },
  ];

 

  return (
    <div>
     <Category data={data}/>
    </div>
  );
};

export default ProductInfo;
