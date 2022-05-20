import { Box } from "@mui/material";
import { FunctionComponent, RefObject } from "react";

interface TimeLineProps {}

const TimeLine: FunctionComponent<TimeLineProps> = ({}) => {
  return (
    <>
      <div className="-z-20 lg:w-full md:w-full w-[80%] mx-auto md:text-left text-center">
        <div className="outer">
          <div className="card p-3 md:p-0">
            <div className="info">
              <h3 className="title font-bold mt-3"> fashion club</h3>
              <div className="mt-2 font-bold">
                {""}
                <div className="mt-14 md:grid md:grid-cols-12 md:grid-flow-col">
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      <span className="text-primary my-10 text-3xl font-semibold">
                        fashion club
                      </span>{" "}
                      giving life a style.
                    </div>
                  </div>
                  <img
                    src={
                      "https://res.cloudinary.com/mentor-square/image/upload/v1648997378/1_eor8fm.png"
                    }
                    alt=""
                    className="aspect-[738/511] my-5 scale-125 col-span-7"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 md:p-0">
            <div className="info">
              <h3 className="title font-bold mt-3">technology club</h3>
              <div className="mt-2 font-bold">
                <div className="text-center md:text-right font-bold"> </div>
                <div className="mt-14  lg:grid lg:grid-cols-12 lg:grid-flow-col">
                  <img
                    src={
                      "https://res.cloudinary.com/mentor-square/image/upload/v1648997376/2_zkop2n.png"
                    }
                    alt=""
                    className="aspect-[738/511] scale-125 col-span-7"
                  />
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      this wouldn't be pobbile without{" "}
                      <span className="text-primary my-10 text-3xl font-semibold">
                        tech !
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title mt-3">environment club.</h3>
              <div className="mt-2 font-bold">
                <div className="mt-14  lg:grid lg:grid-cols-12 lg:grid-flow-col">
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      save nature for{" "}
                      <span className="text-primary my-10 text-3xl font-semibold">
                        better future.
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/mentor-square/image/upload/v1653029835/3736569_lcakoa.jpg"
                    alt=""
                    className="aspect-auto scale-80 lg:-translate-y-28 -translate-y-4 col-span-7"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title font-bold mt-3">art club</h3>
              <div className="mt-2 font-bold">
                <div className="text-center md:text-right font-bold"> </div>
                <div className="mt-14  lg:grid lg:grid-cols-12 lg:grid-flow-col">
                  <img
                    src="https://res.cloudinary.com/mentor-square/image/upload/v1653031108/artclub_hiqqna.jpg"
                    alt=""
                    className="aspect-[738/511] scale-125 col-span-7"
                  />
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      giving your life{" "}
                      <span className="text-primary my-10 text-3xl font-semibold">
                        colors !
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
