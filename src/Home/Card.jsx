import React from 'react';

import "./Card.css"
import { GiEternalLove } from "react-icons/gi";
import foods from '../../public/image/foods.json'
const Card = () => {
  console.log(foods);
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center my-4 font-bold mb-10 ">
        Hungry? <span className="text-[#701919]">Order & Eat -</span>{" "}
      </h1>
      <div className="flex flex-wrap justify-center rounded-xl gap-10">
        {foods?.slice(0, 6).map((e, idx) => (
          <div
            className="border-2 relative w-fit p-2 hover:bg-[#70191915] rounded-xl shadow-xl shadow-[#d19a03a8] "
            key={idx}
          >
            <img
              className="w-56 h-52 object-cover rounded-xl "
              src={e.photo}
              alt=""
            />
            <GiEternalLove className="text-3xl text-[#ff0101] top-4 right-3 absolute rounded-full" />
            <h1 className="font-semibold">{e.name}</h1>
            <h1>{e.catagory}</h1>
            <p className="text-[#660f0f]">{e.price}</p>
            <button className=" btn bg-amber-600 hover: text-white border-2 border-amber-500 hover:bg-transparent hover:text-amber-500 text-xl hover:border-amber-600 mx-auto w-fit flex justify-center my-5 ">
              {" "}
              Order{" "}
            </button>
          </div>
        ))}
      </div>
      <button className=" btn mx-auto w-fit  flex justify-center bg-red-500 hover: text-white border-2 border-red-500 hover:bg-transparent hover:text-red-500 text-xl hover:border-red-500 my-8">
        View Full Menu
      </button>
      <button className=" btn mx-auto w-fit  flex justify-center bg-red-500 hover: text-white border-2 border-red-500 hover:bg-transparent hover:text-red-500 text-xl hover:border-red-500 my-8">
        View Full Menu
      </button>
    </div>
  );
};

export default Card;