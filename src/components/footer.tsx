// 

import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-white pt-10 pb-6 px-6 md:px-10 lg:px-20">
      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-8">
        {/* First Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black">Funiro</h2>
          <p className="text-sm text-gray-600">
            400 University Drive, Suite 200 <br /> Carol Gables, FL 33134 USA
          </p>
          <p className="text-sm text-gray-600">2023 Funiro. All rights reserved</p>
        </div>

        {/* Second Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-black">Link</h2>
          <p className="text-sm text-gray-600">Home</p>
          <p className="text-sm text-gray-600">About</p>
          <p className="text-sm text-gray-600">Shop</p>
          <p className="text-sm text-gray-600">Contact</p>
        </div>

        {/* Third Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-black">Help</h2>
          <p className="text-sm text-gray-600">Payment Option</p>
          <p className="text-sm text-gray-600">Privacy Policies</p>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-black">Newsletter</h2>
          <button className="flex items-center gap-2 border border-gray-300 bg-gray-100 rounded-md p-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow text-sm text-gray-600 focus:outline-none bg-transparent"
            />
            <LuSendHorizontal className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
