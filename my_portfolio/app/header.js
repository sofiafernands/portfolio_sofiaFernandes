import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="font-bold text-xl text-gray-800 hover:text-gray-600 transition duration-300">
          Sofia Fernandes Portfolio
        </Link>
        <div className="flex space-x-6">
          <Link href="/project" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Proyectos
          </Link>
          <Link href="/about_me" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Sobre Mí
          </Link>
        </div>
      </nav>
    </header>
  );
}
