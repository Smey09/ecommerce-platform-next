"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GamePlayImg from "../assets/Images/gamePlay.png";
import KeyboardImg from "../assets/Images/keyboard.png";
import YellowStar from "../assets/Icons/yellowStar.png";
import GrayStar from "../assets/Icons/grayStar.png";
import MonotorImg from "../assets/Images/monitor.png";
import ChairImg from "../assets/Images/chair.png";
import CountdownTimer from "../CounterTime";
import ProductCard from "./ProductsCard";
import ButtonArrowLR from "../ButtonArrowLR";
import Button from "../Button";

const YellowStarCom = () => (
  <Image src={YellowStar} alt="YellowStar" height={12} width={12} />
);

const GrayStarCom = () => (
  <Image src={GrayStar} alt="GrayStar" height={12} width={12} />
);

const Today = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex items-center w-[83%] text-black">
          {/* Left Section */}
          <motion.div
            className="w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-500 h-5 w-3 rounded-sm mr-2"></div>
              <p className="text-red-500 text-xs">Today`s</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-xl font-semibold mr-12">Flash Sales</p>
              <CountdownTimer />
            </div>
          </motion.div>

          {/* Right Section */}
          <ButtonArrowLR />
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <motion.div
          className="w-[83%] flex overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="flex space-x-2 whitespace-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {/* Product Cards */}
            {[
              {
                image: GamePlayImg,
                discount: "-40%",
                name: "HAVIT HV-G92 Gamepad",
                price: "$120",
                originalPrice: "$160",
                stars: <>{Array(5).fill(<YellowStarCom />)}</>,
                reviewCount: 88,
              },
              {
                image: KeyboardImg,
                discount: "-35%",
                name: "AK-900 Wired Keyboard",
                price: "$960",
                originalPrice: "$1160",
                stars: (
                  <>
                    {Array(4)
                      .fill(<YellowStarCom />)
                      .concat(<GrayStarCom />)}
                  </>
                ),
                reviewCount: 75,
              },
              {
                image: MonotorImg,
                discount: "-30%",
                name: "IPS LCD Gaming Monitor",
                price: "$370",
                originalPrice: "$400",
                stars: <>{Array(5).fill(<YellowStarCom />)}</>,
                reviewCount: 99,
              },
              {
                image: ChairImg,
                discount: "-25%",
                name: "S-Series Comfort Chair",
                price: "$375",
                originalPrice: "$400",
                stars: (
                  <>
                    {Array(4)
                      .fill(<YellowStarCom />)
                      .concat(<GrayStarCom />)}
                  </>
                ),
                reviewCount: 99,
              },
              {
                image: GamePlayImg,
                discount: "-40%",
                name: "HAVIT HV-G92 Gamepad",
                price: "$120",
                originalPrice: "$160",
                stars: <>{Array(5).fill(<YellowStarCom />)}</>,
                reviewCount: 88,
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard
                  image={product.image}
                  discount={product.discount}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  stars={product.stars}
                  reviewCount={product.reviewCount}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Button Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          text="View All Products"
          backgroundColor="bg-red-500"
          textColor="text-white"
          hoverColor="hover:bg-red-600"
          padding="py-2 px-4"
          className="my-4"
        />
      </motion.div>
    </div>
  );
};

export default Today;
