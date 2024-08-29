import React from "react";

const DisCount = () => {
  return (
    <div className="w-full bg-black text-white text-xs flex items-center justify-between py-2 px-[10%]">
      <div className="flex items-center space-x-2">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <h1 className="font-medium underline underline-offset-1">Shop Now</h1>
      </div>
      <div className="flex items-center space-x-1">
        <h1>English</h1>
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default DisCount;
