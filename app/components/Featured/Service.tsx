"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import service1Img from "../assets/Images/Services/Services-1.png";
import service2Img from "../assets/Images/Services/Services-2.png";
import service3Img from "../assets/Images/Services/Services-3.png";

const Service = () => {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-center w-[83%] text-black space-x-3 my-10">
        {[
          {
            img: service1Img,
            title: "FREE AND FAST DELIVERY",
            desc: "Free delivery for all orders over $140",
          },
          {
            img: service2Img,
            title: "24/7 CUSTOMER SERVICE",
            desc: "Friendly 24/7 customer support",
          },
          {
            img: service3Img,
            title: "MONEY BACK GUARANTEE",
            desc: "We return money within 30 days",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="p-4 flex flex-col items-center space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }} // Removed once: true to re-trigger on each scroll
            variants={cardVariants}
          >
            <Image
              src={service.img}
              alt={`service${index + 1}Img`}
              height={60}
              width={60}
            />
            <p className="text-sm font-semibold">{service.title}</p>
            <p className="font-light text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;

// import React from "react";
// import Image from "next/image";
// import service1Img from "../assets/Images/Services/Services-1.png";
// import service2Img from "../assets/Images/Services/Services-2.png";
// import service3Img from "../assets/Images/Services/Services-3.png";

// const Service = () => {
//   return (
//     <div>
//       <div className="w-full flex justify-center">
//         <div className="flex items-center justify-center w-[83%] text-black space-x-3 my-10">
//           <div className="p-4 flex flex-col items-center space-y-1">
//             <Image src={service1Img} alt="service1Img" height={60} width={60} />
//             <p className="text-sm font-semibold">FREE AND FAST DELIVERY</p>
//             <p className="font-light text-sm">
//               Free delivery for all orders over $140
//             </p>
//           </div>
//           <div className="p-4 flex flex-col items-center space-y-1">
//             <Image src={service2Img} alt="service2Img" height={60} width={60} />
//             <p className="text-sm font-semibold">24/7 CUSTOMER SERVICE</p>
//             <p className="font-light text-sm">Friendly 24/7 customer support</p>
//           </div>
//           <div className="p-4 flex flex-col items-center space-y-1">
//             <Image src={service3Img} alt="service3Img" height={60} width={60} />
//             <p className="text-sm font-semibold">MONEY BACK GUARANTEE</p>
//             <p className="font-light text-sm">We reurn money within 30 days</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
