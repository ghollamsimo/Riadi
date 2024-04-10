import Api from "../../api/Api.jsx";
import {failRequest, getListsOfApprovedRiads, makeRequest} from "../Action.js";

const { http } = Api();

export const fetchApprovedRaids = (pageNum = 1) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get(`/approvedriads?page=${pageNum}`)
            .then(response => {
                const riads = response.data
                dispatch(getListsOfApprovedRiads(riads));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};