"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    quote: "Quantum is the first state manager that doesn't make me want to pull my hair out.",
    author: "Jane Doe",
    role: "Staff Engineer at Vercel",
    initial: "J",
  },
  {
    id: 2,
    quote: "Finally, a state management solution that actually gets it right. Zero boilerplate, maximum clarity.",
    author: "Alex Johnson",
    role: "Tech Lead at Stripe",
    initial: "A",
  },
  {
    id: 3,
    quote: "2kb of pure genius. Quantum replaced our entire Redux setup and we never looked back.",
    author: "Maria Chen",
    role: "CTO at Figma",
    initial: "M",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <section className="px-8 py-24 bg-[#F8F8F8]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border-4 border-black p-12 neo-shadow-lg">
          <div className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <p className="text-3xl font-black text-black leading-tight mb-12">"{current.quote}"</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black border-3 border-black flex items-center justify-center text-white font-bold text-lg">
                {current.initial}
              </div>
              <div>
                <p className="font-bold text-black">{current.author}</p>
                <p className="text-sm text-gray-600">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex gap-2 mt-8 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsTransitioning(false)
                  }, 500)
                }}
                className={`w-2 h-2 transition-all ${
                  index === currentIndex ? "bg-[#FF00A8] w-8" : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
