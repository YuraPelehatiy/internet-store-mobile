import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigation/RootNavigator';
import { store, persistor } from './store/store';

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppContainer />
        </PersistGate>
    </Provider>
);

export default App;