"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useUser, useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 z-10 relative">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
        width={128}
        height={32}
      />
      
      {/* Desktop Navigation */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition cursor-pointer">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition cursor-pointer">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition cursor-pointer">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition cursor-pointer">
          Contact
        </Link>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image
          className="w-4 h-4 cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
          width={16}
          height={16}
        />
        {user && (
          <Link href="/my-orders" className="cursor-pointer">
            <Image
              src={assets.order_icon}
              alt="My Orders"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </Link>
        )}
        <Link href="/cart" className="cursor-pointer">
          <Image
            src={assets.cart_icon}
            alt="Cart Icon"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </Link>
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer"
          >
            <Image
              src={assets.user_icon}
              alt="user icon"
              width={24}
              height={24}
            />
            Account
          </button>
        )}
      </ul>
      
      {/* Mobile Menu Button (Hamburger) */}
      <div className="flex items-center md:hidden gap-3">
        <Image
          className="w-4 h-4 cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
          width={16}
          height={16}
        />
        <button onClick={toggleMenu} className="cursor-pointer">
          <Image
            src={assets.menu_icon}
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 flex flex-col p-8 md:hidden">
          {/* Menu Header with Back Button */}
          <div className="flex justify-between items-center mb-6">
            <Image
              src={assets.logo}
              alt="logo"
              width={100}
              height={25}
            />
            <button onClick={toggleMenu} className="cursor-pointer p-2">
              <Image
                src={assets.close_icon}
                alt="close menu"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-xl">
            <Link href="/" className="hover:text-gray-900 transition cursor-pointer" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/all-products" className="hover:text-gray-900 transition cursor-pointer" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href="/" className="hover:text-gray-900 transition cursor-pointer" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/" className="hover:text-gray-900 transition cursor-pointer" onClick={toggleMenu}>
              Contact
            </Link>
            {isSeller && (
              <button
                onClick={() => { router.push("/seller"); toggleMenu(); }}
                className="text-left text-base border px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
              >
                Seller Dashboard
              </button>
            )}
            {user && (
              <Link href="/my-orders" className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer" onClick={toggleMenu}>
                <Image
                  src={assets.order_icon}
                  alt="My Orders"
                  width={24}
                  height={24}
                />
                My Orders
              </Link>
            )}
            <Link href="/cart" className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer" onClick={toggleMenu}>
              <Image
                src={assets.cart_icon}
                alt="Cart Icon"
                width={24}
                height={24}
              />
              Cart
            </Link>
            {user ? (
              <div className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer">
                <UserButton afterSignOutUrl="/" />
                <span className="text-gray-700">Profile</span>
              </div>
            ) : (
              <button
                onClick={() => { openSignIn(); toggleMenu(); }}
                className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer"
              >
                <Image
                  src={assets.user_icon}
                  alt="user icon"
                  width={24}
                  height={24}
                />
                Account
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;