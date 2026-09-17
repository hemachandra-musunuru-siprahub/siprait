"use client";

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import aiBg from "@/assets/hero-bg.jpg";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow" | "glass" | "outline-white";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: ReactNode;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({ badge, title, description, actions }: HeroProps) {
  return (
    <section
      className={cn(
        "relative text-white",
        "py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-20",
        "fade-bottom overflow-hidden pb-10"
      )}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aiBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
      </div>

      <div className="mx-auto flex max-w-container flex-col gap-4 pt-2 sm:gap-6 relative z-10 text-center">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6 w-full mx-auto max-w-6xl px-2 sm:px-4">
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 mx-auto">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          <h1 className="relative z-10 inline-block animate-appear text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-tight sm:leading-tight drop-shadow-2xl text-white max-w-full">
            {title}
          </h1>

          <p className="text-sm sm:text-lg md:text-xl relative z-10 max-w-[700px] mx-auto animate-appear font-medium text-white/90 leading-relaxed text-center px-2">
            {description}
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row animate-appear justify-center items-center gap-4 sm:gap-6 w-full mt-4">
            {actions.map((action, index) => {
              const buttonClasses = "w-full sm:w-auto bg-primary text-white hover:bg-primary/95 text-base font-bold px-8 py-5 rounded-lg shadow-lg transition-all duration-300 border-none flex items-center justify-center gap-2";
              
              return (
                <Button key={index} variant="default" size="xl" className={buttonClasses} asChild>
                  <a href={action.href} className="flex items-center justify-center gap-2">
                    {action.text}
                    <ArrowRightIcon className="h-5 w-5 text-white stroke-[2.5]" />
                  </a>
                </Button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
