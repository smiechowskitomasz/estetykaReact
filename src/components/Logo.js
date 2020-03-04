import React from "react";
import logo from "../img/kamilprusaczykLogo.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={"nav__logo"}>
      <NavLink to={"/"}>
        <img src={logo} alt="Page Logo" />
      </NavLink>
    </div>
  );
};
export default Logo;
