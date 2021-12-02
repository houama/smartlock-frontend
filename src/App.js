import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
// import Bookings from "./pages/Admins/Bookings/Bookings";
// import Rooms from "./pages/Rooms/Rooms";
// import Nodes from "./pages/Nodes/Nodes";
import NotFound from "./components/Utils/NotFound";
import Admin from "./pages/Dashboard/Admin";

import History from "./pages/Users/History/History";
import Booking from "./pages/Users/Booking/Booking"

import Cookies from "js-cookie";
import decode from "jwt-decode";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { useDispatch, useSelector } from 'react-redux'

function App() {

  const token = useSelector((state) => state.auth)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if(token != null){
      setUser(token.role)
    }
    console.log(user)
  }, [token])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/history" component={History}/>
            <Route path="/booking" component={Booking}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
