"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function QuantumIntroPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const codeExamples = [
    {
      title: "Define an atom",
      file: "/lib/atoms.js",
      code: `// /lib/atoms.js
import { atom } from 'quantum-state';

// This is your global, observable state.
export const modelStatusAtom = atom('Idle');

// Atoms can hold any value, including objects.
export const csiDataAtom = atom({
  timestamp: null,
  values: [],
});`,
    },
    {
      title: "Read & Write to the atom",
      file: "/components/RunSimulationButton.jsx",
      code: `// /components/RunSimulationButton.jsx
'use client';

import { useAtom } from 'quantum-state';
import { modelStatusAtom } from '@/lib/atoms';

export function RunSimulationButton() {
  const [status, setStatus] = useAtom(modelStatusAtom);

  const handleClick = async () => {
    setStatus('Running...');
    // await runSim();
    setStatus('Idle');
  };

  return (
    <button onClick={handleClick} disabled={status === 'Running...'}>
      {status === 'Running...' ? 'Simulating...' : 'Run Simulation'}
    </button>
  );
}`,
    },
    {
      title: "Read only",
      file: "/components/StatusDisplay.jsx",
      code: `// /components/StatusDisplay.jsx
'use client';

import { useAtomValue } from 'quantum-state';
import { modelStatusAtom } from '@/lib/atoms';

export function StatusDisplay() {
  const status = useAtomValue(modelStatusAtom);

  return (
    <div>
      <strong>Model Status:</strong> {status}
    </div>
  );
}`,
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-[#F8F8F8] dark:bg-[#0a0a0a] min-h-screen">
        {/* Hero Section */}
        <section className="px-6 py-20 md:px-12 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 neo-border neo-shadow p-6 bg-white dark:bg-[#1a1a1a] dark:text-white inline-block">
              quantum-state
            </h1>
            <p className="text-lg md:text-xl font-mono mb-8 text-gray-700 dark:text-gray-300">
              Atomic, Observable State for Server-First Apps.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-100 max-w-3xl">
              State management is too complex.{" "}
              <code className="font-mono bg-black text-white px-2 py-1">quantum-state</code> is a <strong>2kb</strong>,
              zero-dependency state machine for Next.js 14. It is built from the ground up for React Server Components
              (RSC) and the <code className="font-mono bg-black text-white px-2 py-1">use-sync-external-store</code>{" "}
              hook. No boilerplate. No providers. Just state.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-6 py-20 md:px-12 border-t-4 border-black">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Philosophy</h2>
            <p className="text-base md:text-lg mb-12 text-gray-800 dark:text-gray-200">
              <em>
                Other libraries were built for a client-only world. <strong>quantum-state</strong> is server-first.
              </em>
            </p>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="neo-border neo-shadow bg-white dark:bg-[#1a1a1a] p-8">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Atomic & Zero-Boilerplate</h3>
                <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                  No reducers, no actions, no dispatchers. Define a single{" "}
                  <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">'quantum'</code> of state (an atom)
                  and use it anywhere in your app. Your components subscribe directly to only the state they need.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="neo-border neo-shadow bg-white dark:bg-[#1a1a1a] p-8">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">"Quantum" Microtask Batching</h3>
                <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                  Why 2kb? It's all in the scheduler.{" "}
                  <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">quantum-state</code> automatically
                  batches all state updates within a single event loop tick. This provides extreme performance for
                  high-frequency updates (e.g., IoT data streams, financial tickers, or wireless channel simulations)
                  with zero re-render tearing.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="neo-border neo-shadow bg-white dark:bg-[#1a1a1a] p-8">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Server-First Native (RSC)</h3>
                <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                  This is not an old library with a new wrapper. It's built for the App Router. You can safely pass
                  state from Server Components to Client Components. It's free of{" "}
                  <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">'context provider hell.'</code> You
                  don't even need a{" "}
                  <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">&lt;Provider&gt;</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="px-6 py-20 md:px-12 border-t-4 border-black">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Installation</h2>
            <p className="text-base md:text-lg mb-8 text-gray-800 dark:text-gray-200">Add it to your project.</p>

            <div className="relative neo-border neo-shadow bg-black text-white p-6">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>npm install quantum-state</code>
              </pre>
              <button
                onClick={() => handleCopy("npm install quantum-state", 0)}
                className="absolute top-4 right-4 bg-[#ff00a8] text-black p-2 hover:bg-[#ff00cc] transition-colors neo-border"
              >
                {copiedIndex === 0 ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </section>

        {/* Hello World Section */}
        <section className="px-6 py-20 md:px-12 border-t-4 border-black">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">5-Minute "Hello World"</h2>
            <p className="text-base md:text-lg mb-12 text-gray-800 dark:text-gray-200">This is all you need.</p>

            <div className="space-y-16">
              {codeExamples.map((example, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Step {index + 1}: {example.title}
                  </h3>
                  {index === 0 && (
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                      An atom is the smallest possible unit of state. Create one in a central file.
                    </p>
                  )}
                  {index === 1 && (
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                      Use the <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">useAtom</code> hook in
                      any Client Component to get the value and a setter function. It works just like{" "}
                      <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">useState</code>.
                    </p>
                  )}
                  {index === 2 && (
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                      If a component only needs to read the state, use the{" "}
                      <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">useAtomValue</code> hook. This
                      is cheaper and prevents re-renders if the component doesn't write.
                    </p>
                  )}

                  <div className="relative neo-border neo-shadow bg-black text-green-400 p-6">
                    <pre className="font-mono text-xs sm:text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <button
                      onClick={() => handleCopy(example.code, index + 1)}
                      className="absolute top-4 right-4 bg-[#ff00a8] text-black p-2 hover:bg-[#ff00cc] transition-colors neo-border"
                    >
                      {copiedIndex === index + 1 ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                    <p className="text-xs text-gray-400 mt-4">{example.file}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* You're Done Section */}
        <section className="px-6 py-20 md:px-12 border-t-4 border-black">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">You're Done.</h2>
            <div className="neo-border neo-shadow bg-white dark:bg-[#1a1a1a] p-8">
              <p className="text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-100 mb-6">
                Seriously. That's it.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-100 mb-6">
                You now have global state.{" "}
                <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">StatusDisplay</code> and{" "}
                <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">RunSimulationButton</code> are fully
                in sync. You did not wrap your app in a{" "}
                <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1">&lt;Provider&gt;</code>. You did not
                write a reducer.
              </p>
              <p className="text-base md:text-lg font-bold text-black dark:text-white">It just works.</p>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="px-6 py-20 md:px-12 border-t-4 border-black">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Next Steps</h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg">
                Read the{" "}
                <a href="/docs" className="font-bold underline hover:text-[#ff00a8]">
                  Core API
                </a>{" "}
                guide.
              </p>
              <p className="text-base md:text-lg">
                See the{" "}
                <a href="/docs" className="font-bold underline hover:text-[#ff00a8]">
                  Advanced Recipes
                </a>{" "}
                for high-frequency updates.
              </p>
              <p className="text-base md:text-lg">
                Check out the{" "}
                <a href="/docs" className="font-bold underline hover:text-[#ff00a8]">
                  DevTools
                </a>{" "}
                guide.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 md:px-12 border-t-4 border-black">
          <div className="max-w-4xl mx-auto bg-[#ff00a8] dark:bg-[#ff00a8] neo-border neo-shadow p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Ready to eliminate state complexity?</h3>
            <p className="text-base md:text-lg mb-8 text-black">
              Join thousands of developers shipping faster with quantum-state.
            </p>
            <button className="bg-black text-white font-bold text-lg px-8 py-4 neo-border neo-shadow hover:shadow-[10px_10px_0px_#ff00a8] transition-all">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
