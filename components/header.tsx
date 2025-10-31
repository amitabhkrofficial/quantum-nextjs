"use client"

import Link from "next/link"
import { SpotlightSearch } from "./spotlight-search"

export function Header() {
  return (
    <header className="grainy bg-[#F8F8F8] border-b-4 border-black neo-shadow">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black text-black hover:text-[#FF00A8] transition-colors">
          Quantum
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="font-bold text-black border-b-2 border-transparent hover:border-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="font-bold text-black border-b-2 border-transparent hover:border-black transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/contributors"
            className="font-bold text-black border-b-2 border-transparent hover:border-black transition-colors"
          >
            Contributors
          </Link>
          <a
            href="#"
            className="font-bold text-black border-b-2 border-transparent hover:border-black transition-colors"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <SpotlightSearch />
        </div>
      </div>
    </header>
  )
}
