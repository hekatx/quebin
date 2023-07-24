import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import Providers from "@/lib/providers";

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
    "Helvetica Neue",
    "sans-serif",
  ],
});

export const metadata = {
  title: "Kevin Gonzalez",
  description: "Kevin Gonzalez portfolio :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <Header />
        <Providers>
          <main className={`mx-auto px-10 max-w-5xl w-full py-16`}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
