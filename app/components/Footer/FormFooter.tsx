import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import EmailInput from "../EmailInput";

const FormFooter = () => {
  return (
    <div className="w-full bg-black text-white pt-7">
      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-5 md:px-0 font-light text-xs">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold">Exclusive</h2>
          <div>
            <p className="font-medium text-lg">Subscribe</p>
            <p>Get 10% off your first order</p>
          </div>
          <div className="flex space-x-4 mt-4">
            {/* Email Input Component */}
            <EmailInput />
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold">Support</h2>
          <p>#st72P, Kork Kleang, Phnom Penh Tmey, Phnom Penh, Cambodia</p>
          <p>roemreaksmey7@gmail.com</p>
          <p>+855 99608096</p>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold">Account</h2>
          <div className="flex flex-col space-y-2">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold">Quick Link</h2>
          <div className="flex flex-col space-y-2">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold">Download App</h2>
          <p>Comming Soon...!</p>
          <div className="flex space-x-2">
            <button className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600">
              App Store
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600">
              Google Play
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
            <FaGithub className="cursor-pointer hover:text-gray-400" />
            <FaTelegram className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center w-full mx-auto my-2">
        <hr className="w-full border-t border-gray-500" />
      </div>

      {/* Copyright */}
      <div className="text-center text-[10px] font-light">
        <p>Copyright &copy; Rimel 2024. All rights reserved. By Mr.Smey</p>
      </div>
    </div>
  );
};

export default FormFooter;
