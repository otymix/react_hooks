import React, { useState } from "react"

import Users from "./Users"
import axios from "axios"

function Search() {
  const [data, setData] = useState([])
  const [input, setInput] = useState([])
  const [showResult, setshowResult] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("submitted", input)
    //if (input)
    setshowResult((showResult) => true)
  }

  React.useEffect(() => {
    let users = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log("Error ", err))
  }, [])
  return (
    <div className="Search">
      <header className="App-header">
        <p>Name to search</p>

        {showResult && <Users usrs={data} searched={input} />}

        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Name :
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <input type="submit" value="search" />
        </form>
      </header>
    </div>
  )
}

export default Search
