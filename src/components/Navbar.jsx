import React from "react";

const Navbar = () => (
  <nav
    className="flex items-center justify-between mx-auto"
    style={{
      width: "1596px",
      height: "95px",
      marginTop: "50px",
      marginLeft: "162px",
      marginRight: "162px",
      padding: "20px 34px",
      borderRadius: "100px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgba(38, 38, 38, 1)",
      background: "rgba(28, 28, 28, 1)",
      boxSizing: "border-box",
    }}
  >
    <div className="flex items-center">
      <img
        src="/assets/images/Logo.png"
        alt="Logo"
        style={{ width: "155.83px", height: "40px", objectFit: "contain" }}
      />
    </div>
    <ul
      className="flex items-center justify-between"
      style={{
        gap: "26px",
        width: "371px",
        height: "51px",
      }}
    >
      <li style={{ flex: 1, height: "51px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a
          href="#features"
          className="text-gray-200 hover:text-blue-400 font-medium text-center w-full"
          style={{
            height: "51px",
            lineHeight: "51px",
            borderRadius: "25.5px",
            transition: "background 0.2s",
            display: "block",
          }}
        >
          Home
        </a>
      </li>
      <li style={{ flex: 1, height: "51px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a
          href="#products"
          className="text-gray-200 hover:text-blue-400 font-medium text-center w-full"
          style={{
            height: "51px",
            lineHeight: "51px",
            borderRadius: "25.5px",
            transition: "background 0.2s",
            display: "block",
          }}
        >
          Careers
        </a>
      </li>
      <li style={{ flex: 1, height: "51px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a
          href="#usecases"
          className="text-gray-200 hover:text-blue-400 font-medium text-center w-full"
          style={{
            height: "51px",
            lineHeight: "51px",
            borderRadius: "25.5px",
            transition: "background 0.2s",
            display: "block",
          }}
        >
          About
        </a>
      </li>
      <li style={{ flex: 1, height: "51px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a
          href="#faq"
          className="text-gray-200 hover:text-blue-400 font-medium text-center w-full"
          style={{
            height: "51px",
            lineHeight: "51px",
            borderRadius: "25.5px",
            transition: "background 0.2s",
            display: "block",
          }}
        >
          Security
        </a>
      </li>
    </ul>
    <div className="flex items-center" style={{ gap: "30px" }}>
      <button
        className="bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
        style={{ width: "208px", height: "55px" }}
      >
        Đăng nhập
      </button>
      <button
        className="bg-white text-blue-600 rounded-full hover:bg-blue-100 transition font-semibold border border-blue-600"
        style={{ width: "208px", height: "55px" }}
      >
        Đăng ký
      </button>
    </div>
  </nav>
);

export default Navbar;
