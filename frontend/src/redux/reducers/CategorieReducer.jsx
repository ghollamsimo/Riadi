import {GET_CATEGORIE_LIST} from "../ActionType.js";
import initial from '../initiation.js'

export const riadReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_CATEGORIE_LIST:
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