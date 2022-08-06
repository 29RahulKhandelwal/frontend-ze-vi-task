import {combineReducers} from "redux";
import loggedInReducer from "./loggedInReducer";
import crossReducer from "./crossReducer";

const rootReducer=combineReducers({loggedInReducer,crossReducer});

export default rootReducer;