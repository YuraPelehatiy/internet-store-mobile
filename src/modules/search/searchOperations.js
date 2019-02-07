import { normalize } from 'normalizr';
import * as Api from '../../api/Api';
import * as actions from './searchActions';
import * as schemes from '../../api/Schemes';

export const fetchProductsSearch = () => async (dispatch, getState) => {
    try {
        const isLoading = getState().search.isLoading;

        const limit = getState().search.limit;
        const offset = getState().search.offset;
        const search = getState().search.search;

        if (isLoading) {
            return;
        }

        dispatch(actions.fetchProductsStart());
        const res = await Api.Products.fetchProductsBySearch(offset, limit, search);
        const { result, entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(actions.fetchProductsOk({
            ids: result,
            entities,
        }));
    } catch (error) {
        dispatch(actions.fetchProductsError(error.message));
    }
};

export const getProductsCountSearch = () => async (dispatch, getState) => {
    try {
        const search = getState().search.search;
        const res = await Api.Products.getProductsCountBySearch(search);
        const count = res.data.count;

        dispatch(actions.getCountProductsStart());
        dispatch(actions.getCountProductsOk({
            count,
        }));
    } catch (error) {
        dispatch(actions.getCountProductsError(error.message));
    }
};