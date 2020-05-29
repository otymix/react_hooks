import React, { useState } from "react"

import "./App.css"
import Counter from "./Counter"

function App() {
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    console.log("Toggle Clicked")
    console.log("SHOW", show)
    setShow((show) => !show)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hooks Counter</p>

        <button onClick={handleToggle}>Toggle</button>
        {show && <Counter />}
      </header>
    </div>
  )
}

export default App
