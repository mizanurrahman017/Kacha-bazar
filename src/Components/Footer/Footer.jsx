import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-green-500 mb-4 md:mb-0">
          KachaBazer
        </h1>

        {/* Center: Text */}
        <p className="text-sm text-gray-300 text-center mb-4 md:mb-0">
          © 2026 KachaBazer. All rights reserved. |{" "}
          <span className="hover:text-green-400 cursor-pointer">Terms</span> |{" "}
          <span className="hover:text-green-400 cursor-pointer">Privacy Policy</span>
        </p>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
