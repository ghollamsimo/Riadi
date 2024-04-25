import getCookie from "../../helpers/cookie.js";
import {
    addDataList,
    deleteDataList,
    failRequest,
    getDataList,
    getListsOfRiads, loading,
    makeRequest,
    updateDataList
} from "../Action.js";
import Api from '../../api/Api.jsx'
import {toast} from "react-toastify";
import loadingdata from "../../components/Loadingdata.jsx";

const {http} = Api();
export const fetchRaids = (pageNum = 1) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.get(`/riads?page=${pageNum}`, {
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

export const fetchAdminRaids = (pageNum = 1) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get(`/adminriad?page=${pageNum}`)
            .then(response => {
                const riads = response.data
                dispatch(getListsOfRiads(riads));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};

export const fetchRiad = (id) => {
    return async (dispatch) => {
        dispatch(makeRequest());
        try {
            const response = await http.get('/riad/' + id);
            const riad = response.data;
            dispatch(getListsOfRiads(riad));
            dispatch(loading(false));
        } catch (error) {
            dispatch(failRequest(error.message));
        }
    };
};

export const UpdateStatusOfRiad = (id, data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.post('/approvedriad/' + id, data)
            .then(response => {
                dispatch(updateDataList(response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const UpdateRiad = (payload) => {
    const {id, data} = payload;
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.post('/updateraid/' + id, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                dispatch(updateDataList(response.data));
                toast.success('Riad Updated Successfully')

            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const DeleteRiads = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.delete('/deleteriad/' + id, {
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
export const AddRiad = (data, token) => {
    return async (dispatch) => {
        dispatch(makeRequest());
        try {
            const response = await http.post('/createriad', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            dispatch(addDataList(response.data));
            toast.success('Riad Added successfully');
        } catch (error) {
            dispatch(failRequest(error.message));
            toast.error('Failed to add Riad');
        }
    };
};