import {deleteDataList, failRequest, getListOfFavorites, loading, makeRequest} from "../Action.js";
import getCookie from "../../helpers/cookie.js";
import Api from "../../api/Api.jsx";
import {toast} from "react-toastify";
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
                dispatch(loading(false));

            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
export const DeleteFavorite = (id) => {
    return (dispatch) => {
        dispatch(makeRequest())
        const token = getCookie('ACCESS_TOKEN');
        http.delete(`/delete/wishlist/${id}` , {
            Authorization: `Bearer ${token}`
        }).then(response => {
            dispatch(deleteDataList( response.data));
            toast.success('Favorite deleted successfully')
        })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    }
}