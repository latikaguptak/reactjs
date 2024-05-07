
import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState("white")

  return (

    <>

      <div className="w-full h-screen duration-5000" style={{backgroundColor: bgColor}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 items-center">
          <div className="flex flex-wrap justify-center gap-3 bg-gray-300 p-3 rounded-full">
            <button className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setbgColor("Green")}
            >
              Green
            </button>
            <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setbgColor("Blue")}
            >Blue</button>
            <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setbgColor("Red")}
            >Red
            </button>
            <button className="rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setbgColor("purple")}
            >
              Purple
            </button>
            <button className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setbgColor("orange")}
            >
              Orange
            </button>
            <button className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setbgColor("yellow")}
            >
              yellow
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
