"use client";

import { useState } from "react";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function AssessmentResultsPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);

  const diagnosisInfo = {
    title: "Personalized Assessment Report",
    name: "John Doe",
    stage: "Stage 2 of male pattern hair loss",
    timeline: "5 months",
    possibility: "93%",
    description: "Stage 2 male pattern hair loss is caused by DHT hormone attacking hair follicles. At your stage, most hair follicles are still active. This is the best time to start treatment as there is a very high chance of seeing visible hair growth.",
    basedOn: "Based on 34,567 men treated at Traya that match this profile"
  };

  const rootCauses = [
    { id: "hormonal", title: "Hormonal", description: "Hormonal imbalances and changes" },
    { id: "genetic", title: "Genetic", description: "Hereditary hair thinning patterns" },
    { id: "nutritional", title: "Nutritional", description: "Deficiencies in key nutrients" },
    { id: "stress", title: "Stress", description: "Chronic stress and its effects" }
  ];

  const timeline = [
    { month: "Month 1", highlight: "Control Dandruff", description: "Balance scalp pH and calm inflammation", icon: "🌿" },
    { month: "Month 2", highlight: "Stabilise Hair Fall", description: "Strengthen follicles with active nourishment", icon: "🌱" },
    { month: "Month 3", highlight: "Improve Follicular Health", description: "Kickstart regrowth with topical + internal care", icon: "💪" },
    { month: "Month 4", highlight: "Hair Fall Control", description: "See visible density and coverage gains", icon: "🎯" }
  ];

  const testimonials = [
    {
      name: "Khalid Mazrouei, 23",
      location: "Dubai",
      story: "Traya's approach is quite wholesome and that's why I decided to choose it. I actually saw my dandruff controlled in 2-3 weeks.",
      tags: ["DANDRUFF", "METABOLISM"],
      months: "Month 1 - Month 5"
    },
    {
      name: "Amir Ali, 29",
      location: "Dubai",
      story: "Initially, I tried DIY hacks for hair regrowth. After seeing Traya's ad, I decided to go for it. Now, my hair is healthier and stronger.",
      tags: ["LIFESTYLE", "DIGESTION", "NUTRITION"],
      months: "Month 1 - Month 5"
    },
    {
      name: "Rakesh Menon, 31",
      location: "Abu Dhabi",
      story: "Persistent dandruff made my scalp itchy and flaky. The customised regimen kept things under control within a month.",
      tags: ["DANDRUFF", "LIFESTYLE"],
      months: "Month 1 - Month 5"
    }
  ];

  const faqs = [
    {
      question: "Why are there so many products in the Traya's kit?",
      answer: "Each product is targeted to a specific root cause identified in your assessment. Combining internal and topical care helps you see quicker, sustained results."
    },
    {
      question: "Why is Traya's treatment so expensive?",
      answer: "The regimen is customised with medical-grade formulations, certified doctors, and on-demand coaches. The price reflects proven clinical efficacy and ongoing support."
    },
    {
      question: "What will happen once I buy the plan? When will a hair coach be provided?",
      answer: "Once the plan is confirmed, a dedicated hair coach reaches out within 24 hours to schedule your onboarding call and align on progress milestones."
    }
  ];

  const kitProducts = [
    { name: "Anti-Dandruff Shampoo", tag: "DANDRUFF", description: "Clinically proven molecule for dandruff", price: 300 },
    { name: "Ketoconazole 2% Night Lotion", tag: "DANDRUFF", description: "Advance formula for stubborn dandruff", price: 399 },
    { name: "Hair Ras 01", tag: "HAIR FALL", description: "Herbs for hair nourishment", price: 250 },
    { name: "Hair Ras 01", tag: "HAIR FALL", description: "Herbs for hair nourishment", price: 250 }
  ];

  const subtotal = kitProducts.reduce((sum, item) => sum + item.price, 0);
  const tax = 0;
  const total = subtotal + tax;

  const activeTestimonials = testimonials.slice(testimonialPage * 3, (testimonialPage + 1) * 3);

  return (
    <div className={`min-w-[1440px] bg-[#FAFCF3] ${nunitoSans.className}`}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
      {/* Navigation Bar */}
      <div className="h-[68px] border-b border-[#E6E6E6] bg-white">
        <div className="flex h-full items-center justify-between px-[120px]">
          <div className="text-2xl font-bold text-[#2C2C2A]">Traya.</div>
          <div className="flex items-center gap-6">
            <button className="h-10 px-6 rounded-full bg-[#8EA626] text-sm font-semibold text-white hover:bg-[#798D20]">
              Take The Hair Test™
            </button>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full border border-[#E0E0E0] bg-[#F8F8F8] text-[#666] flex items-center justify-center">?</span>
              <span className="h-9 w-9 rounded-full border border-[#E0E0E0] bg-[#F8F8F8] text-[#666] flex items-center justify-center">🛒</span>
              <span className="h-9 w-9 rounded-full border border-[#E0E0E0] bg-[#F8F8F8] text-[#666] flex items-center justify-center">☰</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
          {/* Diagnosis Info */}
          <div className="w-[812px] mb-[32px]">
            <div className="w-full">
              {/* Assessment Report Title */}
              <div className="w-[312px] h-[24px] mb-[16px]">
                <p className="text-sm font-semibold text-[#2C2C2A]">Assessment Report</p>
              </div>

              {/* User Info */}
              <div className="w-[780px] h-[52px] mb-[24px]">
                <div className="h-[20px] w-full">
                  <p className="text-base text-[#2C2C2A]">John Doe</p>
                </div>
                <div className="h-[20px] w-full">
                  <p className="text-base text-[#2C2C2A]">john.doe@email.com</p>
                </div>
              </div>

              {/* Diagnosis Details */}
              <div className="w-[780px]">
                {/* Diagnosis Summary */}
                <div className="w-[780px] h-[166px] mb-[16px]">
                  <div className="w-[668px] h-full">
                    <p className="text-xl font-bold text-[#2C2C2A] mb-[4px]">
                      Congratulations! You are now one step closer towards better hair health
                    </p>
                    <div className="h-[52px] mt-[16px]">
                      <p className="text-base font-semibold text-[#2C2C2A] mb-[4px]">
                        You are currently on <span className="text-[#8EA626]">stage 2 of male pattern hair loss</span>
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F0BD] px-4 py-1">
                        <p className="text-xs font-semibold text-[#2C5A43]">Start seeing results in 5 months</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[644px] w-[112px] h-[112px]">
                    <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0BD] flex items-center justify-center">
                      <span className="text-4xl text-[#8EA626]">🌿</span>
                    </div>
                  </div>
                </div>

                {/* Hair Regrowth Info */}
                <div className="w-[780px] h-[168px] mb-[20px]">
                  <div className="w-[780px] h-[24px] mb-[16px]">
                    <p className="text-base font-semibold text-[#2C2C2A]">Hair Regrowth Possibility 93%</p>
                  </div>
                  <div className="h-[132px]">
                    <div className="h-3 w-full bg-[#E6E6E6] rounded-full overflow-hidden">
                      <div className="h-full w-[93%] bg-gradient-to-r from-[#8EA626] to-[#5A8F26] rounded-full"></div>
                    </div>
                    <p className="text-sm text-[#4D4E48] mt-[16px]">{diagnosisInfo.description}</p>
                    <p className="text-xs text-[#8C8A83] mt-[8px]">{diagnosisInfo.basedOn}</p>
                  </div>
                </div>

                {/* Root Causes */}
                <div className="w-[780px] h-[200px]">
                  <div className="w-[255px] h-[24px] mb-[16px]">
                    <p className="text-base font-semibold text-[#2C2C2A]">Your Hair Loss Root Causes</p>
                  </div>
                  <div className="h-[160px]">
                    <div className="grid grid-cols-4 gap-[8px]">
                      {rootCauses.map((cause) => (
                        <div key={cause.id} className="flex flex-col items-center p-4">
                          <div className="w-[36px] h-[36px] rounded-full bg-[#E6F0BD] flex items-center justify-center mb-2">
                            {cause.id === "hormonal" && "💊"}
                            {cause.id === "genetic" && "🧬"}
                            {cause.id === "nutritional" && "🥗"}
                            {cause.id === "stress" && "😰"}
                          </div>
                          <p className="text-sm font-semibold text-[#2C2C2A]">{cause.title}</p>
                          <p className="text-xs text-center text-[#5D5E57]">Tap to learn more</p>
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-[24px] mt-[16px]">
                      <p className="text-xs text-[#AA6C22]">A poor diet compromises hair nourishment, creating a higher risk of hair loss.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="w-[812px] h-[269px] mb-[24px]">
            <div className="w-[780px] h-[36px] mb-[24px]">
              <p className="text-lg font-semibold text-[#2C2C2A]">Start Seeing Results In 4 Months</p>
            </div>
            <div className="h-[161px]">
              <div className="flex gap-[8px]">
                {timeline.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-[48px] h-[48px] rounded-full bg-[#E6F0BD] flex items-center justify-center mb-4">
                      <span className="text-2xl text-[#8EA626]">{item.icon}</span>
                    </div>
                    <div className="h-[12px] w-[12px] bg-[#8EA626] rounded-full"></div>
                    <div className="h-[30px] w-[200px] mt-[8px]">
                      <p className="text-xs font-semibold text-[#2C2C2A]">{item.month}</p>
                      <p className="text-xs text-[#2C2C2A]">{item.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hair Coach */}
          <div className="w-[812px] h-[234px] mb-[24px]">
            <div className="w-full h-full">
              <div className="h-[118px] mb-[16px]">
                <div className="w-[646px] h-[48px] ml-[24px]">
                  <div className="h-[24px] w-full mb-[4px]">
                    <p className="text-base font-semibold text-[#2C2C2A]">Hair Coach Unlocked</p>
                  </div>
                  <div className="h-[20px] w-full">
                    <p className="text-sm text-[#4D4E48]">Dedicated hair expert just a call away to support you</p>
                  </div>
                </div>
                <div className="ml-[546px] w-[118px] h-[118px]">
                  <div className="w-full h-full rounded-full bg-[#E6F0BD] flex items-center justify-center">
                    <span className="text-4xl text-[#8EA626]">👩‍⚕️</span>
                  </div>
                </div>
              </div>
              <div className="h-[40px] w-full">
                <div className="flex items-center gap-2 ml-[24px]">
                  <div className="w-6 h-6 rounded-full bg-[#8EA626]"></div>
                  <p className="text-sm font-semibold text-[#2C2C2A]">Opt-in for a call immediately after placing your order.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="w-[812px] h-[222px] mb-[24px]">
            <div className="h-[46px] mb-[16px]">
              <p className="text-lg font-semibold text-[#2C2C2A]">What you get for 262 AED?</p>
            </div>
            <div className="h-[104px]">
              <div className="flex items-center justify-between mb-[20px]">
                <span className="text-sm text-[#4D4E48]">1-Month Customised Kit</span>
                <span className="text-base font-semibold text-[#2C2C2A]">332 AED → 262 AED</span>
              </div>
              <div className="flex items-center justify-between mb-[20px]">
                <span className="text-sm text-[#4D4E48]">Expert Hair Coach 1:1 Consultation</span>
                <span className="text-sm font-semibold text-[#8EA626]">Free</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4D4E48]">Personalised Diet Plan</span>
                <span className="text-sm font-semibold text-[#8EA626]">Free</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="w-[812px] h-[518px]">
            <div className="w-[676px] h-[56px] mb-[16px]">
              <p className="text-xl font-bold text-[#2C2C2A]">Real People, Real Stories</p>
              <p className="text-sm text-[#4D4E48] mt-[4px]">Customers who matched your hair profile</p>
            </div>
            <div className="h-[390px]">
              <div className="flex gap-[24px] h-full">
                {activeTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-[328px] h-[378px]">
                    <div className="h-[160px] w-full rounded-2xl bg-gradient-to-br from-[#8EA626] to-[#E6F0BD] mb-[16px]"></div>
                    <div className="h-[170px]">
                      <div className="h-[40px] mb-[8px]">
                        <p className="text-base font-semibold text-[#2C2C2A]">{testimonial.name}</p>
                        <p className="text-sm text-[#4D4E48]">{testimonial.location}</p>
                      </div>
                      <p className="text-sm text-[#3C3D39] mb-[16px]">{testimonial.story}</p>
                      <div className="flex gap-[8px]">
                        {testimonial.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs font-semibold bg-[#E6F0BD] text-[#2C5A43] px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[8px] w-full mt-[16px]">
                <div className="flex justify-center gap-[8px]">
                  <div className="w-[8px] h-[8px] bg-[#8EA626] rounded-full"></div>
                  <div className="w-[8px] h-[8px] bg-[#D7D6CF] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="w-[812px] h-[336px]">
            <div className="w-[328px] h-[36px] mb-[16px]">
              <p className="text-lg font-semibold text-[#2C2C2A]">FAQs</p>
            </div>
            <div className="h-[220px]">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="mb-[8px]">
                  <button
                    className="w-full flex items-center justify-between py-4 px-2 text-left text-sm font-semibold text-[#1F201C]"
                    onClick={() => setActiveFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-lg text-[#8EA626]">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <p className="px-2 pb-4 text-sm text-[#4D4E48]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kit Container */}
        <div className="w-[432px]" style={{ borderLeft: '1px solid #E6E6E6', padding: '24px' }}>
          <div className="h-[588px] mb-[32px]">
            <div className="h-[80px] mb-[24px]">
              <p className="text-base font-semibold text-[#2C2C2A]">Personalised Plan</p>
              <p className="text-lg font-bold text-[#2C2C2A]">Your 1st Month Kit</p>
              <p className="text-sm text-[#4D4E48] mt-[8px]">Personalised plan backed by science, inspired by nature</p>
            </div>
            <div className="space-y-[16px]">
              {kitProducts.map((product, index) => (
                <div key={index} className="h-[104px] w-full rounded-2xl border border-[#E6E6E6] p-4">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#E6F0BD] flex items-center justify-center text-sm font-semibold text-[#2C5A43] mb-2">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#2C2C2A]">{product.name}</p>
                      <span className="text-xs font-semibold bg-[#E6F0BD] text-[#2C5A43] px-2 py-1 rounded-full mt-1 inline-block">
                        {product.tag}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-[#2C2C2A]">AED {product.price}</span>
                  </div>
                  <p className="text-xs text-[#4D4E48] mt-2">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[155px]">
            <div className="h-[32px] mb-[16px]">
              <p className="text-sm font-semibold text-[#2C2C2A]">Subtotal</p>
            </div>
            <div className="h-[43px] mb-[16px]">
              <p className="text-sm text-[#4D4E48]">Inclusive of all taxes</p>
              <p className="text-sm font-semibold text-[#2C2C2A]">AED {tax}</p>
            </div>
            <div className="h-[48px]">
              <div className="flex items-center justify-between border-t border-[#E6E6E6] pt-3 mb-3">
                <span className="text-base font-bold text-[#2C2C2A]">Total</span>
                <span className="text-base font-bold text-[#2C2C2A]">AED {total}</span>
              </div>
              <button className="w-full h-[48px] rounded-xl bg-[#8EA626] text-sm font-semibold text-[#2F302C] hover:bg-[#798D20]">
                Choose your plan
              </button>
            </div>
            <p className="text-xs text-center text-[#6A6B65] mt-[16px]">
              Secure payment • Free UAE-wide delivery • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}