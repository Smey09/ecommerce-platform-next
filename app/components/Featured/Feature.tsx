"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ps5Img from "../assets/Images/Feature/ps5.png";
import womenCollactionmg from "../assets/Images/Feature/women-collections.png";
import speakerImg from "../assets/Images/Feature/speaker.png";
import gucciImg from "../assets/Images/Feature/gucci.png";
import { useEffect } from "react";

const Feature = () => {
  const ps5Controls = useAnimation();
  const womenControls = useAnimation();
  const speakerControls = useAnimation();
  const gucciControls = useAnimation();

  const { ref: refPs5, inView: inViewPs5 } = useInView({
    triggerOnce: false, // Allows multiple triggers
    threshold: 0.5,
  });

  const { ref: refWomen, inView: inViewWomen } = useInView({
    triggerOnce: false, // Allows multiple triggers
    threshold: 0.5,
  });

  const { ref: refSpeaker, inView: inViewSpeaker } = useInView({
    triggerOnce: false, // Allows multiple triggers
    threshold: 0.5,
  });

  const { ref: refGucci, inView: inViewGucci } = useInView({
    triggerOnce: false, // Allows multiple triggers
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewPs5) {
      ps5Controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      ps5Controls.start({ opacity: 0, x: -50 });
    }
  }, [inViewPs5, ps5Controls]);

  useEffect(() => {
    if (inViewWomen) {
      womenControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      womenControls.start({ opacity: 0, x: -50 });
    }
  }, [inViewWomen, womenControls]);

  useEffect(() => {
    if (inViewSpeaker) {
      speakerControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      speakerControls.start({ opacity: 0, x: 50 });
    }
  }, [inViewSpeaker, speakerControls]);

  useEffect(() => {
    if (inViewGucci) {
      gucciControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      gucciControls.start({ opacity: 0, x: 50 });
    }
  }, [inViewGucci, gucciControls]);

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex items-center w-[83%] text-black">
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 h-5 w-3 rounded-sm mr-2"></div>
              <p className="text-red-500 text-xs">Featured</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-xl font-semibold mr-12">New Arrival</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="flex items-center w-[83%] text-black">
          <div className="w-full grid grid-cols-4 gap-4">
            <motion.div
              className="col-span-2 bg-black relative flex justify-center items-center pt-10 rounded-md"
              ref={refPs5}
              initial={{ opacity: 0, x: -50 }}
              animate={ps5Controls}
            >
              <Image
                src={ps5Img}
                alt="ps5Img"
                height={400}
                width={400}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 text-white space-y-3">
                <p className="text-xl font-medium">PlayStation 5</p>
                <p className="text-[9px] font-light">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <p className="text-xs font-sans underline underline-offset-2 decoration-gray-50">
                  Shop Now
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-2 grid grid-rows-[auto,1fr] gap-4"
              ref={refWomen}
              initial={{ opacity: 0, x: -50 }}
              animate={womenControls}
            >
              {/* Top Section */}
              <div className="bg-black rounded-md flex flex-col">
                <div className="w-full h-full flex">
                  <div className="w-1/2 flex flex-col justify-center pt-16 p-5 text-white">
                    <p className="text-xl font-medium mb-2">
                      Women's Collections
                    </p>
                    <p className="text-xs font-light mb-4">
                      Featured women`s collections that give you another vibe.
                    </p>
                    <p className="text-xs font-sans underline underline-offset-2 decoration-gray-50">
                      Shop Now
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center items-center">
                    <Image
                      src={womenCollactionmg}
                      alt="womenCollactionmg"
                      height={300}
                      width={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative rounded-sm flex items-center justify-center bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800"
                  ref={refSpeaker}
                  initial={{ opacity: 0, x: 50 }}
                  animate={speakerControls}
                >
                  <Image
                    src={speakerImg}
                    alt="speakerImg"
                    height={160}
                    width={160}
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white space-y-2">
                    <p className="text-xl font-medium">Speakers</p>
                    <p className="text-xs font-light">
                      Amazon wireless speakers
                    </p>
                    <p className="text-xs font-sans underline underline-offset-2 decoration-gray-50">
                      Shop Now
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="relative rounded-sm flex items-center justify-center bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800"
                  ref={refGucci}
                  initial={{ opacity: 0, x: 50 }}
                  animate={gucciControls}
                >
                  <Image
                    src={gucciImg}
                    alt="gucciImg"
                    height={160}
                    width={160}
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white space-y-2">
                    <p className="text-xl font-medium">Perfume</p>
                    <p className="text-xs font-light">GUCCI INTENSE OUD EDP</p>
                    <p className="text-xs font-sans underline underline-offset-2 decoration-gray-50">
                      Shop Now
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
