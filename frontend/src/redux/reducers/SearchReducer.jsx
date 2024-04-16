import {SEARCH_LIST_RIAD} from "../ActionType.js";
import initial from '../initiation.js'

export const SearchriadReducer = (state = initial, action) => {
    switch (action.type) {
        case SEARCH_LIST_RIAD:
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