import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";
import roomReducer from "./roomReducer";
import auth from "./auth";
import error from "./error";
import bookingReducer from "./bookingReducer";

const reducers = combineReducers({
  rooms: roomReducer,
  nodes: nodeReducer,
  bookings: bookingReducer,
  auth: auth,
  error: error,
});

export default reducers;
