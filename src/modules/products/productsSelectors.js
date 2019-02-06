import { createSelector } from 'reselect';

const getProductsIds = state => state.products.products;
const getProductById = (state, id) => state.entities.products[id];
const getProductsEntities = state => state.entities.products;

export const getProducts = createSelector(
    [getProductsIds, getProductsEntities],
    (products, entities) => products.map(id => entities[id]),
);

export const getProduct = createSelector(getProductById, result => result);

export const getDownloadedProductsCount = createSelector(getProductsIds, result => result.length);