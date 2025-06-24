import React from "react";

const faqs = [
  {
    question: "Làm thế nào để mở tài khoản?",
    answer: "Bạn có thể mở tài khoản trực tuyến chỉ với vài bước đơn giản trên website hoặc ứng dụng.",
  },
  {
    question: "Tôi có thể chuyển tiền quốc tế không?",
    answer: "Dịch vụ chuyển tiền quốc tế hiện đã có trên hệ thống của chúng tôi.",
  },
  {
    question: "Bảo mật tài khoản như thế nào?",
    answer: "Chúng tôi sử dụng công nghệ bảo mật tiên tiến để bảo vệ tài khoản của bạn.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 px-8" style={{ background: "rgba(26, 26, 26, 1)" }}>
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Câu hỏi thường gặp</h2>
    <div className="max-w-2xl mx-auto space-y-6">
      {faqs.map((f, idx) => (
        <div key={idx} className="border-b border-gray-700 pb-4">
          <h3 className="text-lg font-semibold mb-2 text-white">{f.question}</h3>
          <p className="text-gray-300">{f.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQSection;
