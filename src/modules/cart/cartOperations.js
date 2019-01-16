import { normalize } from 'normalizr';
import * as schemes from '../../api/Schemes';
import * as cartActions from './cartActions';
import * as Api from '../../api/Api';

export const fetchProductsByIds = () => async (dispatch, getState) => {
    try {
        const products = getState().entities.products;
        const items = getState().cart.items;

        const ids = Object.keys(items);
        const fetchIds = ids.map(id => (products[id] === undefined) && id);
        fetchIds.sort();
        fetchIds.splice(fetchIds.indexOf(false));

        if (fetchIds.length === 0) {
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