import { combineReducers } from 'redux';
import cart from './cart/cartReducer';
import products from './products/productsReducer';
import entities from './entities/entitiesReducer';

export default combineReducers({
    cart,
    products,
    entities,
});