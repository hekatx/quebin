import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const childWidthStyles = "w-full mx-auto px-10 max-w-5xl";

export const metadata = {
  title: "Kevin Gonzalez",
  description: "Kevin Gonzalez portfolio :)",
};

function Header() {
  return (
    <header className="w-full h-20 relative">
      <div className="fixed flex border-b h-20 z-20 w-full items-center justify-center backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
        <nav
          className={`${childWidthStyles} flex gap-10 justify-end items-center font-semibold `}
        >
          <Link href="/" className="mr-auto">
            <span className="font-semibold">kg.</span>
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/craft">Craft</Link>
          <Link href="/art">Art</Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full">
          <Header />{" "}
          <section className={`${childWidthStyles} w-full py-6`}>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
