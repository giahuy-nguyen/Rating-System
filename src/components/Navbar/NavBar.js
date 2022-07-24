import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <button
      style={{
        display: "flex",
        backgroundColor: "DarkSlateGray",
        alignItems: "center",
        color: "white",
        padding: "20px 20px",
        border: "ridge",
        borderRadius: 5,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 50,
        fontSize: "medium",
        fontWeight: "700",
        transition: "0.5",
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
            <img src={logo} alt="mainLogo" width={200} height={75} />
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
// import React from "react";
// import { Link } from "react-router-dom";
// const navbar = () => {
//   return (
//     <div>
//       <li>
//         <Link to="/">Dogs</Link>
//       </li>
//       <li>
//         <Link to="/cats">Cats</Link>
//       </li>
//       <li>
//         <Link to="/sheeps">Sheeps</Link>
//       </li>
//       <li>
//         <Link to="/goats">Goats</Link>
//       </li>
//     </div>
//   );
// };
// export default navbar;
