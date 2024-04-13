import Api from "../../api/Api.jsx";
import {failRequest, getListOfNotification, makeRequest} from "../Action.js";

const { http } = Api();
export const fetchNotification = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/notifications')
            .then(response => {
                const notif = response.data;
                dispatch(getListOfNotification(notif));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}