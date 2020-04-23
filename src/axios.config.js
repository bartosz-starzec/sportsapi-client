import axios from "axios";
axios.defaults.baseURL = process.env.API_BASE_URL;
axios.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('apiToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${ token }`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default axios;
