
//Reducer'laruı bir arada toplama

import {combineReducers} from "redux";
import userReducer from "./userReducer"

const rootReducer = combineReducers ({
    userReducer
});

export default rootReducer;