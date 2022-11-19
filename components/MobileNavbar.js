import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="flex">
      {/* Menu ham*/}
      <div onClick={toggleNav} className="md:hidden cursor-pointer z-10">
        {showNav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          showNav
            ? "fixed top-0 left-0 w-full h-screen bg-[#181718] flex justify-center items-center ease-in duration-300 md:hidden"
            : "fixed top-[-100%] left-0 w-full h-screen bg-[#171718] flex justify-center items-center ease-in duration-300 md:hidden"
        }
      >
        <ul className="text-center">
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/#livestreams"}>Live Streams</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/#categories"}>Top Categories</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/account"}>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
