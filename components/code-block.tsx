export function CodeBlock() {
  const code = `import { createStore } from 'quantum'

const store = createStore({
  count: 0
})

store.setState({ count: 1 })`

  return (
    <pre className="bg-black border-4 border-black p-6 font-mono text-sm overflow-auto">
      <code className="text-white">
        {code.split("\n").map((line, idx) => (
          <div key={idx}>
            {line.includes("import") && <span className="text-[#FF00A8]">{line}</span>}
            {line.includes("const") && (
              <>
                <span className="text-[#FF00A8]">const</span>
                <span className="text-white"> store </span>
                <span className="text-[#FF00A8]">=</span>
                <span className="text-white"> createStore(</span>
                <span className="text-[#00FFFF]">{"{"}</span>
                <span className="text-white">count: </span>
                <span className="text-[#FF00A8]">0</span>
                <span className="text-[#00FFFF]">{"}"}</span>
                <span className="text-white">)</span>
              </>
            )}
            {line.includes("store") && (
              <>
                <span className="text-white">store.setState</span>
                <span className="text-[#FF00A8]">(</span>
                <span className="text-[#00FFFF]">{"{"}</span>
                <span className="text-white"> count: </span>
                <span className="text-[#FF00A8]">1</span>
                <span className="text-[#00FFFF]"> {"}"}</span>
                <span className="text-[#FF00A8]">)</span>
              </>
            )}
            {!line.includes("import") && !line.includes("const") && !line.includes("store") && (
              <span className="text-gray-500">{line}</span>
            )}
          </div>
        ))}
      </code>
    </pre>
  )
}
