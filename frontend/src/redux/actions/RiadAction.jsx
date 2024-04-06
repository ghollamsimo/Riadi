import getCookie from "../../helpers/cookie.js";
import {addDataList, deleteDataList, failRequest, getListsOfRiads, makeRequest, updateDataList} from "../Action.js";
import Api from '../../api/Api.jsx'
import {toast} from "react-toastify";

const { http } = Api();

export const fetchRaids = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.get('/riads', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const riads = response.data
                dispatch(getListsOfRiads(riads));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
export const UpdateStatusOfRiad = (id , data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.post('/approvedriad/' + id , data)
            .then(response => {
                dispatch(updateDataList(response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const UpdateRiad = (id , data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.put('/updateraid/'+ id , data , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                dispatch(updateDataList(response.data));
                toast.success('Service Updated Successfully')

            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const DeleteRiad = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.delete('/deleteriad/' + id , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                dispatch(deleteDataList(response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const AddRiad = (data) => {
    return async (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        try {
            const response = await http.post('/createriad', data ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(addDataList(response.data));
            toast.success('Riad added successfully');
        } catch (error) {
            dispatch(failRequest(error.message));
        }
    };
};