import initial from "../initiation.js";
import {GET_COUNT_LIST} from "../ActionType.js";

export const CountReducer = (state = initial , action)  => {
    switch (action.type) {
        case GET_COUNT_LIST:
            return {
                ...state,
                loading: false,
                datalist: action.payload,
                errormessage: ''
            };
        default:
            return state;
    }
}