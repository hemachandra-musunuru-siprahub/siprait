import React, { useState, useEffect } from "react";
import { HeroSection as NewHero } from "@/components/ui/hero-section";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  const words = [
    { text: "AI", color: "text-blue-400" },
    { text: "Business", color: "text-primary" },
    { text: "Digital", color: "text-[#4ade80]" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <NewHero
      title={
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-center w-full whitespace-normal sm:whitespace-nowrap">
          <span>Accelerate Your</span>
          <span className="inline-flex justify-center items-center min-h-[1.25em] px-1 sm:px-1.5 overflow-visible">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`inline-block font-bold ${words[index].color}`}
              >
                {words[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>Transformation</span>
        </div>
      }
      description="We help businesses unlock measurable outcomes with AI. From intelligent automation to custom AI solutions, we build technology that drives real impact."
      actions={[
        { text: "Get a Free Consultation", href: "/contact", variant: "default" },
      ]}
      image={{
        light: "",
        dark: "",
        alt: "SipraHub AI Globe Hero",
      }}
    />
  );
};

export default HeroSection;