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

  //let url = "https://jsonplaceholder.typicode.com/users"

  //USE OF PERSONALIZED UseEffect

  const UseFetch = (url) => {
    React.useEffect(() => {
      let users = axios
        .get(url)
        .then((res) => {
          console.log("fetched data", res.data)
          setData(res.data)
        })
        .catch((err) => console.log("Error ", err))
    }, [url])
  }

  UseFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div className="Search">
      <header className="App-header">
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
        {showResult && <Users usrs={data} searched={input} />}
      </header>
    </div>
  )
}

export default Search
