import { createAction } from 'redux-actions';
import * as constants from './wishesConstants';

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const addWishStart = createAction(constants.ADD_WISH_START);
export const addWishOk = createAction(constants.ADD_WISH_OK);
export const addWishError = createAction(constants.ADD_WISH_ERROR);

export const removeWishStart = createAction(constants.REMOVE_WISH_START);
export const removeWishOk = createAction(constants.REMOVE_WISH_OK);
export const removeWishError = createAction(constants.REMOVE_WISH_ERROR);

export const getWishesStart = createAction(constants.GET_WISHES_START);
export const getWishesOk = createAction(constants.GET_WISHES_OK);
export const getWishesError = createAction(constants.GET_WISHES_ERROR);