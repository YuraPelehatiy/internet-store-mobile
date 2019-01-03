import axios from 'axios';

export const Products = {
    fetchProducts() {
        return axios.get('https://internet-store-api.herokuapp.com/api/v2/products');
    },
};