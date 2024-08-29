import React from "react";
import Image from "next/image";
import IconsArrowBack from "./assets/Icons/IconArrowback.png";
import NextArrowIcon from "./assets/Icons/NextArrowIcon.png";

const ButtonArrowLR = () => {
  return (
    <div className="w-1/2 flex items-end justify-end h-20">
      <div className="flex items-center space-x-1">
        <div className="bg-gray-100 border border-blue-100 rounded-full p-3 transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
          <Image
            src={IconsArrowBack}
            alt="IconsArrowBack"
            height={15}
            width={15}
          />
        </div>
        <div className="bg-gray-100 border border-blue-100 rounded-full p-3 transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
          <Image
            src={NextArrowIcon}
            alt="NextArrowIcon"
            height={15}
            width={15}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonArrowLR;
