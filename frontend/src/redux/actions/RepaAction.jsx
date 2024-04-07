import Api from "../../api/Api.jsx";
import {failRequest,  getListOfRepa , makeRequest} from "../Action.js";

const { http } = Api();
export const fetchRepas = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/repas')
            .then(response => {
                dispatch(getListOfRepa(response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}