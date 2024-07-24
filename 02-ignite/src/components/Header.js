import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// Named Import
import useOnlineStatus from "../utils/useOnlineStauts"

const Header = () => {
  const [btn, setBtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button className="login" onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login")
          }}>{btn}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header; // Default Export