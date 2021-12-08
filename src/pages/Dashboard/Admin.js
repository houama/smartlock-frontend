import * as React from "react";
import Appbar from "../../components/Appbar";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";

/*
Dashboard for Admin
*/
const Admin = () => {
  return (
    <div>
      <Appbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar selectedDrawer="Dashboard" />
      </Box>
    </div>
  );
};

export default Admin;
