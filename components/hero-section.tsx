"use client"

import Link from "next/link"
import { CodeBlock } from "./code-block"

export function HeroSection() {
  return (
    <section className="px-8 py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-black leading-tight">
            State Management.
            <br />
            Finally Solved.
          </h1>

          <p className="text-xl text-gray-800 leading-relaxed max-w-md">
            Quantum is a 2kb, zero-dependency state machine for Next.js 14. Brutally simple. Wickedly fast.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/quantum-intro">
              <button className="px-6 py-3 bg-[#FF00A8] text-black font-bold border-4 border-black neo-shadow hover:shadow-none transition-shadow">
                Get Started
              </button>
            </Link>
            <Link href="/docs">
              <button className="px-6 py-3 bg-white text-black font-bold border-4 border-black neo-shadow hover:shadow-none transition-shadow">
                Read Docs
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Code Block */}
        <div>
          <CodeBlock />
        </div>
      </div>
    </section>
  )
}
