import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="container mx-auto pt-10">
        {/* newsletter form */}
        <div className="relative bg-[#003333] w-full h-[50vh] rounded-2xl ">
          <div className="absolute w-64 h-64 bg-[#003333] border border-white rounded-full -left-4 -top-4"></div>
        </div>

        <div className="flex flex-wrap font-thin mt-20 my-4 mx-auto">
          <div className="w-full md:w-1/3 px-3 mb-5 md:mb-0">
            <span className="text-4xl">
              <Image
                src="/images/1Asset-25-2048x320.webp"
                alt="Logo"
                className="w-full mb-4"
                width={250}
                height={40}
              />
            </span>
            <p className="py-2">Start Learning with 1-on-1 experience</p>
            <p className="pb-3">Share your knowledge with others and earn</p>
            <div className="pt-5">
              <span className="text-4xl">
                <Link href="/">
                  <Image
                    src="/images/apps.webp"
                    alt="App logos"
                    className="w-full"
                    width={250}
                    height={40}
                  />
                </Link>
              </span>
              <p className="mt-4 flex space-x-4">
                <a
                  href="https://web.facebook.com/walkmetru?_rdc=1&_rdr"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="px-2 py-4" />
                </a>
                <a
                  href="https://x.com/walkmetru"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="px-2 py-4" />
                </a>
                <a
                  href="https://www.instagram.com/walkmetru"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="px-2 py-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/walkmetru"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="px-2 py-4" />
                </a>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/6 px-3 mb-5 md:mb-0">
            <ul>
              <li className="font-bold mb-2">Admin</li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Pricing Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Payment and Refund Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Scheduling Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Cancellation and rescheduling policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/6 px-3 mb-5 md:mb-0">
            <ul>
              <li className="font-bold mb-2">About Us</li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  Frequently Asked Question
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white font-thin">
                  We are in the news
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <h2 className="text-xl mb-2 font-normal">
              Subscribe to our newsletter
            </h2>
            <span className="text-white opacity-70">
              Get weekly updates about our courses on your email.
            </span>
            <div className="flex py-3">
              <input
                type="text"
                className="form-control mr-2 px-3 py-2 rounded-l-md border border-gray-300"
                placeholder="Your email"
                required
              />
              <button
                className="bg-green-500 text-white rounded-r-md px-4 py-2"
                type="submit"
              >
                Subscribe
              </button>
            </div>
            <span className="mt-4 font-normal text-center justify-center items-center flex">
              &copy; 2024 Walkmetru. All Rights Reserved.
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
