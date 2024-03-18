import axios from 'axios';

const Api = () => {
    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: { 'content-type': 'application/json'}
    });

    return {
        http
    }
}

export default Api