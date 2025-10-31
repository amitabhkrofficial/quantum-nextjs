"use client"

import { useEffect, useState } from "react"
import { Search, Sun, Moon } from "lucide-react"

export function SpotlightSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = [
    { title: "Installation", href: "/docs#installation", category: "Getting Started" },
    { title: "Quick Start", href: "/docs#quickstart", category: "Getting Started" },
    { title: "Core Concepts", href: "/docs#concepts", category: "Core" },
    { title: "Contributors", href: "/contributors", category: "Community" },
    { title: "Advanced Usage", href: "/docs#advanced", category: "Advanced" },
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    setIsDark(savedTheme === "dark")
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  const filteredResults = searchResults.filter((result) =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-700 border-2 border-black dark:border-white rounded-none hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
      >
        <Search size={16} />
        <span className="text-sm text-gray-600 dark:text-gray-300">Search...</span>
        <span className="text-xs text-gray-400 dark:text-gray-500">Cmd+K</span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 bg-white dark:bg-slate-700 border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Spotlight Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 dark:bg-white/20 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-slate-700 border-4 border-black dark:border-white neo-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b-4 border-black dark:border-white flex items-center gap-2">
              <Search size={20} className="dark:text-white" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-lg font-bold outline-none dark:text-white dark:placeholder-gray-400"
              />
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, idx) => (
                  <a
                    key={idx}
                    href={result.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 border-b-2 border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-bold">{result.category}</div>
                    <div className="font-bold text-black dark:text-white">{result.title}</div>
                  </a>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">No results found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
