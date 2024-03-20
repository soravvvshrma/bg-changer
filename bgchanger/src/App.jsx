import { useState } from 'react'


function App() {
const [color, setcolor] = useState("red")

  return (
    <div className="w-full h-screen duration-100"
    style={{backgroundColor: color}}> 
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2  ">
      <div className="flex flex-wrap justify-center bg-white px-4 py-2 gap-2 rounded-xl shadow-lg  ">
        <button className="outline-none ">test</button>
      </div>
    </div>
    </div>
  )
}

export default App
