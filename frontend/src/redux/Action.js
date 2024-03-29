import {FAIL_REQUEST, GET_DATA_LIST, MAKE_REQUEST} from "./ActionType.js";
import Api from '../api/Api.jsx'
const {http} = Api()

export const makeRequest = () => {
    return{
        type: MAKE_REQUEST
    }
}

export const failRequest = (error) => {
    return{
        type: FAIL_REQUEST,
        payload: error
    }
}

export const getdataList = (data) => {
    return{
        type: GET_DATA_LIST,
        payload : data
    }
}

export const fetchdata = () => {
    return (dispatch) => {
        dispatch(makeRequest())
        http.get('/users').then(response => {
            const datalist = response.data
            dispatch(getdataList(datalist))
        }).catch(error => {
            dispatch(failRequest(error.message))
        })
    }
}