import {GET_RIAD_LIST} from "../ActionType.js";
import initial from '../initiation.js'

export const riadReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_RIAD_LIST:
            return {
                ...state,
                loading: false,
                datalist: action.payload,
                errormessage: ''
            };
        // Add other riad-related cases as needed
        default:
            return state;
    }
};