import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useHistory } from 'react-router-dom'

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import BookingAdmin from "./pages/Admins/Bookings/Bookings";
import RoomsAdmin from "./pages/Admins/Rooms/Rooms";
import NodesAdmin from "./pages/Admins/Nodes/Nodes";
import NotFound from "./components/Utils/NotFound";

import Admin from "./pages/Dashboard/Admin";

import History from "./pages/Users/History/History";
import Booking from "./pages/Users/Booking/Booking";
import CreateBooking from "./pages/Users/Booking/CreateBooking"

import Cookies from "js-cookie";
import decode from "jwt-decode";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { useDispatch, useSelector } from "react-redux";

import { setLoggedUser } from "./state/actions/auth"

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token != null) {
      setUser(token.role);
    }else {
      const browserToken = Cookies.get("token")
      if(browserToken != null){
        dispatch(setLoggedUser(browserToken))
      }
      
    }
  }, [token]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/admin-rooms" component={RoomsAdmin} />
            <Route path="/admin-bookings" component={BookingAdmin} />
            <Route path="/admin-nodes" component={NodesAdmin} />
            <Route path="/history" component={History} />
            <Route path="/booking" component={Booking} />
            <Route path="/createbooking" component={CreateBooking}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
