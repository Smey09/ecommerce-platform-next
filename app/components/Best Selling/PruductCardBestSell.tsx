import React from "react";
import Image, { StaticImageData } from "next/image";
import IconFavorite from "../assets/Icons/favorite.jpg";
import IconEye from "../assets/Icons/eye.png";

interface ProductCardBestSellProps {
  image: StaticImageData;
  name: string;
  price: string;
  originalPrice: string;
  stars: React.ReactNode;
  reviewCount: number;
}

const ProductCardBestSell: React.FC<ProductCardBestSellProps> = ({
  image,
  name,
  price,
  originalPrice,
  stars,
  reviewCount,
}) => {
  return (
    <div className="h-[280px] w-[230px] font-sans text-sm">
      <div className="relative h-[60%] bg-gray-200 m-0.5 rounded-sm flex items-center justify-center hover:bg-slate-300">
        <div className="flex items-center justify-center h-full w-full p-16">
          <Image src={image} alt={name} height={100} width={100} />
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
          <button className="bg-white rounded-full p-1 shadow hover:bg-gray-300">
            <Image
              src={IconFavorite}
              alt="Favorite Icon"
              height={15}
              width={15}
            />
          </button>
          <button className="bg-white rounded-full p-1 shadow hover:bg-gray-300">
            <Image src={IconEye} alt="Eye Icon" height={15} width={15} />
          </button>
        </div>
      </div>
      <div className="space-y-1 mt-1 text-black">
        <p>{name}</p>
        <div className="flex items-center space-x-4">
          <p className="text-red-600">{price}</p>
          <p className="text-gray-600 line-through">{originalPrice}</p>
        </div>
        <div className="flex items-center space-x-1">
          {stars}
          <p className="text-gray-600">({reviewCount})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBestSell;
