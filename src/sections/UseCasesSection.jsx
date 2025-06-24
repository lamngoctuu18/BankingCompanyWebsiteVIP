import React from "react";

const useCases = [
  {
    image: "/assets/images/usecase1.png",
    title: "Thanh toán hóa đơn",
    desc: "Thanh toán điện, nước, internet chỉ với vài thao tác.",
  },
  {
    image: "/assets/images/usecase2.png",
    title: "Gửi tiết kiệm",
    desc: "Tích lũy tài sản an toàn, sinh lời hiệu quả.",
  },
  {
    image: "/assets/images/usecase3.png",
    title: "Đầu tư thông minh",
    desc: "Đa dạng sản phẩm đầu tư phù hợp nhu cầu.",
  },
];

const UseCasesSection = () => (
  <section id="usecases" className="py-16 px-8" style={{ background: "rgba(26, 26, 26, 1)" }}>
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Ứng dụng thực tế</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {useCases.map((u, idx) => (
        <div key={idx} className="flex flex-col items-center bg-gray-800 rounded shadow p-6">
          <img src={u.image} alt={u.title} className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">{u.title}</h3>
          <p className="text-gray-300">{u.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default UseCasesSection;
