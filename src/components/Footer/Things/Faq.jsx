import SingleBanner from "../../Banners/SingleBanner";
import Img1 from "../../../assets/Terms/faq.jpg";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faq = [
    {
      id: 1,
      question: " Why do I always fail with eyes-ball unlock?",
      answer:
        "You should note the following essential: 1. When you record eyeprint, be best not to wear glasses; 2. When unlocked, holding the box on the screen is blue; 3. When scanning the eye, keep the phone steady;",
    },
    {
      id: 2,
      question:
        " Is the Type-C interface compatible with the Apple iPhone interface?",
      answer:
        "No. Although both symmetrical design, Apple lightning interface is very special, it only supports Apple device. But Type-C interface will be standard in the future. And a great number of smartphones and computers will be equipped with Type-C interface.",
    },
    {
      id: 3,
      question: "Does your device charge smoothly lately? ",
      answer:
        " Remember to clean up the debris inside the microUSB port also the charging cable, and never charge near water or in excessively hot or humid conditions.",
    },
    {
      id: 4,
      question: "Why the downloaded apps are missing?",
      answer:
        "Go to 'Settings-Storage'. Press 'Unmount SD card'. After the phone finishing unmounting process, press 'Mount SD card'. You'll find that the apps appear again in the Menu~",
    },
    {
      id: 5,
      question: "What is the Difference between 2G and 3G Technology",
      answer:
        "Second Generation (2G) technology was launched in the year 1991 in Finland. It is based on the technology known as global system for mobile communication or in short we can say GSM. This technology enabled various networks to provide services like text messages, picture messages and MMS. In this technology all text messages are digitally encrypted due to which only the intended receiver receives message. These digital signals consume less battery power, so it helps in saving the battery of mobiles.The technologies used in 2G are either TDMA (Time Division Multiple Access) which divides signal into different time slots or CDMA (Code Division Multiple Access) which allocates a special code to each user so as to communicate over a multiplex physical channel.3G technology generally refers to the standard of accessibility and speed of mobile devices. It was first used in Japan in the year 2001. The standards of the technology were set by the International Telecommunication Union (ITU). This technology enables use of various services like GPS (Global Positioning System), mobile television and video conferencing. It not only enables them to be used worldwide, but also provides with better bandwidth and increased speed.This technology is much more flexible as it can support 5 major radio technologies that operate under CDMA, TDMA and FDMA. CDMA accounts for IMT-DS (direct speed), IMT-MC (multi carrier). TDMA holds for IMT-TC (time code), IMT-SC (single carrier). This technology is also comfortable to work with 2G technologies. The main aim of this technology is to allow much better coverage and growth with minimum investment.Figure: Evolution of Mobile system from 2G to 3G Difference between 2G and 3G Technology Cost: The license fee to be paid for 3G network is much higher as compared to 2G networks. The network construction and maintenance of 3G is much costlier than 2G networks. Also from the customers point of view the expenditure for 3G network will be excessively high if they make use of the various applications of 3G. Data Transmission:  The main difference between 2G and 3G networks is seen by the mobile users who download data and browse the Interneton the mobile phones. They find much faster download speeds, faster access to the data and applications in 3G networks as compared to 2G networks. 2G networks are less compatible with the functions of smart phone. The speed of data transmission in 2G network is less than 50,000 bits per sec while in 3G it can be more than 4 million bits per sec.Function: The main function of 2G technology is the transmission of information via voice signals while that of 3G technologies is data transfer via video conferencing, MMS etc.Features: The features like mobile TV, video transfers and GPS systems are the additional features of 3G technology that are not available with 2G technologies.Frequencies: 2G technology uses a broad range of frequencies in both upper and lower bands, under which the transmission depends on conditions such as weather. A drawback of 3G is that it is simply not available in certain regions.Implication: 3G technology offers a high level of security as compared to 2G technology because 3G networks permit validation measures when communicating with other devices.Making Calls: Calls can be made easily on both 2G and 3G networks with no real noticeable differences except that in 3G network video calls can also be made. The transmission of text messages and photos is available in both the networks but 2G networks have data limit and the speed of the data transmission is also very slow as compared to 3G.·Speed:  The downloading and uploading speeds available in 2G technologies are up to 236 Kbps. While in 3G technology the downloading and uploading speeds are up to 21 Mbps and 5.7 Mbps respectively.",
    },
    {
      id: 6,
      question:
        "Could all of the GALACTECH Android phone use T-band’s all function?",
      answer:
        "No. GALACTECH smartphones with Android 6.0 or 7.0 can realize all T-band functions. But Android 5.x phones cannot use remote control camera function.",
    },
    {
      id: 7,
      question: "Why am I always failed when I test to set split screen mode?",
      answer:
        "Because not every app can support split screen mode. If the app can support split screen mode, when you click multitask button, the button will translate from a square to double rectangle. Click the double rectangle or drag the app to the top, we will get the split screen mode.",
    },
    {
      id: 8,
      question:
        "How to take selfie with one hand by using the suspend capture button?",
      answer:
        "Switch to front camera->tap any area in interface->tap again the button showing in the interface to finish one-hand selfie.",
    },
    {
      id: 9,
      question: " How To Fix The Problem of Phone Gets Hot?",
      answer:
        "The biggest concern here is that there could be something physically wrong with the battery, and it is overheating – this in turn can lead to battery drain problems or worse. One way to check for battery problems is to remove it from your phone and place it on a flat surface. If it spins freely when you rotate it (try turning it over as well), the bulge that makes this possible is indicative of a problem that needs to be addressed. It could be a simple matter of buying a replacement battery, but it's worth taking your phone into an authorized repair shop to get it checked out.",
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className=" bg-[#e3edf7] w-full flex flex-col">
      <SingleBanner bannerimage={Img1} />
      <div className="w-60% self-center p-[60px] flex flex-col mt-[20px] mb-0">
        {faq.map((item, index) => {
          return active == item.id ? (
            <div
              key={index}
              className="flex flex-col gap-[10px] p-[20px] bg-white shadow-extra rounded-[10px] mx-[10px] my-0"
            >
              {/* FAQ head */}
              <div
                className="flex items-center justify-between mx-[5px] my-0"              >
                <h1 className="text-[20px] font-medium text-gray-500 p-0 tracking-[1px]">
                  {item.question}
                </h1>
                <IoMdClose
                  className="text-gray-500 w-[20px] h-[20px] cursor-pointer"
                  onClick={() => setActive(0)}
                />
              </div>
              {/* FAQ body */}
              <div className=" text-gray-600 text-[15px]  p-0 tracking-[1px] m-0 font-semibold">
                <p>{item.answer}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[10px] p-[20px] bg-white shadow-extra rounded-[10px] mx-[10px] my-0">
              {/* FAQ head */}
              <div className="flex items-center justify-between mx-[10px] my-0">
                <h1 className="text-[20px] font-medium text-gray-500 p-0 tracking-[1px]">
                  {item.question}
                </h1>
                <FaAngleDown
                  className="text-gray-500 w-[20px] h-[20px] cursor-pointer"
                  onClick={() => setActive(item.id)}
                />
              </div>
            </div>
          );
        })}

        {/* end */}
      </div>
    </div>
  );
};

export default Faq;
