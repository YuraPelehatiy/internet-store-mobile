import { normalize } from 'normalizr';
import * as Api from '../../api/Api';
import * as actions from './productsActions';
import * as schemes from '../../api/Schemes';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(actions.fetchProductsStart);
        const res = await Api.Products.fetchProducts();
        const { result, entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(actions.fetchProductsOk({
            ids: result,
            entities,
        }));
    } catch (error) {
        dispatch(actions.fetchProductsError(error.message));
    }
};