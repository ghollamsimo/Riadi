import  {addCommentList, deleteDataList, failRequest, getListOfCount, makeRequest} from "../Action.js";
import {toast} from "react-toastify";
import Api from "../../api/Api.jsx";
import getCookie from "../../helpers/cookie.js";

const {http} = Api()

export const AddComment = (id , data) => {
    return async (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');

        try {
            const response = await http.post(`/createcomment/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            dispatch(addCommentList(response.data));
            toast.success('Comments Added successfully');
        } catch (error) {
            dispatch(failRequest(error.message));
            toast.error('Failed to add Comment');
        }
    };
};

export const DeleteComment = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.delete('/deletecomments/' + id , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                dispatch(deleteDataList(response.data));
                toast.success('Comment deleted successfully')
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const fetchCommentsCount = (id) => {
    return (dispatch) => {
        dispatch(makeRequest())
        const token = getCookie('ACCESS_TOKEN')
        http.get(`/comment/count/${id}` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            dispatch(getListOfCount(response.data))
        }) .catch(error => {
            dispatch(failRequest(error.message));
        });
    }
}