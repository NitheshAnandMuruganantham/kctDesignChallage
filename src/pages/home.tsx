import { FunctionComponent, useEffect, useRef } from "react";
import CertificationSection from "../components/certificationSection";
import HeroSection from "../components/heroSection";
import TimeLine from "../components/timeLine";
import Glary from "../components/galary";
import Deaprtments from "../components/departments";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const nav = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <HeroSection />
      <CertificationSection />
      <div>
        <h1 className="text-center font-bold text-4xl mt-10">depatments</h1>
      </div>
      <Deaprtments />
      <div>
        <h1 className="text-center font-bold text-4xl mt-10">clubs</h1>
      </div>
      <TimeLine />
      <div className="font-semibold text-center m-4 mt-16 text-3xl">
        our memories
      </div>
      <Glary />
      <div className="my-32 py-10 flex">
        <button
          onClick={() => nav("/events")}
          className="mx-auto w-1/4 bg-primary py-3 px-2 text-white  border-white rounded-md hover:scale-105 hover:delay-100"
        >
          Envents
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
