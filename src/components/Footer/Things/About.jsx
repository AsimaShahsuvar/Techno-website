import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  
   
  }, [])
  return (
    <>
      <div className="m-[10px] py-2 px-8 ">
        <h1 className="flex items-center justify-center text-3xl">About us</h1>
        <p className="flex items-center justify-center py-2 px-8">
          GALACTECH is an innovative technology brand with operations in over 70
          countries and regions across five continents.
        </p>
        <p className="flex items-center justify-center py-2 px-8">
          Since its launch, GALACTECH has been revolutionizing the digital
          experience in emerging global markets, relentlessly pushing for the
          perfect integration of contemporary, aesthetic design with the latest
          technologies.
        </p>
        <p className="flex items-center justify-center py-2 px-8">
          Today, GALACTECH has developed into a recognized leader in its target
          markets, delivering state-of-the-art innovation through a wide range
          of smartphones, smart wearables, laptops and tablets, HiOS operating
          systems and smart home products.
        </p>
        <p className="flex items-center justify-center py-2 px-8">
          Guided by its brand essence of “Stop At Nothing”, GALACTECH is
          committed to unlocking the best and newest technologies for
          forward-looking individuals.
        </p>
        <p className="flex items-center justify-center py-2 px-8">
          By creating stylish, intelligent products, GALACTECH inspires
          consumers worldwide to never stop pursuing their best selves and their
          best futures.
        </p>
        <Link
          to={"/contact"}
          className="flex items-center justify-center text-2xl m-[10px] cursor-pointer hover:scale-105 duration-300 py-2 px-8 text-primary"
        >
          Contact Us
        </Link>
      </div>

      <div className="antialiased justify-center items-center py-4 bg-white">
        <h1 className="flex items-center justify-center m-[10px]  py-2 px-8 text-5xl text-black">
          Brand Journey
        </h1>
        <div className="h-screen w-full flex justify-center items-center  bg-white">
          <div className=" max-w-7xl mx-auto w-full grid grid-cols-9 ">
            {/* <--Stack 1--> */}
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-primary rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium ">Title</h1>
                <small>2018-2019</small>
                <p className="text-black sm:text-sm text-xs ">
                  The success of every websites depends on search engine
                  optimisation and digital marketing strategy. If you are on
                  first page of all major search ...
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-primary"></div>
              <div className="absolute w-6 h-6 rounded-full bg-primary z-10 text-white text-center">
                1
              </div>
            </div>
            <div className="col-span-4 w-full h-full "></div>

            {/* <--Stack 2--> */}
            <div className="col-span-4 w-full h-full "></div>

            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-brandViolet"></div>
              <div className="absolute w-6 h-6 rounded-full bg-brandViolet z-10 text-white text-center">
                2
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-brandViolet rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium ">Title</h1>
                <small>2018-2019</small>
                <p className="text-black sm:text-sm text-xs ">
                  The success of every websites depends on search engine
                  optimisation and digital marketing strategy. If you are on
                  first page of all major search ...
                </p>
              </div>
            </div>

            {/* <--Stack 3--> */}
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-blue-300 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium ">Title</h1>
                <small>2018-2019</small>
                <p className="text-black sm:text-sm text-xs ">
                  The success of every websites depends on search engine
                  optimisation and digital marketing strategy. If you are on
                  first page of all major search ...
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-blue-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-blue-300 z-10 text-white text-center">
                3
              </div>
            </div>
            <div className="col-span-4 w-full h-full "></div>

            {/* <--Stack 4--> */}
            <div className="col-span-4 w-full h-full "></div>

            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-violet-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-violet-300 z-10 text-white text-center">
                4
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-violet-300 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium ">Title</h1>
                <small>2018-2019</small>
                <p className="text-black sm:text-sm text-xs ">
                  The success of every websites depends on search engine
                  optimisation and digital marketing strategy. If you are on
                  first page of all major search ...
                </p>
              </div>
            </div>

            {/* <--Stack 5--> */}
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-blue-200 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium ">Title</h1>
                <small>2018-2019</small>
                <p className="text-black sm:text-sm text-xs ">
                  The success of every websites depends on search engine
                  optimisation and digital marketing strategy. If you are on
                  first page of all major search ...
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-blue-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-blue-200 z-10 text-white text-center">
                5
              </div>
            </div>
            <div className="col-span-4 w-full h-full "></div>

            {/* <--Stack 6--> */}
            <div className="col-span-4 w-full h-full "></div>

            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-violet-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-violet-200 z-10 text-white text-center">
                6
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-violet-200 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium ">Title</h1>
                <small>2018-2019</small>
                <p className="text-black sm:text-sm text-xs ">
                  The success of every websites depends on search engine
                  optimisation and digital marketing strategy. If you are on
                  first page of all major search ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
