import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import ProductsSection from "./sections/ProductsSection";
import UseCasesSection from "./sections/UseCasesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FAQSection from "./sections/FAQSection";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
