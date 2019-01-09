import { createSelector } from 'reselect';

const getProductsItems = state => state.cart.items;
const getProductsEntities = state => state.entities.products;


export const getProducts = createSelector(
    [getProductsItems, getProductsEntities],
    (items, entities) => Object.keys(items).map((id) => {
        if (entities[id] === undefined) {
            return {
                id,
                title: 'Loading...',
                price: 0,
            };
        }

        return entities[id];
    }),
);

export const getCountItems = createSelector(
    [getProductsItems],
    (items) => {
        const ids = Object.keys(items);
        return ids.reduce((acc, id) => acc + items[id].count, 0);
    },
);

export const getTotalPrice = createSelector(
    [getProducts, getProductsItems],
    (products, items) => (
        products.reduce((acc, product) => acc + product.price * items[product.id].count, 0)
    ),
);