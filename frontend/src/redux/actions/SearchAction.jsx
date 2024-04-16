import {failRequest, getListsOfRiads, makeRequest, SearchOfRiad} from "../Action.js";
import getCookie from "../../helpers/cookie.js";
import Api from "../../api/Api.jsx";
const { http } = Api();

export const fetchRaidSearch = (query ) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.get(`/riads/search?query=${query}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const riads = response.data
                dispatch(SearchOfRiad(riads));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
