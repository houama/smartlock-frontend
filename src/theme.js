import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A8E8",
    },
    secondary: {
      main: "#007EA7",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h4: {
      fontWeight: "bolder",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          marginLeft: "10px",
          color: "#ffffff",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme
