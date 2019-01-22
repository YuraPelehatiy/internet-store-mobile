import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { compose, withState, withHandlers } from 'recompose';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigation/RootNavigator';
import { store, persistor } from './store/store';
import LoadingScreen from './screens/Loading/LoadingScreen';
import { loadFont } from './utils';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const AppContainer = createAppContainer(AppNavigator);

const App = ({
    asyncLoad,
    onFinish,
    showLoading,
}) => {
    if (showLoading) {
        return (
            <AppLoading
                startAsync={asyncLoad}
                onFinish={onFinish}
                onError={console.warn}
            />
        );
    }


    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<LoadingScreen />}>
                <AppContainer />
            </PersistGate>
        </Provider>
    );
};

const appEnhancer = compose(
    withState('showLoading', 'setLoadingStatus', true),
    withHandlers({
        asyncLoad: () => async () => {
            await Promise.all([
                loadFont(),
            ]);
        },
        onFinish: props => () => {
            props.setLoadingStatus(false);
        },
    }),
);

export default appEnhancer(App);