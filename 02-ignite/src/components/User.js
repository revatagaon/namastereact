import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count] = useState(0)
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Name : {name}</h1>
      <h3>Location: {location}</h3>
      <h3>Contact : {contact}</h3>
    </div>
  )
}
export default User;