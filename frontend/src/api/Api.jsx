import React from 'react';
import axios from 'axios';

const Api = () => {
    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        headers: { 'content-type': 'application/json'}
    });

    return(
        http
    )
}

export default Api