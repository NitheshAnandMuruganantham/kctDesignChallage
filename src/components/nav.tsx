import { FunctionComponent, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white relative shadow-sm w-full h-14 justify-between  flex z-50">
      <div className="w-full md:w-1/4 lg:w-1/4 h-full flex items-center justify-between p-5 font-display text-primary text-xl font-semibold">
        <div>Kumaraguru college of technology</div>
        <button
          onClick={() => setShow(!show)}
          className={` ${
            show ? "bg-red-600" : "bg-primary"
          } rounded-lg flex sm:hidden text-white px-2`}
        >
          {show ? "x" : "☰"}
        </button>
      </div>
      <ul className="w-3/4 hidden  h-full md:flex lg:flex items-center justify-end">
        <li className="mr-5">
          <NavLink
            to="/"
            className={` ${
              loc.pathname === "/" ? "text-primary" : "text-black"
            }  text-xl font-light relative`}
          >
            Home
            {loc.pathname === "/" && (
              <div className="rounded-full bg-teal-300 h-2 translate-x-12 ml-2 -translate-y-9 w-2 absolute" />
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink
            to="/departments"
            className={` ${
              loc.pathname === "/departments" ? "text-primary" : "text-black"
            }  text-xl font-light relative`}
          >
            departments
            {loc.pathname === "/departments" && (
              <div className="rounded-full bg-teal-300 h-2 translate-x-20 ml-2 -translate-y-9 w-2 absolute" />
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <button
            onClick={() => navigate("/login")}
            className="bg-primary border-2 shadow-md  text-white py-1 px-5 m-0.5 rounded-[6px]"
          >
            log in
          </button>
        </li>
      </ul>
      <ul
        className={`w-full bg-white absolute ${
          !show && "hidden"
        } mt-14 sm:hidden h-32 flex flex-col gap-3 items-center justify-end`}
      >
        <li className="mr-5">
          <NavLink
            to="/"
            onClick={() => setShow(!show)}
            className={` ${
              loc.pathname === "/" ? "text-primary" : "text-black"
            }  text-xl font-light relative`}
          >
            Home
            {loc.pathname === "/" && (
              <div className="rounded-full bg-teal-300 h-2 translate-x-12 ml-2 -translate-y-9 w-2 absolute" />
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink
            to="/about"
            onClick={() => setShow(!show)}
            className={` ${
              loc.pathname === "/about" ? "text-primary" : "text-black"
            }  text-xl font-light relative`}
          >
            About us
            {loc.pathname === "/about" && (
              <div className="rounded-full bg-teal-300 h-2 translate-x-20 ml-2 -translate-y-9 w-2 absolute" />
            )}
          </NavLink>
        </li>
        <li className="mr-5">
          <button
            onClick={() => {
              navigate("/contact");
              setShow(!show);
            }}
            className="bg-primary border-2 shadow-md  text-white py-1 px-5 m-0.5 rounded-[6px]"
          >
            contact us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
