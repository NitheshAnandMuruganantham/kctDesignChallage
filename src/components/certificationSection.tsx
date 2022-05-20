import { FunctionComponent } from "react";
const CertificationSection: FunctionComponent<{}> = () => {
  return (
    <div className="md:flex border-t-8 shadow-md px-5 py-3  justify-around">
      <img
        src="https://res.cloudinary.com/mentor-square/image/upload/v1653029504/fashion_logo2-02_pyybrl.png"
        alt=""
        style={{
          width: "300px",
          height: "200px",
        }}
        className="h-auto mx-auto md:p-0 p-2 w-auto aspect-auto"
      />
      <img
        style={{
          width: "200px",
          height: "200px",
        }}
        src="https://res.cloudinary.com/mentor-square/image/upload/v1653028584/ART-CLUB_mwrupi.jpg"
        className="h-auto w-auto mx-auto md:p-0 p-2 aspect-auto"
        alt=""
      />
      <img
        style={{
          width: "200px",
          height: "200px",
        }}
        src="https://res.cloudinary.com/mentor-square/image/upload/v1653028932/938e91ea73b20ed0c3aca52a3b1815a9_ptj1ho.png"
        alt=""
        className="h-auto w-auto mx-auto md:p-0 p-2 aspect-auto"
      />
      <img
        style={{
          width: "250px",
          height: "200px",
        }}
        src="https://res.cloudinary.com/mentor-square/image/upload/v1653028649/enviro_20logo_qlcbj3.jpg"
        alt=""
        className="h-auto w-auto mx-auto md:p-0 p-2 aspect-auto"
      />
    </div>
  );
};

export default CertificationSection;
