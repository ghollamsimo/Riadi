import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {Reducer} from "./Reducer.js";
import {riadReducer} from './reducers/RiadReducer.jsx'
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import {categorieReducer} from "./reducers/CategorieReducer.jsx";
import {serviceReducer} from "./reducers/ServiceReducer.jsx";
import {repaReducer} from "./reducers/RepaReducer.js";
import {ApprovedriadReducer} from "./reducers/ApprovedRiadReducer.jsx";
import {NotificationReducer} from "./reducers/NotificationReducer.jsx";
import {SearchriadReducer} from "./reducers/SearchReducer.jsx";
import {FavoriteReducer} from "./reducers/FavoriteReducer.jsx";
import {ReservationReducer} from "./reducers/ReservationReducer.jsx";

const rootReducer = combineReducers({ data: Reducer, riadsData:riadReducer  , categorieData:categorieReducer , serviceData: serviceReducer , repaData: repaReducer , approvedRiads: ApprovedriadReducer , notification: NotificationReducer , searchRiad:SearchriadReducer , favorite:  FavoriteReducer , reservations: ReservationReducer});

const middleware = [thunk, logger];

const store = configureStore({
 reducer: rootReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
