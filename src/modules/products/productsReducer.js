import { handleActions } from 'redux-actions';
import * as constants from './productsConstants';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    limit: 12,
    offset: 0,
    part: 1,
};

export default handleActions(
    {
        [constants.FETCH_PRODUCTS_START]: state => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.FETCH_PRODUCTS_OK]: (state, actions) => ({
            ...state,
            isLoading: false,
            products: actions.payload.ids,
        }),
        [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
            ...state,
            isLoading: false,
            error: actions.payload,
        }),
        [constants.FETCH_MORE]: (state, actions) => fetchMoreHandler(state, actions),
    },
    initialState,
);

function fetchMoreHandler(state, actions) {
    if (state.limit > state.products.length) {
        return ({
            ...state,
        });
    }

    return ({
        ...state,
        part: actions.payload.part,
        // offset: actions.payload.part * state.limit,
        limit: actions.payload.part * state.limit,
    });
}