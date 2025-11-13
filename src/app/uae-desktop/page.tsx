"use client";

import { useState } from "react";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function UAEDesktop() {
  const [activeTab, setActiveTab] = useState("female");
  const [selectedRootCause, setSelectedRootCause] = useState(0);
  const [customerFilter, setCustomerFilter] = useState("all");

  const tabs = [
    { id: "female", label: "Female", icon: "♀️" },
    { id: "male", label: "Male", icon: "♂️" },
    { id: "science", label: "Science", icon: "🔬" },
    { id: "results", label: "Results", icon: "📊" },
  ];

  const rootCauses = [
    { id: 0, title: "Hormonal", description: "Hormonal imbalances and changes" },
    { id: 1, title: "Genetic", description: "Hereditary hair thinning patterns" },
    { id: 2, title: "Nutritional", description: "Deficiencies in key nutrients" },
    { id: 3, title: "Stress", description: "Chronic stress and its effects" },
    { id: 4, title: "Environmental", description: "Environmental factors and toxins" },
  ];

  const newsOutlets = [
    "BBC", "CNN", "Forbes", "Healthline", "WebMD",
    "NYTimes", "WSJ", "TechCrunch", "FastCompany"
  ];

  const products = [
    "Hair Serum", "Shampoo", "Conditioner", "Scalp Serum",
    "Vitamins", "Hair Mask"
  ];

  const holisticFeatures = [
  {
    title: "Personalized Care",
    description: "Customized treatment plans based on your unique hair profile"
  },
  {
    title: "Scientific Approach",
    description: "Backed by 7+ years of trichology research and development"
  },
  {
    title: "Holistic Treatment",
    description: "Addressing both symptoms and root causes of hair issues"
  }
];

  const customerResults = [
    {
      name: "Sarah K.",
      age: "32",
      location: "Dubai",
      rating: 5,
      result: "95% hair regrowth in 6 months",
      type: "female"
    },
    {
      name: "Ahmed R.",
      age: "45",
      location: "Abu Dhabi",
      rating: 5,
      result: "Significant reduction in hair fall",
      type: "male"
    },
    {
      name: "Maria L.",
      age: "28",
      location: "Sharjah",
      rating: 4,
      result: "Stronger, healthier hair",
      type: "female"
    }
  ];

  const comparisonFeatures = [
    "Personalized Treatment Plan",
    "Scientific Hair Analysis",
    "Natural Ingredients",
    "Online Consultation",
    "Money Back Guarantee",
    "24/7 Support",
    "Monthly Progress Tracking",
    "Home Service Available"
  ];

  return (
    <div className={`min-w-[1440px] bg-[#FAFCF3] ${nunitoSans.className}`}>
      {/* Claims Bar */}
      <div className="bg-[#8EA626] text-white text-center py-4 text-sm font-semibold">
        Free UAE-wide shipping on all orders above AED 299
      </div>

      {/* News Appearances */}
      <div className="py-8 px-[189px]">
        <div className="flex flex-wrap items-center justify-center gap-6 h-[132px]">
          {newsOutlets.map((outlet, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-20 bg-white border border-[#F3F3F2] rounded-lg shadow-sm"
            >
              <span className="text-sm font-medium text-[#404040]">{outlet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-[64px] px-[189px] flex gap-[80px] items-center">
        <div className="flex-1">
          <div className="flex gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#8EA626] text-white"
                    : "bg-white text-[#404040] border border-[#F3F3F2] hover:bg-[#E6F0BD]"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>

          <h1 className="text-[35px] font-bold leading-[42px] text-[#2C2C2A] mb-4">
            Regrow Your Hair with <span className="text-[#8EA626]">Scientific Precision</span>
          </h1>

          <p className="text-[17px] leading-[20px] text-[#404040] mb-8 max-w-[600px]">
            Traya UAE offers personalized hair loss treatment plans based on 7+ years of trichology research.
            Join thousands of satisfied customers across Dubai, Abu Dhabi, and the UAE.
          </p>

          <button className="bg-[#8EA626] text-white px-8 py-4 rounded-full font-semibold text-[17px] hover:bg-[#798D20] transition-colors">
            Book Free Consultation
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-[500px] h-[400px] bg-[#E6F0BD] rounded-2xl flex items-center justify-center">
              <div className="text-[#8EA626] text-6xl">🌿</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
              ✨
            </div>
          </div>
        </div>
      </div>

      {/* Essentials Section */}
      <div className="py-[64px] px-[189px]">
        <div className="text-center mb-12">
          <h2 className="text-[24px] font-bold leading-[30px] text-[#2C2C2A] mb-4">
            The Traya Essentials for Hair Health
          </h2>
          <p className="text-[17px] leading-[20px] text-[#404040] max-w-[800px] mx-auto">
            Our comprehensive approach combines science, nutrition, and personalized care to address your unique hair concerns.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-[#F3F3F2] text-center">
            <div className="w-16 h-16 bg-[#E6F0BD] rounded-full flex items-center justify-center text-2xl text-[#8EA626] mx-auto mb-4">
              🔬
            </div>
            <h3 className="text-[20px] font-bold leading-[24px] text-[#2C2C2A] mb-2">Scientific Analysis</h3>
            <p className="text-[14px] leading-[20px] text-[#404040]">Advanced hair & scalp analysis</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#F3F3F2] text-center">
            <div className="w-16 h-16 bg-[#E6F0BD] rounded-full flex items-center justify-center text-2xl text-[#8EA626] mx-auto mb-4">
              🍎
            </div>
            <h3 className="text-[20px] font-bold leading-[24px] text-[#2C2C2A] mb-2">Nutritional Support</h3>
            <p className="text-[14px] leading-[20px] text-[#404040]">Personalized nutrition plans</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#F3F3F2] text-center">
            <div className="w-16 h-16 bg-[#E6F0BD] rounded-full flex items-center justify-center text-2xl text-[#8EA626] mx-auto mb-4">
              💆‍♀️
            </div>
            <h3 className="text-[20px] font-bold leading-[24px] text-[#2C2C2A] mb-2">Expert Care</h3>
            <p className="text-[14px] leading-[20px] text-[#404040]">Trichologist guidance</p>
          </div>
        </div>
      </div>

      {/* Root Cause Analysis */}
      <div className="py-[64px] px-[189px]">
        <div className="text-center mb-12">
          <h2 className="text-[24px] font-bold leading-[30px] text-[#2C2C2A] mb-4">
            Understand Your Root Cause
          </h2>
          <p className="text-[17px] leading-[20px] text-[#404040] max-w-[800px] mx-auto">
            Select the primary factor contributing to your hair concerns for personalized treatment.
          </p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap max-w-[1200px] mx-auto">
          {rootCauses.map((cause, index) => (
            <button
              key={cause.id}
              onClick={() => setSelectedRootCause(cause.id)}
              className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${
                selectedRootCause === cause.id
                  ? "bg-[#8EA626] text-white scale-110"
                  : "bg-white text-[#404040] border border-[#F3F3F2] hover:bg-[#E6F0BD]"
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-[#E6F0BD] flex items-center justify-center text-3xl mb-4">
                {index === 0 && "💊"}
                {index === 1 && "🧬"}
                {index === 2 && "🥗"}
                {index === 3 && "😰"}
                {index === 4 && "🌍"}
              </div>
              <h3 className="text-[17px] font-bold leading-[20px] mb-2">{cause.title}</h3>
              <p className="text-[12px] leading-[16px] text-center">
                {selectedRootCause === cause.id ? cause.description : "Tap to learn more"}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="py-[64px] px-[189px]">
        <div className="text-center mb-12">
          <h2 className="text-[24px] font-bold leading-[30px] text-[#2C2C2A] mb-4">
            Premium Hair Care Products
          </h2>
          <p className="text-[17px] leading-[20px] text-[#404040] max-w-[800px] mx-auto">
            Specially formulated products to support your hair regrowth journey.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 max-w-[1000px] mx-auto">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-64 bg-white rounded-2xl border border-[#F3F3F2] p-4 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-[#E6F0BD] rounded-full flex items-center justify-center text-2xl mb-4">
                  {index === 0 && "💧"}
                  {index === 1 && "🧴"}
                  {index === 2 && "🌊"}
                  {index === 3 && "💆‍♀️"}
                  {index === 4 && "💊"}
                  {index === 5 && "🧖‍♀️"}
                </div>
                <h3 className="text-[17px] font-bold leading-[20px] text-[#2C2C2A]">{product}</h3>
              </div>
            ))}
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-[#F3F3F2] flex items-center justify-center shadow-lg">
            ←
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-[#F3F3F2] flex items-center justify-center shadow-lg">
            →
          </button>
        </div>
      </div>

      {/* Holistic Solution */}
      <div className="py-[64px] px-[189px] bg-white">
        <div className="text-center mb-12">
          <h2 className="text-[24px] font-bold leading-[30px] text-[#2C2C2A] mb-4">
            Our Holistic Solution
          </h2>
          <p className="text-[17px] leading-[20px] text-[#404040] max-w-[800px] mx-auto">
            Complete hair care approach addressing multiple aspects of hair health.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {holisticFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl border border-[#F3F3F2]">
              <div className="w-12 h-12 bg-[#E6F0BD] rounded-full flex items-center justify-center text-xl mb-4">
                {index === 0 && "🎯"}
                {index === 1 && "🔬"}
                {index === 2 && "🌱"}
              </div>
              <h3 className="text-[17px] font-bold leading-[20px] text-[#2C2C2A] mb-2">{feature.title}</h3>
              <p className="text-[14px] leading-[20px] text-[#404040]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-[64px] px-[189px] bg-[#2C2C2A] text-white">
        <div className="text-center">
          <h3 className="text-[20px] font-bold leading-[24px] mb-4">Traya UAE</h3>
          <p className="text-[14px] leading-[20px] text-gray-300 mb-8">
            Regrow your hair with scientific precision across UAE
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <span>Dubai</span>
            <span>Abu Dhabi</span>
            <span>Sharjah</span>
            <span>Al Ain</span>
          </div>
        </div>
      </div>
    </div>
  );
}