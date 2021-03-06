import { handleActions } from 'redux-actions';
import * as constants from './searchConstants';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    limit: 12,
    offset: 0,
    part: 0,
    search: '',
    searchHistory: [],
    allProductsCount: 0,
    smallError: null,
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
            products: [...state.products].concat(actions.payload.ids),
        }),
        [constants.FETCH_PRODUCTS_ERROR]: (state, actions) => ({
            ...state,
            isLoading: false,
            error: actions.payload,
        }),
        [constants.FETCH_MORE]: (state, actions) => fetchMoreHandler(state, actions),
        [constants.SET_SEARCH_VALUE]: (state, actions) => ({
            ...state,
            search: actions.payload.value,
        }),
        [constants.CLEAR_PRODUCTS_IDS]: state => ({
            ...state,
            products: [],
            allProductsCount: 0,
        }),
        [constants.CLEAR_PREVIOUS_SEARCH_RESULT]: state => ({
            ...state,
            products: [],
            allProductsCount: 0,
            search: '',
        }),
        [constants.GET_COUNT_PRODUCTS_START]: state => ({
            ...state,
            smallError: null,
        }),
        [constants.GET_COUNT_PRODUCTS_OK]: (state, actions) => ({
            ...state,
            allProductsCount: actions.payload.count,
        }),
        [constants.GET_COUNT_PRODUCTS_ERROR]: (state, actions) => ({
            ...state,
            smallError: actions.payload,
        }),
    },
    initialState,
);

function fetchMoreHandler(state, actions) {
    if (state.limit + state.offset > state.products.length) {
        return ({
            ...state,
        });
    }

    return ({
        ...state,
        part: actions.payload.part,
        offset: actions.payload.part * state.limit,
    });
}