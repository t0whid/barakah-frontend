import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Logos */}
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={reactLogo} className="h-20 w-20" alt="React logo" />
        </a>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React</h1>

      {/* Counter Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6 flex flex-col items-center space-y-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          count is {count}
        </button>
        <p className="text-gray-600 text-center">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
