import axios from 'axios';
import { AsyncStorage } from 'react-native';

const API_HOST = 'https://internet-store-api.herokuapp.com/api/';
const API_VERSION = 'v3';

let _token = null;

export const setToken = async (token) => {
    _token = token;

    await AsyncStorage.setItem('token', token);

    if (_token === 'undefined') {
        _token = null;
    }

    axios.defaults.headers.Authorization = _token
        ? `Bearer ${_token}`
        : null;
};

export const removeToken = async () => {
    await AsyncStorage.removeItem('token');

    _token = null;

    axios.defaults.headers.Authorization = null;
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
    fetchProducts() {
        return axios.get(`${API_HOST}${API_VERSION}/products`);
    },
};

export const Cart = {
    fetchProductsByIds(ids) {
        const query = `?ids[]=${ids.join('&ids[]=')}`;

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