import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1632px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute text-gray-200 h-full w-full bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            <span className="text-orange-500">Food </span>Devlivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
