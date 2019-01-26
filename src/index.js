import React from 'react';
import {
    Platform,
    UIManager,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import {
    compose,
    withState,
    withHandlers,
    lifecycle,
} from 'recompose';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigation/RootNavigator';
import { store, persistor } from './store/store';
import LoadingScreen from './screens/Loading/LoadingScreen';
import { loadFont, loadI18n } from './utils';

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
    withState('isGoOut', 'setGoOut', true),
    withState('timeoutId', 'setTimeoutId', undefined),
    withHandlers({
        asyncLoad: () => async () => {
            await Promise.all([
                loadFont(),
                loadI18n(),
            ]);
        },
        onFinish: props => () => {
            props.setLoadingStatus(false);
        },
        navigateBack: props => () => {
            ToastAndroid.show('Press back button twice if you want to go out', ToastAndroid.SHORT);
            const isGoOut = props.isGoOut;
            props.setGoOut(false);
            if (props.timeoutId) {
                clearTimeout(props.timeoutId);
                props.setTimeoutId(undefined);
            }
            const id = setTimeout(() => props.setGoOut(true), 3000);
            props.setTimeoutId(id);
            return isGoOut;
        },
    }),
    lifecycle({
        componentDidMount() {
            BackHandler.addEventListener('hardwareBackPress', this.props.navigateBack);
        },
    }),
);

export default appEnhancer(App);