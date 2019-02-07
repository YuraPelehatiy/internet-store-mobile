import { createAction } from 'redux-actions';
import * as constants from './searchConstants';

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const fetchMoreSearch = createAction(constants.FETCH_MORE);

export const setSearchValue = createAction(constants.SET_SEARCH_VALUE);

export const clearProductsIds = createAction(constants.CLEAR_PRODUCTS_IDS);

export const clearPreviousSearchResult = createAction(constants.CLEAR_PREVIOUS_SEARCH_RESULT);

export const getCountProductsStart = createAction(constants.GET_COUNT_PRODUCTS_START);
export const getCountProductsOk = createAction(constants.GET_COUNT_PRODUCTS_OK);
export const getCountProductsError = createAction(constants.GET_COUNT_PRODUCTS_ERROR);