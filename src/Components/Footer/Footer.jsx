import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="max-w-[1400px] mx-auto px-10 gap-y-10 flex flex-wrap">
        <div className="flex-1 basis-[300px]">
          <a href="" className="text-3xl font-semibold">
            {" "}
            Gr<span className="text-orange-500">O</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2025 &copy; all rights reserved</p>
        </div>
        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
                <a className="hover:text-orange-500 text-zinc-500" href="#">ABout</a>
            </li>
            <li className="mt-6">
                <a className="hover:text-orange-500 text-zinc-500 " href="#">FAQ's</a>
            </li>
        </ul>
        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
                <a className="hover:text-orange-500 text-zinc-500" href="#">SUpport Center</a>
            </li>
            <li className="mt-6">
                <a className="hover:text-orange-500 text-zinc-500 " href="#">FeedBAck</a>
            </li>
            <li className="mt-6">
                <a className="hover:text-orange-500 text-zinc-500 " href="#">Contact Us</a>
            </li>
        </ul>
        <div className="flex-1">
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
            <p className="mt-6 text-zinc-500">
                Question or feedback?<br />
                We'd love to hear from you.
            </p>
            <div className="bg-white p-1 rounded-lg mt-6 flex">
                <input type="email" id="email" autoComplete="off" placeholder="Email Address" className="h-[5vh] pl-4 flex-1 focus:outline-none" />
                <button className="bg-gradient-to-b from-orange-400 to-orange-500 pl-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
                    <IoIosArrowForward/>
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
