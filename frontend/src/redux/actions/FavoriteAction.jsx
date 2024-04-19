import {failRequest, getListOfFavorites,  makeRequest} from "../Action.js";
import getCookie from "../../helpers/cookie.js";
import Api from "../../api/Api.jsx";
const { http } = Api();

export const fetchFavorite = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.get('/wishlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                dispatch(getListOfFavorites( response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
