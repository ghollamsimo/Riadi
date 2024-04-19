import {addReservationList, failRequest, getListOfReservation, makeRequest} from "../Action.js";
import {toast} from "react-toastify";
import Api from "../../api/Api.jsx";
import getCookie from "../../helpers/cookie.js";
const {http} = Api()
export const fetchReservation = () => {
    return async (dispatch) => {
        dispatch(makeRequest())
        const token = getCookie('ACCESS_TOKEN');
        http.get('confirmation/riad', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            dispatch(getListOfReservation(response.data))
        })
    }
}
export const AddReservation = (id ,data) => {
    return async (dispatch) => {
        const token = getCookie('ACCESS_TOKEN');
        dispatch(makeRequest());
        try {
            const response = await http.post(`/confiramtion/reservation/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            dispatch(addReservationList(response.data));
            toast.success('Reservation Has Been Pendding To Confirmed ');
        } catch (error) {
            dispatch(failRequest(error.message));
            toast.error('Failed to add Riad');
        }
    };
};