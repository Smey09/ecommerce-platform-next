"use client";

import React from "react";
import Image from "next/image";
import dogFoodImg from "../assets/Images/OurProducts/dog-food.png";
import carmeraImg from "../assets/Images/OurProducts/canon-camera.png";
import gammingLaptopImg from "../assets/Images/OurProducts/gaming-laptop.png";
import curologyImg from "../assets/Images/OurProducts/Curology.png";
import carKidImg from "../assets/Images/OurProducts/car-kid.png";
import soccerImg from "../assets/Images/OurProducts/soccer-cleat.png";
import useGamepadImg from "../assets/Images/OurProducts/use-gamepad.png";
import jacketImg from "../assets/Images/OurProducts/jacket.png";
import YellowStar from "../assets/Icons/yellowStar.png";
import GrayStar from "../assets/Icons/grayStar.png";
import ProductCard from "./Card";
import ButtonArrowLR from "../ButtonArrowLR";
import Button from "../Button";

const YellowStarCom = () => (
  <Image src={YellowStar} alt="YellowStar" height={12} width={12} />
);

const GrayStarCom = () => (
  <Image src={GrayStar} alt="GrayStar" height={12} width={12} />
);

const OurProducts = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex items-center w-[83%] text-black">
          {/* Left Section */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 h-5 w-3 rounded-sm mr-2"></div>
              <p className="text-red-500 text-xs">Our Products</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-xl font-semibold mr-12">
                Explore Our Products
              </p>
            </div>
          </div>

          {/* Right Section */}
          <ButtonArrowLR />
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <div className="w-[83%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Product Cards */}
          <ProductCard
            image={dogFoodImg}
            newPro={false}
            name="Breed Dry Dog Food"
            price="$100"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={35}
          />
          <ProductCard
            image={carmeraImg}
            newPro={false}
            name="CANON EOS DSLR Camera"
            price="$360"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={95}
          />
          <ProductCard
            image={gammingLaptopImg}
            newPro={false}
            name="ASUS FHD Gaming Laptop"
            price="$700"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
              </>
            }
            reviewCount={325}
          />
          <ProductCard
            image={curologyImg}
            newPro={false}
            name="Curology Product Set "
            price="$500"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={145}
          />
          <ProductCard
            image={carKidImg}
            newPro={true}
            name="Kids Electric Car"
            price="$960"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={65}
          />
          <ProductCard
            image={soccerImg}
            newPro={false}
            name="Jr. Zoom Soccer Cleats"
            price="$1160"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
              </>
            }
            reviewCount={35}
          />
          <ProductCard
            image={useGamepadImg}
            newPro={true}
            name="GP11 Shooter USB Gamepad"
            price="$160"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={55}
          />
          <ProductCard
            image={jacketImg}
            newPro={false}
            name="Quilted Satin Jacket"
            price="$660"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={55}
          />
        </div>
      </div>

      {/* Button Animation */}
      <div>
        <Button
          text="View All Products"
          backgroundColor="bg-red-500"
          textColor="text-white"
          hoverColor="hover:bg-red-600"
          padding="py-2 px-4"
          className="my-4"
        />
      </div>
    </div>
  );
};

export default OurProducts;
