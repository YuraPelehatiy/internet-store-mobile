import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as constants from './wishesConstants';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    wishesInProgress: [
        // Array of products' ids that adding or removing
    ],
    errorWishes: [
        // Array of products' ids that get crash adding or removing
    ],
};

export default handleActions({
    [constants.FETCH_PRODUCTS_START]: state => ({
        ...state,
        isLoading: true,
        error: null,
    }),
    [constants.FETCH_PRODUCTS_OK]: state => ({
        ...state,
        isLoading: false,
    }),
    [constants.FETCH_PRODUCTS_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
    }),
    [constants.ADD_WISH_START]: (state, action) => ({
        ...state,
        wishesInProgress: [...state.wishesInProgress].concat(action.payload.id),
        errorWishes: _.pull(state.errorWishes, action.payload.id),
        error: null,
    }),
    [constants.ADD_WISH_OK]: (state, action) => ({
        ...state,
        items: [...state.items].concat(action.payload.id),
        wishesInProgress: _.pull(state.wishesInProgress, action.payload.id),
    }),
    [constants.ADD_WISH_ERROR]: (state, action) => ({
        ...state,
        wishesInProgress: _.pull(state.wishesInProgress, action.payload.id),
        errorWishes: [...state.errorWishes].concat(action.payload.id),
        error: action.payload.error,
    }),
    [constants.REMOVE_WISH_START]: (state, action) => ({
        ...state,
        wishesInProgress: [...state.wishesInProgress].concat(action.payload.id),
        errorWishes: _.pull(state.errorWishes, action.payload.id),
        error: null,
    }),
    [constants.REMOVE_WISH_OK]: (state, action) => ({
        ...state,
        items: _.pull(state.items, action.payload.id),
        wishesInProgress: _.pull(state.wishesInProgress, action.payload.id),
    }),
    [constants.REMOVE_WISH_ERROR]: (state, action) => ({
        ...state,
        wishesInProgress: _.pull(state.wishesInProgress, action.payload.id),
        errorWishes: [...state.errorWishes].concat(action.payload.id),
        error: action.payload.error,
    }),
}, initialState);