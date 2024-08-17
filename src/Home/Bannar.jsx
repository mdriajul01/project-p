import React from "react";
import banner from "../../public/image/bannar.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <div className="">
        <img
          src={banner}
          className="w-full lg:h-[600px] md:h-[600px]  h-80 object-cover "
          alt=""
        />
      </div>
      <div className="absolute lg:top-1/3 md:top-1/3 top-5 left-10 text-white">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold my-2 text-center ml-20">
          Welcome To our website{" "}
        </h1>
        <p className="lg:text-base md:text-base text-sm text-center w-2/1 ml-20 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis error
          impedit fugiat eius, quisquam dignissimos cum repellendus ut
          reiciendis a voluptatum velit molestiae maxime in excepturi vero
          tempore dolor eveniet!
        </p>
        
        <div className="flex gap-5 mt-5 justify-center">
          <button className=" btn bg-red-500 hover: text-white border-2 border-red-500 hover:bg-transparent hover:text-red-500 text-xl hover:border-red-500">
            Food Order Now
          </button>
          <button className=" btn bg-amber-600 hover: text-white border-2 border-amber-500 hover:bg-transparent hover:text-amber-500 text-xl hover:border-amber-600">
            {" "}
            Details{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
