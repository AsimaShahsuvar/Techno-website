import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

const ProductsData = [
  {
    id: 1,
    // img: Img1,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    // img: Img2,
    title: "Boat HeadPhone",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    // img: Img3,
    title: "Boat HeadPhone",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    // img: Img4,
    title: "Boat HeadPhone",
    price: "520",
    aosDelay: "600",
  },
];


const ProductsData2 = [
  {
    id: 1,
    // img: Img1,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    // img: Img2,
    title: "Boat HeadPhone",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    // img: Img3,
    title: "Boat HeadPhone",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    // img: Img4,
    title: "Boat HeadPhone",
    price: "520",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body section */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
