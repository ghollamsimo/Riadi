import {GET_APPROVED_RIAD} from "../ActionType.js";
import initial from '../initiation.js'

export const ApprovedriadReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_APPROVED_RIAD:
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