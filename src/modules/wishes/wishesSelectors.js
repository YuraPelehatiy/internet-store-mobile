import { createSelector } from 'reselect';

const getProductsItems = (state, isLoading) => {
    // We use this condition and the isLoading parameter to force
    // the getProducts selector to recalculate after fetching data
    // from the server.
    if (isLoading) {
        return [];
    }

    return state.wishes.items;
};

const getWishInItemsStatus = (state, id) => state.wishes.items.includes(id);
const getWishInProgressStatus = (state, id) => state.wishes.wishesInProgress.includes(id);

const getProductsEntities = state => state.entities.products;

export const getProducts = createSelector(
    [getProductsItems, getProductsEntities],
    (items, entities) => items.map((id) => {
        if (entities[id] === undefined) {
            return ({
                id,
                title: 'Loading...',
                price: 0,
            });
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

export const getCheckWishInProgress = createSelector(
    [getWishInProgressStatus],
    result => result,
);

export const getCheckWishInItems = createSelector(
    [getWishInItemsStatus],
    result => result,
);