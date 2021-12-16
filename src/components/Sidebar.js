import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import useStyles from "./styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemText from "@mui/material/ListItemText";
import SpeedIcon from "@mui/icons-material/Speed";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MemoryIcon from "@mui/icons-material/Memory";
import {
  Button,
  Typography,
  ListItem,
  ListItemIcon,
  Divider,
  List,
  Toolbar,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut } from "../state/actions/auth";

// Sidebar List
const menu = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <SpeedIcon />,
  },
  {
    title: "Bookings",
    path: "/admin-bookings",
    icon: <CollectionsBookmarkIcon />,
  },
  {
    title: "Rooms",
    path: "/admin-rooms",
    icon: <MeetingRoomIcon />,
  },
  {
    title: "Nodes",
    path: "/admin-nodes",
    icon: <MemoryIcon />,
  },
];

// Style
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// const useStyles = makeStyles((theme) => ({
//     selectedDrawer: {
//         backgroundColor: secondary
//     }
// }))

const Sidebar = ({ selectedDrawer }) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();

  // React Redux
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  const handleLogout = () => {
    dispatch(logOut());
    history.replace("/");
  };

  // Open drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Close drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    document.body.classList.add(classes.body);
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.appBarTitle}>E - LIBRARY</div>
          <div className={classes.appBarNav}>
            <Button variant="text" component="a">
              <span className={classes.navText}>Home</span>
            </Button>
          </div>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} className={classes.Drawer}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu.map((sidebar, index) =>
            sidebar.title === selectedDrawer ? (
              <ListItem className={classes.selectedDrawer} key={sidebar.title}>
                <ListItemIcon>{sidebar.icon}</ListItemIcon>
                <ListItemText primary={sidebar.title} />
              </ListItem>
            ) : (
              <Link to={sidebar.path} style={{ textDecoration: "none" }}>
                <ListItem button key={sidebar.title}>
                  <ListItemIcon>{sidebar.icon}</ListItemIcon>
                  <ListItemText primary={sidebar.title} />
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Sidebar;
