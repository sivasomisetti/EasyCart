import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 py-4 bg-gray-50 border-t border-gray-200">
      <div className="flex items-center gap-4">
        <Image 
          className="hidden md:block" 
          src={assets.logo} 
          alt="logo" 
          width={120} 
          height={30} 
        />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright {new Date().getFullYear()} &copy; QuickCart. All Rights Reserved. Designed by sivasomisetti.
        </p>
      </div>
      <div className="flex items-center gap-3 py-4 md:py-0">
        <a href="#" className="cursor-pointer hover:opacity-75 transition">
          <Image src={assets.facebook_icon} alt="facebook_icon" width={24} height={24} />
        </a>
        <a href="#" className="cursor-pointer hover:opacity-75 transition">
          <Image src={assets.twitter_icon} alt="twitter_icon" width={24} height={24} />
        </a>
        <a href="#" className="cursor-pointer hover:opacity-75 transition">
          <Image src={assets.instagram_icon} alt="instagram_icon" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;