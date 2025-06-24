import React from "react";

const features = [
  {
    icon: "/assets/images/feature1.png",
    title: "Chuyển tiền nhanh",
    desc: "Chuyển tiền tức thì, an toàn và tiện lợi.",
  },
  {
    icon: "/assets/images/feature2.png",
    title: "Quản lý tài khoản",
    desc: "Theo dõi số dư, lịch sử giao dịch mọi lúc.",
  },
  {
    icon: "/assets/images/feature3.png",
    title: "Bảo mật cao",
    desc: "Bảo vệ tài khoản với công nghệ tiên tiến.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 px-8" style={{ background: "rgba(26, 26, 26, 1)" }}>
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Tính năng nổi bật</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((f, idx) => (
        <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded shadow">
          <img src={f.icon} alt={f.title} className="h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
          <p className="text-gray-300">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
