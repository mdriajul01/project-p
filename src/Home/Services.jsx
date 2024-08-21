import * as React from "react";
// import { Lottie } from "lottie-react";
import quality from "../../public/payment (4).json";
import dalivary from "../../public/dalivary.json";
import payment from "../../public/payment (3).json";
import service from "../../public/payment (2).json";
import order from "../../public/payment (1).json";
import Lottie from "lottie-react";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-5">Services</h1>

      <div
        id="service"
        className="text-center font-bold flex gap-14 justify-center "
      >
        <button className="text-center font-bold flex gap-10 justify-center bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl hover:border-x-slate-500">
          <div className="bg-[#928c3221] rounded-2xl ">
            <h1>Best Services</h1>
            <Lottie animationData={quality} className="w-44" />
          </div>
        </button>
        <button className="text-center font-bold flex gap-10 justify-center bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl hover:border-rounded-2xl">
          <div className="bg-[#928c3221] rounded-2xl">
            <h1>Fast Delivery</h1>
            <Lottie animationData={dalivary} className="w-44" />
          </div>
        </button>
        <button className="text-center font-bold flex gap-10 justify-center bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl hover:border-rounded-2xl">
          <div className="bg-[#928c3221] rounded-2xl">
            <h1>Best Quality</h1>
            <Lottie animationData={payment} className="w-44" />
          </div>
        </button>
        <button className="text-center font-bold flex gap-10 justify-center bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl hover:border-rounded-2xl">
          <div className="bg-[#928c3221] rounded-2xl">
            <h1>Easy Order</h1>
            <Lottie animationData={service} className="w-44" />
          </div>
        </button>
        <button className="text-center font-bold flex gap-10 justify-center bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl hover:border-rounded-2xl">
          <div className="bg-[#928c3221] rounded-2xl">
            <h1>Easy Payment</h1>
            <Lottie animationData={order} loop={true} className="w-44" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Services;
