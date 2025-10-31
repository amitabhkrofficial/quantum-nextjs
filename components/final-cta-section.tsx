"use client"

import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section className="w-full py-24 bg-[#FF00A8]">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-black text-black mb-8 tracking-tight">STOP FIGHTING YOUR STATE.</h2>

        <Link href="/quantum-intro">
          <button className="px-8 py-4 bg-white text-black font-black border-4 border-black neo-shadow hover:shadow-none transition-shadow text-lg">
            Start Building Now
          </button>
        </Link>
      </div>
    </section>
  )
}
