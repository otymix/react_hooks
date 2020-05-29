import React from "react"

function Users(props) {
  console.log(
    "USERS ",
    typeof Array.from(props.usrs),
    " SREARCH ",
    props.searched
  )

  let toShow = []

  Array.from(props.usrs).map((filteredName) =>
    filteredName.name.includes(props.searched)
      ? toShow.push(filteredName.name)
      : ""
  )

  const JSX = toShow.map((toShow, key) => (
    <li key={key} style={{ listStyleType: "none" }}>
      {toShow}
    </li>
  ))
  return (
    <div className="Users">
      <p>Users</p>
      <ul>{JSX}</ul>
    </div>
  )
}

export default Users
