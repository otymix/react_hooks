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

  const JSX = toShow.map((toShow) => <li>{toShow}</li>)
  return (
    <div className="Users">
      <p>Users</p>
      <ul>
        <li style={{ listStyleType: "none" }}>{JSX}</li>
      </ul>
    </div>
  )
}

export default Users
