"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="bg-[#003333] flex justify-between items-center py-4 md:py-6 lg:py-8 px-4 md:px-8">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/1Asset-26-2048x320.webp"
            width={120}
            height={120}
            alt="logo"
            className="mx-2 md:mx-8"
          />
        </Link>
      </div>
      <ul
        className={`${
          showNav ? "block" : "hidden"
        } md:flex items-center space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-[#003333] md:bg-transparent z-10 md:z-auto`}
      >
        <li className="md:mx-4">
          <Link
            href="/courses"
            className="text-white hover:text-gray-500 transition duration-200 block py-2 px-4 md:py-0 md:px-0"
          >
            Courses
          </Link>
        </li>
        <li className="md:mx-4">
          <Link
            href="/about"
            className="text-white hover:text-gray-500 transition duration-200 block py-2 px-4 md:py-0 md:px-0"
          >
            About
          </Link>
        </li>
        <li className="md:mx-4">
          <Link
            href="/contact"
            className="text-white hover:text-gray-500 transition duration-200 block py-2 px-4 md:py-0 md:px-0"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center space-x-4 px-2">
        <button className="bg-[#00B595] px-4 py-2 rounded-md text-white hover:bg-[#00B595]/80 transition duration-300">
          Login
        </button>
        <button className="border border-green-800 px-4 py-2 rounded-md text-white hover:bg-green-800 hover:text-white transition duration-300">
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="bg-[#00B595] px-4 py-2 rounded-md text-white hover:bg-[#00B595]/80 transition duration-300"
          aria-label="Menu"
          onClick={handleToggle}
        >
          {showNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {showNav && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10"
          onClick={handleToggle}
        >
          <div className="bg-[#003333] w-2/3 md:w-1/3 h-full p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li className="my-4">
                <Link
                  href="/courses"
                  className="text-white hover:text-gray-200 transition duration-300 block py-2"
                >
                  Courses
                </Link>
              </li>
              <li className="my-4">
                <Link
                  href="/about"
                  className="text-white hover:text-gray-200 transition duration-300 block py-2"
                >
                  About
                </Link>
              </li>
              <li className="my-4">
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200 transition duration-300 block py-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <>
      <section>
        <Nav />
        <div className="bg-[#003333] mx-auto p-4 md:p-6 lg:p-12 text-center pt-3 min-h-screen flex flex-col justify-center items-center">
          <div className="pt-20 md:pt-32">
            <div className="-mt-48">
              <h1 className="text-3xl md:text-6xl font-bold text-white">
                Learn Anything on a Live 1 on 1 call
              </h1>
              <p className="text-lg text-white font-thin pt-6">
                Improve your skills, learn 1 on 1 from professional world wide
              </p>
            </div>
            <div className="mt-10 flex gap-4 items-center justify-center">
              <button className="bg-[#00B595] text-sm  sm:text-xl px-3 py-3 rounded-md text-white">
                Explore 1 on 1 Courses
              </button>
              <button className="border border-green-800 rounded-md px-3 py-3 text-sm sm:text-xl text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
