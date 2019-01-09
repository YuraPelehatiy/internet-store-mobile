import axios from 'axios';

const API_HOST = 'https://internet-store-api.herokuapp.com/api/';
const API_VERSION = 'v2';

export const Products = {
    fetchProducts() {
        return axios.get(`${API_HOST}${API_VERSION}/products`);
    },
};

export const Cart = {
    fetchProductsByIds(ids) {
        const query = `ids[]=${ids.join('&ids[]=')}`;

        return axios.get(`${API_HOST}${API_VERSION}/products${query}`);
    },
};

export const Auth = {
    login(body) {
        return axios.post(`${API_HOST}${API_VERSION}/auth/login`, body);
    },

    register(body) {
        return axios.post(`${API_HOST}${API_VERSION}/auth/register`, body);
    },

    remember(body) {
        return axios.post(`${API_HOST}${API_VERSION}/auth/remember`, body);
    },
};

export const User = {
    getCurrent() {
        return axios.get(`${API_HOST}${API_VERSION}/users/current`);
    },
};