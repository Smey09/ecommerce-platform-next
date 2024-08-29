import React from "react";
import DisCount from "./DisCount";
import Image from "next/image";
import favoriteIcon from "../assets/Icons/favorite.jpg";
import storeIcon from "../assets/Icons/store.jpg";
import InputForm from "../InputForm";

const FormNevBar = () => {
  return (
    <div className="w-full bg-white">
      <DisCount />
      <div className="flex items-center justify-between text-black py-4 px-32">
        <div className="font-bold text-lg">
          <p>Exclusive</p>
        </div>
        <div className="flex items-center text-sm font-light space-x-5">
          <p className="underline underline-offset-2 decoration-blue-300">
            Home
          </p>
          <p>Contact</p>
          <p>About</p>
          <p>Sign Up</p>
        </div>
        <div className="flex items-center space-x-3">
          <InputForm />
          <Image src={favoriteIcon} alt="Favorite" width={24} height={24} />
          <Image src={storeIcon} alt="Favorite" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default FormNevBar;
