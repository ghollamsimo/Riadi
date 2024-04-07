import {GET_REPA_LIST} from "../ActionType.js";
import initial from '../initiation.js'

export const repaReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_REPA_LIST:
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