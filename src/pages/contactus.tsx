import { FunctionComponent, useEffect } from "react";
import Footer from "../components/footer";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <div className="h-full lg:grid lg:grid-flow-col lg:grid-cols-2 flex flex-col bg-primary bg-opacity-10">
        <img
          src={
            "https://res.cloudinary.com/mentor-square/image/upload/v1648997378/home_curve_side_1_dkfxko.svg"
          }
          alt=""
          className="absolute top-3"
        />
        <img
          className="right-0 absolute  top-10"
          src={
            "https://res.cloudinary.com/mentor-square/image/upload/v1648997379/home_curve_side_2_ougaku.svg"
          }
          alt=""
        />
        <img
          src={
            "https://res.cloudinary.com/mentor-square/image/upload/v1648997380/map_e1tlhc.svg"
          }
          alt=""
        />

        <div className="col-span-6 my-auto mx-auto text-center">
          <h1 className="text-4xl scale-90 md:scale-100 text-primary font-bold">
            Sugantham Creations
          </h1>
          <h2 className="mt-3">
            <span className="text-3xl font-bold text-[#FF9933]">in</span>
            <span className="text-3xl font-bold text-[#0101bd]">di</span>
            <span className="text-3xl font-bold text-[#0a8901]">a.</span>
          </h2>
          <div className="mt-10 w-10/12 text-gray-600">
            we are waiting for your message, feel free to contact us any time
          </div>
          <div className="flex w-full mt-12 p-5 justify-center">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=919384534849&text&app_absent=0"
              className="w-1/3 ml-2 bg-primary py-3 px-2 text-white text-center  border-white rounded-md hover:scale-105 hover:delay-100"
            >
              watts App
            </a>
            <a
              href="mailto: info@suganthamcreations.in"
              className="w-1/3 ml-2 bg-primary py-3 px-2 text-white text-center  border-white rounded-md hover:scale-105 hover:delay-100"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
