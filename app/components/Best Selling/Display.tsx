"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../Button";
import ProductCardBestSell from "./PruductCardBestSell";
import TShortImg from "../assets/Images/BestSeller/T-short.png";
import BagImg from "../assets/Images/BestSeller/Bag.png";
import CPUImg from "../assets/Images/BestSeller/GPU.png";
import TableImg from "../assets/Images/BestSeller/table.png";
import YellowStar from "../assets/Icons/yellowStar.png";
import GrayStar from "../assets/Icons/grayStar.png";

const YellowStarCom = () => (
  <Image src={YellowStar} alt="YellowStar" height={12} width={12} />
);

const GrayStarCom = () => (
  <Image src={GrayStar} alt="GrayStar" height={12} width={12} />
);

const Display = () => {
  // Animation controls for heading and cards
  const headingControls = useAnimation();
  const cardsControls = useAnimation();

  // UseInView hook to detect when the section is in view
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  // Update animations based on visibility
  React.useEffect(() => {
    if (headingInView) {
      headingControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      headingControls.start({
        opacity: 0,
        x: -50,
        transition: { duration: 0.5 },
      });
    }
  }, [headingInView, headingControls]);

  React.useEffect(() => {
    if (cardsInView) {
      cardsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      cardsControls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.5 },
      });
    }
  }, [cardsInView, cardsControls]);

  return (
    <div>
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, x: -50 }}
        animate={headingControls}
        className="w-full flex justify-center"
      >
        <div className="flex items-center w-[83%] text-black">
          {/* Left Section */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 h-5 w-3 rounded-sm mr-2"></div>
              <p className="text-red-500 text-xs">This Month</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-xl font-semibold mr-12">
                Best Selling Products
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 flex items-end justify-end">
            <Button
              text="View All"
              backgroundColor="bg-red-500"
              textColor="text-white"
              hoverColor="hover:bg-red-600"
              padding="py-2 px-4"
              className="my-4"
            />
          </div>
        </div>
      </motion.div>

      {/* Product Cards Section */}
      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={cardsControls}
        className="w-full flex justify-center mt-8"
      >
        <div className="flex items-center w-[83%] text-black space-x-4 mt-10 mb-10">
          <ProductCardBestSell
            image={TShortImg}
            name="The north coat"
            price="$260"
            originalPrice="$360"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
              </>
            }
            reviewCount={65}
          />
          <ProductCardBestSell
            image={BagImg}
            name="Gucci duffle bag"
            price="$960"
            originalPrice="$1160"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={65}
          />
          <ProductCardBestSell
            image={CPUImg}
            name="RGB liquid CPU Cooler"
            price="$160"
            originalPrice="$170"
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <GrayStarCom />
              </>
            }
            reviewCount={65}
          />
          <ProductCardBestSell
            image={TableImg}
            name="Small BookSelf"
            price="$360"
            originalPrice=""
            stars={
              <>
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
                <YellowStarCom />
              </>
            }
            reviewCount={65}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Display;
