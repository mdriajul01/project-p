import React from "react";
import bgimg from "../../../public/image/bgimg.png";
import logo from "../../../public/image/Restaurant-Logo.png";
const Footer = () => {
  return (
    <div className="bg-black relative  lg:h-[800px] h-full mt-20">
      <div className=" absolute h-full opacity-40">
        <img src={bgimg} className="h-full" alt="" />
      </div>
      <div className=" flex flex-wrap justify-around  w-full">
        <div className=" relative w-full md:w-1/2 text-white mt-16">
          <h1 className="text-5xl md:text-2xl font-semibold ml-30">
            Contact Us
          </h1>{" "}
          <p className="text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            suscipit inventore, dolor temporibus{" "}
          </p>
          <p className="text-base">
            <b>Email: </b>riajul@gmail.com
          </p>
        </div>
        <div className="bg-white border-2 rounded-2xl border-black space-y-3 py-10 lg:-mt-10 md:-mt-10 relative lg:w-1/3 md:w-1/2 w-full my-3">
          <h1 className="text-3xl text-center">Have a Question??</h1>
          <div className=" w-72 mx-auto">
            <label htmlFor="" className="text-lg font-semibold">
              Name<span className="text-red-500">*</span>
            </label>{" "}
            <br />
            <input
              type="text"
              className="border-2 p-1 rounded-xl border-black"
            />
          </div>
          <div className=" w-72 mx-auto">
            <label htmlFor="" className="text-lg font-semibold">
              Email<span className="text-red-500">*</span>
            </label>{" "}
            <br />
            <input
              type="text"
              className="border-2 p-1 rounded-xl border-black"
            />
          </div>
          <div className=" w-72 mx-auto">
            <label htmlFor="" className="text-lg font-semibold">
              Comments<span className="text-red-500">*</span>
            </label>{" "}
            <br />
            <textarea
              name=""
              className="border-2 p-1 rounded-xl border-black w-72 h-20"
              id=""
            ></textarea>
          </div>
          <button className="btn bg-red-500 text-white w-2/3 mx-auto flex justify-center my-10 hover:bg-sky-500 text-xl">
            Submit
          </button>
        </div>
      </div>
      <div className="relative ">
        <footer className="footer bg-base-300 lg:w-2/2 md:w-2/3 w-full mx-auto mt-5 text-base-content p-10">
          <aside>
            <img src={logo} className="h-20" alt="" />
            <h1 className="text-2xl">FoodCircle.</h1>
            <br />
            <p>Providing reliable tech since 1992</p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
