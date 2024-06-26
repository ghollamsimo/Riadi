import {GET_NOTIFICATION_LIST} from "../ActionType.js";
import initial from '../initiation.js'

export const NotificationReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_LIST:
            return {
                ...state,
                loading: false,
                datalist: action.payload,
                errormessage: ''
            };
        default:
            return state;
    }
};