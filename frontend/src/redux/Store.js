import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {Reducer} from "./Reducer.js"; // Assuming Reducer is default exported
import {riadReducer} from './reducers/RiadReducer.jsx'
import {thunk} from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ data: Reducer, riadsData:riadReducer });

const middleware = [thunk, logger];

const store = configureStore({
 reducer: rootReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
