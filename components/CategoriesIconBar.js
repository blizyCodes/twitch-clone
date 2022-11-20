import Image from "next/image";
import React from "react";
import controller from "../public/assets/controller.png";
import cup from "../public/assets/cup.png";
import headphones from "../public/assets/headphones.png";
import microphone from "../public/assets/microphone.png";
import paintbrush from "../public/assets/paintbrush.png";

const CategoriesIconBar = () => {
  return (
    <div className="p-2 md:p-8">
      {/* Container */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-purple-500 flex justify-between items-center px-4 rounded cursor-pointer hover:scale-105 ease-in duration-300">
          <p className="text-2xl font-bold">Games</p>
          <Image src={controller} alt="/" />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-purple-500 flex justify-between items-center px-4 rounded cursor-pointer hover:scale-105 ease-in duration-300">
          <p className="text-2xl font-bold">IRL</p>
          <Image src={microphone} alt="/" />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-purple-500 flex justify-between items-center px-4 rounded cursor-pointer hover:scale-105 ease-in duration-300">
          <p className="text-2xl font-bold">Music</p>
          <Image src={headphones} alt="/" />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-purple-500 flex justify-between items-center px-4 rounded cursor-pointer hover:scale-105 ease-in duration-300">
          <p className="text-2xl font-bold">Esports</p>
          <Image src={cup} alt="/" />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-purple-500 flex justify-between items-center px-4 rounded cursor-pointer hover:scale-105 ease-in duration-300">
          <p className="text-2xl font-bold">Creative</p>
          <Image src={paintbrush} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesIconBar;
