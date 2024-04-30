import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// product data
const productData = [
  {
    id: 1,
    img:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70&crop=false",
    name: "ASUS TUF Gaming F15",
    description: "AI Powered Gaming Intel Core i5 11th Gen 11260H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/70 TGP) FX506HF-HN076W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 kg)",
    price: 2850,
  },
  {
    id: 2,
    img:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/p/t/g/-original-imagsbw7hzg37hhs.jpeg?q=70&crop=false",
    name: "SAMSUNG Galaxy Watch6 Classic LTE",
    description: "(Silver Strap, 43mm)",
    price: 370,
  },
  {
    id: 3,
    img:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/l/d/-original-imagw4k2fhk7ynz7.jpeg?q=70&crop=false",
    name: "Lenovo IdeaPad Gaming 3 AMD Ryzen 7 Octa Core 6800H",
    description: "(16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) 15ARH7 Gaming Laptop  (15.6 Inch, Onyx Grey, 2.32 Kg, With MS Office)",
    price: 2320,
  },
  {
    id: 4,
    img:
      "https://rukminim2.flixcart.com/image/416/416/kgiaykw0/smart-glass/z/m/w/00-vr-box-sadguru-creationn-original-imafwqm4fnq92bfp.jpeg?q=70&crop=false",
    name: "SADGURU CREATIONN Plespey VR Box",
    description: "(Smart Glasses, White)  (Smart Glasses, black)",
    price: 740,
  },
  {
    id: 5,
    img:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/u/f/k/-original-imagtevgtbtauah7.jpeg?q=70&crop=false",
    name: "boAt Stone 350 Hulk Edition",
    description: "10 W Bluetooth Speaker  (Green Fury, Mono Channel)",
    price: 280,
  },
  {
    id: 6,
    img:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/x/1/g/-original-imagsamebh3vtkwq.jpeg?q=70&crop=false",
    name: "Fire-Boltt Talk 1.39",
    description: "Bluetooth Calling with SpO2, Metal Body & Luxury Design Smartwatch  (Metal Black Strap, 46)",
    price: 530,
  },
  {
    id: 7,
    img:
      "https://rukminim2.flixcart.com/image/416/416/kuyf8nk0/computer/g/z/q/mk1e3hn-a-laptop-apple-original-imag7yzmv57cvg3f.jpeg?q=70&crop=false",
    name: "Apple 2021 Macbook Pro Apple M1 Max",
    description: "(32 GB/1 TB SSD/Mac OS Monterey) MK1H3HN/A  (16.2 inch, Silver, 2,2 kg)",
    price: 3200,
  },
  {
    id: 8,
    img:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/gamingconsole/e/t/l/825-gb-ssd-cfi-1208a-ps5-console-ea-sports-fc-24-bundle-sony-no-original-imagtmgch5xee3bj.jpeg?q=70&crop=false",
    name: "SONY CFI -1208A01R / CFI-1208A ",
    description: "01x 825 GB SSD GB with EA SPORTS FC 24 full game voucher  (White)",
    price: 750,
  },
  {
    id: 9,
    img:
      "https://rukminim2.flixcart.com/image/416/416/l2jcccw0/speaker/t/m/k/-original-imagdv2zjmshecrg.jpeg?q=70&crop=false",
    name: "Apple HomePod Mini",
    description: "with Siri Assistant Smart Speaker  (Space Grey)",
    price: 986,
  },
  {
    id: 10,
    img:
      "https://rukminim2.flixcart.com/image/416/416/l3vxbbk0/headphone/w/q/e/-original-imagewuzhfbtygzw.jpeg?q=70&crop=false",
    name: "boAt Rockerz 510 Super Extra Bass Bluetooth Headset",
    description: "(Furious blue, On the Ear)",
    price: 630,
  },
  {
    id: 11,
    img:
      "https://rukminim2.flixcart.com/image/416/416/l3vxbbk0/headphone/w/q/e/-original-imagewuzhfbtygzw.jpeg?q=70&crop=false",
    name: "boAt Rockerz 510 Super Extra Bass Bluetooth Headset",
    description: "(Furious blue, On the Ear)",
    price: 630,
  },
  {
    id: 12,
    img:
      "https://rukminim2.flixcart.com/image/416/416/l3vxbbk0/headphone/w/q/e/-original-imagewuzhfbtygzw.jpeg?q=70&crop=false",
    name: "boAt Rockerz 510 Super Extra Bass Bluetooth Headset",
    description: "(Furious blue, On the Ear)",
    price: 630,
  },
];



const Shop = () => {
  const navigate = useNavigate();

useEffect(() => {
    axios.get('https://powbzhalrtftuzicqlej.supabase.co/rest/v1/finalpro?select=*',
    {
      headers : {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvd2J6aGFscnRmdHV6aWNxbGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjMzNjgsImV4cCI6MjAxNjAzOTM2OH0.72Bc3NtsSdpnh38WcCeA4eiEbnqdkWh_1PBoZfJEZs4",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvd2J6aGFscnRmdHV6aWNxbGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjMzNjgsImV4cCI6MjAxNjAzOTM2OH0.72Bc3NtsSdpnh38WcCeA4eiEbnqdkWh_1PBoZfJEZs4"
      },
    }
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

    return (data) => {
      console.log(data)
    }
  }, [])

  return (
    <div className="py-8">
      {/* Heading */}
      <div className="">
        <h1 className="text-center mb-5 text-2xl font-semibold">
          All Products
        </h1>
      </div>
      {/* main */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 lg:px-0 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productData.map((item, index) => {
              const { img, name, price } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4">
                  <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      onClick={() => navigate("/productinfo")}
                      className="lg:h-80 h-96 w-full"
                      src={img}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        GALACTECH
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                        {name.substring(0.25)}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                        ${price}
                      </h1>
                      <div className="flex justify-center">
                        <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-6 rounded-full relative z-10">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
