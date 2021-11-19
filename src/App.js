import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Bookings from "./pages/Bookings/Bookings";
import Rooms from "./pages/Rooms/Rooms";
import Nodes from "./pages/Nodes/Nodes";
import NotFound from "./components/Utils/NotFound";
import DashboardUser from "./pages/Dashboard/DashboardUser";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/signin" component={Login} />
            <Route path="/user/home" component={DashboardUser}/>
            <Route path="/bookings" component={Bookings} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/nodes" component={Nodes} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
