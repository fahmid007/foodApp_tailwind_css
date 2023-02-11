import React from "react";
import { categories } from "../data/data";

const Category = () => {
  //   console.log(categories);
  return (
    <div className="max-w-[1632px] mx-auto p-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center pb-4">
        Top Rated Menu Item
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-6 pt-1">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between items-center"
          >
            <img
              className="w-[3.5rem] object-cover"
              src={item.image}
              alt={item.name}
            />
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
