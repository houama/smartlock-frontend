import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";
import roomReducer from './roomReducer'

const reducers = combineReducers({
    rooms : roomReducer,
    nodes : nodeReducer
});

export default reducers;