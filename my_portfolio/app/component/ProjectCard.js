"use client";

import Link from "next/link";

export default function ProjectCard({ title, description, href }) {
  return (
    <Link href={href} passHref>
      <div className="bg-gray-100 p-4 rounded-lg shadow cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
