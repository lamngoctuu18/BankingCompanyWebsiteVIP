import React from "react";

const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16"
    style={{ background: "rgba(26, 26, 26, 1)" }}>
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Ngân hàng số hiện đại cho mọi người</h1>
      <p className="text-lg text-gray-300 mb-6">
        Quản lý tài chính dễ dàng, an toàn và tiện lợi với giải pháp ngân hàng số của chúng tôi.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Bắt đầu ngay</button>
    </div>
    <img src="/assets/images/hero-illustration.png" alt="Hero" className="w-full max-w-md mt-8 md:mt-0" />
  </section>
);

export default HeroSection;
