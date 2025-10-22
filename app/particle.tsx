"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Particles } from "@/components/ui/particles";

export function ParticlesComponent() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="bg-dark relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="pointer-events-none z-10 text-center text-8xl leading-none font-semibold whitespace-pre-wrap">
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
