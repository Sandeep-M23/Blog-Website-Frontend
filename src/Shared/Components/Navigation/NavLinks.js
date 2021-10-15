import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import "./NavLinks.css";

const NavLinks = () => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/MyBlogs">MY BLOGS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/NewBlog">NEW BLOG</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/Login">LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;
