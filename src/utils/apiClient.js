import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.COUNTRIES_API,
    timeout: 5000
});

export default apiClient
