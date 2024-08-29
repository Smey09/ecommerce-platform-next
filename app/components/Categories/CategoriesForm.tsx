"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonArrowLR from "../ButtonArrowLR";
import Image from "next/image";
import PhoneIcon from "../assets/Icons/Catagories/phone.png";
import DesktopIcon from "../assets/Icons/Catagories/destop.png";
import WatchIcon from "../assets/Icons/Catagories/smart-watch.png";
import CameraIcon from "../assets/Icons/Catagories/camera-icon.png";
import HeadPhoneIcon from "../assets/Icons/Catagories/header-phone.png";
import GamingIcon from "../assets/Icons/Catagories/game.png";

import Card from "./Card";

const cardData = [
  { icon: PhoneIcon, altText: "Phone Icon", label: "Phones" },
  { icon: DesktopIcon, altText: "Desktop Icon", label: "Desktop" },
  { icon: WatchIcon, altText: "Smartwatch Icon", label: "SmartWatch" },
  { icon: CameraIcon, altText: "Camera Icon", label: "Camera" },
  { icon: HeadPhoneIcon, altText: "Headphone Icon", label: "HeadPhones" },
  { icon: GamingIcon, altText: "Gaming Icon", label: "Gaming" },
];

const CategoriesForm = () => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -50,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        className="w-full flex justify-center"
      >
        <div className="flex items-center w-[83%] text-black">
          {/* Left Section */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 h-5 w-3 rounded-sm mr-2"></div>
              <p className="text-red-500 text-xs">Categories</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-xl font-medium mr-12 leading-relaxed">
                Browse By Category
              </p>
            </div>
          </div>
          {/* Right Section */}
          <ButtonArrowLR />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center mt-8"
      >
        <div className="flex items-center w-[83%] text-black text-xs font-light space-x-2">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              altText={card.altText}
              label={card.label}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoriesForm;
