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
              <h3 className="title font-bold mt-3">Computer science</h3>
              <div className="mt-2 font-bold">
                {""}
                <div className="mt-14 md:grid md:grid-cols-12 md:grid-flow-col">
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      <span className="text-primary my-10 text-3xl font-semibold">
                        computer science is
                      </span>{" "}
                      giving humans super power !.
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/mentor-square/image/upload/v1653031626/18383_ibenxi.jpg"
                    alt=""
                    className="aspect-auto h-[500px] my-5  scale-125 col-span-7"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 md:p-0">
            <div className="info">
              <h3 className="title font-bold mt-3">mechanical engineering</h3>
              <div className="mt-2 font-bold">
                <div className="text-center md:text-right font-bold"> </div>
                <div className="mt-14  lg:grid lg:grid-cols-12 lg:grid-flow-col">
                  <img
                    src="https://res.cloudinary.com/mentor-square/image/upload/v1653031615/40796_lchxuo.jpg"
                    alt=""
                    className="aspect-auto h-[500px] scale-125 col-span-7"
                  />
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      this wouldn't be pobbile without{" "}
                      <span className="text-primary my-10 text-3xl font-semibold">
                        mechanical engineers !
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title mt-3">civil engineering</h3>
              <div className="mt-2 font-bold">
                <div className="mt-14  lg:grid lg:grid-cols-12 lg:grid-flow-col">
                  <div className="col-span-5">
                    <div className="my-10 text-3xl font-semibold text-black">
                      a humans need{" "}
                      <span className="text-primary my-10 text-3xl font-semibold">
                        a shelter.
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://res-console.cloudinary.com/mentor-square/thumbnails/transform/v1/image/upload//v1653032372/Q2l2aWxfZW5naW5lZXJfZWFtcnEw/drilldown"
                    alt=""
                    className="aspect-auto scale-80 lg:-translate-y-28 -translate-y-4 col-span-7"
                  />
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
