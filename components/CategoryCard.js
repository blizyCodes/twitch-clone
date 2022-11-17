import Image from "next/image";
import React from "react";

const CategoryCard = ({ img, title, viewers, tags }) => {
  const tagsArr = tags.split(",");
  return (
    <div className="p-2">
      <Image src={img} width="261" height="350" alt="/" />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{viewers}</p>
        <div className=" md:flex items-center justify-start">
          <div>
            <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
              {tagsArr[0]}
            </p>
          </div>
          <div>
            <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
              {tagsArr[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
