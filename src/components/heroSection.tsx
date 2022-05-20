import { FunctionComponent } from "react";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = ({}) => {
  return (
    <div className="h-full lg:grid lg:grid-flow-col lg:grid-cols-2 flex flex-col bg-white bg-opacity-10">
      <img
        src={
          "https://res.cloudinary.com/mentor-square/image/upload/v1653027083/Young_people_walking_in_front_of_college_or_university_rirqjd.jpg"
        }
        style={{
          scale: "90%",
        }}
        className="col-span-6 my-auto"
        alt=""
      />
      <div className="col-span-6 my-auto text-center">
        <h1 className="text-4xl text-primary font-bold">
          Kumaraguru institute of technology
        </h1>
        <h2 className="mt-3">
          <span className="text-3xl font-bold text-[#FF9933]">charcter</span>{" "}
          <span className="text-3xl font-bold text-[#0101bd]">is</span>{" "}
          <span className="text-3xl font-bold text-[#0a8901]">life</span>{" "}
        </h2>
        <div className="mt-10 w-11/12 text-center text-gray-600">
          KCT is a organization with experienced management fantastic student
          lifestyle for better future.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
