import axios from 'axios';
import { AsyncStorage } from 'react-native';

// const API_HOST = 'https://internet-store-api.herokuapp.com/api/';
// const API_VERSION = 'v3';

const API_HOST = 'http://192.168.1.102:3111/api/';
const API_VERSION = 'v4';

let _token = null;

export const setToken = async (token) => {
    _token = token;

    await AsyncStorage.setItem('token', token);

    if (_token === 'undefined') {
        _token = null;
    }

    axios.defaults.headers.common.Authorization = _token
        ? `Bearer ${_token}`
        : null;
};

export const removeToken = async () => {
    await AsyncStorage.removeItem('token');

    _token = null;

    axios.defaults.headers.common.Authorization = null;
};

export const getToken = async () => {
    const token = await AsyncStorage.getItem('token');

    return token;
};

export const isAuthenticated = () => {
    if (_token === 'undefined') {
        return false;
    }

    return !!_token;
};


export const initApp = async () => {
    const token = await AsyncStorage.getItem('token');

    await setToken(token);
};

export const Products = {
    fetchProducts(offset, limit) {
        const query = `?offset=${offset}&limit=${limit}`;
        return axios.get(`${API_HOST}${API_VERSION}/products${query}`);
    },

    fetchProductsBySearch(offset, limit, search) {
        const query = `?offset=${offset}&limit=${limit}&search=${search}`;
        return axios.get(`${API_HOST}${API_VERSION}/products${query}`);
    },

    getProductsCount() {
        return axios.get(`${API_HOST}${API_VERSION}/products-count`);
    },

    getProductsCountBySearch(search) {
        const query = `?search=${search}`;
        return axios.get(`${API_HOST}${API_VERSION}/products-count${query}`);
    },
};

export const Cart = {
    fetchProductsByIds(ids) {
        const query = `?ids[]=${ids.join('&ids[]=')}`;

        return axios.get(`${API_HOST}${API_VERSION}/products${query}`);
    },
};

export const Wishes = {
    getWishes() {
        return axios.get(`${API_HOST}${API_VERSION}/wish/`);
    },
    addWish(id) {
        return axios.patch(`${API_HOST}${API_VERSION}/wish/${id}`);
    },
    removeWish(id) {
        return axios.delete(`${API_HOST}${API_VERSION}/wish/${id}`);
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