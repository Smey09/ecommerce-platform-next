"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SpeakerImg from "../assets/Images/speaker-JBL.png";
import Button from "../Button";
import { useEffect } from "react";

const PosterJBL = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
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
    <div className="w-full flex justify-center">
      <div className="flex items-center w-[83%] text-sm bg-gradient-to-r from-black via-slate-700 to-slate-600">
        <motion.div
          className="w-1/2 px-16 space-y-5 py-20"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
        >
          <motion.p
            className="text-green-400 text-xs font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            Categories
          </motion.p>
          <motion.div
            className="w-[100%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white text-5xl font-semibold">
              Enhance Your Music Experience
            </p>
          </motion.div>
          <motion.div
            className="flex items-center text-black space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.9 }}
          >
            {["23 Hours", "05 Days", "58 Minutes", "35 Seconds"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full h-10 w-10 p-1 flex flex-col items-center justify-center"
                >
                  <p className="font-bold text-xs">{item.split(" ")[0]}</p>
                  <p className="font-light text-[8px]">{item.split(" ")[1]}</p>
                </div>
              )
            )}
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              text="Buy Now!"
              backgroundColor="bg-green-500"
              textColor="text-white"
              hoverColor="hover:bg-red-600"
              padding="py-2 px-4"
              className="my-4"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/2 flex items-start justify-start"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Image src={SpeakerImg} alt="SpeakerImg" height={500} width={500} />
        </motion.div>
      </div>
    </div>
  );
};

export default PosterJBL;
