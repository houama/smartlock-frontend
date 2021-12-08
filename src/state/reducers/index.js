import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";
import roomReducer from "./roomReducer";
import auth from "./auth";
import error from "./error";

const reducers = combineReducers({
  rooms: roomReducer,
  nodes: nodeReducer,
  auth: auth,
  error: error,
});

export default reducers;
