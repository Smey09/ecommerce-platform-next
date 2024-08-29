import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  icon: StaticImageData;
  altText: string;
  label: string;
}

const Card: React.FC<CardProps> = ({ icon, altText, label }) => {
  return (
    <div className="w-[110px] h-[110px] border border-gray-400 rounded-sm p-4 flex flex-col items-center justify-center space-y-2 hover:bg-red-500 transition duration-300 ease-in-out">
      <Image src={icon} alt={altText} height={40} width={40} />
      <p>{label}</p>
    </div>
  );
};

export default Card;
