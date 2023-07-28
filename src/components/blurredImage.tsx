"use client";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

const ANIMATION_CONFIG = {
	"--blur": "42px",
	"--scale": "1.5",
	"--duration": "1.2s",
} as unknown as React.CSSProperties;

const common =
	"absolute block max-w-full w-full h-full inset-0 blur-[var(--blur)] scale[var(--scale)]";

interface IImageProps {
	src: string;
	alt: string;
	height: number;
	placeholder: React.CSSProperties;
	width: number;
	variant: "blur-down" | "blur-up";
}

export const BlurredImage: React.FC<IImageProps> = ({
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
				"block relative overflow-hidden pb-[var(--aspect-ratio)] translate-z-0",
				isLoaded && "is-loaded",
			)}
			style={{
				["--aspect-ratio" as keyof React.CSSProperties]: `${
					(height / width) * 100
				}%`,
				...ANIMATION_CONFIG,
			}}
		>
			<div className={common} style={{ ...placeholder, ...ANIMATION_CONFIG }} />
			<Image
				className={cn(
					common,
					"text-[0] opacity-0",
					isLoaded && "opacity-100 scale-100 blur-0",
					"duration-[var(--duration)] ease-[ease] transition-[filter,opacity,transform] will-change-[filter,transform]",
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
