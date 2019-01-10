import { combineReducers } from 'redux';
import app from './app/appReducer';
import cart from './cart/cartReducer';
import products from './products/productsReducer';
import entities from './entities/entitiesReducer';

export default combineReducers({
    app,
    cart,
    products,
    entities,
});