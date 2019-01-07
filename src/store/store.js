import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/RootModule';

const store = createStore(
    rootModule,
    applyMiddleware(
        reduxThunk,
    ),
);

export default store;