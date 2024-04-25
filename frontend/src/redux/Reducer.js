import {
    ADD_COMMENT_LIST,
    ADD_DATA_LIST, ADD_RESERVATION_LIST,
    DELETE_DATA_LIST,
    FAIL_REQUEST,
    GET_DATA_LIST, GET_DATA_OBJ, LOADING,
    MAKE_REQUEST,
    UPDATE_DATA_LIST
} from "./ActionType.js";
import initial from './initiation.js'
export const Reducer = (state = initial , action) => {
    switch (action.type){
        case MAKE_REQUEST: return {...state,loading: true}
        case LOADING : return {...state,loading: false}
        case FAIL_REQUEST: return {...state,loading: false , errormessage: action.payload}
        case GET_DATA_LIST: return {...state,loading: false , errormessage: '' , datalist:action.payload , dataobject: {}}
        case DELETE_DATA_LIST: return {...state,loading: false}
        case ADD_DATA_LIST: return {...state,loading:false}
        case ADD_COMMENT_LIST: return {...state,loading:false}
        case ADD_RESERVATION_LIST: return {...state,loading:false}
        case UPDATE_DATA_LIST: return {...state,loading:false}
        case GET_DATA_OBJ: return {...state,loading:false , dataobject: action.payload }
        default: return state
    }
}

