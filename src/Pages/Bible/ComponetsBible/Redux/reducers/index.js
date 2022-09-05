import { combineReducers } from "redux";
import bibleReducer from "./bible";

const rootReducer = combineReducers({ bibleReducer });

export default rootReducer;
