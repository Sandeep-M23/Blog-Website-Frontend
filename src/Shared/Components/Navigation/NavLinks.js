import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/MyBlogs">
          MY BLOGS
        </NavLink>
      </li>
      <li>
        <NavLink to="/NewBlog">
          NEW BLOG
        </NavLink>
      </li>
      <li>
        <NavLink to="/Login">LOGIN</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
