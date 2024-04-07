import Api from "../../api/Api.jsx";
import {failRequest, getListOfServices, makeRequest} from "../Action.js";
import getCookie from "../../helpers/cookie.js";

const { http } = Api();
export const fetchService = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.get('/services', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const serviceList = response.data;
                dispatch(getListOfServices(serviceList));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
