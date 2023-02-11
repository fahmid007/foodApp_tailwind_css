import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1632px] mx-auto p-4 py-10 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 align-middle">
            Buy One Get One
          </p>
          <p className="px-2">Through 8/6</p>
          <button className="border-white text-black bg-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 align-middle">
            Best Biriyani
          </p>
          <p className="px-2">Through 8/6</p>
          <button className="border-white text-black bg-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 align-middle">
            Chinese Food Item
          </p>
          <p className="px-2">Through 8/6</p>
          <button className="border-white text-black bg-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
