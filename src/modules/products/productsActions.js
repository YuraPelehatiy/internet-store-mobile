import { createAction } from 'redux-actions';
import * as constants from './productsConstants';

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const fetchMore = createAction(constants.FETCH_MORE);

export const getCountProductsStart = createAction(constants.GET_COUNT_PRODUCTS_START);
export const getCountProductsOk = createAction(constants.GET_COUNT_PRODUCTS_OK);
export const getCountProductsError = createAction(constants.GET_COUNT_PRODUCTS_ERROR);