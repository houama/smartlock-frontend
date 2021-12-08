import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AppbarUser = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const auth = useSelector((state) => state.auth);

  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuClick = (e) => {
    history.push(e.target.name);
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* Menu when mobile display */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem name="/dashboard" onClick={onMenuClick}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={onMenuClick}>
                <Typography textAlign="center">History</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <LocalLibraryIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: {xs: "none", md: 'flex'} }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, fontWeight: 1000, display: { xs: 'none', md: 'flex' } }}
          >
            E-Library
          </Typography>
          {/* Menu when desktop display */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexgrow: 1, display: { xs: "flex", md: "none" } }}
          >
            E-Library
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              name="/dashboard"
              sx={{ my: 2, ml: 2, color: "primary", display: "block" }}
              onClick={onMenuClick}
            >
              Home
            </Button>
            <Button
              name="/history"
              sx={{ my: 2, ml: 2, color: "primary", display: "block" }}
              onClick={onMenuClick}
            >
              History
            </Button>
          </Box>
          <Typography sx={{mr: 2}}>
            {auth != null && auth.name + " (" + auth.nim + ")"}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppbarUser;
