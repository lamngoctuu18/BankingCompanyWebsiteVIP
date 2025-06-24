import React from "react";

const products = [
  {
    image: "/assets/images/product1.png",
    name: "Thẻ tín dụng",
    desc: "Mua sắm dễ dàng, hoàn tiền hấp dẫn.",
  },
  {
    image: "/assets/images/product2.png",
    name: "Vay tiêu dùng",
    desc: "Lãi suất ưu đãi, thủ tục nhanh chóng.",
  },
  {
    image: "/assets/images/product3.png",
    name: "Tiết kiệm online",
    desc: "Lãi suất cao, gửi rút linh hoạt.",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-16 px-8" style={{ background: "rgba(26, 26, 26, 1)" }}>
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Sản phẩm của chúng tôi</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((p, idx) => (
        <div key={idx} className="bg-gray-800 rounded shadow p-6 flex flex-col items-center">
          <img src={p.image} alt={p.name} className="h-24 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
          <p className="text-gray-300">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductsSection;
