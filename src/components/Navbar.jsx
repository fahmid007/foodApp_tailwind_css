import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1632px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex justify-center items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md:flex item-center bg-gray-300 rounded-full p-1 text-[15px]">
          <p className="bg-black text-white rounded-full p-1 ">Delivery</p>
          <p className="p-1">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-300 flex items-center p-1 rounded-full w-[300px]  sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-1 focus:outline-none w-full"
          type="text"
          placeholder="Search Food"
        />
      </div>
      {/* cart button */}
      <button className="hidden bg-black text-white  md:flex items-center py-2">
        <BsFillCartFill size={20} className="mr-1" /> Cart
      </button>

      {/* mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div>
      ) : (
        ""
      )}

      {/* sidebar menu */}
      <div
        className={
          nav
            ? "fixed w-[300px] h-screen top-0 left-0 bg-white z-10 duration-300"
            : "fixed w-[300px] h-screen top-0 left-[-100%] bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="top-4 right-4 absolute cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4  flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
