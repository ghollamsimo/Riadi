import initial from "../initiation.js";
import { GET_RESERVATION_LIST} from "../ActionType.js";

export const ReservationReducer = (state = initial , action)  => {
    switch (action.type) {
        case GET_RESERVATION_LIST:
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