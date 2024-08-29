"use client";

import React from "react";
import { motion } from "framer-motion";
import ArrowRightIcon from "../../components/assets/Icons/arrow-right.png";
import AppleIcon from "../../components/assets/Icons/apple-icon.png";
import LongArrowRightIcon from "../../components/assets/Icons/longArrowRight.png";
import PosterIphone from "../../components/assets/Images/PosterIphone-.png";
import Image from "next/image";

const Part1 = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-[83%] items-start justify-center">
        {/* Left Column */}
        <motion.div
          className="w-[20%] text-gray-700 font-sans text-sm space-y-2 p-3 px-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }} // Animation will play every time the element is in view
        >
          {[
            { label: "Woman's Fashion", icon: ArrowRightIcon },
            { label: "Men's Fashion", icon: ArrowRightIcon },
            { label: "Electronics" },
            { label: "Home & Lifestyle" },
            { label: "Medicine" },
            { label: "Sports & Outdoor" },
            { label: "Baby's & Toys" },
            { label: "Groceries & Pets" },
            { label: "Health & Beauty" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p>{item.label}</p>
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={`${item.label} icon`}
                  height={7}
                  width={7}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="h-[100%] w-[1px] bg-gray-400 rounded dark:bg-gray-400 mx-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        />

        {/* Right Column */}
        <motion.div
          className="w-[80%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Main Content Area */}
          <motion.div
            className="bg-black mt-5 text-white font-light flex justify-center py-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {/* Left Side with Text */}
            <motion.div
              className="w-[40%] p-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <Image src={AppleIcon} alt="AppleIcon" height={45} width={45} />
                <p>iPhone 14 Series</p>
              </div>
              <div className="w-[80%]">
                <p className="font-semibold text-4xl py-2">
                  Up to 10% off Voucher
                </p>
                <div className="flex items-center space-x-2">
                  <p className="font-extralight text-sm underline underline-offset-4 decoration-blue-500">
                    Shop Now
                  </p>
                  <Image
                    src={LongArrowRightIcon}
                    alt="LongArrowRightIcon"
                    height={15}
                    width={15}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side with Image */}
            <motion.div
              className="w-[60%]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Image
                src={PosterIphone}
                alt="PosterIphone"
                height={400}
                width={400}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Part1;
