import { normalize } from 'normalizr';
import * as schemes from '../../api/Schemes';
import * as cartActions from './cartActions';
import * as Api from '../../api/Api';

export const fetchProductsByIsd = () => async (dispatch, getState) => {
    try {
        const products = getState().entities.products;
        const items = getState().cart.items;

        if (Object.keys(products).length > 1 || Object.keys(items) === 0) {
            return;
        }

        const ids = Object.keys(items);

        dispatch(cartActions.fetchProductsStart());

        const res = await Api.Cart.fetchProductsByIds(ids);
        const { entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(cartActions.fetchProductsOk({
            entities,
        }));
    } catch (error) {
        dispatch(cartActions.fetchProductsError(error.message));
    }
};