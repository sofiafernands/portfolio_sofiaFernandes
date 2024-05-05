"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "./header";
import PageTransition from "./PageTransition";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto mt-10">
          <PageTransition key={pathname}>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
