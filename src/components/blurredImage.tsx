"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

const ANIMATION_CONFIG = {
  "--blur": "42px",
  "--scale": "1.2",
  "--duration": "1.2s",
} as unknown as React.CSSProperties;

const common = "absolute block max-w-full w-full h-full inset-0 ";

interface Props {
  src: string;
  alt: string;
  height: number;
  placeholder: React.CSSProperties;
  width: number;
  variant: "blur-down" | "blur-up";
}

export const BlurredImage: React.FC<Props> = ({
  alt,
  src,
  height,
  placeholder,
  width,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div
      className={cn(
        "block overflow-hidden relative pb-[var(--aspect-ratio)] translate-z-0"
      )}
      style={{
        ["--aspect-ratio" as keyof React.CSSProperties]: `${
          (height / width) * 100
        }%`,
      }}
    >
      <div
        className={cn(
          common,
          "blur-[var(--blur)]",
          isLoaded ? "opacity-0 scale-100" : "opacity-100 scale-[var(--scale)]",
          "duration-[var(--duration)] ease-[ease] transition-[filter,opacity,transform] will-change-[filter,transform]"
        )}
        style={{ ...placeholder, ...ANIMATION_CONFIG }}
      />
      <div
        className={cn(common, "blur-[var(--blur)] opacity-50 absolute -z-10")}
        style={{ ...placeholder, ...ANIMATION_CONFIG }}
      />
      <Image
        className={cn(
          common,
          "text-[0] transition-all ease-[ease] duration-[1.4s]",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={ANIMATION_CONFIG}
        alt={alt}
        src={src}
        height={1338}
        width={2373}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
