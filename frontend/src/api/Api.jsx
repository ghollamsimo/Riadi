import axios from 'axios';
import config from "../helpers/config.js";

const Api = () => {
    const http = axios.create(config());
    return {
        http
    }
}

export default Api