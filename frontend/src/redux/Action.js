import {
    MAKE_REQUEST,
    FAIL_REQUEST,
    GET_DATA_LIST,
    DELETE_DATA_LIST,
    ADD_DATA_LIST,
    UPDATE_DATA_LIST, GET_DATA_OBJ
} from "./ActionType.js";
import Api from '../api/Api.jsx';
import {toast} from "react-toastify";

const { http } = Api();

export const makeRequest = () => ({
    type: MAKE_REQUEST
});

export const failRequest = (error) => ({
    type: FAIL_REQUEST,
    payload: error
});

export const getDataList = (data) => ({
    type: GET_DATA_LIST,
    payload: data
});
export const deleteDataList = () => {
    return {
        type: DELETE_DATA_LIST
    }
}
export const addDataList = () => {
    return{
        type: ADD_DATA_LIST
    }
}
export const updateDataList = () => {
    return{
        type: UPDATE_DATA_LIST
    }
}
export const getDataObj = (data) => ({
    type: GET_DATA_OBJ,
    payload: data
});

export const fetchRaids = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/riads')
            .then(response => {
                const riadslist = response.data;
                dispatch(getDataList(riadslist));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/users')
            .then(response => {
                const userList = response.data;
                dispatch(getDataList(userList));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/categories')
            .then(response => {
                const categorieList = response.data;
                dispatch(getDataList(categorieList));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}


export const DeleteCategorie = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/deletecategorie/' + code)
            .then(response => {
                dispatch(deleteDataList());
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}

export const AddCategorie = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.post('/categorie' , data)
            .then(response => {
                dispatch(addDataList(response.data));
                toast.success('Categorie added successfully')

            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}

export const UpdateCategorie = (code , data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.post('/updatecategorie/'+ code , data)
            .then(response => {
                dispatch(updateDataList(response.data));
                toast.success('Categorie added successfully')

            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}