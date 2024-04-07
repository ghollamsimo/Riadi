import { GET_SERVICE_LIST} from "../ActionType.js";
import initial from '../initiation.js'

export const serviceReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_SERVICE_LIST:
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