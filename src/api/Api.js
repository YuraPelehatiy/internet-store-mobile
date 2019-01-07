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