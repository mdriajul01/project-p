import React from "react";
import logo from "../../public/image/Restaurant-Logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navber = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-3 justify-around p-3 border-b-2 bg-[#b4b2b24f]">
      <div className="">
        <button to={"../Home/Home.jsx"}>
          <img src={logo} className="w-20 h-16 object-cover" alt="" />
          <h1 className="font-semibold text-[#d89f03]">
            Food<span className="text-[#6f1919]">Circle</span>
          </h1>
        </button>
      </div>
      <div className="my-auto ml-5 ">
        <ul className="flex justify-items-center gap-5 ">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
          >
            <li className="text-lg font-semibold">Home</li>
          </NavLink>
          <NavLink
            to={"/About"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 " : ""
            }
          >
            <li className="text-lg font-semibold">About</li>
          </NavLink>
          <NavLink
            to={"/Menu"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
          >
            <li className="text-lg font-semibold">Menu</li>
          </NavLink>
          <NavLink
            to={"/Services"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
          >
            <li className="text-lg font-semibold">Services</li>
          </NavLink>
          <NavLink
            to={"/Contuct"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
          >
            <li className="text-lg font-semibold">Contuct</li>
          </NavLink>
        </ul>
      </div>
      <div
        onClick={() => navigate("/login")}
        className="my-auto w-fit lg:mx-0 ml-auto "
      >
        <button className="btn text-xs bg-red-500 text-white hover:bg-sky-500 hover:text-base">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navber;
