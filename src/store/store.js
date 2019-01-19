import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootModule from '../modules/RootModule';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'app'],
};

const persistedReducer = persistReducer(persistConfig, rootModule);

const composeEnhancers = composeWithDevTools({ realtime: true });
export const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(reduxThunk),
    ),
);

/* const store = createStore(
    rootModule,
    applyMiddleware(
        reduxThunk,
        // devToolsEnhancer,
    ),
); */

/*
export const store = createStore(
    persistedReducer,
    applyMiddleware(
        reduxThunk,
        // devToolsEnhancer,
    ),
);
*/

export const persistor = persistStore(store);

// export default store;