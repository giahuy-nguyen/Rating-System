import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import logo from "C:/Users/Huyyyy/rating-system/src/assets/logo.png";
import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <button
      style={{
        display: "flex",
        backgroundColor: "DarkSlateGray",
        alignItems: "center",
        color: "white",
        padding: "15px 22px",
        border: "ridge",
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 15,
        fontSize: "medium",
        fontWeight: "700",
        transition: "0.2",
        "&:hover": {
          background: "#efefef",
          color: "#808080",
        },
      }}
    >
      LOGIN
    </button>
  );
}
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            <img src={logo} alt="mainLogo" width={200} height={80} />
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <NavBtn>{/* <NavBtnLink to="/Login">LOGIN</NavBtnLink> */}</NavBtn>
        <Link to="/Login">
          <LoginBtn></LoginBtn>
        </Link>
      </Nav>
    </>
  );
};

export default Navbar;
