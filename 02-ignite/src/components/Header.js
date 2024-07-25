import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// Named Import
import useOnlineStatus from "../utils/useOnlineStauts"

const Header = () => {
  const [btn, setBtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-28 h-25" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/cart">Cart</Link></li>
          <button className="login" onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login")
          }}>{btn}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header; // Default Export