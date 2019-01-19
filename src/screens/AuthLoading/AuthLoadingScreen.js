import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation'; // eslint-disable-line
import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { AppLoading } from 'expo';
import { Loader } from '../../components';
import screens from '../../navigation/screens';
import * as appOperations from '../../modules/app/appOperations';
import { loadFont } from '../../utils';

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// Screen-helper
// TODO: Change AuthLoadingScreen;
const AuthLoadignScreen = ({ isLoaded }) => {
    if (!isLoaded) {
        return (
            <AppLoading />
        );
    }

    return (
        <SafeAreaView style={s.container}>
            <Loader />
        </SafeAreaView>
    );
};

const mapDispatchToProps = {
    init: appOperations.init,
};

export default compose(
    connect(
        undefined,
        mapDispatchToProps,
    ),
    withStateHandlers({
        isLoaded: false,
    }, {
        loaded: () => () => ({
            isLoaded: true,
        }),
    }),
    lifecycle({
        async componentDidMount() {
            await loadFont();
            this.props.loaded();
            try {
                console.log('Init...');
                await this.props.init();
                console.log('Inited!');
                this.props.navigation.navigate(screens.AuthorizedApp);
            } catch (error) {
                console.log('Error token not found');
                this.props.navigation.navigate(screens.UnauthorizedApp);
            }
        },
    }),
)(AuthLoadignScreen);