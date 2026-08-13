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
        <div className="flex items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap">
          <span>Accelerate Your</span>
          <span className="relative inline-flex justify-center items-center w-[4.5em] h-[1.2em]">
            <AnimatePresence>
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute ${words[index].color}`}
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