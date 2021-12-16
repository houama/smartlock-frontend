import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";
import roomReducer from "./roomReducer";
import auth from "./auth";
import error from "./error";
import bookingReducer from "./bookingReducer";
import userRooms from "./userRooms";
import userSearchUser from "./userSearchUser";
import userBooking from "./userBooking";

const reducers = combineReducers({
  rooms: roomReducer,
  nodes: nodeReducer,
  bookings: bookingReducer,
  auth: auth,
  error: error,
  userRooms: userRooms,
  userSearchUser: userSearchUser,
  userBooking: userBooking,
});

export default reducers;
