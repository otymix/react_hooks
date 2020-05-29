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

  const handleStart = () => {
    setStart(!start)
  }

  const handleStop = () => {
    setStart(!start)
    setCounter(counter)
  }

  const handleReset = () => {
    setCounter(0)
    if (!start) setStart(!start)
  }

  React.useEffect(() => {
    let x = null
    if (start) {
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
      <button disabled={start} onClick={() => handleStart()}>
        Start
      </button>
      <button disabled={!start} onClick={() => handleStop()}>
        Pause
      </button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  )
}

export default Counter
