import {configureStore , combineReducers} from "@reduxjs/toolkit";
import {Reducer} from "./Reducer.js";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";

const routeReducer = combineReducers({data:Reducer})
 const Store = configureStore({reducer: routeReducer ,middleware:[thunk,logger] })

export default Store