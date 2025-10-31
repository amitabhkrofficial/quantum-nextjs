import { Server, Lock } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="px-8 py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Card 1: Zero-Boilerplate Setup (2x1) */}
          <div className="md:col-span-2 bg-white border-4 border-black p-8 neo-shadow hover:shadow-none transition-shadow">
            <h3 className="text-2xl font-black text-black mb-6">Zero-Boilerplate Setup</h3>
            <pre className="bg-gray-100 border-2 border-black p-4 font-mono text-sm overflow-auto mb-4">
              <code className="text-black">
                <div>{"npm install quantum"}</div>
                <div className="mt-2">
                  <span className="text-[#FF00A8]">{"const store ="}</span>
                  <span className="text-black">{" createStore"}</span>
                </div>
              </code>
            </pre>
          </div>

          {/* Card 2: Blazing Fast (1x1) */}
          <div className="bg-white border-4 border-black p-8 neo-shadow hover:shadow-none transition-shadow flex flex-col items-center justify-center">
            <div className="text-5xl font-black text-[#FF00A8]">2kb</div>
            <div className="text-sm font-bold text-black mt-2">Gzipped</div>
          </div>

          {/* Card 3: Server-First (1x1) */}
          <div className="bg-white border-4 border-black p-8 neo-shadow hover:shadow-none transition-shadow flex flex-col items-center justify-center">
            <Server size={48} className="text-black mb-3" />
            <div className="text-lg font-black text-black text-center">Server-First</div>
          </div>

          {/* Card 4: Immutable (1x1) */}
          <div className="bg-white border-4 border-black p-8 neo-shadow hover:shadow-none transition-shadow flex flex-col items-center justify-center">
            <Lock size={48} className="text-black mb-3" />
            <div className="text-lg font-black text-black text-center">Immutable</div>
          </div>

          {/* Card 5: DevTools Included (2x1) */}
          <div className="md:col-span-2 bg-white border-4 border-black p-8 neo-shadow hover:shadow-none transition-shadow">
            <h3 className="text-2xl font-black text-black mb-6">DevTools Included</h3>
            <div className="bg-black border-2 border-black p-4 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-mono text-sm">{"> Quantum DevTools"}</div>
                <div className="text-[#00FFFF] font-mono text-xs mt-2">{"State Inspector | Time Travel | Actions"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
