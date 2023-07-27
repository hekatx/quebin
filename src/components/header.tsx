import Link from "next/link";

export function Header() {
	return (
		<header className="w-full h-20 relative">
			<div className="fixed flex border-b border-neutral-500 border h-20 z-20 w-full items-center justify-center backdrop-blur-[20px] backdrop-saturate-150 dark:bg-[#0D0D1050]">
				<nav
					className={`w-full mx-auto px-10 max-w-5xl flex gap-10 justify-end items-center font-semibold `}
				>
					<Link href="/" className="mr-auto animate-text">
						<span className="font-semibold">kg.</span>
					</Link>
					<Link href="/blog" className="animate-text">
						Blog
					</Link>
					<Link href="/craft" className="animate-text">
						Craft
					</Link>
					<Link className="animate-text" href="/art">
						Art
					</Link>
				</nav>
			</div>
		</header>
	);
}
