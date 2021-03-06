import { normalize } from 'normalizr';
import * as schemes from '../../api/Schemes';
import * as cartActions from './cartActions';
import * as Api from '../../api/Api';

export const fetchProductsByIds = () => async (dispatch, getState) => {
    try {
        const products = getState().entities.products;
        const items = getState().cart.items;
        const isLoading = getState().cart.isLoading;

        // Get ids of undefined products to fetch
        const ids = Object.keys(items);
        let fetchIds = ids.map((id) => {
            if (products[id] === undefined) {
                return id;
            }

            return false;
        });
        fetchIds = fetchIds.sort();
        if (fetchIds.indexOf(false) !== -1) {
            fetchIds.splice(fetchIds.indexOf(false));
        }


        if (fetchIds.length === 0 || isLoading) {
            return;
        }

        dispatch(cartActions.fetchProductsStart());

        const res = await Api.Cart.fetchProductsByIds(fetchIds);
        const { entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(cartActions.fetchProductsOk({
            entities,
        }));
    } catch (error) {
        dispatch(cartActions.fetchProductsError(error.message));
    }
};