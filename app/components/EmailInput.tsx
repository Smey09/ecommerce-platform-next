import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const EmailInput = () => {
  return (
    <div className="flex items-center border-2 border-white rounded-full p-1">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-black text-white placeholder-gray-400 px-1 w-full outline-none"
      />
      <button className="text-white px-2">
        <FaPaperPlane className="text-white" />
      </button>
    </div>
  );
};

export default EmailInput;
