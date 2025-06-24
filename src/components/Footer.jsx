import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 px-8">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/assets/images/logo.png" alt="Logo" className="h-8 mr-3" />
        <span className="font-bold text-lg">Banking Website</span>
      </div>
      <div className="text-gray-400">
        © {new Date().getFullYear()} Banking Website. All rights reserved.
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Zalo</a>
        <a href="#" className="hover:text-blue-400">Liên hệ</a>
      </div>
    </div>
  </footer>
);

export default Footer;
