import {combineReducers} from "redux";
import loggedInReducer from "./loggedInReducer";
import crossReducer from "./crossReducer";
import orderReducer from "./orderReducer";

const rootReducer=combineReducers({loggedInReducer,crossReducer,orderReducer});

export default rootReducer;