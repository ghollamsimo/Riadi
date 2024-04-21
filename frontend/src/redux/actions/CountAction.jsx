import Api from "../../api/Api.jsx";
import {failRequest, getListOfCount, makeRequest} from "../Action.js";
import getCookie from "../../helpers/cookie.js";

const {http} = Api()

export const fetchCount = () => {
    return (dispatch) => {
        dispatch(makeRequest())
        const token = getCookie('ACCESS_TOKEN')
        http.get('/count' , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            dispatch(getListOfCount(response.data))
        }) .catch(error => {
            dispatch(failRequest(error.message));
        });
    }
}