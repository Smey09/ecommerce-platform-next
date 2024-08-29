import React from "react";
import Image, { StaticImageData } from "next/image";
import IconFavorite from "../assets/Icons/favorite.jpg";
import IconEye from "../assets/Icons/eye.png";

interface ProductCardProps {
  image: StaticImageData;
  newPro?: boolean;
  name: string;
  price: string;
  stars: React.ReactNode;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  newPro,
  name,
  price,
  stars,
  reviewCount,
}) => {
  return (
    <div className="relative h-[220px] w-[260px] font-sans text-sm transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative h-[75%] bg-gray-200 m-0.5 rounded-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-slate-300">
        {newPro && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-light px-2 py-1 rounded-sm">
            New
          </div>
        )}
        <div className="flex items-center justify-center h-full w-full p-4">
          <Image src={image} alt={name} height={100} width={100} />
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
          <button className="bg-white rounded-full p-2 shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-300">
            <Image
              src={IconFavorite}
              alt="Favorite Icon"
              height={20}
              width={20}
            />
          </button>
          <button className="bg-white rounded-full p-2 shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-300">
            <Image src={IconEye} alt="Eye Icon" height={20} width={20} />
          </button>
        </div>
      </div>
      <div className="space-y-1 mt-2 text-black">
        <p className="font-medium">{name}</p>
        <div className="flex items-center space-x-1">
          <p className="text-red-600 font-semibold">{price}</p>
          {stars}
          <p className="text-gray-600 text-xs">({reviewCount})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
