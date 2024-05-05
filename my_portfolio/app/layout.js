import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Sofia Fernandes",
  description: "Sofia Fernandes' portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Header />
        <div className="container mx-auto mt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
