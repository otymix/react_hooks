import React, { useState } from "react"

function Counter() {
  let [counter, setCounter] = useState(0)
  let [start, setStart] = useState(false)

  const handleIncrement = () => {
    setCounter((counter) => counter + 1)
    console.log("Incrementing...")
  }

  const stopCounter = (x) => {
    console.log("stopped for :", x)
    clearInterval(x)
  }

  React.useEffect(() => {
    let x = null
    if (start) {
      setCounter(0)
      x = setInterval(handleIncrement, 1000)
    }

    return () => stopCounter(x)
  }, [start])

  return (
    <div className="App">
      <p>Counter Component</p>
      <div className="counterBlock">
        <p>Count : {counter}</p>
      </div>
      <button onClick={() => setStart(!start)}>Start/Restart</button>
    </div>
  )
}

export default Counter
