export function Footer() {
  return (
    <footer className="grainy bg-[#F8F8F8] border-t-4 border-black mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-black text-black mb-4">Quantum</h3>
            <p className="text-sm text-gray-700">Brutally simple state management for Next.js</p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-4">Docs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-gray-700 hover:text-black transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">© 2025 Quantum. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
