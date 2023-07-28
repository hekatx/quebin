"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { CSSProperties, useLayoutEffect, useRef } from "react";
import { AnimatedBlur } from "@/lib/blur";

AnimatedBlur.addStyle();

const ANIMATION_CONFIG = {
	"--blur": "42px",
	"--scale": "1.5",
	"--duration": "1.2s",
} as unknown as CSSProperties;

const common = "absolute block max-w-full w-full h-full inset-0";

interface IImageProps {
	src: string;
	alt: string;
	height: number;
	placeholder: CSSProperties;
	width: number;
	variant: "blur-down" | "blur-up";
}

export const BetterBlurredImage: React.FC<IImageProps> = ({
	alt,
	src,
	height,
	placeholder,
	width,
}) => {
	const ref = useRef<HTMLImageElement | null>(null);

	// @ts-expect-error told you
	let anim;

	useLayoutEffect(() => {
		if (ref.current && window !== undefined) {
			anim = new AnimatedBlur(alt, ref.current, { duration: 800, steps: 5 });
			anim.update();
		}
	}, []);

	return (
		<div
			className={cn("block relative overflow-hidden  translate-z-0")}
			style={{
				["--aspect-ratio" as keyof React.CSSProperties]: `${
					(height / width) * 100
				}%`,
				...ANIMATION_CONFIG,
			}}
		>
			<div
				className={cn(common, `h-[${height}px] blur-[var(--blur)]`)}
				style={{ ...placeholder, ...ANIMATION_CONFIG }}
			/>
			<Image
				ref={ref}
				className={cn(common, "text-[0] opacity-0 w-full h-full")}
				style={{ ...ANIMATION_CONFIG, width: "100%", height: "100%" }}
				alt={alt}
				src={src}
				height={height}
				width={width}
				onLoad={() => {
					// @ts-expect-error told you
					anim.play(AnimatedBlur.BLUR_MODE.BLUR);

					// @ts-expect-error told you
					anim.play(AnimatedBlur.BLUR_MODE.UNBLUR);
				}}
			/>
		</div>
	);
};
