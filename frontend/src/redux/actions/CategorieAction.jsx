import Api from "../../api/Api.jsx";
import {failRequest,  getListOfCategories, makeRequest} from "../Action.js";

const { http } = Api();
export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/categories')
            .then(response => {
                const categorieList = response.data;
                dispatch(getListOfCategories(categorieList));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}