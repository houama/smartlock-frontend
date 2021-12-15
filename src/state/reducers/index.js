import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";
import roomReducer from "./roomReducer";
import auth from "./auth";
import error from "./error";
import bookingReducer from "./bookingReducer";
import dashboardReducer from "./dashboardReducer";

const reducers = combineReducers({
  dashboards: dashboardReducer,
  rooms: roomReducer,
  nodes: nodeReducer,
  bookings: bookingReducer,
  auth: auth,
  error: error,
});

export default reducers;
