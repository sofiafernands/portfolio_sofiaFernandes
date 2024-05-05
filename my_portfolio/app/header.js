"use client";

import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="font-bold text-xl text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300">
          Sofia Fernandes Portfolio
        </Link>
        <div className="flex space-x-6 items-center">
          <Link href="/project" className="text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-400 transition duration-300">
            Proyectos
          </Link>
          <Link href="/about_me" className="text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-400 transition duration-300">
            Sobre Mí
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 transition duration-300"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
