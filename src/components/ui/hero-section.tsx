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
        "py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16 lg:px-20",
        "fade-bottom overflow-hidden pb-8"
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
      </div>

      <div className="mx-auto flex max-w-container flex-col gap-4 pt-2 sm:gap-6 relative z-10 text-center">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6 w-full mx-auto">
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 mx-auto">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          <h1 className="relative z-10 inline-block animate-appear text-3xl font-bold tracking-tight leading-tight drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-white">
            {title}
          </h1>

          <p className="text-md relative z-10 max-w-[700px] mx-auto animate-appear font-medium text-white/90 opacity-0 delay-100 sm:text-xl leading-relaxed text-center">
            {description}
          </p>

          <div className="relative z-10 flex animate-appear justify-center gap-6 opacity-0 delay-300 w-full mt-4">
            {actions.map((action, index) => {
              const buttonClasses = "bg-primary text-white hover:bg-primary/95 text-base font-bold px-8 py-5 rounded-lg shadow-lg transition-all duration-300 border-none flex items-center gap-2";
              
              return (
                <Button key={index} variant="default" size="xl" className={buttonClasses} asChild>
                  <a href={action.href} className="flex items-center gap-2">
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
