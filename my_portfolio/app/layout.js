"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "./header";
import PageTransition from "./PageTransition";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



function Body({ children }) {
  const { theme } = useTheme();

  return (
    <body className={`${theme === "dark" ? "dark" : ""} ${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <Header />
      <div className="container mx-auto mt-10">
        <PageTransition key={usePathname()}>{children}</PageTransition>
      </div>
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <Body>{children}</Body>
      </html>
    </ThemeProvider>
  );
}
