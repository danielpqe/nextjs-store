import type { Metadata } from "next";
import { Roboto } from "next/font/google";
/* import "./globals.css"; */
import Link from "next/link";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "@/sass/globals.sass";

const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
