import { normalize } from 'normalizr';
import * as Api from '../../api/Api';
import * as actions from './productsActions';
import * as schemes from '../../api/Schemes';

export const fetchProducts = refres => async (dispatch, getState) => {
    try {
        const limit = getState().products.limit;
        const offset = getState().products.offset;

        const ids = getState().products.products;

        if (ids.length > 0 && !refres) {
            return;
        }

        dispatch(actions.fetchProductsStart());
        const res = await Api.Products.fetchProducts(offset, limit);
        const { result, entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(actions.fetchProductsOk({
            ids: result,
            entities,
        }));
    } catch (error) {
        dispatch(actions.fetchProductsError(error.message));
    }
};