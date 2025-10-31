"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeExampleProps {
  code: string
  language: string
  stack?: string
}

export function CodeExample({ code, language, stack }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-100 border-2 border-black p-4 font-mono text-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-3">
          <span className="text-xs font-bold text-gray-600 uppercase">{language}</span>
          {stack && <span className="text-xs font-bold text-gray-600 uppercase">{stack}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold hover:bg-[#FF00A8] transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-auto text-black">
        <code>{code}</code>
      </pre>
    </div>
  )
}
