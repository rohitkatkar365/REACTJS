import React from "react";
import { Link ,NavLink} from "react-router-dom";
import './../App.css';

function Navbar() {
  return (
    <>
      <ul className="nav">
      <li><NavLink className="navlink"  to="/about">About</NavLink></li>
      <li><NavLink className="navlink" to="/">Home</NavLink></li>
      <li><NavLink className="navlink" to="/contact">Contact</NavLink></li>
      <li><NavLink className="navlink" to="/filter">Filter</NavLink></li>
      <li><NavLink className="navlink" to="/user/ram">User</NavLink></li>
      <li>
        <NavLink className='navlink' to="/login">Login</NavLink>
      </li>
      </ul>
    </>
  );
}

export default Navbar;
