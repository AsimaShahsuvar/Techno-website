import { useEffect } from "react";
import Img1 from "../../../assets/Terms/Future.jpg";

import SingleBanner from "../../Banners/SingleBanner";

// const PrivacyData = [
//   {
//     id: 1,
//     img: Img1,
//   },
// ];
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <div className="w-full flex flex-col">
      <SingleBanner heading="Privacy Policy" bannerimage={Img1} />
      <div className="flex flex-col justify-center w-4/5 self-center p-[40px]">
        <h3 className="text-4xl font-medium text-gray-500 mb-[10px] p-0 tracking-normal flex justify-between text-center">
          Terms of Use
          <p className="text-2xl">Last updated April , 2024</p>
        </h3>
        <p className="text-lg text-gray-400">Welcome to <span className="text-secondary">GALACTECH</span></p>
        <p className="text-lg text-gray-400">
          GALACTECH MOBILE LIMITED and its global affiliates (global affiliates
          are companies related to GALACTECH MOBILE LIMITED by common ownership
          or control, collectively referred to as "GALACTECH", "we", "us",
          "our") fully respect your privacy and will do our utmost to protect
          the security of your personal information. We may collect, use or
          otherwise process your personal information based on your consent or
          in accordance with the relevant provisions of applicable laws and
          regulations during your use of GALACTECH Software or Service. This
          Privacy Policy (hereinafter referred to as "Policy") is meant to help
          you understand how we collect, use, disclose, process and protect your
          personal information with regard to your use of GALACTECH products or
          services, your rights regarding the personal information provided to
          us, and how we safeguard your rights. This Policy applies to all
          GALACTECH devices, websites, and online applications that refer to or
          link to this Policy (collectively, our "Services") regardless of
          whether you use a computer, mobile phone, tablet, or TV to access our
          Services. In consideration of the many products and services of
          GALACTECH, this Policy may not cover all scenarios of collecting and
          using personal information. We may supplement it through the privacy
          policy of specific products or services or otherwise notify you when
          we collect your information. For example, depending on the type of
          GALACTECH products or services you use and the country where you are
          located, the way we collect and use your personal information may
          differ for different products and services. A specific privacy policy
          may apply to a particular GALACTECH product or Service with additional
          privacy information collected therein. Any part not covered by such
          specific privacy policy of the particular GALACTECH product or service
          shall be subject to the content of this Policy.
        </p>
        <p className="text-lg text-gray-400">1. Acceptance of this Agreement</p>
        <p className="text-lg text-gray-400">
          1.1 By downloading, installing, clicking on the "register" or "agree"
          button and/or accessing or using the GALACTECH Device, Software or
          Service, you agree to comply with and be bound by this Agreement. If
          you do not agree to this Agreement, you may not access or use
          GALACTECH Software or Service.
        </p>
        <p className="text-lg text-gray-400">
          1.2 The GALACTECH Software and Service are not intended for or
          directed to children under the age of 14 (or the age considered as a
          "child" in the jurisdiction where you use GALACTECH Software or
          Services). If you are under the age of 14, you may not use the
          GALACTECH Software or Service or provide GALACTECH with any personally
          identifiable information. If you are 14 or older but under the age of
          18 (or under the age of majority in the jurisdiction where you use
          GALACTECH Software and Service) which be considered as a "Minor", you
          represent that you have reviewed this Agreement with your parent or
          legal guardian and that you and your parent or guardian understand and
          consent to this Agreement. If you are a parent or guardian permitting
          a Minor to use the GALACTECH Services, you agree to: (i) supervise the
          Minor’s use of the GALACTECH Software and Service; (ii) assume all
          risks associated with the Minor’s use of GALACTECH Software and
          Service, including the transmission of content to and from third
          parties via the Internet; (iii) assume any liability resulting from
          the Minor’s use of GALACTECH Software and Service; (iv) ensure the
          accuracy and truthfulness of all information submitted by the Minor;
          and (v) assume responsibility and are bound by this Agreement for the
          Minor’s access and use of the GALACTECH Software and Service.
        </p>
        <h3 className="text-2xl font-medium text-gray-500 mb-[10px] p-0 tracking-normal ">
          How to Contact Us
        </h3>
        <p className="text-lg text-gray-400">
          If you have any comments, questions or concerns with respect to our
          Privacy Policy or practices of personal information protection, please
          contact us via: <span className="text-gray-600 cursor-pointer">Email: privacy@mail.com </span>(Note: This mailbox is
          used for receiving messages related to our Privacy Policy or our
          protection of personal information only)
        </p>
      </div>
    </div>
  );
};

export default Privacy;
