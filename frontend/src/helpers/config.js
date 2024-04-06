import getCookie from "./cookie.js";

const config = () => {
    const token = getCookie('ACCESS_TOKEN')
    const axiosConfig = {
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': 'http://localhost:5173/'
        }
    }
    return axiosConfig
}

export default config