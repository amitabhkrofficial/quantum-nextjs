"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function ContributorsPage() {
  const contributors = [
    {
      name: "Alex Chen",
      role: "Lead Maintainer",
      bio: "Full-stack developer passionate about state management solutions.",
      avatar: "/profile-photo.jpg",
      socials: { github: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Jordan Smith",
      role: "Core Developer",
      bio: "Specialized in performance optimization and DevTools integration.",
      avatar: "/profile-photo.jpg",
      socials: { github: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Sam Patel",
      role: "Community Lead",
      bio: "Dedicated to building an inclusive and welcoming community.",
      avatar: "/profile-photo.jpg",
      socials: { github: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Casey Johnson",
      role: "Documentation",
      bio: "Makes complex concepts simple and accessible to everyone.",
      avatar: "/profile-photo.jpg",
      socials: { github: "#", twitter: "#", linkedin: "#" },
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F8F8] dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl font-black text-black dark:text-white mb-4 leading-tight">Meet the Team</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              Quantum is built by a passionate group of developers committed to making state management effortless.
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contributors.map((contributor) => (
              <div key={contributor.name} className="bg-white dark:bg-[#1a1a1a] border-4 border-black p-8 neo-shadow">
                <div className="flex gap-6 mb-6">
                  <img
                    src={contributor.avatar || "/placeholder.svg"}
                    alt={contributor.name}
                    className="w-20 h-20 border-3 border-black"
                  />
                  <div>
                    <h3 className="text-2xl font-black text-black dark:text-white">{contributor.name}</h3>
                    <p className="font-bold text-[#FF00A8] mb-2">{contributor.role}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{contributor.bio}</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-6 border-t-2 border-black dark:border-gray-700">
                  <a
                    href={contributor.socials.github}
                    className="p-2 bg-black text-white hover:bg-[#FF00A8] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={contributor.socials.twitter}
                    className="p-2 bg-black text-white hover:bg-[#FF00A8] transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={contributor.socials.linkedin}
                    className="p-2 bg-black text-white hover:bg-[#FF00A8] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-[#FF00A8] border-4 border-black p-12 neo-shadow-lg text-center">
            <h2 className="text-4xl font-black text-black mb-4">Want to Contribute?</h2>
            <p className="text-black mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for passionate developers to join the Quantum team. Whether it's code, documentation,
              or community support, your contribution matters.
            </p>
            <button className="px-8 py-4 bg-white text-black font-black border-4 border-black hover:bg-black hover:text-white transition-colors text-lg">
              Join Our Community
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
