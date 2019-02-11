import { combineReducers } from 'redux';
import app from './app/appReducer';
import cart from './cart/cartReducer';
import products from './products/productsReducer';
import search from './search/searchReducer';
import wishes from './wishes/wishesReducer';
import entities from './entities/entitiesReducer';

export default combineReducers({
    app,
    cart,
    products,
    search,
    wishes,
    entities,
});