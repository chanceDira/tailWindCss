import { combineReducers } from "redux";
import activeReducers from "./activeReducers";

const reducers = combineReducers({
    active: activeReducers
})

export default reducers;