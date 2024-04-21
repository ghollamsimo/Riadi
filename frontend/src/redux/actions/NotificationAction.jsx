import Api from "../../api/Api.jsx";
import {deleteDataList, failRequest, getListOfNotification, makeRequest} from "../Action.js";
import getCookie from "../../helpers/cookie.js";
import {toast} from "react-toastify";

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
export const DeleteNotification = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.delete(`/delete/notification/${id}` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            dispatch(deleteDataList(response.data));
            toast.success('Notification Deleted SuccessFully')
        }).catch(error => {
            dispatch(failRequest(error.message));
            toast.error('Failed to Delete Notification');
        })
    }
}