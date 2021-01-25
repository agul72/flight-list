import {combineReducers} from "redux";
import {flightReducer} from "./flightReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    flight: flightReducer,
    auth: authReducer
});
