import {
    MAKE_REQUEST,
    FAIL_REQUEST,
    GET_DATA_LIST,
    DELETE_DATA_LIST,
    ADD_DATA_LIST,
    UPDATE_DATA_LIST, GET_DATA_OBJ, GET_RIAD_LIST, GET_CATEGORIE_LIST
} from "./ActionType.js";
import Api from '../api/Api.jsx';
import {toast} from "react-toastify";
import getCookie from "../helpers/cookie.js";

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

export const getListsOfRiads = (data) => ({
    type: GET_RIAD_LIST,
    payload: data
});
export const getListOfCategories= (data) => ({
    type: GET_CATEGORIE_LIST,
    payload : data
})
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

//--------ADMIN DASHBOARD------------
export const fetchStats = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/stats')
            .then(response => {
                const stats = response.data;
                dispatch(getDataList(stats));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
export const fetchRepas = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/repas')
            .then(response => {
                const repas = response.data;
                dispatch(getDataList(repas));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};

export const DeleteRepa = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.delete('/deleterepa/' + id)
            .then(response => {
                dispatch(deleteDataList(response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
export const AddRepa = (data) => {
    return async (dispatch) => {
        dispatch(makeRequest());
        try {
            const response = await http.post('/createrepa', data);
            dispatch(addDataList(response.data));
            toast.success('Categorie added successfully');
        } catch (error) {
            dispatch(failRequest(error.message));
        }
    };
};
export const UpdateRepas = (id , data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.post('/updaterepa/' + id , data)
            .then(response => {
                dispatch(updateDataList(response.data));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}

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
export const DeleteCategories = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.delete('/deletecategorie/' + id)
            .then(response => {
                dispatch(deleteDataList(response.data));
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
export const UpdateCategorie = (id , data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.post('/updatecategorie/'+ id , data)
            .then(response => {
                dispatch(updateDataList(response.data));
                toast.success('Categorie added successfully')

            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
}
//-------------END ADMIN------------
export const fetchRaid = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        http.get('/riad' + id)
            .then(response => {
                const riadlist = response.data;
                dispatch(getDataList(riadlist));
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
export const AddService = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.post('/createservice', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                dispatch(addDataList(response.data));
                toast.success('Service Added successfully');
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
export const fetchService = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.get('/services', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const serviceList = response.data;
                dispatch(getDataList(serviceList));
            })
            .catch(error => {
                dispatch(failRequest(error.message));
            });
    };
};
export const UpdateServices = (id , data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.post('/updateservice/'+ id , data , {
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
export const DeleteServices = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        const token = getCookie('ACCESS_TOKEN');
        http.delete('/deleteservice/' + id , {
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
