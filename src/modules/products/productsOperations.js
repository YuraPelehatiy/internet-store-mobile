import { normalize } from 'normalizr';
import * as Api from '../../api/Api';
import * as actions from './productsActions';
import * as schemes from '../../api/Schemes';

export const fetchProducts = refres => async (dispatch, getState) => {
    try {
        const isLoading = getState().products.isLoading;

        const limit = getState().products.limit;
        const offset = getState().products.offset;

        const ids = getState().products.products;

        if ((ids.length > 0 && !refres) || isLoading) {
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

export const getProductsCount = () => async (dispatch) => {
    try {
        const res = await Api.Products.getProductsCount();
        const count = res.data[0].count;

        dispatch(actions.setProductsCount({
            all: count,
        }));
    } catch (error) {
        console.log('Errro get count products');
    }
};