import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({image,title,price}) => {
  return (
    <div className="bg-zinc-100 p-4 rounded-xl ">
      {/* Card Icons */}
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300 ">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-md">
          <FaPlus  />
        </button>
      </div>
      {/* Card Image */}
      <div className="w-full h-40">
        <img src={image} className="w-full h-full object-contain mx-auto" />
      </div>
      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-2xl font-bold px-3 py-3 ">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
