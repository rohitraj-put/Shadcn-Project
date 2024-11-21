import React from "react";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <header className="header sticky top-0 bg-white  flex items-center justify-between px-8 py-02">
      {/* logo */}
      <h1 className="w-3/12">
        <a href="">
          <img
            className=" w-24 p-1"
            src="https://www.thegoodroad.in/cdn/shop/files/TGR_LOGOS-40_8c8024e4-c361-40a1-813f-b10279feb7be.png?v=1693735401&width=150"
            alt="logo"
          />
        </a>
      </h1>
      {/* navigation */}
      {/* <nav className="nav text-[18px] text-[#787a7c]">
        <ul className="flex items-center">
          <li className="p-4  hover:text-green-500 duration-200 active">
            <a href="">About Us</a>
          </li>
          <li className="p-4  hover:text-green-500 duration-200">
            <a href="">Blog</a>
          </li>
          <li className="p-4  hover:text-green-500 duration-200">
            <a href="">Past Work</a>
          </li>
          <li className="p-4  hover:text-green-500 duration-200">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav> */}
      {/* =======input======= */}
      <div className="flex justify-between items-center gap-5">
        <div>
          <div className="mt-2">
            <input
              type="text"
              name="inputname"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-rose-800"
            />
          </div>
        </div>
        {/* buttons -*/}
        <div className="w-3/12 flex justify-end items-center gap-3">
          <a href="#" className="text-3xl text-rose-400">
            <CiLocationOn />
          </a>
          <a href="#" className="text-3xl text-rose-400">
            <CiUser />
          </a>
          <a href="#" className="text-3xl text-rose-400">
            <BsCart4 />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
