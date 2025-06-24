import React from "react";

const testimonials = [
  {
    avatar: "/assets/images/avatar1.png",
    name: "Nguyễn Văn A",
    feedback: "Dịch vụ tuyệt vời, giao diện dễ sử dụng và rất tiện lợi.",
  },
  {
    avatar: "/assets/images/avatar2.png",
    name: "Trần Thị B",
    feedback: "Tôi rất hài lòng với các sản phẩm và hỗ trợ khách hàng.",
  },
  {
    avatar: "/assets/images/avatar3.png",
    name: "Lê Văn C",
    feedback: "Ứng dụng giúp tôi quản lý tài chính hiệu quả hơn.",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 px-8" style={{ background: "rgba(26, 26, 26, 1)" }}>
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Khách hàng nói gì?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-gray-800 rounded shadow p-6 flex flex-col items-center">
          <img src={t.avatar} alt={t.name} className="h-16 w-16 rounded-full mb-4" />
          <p className="text-gray-300 italic mb-2">"{t.feedback}"</p>
          <span className="font-semibold text-white">{t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
