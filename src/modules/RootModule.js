import { combineReducers } from 'redux';
import products from './products/productsReducer';
import entities from './entities/entitiesReducer';

export default combineReducers({
    products,
    entities,
});