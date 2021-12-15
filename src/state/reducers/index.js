import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";
import roomReducer from "./roomReducer";
import auth from "./auth";
import error from "./error";
import bookingReducer from "./bookingReducer";
import dashboardReducer from "./dashboardReducer";
import userRooms from "./userRooms";
import userSearchUser from "./userSearchUser";

const reducers = combineReducers({
  dashboards: dashboardReducer,
  rooms: roomReducer,
  nodes: nodeReducer,
  bookings: bookingReducer,
  auth: auth,
  error: error,
  userRooms: userRooms,
  userSearchUser: userSearchUser,
});

export default reducers;
