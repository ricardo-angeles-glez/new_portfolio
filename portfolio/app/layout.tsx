import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Angeles | UX/UI Portfolio",
  description: "Portfolio of UX/UI Designer Ricardo Angeles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
