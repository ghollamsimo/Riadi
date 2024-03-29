import {FAIL_REQUEST, GET_DATA_LIST, MAKE_REQUEST} from "./ActionType.js";

const initial = {
    loading : true,
    datalist: [],
    dataobject: {},
    errormessage: ''
}

export const Reducer = (state = initial , action) => {
    switch (action.type){
        case MAKE_REQUEST: return {...state,loading: true}
        case FAIL_REQUEST: return {...state,loading: false , errormessage: action.payload}
        case GET_DATA_LIST: return {...state,loading: false , errormessage: '' , datalist:action.payload , dataobject: {}}
        default: return state
    }
}