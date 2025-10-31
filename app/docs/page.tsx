"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CodeExample } from "@/components/code-example"
import { ChevronRight } from "lucide-react"

export default function DocsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")

  const sections = [
    {
      title: "Getting Started",
      items: ["Installation", "Quick Start", "Configuration"],
    },
    {
      title: "Core Concepts",
      items: ["State Machine", "Actions", "Selectors"],
    },
    {
      title: "Advanced",
      items: ["DevTools", "Time Travel", "Middleware"],
    },
  ]

  const codeExamples = {
    javascript: `import { createStore } from 'quantum'

const store = createStore({
  state: { count: 0 },
  actions: {
    increment: () => ({ count: state.count + 1 }),
    decrement: () => ({ count: state.count - 1 })
  }
})`,
    typescript: `import { createStore, Store } from 'quantum'

interface State {
  count: number
}

const store: Store<State> = createStore({
  state: { count: 0 },
  actions: {
    increment: () => ({ count: state.count + 1 }),
    decrement: () => ({ count: state.count - 1 })
  }
})`,
    react: `import { useQuantum } from 'quantum/react'

export function Counter() {
  const { state, actions } = useQuantum(store)
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={actions.increment}>+</button>
      <button onClick={actions.decrement}>-</button>
    </div>
  )
}`,
    vue: `import { useQuantum } from 'quantum/vue'

export default {
  setup() {
    const { state, actions } = useQuantum(store)
    
    return {
      state,
      actions
    }
  }
}`,
  }

  const stackGuides = {
    react: "Use the @quantum/react package for React integration with hooks support.",
    vue: "Use the @quantum/vue package for Vue 3 composition API integration.",
    svelte: "Use the @quantum/svelte package for Svelte store integration.",
    angular: "Use the @quantum/angular package for dependency injection integration.",
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F8F8] dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl font-black text-black dark:text-white mb-4 leading-tight">Read Docs</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              Learn everything you need to know about Quantum state management. From installation to advanced patterns.
            </p>
          </div>

          {/* Docs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1a1a1a] border-4 border-black p-6 neo-shadow sticky top-8">
                <h3 className="font-black text-lg text-black dark:text-white mb-6">Documentation</h3>
                <nav className="space-y-6">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-bold text-black dark:text-white text-sm mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:translate-x-1 transition-all"
                            >
                              <ChevronRight size={14} />
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Installation Card */}
              <div className="bg-white dark:bg-[#1a1a1a] border-4 border-black p-8 neo-shadow">
                <h2 className="text-3xl font-black text-black dark:text-white mb-4">Installation</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Get started with Quantum in less than 5 minutes. Our simple installation process has you up and
                  running with zero configuration.
                </p>
                <CodeExample code="npm install quantum" language="bash" />
              </div>

              {/* Language Selector */}
              <div className="bg-white dark:bg-[#1a1a1a] border-4 border-black p-8 neo-shadow">
                <h2 className="text-3xl font-black text-black dark:text-white mb-6">Code Examples</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(codeExamples).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-4 py-2 font-bold border-2 border-black uppercase text-xs transition-colors ${
                        selectedLanguage === lang
                          ? "bg-black text-white"
                          : "bg-white dark:bg-[#0a0a0a] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <CodeExample
                  code={codeExamples[selectedLanguage as keyof typeof codeExamples]}
                  language={selectedLanguage}
                />
              </div>

              {/* How to Use with Different Stacks */}
              <div className="bg-white dark:bg-[#1a1a1a] border-4 border-black p-8 neo-shadow">
                <h2 className="text-3xl font-black text-black dark:text-white mb-6">Use with Different Stacks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(stackGuides).map(([stack, guide]) => (
                    <div key={stack} className="bg-gray-50 dark:bg-[#0a0a0a] border-2 border-black p-4">
                      <h3 className="font-bold text-black dark:text-white text-lg capitalize mb-2">{stack}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{guide}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Concepts Card */}
              <div className="bg-white dark:bg-[#1a1a1a] border-4 border-black p-8 neo-shadow">
                <h2 className="text-3xl font-black text-black dark:text-white mb-4">Core Concepts</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-black dark:text-white mb-2">State Machine</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Quantum uses a predictable state machine pattern to ensure your application state is always
                      consistent and predictable.
                    </p>
                  </div>
                  <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
                    <h3 className="font-bold text-black dark:text-white mb-2">Actions</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Define pure functions that transform your state. Actions are the only way to update state in
                      Quantum.
                    </p>
                  </div>
                  <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
                    <h3 className="font-bold text-black dark:text-white mb-2">Selectors</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Create derived state from your store using selectors. They're memoized and incredibly efficient.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-[#FF00A8] border-4 border-black p-8 neo-shadow">
                <h3 className="text-2xl font-black text-black mb-4">Ready to Build?</h3>
                <p className="text-black mb-6 leading-relaxed">
                  Start using Quantum in your next project. It takes just minutes to set up.
                </p>
                <button className="px-6 py-3 bg-white text-black font-bold border-4 border-black hover:bg-black hover:text-white transition-colors">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
