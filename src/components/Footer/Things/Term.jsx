import { useEffect } from "react";
import Img1 from "../../../assets/Privacy/Techno.jpg";
import SingleBanner from "../../Banners/SingleBanner";

const Term = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="w-full flex flex-col">
      <SingleBanner heading="Terms & Conditions" bannerimage={Img1} />
      <div className="flex flex-col justify-center w-4/5 self-center p-[40px]">
        <h3 className="text-4xl font-medium text-gray-500 mb-[10px] p-0 tracking-normal flex justify-between text-center">
          Terms of Use
          <p className="text-lg text-gray-400">Last updated April , 2024</p>
        </h3>
        <p className="text-lg text-gray-400">Welcome to <span className="text-secondary">GALACTECH</span></p>
        <p className="text-lg text-gray-400">
          GALACTECH MOBILE LIMITED and its global affiliates (hereinafter
          referred to as "GALACTECH" , "we", "us", "our") hereby remind you to
          read and understand these Terms of Use (hereinafter referred to as
          "this Agreement"). This is a legal agreement between you and GALACTECH
          which governs your use of GALACTECH Software, Services and all the
          features and functions therein and any other related website or online
          offering whether accessed via a computer or a mobile device or through
          any other technology, manner or means. For proper use of GALACTECH
          system and software (hereinafter collectively referred to as the
          "Software") and GALACTECH services (hereinafter collectively referred
          to as the "Service"), please read carefully and fully understand the
          terms and conditions herein before you use your GALACTECH device or
          download a Software mentioned in this Agreement, especially the
          Disclaimers, Limitation of Liabilities, Privacy Policy, Usage Rules,
          Applicable Law, Dispute Resolution and other sections which may have
          been highlighted in bold or in capital letters for your attention.
        </p>
        <p className="text-lg text-gray-400">1. Acceptance of this Agreement</p>
        <p className="text-lg text-gray-400">
          1.1 By downloading, installing, clicking on the "register" or "agree"
          button and/or accessing or using the GALACTECH Device, Software or
          Service, you agree to comply with and be bound by this Agreement. If
          you do not agree to this Agreement, you may not access or use GALACTECH
          Software or Service.
        </p>
        <p className="text-lg text-gray-400">
          1.2 The GALACTECH Software and Service are not intended for or directed to
          children under the age of 14 (or the age considered as a "child" in
          the jurisdiction where you use GALACTECH Software or Services). If you are
          under the age of 14, you may not use the GALACTECH Software or Service or
          provide GALACTECH with any personally identifiable information. If you are
          14 or older but under the age of 18 (or under the age of majority in
          the jurisdiction where you use GALACTECH Software and Service) which be
          considered as a "Minor", you represent that you have reviewed this
          Agreement with your parent or legal guardian and that you and your
          parent or guardian understand and consent to this Agreement. If you
          are a parent or guardian permitting a Minor to use the GALACTECH Services,
          you agree to: (i) supervise the Minor’s use of the GALACTECH Software and
          Service; (ii) assume all risks associated with the Minor’s use of
          GALACTECH Software and Service, including the transmission of content to
          and from third parties via the Internet; (iii) assume any liability
          resulting from the Minor’s use of GALACTECH Software and Service; (iv)
          ensure the accuracy and truthfulness of all information submitted by
          the Minor; and (v) assume responsibility and are bound by this
          Agreement for the Minor’s access and use of the GALACTECH Software and
          Service.
        </p>
       
      </div>
    </div>
  );
};

export default Term;
