import initial from "../initiation.js";
import {GET_FAVORITE_LIST} from "../ActionType.js";

export const FavoriteReducer = (state = initial , action)  => {
    switch (action.type) {
        case GET_FAVORITE_LIST:
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