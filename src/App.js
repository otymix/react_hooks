import React, { useState } from "react"

import "./App.css"
import Search from "./Search"

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <p>Users Search</p>
        {true && <Search />}
      </header>
    </div>
  )
}

export default App
