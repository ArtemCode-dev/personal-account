import axios from "axios";

const PORT = 3001

export const APP_BASE_URL = `http://localhost:${PORT}`;

const $api = axios.create({
    baseURL: APP_BASE_URL,
    headers: {
        common: {
            accept: 'application/json'
        }
    }
});

export { $api };