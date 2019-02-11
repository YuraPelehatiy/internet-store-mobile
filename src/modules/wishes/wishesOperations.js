import { normalize } from 'normalizr';
import _ from 'lodash';
import * as schemes from '../../api/Schemes';
import * as wishesActions from './wishesActions';
import * as Api from '../../api/Api';
import * as AlertService from '../../services/AlertService';

export const fetchProductsByIds = () => async (dispatch, getState) => {
    try {
        const products = getState().entities.products;
        const items = getState().wishes.items;
        const isLoading = getState().wishes.isLoading;

        // Get ids of undefined products to fetch
        const ids = Object.keys(items);
        let fetchIds = ids.map((id) => {
            if (products[id] === undefined) {
                return id;
            }

            return false;
        });
        fetchIds = _.compact(fetchIds);


        if (fetchIds.length === 0 || isLoading) {
            return;
        }

        dispatch(wishesActions.fetchProductsStart());

        const res = await Api.Cart.fetchProductsByIds(fetchIds);
        const { entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(wishesActions.fetchProductsOk({
            entities,
        }));
    } catch (error) {
        dispatch(wishesActions.fetchProductsError(error.message));
    }
};

export const getWishes = () => async (dispatch) => {
    try {
        dispatch(wishesActions.getWishesStart());

        const res = await Api.Wishes.getWishes();

        dispatch(wishesActions.getWishesOk({
            wishes: res.data,
        }));
    } catch (error) {
        dispatch(wishesActions.getWishesError({
            error: error.message,
        }));
    }
};

export const addWish = id => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        if (!user.id) {
            AlertService.error(
                'Error: Add product to wishes',
                'Sorry, you cannot add this product to wishes you need sing in',
            );

            return;
        }

        dispatch(wishesActions.addWishStart({ id }));

        await Api.Wishes.addWish(id);

        dispatch(wishesActions.addWishOk({ id }));
    } catch (error) {
        dispatch(wishesActions.addWishError({
            error: error.message,
            id,
        }));
    }
};

export const removeWish = id => async (dispatch) => {
    try {
        dispatch(wishesActions.removeWishStart({ id }));

        await Api.Wishes.removeWish(id);

        dispatch(wishesActions.removeWishOk({ id }));
    } catch (error) {
        dispatch(wishesActions.removeWishError({
            error: error.message,
            id,
        }));
    }
};