import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import ProductsSection from "../sections/ProductsSection";
import UseCasesSection from "../sections/UseCasesSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import FAQSection from "../sections/FAQSection";

const Home = () => (
  <div
    className="min-h-screen w-full flex flex-col items-center"
    style={{
      background: "rgba(26, 26, 26, 1)",
      minWidth: "1920px",
      color: "#fff",
    }}
  >
    <div
      className="w-full"
      style={{
        maxWidth: "1920px",
        background: "rgba(26, 26, 26, 1)",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  </div>
);

export default Home;
