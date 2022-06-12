// import React, { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Ratings from "../components/AdminPages/Ratings";
// import Services from "../components/AdminPages/Services";
// import Users from "../components/AdminPages/Users";
// import AdminSidebar from "../components/AdminSidebar";

// class Admin extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/admin" element={<AdminSidebar />} />
//           <Route path="/admin/services" element={<Services />} />
//           <Route path="/admin/ratings" element={<Ratings />} />
//           <Route path="/admin/users" element={<Users />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// export default Admin;
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarRateIcon from "@mui/icons-material/StarRate";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import logo from "C:/Users/Huyyyy/rating-system/src/assets/logo.png";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AdminSidebar = (props) => {
  let navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="" noWrap component="div">
            <img src={logo} alt="mainLogo" width={200} height={87} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", marginTop: "40px" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HandymanIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => navigate("/admin/ratings", { replace: true })}
            >
              <ListItemIcon>
                <StarRateIcon />
              </ListItemIcon>
              <ListItemText primary="Ratings" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="a" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default AdminSidebar;
